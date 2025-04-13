let currentSlide = 1;
let lastChangeTime = 0;
let clickCount = 0;
let clickWindowStart = Date.now();

function changeSlide(direction) {
  const now = Date.now();

  // Spam click detector: count clicks within 1 second
  if (now - clickWindowStart < 1000) {
    clickCount++;
    if (clickCount > 3) {
      alert("Chill chill, loading it!!");
      return;
    }
  } else {
    clickWindowStart = now;
    clickCount = 1;
  }

  // Throttle: allow only one image change per second
  if (now - lastChangeTime >= 1000) {
    currentSlide += direction;

    // Keep slide number >= 1
    if (currentSlide < 1) currentSlide = 1;

    const image = document.getElementById("sliderImage");
    image.src = `https://picsum.photos/600/400?random=${currentSlide}`;
    document.getElementById("slideNum").textContent = currentSlide;

    lastChangeTime = now;
  }
}
