(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", () => {
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim();
      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    };

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all);
      if (selectEl) {
        if (all) {
          selectEl.forEach((e) => e.addEventListener(type, listener));
        } else {
          selectEl.addEventListener(type, listener);
        }
      }
    };

    /**
     * Easy on scroll event listener
     */
    const onscroll = (el, listener) => {
      el.addEventListener("scroll", listener);
    };

    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      const offset = 0;

      /*
      const header = select("#header");
      let offset = header.offsetHeight;
      if (!header.classList.contains("header-scrolled")) {
        offset -= 16;
      }
        */

      let elementPos = select(el).offsetTop;
      window.scrollTo({
        top: elementPos - offset,
        behavior: "smooth",
      });
    };

    /**
     * Scroll with offset on links with an attr [data-target]
     */
    on(
      "click",
      "[data-target]",
      function (e) {
        if (select(this.dataset.target)) {
          e.preventDefault();
          scrollto("#" + this.dataset.target);
          /*
          const navbar = select("#header");
          if (navbar.classList.contains("navbar-mobile")) {
            navbar.classList.remove("navbar-mobile");
            const navbarToggle = select(".mobile-nav-toggle");
            navbarToggle.classList.toggle("bi-list");
            navbarToggle.classList.toggle("bi-x");
          }
            */
        }
      },
      true
    );

    /**
     * Back to top button
     */
    const backtotop = select(".has-back-to-top-btn");
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > window.innerHeight) {
          backtotop.classList.add("visible");
        } else {
          backtotop.classList.remove("visible");
        }
      };
      window.addEventListener("load", toggleBacktotop);
      onscroll(document, toggleBacktotop);
    }

    /**
     * Header / Navbar BG / COLOR change on scroll
     */
    const navbar = select("#header .navbar");
    if (navbar) {
      const tglHdClass = () => {
        if (window.scrollY > window.innerHeight / 2) {
          navbar.classList.remove("bg-dark");
          navbar.classList.add("bg-primary");
        } else {
          navbar.classList.remove("bg-primary");
          navbar.classList.add("bg-dark");
        }
      };
      window.addEventListener("load", tglHdClass);
      onscroll(document, tglHdClass);
    }

    /**
     * Scroll with offset on page load with hash links in the url
     */
    window.addEventListener("load", () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash);
        }
      }
    });
  });
})();
