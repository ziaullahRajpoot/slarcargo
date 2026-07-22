/* =============================================================
   Slar Chargo — app.js
   Lucide icons · mobile nav · image sliders · WhatsApp forms
   ============================================================= */
(function () {
  "use strict";

  var WHATSAPP = "971500000000"; // TODO: replace with the real WhatsApp number

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    // ---- Lucide icons ----
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }

    // ---- Mobile nav toggle ----
    var nav = document.querySelector(".sc-nav");
    var toggle = document.querySelector(".sc-nav-toggle");
    if (nav && toggle) {
      toggle.addEventListener("click", function () {
        var open = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(open));
      });
      nav.querySelectorAll(".sc-nav-links a").forEach(function (a) {
        a.addEventListener("click", function () {
          nav.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    }

    // ---- Cross-fade image sliders ----
    document.querySelectorAll("[data-sc-slider]").forEach(function (slider) {
      var slides = Array.prototype.slice.call(slider.querySelectorAll(".sc-slide"));
      var dots = Array.prototype.slice.call(slider.querySelectorAll(".sc-dot"));
      if (slides.length < 2) return;
      var i = 0;
      setInterval(function () {
        i = (i + 1) % slides.length;
        slides.forEach(function (s, n) { s.style.opacity = n === i ? "1" : "0"; });
        dots.forEach(function (d, n) {
          d.style.width = n === i ? "22px" : "6px";
          d.style.background = n === i ? "#ffffff" : "rgba(255,255,255,0.5)";
        });
      }, 3500);
    });

    // ---- WhatsApp forms (Contact + Quote) ----
    document.querySelectorAll("[data-sc-whatsapp]").forEach(function (form) {
      var btn = form.querySelector("[data-sc-send]");
      var errEl = form.querySelector("[data-sc-error]");
      if (!btn) return;

      btn.addEventListener("click", function () {
        var fields = Array.prototype.slice.call(form.querySelectorAll("[data-sc-field]"));
        var missing = fields.some(function (el) {
          return el.hasAttribute("data-sc-required") && !String(el.value || "").trim();
        });
        if (missing) {
          if (errEl) errEl.style.display = "block";
          return;
        }
        if (errEl) errEl.style.display = "none";

        var title = form.getAttribute("data-sc-title") || "New message, Slar Chargo";
        var lines = [title];
        fields.forEach(function (el) {
          var label = el.getAttribute("data-sc-label") || el.name || "";
          var val = String(el.value || "").trim();
          if (val) lines.push(label + ": " + val);
        });
        var url = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(lines.join("\n"));
        window.open(url, "_blank", "noopener");
      });
    });
  });
})();
