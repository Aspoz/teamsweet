function animateMembers() {
  'use strict';
  var timer = 0,
      $members = $('.members'),
      $blog = $('.blog'),
      $list = $('.memberlist').find('li');

  $members.find('h2').addClass('animated med fadeInDownBig');
  setTimeout(function() {
    $members.find('p').first().addClass('animated med fadeInDownBig');
  }, timer += 200);

  timer+=300;

  $list.each(function(i, li) {
    var $li = $(li);
    setTimeout(function() {
      $li.find('img').addClass('animated flipInX');
      setTimeout(function() {
        $li.find('h3').addClass('animated fast fadeInDown');
        setTimeout(function() {
          $li.find('p').addClass('animated fast fadeInDown');
        }, 150);
      }, 300);
    }, timer += 100);
  });

  setTimeout(function() {
    $blog.addClass('animated flipInX');
  }, timer += 500);

  setTimeout(function() {
    $blog.find('.go').addClass('animated pulse long infinite');
  }, timer += 5000);
}


$(function() {
  'use strict';
  $('main').imagesLoaded( function() {
    $('.spinner').remove();
    animateMembers();
  });
});