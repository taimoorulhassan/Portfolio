/* =========================================================
   TAIMOOR UL HASSAN — PORTFOLIO SCRIPTS
   1. Preloader
   2. AOS init
   3. Navbar scroll + mobile menu
   4. Active nav link on scroll
   5. Typing animation
   6. Animated counters
   7. Cursor glow
   8. Neural network canvas background
   9. Back to top button
   10. Contact form (FormSubmit) handling
   11. Footer year
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* -------------------------------------------------------
     1. PRELOADER
  ------------------------------------------------------- */
  const preloader = document.getElementById("preloader");
  window.addEventListener("load", () => {
    setTimeout(() => preloader.classList.add("hidden"), 400);
  });
  // Fallback in case 'load' already fired
  setTimeout(() => preloader && preloader.classList.add("hidden"), 2000);


  /* -------------------------------------------------------
     2. AOS INIT
  ------------------------------------------------------- */
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
  }


  /* -------------------------------------------------------
     3. NAVBAR SCROLL + MOBILE MENU
  ------------------------------------------------------- */
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const navCta = document.getElementById("navCta");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  });

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
    navCta.classList.toggle("open");
  });

  // Close mobile menu when a link is clicked
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
      navCta.classList.remove("open");
    });
  });


  /* -------------------------------------------------------
     4. ACTIVE NAV LINK ON SCROLL
  ------------------------------------------------------- */
  const sections = document.querySelectorAll("section[id]");
  const navAnchors = document.querySelectorAll(".nav-link");

  const setActiveLink = () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 140;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navAnchors.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  };

  window.addEventListener("scroll", setActiveLink);
  setActiveLink();


  /* -------------------------------------------------------
     5. TYPING ANIMATION
  ------------------------------------------------------- */
  const typedTextEl = document.getElementById("typed-text");
  const roles = ["AI Engineer", "AI Agents Expert", "Web Developer"];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeLoop() {
    if (!typedTextEl) return;

    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      typedTextEl.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeLoop, 1400); // pause before deleting
        return;
      }
    } else {
      typedTextEl.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    const speed = isDeleting ? 50 : 90;
    setTimeout(typeLoop, speed);
  }

  typeLoop();


  /* -------------------------------------------------------
     6. ANIMATED COUNTERS
  ------------------------------------------------------- */
  const counters = document.querySelectorAll(".counter");

  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute("data-target"), 10);
    const duration = 1600;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      el.textContent = value + (target >= 100 ? "+" : "+");
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target + "+";
      }
    };

    requestAnimationFrame(step);
  };

  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));


  /* -------------------------------------------------------
     7. CURSOR GLOW
  ------------------------------------------------------- */
  const cursorGlow = document.getElementById("cursorGlow");

  if (cursorGlow && window.matchMedia("(min-width: 1025px)").matches) {
    window.addEventListener("mousemove", (e) => {
      cursorGlow.style.left = e.clientX + "px";
      cursorGlow.style.top = e.clientY + "px";
    });
  }


  /* -------------------------------------------------------
     8. NEURAL NETWORK CANVAS BACKGROUND
  ------------------------------------------------------- */
  const canvas = document.getElementById("networkCanvas");

  if (canvas && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const ctx = canvas.getContext("2d");
    let width, height, particles;

    const NODE_COUNT_DESKTOP = 60;
    const NODE_COUNT_MOBILE = 28;
    const MAX_DIST = 160;

    function resizeCanvas() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    }

    function createParticles() {
      const count = window.innerWidth < 768 ? NODE_COUNT_MOBILE : NODE_COUNT_DESKTOP;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      }));
    }

    function drawFrame() {
      ctx.clearRect(0, 0, width, height);

      // Update positions
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_DIST) {
            const opacity = 1 - dist / MAX_DIST;
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.25})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      particles.forEach((p) => {
        ctx.fillStyle = "rgba(34, 211, 238, 0.6)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(drawFrame);
    }

    resizeCanvas();
    createParticles();
    drawFrame();

    window.addEventListener("resize", () => {
      resizeCanvas();
      createParticles();
    });
  }


  /* -------------------------------------------------------
     9. BACK TO TOP BUTTON
  ------------------------------------------------------- */
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("visible", window.scrollY > 500);
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });


  /* -------------------------------------------------------
     10. CONTACT FORM (FormSubmit) HANDLING
     -----------------------------------------------------
     This shows a friendly "Sending..." / "Thank you" message
     using AJAX submission to FormSubmit so the page doesn't
     reload. If JavaScript fails for any reason, the form will
     still submit normally via its action attribute.
  ------------------------------------------------------- */
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector(".form-submit");
      const btnText = submitBtn.querySelector(".btn-text");
      const originalText = btnText.textContent;

      btnText.textContent = "Sending...";
      submitBtn.disabled = true;
      formStatus.textContent = "";

      try {
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          formStatus.textContent = "Thank you! Your message has been sent successfully.";
          contactForm.reset();
        } else {
          formStatus.textContent = "Something went wrong. Please try again or email me directly.";
        }
      } catch (err) {
        formStatus.textContent = "Something went wrong. Please try again or email me directly.";
      } finally {
        btnText.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  }


  /* -------------------------------------------------------
     11. FOOTER YEAR
  ------------------------------------------------------- */
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
