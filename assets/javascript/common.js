let friendVideoPlayerContainer = document.getElementById('friend-video-player-container');
let resizer = document.getElementById('resizer');

let mouseOverResizer = false
let mouseResizing = false

resizer.addEventListener('mousedown', initResize, false);
resizer.addEventListener('mouseleave', setMouseOverResizer, false);
resizer.addEventListener('mouseover', setMouseOverResizer, false);

//Window funtion mousemove & mouseup
function initResize(e) {
   window.addEventListener('mousemove', Resize, false);
   window.addEventListener('mouseup', stopResize, false);
}


function setMouseOverResizer() {
  if (mouseResizing) {
    return
  }

  if (mouseOverResizer === true) {
    mouseOverResizer = false
  }
  else {
    mouseOverResizer = true
  }

  console.log(`Over resizer - ${mouseOverResizer}`)
}

//resize the element
function Resize(e) {
  if (mouseOverResizer !== true) {
    return
  }

  mouseResizing = true

  friendVideoPlayerContainer.style.width = (e.clientX - friendVideoPlayerContainer.offsetLeft) + 'px';
  friendVideoPlayerContainer.style.height = (e.clientY - friendVideoPlayerContainer.offsetTop) + 'px';
}
//on mouseup remove windows functions mousemove & mouseup
function stopResize(e) {
    window.removeEventListener('mousemove', Resize, false);
    window.removeEventListener('mouseup', stopResize, false);

    mouseResizing = false
    mouseOverResizer = false
}

dragElement(friendVideoPlayerContainer);

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {

    if (mouseOverResizer === true) {
      return
    }

    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }


}