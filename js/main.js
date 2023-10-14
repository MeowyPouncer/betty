document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.ceremonies-list__item-header');

    headers.forEach(header => {
        header.addEventListener('click', function () {
            const text = this.parentElement.querySelector('.ceremonies-list__item-text');
            const buttonIcon = this.querySelector('.ceremonies-list__button img');


            if (text.style.maxHeight) {
                text.style.maxHeight = null;
                buttonIcon.src = 'images/faq-button-plus.svg';


            } else {
                text.style.maxHeight = text.scrollHeight + 'px';
                buttonIcon.src = 'images/faq-button.svg';
            }
        });
    });
});

