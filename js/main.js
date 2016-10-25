/**
 * Created by rhkina on 08/11/15.
 */
//import { Meteor } from 'meteor/meteor';

/**
 * Created by rhkina on 08/11/15.
 */

(function($){        	  
	  $(function(){
		$(document).ready(function(){
                    $('#checkbox').change(function(){
                        
                      });
                        
                    	
        	         
                   $("#slidetab1 > div:gt(0)").hide();
                  setInterval(function() { 
                      $('#slidetab1 > div:first')
                          .hide()
                          .next()
                          .show("slow")
                          .end()
                          .appendTo('#slidetab1');
                      }, 3000);
        	      
        	        $("#slidetab > div:gt(0)").hide();
        	        setInterval(function() { 
                      $('#slidetab > div:first')
                          .hide()
                          .next()
                          .show("slow")
                          .end()
                          .appendTo('#slidetab');
                      }, 3000);
        	        
                    $('.tabbut').click(function(){
                    $("#slidetab > div:gt(0)").hide();
                    //$(".tabcontent"+$(this).attr('id')).siblings().hide();
		            $(".tabcontent"+$(this).attr('id')).show("slow");
		            //setInterval();
	            	
		            
		            
                 });
        	  });

        	$(document).ready(function()	{
		   $('.scrollspy').scrollSpy({scrollOffset: 0});
		  });
        	var options = [ 
        		{selector: '#techbg', offset: 300, callback: "Materialize.fadeInImage('#techbg')" },
        		{selector: '#mobile', offset: 100, callback: "Materialize.fadeInImage('#techbg')" },
        		{selector: '#walletbg', offset: 300, callback: "Materialize.fadeInImage('#walletbg')" },
        		{selector: '#eonbg', offset: 300, callback: "Materialize.fadeInImage('#eonbg')" },
        		];
			Materialize.scrollFire(options);

            
           $('.button-collapse').sideNav();
           $('.parallax').parallax();
          function fadef(){
                        Materialize.fadeInImage('#eonbg');
          };


	 $('.carousel.carousel-slider').carousel({full_width: true});
           $('.carousel.carousel-slider').carousel({
                padding: 0    
            });
            autoplay()   
            function autoplay() {
                $('.carousel').carousel('next');
                setTimeout(autoplay, 4500);
            }          
           

           
           

	});
        })(jQuery); // end of document ready




