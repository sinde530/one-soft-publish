fetch('components/header.html')
  .then((response) => response.text())
  .then((data) => {
    document.querySelector('body').insertAdjacentHTML('afterbegin', data);
  });

fetch('components/footer.html')
  .then((response) => response.text())
  .then((data) => {
    document.querySelector('body').insertAdjacentHTML('beforeend', data);
  });

document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item .question');

  faqItems.forEach((item) => {
    item.addEventListener('click', function () {
      const answer = this.nextElementSibling;
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
  });
});
