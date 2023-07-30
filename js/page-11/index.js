// function zoomIn() {
//     const image = document.getElementById('zoom-image');
//     const text = document.getElementById('zoom-text');

//     // Efek zoom in gambar
//     image.style.transform = 'scale(1.1)';

//     // Tampilkan elemen kalimat
//     text.classList.remove('hidden');
//     image.classList.add('blur')
//     text.style.opacity = 1;
// }

// function zoomOut() {
//     const image = document.getElementById('zoom-image');
//     const text = document.getElementById('zoom-text');

//     // Kembalikan ukuran gambar ke semula
//     image.style.transform = 'scale(1)';

//     // Sembunyikan elemen kalimat
//     text.style.opacity = 0;
//     setTimeout(() => {
//         text.classList.add('hidden');
//         image.classList.remove('blur')
//     }, 500); // Waktu delay sebelum menyembunyikan elemen kalimat (sama dengan durasi animasi)
// }

// JavaScript



const imageContainers = document.querySelectorAll('.image-container');
const zoomTexts = document.querySelectorAll('[id^="zoom-text-"]');
const zoomImages = document.querySelectorAll('[id^="zoom-image-"]');
const hide = document.querySelectorAll('[id^="hidden-"]'); 

function showText(imageNum) {
  zoomImages.forEach((image, index) => {
    if (index + 1 === imageNum) {
      image.style.transform = 'scale(1.2)'; // Efek zoom pada gambar yang dipilih
    } else {
      image.style.transform = 'scale(1)'; // Kembalikan ukuran gambar lain ke semula
    }
    
  });

  zoomTexts.forEach((text, index) => {
    if (index + 1 === imageNum) {
      text.style.opacity = 1; // Tampilkan elemen kalimat pada gambar yang dipilih
      hide.classList.remove('hidden')
    } else {
      text.style.opacity = 0; // Sembunyikan elemen kalimat pada gambar lain
      hide.classList.add('hidden')
    }
  });

//   hide.forEach((hiddens,index) => {
//     if (index + 1 === imageNum) {
//         // text.style.opacity = 1; // Tampilkan elemen kalimat pada gambar yang dipilih
//         hiddens.classList.remove('hidden')
//       } else {
//         // text.style.opacity = 0; // Sembunyikan elemen kalimat pada gambar lain
//         hiddens.classList.add('hidden')
//       }
//   })


  
}

function hideText() {
  zoomImages.forEach((image) => {
    image.style.transform = 'scale(1)'; // Kembalikan ukuran gambar ke semula
  });

  zoomTexts.forEach((text) => {
    text.style.opacity = 0; // Sembunyikan elemen kalimat pada semua gambar
  });

  hide.forEach((text) => {
      hide.classList.add('hidden')
  })

}
