function slideImages(direction) {
  const slider = document.getElementById('imageSlider');
  const scrollAmount = 220; // ระยะที่เลื่อนต่อครั้ง
  slider.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}
