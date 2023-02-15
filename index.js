function generateRandomColor() {
    const hexValues = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexValues[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

function randomizeColors() {
    const cards = document.querySelectorAll('.color');
    const labels = document.querySelectorAll('.colorHex');
    const colors = [generateRandomColor(), generateRandomColor(), generateRandomColor(), generateRandomColor(), generateRandomColor(), generateRandomColor()];
    
    var i = 0;
    cards.forEach(card => {
      const randomColor = colors[i];
      card.style.backgroundColor = randomColor;
      i++;
    });

    var j = 0;
    labels.forEach(label =>{
        const randomColor = colors[j];
        label.textContent = randomColor;
        j++;
    });
  }

// Get an array of all divs to copy
const colorText = document.querySelectorAll('.colorHex');

// Add a click event listener to each div
colorText.forEach((div) => {
  div.addEventListener('click', () => {
    copyToClipboard(div.textContent);
  });
});

// Function to copy text to the clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log(`Copied ${text} to clipboard`);
      showPopup(text);
    })
    .catch((error) => {
      console.error(`Error copying ${text} to clipboard: ${error}`);
    });
}

function showPopup(message) {
    const popup = document.querySelector('.copied');
  
    popup.textContent = 'Color ' + message + ' copied to clipboard';
    popup.style.opacity = '1'; 
    popup.style.display = 'block';

    setTimeout(() => {
        popup.style.opacity = '0';
      }, 1500);
  
    setTimeout(() => {
      popup.style.display = 'none';
    }, 2000);
  }
  
  document.addEventListener('keydown', k => {
    if (k.key === ' ') {
        randomizeColors();
    }
});
  