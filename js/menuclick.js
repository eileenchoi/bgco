import { brotliDecompressSync } from "zlib";



  $(document).ready(function(){

    jQuery(".menu li a").click(function () {
        jQuery(".nav-primary").toggle();
        jQuery(".menu-toggle").removeClass('activated');
    });
  
  });

  