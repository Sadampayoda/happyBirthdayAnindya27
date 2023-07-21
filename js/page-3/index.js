
const kalimat = [
    'Selamat ulang tahun Sayang , Semoga hari ini penuh kebahagiaan dan ceria seperti dirimu yang selalu membuat hatiku degdegan mo eek wkwkw.',
    'Ucapan selamat ulang tahun untuk Gemoyku moy moy yang penuh cantik, Anindya. Semoga hari ini membawa kebahagiaan tak terbatas dan kenangan indah.',
    "Selamat ulang tahun, cintaku Sayang! Semoga setiap langkahmu selalu dipenuhi dengan berkah dan kesuksesan, cepetan mangkanya gmn mo sukses :v",
    "Di hari spesial ini (aslinya b aja V:), aku ingin mengucapkan selamat ulang tahun untuk wanita paling gemoy yang aku temui , makhluk spesias langka hehehehehe. Terima kasih telah membawa begitu banyak cinta dan keceriaan, kalau ini beneran",
    "Ucapan ulang tahun untuk pacarku Sayangkuhh muahhh. Semoga hidupmu dipenuhi dengan cinta, tawa, dan kebahagiaan sepanjang waktu, semoga badmood wkwk",
    "Selamat ulang tahun, Sayang Engkau adalah sosok yang selalu membuatku tersenyum dan berarti begitu banyak bagiku.",
    "Di hari spesial ini, aku ingin mengirimkan ucapan selamat ulang tahun untuk wanita yang selalu mengisi hidupku dengan warna-warni kebahagiaan, Sayang.",
    "Hari ini adalah hari yang istimewa karena ini adalah hari ulang tahunmu, Sayang. Semoga semua impianmu menjadi kenyataan.",
    "Ucapan selamat ulang tahun untukmu, Sayang! Engkau adalah sosok yang memberi arti sejati dalam hidupku.",
    "Selamat ulang tahun, pacarku yang luar biasa, Sayang. Semoga usiamu bertambah membawa berkah dan kebahagiaan tak terduga."
]


function tampilkanKataAcak() {
    const randomIndex = Math.floor(Math.random() * kalimat.length);
    const kataAcak = kalimat[randomIndex];
    document.getElementById("kalimat").innerText = kataAcak;
  }
  
  // Tambahkan event listener untuk tombol
  // document.getElementById("tombol-kalimat").addEventListener("click", function(){
  //   document.getElementById('kalimat').innerHTML = 'oke';
  // });