


function randomImage(){
    var images = [
        '/wp-content/uploads/2019/12/fourcourts-full-scaled.jpeg',
        // '/wp-content/uploads/2019/12/longroom-full-scaled.jpeg',
        // '/wp-content/uploads/2019/12/dublincity-full-scaled.jpeg',
        '/wp-content/uploads/2019/12/trinitycollege-full-scaled.jpg'
       
        
    ];
    var size = images.length;
    var x = Math.floor(size * Math.random());
    var element = document.getElementsByClassName('front-page-1');

    element[0].style["background-image"] = "url("+ images[x] + ")";
    
  }
  
  document.addEventListener("DOMContentLoaded", randomImage);