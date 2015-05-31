/**
 * Created by Kenny on 31/05/2015.
 */
/**
 * Created by Kenny on 31/05/2015.
 */
var gAlarms;

function createAlarm(time,date,sound){
    var alarmID = 0;
    if(gAlarms != undefined)
        alarmID = gAlarms.length;
    return {
        id : alarmID,
        time : time,
        date : date,
        sound : sound
    }
}

function createDays(){
    var days = [];
    if(document.getElementById('sunday').checked)
        days.push("Sunday");
    if(document.getElementById('monday').checked)
        days.push("Monday");
    if(document.getElementById('tuesday').checked)
        days.push("Tuesday");
    if(document.getElementById('wednesday').checked)
        days.push("Wednesday");
    if(document.getElementById('thursday').checked)
        days.push("Thursday");
    if(document.getElementById('friday').checked)
        days.push("Friday");
    if(document.getElementById('saturday').checked)
        days.push("Saturday");
    return days;
}

function fillListview(){
    $("#alarmList").empty();

    for(var i=0; i<gAlarms.length;i++)
        $("#alarmList").append('<li>' + gAlarms[i].time + ' ' + gAlarms[i].date + '</li>');

    $("#alarmList").listview('refresh');
}

function addAlarm(){
    var sound = $("#alarms").val();
    if(sound == "")
        sound = 'jam';
    if($("#time").val() != "" &&createDays() != []) {
        gAlarms.push(createAlarm($("#time").val(), createDays(), sound));
        localStorage.alarms = JSON.stringify(gAlarms);
        var soundMix = document.getElementById('sound');
        soundMix.pause();
        fillListview();
    }
}

function playSound(){
    var sound = document.getElementById('sound');
    sound.src = './media/' + $("#alarms").val() + '.wav';
    sound.play();
}


function start(){
    console.log('geladen');
    if(localStorage.alarms != undefined)
        gAlarms = JSON.parse(localStorage.alarms);
    else
        gAlarms = [];

    fillListview();

    $("#alarms").change(playSound);
    $("#setAlarm").click(addAlarm);

}

$(document).ready(start);

