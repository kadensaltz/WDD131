//Select the dropdown button and menu
const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dropdownMenu');

//Set initial state for the dropdown menu
dropdownMenu.style.display = 'none';

//Toggle dropdown menu visibility on button click
dropdownButton.addEventListener('click', function() {
  if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
    dropdownMenu.style.display = 'block';
  } else {
    dropdownMenu.style.display = 'none';
  }
});

//Handle window resize to show/hide the dropdown based on screen width
function handleResize() {
  if (window.innerWidth > 1000) {
    dropdownMenu.classList.remove('hide');
    dropdownMenu.style.display = 'block';
  } else {
    dropdownMenu.classList.add('hide');
    dropdownMenu.style.display = 'none';
  }
}

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);

//generate the HTML template for the viewer modal
function viewerTemplate(pic, alt) {
  return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="norris-full.jpeg" alt="larger img">
  </div>`;
}

//handle clicks on images within the gallery
function viewHandler(event) {
  const clickedElement = event.target;
  
  if (clickedElement.tagName === 'IMG') {
    const imgSrc = clickedElement.src.split('-');
    const fullImageSrc = `${imgSrc[0]}-full.jpeg`;
    const viewerHTML = viewerTemplate(fullImageSrc, clickedElement.alt);
    document.body.insertAdjacentHTML('afterbegin', viewerHTML);
    document.querySelector('.close-viewer').addEventListener('click', closeViewer);
  }
}

//remove the viewer div from the DOM
function closeViewer() {
  const viewerDiv = document.querySelector('.viewer');
  if (viewerDiv) {
    viewerDiv.remove();
  }
}


//Attach the viewHandler function to the gallery section
document.querySelector('.gallery').addEventListener('click', viewHandler);