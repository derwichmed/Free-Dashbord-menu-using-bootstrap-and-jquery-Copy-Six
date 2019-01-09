$(function (){
   $('.nav_bar_item').mouseover(function (){
      $('.nav_bar_item > div > .sub_menu:visible').hide();
      $('.nav_bar_item .sub_menu_drop_down:visible').hide();
      if($(window).width() >= 900)
        $(this).find('.sub_menu_drop_down').show();
      $(this).find('> div > .sub_menu').show();
      
   });
   
   $('.sub_menu_item').mouseover(function (){
      $('.sub_menu_item > div > .sub_menu:visible').hide();
      $(this).find('> div > .sub_menu').show(); 
   });
   
   isUserManagerHidden = true;
   $('.user_manager').click(function (){
      if(isUserManagerHidden){
          isUserManagerHidden = false;
          $(this).find('.drop_down_border').show();
          $(this).find('.drop_down').show();
      } 
        else{
          isUserManagerHidden = true;
          $(this).find('.drop_down_border').hide();
          
          $(this).find('.drop_down').hide();
      } 
   });
   
   $('.side_bar .content .item').click(function (){
        $('.side_bar .content .item > ul:visible').hide();
        $(this).find('> ul').show();
   });
   
   isSideBarHidden = true;
   $('.sidebar_menu').click(function (){
       $('.nav_bar').hide();
       isNavBarHidden = true;
      if(isSideBarHidden){
          $('.side_bar').width('0px');
          $('.side_bar').show();
          $('.side_bar').children().hide();
          $('.side_bar').animate({
                width: '250px'
            }, 250,function (){
                $('.side_bar').children().fadeIn("slow");
            });
          isSideBarHidden = false;
      }
        else{
            $('.side_bar').children().fadeOut("slow");
            $('.side_bar').animate({
                width: '0px'
            }, 250,function (){
                $('.side_bar').hide();
            });
            isSideBarHidden = true;
        }
   });
   
   isNavBarHidden = true;
   $('.nav_bar_menu').click(function (){
       $('.side_bar').hide();
       isSideBarHidden = true;
      if(isNavBarHidden){
          $('.nav_bar').show();
          isNavBarHidden = false;
      }
        else{
            $('.nav_bar').hide();
            isNavBarHidden = true;
        }
   });
   
   
});