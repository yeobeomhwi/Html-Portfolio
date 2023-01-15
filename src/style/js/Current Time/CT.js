const clock=document.querySelector('.main-clock');

function getTime() {
  const time = new Date();
  const minutes = time.getMinutes();
  const hours = time.getHours();
  const seconds = time.getSeconds();
  //clock.innerHTML = hour + ":" + minutes + ":" + seconds;
  clock.innerHTML = `${    /* 시간이 두자리로 나오게 하는 명령문 */
    hours <10 ? `0${hours}` : hours
    }
    :${    
    minutes < 10 ? `0${minutes}` : minutes
    }
    :${
    seconds < 10 ? `0${seconds}` : seconds
    }`
}

function init(){
    getTime();
    setInterval(getTime, 1000);   /* 1초마다 시계 업데이트 */
}

init();
