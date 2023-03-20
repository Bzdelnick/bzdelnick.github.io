document.addEventListener('DOMContentLoaded', function () {
    const cardContainer = document.querySelector('.card-container');
    const card = document.querySelector('.card');

    cardContainer.addEventListener('mouseover', function () {
        card.style.transform = 'rotateY(180deg)';
    });

    cardContainer.addEventListener('mouseout', function () {
        card.style.transform = 'rotateY(0deg)';
    });
});
