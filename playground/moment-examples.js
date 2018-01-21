var moment = require('moment');

// console.log(moment().format());
//
// // number of seconds since Jan 1 1970 at midnight
// var now = moment();
// console.log('Current timestamp', now.unix());

var timestamp = 1516569352;
var currentMoment = moment.unix(timestamp);
console.log('current momment', currentMoment.format('MMM D, YYYY'));
