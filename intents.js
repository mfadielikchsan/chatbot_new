// intents.js
// Kumpulan intent lokal Dunlop AI (Diva Assistant)

const intents = [
  {
    intent: "Greetings",
    patterns: ["halo", "hai", "hi", "selamat pagi", "selamat siang", "selamat sore"],
    response: `Halo Drivemate, terima kasih sudah menghubungi Dunlop Tyres Indonesia!
Diva, asisten virtual cerdas Dunlop dan Falken Indonesia, siap membantu Drivemate hari ini.
Ada yang bisa Diva bantu?`
  },
  {
    intent: "Unknown",
    patterns: [],
    response: `Mohon maaf, saat ini Diva tidak memiliki informasi spesifik tentang topik tersebut.`
  },
  {
    intent: "Become a Distributor and Shop",
    patterns: ["jadi distributor", "buka toko", "reseller", "distributor dunlop", "jadi agen"],
    response: `Drivemate,

Terkait permintaan Anda, Diva mohon Drivemate untuk mengirimkan data berikut melalui email ke marketing@dunlop.co.id dengan subjek:
[Nama Distributor] – Permohonan Distributor, atau
[Nama Toko] – Permohonan Toko

Data yang perlu dilampirkan sebagai berikut:
Nama Distributor/Toko:
Nama Penanggung Jawab:
No. WhatsApp:
Email:
Alamat Distributor/Toko:
Produk yang ingin dijual (Ban Motor/Ban Mobil/Ban Truk):

Terima kasih atas kerja samanya.`
  },
  {
    intent: "Product export",
    patterns: ["ekspor", "export", "jual luar negeri"],
    response: `Mohon maaf, Drivemate, Dunlop dan Falken Indonesia hanya menjual ban untuk pasar domestik di Indonesia.`
  },
  {
    intent: "Factory location",
    patterns: ["pabrik", "lokasi pabrik", "dimana pabrik"],
    response: `Drivemate, Diva informasikan bahwa Dunlop dan Falken memiliki banyak pabrik yang tersebar di seluruh dunia. Salah satunya di Cikampek, Jawa Barat.`
  },
  {
    intent: "General Company Information",
    patterns: ["tentang dunlop", "profil perusahaan", "informasi perusahaan"],
    response: `Drivemate,

PT Sumi Rubber Indonesia merupakan perusahaan terkemuka yang bergerak di bidang industri manufaktur, dengan produk utamanya yaitu ban Dunlop dan Falken. PT Sumi Rubber Indonesia merupakan anak perusahaan dari Sumitomo Rubber Industries, Ltd. yang berpusat di Jepang. Kami memiliki pabrik yang berlokasi di Cikampek, Jawa Barat dan Head Office berlokasi di Wisma Indomobil, Jakarta.

Lebih lanjut, Drivemate dapat membaca sejarah perusahaan di:
https://www.dunlop.co.id/id/history
dan informasi terbaru terkait aktivitas perusahaan di:
https://www.dunlop.co.id/id/emagazine`
  },
  {
    intent: "Official website",
    patterns: ["website", "situs resmi", "alamat web", "link resmi"],
    response: `Berikut alamat website resmi Dunlop dan Falken Indonesia:
https://www.dunlop.co.id/id/`
  },
  {
    intent: "Official social media",
    patterns: ["instagram", "facebook", "tiktok", "youtube", "akun resmi", "sosial media"],
    response: `Berikut akun sosial media resmi Dunlop dan Falken:

Dunlop Indonesia
Instagram: https://www.instagram.com/dunloptyresid/
Facebook: https://www.facebook.com/dunloptyreindonesia/
Tiktok: https://www.tiktok.com/@dunloptyresid
Youtube: https://www.youtube.com/@DunlopTyresID
X (Twitter): https://x.com/dunloptyresid
WhatsApp: +62 812-9550-7273

Falken Indonesia
Instagram: https://www.instagram.com/falkentyreid/
Facebook: https://www.facebook.com/falkentyreid/
Tiktok: https://www.tiktok.com/@falkentyreid`
  },
  {
    intent: "Dunlop Sports",
    patterns: ["dunlop sports", "raket", "golf", "sport"],
    response: `Mohon maaf, Drivemate. Diva adalah asisten virtual untuk ban Dunlop dan Falken Indonesia. Jika kamu memiliki pertanyaan mengenai Dunlop Sports, bisa langsung menghubungi akun Instagram mereka di @dunlopsports.id.`
  },
  {
    intent: "Job opportunities email check",
    patterns: ["penipuan kerja", "email palsu", "rekrutmen palsu"],
    response: `Drivemate,

Diva informasikan bahwa alamat email resmi hanya menggunakan domain @dunlop.co.id.
Selain dari alamat tersebut, dapat dipastikan merupakan tindakan penipuan.

Perlu diketahui juga, proses rekrutmen di PT Sumi Rubber Indonesia tidak memungut biaya dalam bentuk apapun.
Kami mohon agar tetap berhati-hati terhadap oknum yang mengatasnamakan perusahaan kami.`
  },
  {
    intent: "Job opportunities in Dunlop",
    patterns: ["lowongan", "karir", "kerja di dunlop", "rekrutmen", "loker"],
    response: `Drivemate, untuk informasi lowongan pekerjaan bisa cek di website kami di:
https://www.dunlop.co.id/karir

Diva informasikan bahwa alamat email resmi hanya menggunakan domain @dunlop.co.id.
Selain dari alamat tersebut, dapat dipastikan merupakan tindakan penipuan.

Perlu diketahui juga, proses rekrutmen di PT Sumi Rubber Indonesia tidak memungut biaya dalam bentuk apapun.
Kami mohon agar tetap berhati-hati terhadap oknum yang mengatasnamakan perusahaan kami.`
  },
  {
    intent: "Freshgraduate job opportunities",
    patterns: ["freshgraduate", "lulusan baru", "baru lulus"],
    response: `Drivemate,

Diva informasikan bahwa freshgraduate dipersilahkan untuk mendaftar ke posisi yang tersedia selama memenuhi kualifikasi yang dibutuhkan.

Terkait lowongan kerja yang sedang tersedia, kamu bisa selalu memeriksa lowongan kerja terbaru melalui website Dunlop di:
https://www.dunlop.co.id/en/career

Rekrutmen yang tersedia tidak memungut biaya apapun. Harap berhati-hati terhadap penipuan mengatasnamakan PT Sumi Rubber Indonesia.`
  },
  {
    intent: "Internship opportunities",
    patterns: ["magang", "internship", "kerja praktik"],
    response: `Drivemate,

Pada saat ini, Diva informasikan bahwa Dunlop belum membuka posisi untuk karyawan magang. Akan tetapi, kamu bisa selalu memantau akun sosial media atau website terbaru Dunlop untuk mendapatkan informasi terbaru.`
  },
  {
    intent: "Available job opportunities",
    patterns: ["lowongan tersedia", "posisi tersedia"],
    response: `Drivemate,

Diva informasikan bahwa terkait lowongan kerja yang sedang tersedia, kamu bisa selalu memeriksa lowongan kerja terbaru melalui website Dunlop di:
https://www.dunlop.co.id/en/career

Rekrutmen yang tersedia tidak memungut biaya apapun. Harap berhati-hati terhadap penipuan mengatasnamakan PT Sumi Rubber Indonesia.`
  }
];

export default intents;
