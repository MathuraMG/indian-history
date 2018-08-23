var tasks = [
{"startDate":new Date("1628"),"endDate":new Date("1715"),"taskName":"Mughal-Sikh Wars"},
{"startDate":new Date("1686"),"endDate":new Date("1690"),"taskName":"Childs War"},
{"startDate":new Date("1686"),"endDate":new Date("1690"),"taskName":"E Job"}];

var warNames = [ "Mughal-Sikh Wars", "Childs War", "E Job", "A Job", "N Job" ];

tasks.sort(function(a, b) {
    return a.endDate - b.endDate;
});
var maxDate = tasks[tasks.length - 1].endDate;
tasks.sort(function(a, b) {
    return a.startDate - b.startDate;
});
var minDate = tasks[0].startDate;

var format = "%Y %b";

var gantt = d3.gantt().taskTypes(warNames).tickFormat(format);
gantt(tasks);
