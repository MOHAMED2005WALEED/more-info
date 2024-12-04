If you want to add an alert when clicking links, you can include this:

document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('click', () => {
        alert('You are about to visit: ' + link.textContent);
    });
});
