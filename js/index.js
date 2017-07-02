'use strict';

var shutdown = moment("2019-07-01T00:00:00-07:00");

var format = function (num, str) {
  return num > 0
    ? '<b>' + num + ' ' + str + '</b>, '
    : '';
}

var update = function () {
  var duration = moment.duration(shutdown.diff(moment()));

  if (duration > 0) {
    var string =
      format(duration.years(), 'years') +
      format(duration.months(), 'months') +
      format(duration.days(), 'days') +
      format(duration.hours(), 'hours') +
      format(duration.minutes(), 'minutes') +
      format(duration.seconds(), 'seconds') +
      'and <b>' + duration.milliseconds() + ' milliseconds</b>';

    document.getElementById('countdown').innerHTML = string;
  } else {
    document.body.innerHTML = 'Washington State government <b>has shut down</b>.';
  }
};

setInterval(update, 1);
