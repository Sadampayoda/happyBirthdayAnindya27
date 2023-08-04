function showContent(index) {
    const contentContainers = document.querySelectorAll(".content-page-17");
    contentContainers.forEach((container) => {
      container.classList.remove("show-17");
    });

    const contentToShow = document.getElementById(`content${index}`);
    contentToShow.classList.add("show-17");
  }