
document.addEventListener("DOMContentLoaded", function () {
    
    let paragraphs = document.querySelectorAll('p');
  
    paragraphs.forEach(function (paragraph, index) {
      paragraph.textContent = (index).toString();
    });
  });
  