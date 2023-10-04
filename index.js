

function showImage(imageNumber) {
    document.getElementById('imageContainer' + imageNumber).style.display= 'flex';
    
}

function hideImage(imageNumber) {
    document.getElementById('imageContainer' + imageNumber).style.display = 'none';
}

const toggleButton = document.getElementById('toggle-button');
const hiddenParagraph = document.getElementById('hidden-paragraph');

  toggleButton.addEventListener('click', () => {
      if (hiddenParagraph.style.display === 'none') {
          hiddenParagraph.style.display = 'block';
      } else {
          hiddenParagraph.style.display = 'none';
      }
  });

  function myFunction() {
      let element = document.body;
      element.classList.toggle("light");
  }
  
