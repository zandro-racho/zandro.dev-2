document.addEventListener("DOMContentLoaded", function () {
  let svg = document.getElementById("theme");
  let darkElement = document.getElementById("dark");
  let lightElement = document.getElementById("light");
  let h1Element = document.querySelector("main h1");
  let h3Element = document.querySelector("main h3");
  const white = "#f3f2f9";
  const darkBlue = "#002233";
  const lightBlue = "#0066ff";

  let transformed = true;

  function applyTransformation() {
    if (transformed) {
      darkElement.style.transform = "translateY(17px)";
      lightElement.style.transform = "none";
      document.body.style.background = darkBlue;
      h1Element.style.color = white;
      h3Element.style.color = white;
      h1Element.addEventListener("mouseenter", function () {
        h1Element.style.color = lightBlue;
      });
      h1Element.addEventListener("mouseleave", function () {
        h1Element.style.color = white;
      });
    } else {
      darkElement.style.transform = "none";
      lightElement.style.transform = "translateY(17px)";
      document.body.style.background = white;
      h1Element.style.color = darkBlue;
      h3Element.style.color = darkBlue;
      h1Element.addEventListener("mouseenter", function () {
        h1Element.style.color = lightBlue;
      });
      h1Element.addEventListener("mouseleave", function () {
        h1Element.style.color = darkBlue;
      });
    }
  }
  applyTransformation();

  function themeSwitch() {
    transformed = !transformed;

    applyTransformation();
  }

  svg.addEventListener("click", themeSwitch);
});
