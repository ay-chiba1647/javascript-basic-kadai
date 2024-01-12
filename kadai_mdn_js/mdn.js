const date = new Date();
const month = date.getMonth() + 1; 
const day = date.getDate();
const year = date.getFullYear();

console.log(year + '年' + month + '月' + day + '日');


  const hour = date.getHours();
  const minites = date.getMinutes();
  const seconds = date.getSeconds();

console.log(hour + '時' + minites + '分' + seconds + '秒')