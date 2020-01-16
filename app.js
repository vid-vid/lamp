jQuery(document).ready(function($){

    $('.on').on({
         'click': function(){
             $('#change-image').attr('src','./bulb-1.jpg');
         }
     });
     
     $('.off').on({
        'click': function(){
            $('#change-image').attr('src','./bulb-0.jpg');
        }
    });



    });