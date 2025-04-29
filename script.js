const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', (e) => {
    const content = header.nextElementSibling;
    console.log(content)

    document.querySelectorAll('.accordion-content').forEach(c => {
        c.style.display = 'none';
    });

    content.style.display = 'block';
  });
});
