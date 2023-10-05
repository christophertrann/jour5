document.addEventListener("DOMContentLoaded", function () {
    
    window.addEventListener("resize", function () {
      
      alert("Size matters");
    });
  
    var phonePicture = document.querySelector("img");
  
    phonePicture.addEventListener("mouseover", function () {
      
      alert("Pretty, isn't it?");
    });
  });
  