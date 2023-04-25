'use strict';
setInterval(() => {
  let d = new Date(); //object of date()
  let hr = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  let hr_rotation = 30 * hr + min / 2; //converting current time
  let min_rotation = 6 * min;
  let sec_rotation = 6 * sec;

  const hour = document.querySelector('#hour');
  const minute = document.querySelector('#minute');
  const second = document.querySelector('#second');

  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);
