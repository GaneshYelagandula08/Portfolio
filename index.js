document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        const sectionId = button.getAttribute('data-section');
        document.getElementById(sectionId).classList.add('active');
    });
});
