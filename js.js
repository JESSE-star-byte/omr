
function calculateTime () {
    const meters = parseFloat(document.getElementById("langd").value);
    const minutes = parseFloat(document.getElementById("minuter").value);
    var results = 0;
    var results = parseInt(meters) / parseInt(minutes);


    var ftime = new Date();
    ftime.setTime(ftime.getTime() + results * 60 *1000);
    console.log(ftime);
    t = ftime.toLocaleTimeString();

    document.getElementById("result").value = results;
    document.getElementById("finishTime").innerText = t;
}

document.getElementById("myForm").addEventListener("keyup", (calculateTime)) 

function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " ";

    document.getElementById("displayClock").innerText = time;
    setTimeout(showTime, 1000);
}
showTime();

