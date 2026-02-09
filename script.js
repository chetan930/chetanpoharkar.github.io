// Smooth scrolling for navigation links
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

// Social media links configuration
const socialLinks = {
    linkedin: 'https://linkedin.com/in/chetan-poharkar',
    github: 'https://github.com/chetanpoharkar',
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
    email: 'mailto:ChetanPoharkar@gmail.com'
};

// Function to open social media links
function openSocialLink(platform) {
    if (socialLinks[platform]) {
        window.open(socialLinks[platform], '_blank');
    }
}

// Add click handlers to social media icons
document.addEventListener('DOMContentLoaded', function () {
    // Get all social media icon containers
    const socialIcons = document.querySelectorAll('.social svg');

    socialIcons.forEach((icon, index) => {
        icon.style.cursor = 'pointer';
        icon.addEventListener('click', function (e) {
            e.stopPropagation();
            const platforms = ['linkedin', 'github', 'instagram', 'twitter'];
            if (index < platforms.length) {
                openSocialLink(platforms[index]);
            }
        });

        // Add hover effect
        icon.addEventListener('mouseenter', function () {
            this.style.opacity = '0.8';
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'all 0.3s ease';
        });

        icon.addEventListener('mouseleave', function () {
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
        });
    });
});

// Project button functionality
document.querySelectorAll('.project-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        // Scroll to projects section
        const projectSection = document.querySelector('.project-container');
        if (projectSection) {
            projectSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Add cursor pointer and hover effect
    btn.style.cursor = 'pointer';
    btn.addEventListener('mouseenter', function () {
        this.style.backgroundColor = '#e6e000';
        this.style.transition = 'all 0.3s ease';
    });

    btn.addEventListener('mouseleave', function () {
        this.style.backgroundColor = '#fefd15';
    });
});
