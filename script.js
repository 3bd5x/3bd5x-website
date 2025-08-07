
document.getElementById('mobile-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('navbar').classList.toggle('active');
});


document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
       
        document.querySelectorAll('.nav-link').forEach(el => {
            el.classList.remove('active');
        });
        
        
        this.classList.add('active');
        
       
        if(window.innerWidth <= 995) {
            document.getElementById('mobile-menu').classList.remove('active');
            document.getElementById('navbar').classList.remove('active');
        }
        
      
        const targetId = this.getAttribute('href');
        if(targetId !== '#') {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if(scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const cyberSkillsSection = document.querySelector('.cyber-skills');
    const progressBars = document.querySelectorAll('.cyber-progress');
    
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const level = bar.parentElement.getAttribute('data-level');
            bar.style.width = level;
        });
    }
    
   
    function handleScroll() {
        const sectionPos = cyberSkillsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.2;
        
        if (sectionPos < screenPos) {
            animateProgressBars();
            window.removeEventListener('scroll', handleScroll);
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    const tools = document.querySelectorAll('.tool');
    tools.forEach((tool, index) => {
        tool.style.transitionDelay = `${index * 0.1}s`;
    });
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        if (this.getAttribute('href') === '#Skills') {
            setTimeout(() => {
                const skillsSection = document.getElementById('Skills');
                skillsSection.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    });
});
