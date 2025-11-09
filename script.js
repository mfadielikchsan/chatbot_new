import Bytez from "./bytez.js";
import intents from "./intents.js";
import lokasiText from "./lokasi.js";

// =====================================================
// Inisialisasi Bytez
// =====================================================
const key = "a8a6ca8555acd69ad62f22039b9f8daa";
const sdk = new Bytez(key);
const model = sdk.model("openai/gpt-4.1");

// =====================================================
// Elemen UI
// =====================================================
const chatBox = document.getElementById("chat-box");
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");

// =====================================================
// Memori percakapan per user
// =====================================================
const sessionId = localStorage.getItem("sessionId") || crypto.randomUUID();
localStorage.setItem("sessionId", sessionId);
const memory = {};
if (!memory[sessionId]) memory[sessionId] = [];

// =====================================================
// Fungsi utilitas
// =====================================================
function addMessage(sender, text, attachment = null) {
  const div = document.createElement("div");
  div.classList.add(sender === "user" ? "user-message" : "bot-message");

  const msg = document.createElement("div");
  msg.classList.add("message");

  if (sender === "bot") {
    let html = markdownToHTML(text);

    if (attachment) {
      html += `<br><a href="${attachment.url}" download="${attachment.name}" 
                 style="color:#ffcc00;text-decoration:underline;" target="_blank">
                 ${attachment.label || attachment.name}
               </a>`;
    }

    msg.innerHTML = html;
  } else {
    msg.innerHTML = text;
  }

  div.appendChild(msg);
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function markdownToHTML(md) {
  return md
    .replace(/^#{1,6}\s?/gm, "")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
    .replace(/^\d+\.\s+(.*)$/gm, "• $1")
    .replace(/^\s*[-*]\s+(.*)$/gm, "• $1")
    .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>')
    .replace(/\n{2,}/g, "<br>")
    .replace(/\n/g, "<br>")
    .trim();
}

function getText(out) {
  if (!out) return "";
  if (typeof out === "string") return out;
  if (Array.isArray(out)) return getText(out[0]);
  if (typeof out === "object") return out.content || out.text || "";
  return "";
}

// =====================================================
// Fungsi tambahan: query optimization & deteksi ambigu
// =====================================================
async function optimizeQuery(userText) {
  try {
    const { error: optErr, output: optOut } = await model.run([
      {
        role: "system",
        content: `
          Kamu adalah AI asisten Dunlop Indonesia.
          Periksa pertanyaan user dan lakukan 2 hal:
          1. Jika pertanyaan ambigu atau kurang jelas → jawab dengan pertanyaan klarifikasi.
          2. Jika jelas → optimalkan pertanyaannya agar lebih spesifik dan ringkas sebelum dikirim ke AI utama.
          Jawab hanya dalam format JSON:
          {
            "status": "klarifikasi" / "optimized",
            "text": "pertanyaan yang sudah dioptimalkan atau pertanyaan klarifikasi"
          }
        `,
      },
      { role: "user", content: userText },
    ]);
    if (optErr) throw optErr;

    const resultText = getText(optOut).trim();
    try {
      return JSON.parse(resultText);
    } catch {
      return { status: "optimized", text: userText };
    }
  } catch (error) {
    console.error("OptimizeQuery Error:", error);
    return { status: "optimized", text: userText };
  }
}

// =====================================================
// Logika utama chatbot
// =====================================================
async function getBotResponse(userText) {
  try {
    // =====================================================
    // Cek intent produk dulu lewat AI
    // =====================================================
    const { error: preIntentErr, output: preIntentOut } = await model.run([
      {
        role: "system",
        content: `
          Kamu adalah AI pendeteksi intent pertanyaan Dunlop Indonesia.
          Tentukan apakah pertanyaan user **secara spesifik meminta daftar produk, ukuran, katalog, jenis ban Dunlop**.
          Jika iya → jawab "produk".
          Jika tidak → jawab "lainnya".
          Jawab hanya dengan salah satu kata: "produk" atau "lainnya".
        `,
      },
      { role: "user", content: userText },
    ]);

    if (preIntentErr) throw preIntentErr;
    const preIntent = getText(preIntentOut).trim().toLowerCase();

    // =====================================================
    // Intent: PRODUK
    // =====================================================
    if (preIntent === "produk") {
      const reply = "Berikut daftar produk Dunlop beserta semua ukuran:";
      memory[sessionId].push({ role: "user", content: userText });
      memory[sessionId].push({ role: "assistant", content: reply });
      return { 
        text: reply,
        attachment: {
          url: "Product List All Size.xlsx",
          name: "Product List All Size.xlsx",
          label: "Download Product List"
        }
      };
    }

    // =====================================================
    // Deteksi intent utama (lokasi / lainnya)
    // =====================================================
    memory[sessionId].push({ role: "user", content: userText });
    const shortHistory = memory[sessionId].slice(-6);

    const { error: intentErr, output: intentOut } = await model.run([
      ...shortHistory,
      {
        role: "system",
        content: `
          Kamu adalah AI pendeteksi intent Dunlop Indonesia.
          Jika user menanyakan lokasi pembelian ban Dunlop → jawab "lokasi".
          Selain itu → jawab "lainnya".
        `,
      },
      { role: "user", content: userText },
    ]);
    if (intentErr) throw intentErr;

    const intent = getText(intentOut).trim().toLowerCase();

    // =====================================================
    // Intent: LOKASI
    // =====================================================
    if (intent === "lokasi") {
      const { error: lokasiErr, output: lokasiOut } = await model.run([
        ...shortHistory,
        {
          role: "system",
          content: `
            Kamu adalah asisten resmi Dunlop Indonesia.
            Tugasmu: bantu user menemukan toko resmi Dunlop berdasarkan daftar berikut.
            Jika user menyebut kota, kabupaten, provinsi, atau area tertentu, tampilkan toko-toko yang relevan.
            Jika user tidak menyebut lokasi spesifik, minta mereka menyebutkan kota atau daerah.
            Jika user menanyakan online store → jawab bahwa Dunlop hanya ada toko offline dan beri pesan standar.

            Berikut daftar lokasi Dunlop Shop:
            ${lokasiText}.
            Ingat jawablah hanya berdasarkan data sumber yg saya berikan diatas. jangan berikan data yang tidak ada.

            Format jawaban rapi dan mudah dibaca, misalnya:
            Nama Toko, Alamat, Kota, Kontak.
          `,
        },
        { role: "user", content: userText },
      ]);
      if (lokasiErr) throw lokasiErr;

      const hasil = getText(lokasiOut).trim();
      memory[sessionId].push({ role: "assistant", content: hasil });
      return hasil;
    }

    // =====================================================
    // Intent: LAINNYA → query optimization & ambigu
    // =====================================================
    const queryCheck = await optimizeQuery(userText);

    if (queryCheck.status === "klarifikasi") {
      memory[sessionId].push({ role: "assistant", content: queryCheck.text });
      return queryCheck.text; 
    }

    const optimizedText = queryCheck.text;
    memory[sessionId].push({ role: "user", content: optimizedText });
    const shortHistoryOptimized = memory[sessionId].slice(-6);

    // =====================================================
    // Intent: LAINNYA → klasifikasi intent
    // =====================================================
    const daftarIntent = intents.map((i) => i.intent).join(", ");
    const { error: matchErr, output: matchOut } = await model.run([
      {
        role: "system",
        content: `
          Kamu adalah AI klasifikasi pertanyaan Dunlop Indonesia.
          Berikut daftar intent yang tersedia:
          ${daftarIntent}
          Tentukan intent yang paling sesuai berdasarkan pertanyaan user.
          Jawab hanya dengan nama intent yang paling relevan.
        `,
      },
      { role: "user", content: optimizedText },
    ]);
    if (matchErr) throw matchErr;

    const matchedIntent = getText(matchOut).trim();
    const matched = intents.find(
      (i) => i.intent.toLowerCase() === matchedIntent.toLowerCase()
    );

    const reply =
      matched?.response ||
      intents.find((i) => i.intent === "Unknown")?.response ||
      "Maaf, saya tidak menemukan jawaban untuk pertanyaan tersebut.";

    memory[sessionId].push({ role: "assistant", content: reply });
    return reply;

  } catch (error) {
    console.error("Error:", error);
    return "Terjadi kesalahan koneksi ke server. Silahkan coba beberapa saat lagi";
  }
}


// =====================================================
// Event handler
// =====================================================
chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const userText = userInput.value.trim();
  if (!userText) return;

  addMessage("user", userText);
  userInput.value = "";

  const typingDiv = document.createElement("div");
  typingDiv.classList.add("bot-message");
  typingDiv.innerHTML = `<div class="message"><em>Dunlop AI sedang mengetik...</em></div>`;
  chatBox.appendChild(typingDiv);
  chatBox.scrollTop = chatBox.scrollHeight;

  const botReply = await getBotResponse(userText);

  chatBox.removeChild(typingDiv);

  if (typeof botReply === "object" && botReply.attachment) {
    addMessage("bot", botReply.text, botReply.attachment);
  } else {
    addMessage("bot", botReply);
  }
});
