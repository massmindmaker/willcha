var require = meteorInstall({"client":{"footer":{"template.footer.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// client/footer/template.footer.js                                                                          //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
                                                                                                             // 1
Template.__checkName("footer");                                                                              // 2
Template["footer"] = new Template("Template.footer", (function() {                                           // 3
  var view = this;                                                                                           // 4
  return HTML.Raw('<footer class="page-footer">\n    \n\n\n        <!-- CONTACT US -->\n        <div class="scrollspy" id="eon"></div>\n\n        <div class="container valign-wrapper">\n            <div class="row">\n                <div class="col s6">\n                    <h5 class="white-text">Leave your contact data if you want try out our beta.</h5>\n                    <form>\n\n                        <div class="input-field">\n                          <input id="email" type="email" class="validate">\n                          <label for="email">Email</label>\n\n                  </div>\n              </form>\n                </div>\n      </div>\n  </div>\n  <!-- CONTACT US -->\n        <div class="container">\n            <div class="row">\n                <div class="col l6 s12">\n                    <h5 class="white-text">Company Bio</h5>\n                    <p class="grey-text text-lighten-4">We are a team of college students working on this project like it\'s our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>\n\n\n                </div>\n                <div class="col l3 s12">\n                    <h5 class="white-text">Settings</h5>\n                    <ul>\n                        <li><a class="white-text" href="#!">Link 1</a></li>\n                        <li><a class="white-text" href="#!">Link 2</a></li>\n                        <li><a class="white-text" href="#!">Link 3</a></li>\n                        <li><a class="white-text" href="#!">Link 4</a></li>\n                    </ul>\n                </div>\n                <div class="col l3 s12">\n                    <h5 class="white-text">Connect</h5>\n                    <ul>\n                        <li><a class="white-text" href="#!">Link 1</a></li>\n                        <li><a class="white-text" href="#!">Link 2</a></li>\n                        <li><a class="white-text" href="#!">Link 3</a></li>\n                        <li><a class="white-text" href="#!">Link 4</a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class="footer-copyright">\n            <div class="container">\n                Made by <a class="brown-text text-lighten-3" href="http://materializecss.com">Will Industries</a>\n            </div>\n        </div>\n    </footer>');
}));                                                                                                         // 6
                                                                                                             // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"header":{"template.header.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// client/header/template.header.js                                                                          //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
                                                                                                             // 1
Template.__checkName("header");                                                                              // 2
Template["header"] = new Template("Template.header", (function() {                                           // 3
  var view = this;                                                                                           // 4
  return [ HTML.HEAD("\n        ", HTML.Raw('<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">'), "\n        ", HTML.Raw('<meta name="google-site-verification" content="0Asdci5FFD0sb7k0eSutqniHqswRAEjv-wqo9XVnJbQ">'), " \n        ", HTML.Raw('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">'), "\n         ", HTML.Raw('<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'), "\n         ", HTML.TITLE("Channels - be confident"), "\n    "), HTML.Raw('\n    <div id="index-banner" class="navbar-fixed scrollspy">\n    <nav class="white" role="navigation">\n        <div class="nav-wrapper">\n        <div class="row">\n            <div class="col s6">\n                <div class="container">\n                    <a id="logo-container" href="#index-banner" class="brand-logo"><img src="/images/logo.png"></a>\n                </div>\n            </div>\n\n            <div class="col s6 left-align no-padding">\n                \n                <ul class="hide-on-med-and-down left">\n                    <li><a href="#tech" class="black-text">What you get?</a></li>\n                    <li><a href="#how" class="black-text">How it works?</a></li>\n                    <li><a href="#eon" class="black-text">Want to test?</a></li>\n                </ul>\n                \n            </div>\n        </div>\n\n\n            <ul id="nav-mobile" class="side-nav">\n                <li><a href="#tech" class="black-text">What you get?</a></li>\n                <li><a href="#wallet" class="black-text">Technology</a></li>\n                <li><a href="#eon" class="black-text">Timeline</a></li>\n                <li><a href="#contacts" class="black-text">Callback</a></li>\n            </ul>\n            <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>\n        </div>\n    </nav>\n    </div>') ];
}));                                                                                                         // 6
                                                                                                             // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"main":{"template.screens.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// client/main/template.screens.js                                                                           //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
                                                                                                             // 1
Template.__checkName("screens");                                                                             // 2
Template["screens"] = new Template("Template.screens", (function() {                                         // 3
  var view = this;                                                                                           // 4
  return HTML.Raw('<div class="parallax-container valign-wrapper">\n        <div class="section no-pad-bot row center">\n            <div class="container">\n\n\n                <div id="mobile" class="container mobileslider scrollspy">\n                    <div id="slider">\n\n                      <!--\n                      <a href="#" class="control_next"></a>\n                      <a href="#" class="control_prev"></a>\n                  -->\n                  <ul>\n                    <li id="scr1"><img width="100%" height="100%" src="images/phone/screen1.jpg"></li>\n                    <li id="scr2"><img width="100%" height="100%" src="images/phone/screen2.jpg"></li>\n                    <li id="scr3"><img width="100%" height="100%" src="images/phone/screen3.jpg"></li>\n\n                </ul>\n            </div>\n\n                    <!-- <div class="slider_option">\n                      <input type="checkbox" id="checkbox">\n                      <label for="checkbox">Autoplay Slider</label>\n                  </div>-->\n              </div>\n\n                    <!-- <div id="mobile">\n                        <div class="mobiletab">\n                            \n                            \n                            \n                        </div>\n                        <div class="mobiletab">\n                            \n                            <img width="100%" height="100%" src="images/phone/screen2.jpg">\n                            \n                        </div>\n                        <div class="mobiletab">\n                            \n                            <img width="100%" height="100%" src="images/phone/screen3.jpg">\n                            \n                        </div> \n                    </div>-->\n\n                </div>\n            </div>\n            <div class="parallax"><img id="walletbg" onload="Materialize.fadeInImage(\'#walletbg\')" src="/images/background2.jpg" alt="Unsplashed background img 2"></div>\n        </div>\n\n        <div class="container">\n            <div class="section">\n\n                <div class="row">\n                    <div class="col s12 center">\n                        <h3><i class="mdi-content-send grey-text"></i></h3>\n                        <h4>Contact Us</h4>\n                        <p class="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>\n                    </div>\n                </div>\n\n            </div>\n        </div>');
}));                                                                                                         // 6
                                                                                                             // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.main.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// client/main/template.main.js                                                                              //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
                                                                                                             // 1
Template.__checkName("main");                                                                                // 2
Template["main"] = new Template("Template.main", (function() {                                               // 3
  var view = this;                                                                                           // 4
  return HTML.Raw('<div class="parallax-container valign-wrapper">\n        \n            <div class="section no-pad-bot row center">\n                <div class="container">\n                    <div class="row center">\n                        <br>\n                        <img src="/images/channels_logotype.png" class="responsive-img"><br><br>\n                        <br>\n                        <br>\n                       \n                        <a class="button" href="https://play.google.com/store/apps/details?id=coin.crypto.eon.chatClient&amp;hl=ru&amp;utm_source=global_co&amp;utm_medium=prtnr&amp;utm_content=Mar2515&amp;utm_campaign=PartBadge&amp;pcampaignid=MKT-AC-global-none-all-co-pr-py-PartBadges-Oct1515-1"><img width="150" class="gplay" alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/images/apps/en-play-badge.png"></a>\n                        <br><br>\n                    </div>\n                </div>\n            </div>\n            <div class="parallax"><img id="techbg" onload="Materialize.fadeInImage(\'#techbg\')" src="/images/background1.jpg" alt="Unsplashed background img 1"></div>\n        \n    </div>\n\n\n    <!--   Icon Section   -->\n    <div class="divider scrollspy" id="tech"></div>\n   \n        <!-- Advantages -->\n    <!--\n    <div class="section"><h4 class="center">Защищенный мессенджер на базе блокчейн</h4></div>\n    -->\n\n    <div class="section no-padding">\n            \n                <div class="row valign-wrapper">\n                <div class="col s6 left-align">\n                    <div class="container">\n                    <h4>Secure messenger<br>based on blockchain</h4><br>\n                    <h6>ШИФРУЕМ СООБЩЕНИЯ</h6>\n                    <h6>АНОНИМИЗИРУЕМ ТРАФФИК</h6>\n                    <h6>НЕ ХРАНИМ ЛИЧНЫЕ ДАННЫЕ</h6>\n                    <h6>УСТОЙЧИВЫ К БЛОКИРОВКАМ</h6>\n                    <h6>ЭКОНОМИМ НА СЕРВЕРАХ</h6>\n                    </div>\n                </div>\n                <div class="col s6 left-align no-padding">\n                <div class="carousel carousel-slider center" data-indicators="true">\n\n                  <div class="carousel-item yellow white-text" href="#one!">\n                    <div class="col s9">\n                     <img src="images/phone/dash.png" class="responsive-img">\n                    </div>\n                  </div>\n                  <div class="carousel-item teal white-text" href="#two!">\n                    <div class="col s9">\n                      <img src="images/phone/wallet.png" class="responsive-img">\n                   </div>\n                  </div>\n                  <div class="carousel-item red white-text" href="#three!">\n                    <div class="col s9 valign-wrapper">    \n                    <div class="left-align valign-wrapper">\n                        <div class="container">\n                            <h4>Отправляйте любую из популярных криптовалют через мессенджер</h4>\n                            <p>\n                                Интеграция кошелька превращает мессенджер в\n                                платформу для дешевых денежных переводов а\n                                также открывает перспективы для развития\n                                защищенного рынка торговли. При помощи\n                                партнёрских финансовых сервисов у пользователя\n                                появляется возможность переводить любую из\n                                популярных криптовалют моментально внутри\n                                нашей сети. Свободно конвертировать в процессе\n                                перевода, и оплачивать товары в удобной для\n                                магазина валюте.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                  </div>\n                  <div class="carousel-item blue white-text" href="#four!">\n                    <div class="col s9">\n                      <h2>Fourth Panel</h2>\n                      <p class="white-text">This is your fourth panel</p>\n                    </div>\n                  </div>\n                </div>\n                </div>\n                </div>\n                 \n  </div>\n\n  <!-- Wallet/ -->\n \n    \n<!-- /Wallet -->\n\n\n\n\n\n\n<!-- Mobile screens -->\n\n\n<div class="scrollspy" id="how"></div>\n<!-- EON -->\n<div class="parallax-container valign-wrapper">\n    <div class="section no-pad-bot row center scrollspy">\n        <div class="container">\n            <div class="row center">\n                <img src="/images/eon_logo.png" class="responsive-img">\n                <h5 class="white-text">MULTI BLOCKCHAIN TECHNOLOGY</h5>\n            </div>\n        </div>\n    </div>\n    <div class="parallax"><img id="eonbg" onload="Materialize.fadeInImage(\'#eonbg\')" src="/images/background3.jpg" alt="Unsplashed background img 3"></div>\n</div>\n<!-- EON -->\n<!-- Features -->\n<div class="section footer.page-footer">\n    <div class="row">\n    <div class="col s6">\n        <div class="container">\n            <div class="tabbut">\n                <h4><a class="black-text" id="1">Message encryption</a></h4>\n            </div>\n            <div class="tabbut">\n                <h4><a class="black-text" id="2">Anonymity</a></h4>\n            </div>\n            <div class="tabbut">\n                <h4><a class="black-text" id="3">Decentralized architecture</a></h4>\n            </div>\n        </div>\n    </div>\n    <div class="col s6 left-align">\n        <div id="slidetab">    \n            <div class="tabcontent left-align" id="1">\n                <div>\n                    <p class="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>\n                </div>\n            </div>\n            <div class="tabcontent" id="2">\n                <div>\n                    <p class="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>\n                </div>\n            </div>\n            <div class="tabcontent" id="2">\n                <div>\n                    <p class="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    </div>\n</div>\n<!-- Features -->');
}));                                                                                                         // 6
                                                                                                             // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// client/main/main.js                                                                                       //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
/**                                                                                                          //
 * Created by rhkina on 08/11/15.                                                                            //
 */                                                                                                          //
//import { Meteor } from 'meteor/meteor';                                                                    //
                                                                                                             //
/**                                                                                                          //
 * Created by rhkina on 08/11/15.                                                                            //
 */                                                                                                          //
if (Meteor.isClient) {                                                                                       // 9
    Meteor.disconnect();                                                                                     // 10
}                                                                                                            // 11
                                                                                                             //
Meteor.myFunc = {                                                                                            // 14
                                                                                                             //
    mobileanim3: function () {                                                                               // 16
        function mobileanim3() {                                                                             // 16
            $('#mobile').hide().css({ right: -300, left: '' }).show().animate({                              // 17
                right: $(document).width() / 9                                                               // 22
            }, 1000);                                                                                        // 21
        }                                                                                                    // 24
                                                                                                             //
        return mobileanim3;                                                                                  // 16
    }(),                                                                                                     // 16
                                                                                                             //
    mobileanim2: function () {                                                                               // 26
        function mobileanim2() {                                                                             // 26
            $('#mobile').hide().css({ left: -300, right: '' }).show().animate({                              // 27
                left: $(document).width() / 9                                                                // 32
            }, 1000, Meteor.myFunc.mobileanim1());                                                           // 31
        }                                                                                                    // 34
                                                                                                             //
        return mobileanim2;                                                                                  // 26
    }(),                                                                                                     // 26
    mobileanim1: function () {                                                                               // 35
        function mobileanim1() {                                                                             // 35
                                                                                                             //
            var slideCount = $('#slider ul li').length;                                                      // 37
            var slideWidth = $('#slider ul li').width();                                                     // 38
            var slideHeight = $('#slider ul li').height();                                                   // 39
            var sliderUlWidth = slideCount * slideWidth;                                                     // 40
            //$("#slider ul > li:gt(0)").attr('id')                                                          //
                                                                                                             //
            $('#slider').css({ width: slideWidth, height: slideHeight });                                    // 43
                                                                                                             //
            $('#slider ul').css({ width: sliderUlWidth, marginLeft: -slideWidth });                          // 45
                                                                                                             //
            $('#slider ul li:last-child').prependTo('#slider ul');                                           // 47
                                                                                                             //
            function moveLeft() {                                                                            // 49
                $('#slider ul').animate({                                                                    // 50
                    left: +slideWidth                                                                        // 51
                }, 200, function () {                                                                        // 50
                    $('#slider ul li:last-child').prependTo('#slider ul');                                   // 53
                    $('#slider ul').css('left', '');                                                         // 54
                });                                                                                          // 55
            }                                                                                                // 56
                                                                                                             //
            function moveRight() {                                                                           // 58
                $('#slider ul').animate({                                                                    // 59
                    left: -slideWidth                                                                        // 60
                }, 200, function () {                                                                        // 59
                    $('#slider ul li:first-child').appendTo('#slider ul');                                   // 62
                    $('#slider ul').css('left', '');                                                         // 63
                });                                                                                          // 64
            }                                                                                                // 65
                                                                                                             //
            $('a.control_prev').click(function () {                                                          // 67
                moveLeft();                                                                                  // 68
            });                                                                                              // 69
                                                                                                             //
            $('a.control_next').click(function () {                                                          // 71
                moveRight();                                                                                 // 72
            });                                                                                              // 73
                                                                                                             //
            var mob1 = setInterval(function () {                                                             // 75
                if ($('#slider ul li:last-child').attr('id') == "scr" + 1) {                                 // 76
                    //alert("EBA!");                                                                         //
                    Meteor.myFunc.mobileanim3();                                                             // 78
                    $('#slider').stop(true, true);                                                           // 79
                    clearInterval(mob1);                                                                     // 80
                    //return;                                                                                //
                    //moveRight();                                                                           //
                } else {                                                                                     // 83
                        moveRight();                                                                         // 84
                    }                                                                                        // 85
            }, 3000);                                                                                        // 86
        }                                                                                                    // 88
                                                                                                             //
        return mobileanim1;                                                                                  // 35
    }(),                                                                                                     // 35
    mobileanim: function () {                                                                                // 89
        function mobileanim() {                                                                              // 89
            $("#mobile > div:gt(0)").hide();                                                                 // 90
            $("#mobile > div:gt(0)").animate({ left: '100' }, 0);                                            // 91
            setInterval(function () {                                                                        // 92
                $('#mobile > div:first').hide().animate({ left: '100' }, 300).next().show().animate({ left: '0' }, 300).end().appendTo('#mobile');
            }, 3000);                                                                                        // 101
        }                                                                                                    // 102
                                                                                                             //
        return mobileanim;                                                                                   // 89
    }()                                                                                                      // 89
                                                                                                             //
};                                                                                                           // 14
                                                                                                             //
Template.main.onRendered(function () {                                                                       // 106
    (function ($) {                                                                                          // 107
        $(function () {                                                                                      // 108
            $(document).ready(function () {                                                                  // 109
                $('#checkbox').change(function () {});                                                       // 110
                                                                                                             //
                $("#slidetab > div:gt(0)").hide();                                                           // 117
                setInterval(function () {                                                                    // 118
                    $('#slidetab > div:first').hide("slow").next().show("slow").end().appendTo('#slidetab');
                }, 3000);                                                                                    // 125
                                                                                                             //
                $('.tabbut').click(function () {                                                             // 127
                    $("#slidetab > div:gt(0)").hide();                                                       // 128
                    //$(".tabcontent"+$(this).attr('id')).siblings().hide();                                 //
                    $(".tabcontent" + $(this).attr('id')).show("slow");                                      // 130
                    //setInterval();                                                                         //
                });                                                                                          // 135
            });                                                                                              // 136
            $(document).ready(function () {                                                                  // 137
                $('.scrollspy').scrollSpy({ scrollOffset: 65 });                                             // 138
            });                                                                                              // 139
            var options = [{ selector: '#techbg', offset: 300, callback: "Materialize.fadeInImage('#techbg')" }, { selector: '#mobile', offset: 100, callback: "Meteor.myFunc.mobileanim2()" }, { selector: '#walletbg', offset: 300, callback: "Materialize.fadeInImage('#walletbg')" }, { selector: '#eonbg', offset: 300, callback: "Materialize.fadeInImage('#eonbg')" }];
            Materialize.scrollFire(options);                                                                 // 146
            $('.button-collapse').sideNav();                                                                 // 147
            $('.parallax').parallax();                                                                       // 148
            $('.carousel.carousel-slider').carousel({ full_width: true });                                   // 149
            $('.carousel.carousel-slider').carousel({                                                        // 150
                padding: 0                                                                                   // 151
            });                                                                                              // 150
            autoplay();                                                                                      // 153
            function autoplay() {                                                                            // 154
                $('.carousel').carousel('next');                                                             // 155
                setTimeout(autoplay, 4500);                                                                  // 156
            }                                                                                                // 157
        }); // end of document ready                                                                         // 166
    })(jQuery); // end of jQuery name space                                                                  // 168
});                                                                                                          // 169
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"template.404.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// client/template.404.js                                                                                    //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
                                                                                                             // 1
Template.__checkName("notFound");                                                                            // 2
Template["notFound"] = new Template("Template.notFound", (function() {                                       // 3
  var view = this;                                                                                           // 4
  return HTML.Raw("<div>Oops! Nothing is here!</div>");                                                      // 5
}));                                                                                                         // 6
                                                                                                             // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.layout.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// client/template.layout.js                                                                                 //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
                                                                                                             // 1
Template.__checkName("MasterLayout");                                                                        // 2
Template["MasterLayout"] = new Template("Template.MasterLayout", (function() {                               // 3
  var view = this;                                                                                           // 4
  return [ Spacebars.include(view.lookupTemplate("header")), "\n    ", HTML.DIV({                            // 5
    class: "content"                                                                                         // 6
  }, "\n        ", Spacebars.include(view.lookupTemplate("yield")), "\n    "), "\n    ", Spacebars.include(view.lookupTemplate("footer")) ];
}));                                                                                                         // 8
                                                                                                             // 9
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"routes.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// lib/routes.js                                                                                             //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
Router.configure({                                                                                           // 1
  layoutTemplate: 'MasterLayout'                                                                             // 2
});                                                                                                          // 1
                                                                                                             //
Router.plugin('dataNotFound', {                                                                              // 5
  notFoundTemplate: 'NotFound',                                                                              // 6
  except: ['server.route']                                                                                   // 7
  // or only: ['routeOne', 'routeTwo']                                                                       //
});                                                                                                          // 5
                                                                                                             //
Router.route('/', {                                                                                          // 11
  name: 'main',                                                                                              // 12
  template: 'main'                                                                                           // 13
});                                                                                                          // 11
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".css"]});
require("./client/footer/template.footer.js");
require("./client/header/template.header.js");
require("./client/main/template.screens.js");
require("./client/template.404.js");
require("./client/template.layout.js");
require("./client/main/template.main.js");
require("./lib/routes.js");
require("./client/main/main.js");