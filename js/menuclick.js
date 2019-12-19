


  // jQuery(document).ready(function(){

  //   jQuery('.menu li a').click(function () {
  //       jQuery(".nav-primary").toggle();
  //       jQuery(".menu-toggle").removeClass('activated');
  //       console.log("wtf");
  //   });
  
  // });

  jQuery(document).ready(function(){

    if (jQuery(".menu-toggle").hasClass("activated") && jQuery(".site-container").live('click', function() {
      
      jQuery(".menu-toggle").removeClass('activated');

    } else {

      jQuery('.menu li a').click(function () {
              jQuery(".nav-primary").toggle();
              jQuery(".menu-toggle").removeClass('activated');
              console.log("wtf");
          })
    }

  
  });

  