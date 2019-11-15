days = 0;
function addDay() {
  days++;
  document.g;
  const day = document.getElementById("days");
  day.innerHTML = days;
  console.log(days);

  const good = document.getElementById("good-gif");
  good.classList.remove("good-gif");
  setTimeout(function() {
    good.classList.add("good-gif");
  }, 3000);
}

function reset() {
  console.log("reset");
  days = 0;
  const day = document.getElementById("days");
  day.innerHTML = days;

  const bad = document.getElementById("bad-gif");
  bad.classList.remove("bad-gif");
  setTimeout(function() {
    bad.classList.add("bad-gif");
  }, 3000);
}
