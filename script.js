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
function addMessage(sender, text) {
  const div = document.createElement("div");
  div.classList.add(sender === "user" ? "user-message" : "bot-message");
  const msg = document.createElement("div");
  msg.classList.add("message");
  msg.innerHTML = sender === "bot" ? markdownToHTML(text) : text;
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
// Logika utama chatbot
// =====================================================
async function getBotResponse(userText) {
  try {
    memory[sessionId].push({ role: "user", content: userText });
    const shortHistory = memory[sessionId].slice(-6);

    // 1️⃣ Deteksi intent
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
    // Intent: LOKASI (gunakan AI untuk pencarian langsung)
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

            Berikut daftar lokasi Dunlop Shop:
            ${lokasiText}

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
    // Intent: LAINNYA
    // =====================================================
    if (intent === "lainnya") {
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
        { role: "user", content: userText },
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
    }

    return "Maaf, saya tidak dapat memahami permintaan Anda.";
  } catch (error) {
    console.error("Error:", error);
    return "Terjadi kesalahan koneksi ke server AI.";
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
  addMessage("bot", botReply);
});
