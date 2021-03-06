var hiddenText = function(){
    text.hidden = true;
}

var hiddenButton = function(){
    button = document.getElementsByTagName("button");
    button[0].hidden = true;
}

var moveBanner = function(){
    banner = document.getElementById("banner");
    banner.style.right = (banner.style.right == "0px") ? "-450px" : "0px";
}

scr = function(){
  try{
    list.addEventListener("click", (e) => {
      var tag = e.target;
      tag.remove();
    })
  }catch(error){}
  
  try {
    field.onclick = function(event){
      let fieldCoords = this.getBoundingClientRect();
  
      let ballCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
      };
  
      if (ballCoords.top < 0) ballCoords.top = 0;
      if (ballCoords.left < 0) ballCoords.left = 0;
  
      if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
      }
  
      if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
      }
  
      ball.style.left = ballCoords.left + 'px';
      ball.style.top = ballCoords.top + 'px';
    }
  } catch(error){}
}
