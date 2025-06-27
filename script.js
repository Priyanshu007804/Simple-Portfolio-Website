      window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
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

      var tablinks= document.getElementsByClassName("tab-links");
            var tabcontents= document.getElementsByClassName("tab-contents");
            function opentab(tabname){
                for(tablink of tablinks){
                    tablink.classList.remove("active-link");
                }
                for(tabcontent of tabcontents){
                    tabcontent.classList.remove("active-tab");
                }
                event.currentTarget.classList.add("active-link");
                document.getElementById(tabname).classList.add("active-tab");
            }

      function showEcellWeb(){
        alert('This Website will be availabe soon.');
      }

      