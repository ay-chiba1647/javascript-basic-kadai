const button = document.getElementById('btn');

const text = document.getElementById('text');

const clickBtn =document.getElementById('click-btn');

button.addEventListener('click', () => {
  const childList = document.createElement('h2');
  childList.textContent = 'ボタンをクリックしました';
  clickBtn.appendChild(childList);
  text.style.display = 'none'
});