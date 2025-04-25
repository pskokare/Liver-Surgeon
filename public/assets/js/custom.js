const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

$(window).on("load resize", function() {
  if (this.matchMedia("(max-width: 991px)").matches) {
    $dropdown.click(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  }
  
});


const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
     
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

  
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});


document.addEventListener("DOMContentLoaded", function () {
  const submenuToggles = document.querySelectorAll(".submenu-toggle");

  submenuToggles.forEach(toggle => {
    toggle.addEventListener("click", function (e) {
      const submenu = this.closest(".dropdown-submenu");
      const dropdownMenu = submenu.querySelector(".dropdown-menu");

      // Toggle class
      if (submenu.classList.contains("show-submenu")) {
        submenu.classList.remove("show-submenu");
        dropdownMenu.style.maxHeight = null;
      } else {
        // Close other submenus
        document.querySelectorAll(".dropdown-submenu").forEach(item => {
          item.classList.remove("show-submenu");
          item.querySelector(".dropdown-menu").style.maxHeight = null;
        });

        submenu.classList.add("show-submenu");
        dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + "px";
      }

      e.stopPropagation();
    });
  });
});