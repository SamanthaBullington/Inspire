export function myClock() {
  function currentClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let cycle = "AM";

    //PM cycle
    if (hours == 0) hours = 12;
    if (hours > 12) {
      hours = hours - 12;
      cycle = "PM";
    }

    //If the hours are less than 2 digits, puts 0 in front of the single digi
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    let time = `${hours}:${minutes} ${cycle}`;
    setInterval(currentClock, 1000);
    document.getElementById("clock").innerText = time;
  }
  currentClock();
}

