function toggleContent(contentId) {
    var content = document.querySelectorAll('.content-19')[contentId - 1];
    var rectangles = content.querySelectorAll('.rectangle');

    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        rectangles.forEach(rectangle => rectangle.style.height = '30px');
    } else {
        content.classList.add('expanded');
        rectangles.forEach(rectangle => rectangle.style.height = '400px');
    }
}
