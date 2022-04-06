let delay = 1000 //1000 = 1 sec

//removes shorts from side panel
setTimeout(() => {
  let element = document.querySelectorAll("#endpoint");
  let nonExistentFirstElement = element[2];
  if (nonExistentFirstElement) nonExistentFirstElement.remove();
}, delay);

function removeShorts() {
  let output = [];
  let regex = /shorts*/gm;
  for (let i of document.querySelectorAll("*")) {
    if (regex.test(i.href)) {
      output.push(i);
      var bruh = i.parentElement;
      bruh.parentElement.remove();
    }
  }

  let shortsPlayer = document.getElementById("shorts-player");
  let shortsPlayerParent;
  if (shortsPlayer) shortsPlayerParent = shortsPlayer.parentElement;
  if (shortsPlayerParent != undefined || null) {
    shortsPlayerParent.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
  }
}

setTimeout(() => {
  removeShorts();
}, delay);


var time = 1;
var interval = setInterval(function () {
  if (time <= 100) {
    removeShorts();

    time++;
  } else {
    clearInterval(interval);
  }
}, delay);
