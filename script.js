// ============================================
// MODERN PORTFOLIO - COMPLETE JAVASCRIPT
// With Loading Animation & EmailJS Contact Form
// ============================================

// ============================================
// LOADING SCREEN
// ============================================
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 2000);
    
    // Performance monitoring
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Page Load Time: ${pageLoadTime}ms`);
    }
});

// ============================================
// EMAIL JS CONTACT FORM WITH AUTO REPLY
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            
            // Disable button and show loading
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            
            // Get form data
            const templateParams = {
                from_name: document.getElementById('name').value,
                from_email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
                to_name: 'Mohamed Waleed'
            };
            
            // Send email to you
            emailjs.send('service_yvkz2tu', 'template_qc0v5uk', templateParams)
                .then(function(response) {
                    console.log('Main email sent!', response.status);
                    
                    // Send Auto Reply to User
                    const autoReplyParams = {
                        from_name: templateParams.from_name,
                        from_email: templateParams.from_email,
                        subject: templateParams.subject,
                        message: templateParams.message
                    };
                    
                    // Send auto reply
                    return emailjs.send('service_yvkz2tu', 'template_autoreply', autoReplyParams);
                })
                .then(function(autoResponse) {
                    console.log('Auto-reply sent!', autoResponse.status);
                    
                    // Show success message
                    formStatus.className = 'form-status success';
                    formStatus.innerHTML = '<i class="fas fa-check-circle"></i> Message sent! Check your email for confirmation.';
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Re-enable button
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        formStatus.style.display = 'none';
                    }, 5000);
                })
                .catch(function(error) {
                    console.log('FAILED...', error);
                    
                    // Show error message
                    formStatus.className = 'form-status error';
                    formStatus.innerHTML = '<i class="fas fa-exclamation-circle"></i> Failed to send. Please try again.';
                    
                    // Re-enable button
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                    
                    // Hide error message after 5 seconds
                    setTimeout(() => {
                        formStatus.style.display = 'none';
                    }, 5000);
                });
        });
    }
});

// Certificate Data
const certificates = [
    {
        title: "Professional Practice in Software Development",
        issuer: "Department of Computer Science & Engineering, University of Moratuwa",
        image: "uploads/Professional_Practice_in_Software_Development_E-Certificate.png",
        pdf: "uploads/Professional_Practice_in_Software_Development_E-Certificate.pdf"
    },
    {
        title: "Server-side Web Programming",
        issuer: "Department of Information Technology, University of Moratuwa",
        image: "uploads/Server-side_Web_Programming_E-Certificate.png",
        pdf: "uploads/Server-side_Web_Programming_E-Certificate.pdf"
    },
    {
        title: "Front-End Web Development",
        issuer: "Department of Information Technology, University of Moratuwa",
        image: "uploads/Front-End_Web_Development_E-Certificate.png",
        pdf: "uploads/Front-End_Web_Development_E-Certificate.pdf"
    },
    {
        title: "Web Design for Beginners",
        issuer: "Department of Information Technology, University of Moratuwa",
        image: "uploads/Web_Design_for_Beginners_E-Certificate.png",
        pdf: "uploads/Web_Design_for_Beginners_E-Certificate.pdf"
    },
    {
        title: "Python Programming",
        issuer: "Department of Computer Science & Engineering, University of Moratuwa",
        image: "uploads/Python_Programming_E-Certificate.png",
        pdf: "uploads/Python_Programming_E-Certificate.pdf"
    },
    {
        title: "Python for Beginners",
        issuer: "Department of Computer Science & Engineering, University of Moratuwa",
        image: "uploads/Python_for_Beginners_E-Certificate.png",
        pdf: "uploads/Python_for_Beginners_E-Certificate.pdf"
    },
    {
        title: "Agile Project Management in ICT Projects",
        issuer: "Department of Computer Science & Engineering, University of Moratuwa",
        image: "uploads/Agile_Project_Management_E-Certificate.png",
        pdf: "uploads/Agile_Project_Management_E-Certificate.pdf"
    },
    {
        title: "Foundations of Project Management",
        issuer: "Department of Civil Engineering, University of Moratuwa",
        image: "uploads/Foundations_of_Project_Management_E-Certificate.png",
        pdf: "uploads/Foundations_of_Project_Management_E-Certificate.pdf"
    },
    {
        title: "Project Scope and Schedule Management",
        issuer: "Department of Civil Engineering, University of Moratuwa",
        image: "uploads/Project_Scope_and_Schedule_Management_E-Certificate.png",
        pdf: "uploads/Project_Scope_and_Schedule_Management_E-Certificate.pdf"
    },
    {
        title: "Project Contract Law and Management",
        issuer: "Department of Civil Engineering, University of Moratuwa",
        image: "uploads/Project_Contract_Law_and_Management_E-Certificate.png",
        pdf: "uploads/Project_Contract_Law_and_Management_E-Certificate.pdf"
    },
    {
        title: "Project Communication and Stakeholder Management",
        issuer: "Department of Civil Engineering, University of Moratuwa",
        image: "uploads/Project_Communication_and_Stakeholder_Management_E-Certificate.png",
        pdf: "uploads/Project_Communication_and_Stakeholder_Management_E-Certificate.pdf"
    },
    {
        title: "ISC2 Candidate",
        issuer: "International Information System Security Certification Consortium",
        image: "uploads/isc2-candidate.png",
        pdf: "uploads/isc2-candidate.png"
    },
    {
        title: "CC Domain 1: Security Principles",
        issuer: "ISC2",
        image: "uploads/CC Domain 1 Security Principles.png",
        pdf: "uploads/CC Domain 1 Security Principles.pdf"
    },
    {
        title: "CC Domain 2: Incident Response, BC & DR",
        issuer: "ISC2",
        image: "uploads/CC Domain 2 Incidents Response, Business Continuity and Disaster Recovery Concepts.png",
        pdf: "uploads/CC Domain 2 Incidents Response, Business Continuity and Disaster Recovery Concepts.pdf"
    },
    {
        title: "CC Domain 3: Access Control Concepts",
        issuer: "ISC2",
        image: "uploads/CC Domain 3 Access Controls Concepts.png",
        pdf: "uploads/CC Domain 3 Access Controls Concepts.pdf"
    },
    {
        title: "CC Domain 4: Network Security",
        issuer: "ISC2",
        image: "uploads/CC Domain 4 Network Security.png",
        pdf: "uploads/CC Domain 4 Network Security.pdf"
    },
    {
        title: "CC Domain 5: Security Operations",
        issuer: "ISC2",
        image: "uploads/CC Domain 5 Securitys Operations.png",
        pdf: "uploads/CC Domain 5 Securitys Operations.pdf"
    },
    {
        title: "CC Course Pre-assessment",
        issuer: "ISC2",
        image: "uploads/CC Course Pre-assessment.png",
        pdf: "uploads/CC Course Pre-assessment.pdf"
    },
    {
        title: "CC Course Conclusion & Final Assessment",
        issuer: "ISC2",
        image: "uploads/CCCourse Conclusion & Finalt Assessment.png",
        pdf: "uploads/CCCourse Conclusion & Finalt Assessment.pdf"
    },
    {
        title: "CC Certified in Cybersecurity (CC)",
        issuer: "ISC2",
        image: "uploads/CCCertified in Cybersecurity (CC).png",
        pdf: "uploads/CCCertified in Cybersecurity (CC).pdf"
    },
    {
        title: "What Is Generative AI?",
        issuer: "LinkedIn Learning",
        image: "uploads/CertificateOfCompletion_What Is Generative AI.png",
        pdf: "uploads/CertificateOfCompletion_What Is Generative AI.pdf"
    },
    {
        title: "Generative AI: The Evolution of Thoughtful Online Search",
        issuer: "LinkedIn Learning",
        image: "uploads/CertificateOfCompletion_Generative AI The Evolution of Thoughtful Online Search.png",
        pdf: "uploads/CertificateOfCompletion_Generative AI The Evolution of Thoughtful Online Search.pdf"
    },
    {
        title: "Streamlining Your Work with Microsoft Copilot",
        issuer: "LinkedIn Learning",
        image: "uploads/CertificateOfCompletion_Streamlining Your Work with Microsoft Copilot.png",
        pdf: "uploads/Streamlining Your Work with Microsoft Copilot.pdf"
    },
    {
        title: "Introduction to Artificial Intelligence (2023)",
        issuer: "LinkedIn Learning",
        image: "uploads/CertificateOfCompletion_Introduction to Artificial Intelligence 2023.png",
        pdf: "uploads/CertificateOfCompletion_Introduction to Artificial Intelligence 2023.pdf"
    },
    {
        title: "Career Essentials in Generative AI",
        issuer: "Microsoft & LinkedIn",
        image: "uploads/CertificateOfCompletion_Career Essentials in Generative AI by Microsoft and LinkedIn.png",
        pdf: "uploads/CertificateOfCompletion_Career Essentials in Generative AI by Microsoft and LinkedIn.pdf"
    },
    {
        title: "Linux Unhatched",
        issuer: "Cisco",
        image: "uploads/LinuxUnhatched20241203-26-aeebkl.png",
        pdf: "uploads/LinuxUnhatched20241203-26-aeebkl.pdf"
    },
    {
        title: "SLIIT University Certificate",
        issuer: "SLIIT",
        image: "uploads/MOHAMED WAJIHADEEN MOHAMED WALEED - 2024-11-27.png",
        pdf: "uploads/MOHAMED WAJIHADEEN MOHAMED WALEED - 2024-11-27.pdf"
    },
    {
        title: "Computer Hardware Basics",
        issuer: "Cisco",
        image: "uploads/certificate_wajiwaleed-gmail-com_c57c725d-02bf-4dfd-b996-45fcb40663d5.png",
        pdf: "uploads/certificate_wajiwaleed-gmail-com_c57c725d-02bf-4dfd-b996-45fcb40663d5.pdf"
    },
    {
        title: "CCNA: Introduction to Networks",
        issuer: "Cisco",
        image: "uploads/certificate_wajiwaleed-gmail-com_b039ef56-0375-4342-8889-f907ba316858 (1).png",
        pdf: "uploads/CCNAITNUpdated20250723-31-ovgeq6.pdf"
    },
    {
        title: "CCNA: Switching, Routing, and Wireless Essentials",
        issuer: "Cisco",
        image: "uploads/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_wajiwaleed-gmail-com_fd3798d0-18e8-495a-ab4e-f122f8368a46.png",
        pdf: "uploads/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_wajiwaleed-gmail-com_fd3798d0-18e8-495a-ab4e-f122f8368a46.pdf"
    },
    {
        title: "Diploma in English",
        issuer: "Sri Lanka English Language Graduates' Association (SLEGA)",
        image: "uploads/Diploma in English.png",
        pdf: "uploads/Diploma in English.pdf"
    },
    {
        title: "Diploma in English",
        issuer: "Sri Lanka English Language Graduates' Association (SLEGA)",
        image: "uploads/Diploma in English 2.png",
        pdf: "uploads/Diploma in English 2.pdf"
    },
    {
        title: "Diploma in English Language",
        issuer: "Southern Province English & IT Training Academy",
        image: "uploads/Diploma in English Language.png",
        pdf: "uploads/Diploma in English Language.pdf"
    },
    {
        title: "Diploma in Information Technology",
        issuer: "Southern Province English & IT Training Academy",
        image: "uploads/Diploma in Information Technology.png",
        pdf: "uploads/Diploma in Information Technology.pdf"
    },
    {
        title: "Program in Computer Literacy - 2018",
        issuer: "Explorer - School of Information Technology",
        image: "uploads/Program in Computer Literacy - 2018.png",
        pdf: "uploads/Program in Computer Literacy - 2018.pdf"
    },
    {
        title: "Media Club Appreciation Certificate",
        issuer: "Sudharma College - Galle, Media Club",
        image: "uploads/Media Club Appreciation Certificate.png",
        pdf: "uploads/Media Club Appreciation Certificate.pdf"
    },
    {
        title: "Media Workshop Participation Certificate",
        issuer: "Old Pupils' Association of Olcott College - Galle",
        image: "uploads/Media Workshop Participation Certificate.png",
        pdf: "uploads/Media Workshop Participation Certificate.pdf"
    },
    {
        title: "Certificate of Honour - Senior Prefect",
        issuer: "Olcott College, Galle",
        image: "uploads/Certificate of Honour - Senior Prefect.png",
        pdf: "uploads/Certificate of Honour - Senior Prefect.pdf"
    },
    {
        title: "U.S. Embassy Certificate of Award",
        issuer: "U.S. Embassy Colombo",
        image: "uploads/U.S. Embassy Certificate of Award.png",
        pdf: "uploads/U.S. Embassy Certificate of Award.pdf"
    }
];

// Project photos data - INCLUDING NEW PROJECTS
const projectPhotos = {
    // NEW PROJECT 1: Wi-Fi NVR System
    nvr: [
        { src: 'projects/nvr1.jpg', title: 'Wi-Fi NVR Router Setup', desc: 'White wireless router with dual antennas for NVR system connectivity' },
        { src: 'projects/nvr2.jpg', title: 'Multi-Camera Monitoring', desc: 'Live surveillance feed showing multiple camera views on monitoring screen' },
        { src: 'projects/nvr3.jpg', title: 'Network Topology Design', desc: 'Detailed network diagram showing NVR system architecture and connections' },
        { src: 'projects/nvr4.jpg', title: 'Router Configuration', desc: 'Physical setup with network equipment and testing tools' },
        { src: 'projects/nvr5.jpg', title: 'Remote Access Setup', desc: 'Mobile and PC monitoring interface configuration' }
    ],

    // NEW PROJECT 2: Access Point Configuration
    accesspoint: [
        { src: 'projects/ap1.jpg', title: 'Dual Workstation Lab', desc: 'Two workstations configured with Linksys access point for wireless testing' },
        { src: 'projects/ap2.jpg', title: 'Access Point Web Interface', desc: 'Linksys router configuration showing wireless settings and SSID setup' },
        { src: 'projects/ap3.jpg', title: 'Multi-Station Configuration', desc: 'Complete lab setup with access point and multiple testing devices' },
        { src: 'projects/ap4.jpg', title: 'Connectivity Verification', desc: 'Testing wireless connectivity with IP configuration and ping tests' }
    ],

    // NEW PROJECT 3: CCNA Practical Assessment
    ccnatest: [
        { src: 'projects/ccna1.jpg', title: 'Network Lab Overview', desc: 'Complete CCNA practical assessment lab with router, switches, and PCs' },
        { src: 'projects/ccna2.jpg', title: 'Packet Tracer Topology', desc: 'CCNAv7 SRWE Skills Assessment network diagram showing VLANs and routing' },
        { src: 'projects/ccna3.jpg', title: 'Physical Lab Setup', desc: 'Real Cisco equipment configuration with multiple workstations' },
        { src: 'projects/ccna4.jpg', title: 'Router CLI Configuration', desc: 'Command-line interface showing VLAN and routing configuration verification' }
    ],

    // NEW PROJECT 4: CCTV DVR Setup
    cctv: [
        { src: 'projects/dvr1.jpg', title: 'DVR System Configuration', desc: 'Two technicians setting up CCTV DVR system with monitor display' },
        { src: 'projects/dvr2.jpg', title: 'Camera Configuration', desc: 'Configuring camera connections and DVR settings in lab environment' },
        { src: 'projects/dvr3.jpg', title: 'Multi-Screen Monitoring', desc: 'Multiple monitor setup displaying live CCTV camera feeds' },
        { src: 'projects/dvr4.jpg', title: 'Complete CCTV Lab', desc: 'Fully operational CCTV system with DVR and monitoring equipment' }
    ],

    // NEW PROJECT 5: DHCP Relay Agent
    dhcprelay: [
        { src: 'projects/dhcp1.jpg', title: 'Multi-Router Network', desc: 'Complex network topology with multiple Cisco routers and switches' },
        { src: 'projects/dhcp2.jpg', title: 'Server Configuration Display', desc: 'Windows Server showing DHCP Active Leases and IPv4 configuration' },
        { src: 'projects/dhcp3.jpg', title: 'Physical Lab Infrastructure', desc: 'Complete lab setup with routers, switches, and server equipment' },
        { src: 'projects/dhcp4.jpg', title: 'Network Verification', desc: 'Testing DHCP relay functionality across multiple network segments' }
    ],

    // EXISTING PROJECTS
    server: [
        { src: 'projects/server1.jpg', title: 'Server Lab Setup', desc: 'Physical server infrastructure with multiple workstations' },
        { src: 'projects/server2.jpg', title: 'Network Topology Design', desc: 'WDS and DHCP server architecture planning' },
        { src: 'projects/server3.jpg', title: 'RAID Storage System', desc: 'HP Smart Array RAID controller with dual drive configuration' },
        { src: 'projects/server4.jpg', title: 'Assessment Documentation', desc: 'NVTI Level 4 practical assessment requirements' },
        { src: 'projects/server5.jpg', title: 'WDS Configuration Tasks', desc: 'Windows Deployment Services implementation steps' },
        { src: 'projects/server6.jpg', title: 'Network Planning', desc: 'Server topology design with IP addressing scheme' },
        { src: 'projects/server7.jpg', title: 'RAID Array Status', desc: 'HP Array configuration showing RAID 1 with 146GB drives' },
        { src: 'projects/server8.jpg', title: 'System Verification', desc: 'Testing server connectivity with Cisco equipment' },
        { src: 'projects/server9.jpg', title: 'Complete Lab Setup', desc: 'Fully deployed server lab with client workstations' }
    ],
    cisco: [
        { src: 'projects/cisco1.jpg', title: 'Multi-Station Router Lab', desc: 'Cisco router lab setup with multiple workstations' },
        { src: 'projects/cisco2.jpg', title: 'Mobile SSH Access', desc: 'Remote router configuration via mobile SSH terminal' },
        { src: 'projects/cisco3.jpg', title: 'Router Configuration Lab', desc: 'Multi-router topology with switches and workstations' },
        { src: 'projects/cisco4.jpg', title: 'Network Documentation', desc: 'Router configuration commands and security testing' },
        { src: 'projects/cisco5.jpg', title: 'Windows Server Integration', desc: 'Cisco equipment integrated with Windows Server environment' }
    ],
    mac: [
        { src: 'projects/mac1.jpg', title: 'iMac Disassembly', desc: 'Opening iMac case for internal hardware access' },
        { src: 'projects/mac2.jpg', title: 'Hardware Diagnosis', desc: 'Inspecting internal components and circuit boards' },
        { src: 'projects/mac3.jpg', title: 'Workspace Overview', desc: 'Complete repair station with tools and parts' },
        { src: 'projects/mac4.jpg', title: 'Power Filter Module', desc: 'EMI filter component for power supply replacement' }
    ],
    isp: [
        { src: 'projects/isp1.jpg', title: 'Network Topology Design', desc: 'Packet Tracer ISP simulation with multiple routers' },
        { src: 'projects/isp2.jpg', title: '4G Router Integration', desc: 'Physical lab setup with 4G router and Cisco equipment' },
        { src: 'projects/isp3.jpg', title: 'Multi-Workstation Lab', desc: 'Complete ISP simulation lab with multiple endpoints' },
        { src: 'projects/isp4.jpg', title: 'Configuration Testing', desc: 'Router CLI configuration and connectivity verification' }
    ],
    asd: [
        { src: 'projects/asd1.jpg', title: 'Equipment Delivery', desc: 'Receiving Alta wireless access point equipment' },
        { src: 'projects/asd2.jpg', title: 'Network Infrastructure', desc: 'Installing network switch and cable management' },
        { src: 'projects/asd3.jpg', title: 'Access Point Installation', desc: 'Mounting wireless access point and router' },
        { src: 'projects/asd4.jpg', title: 'Equipment Installation', desc: 'Installing network equipment on wall' },
        { src: 'projects/asd5.jpg', title: 'Team Installation Work', desc: 'Technicians installing ceiling-mounted equipment' },
        { src: 'projects/asd6.jpg', title: 'Infrastructure Setup', desc: 'Setting up network infrastructure in progress' },
        { src: 'projects/asd7.jpg', title: 'Cable Management', desc: 'Installing structured cabling and trunking' },
        { src: 'projects/asd8.jpg', title: 'Lab Completion', desc: 'Completed network lab with modern facilities' },
        { src: 'projects/asd9.jpg', title: 'Project Planning', desc: 'Team planning and coordinating network design' },
        { src: 'projects/asd10.jpg', title: 'Cable Installation', desc: 'Installing CAT6 network cabling along walls' },
        { src: 'projects/asd11.jpg', title: 'Access Point Configuration', desc: 'Configuring wireless access point settings' },
        { src: 'projects/asd12.jpg', title: 'Router Configuration', desc: 'Team configuring network router and switches' },
        { src: 'projects/asd13.jpg', title: 'System Testing', desc: 'Testing network equipment and connectivity' },
        { src: 'projects/asd14.jpg', title: 'Outdoor Cable Work', desc: 'Installing external network cabling' },
        { src: 'projects/asd15.jpg', title: 'Cable Management', desc: 'Organizing and managing network cables' },
        { src: 'projects/asd16.jpg', title: 'Equipment Mounting', desc: 'Installing network equipment at height' },
        { src: 'projects/asd17.jpg', title: 'Cable Routing', desc: 'Routing and organizing network cables' },
        { src: 'projects/asd18.jpg', title: 'Switch Installation', desc: 'Installing TP-Link Gigabit managed switch' },
        { src: 'projects/asd19.jpg', title: 'Network Documentation', desc: 'Documenting CAT6 UTP cable specifications' },
        { src: 'projects/asd20.jpg', title: 'Alta Access Point', desc: 'Alta wireless access point ready for deployment' }
    ],
    nat: [
        { src: 'projects/nat1.jpg', title: 'Network Lab Setup', desc: 'Cisco router and switch topology with dual workstations' },
        { src: 'projects/nat2.jpg', title: 'OSPF Network Design', desc: 'Multi-area OSPF topology in Packet Tracer simulation' },
        { src: 'projects/nat3.jpg', title: 'Lab Configuration', desc: 'Physical network lab with routers and testing equipment' },
        { src: 'projects/nat4.jpg', title: 'Router Verification', desc: 'Checking OSPF and NAT configuration via CLI' },
        { src: 'projects/nat5.jpg', title: 'Completed Lab Topology', desc: 'Fully configured routing lab with Dialog router integration' }
    ]
};

// Current indexes
let currentCertIndex = 0;
let currentProject = '';
let currentPhotoIndex = 0;

// ============================================
// TYPING ANIMATION
// ============================================
const typingTexts = [
    "Full-Stack Web Developer",
    "Network Technician",
    "CCNA Student",
    "Tech Enthusiast",
    "Problem Solver",
    "Open Source Contributor"
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    const currentText = typingTexts[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = 100;

    if (isDeleting) {
        typeSpeed /= 2;
    }

    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        typeSpeed = 500;
    }

    setTimeout(typeText, typeSpeed);
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
    const sections = document.querySelectorAll('.modern-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}

// ============================================
// SMOOTH SCROLL FOR NAV LINKS
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// SCROLL TO TOP BUTTON
// ============================================
function initScrollToTop() {
    const scrollBtn = document.querySelector('.scroll-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ============================================
// CERTIFICATE CAROUSEL
// ============================================
function displayCertificate(index) {
    const display = document.querySelector('.certificate-display');
    const cert = certificates[index];
    
    display.innerHTML = `
        <h2>${cert.title}</h2>
        <p style="color: var(--text-secondary); margin-bottom: 20px;">${cert.issuer}</p>
        <img src="${cert.image}" alt="${cert.title}">
        <a href="${cert.pdf}" target="_blank">
            <i class="fas fa-download"></i> Download Certificate
        </a>
    `;

    document.querySelector('.current-cert').textContent = index + 1;
    document.querySelector('.total-certs').textContent = certificates.length;

    updateThumbnails(index);
}

function updateThumbnails(activeIndex) {
    const thumbnails = document.querySelectorAll('.carousel-thumbnails img');
    thumbnails.forEach((thumb, index) => {
        if (index === activeIndex) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

function navigateCert(direction) {
    currentCertIndex += direction;
    
    if (currentCertIndex < 0) {
        currentCertIndex = certificates.length - 1;
    } else if (currentCertIndex >= certificates.length) {
        currentCertIndex = 0;
    }
    
    displayCertificate(currentCertIndex);
}

function selectCertificate(index) {
    currentCertIndex = index;
    displayCertificate(index);
}

function initCertificateCarousel() {
    const thumbnailsContainer = document.querySelector('.carousel-thumbnails');
    
    certificates.forEach((cert, index) => {
        const thumb = document.createElement('img');
        thumb.src = cert.image;
        thumb.alt = cert.title;
        thumb.onclick = () => selectCertificate(index);
        thumbnailsContainer.appendChild(thumb);
    });
    
    displayCertificate(0);
}

// ============================================
// PROJECTS SECTION FUNCTIONALITY
// ============================================

// Project filtering
function initProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.classList.remove('hidden');
                    item.style.animation = 'fadeIn 0.6s ease-out';
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
}

// Open project modal
function openProjectModal(projectName, photoIndex) {
    const modal = document.getElementById('projectModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const currentPhotoSpan = document.getElementById('currentPhoto');
    const totalPhotosSpan = document.getElementById('totalPhotos');
    const thumbnailsContainer = document.getElementById('modalThumbnails');

    currentProject = projectName;
    currentPhotoIndex = photoIndex;

    const photos = projectPhotos[projectName];
    const photo = photos[photoIndex];

    modalImage.src = photo.src;
    modalTitle.textContent = photo.title;
    modalDescription.textContent = photo.desc;
    currentPhotoSpan.textContent = photoIndex + 1;
    totalPhotosSpan.textContent = photos.length;

    thumbnailsContainer.innerHTML = '';
    photos.forEach((p, index) => {
        const thumb = document.createElement('img');
        thumb.src = p.src;
        thumb.alt = p.title;
        if (index === photoIndex) thumb.classList.add('active');
        thumb.onclick = () => selectProjectPhoto(index);
        thumbnailsContainer.appendChild(thumb);
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close project modal
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Change project photo
function changeProjectPhoto(direction) {
    const photos = projectPhotos[currentProject];
    currentPhotoIndex += direction;

    if (currentPhotoIndex < 0) {
        currentPhotoIndex = photos.length - 1;
    } else if (currentPhotoIndex >= photos.length) {
        currentPhotoIndex = 0;
    }

    const photo = photos[currentPhotoIndex];
    document.getElementById('modalImage').src = photo.src;
    document.getElementById('modalTitle').textContent = photo.title;
    document.getElementById('modalDescription').textContent = photo.desc;
    document.getElementById('currentPhoto').textContent = currentPhotoIndex + 1;

    const thumbnails = document.querySelectorAll('.modal-thumbnails img');
    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentPhotoIndex);
    });
}

// Select specific photo
function selectProjectPhoto(index) {
    currentPhotoIndex = index;
    const photo = projectPhotos[currentProject][index];
    document.getElementById('modalImage').src = photo.src;
    document.getElementById('modalTitle').textContent = photo.title;
    document.getElementById('modalDescription').textContent = photo.desc;
    document.getElementById('currentPhoto').textContent = index + 1;

    const thumbnails = document.querySelectorAll('.modal-thumbnails img');
    thumbnails.forEach((thumb, idx) => {
        thumb.classList.toggle('active', idx === index);
    });
}

// ============================================
// KEYBOARD NAVIGATION
// ============================================
document.addEventListener('keydown', (e) => {
    // Certificate carousel navigation
    if (e.key === 'ArrowLeft' && !document.getElementById('projectModal').classList.contains('active')) {
        navigateCert(-1);
    } else if (e.key === 'ArrowRight' && !document.getElementById('projectModal').classList.contains('active')) {
        navigateCert(1);
    }
    
    // Project modal navigation
    const modal = document.getElementById('projectModal');
    if (modal.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeProjectModal();
        } else if (e.key === 'ArrowLeft') {
            changeProjectPhoto(-1);
        } else if (e.key === 'ArrowRight') {
            changeProjectPhoto(1);
        }
    }
});

// Close modal on outside click
document.getElementById('projectModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'projectModal') {
        closeProjectModal();
    }
});

// ============================================
// ACTIVE NAV LINK HIGHLIGHTING
// ============================================
function highlightActiveNav() {
    const sections = document.querySelectorAll('.modern-section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// ============================================
// INITIALIZE EVERYTHING
// ============================================
function init() {
    console.log('🚀 Initializing Modern Portfolio...');
    
    setTimeout(typeText, 1000);
    initScrollAnimations();
    initSmoothScroll();
    initScrollToTop();
    initCertificateCarousel();
    initProjectFilter();
    highlightActiveNav();
    
    console.log('✅ Portfolio Initialized Successfully!');
    console.log('📊 Total Projects: ' + Object.keys(projectPhotos).length);
    console.log('🎓 Total Certificates: ' + certificates.length);
    console.log('📧 EmailJS Configured');
}

// Run initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
