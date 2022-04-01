
let element = undefined
let nonExistentFirstElement = undefined
let count = 0

while (nonExistentFirstElement == undefined || count >=30) {
  setTimeout(() => {
    element = document.querySelectorAll('#endpoint');
    nonExistentFirstElement = element[2];
    if (nonExistentFirstElement) nonExistentFirstElement.remove();

  }, 100);
  count +=count
}