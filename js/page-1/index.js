let daftarFoto = [
    "img/page-1/1.png",
    "img/page-1/2.png",
    "img/page-1/3.png"
  ];

  var index = 0;

    var foto = document.getElementById("foto-page-1");

    function gantiFoto() {
      foto.style.opacity = 0; // Mengatur opasitas ke 0 (pudar)

      setTimeout(function() {
        foto.src = daftarFoto[index]; // Mengganti sumber gambar setelah efek pudar
        foto.style.opacity = 1; // Mengatur opasitas kembali ke 1 setelah gambar diganti
      }, 1000); // Menunggu 1 detik sebelum mengganti gambar dan mengembalikan opasitas
      // Nilai 1000 dalam setTimeout adalah durasi efek transisi dalam milidetik

      index++;
      if (index === daftarFoto.length) {
        index = 0;
      }
    }
setInterval(gantiFoto, 5000); 
