
  const changingText = document.querySelector(".changing-text");
  const texts = changingText.querySelectorAll("span");
  let currentIndex = 0;

  function changeTextAnimation() {
    changingText.style.opacity = 0;
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      changingText.innerText = texts[currentIndex].innerText;
      changingText.style.opacity = 1;
    }, 400); // Adjust the value for the fade-in time
  }

  setInterval(changeTextAnimation, 6000); // Set the interval time to 6 seconds
  changeTextAnimation(); // Call the function to show the first text immediately

