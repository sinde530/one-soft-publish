// react-router-dom 형식처럼 데이터 불러오는 것입니다
/**
 * <header/>
 * {outlet} < index.html or faq or my-profile
 * <footer/>
 */
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

// FAQ페이지 Q&A toggle listener
document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item .question');

  faqItems.forEach((item) => {
    item.addEventListener('click', function () {
      const answer = this.nextElementSibling;
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
  });
});
