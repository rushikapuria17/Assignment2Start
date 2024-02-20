// constants for query selector
const customNumberInput = document.getElementById('customNumber');
const customColorButton = document.querySelector('.custColor');
const randomColorButton = document.querySelector('.randColor');
const imageSelect = document.getElementById('imageSelect');
const images = document.getElementById('images');
const studentIdParagraph = document.getElementById('myStudentId');

// function to change bg color from user input and add student id
function changeCustomColor() {
    let userInput = parseInt(customNumberInput.value);

    // Display student ID
    studentIdParagraph.textContent = "Student ID: 200556077";

    // Change background color based on user input
    if (userInput < 0 || userInput > 100) {
        document.body.style.backgroundColor = 'red';
    } else if (userInput >= 0 && userInput < 20) {
        document.body.style.backgroundColor = 'green';
    } else if (userInput >= 20 && userInput < 40) {
        document.body.style.backgroundColor = 'blue';
    } else if (userInput >= 40 && userInput < 60) {
        document.body.style.backgroundColor = 'orange';
    } else if (userInput >= 60 && userInput < 80) {
        document.body.style.backgroundColor = 'purple';
    } else {
        document.body.style.backgroundColor = 'yellow';
    }
}

// function to change bg color from random no.
function changeRandomColor() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    customNumberInput.value = randomNumber;
    changeCustomColor();
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
    const imageNames = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg']; // Update with your image names
    for (let i = 0; i < imageNames.length; i++) {
        let option = document.createElement('option');
        option.text = imageNames[i];
        imageSelect.add(option);
    }
}

// function to change image
function changeImage() {
    let selectedImage = imageSelect.value;
    images.src = './img/' + selectedImage;
}

// event listeners for on click event of buttons and select
customColorButton.addEventListener('click', changeCustomColor);
randomColorButton.addEventListener('click', changeRandomColor);
imageSelect.addEventListener('change', changeImage);

// Initialize the select list
addList();
