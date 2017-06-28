'use strict';

var shutdown = moment("2017-07-01T00:00:00-07:00");

var update = function () {
  var duration = moment.duration(shutdown.diff(moment()));

  if (duration > 0) {
    var string =
      '<b>' + duration.days() + ' days</b>, ' +
      '<b>' + duration.hours() + ' hours</b>, ' +
      '<b>' + duration.minutes() + ' minutes</b>, ' +
      '<b>' + duration.seconds() + ' seconds</b>, ' +
      'and <b>' + duration.milliseconds() + ' milliseconds</b>';

    document.getElementById('countdown').innerHTML = string;
  } else {
    document.body.innerHTML = 'Washington State government <b>has shut down</b>.';
  }
};

setInterval(update, 1);
