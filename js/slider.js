const slider = document.querySelector('.slider');
const output = document.querySelector('.output');

slider.addEventListener('input', () => {
  output.textContent = slider.value;
});

