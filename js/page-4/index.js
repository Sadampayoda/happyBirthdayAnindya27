function createCircles() {
    const lineContainer = document.querySelector('.line-container');
    const circleCount = 39; // Jumlah lingkaran, mengingat kita memulai dari garis pertama

    for (let i = 1; i <= circleCount; i++) {
      const circle = document.createElement('div');
      circle.classList.add('circle');
      lineContainer.appendChild(circle);
    }
  }

  // Panggil fungsi untuk membuat lingkaran ketika halaman selesai dimuat
  document.addEventListener('DOMContentLoaded', createCircles);