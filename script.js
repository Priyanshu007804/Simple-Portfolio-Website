document.addEventListener('DOMContentLoaded', function() {
      
     
      const animatableElements = document.querySelectorAll('.animate');
      
     
      const observerOptions = {
       
        root: null,
        
        
        rootMargin: '150px 0px',
        
       
        threshold: 0.3
      };
      
      const observer = new IntersectionObserver((entries, observer) => {
        
        entries.forEach(entry => {
          
          if (entry.isIntersecting) {
            
            entry.target.classList.add('visible');
            
       
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);
      
      animatableElements.forEach(element => {
        observer.observe(element);
      });

       window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 10) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
      
     window.addEventListener('load', function() {
        const text = " Hi! I am Priyanshu Singha Roy";
        const heroText = document.getElementById('hero-text');
        if (heroText) {
          heroText.innerHTML = '';
          let i = 0;
          const typeWriter = () => {
            if (i < text.length) {
              heroText.innerHTML += text.charAt(i);
              i++;
              setTimeout(typeWriter, 100);
            }
          };
          typeWriter();
        }
      });

       document.querySelector('.animate-name').addEventListener('mouseenter', () => {
            document.querySelector('.animate-name').style.animation = 
                'gradientShift 3s ease infinite, pulse 0.5s ease infinite';
        });
        
        document.querySelector('.animate-name').addEventListener('mouseleave', () => {
            document.querySelector('.animate-name').style.animation = 
                'gradientShift 6s ease infinite, pulse 2s ease infinite';
        });
       });
