var todayDate = new Date();
console.log('todays date',todayDate);
console.log('day=',todayDate.getDay());
console.log('month=',todayDate.getMonth());
console.log('year=',todayDate.getFullYear());
console.log('date=',todayDate.getDate());
console.log('time=',todayDate.getTime());
console.log('hour=',todayDate.getHours());
console.log('minute=',todayDate.getMinutes());
console.log('second=',todayDate.getSeconds());
console.log('milisecond=',todayDate.getMilliseconds());


console.log('===================');
var constMilli = new Date(0);
console.log('Date= ',constMilli);
var constString=new Date('Nov 10');
console.log('Date string Constructor=',constString);
var constYear=new Date(2017,10);
console.log('Date year Constructor=',constYear);