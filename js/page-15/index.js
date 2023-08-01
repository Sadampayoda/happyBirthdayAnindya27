function startRandomizing() {
  
    // Hapus hasil sebelumnya
    document.getElementById("resultText").innerText = "";
  
    // Mulai mengacak angka selama 5 detik (5000 ms)
    var startTime = new Date().getTime();
    var interval = setInterval(function() {
      var currentTime = new Date().getTime();
      var elapsedTime = currentTime - startTime;
      if (elapsedTime >= 5000) {
        clearInterval(interval); // Hentikan animasi setelah 5 detik
        showResult(); // Tampilkan hasil setelah animasi berakhir
      } else {
        // Update angka secara acak selama animasi berlangsung
        var randomPercentage = Math.floor(Math.random() * 101); // Angka acak antara 0 dan 100
        document.getElementById("resultText").innerText = randomPercentage + "%";
      }
    }, 100); // Perbarui angka setiap 100 ms
  }
  
  function showResult(name1, name2) {
    // Hitung hasil persentase sesungguhnya
    // var randomPercentage = Math.floor(Math.random() * 101); // Angka acak antara 0 dan 100
    // var resultText = "Persentase cocok-cocokan antara " + name1 + " dan " + name2 + " adalah " + randomPercentage + "%.";
  
    // Tampilkan hasil sesungguhnya
    document.getElementById("resultText").innerText = '100%';
  }
  