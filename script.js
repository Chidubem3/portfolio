function writeAndEraseLoop(words, speed) {
    let outputElement = document.getElementById('text');
    let currentIndex = 0;
    let isErasing = false;

    function updateText() {
      const currentText = outputElement.innerText;
      const targetText = words[currentIndex];

      if (isErasing) {
        outputElement.innerText = currentText.substring(0, currentText.length - 1);
      } else {
        outputElement.innerText = targetText.substring(0, currentText.length + 1);
      }

      if (!isErasing && outputElement.innerText === targetText) {
        isErasing = true;
        setTimeout(updateText, 1000); // Wait for a second before erasing
      } else if (isErasing && outputElement.innerText === '') {
        isErasing = false;
        currentIndex = (currentIndex + 1) % words.length;
        setTimeout(updateText, 500); // Wait for half a second before writing the next word
      } else {
        setTimeout(updateText, speed);
      }
    }

    // Start the loop
    updateText();
  }

  // Calling the function with an array of words and a speed (in milliseconds)
writeAndEraseLoop(["Frontend-Developer", "Writer", "Web-Developer", "Software-Engineer"], 100);

// For the Side Nav
const sidebar = document.querySelector('#sidebar');
const sidenav= document.querySelector('.sidenav_style');
const closes = document.querySelector('#closebtn');

sidebar.addEventListener('click', () => {
  sidebar.id='hide';
  sidenav.classList.add('show');
});

closes.addEventListener('click', () => {
  sidebar.id='sidebar'; 
  sidenav.classList.remove("show");
});

//  For change pictuers
const images = ["./image/img.jpg", "./image/img2a.jpg", "./image/active.jpg","./image/img3.jpg"];
let C_index = 0;

setInterval(() => {
  C_index = (C_index + 1) % images.length;
  document.getElementById("changing_img").src = images[C_index];
}, 10000);

//  For change  main pictuers 
const main_images = ["./image/image.png", "./image/image1.png", "./image/image2.png","./image/image3.png"];
let main_Current_index = 0;

setInterval(() => {
  main_Current_index = (main_Current_index + 1) % images.length;
  document.getElementById("main-inage").src = main_images[main_Current_index];
}, 5000);

