// JS partials
function loadHTML(id, file) {
    fetch(file)
      .then(res => res.text())
      .then(html => {
        document.getElementById(id).innerHTML = html;
      });
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    loadHTML("header", "partials/header.html");
    loadHTML("footer", "partials/footer.html");
  });

// Initialize EmailJS
(function() {
    emailjs.init("Z9yGweyGia7Up6cAU");
  })();
  
  // Handle form submission
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    emailjs.sendForm("service_l1g0ket", "template_ew74ac8", this)
      .then(() => {
        document.getElementById("form-status").innerText = "Message sent! We'll be in touch soon.";
        this.reset();
      }, (error) => {
        document.getElementById("form-status").innerText = "Failed to send message. Please try again.";
        console.error("EmailJS error:", error);
      });
  });
  