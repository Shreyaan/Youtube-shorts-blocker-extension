setTimeout(() => {
 let element = document.querySelectorAll("#endpoint");
 let nonExistentFirstElement = element[2];
  if (nonExistentFirstElement) nonExistentFirstElement.remove();
}, 1000);

setTimeout(() => {

  let output = [];
  let regex =/shorts*/gm
  for (let i of document.querySelectorAll('*')) {
      if (regex.test(i.href)) { // or whatever attribute you want to search
          output.push(i);
          var bruh = i.parentElement
          bruh.parentElement.remove()
      }
  }
  // output[0] && output.remove()
 }, 1000);
 

