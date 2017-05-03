'use strict';
if(!window.console) window.console = {};
if(!window.console.memory) window.console.memory = function() {};
if(!window.console.debug) window.console.debug = function() {};
if(!window.console.error) window.console.error = function() {};
if(!window.console.info) window.console.info = function() {};
if(!window.console.log) window.console.log = function() {};

// sticky footer
//-----------------------------------------------------------------------------
if(!Modernizr.flexbox) {
  (function() {
    var
      $pageWrapper = $('#page-wrapper'),
      $pageBody = $('#page-body'),
      noFlexboxStickyFooter = function() {
        $pageBody.height('auto');
        if($pageBody.height() + $('#header').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
          $pageBody.height($(window).height() - $('#header').outerHeight() - $('#footer').outerHeight());
        } else {
          $pageWrapper.height('auto');
        }
      };
    $(window).on('load resize', noFlexboxStickyFooter);
  })();
}
if(ieDetector.ieVersion == 10 || ieDetector.ieVersion == 11) {
  (function(){
    var
      $pageWrapper = $('#page-wrapper'),
      $pageBody = $('#page-body'),
      ieFlexboxFix = function() {
        if($pageBody.addClass('flex-none').height() + $('#header').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
          $pageWrapper.height($(window).height());
          $pageBody.removeClass('flex-none');
        } else {
          $pageWrapper.height('auto');
        }
      };
    ieFlexboxFix();
    $(window).on('load resize', ieFlexboxFix);
  })();
}

$(function() {

// placeholder
//-----------------------------------------------------------------------------
  $('input[placeholder], textarea[placeholder]').placeholder();

  $('.index__sidebar__link').click(function () {
      $('.index__sidebar__link').removeClass('active');
      $(this).addClass('active');
  });

    $('.index__top-menu__tab-btn').click(function () {
        $('.index__top-menu__tab-btn').removeClass('active');
        $(this).addClass('active');

        $('.index__tab').removeClass('active');
        var indexTab = "." + $(this).data('tab');
        console.log(indexTab);
        $(indexTab).addClass('active');
    });

    $('.booking-form__input--checkbox[value="other"]').click(function () {
       if ($(this).prop("checked")) {
           $('.input-other-size').show();
       } else {
           $('.input-other-size').hide();
       }
    });

    $('.type__number').on('keyup keypress', function(e) {
        if (e.keyCode == 8 || e.keyCode == 46) {}
        else
        {
            var letters='1234567890';
            return (letters.indexOf(String.fromCharCode(e.which))!=-1);
        }
    });

});
