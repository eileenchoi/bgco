

// Close menu when link is clicked

jQuery(document).ready(function(){
    jQuery('.menu li a').click(function() {
        jQuery('.genesis-responsive-menu').slideUp('slow');
        jQuery('.menu-toggle').removeClass('activated');
    });

});
 
// Close menu when click outside

jQuery('.site-inner').click(function() {
    
    jQuery('.genesis-responsive-menu').slideUp('slow');
    jQuery('.menu-toggle').removeClass('activated');
    console.log('working');
    
});

// Close menu when click on front-page-1 (outside)

// jQuery('.menu-toggle').click(function(e) { 
//     e.stopPropagation(); 
//     console.log('event stopped');
    
// }); // This should stop the event when button is clicked

// jQuery('.menu-toggle.activated') && jQuery(document).click(function() {
    

//         jQuery('.genesis-responsive-menu').slideUp('slow');
//         jQuery('.menu-toggle').removeClass('activated');
//         console.log('working');
        
// });

// jQuery('.menu-toggle.activated') && jQuery('.site-inner').click(function() {
    
//     jQuery('.genesis-responsive-menu').slideUp('slow');
//     jQuery('.menu-toggle').removeClass('activated');
//     console.log('working');
    
// });





