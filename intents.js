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
    intent: "Pembelian online",
    patterns: [
      "beli online",
      "bisa beli di tokopedia",
      "bisa beli di shopee",
      "ada di marketplace",
      "jual di tokopedia",
      "jual di shopee",
      "bisa pesan online",
      "beli lewat internet",
      "ada di online store",
      "ada di e-commerce",
      "pembelian online",
      "toko online"
    ],
    response: `Mohon maaf, saat ini kami hanya melayani pembelian melalui toko offline resmi. 
  Silakan kunjungi toko resmi Dunlop/Falken terdekat untuk pembelian produk.`
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
  },
  {
  intent: "Product Information - Why Dunlop",
  patterns: ["kenapa dunlop", "why dunlop", "mengapa dunlop", "alasan pilih dunlop"],
  response: `Drivemate,

Dunlop adalah merek ban terpercaya yang telah terbukti menghadirkan kualitas, keamanan, dan performa tinggi selama lebih dari 100 tahun. Dengan teknologi canggih dan inovasi terus-menerus, ban Dunlop dirancang untuk memberikan kinerja (performance) yang optimal dan terbaik, sehingga dapat memberikan keamanan dan kenyamanan dalam pengalaman berkendara Anda. Apapun jenis kendaraan atau gaya berkendara Anda, Dunlop memiliki pilihan ban yang sesuai untuk memberikan pengalaman berkendara terbaik.`
},
{
  intent: "Product Information - Load index",
  patterns: ["load index", "indeks beban", "arti load index"],
  response: `Load Index adalah angka yang menunjukkan kemampuan maksimal ban dalam menanggung beban saat kendaraan melaju dalam kecepatan tertentu. Angka ini biasanya tercantum pada dinding ban, berdekatan dengan informasi ukuran ban. 

Untuk lebih lengkapnya, Drivemate bisa membaca artikelnya di https://www.dunlop.co.id/id/news/pahami-load-index-ban-hindari-risiko-tingkatkan-performa yaa!`
},
{
  intent: "Product Information - Speed rating",
  patterns: ["speed rating", "indeks kecepatan", "kode kecepatan ban"],
  response: `Speed Rating / Index Kecepatan adalah kode yang menunjukkan batas kecepatan maksimum yang dapat ditanggung oleh sebuah ban dalam kondisi optimal. Informasi ini sangat penting bagi pengendara untuk memastikan ban yang digunakan sesuai dengan kebutuhan kendaraan mereka dan biasanya terletak pada dinding ban (sidewall).

Untuk lebih lengkapnya, Drivemate bisa membaca artikelnya di https://www.dunlop.co.id/id/news/memahami-indeks-kecepatan-ban-mobil-dan-pengaruhnya yaa!`
},
{
  intent: "Product Information - Tire sidewall code",
  patterns: ["kode ban", "kode di ban", "sidewall code"],
  response: `Kode yang terdapat pada sisi samping (sidewall) ban merupakan informasi penting yang berisikan terkait ukuran, tipe, dan karakteristik ban yang nantinya disesuikan dengan jenis kendaraan kamu.

Untuk lebih lengkapnya, Drivemate bisa membaca artikelnya di https://www.dunlop.co.id/id/news/cara-membaca-kode-di-ban-mobil-anda yaa!`
},
{
  intent: "Product Information - Change tire timing",
  patterns: ["kapan ganti ban", "tanda ban harus diganti", "waktu ganti ban"],
  response: `Jika kamu ingin memeriksa apakah ban kamu perlu untuk segera diganti atau tidak, ada beberapa hal yang perlu diperiksa, yakni antara lain:
1. Ketebalan Telapak Mencapai Batas TWI 
2. Adanya Kerusakan Fisik pada Ban (Robek, Benjol, Retak, dll)
3. Kehilangan Tekanan Udara Secara Terus-Menerus
4. Keausan yang tidak merata

Apabila Drivemate mengalami hal-hal diatas, disarankan untuk segera mengganti ban kamu demi keamanan, kenyamanan, dan keselamatan dalam berkendara. Selalu jadi pelopor keselamatan dalam berkendara dan semuanya bisa dimulai dari penggunaan ban yang baik dan prima.

Untuk lebih lengkapnya, Drivemate bisa membaca artikelnya di https://www.dunlop.co.id/id/news/kapan-harus-ganti-ban-tanda-tanda-penting yaa!`
},
{
  intent: "Product Information - Spooring and balancing",
  patterns: ["spooring", "balancing", "spooring balancing", "ban bergetar"],
  response: `Spooring adalah proses penyelarasan sudut roda kendaraan agar sesuai dengan standar pabrikan mobil. Tiga komponen penting dalam spooring adalah camber, caster, dan toe. Ketika salah satu atau lebih sudut ini menyimpang, kendaraan akan kehilangan arah lurus dan menyebabkan keausan ban tidak merata.

Balancing adalah proses menyeimbangkan distribusi beban roda agar putaran ban berjalan mulus dan stabil. Tanpa balancing, kendaraan akan mengalami getaran berlebih, terutama saat melaju di kecepatan tinggi.

Adapun manfaat Spooring & Balancing antara lain:
1. Mencegah Keausan Ban yang Tidak Merata
2. Mengurangi Getaran dan Meningkatkan Kenyamanan
3. Menjaga Arah dan Keseimbangan Kendaraan
4. Menghemat Konsumsi BBM
5. Menghindari Kerusakan Komponen Lain

Untuk lebih lengkapnya, Drivemate bisa membaca artikelnya di https://www.dunlop.co.id/id/news/mobil-bergetar-atau-belok-sendiri-segera-cek-spooring-dan-balancing yaa!`
},
{
  intent: "Product Information - Old or secondhand tire",
  patterns: ["ban bekas", "ban second", "ban seken"],
  response: `Harga yang relatif murah memang menjadi daya tarik konsumen dalam membeli ban bekas. Akan tetapi, membeli ban bekas merupakan hal yang sangat tidak disarankan karena dapat membahayakan pengendara dan penumpang kendaraan.

Untuk lebih lengkapnya, Drivemate bisa membaca artikelnya di https://www.dunlop.co.id/id/news/ketahui-untung-rugi-dan-bahaya-membeli-ban-mobil-bekas yaa!`
},
{
  intent: "Product Information - Spare tire",
  patterns: ["ban cadangan", "ban serep", "spare tire"],
  response: `Ban cadangan merupakan salah satu komponen penting yang seringkali dilupakan oleh pemilik kendaraan. Agar tetap layak digunakan saat darurat, Drivemate perlu memperhatikan hal berikut:
1. Hindari paparan sinar matahari langsung
2. Perhatikan kelembaban ruangan
3. Posisikan ban dengan benar
4. Periksa tekanan udara berkala
5. Bersihkan secara rutin

Untuk lebih lengkapnya, Drivemate bisa membaca artikelnya di https://www.dunlop.co.id/id/news/begini-cara-simpan-ban-serep-mobil-agar-tetap-awet yaa!`
},
{
  intent: "Product Information - Broken tire",
  patterns: ["ban rusak", "ciri ban rusak", "ban retak", "ban bocor terus"],
  response: `Ban yang sudah mengalami kerusakan akan sangat berbahaya bila tidak disadari lebih awal. Berikut ciri-ciri ban yang rusak:
1. Bocor terus menerus
2. Ban sudah botak atau aus
3. Retak pada dinding ban (sidewall)

Untuk tips pencegahan, Drivemate bisa membaca artikelnya di https://www.dunlop.co.id/id/news/kenali-kerusakan-ban-anda-saat-perjalanan-jauh-untuk-keselamatan-maksimal yaa!`
},
{
  intent: "Product Information - 2W product details (OEM)",
  patterns: ["produk motor", "ban motor", "oem 2w", "ban dunlop motor"],
  response: `Drivemate, Diva informasikan bahwa Dunlop pernah dipercaya untuk memasok ban untuk model-model motor seperti:
- Yamaha V-IXION
- Yamaha NMAX
- Kawasaki Ninja 250
dan lain-lain.`
},
{
  intent: "Product Information - Production year",
  patterns: ["tahun produksi", "kode produksi ban", "produksi ban"],
  response: `Setiap ban memiliki tahun produksi yang menunjukkan kapan ban tersebut dibuat. Informasi ini bisa kamu lihat di dinding samping ban (sidewall), biasanya dalam bentuk kode empat digit, misalnya “3423” berarti minggu ke-34 tahun 2023.`
},
{
  intent: "Product Information - Tire expiry",
  patterns: ["masa kedaluwarsa ban", "ban kadaluarsa", "umur ban"],
  response: `Pada prinsipnya, tidak ada masa kedaluwarsa untuk ban. Asalkan disimpan dan dirawat dengan baik, ban tetap awet. Cek kondisi retak, getas, atau Tread Wear Indicator (TWI) untuk memastikan kelayakan pakainya.`
},
{
  intent: "Product Information - Tread pattern types",
  patterns: ["jenis pola tapak", "tread pattern", "pola ban"],
  response: `Tiap ban punya desain pola tapak berbeda, seperti:
1. Ban Simetris – pola sama di kedua sisi.
2. Ban Asimetris – sisi luar dan dalam berbeda fungsinya.
3. Ban Directional – pola berbentuk “V” yang hanya berputar ke satu arah.
Masing-masing punya keunggulan untuk kondisi jalan dan gaya berkendara tertentu.`
},
{
  intent: "Product Information - Radial vs Bias tyre",
  patterns: ["ban radial", "ban bias", "perbedaan radial dan bias"],
  response: `Ban radial memiliki lapisan serat tegak lurus (90°) dan diperkuat sabuk baja, lebih stabil dan efisien. Ban bias memiliki lapisan serat menyilang (30–40°), lebih empuk tapi cepat panas pada kecepatan tinggi.`
},
{
  intent: "Product Information - Reading tyre size",
  patterns: ["cara baca ukuran ban", "ukuran ban mobil", "kode ukuran ban"],
  response: `Setiap ban memiliki kode seperti 205/60 R15 91H yang menunjukkan lebar, rasio tinggi, tipe konstruksi, diameter pelek, indeks beban, dan indeks kecepatan.`
},
{
  intent: "Product Information - Tyre upsize",
  patterns: ["upsize ban", "ganti ukuran ban", "ban lebih besar"],
  response: `Drivemate boleh melakukan upsize ban asalkan diameter total tidak berubah lebih dari ±3% dari ukuran standar. Gunakan Tire Size Calculator untuk perbandingan ukuran lama dan baru.`
},
{
  intent: "Product Information - Konstruksi ban mobil penumpang",
  patterns: ["konstruksi ban", "bagian ban mobil", "struktur ban mobil"],
  response: `Konstruksi ban mobil penumpang terdiri dari tread, nylon band, steel belts, sidewall, casing ply, bead apex, bead, dan inner liner.`
},
{
  intent: "Product Information - Fungsi-fungsi ban",
  patterns: ["fungsi ban", "kegunaan ban", "peran ban"],
  response: `Fungsi ban terdiri dari 4 hal utama:
1. Menyangga beban kendaraan
2. Memindahkan gaya gerak dan berhenti
3. Menyerap kejutan jalan
4. Mengarahkan arah kendaraan`
},
{
  intent: "Product Information - Ban dalam dan tubeless",
  patterns: ["ban dalam", "ban tubeless", "perbedaan tubeless"],
  response: `Dunlop menghadirkan dua jenis ban: ban dengan ban dalam (Tube Type) dan ban tanpa ban dalam (Tubeless). Tubeless lebih aman karena tidak mudah kehilangan tekanan udara mendadak dan lebih awet.`
},
{
  intent: "Product Information - Aspect Ratio",
  patterns: ["aspect ratio", "rasio ban", "profil ban"],
  response: `Aspect Ratio adalah perbandingan antara tinggi penampang ban dengan lebar penampang ban. Contoh: 65 Series berarti tinggi ban 65% dari lebarnya — semakin kecil angkanya, semakin tipis profil ban.`
},
{
  intent: "Product Information - Dunlop design philosophy",
  patterns: ["filosofi desain dunlop", "dunlop philosophy", "konsep desain dunlop"],
  response: `Design philosophy ban Dunlop terbagi menjadi 3: 
1. Love — berangkat dari rasa cinta, keselamatan, dan kenyamanan. 
2. Trust — kepercayaan pelanggan mendorong inovasi berkelanjutan. 
3. Challenge — tantangan untuk terus berinovasi demi keselamatan dan kelestarian lingkungan.`
}

];

export default intents;
