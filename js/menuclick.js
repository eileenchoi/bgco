

// Close when link is clicked only in mobile menu

jQuery(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    jQuery(window).resize(checkSize);
});

//Function to the css rule
function checkSize(){

    if (jQuery(".menu-toggle").css("display") == "block" ){
            jQuery('.menu li a').click(function() {
            jQuery('.genesis-responsive-menu').slideUp('slow');
            jQuery('.menu-toggle').removeClass('activated');
        });
       
    } else {
        return;
    }
}


// Close menu if anywhere in site-header (anywhere in body) is clicked, only in mobile menu

jQuery(document).ready(function() {
    // run test on initial page load
    checkSizeTwo();

    // run test on resize of the window
    jQuery(window).resize(checkSizeTwo);
});

//Function to the css rule
function checkSizeTwo(){

    if (jQuery(".menu-toggle").css("display") == "block" ){
        
        jQuery('.site-inner').click(function() {
            jQuery('.genesis-responsive-menu').slideUp('slow');
            jQuery('.menu-toggle').removeClass('activated');
            console.log('two working');
            
        });
       
    } else {
        console.log("");
        // These wouldn't work with just 'if' statements, having to statements both with return caused a fatal conflict that causes the functions to fail
    }
}