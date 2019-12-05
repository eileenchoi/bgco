jQuery(document).ready(function($) {

    console.log("background");
    
 var images = [
    '/wp-content/uploads/2019/11/AdobeStock_7380918_Preview.jpeg',
    '/wp-content/uploads/2019/11/AdobeStock_298230770_Preview.jpeg',
    '/wp-content/uploads/2019/10/giammarco-boscaro-eWpBNXRHfTI-unsplash.jpg'
 ];
 
 // Get a random number between 0 and the number of images
 var randomNumber = Math.floor( Math.random() * images.length );
 // Use the random number to load a random image
 
 
     $("body.home").backstretch([
         images[randomNumber],
         ],{
         duration:3000,
         fade:750,
     });  
 }); 