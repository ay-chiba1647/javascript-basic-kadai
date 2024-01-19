const button = document.getElementById('btn');

const text = document.getElementById('text');

const clickBtn =document.getElementById('click-btn');

button.addEventListener('click', () => {
  text.style.display = 'none'
  setTimeout(() => {
    const childList = document.createElement('h2');
  childList.textContent = 'ボタンをクリックしました';
  clickBtn.appendChild(childList);
  },2000)
});