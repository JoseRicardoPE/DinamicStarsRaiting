const stars = document.querySelectorAll('.star');

stars.forEach((star, index1) => {
    star.addEventListener('click', (e) => {
        stars.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add('star--active') : star.classList.remove('star--active');
        });
    });
});

