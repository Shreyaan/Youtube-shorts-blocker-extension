//removes shorts from side panel
setTimeout(() => {
  let element = document.querySelectorAll("#endpoint");
  let nonExistentFirstElement = element[2];
  if (nonExistentFirstElement) nonExistentFirstElement.remove();
}, 1000);

function removeShorts() {
  let output = [];
  let regex = /shorts*/gm;
  for (let i of document.querySelectorAll("*")) {
    if (regex.test(i.href)) {
      // or whatever attribute you want to search
      output.push(i);
      var bruh = i.parentElement;
      bruh.parentElement.remove();
    }
  }

  let shortsPlayer= document.getElementById('shorts-player')
  let shortsPlayerParent 
if (shortsPlayer) shortsPlayerParent = shortsPlayer.parentElement
  if(shortsPlayerParent != undefined || null) {shortsPlayerParent.parentElement.parentElement.remove()}

}

setTimeout(() => {
  removeShorts();
}, 1000);

var time = 1;

var interval = setInterval(function () {
  if (time <= 100) {
    removeShorts();

    time++;
  } else {
    clearInterval(interval);
  }
}, 1000);
