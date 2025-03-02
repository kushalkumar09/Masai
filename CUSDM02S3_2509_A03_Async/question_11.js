function timer(duration, onComplete) {
  setTimeout(() => {
    onComplete(duration);
  }, duration);
}

timer(3000, (duration) => {
  console.log(`Timer of ${duration} ms finished`);
});
