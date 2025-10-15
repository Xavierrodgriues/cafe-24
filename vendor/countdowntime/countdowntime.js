(function ($) {
  "use strict";

  function getTimeRemaining(endtime) { 
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function initializeClock(endtime) { 
    var daysSpan = $('.days');
    var hoursSpan = $('.hours');
    var minutesSpan = $('.minutes');
    var secondsSpan = $('.seconds');

    function updateClock() { 
      var t = getTimeRemaining(endtime);

      daysSpan.html(t.days);
      hoursSpan.html(('0' + t.hours).slice(-2));
      minutesSpan.html(('0' + t.minutes).slice(-2));
      secondsSpan.html(('0' + t.seconds).slice(-2));

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }

  // Countdown to Saturday, 18th of this month
  var now = new Date();
  var targetDate = new Date(now.getFullYear(), now.getMonth(), 18, 0, 0, 0); // 18th at midnight

  // If the 18th has already passed, set it for next month
  if (now > targetDate) {
    targetDate = new Date(now.getFullYear(), now.getMonth() + 1, 18, 0, 0, 0);
  }

  initializeClock(targetDate);

})(jQuery);