tailwind.config = { darkMode: 'class' }

$(document).ready(function(){
    let szallas = 5999;
    let kozlekedes = 3499;
    let etkezes = 1499;
    let programok = 2000 + 1500 + 1000 + 1200 + 1500;
    let osszeg = szallas + kozlekedes + etkezes + programok;
    $("#osszeg").text(osszeg.toLocaleString("hu-HU") + " Ft");
});

const targetDate = new Date("2025-10-01T13:00:00").getTime();

const Days = new Odometer({ el: document.getElementById("days"), value: 0 });
const Hours = new Odometer({ el: document.getElementById("hours"), value: 0 });
const Mins = new Odometer({ el: document.getElementById("mins"), value: 0 });

function updateCountdown() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerText = "Elindultunk!";
        return;
    }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    if (days !== Days.value) Days.update(days);
    if (hours !== Hours.value) Hours.update(hours);
    if (mins !== Mins.value) Mins.update(mins);
}

setInterval(updateCountdown, 1000);
updateCountdown();


$("#darkMode").on("click", function () {
    $("html").toggleClass("dark");

    if ($("html").hasClass("dark")) {
        $(this).html('<i class="fas fa-sun"></i>');
    } else {
        $(this).html('<i class="fas fa-moon"></i>');
    }
});

$(window).on("scroll", function () {
    if ($(this).scrollTop() > 200) {
        $("#toTop").fadeIn();
    } else {
        $("#toTop").fadeOut();
    }
});

$("#toTop").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "smooth");
});
