// Event listener untuk fitur interaktif
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        alert("Destinasi: " + card.querySelector('.card-title').innerText);
    });
});
