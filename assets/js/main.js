(
  function () {
    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

    let birthday = "Jun 29, 2021 00:00:00",
    countDown = new Date(birthday).getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
      distance = countDown - now;

      document.getElementById("days").innerText = Math.floor(distance / (day)),
      document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      if (distance < 0) {
        let headline = document.getElementById("headline"),
        countdown = document.getElementById("countdown"),
        content = document.getElementById("content");

        clearInterval(x);
      }
    }, 0)
  }()
);

function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}
