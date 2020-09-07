/* -- Loading assets -- */
$("#header").load("assets/header.html");
$("#footer").load("assets/footer.html");

/* -- Typewriter text effect -- */
var tw = {
  /* Object with properties */
  container: "typewriter",
  text: "In love with simplicity and minimalism.",
  delay: 100, // Delay between characters

  /* [The mechanics] */
  timer: null, // Used to hold the timer
  pointer: 0, // Current text position
  draw: function () {
    // tw.draw() : typewriter effect

    tw.pointer++;
    tw.container.innerHTML = tw.text.substring(0, tw.pointer);
    if (tw.pointer < tw.text.length) {
      tw.timer = setTimeout(tw.draw, tw.delay);
    }
  }
};

window.addEventListener("load", function () {
  tw.container = document.getElementById(tw.container);
  tw.draw();
});