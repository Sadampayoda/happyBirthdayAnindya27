const divs = document.querySelectorAll('.konten-click');
const contents = document.querySelectorAll('.konten');

// Fungsi untuk menampilkan konten yang sesuai dengan div yang diklik
function showContent(index) {
  // Sembunyikan semua konten terlebih dahulu
  contents.forEach((content) => {
    content.style.display = 'none';
  });

  // Tampilkan konten yang sesuai dengan div yang diklik
  contents[index].style.display = 'block';

  // Hapus kelas active dari semua div
  divs.forEach((div) => {
    div.classList.remove('active');
  });

  // Tambahkan kelas active pada div yang diklik
  divs[index].classList.add('active');
}

// Tambahkan event listener untuk setiap div
divs.forEach((div, index) => {
  div.addEventListener('click', () => {
    showContent(index);
  });
});

// Tampilkan konten pertama secara default ketika halaman dimuat
showContent(0);