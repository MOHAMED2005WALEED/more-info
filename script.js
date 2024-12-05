// Placeholder for future interactivity
console.log("Website Loaded!");

// Data for Certifications (You can add more certificates here)
const certifications = [
    {
        title: "Certified Web Developer",
        description: "Completed an advanced course in Web Development with HTML, CSS, and JavaScript.",
        date: "March 2023"
    },
    {
        title: "Python Programming Mastery",
        description: "Achieved proficiency in Python with special focus on data structures and algorithms.",
        date: "July 2022"
    },
    {
        title: "Data Science with R",
        description: "Acquired knowledge in data analysis and statistical modeling using R.",
        date: "December 2021"
    }
];

// Function to generate certification cards dynamically
function displayCertifications(certifications) {
    const certificationsContainer = document.querySelector('.certifications');

    certifications.forEach(cert => {
        const card = document.createElement('div');
        card.classList.add('certification-card');

        card.innerHTML = `
            <div class="certification-title">${cert.title}</div>
            <div class="certification-description">${cert.description}</div>
            <div class="certification-date">${cert.date}</div>
        `;
        
        certificationsContainer.appendChild(card);
    });
}

// Call the function to display certifications when the page loads
window.onload = () => {
    displayCertifications(certifications);
};


        let currentIndex = 0;
        const certificates = document.querySelectorAll('.ccertificate');
        const thumbnails = document.querySelectorAll('.thumbnail');

        function showCertificate(direction) {
            certificates[currentIndex].classList.remove('show');
            thumbnails[currentIndex].classList.remove('active');

            if (direction === 'right') {
                currentIndex = (currentIndex + 1) % certificates.length;
            } else if (direction === 'left') {
                currentIndex = (currentIndex - 1 + certificates.length) % certificates.length;
            }

            certificates[currentIndex].classList.add('show');
            thumbnails[currentIndex].classList.add('active');
        }

        function selectCertificate(index) {
            certificates[currentIndex].classList.remove('show');
            thumbnails[currentIndex].classList.remove('active');

            currentIndex = index;

            certificates[currentIndex].classList.add('show');
            thumbnails[currentIndex].classList.add('active');
        }

        // Initialize the first certificate and thumbnail
        certificates[currentIndex].classList.add('show');
        thumbnails[currentIndex].classList.add('active');
