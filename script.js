//removes shorts from side panel
setTimeout(() => {
  let element = document.querySelectorAll("#endpoint");
  let nonExistentFirstElement = element[2];
  if (nonExistentFirstElement) nonExistentFirstElement.remove();
}, 1000);

//removes shorts from search 
setTimeout(() => {
  let output = [];
  let regex = /shorts*/gm;
  for (let i of document.querySelectorAll("*")) {
    if (regex.test(i.href)) {
      output.push(i);
      var bruh = i.parentElement;
      bruh.parentElement.remove();
    }
  }
}, 1000);
