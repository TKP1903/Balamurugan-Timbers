$(document).ready(function () {
  let sideBar = $("#sidebar");
  let mainContent = $("#main");
  let sb_home = $("#sb-home");
  let sb_services = $("#sb-services");
  let sb_about = $("#sb-about");
  $(".navbar-2-logo").hide();
  $(window).scroll(function () {
    // navbar
    if ($(window).scrollTop() >= 200) {
      // console.log("scrolled");
      $(".navbar-2-logo").show();
      $(".navbar-2").addClass("fixed-header");
    } else {
      $(".navbar-2-logo").hide();
      $(".navbar-2").removeClass("fixed-header");
    }

    let topPosition = $(window).scrollTop() + 1,
      Home = $("#home").offset().top,
      About = $("#about").offset().top,
      Services = $("#services").offset().top,
      Products = $("#products").offset().top;
    if (topPosition >= Home) {
      $("#home-btn").parent().addClass("active");
      sb_home.addClass("active");
    } else {
      $("#home-btn").parent().removeClass("active");
      sb_home.removeClass("active");
    }
    if (topPosition >= About) {
      $("#about-btn").parent().addClass("active");
      $("#home-btn").parent().removeClass("active");
      sb_home.removeClass("active");
      sb_about.addClass("active");
    } else {
      $("#about-btn").parent().removeClass("active");
      sb_about.removeClass("active");
    }
    if (topPosition >= Services) {
      $("#services-btn").parent().addClass("active");
      $("#about-btn").parent().removeClass("active");
      sb_about.removeClass("active");
      sb_services.addClass("active");
    } else {
      $("#services-btn").parent().removeClass("active");
      sb_services.removeClass("active");
    }
    if (topPosition >= Products) {
      $("#products-btn").parent().addClass("active");
      $("#services-btn").parent().removeClass("active");
    } else {
      $("#products-btn").parent().removeClass("active");
    }
  });

  $(".slide-container").flickity({
    wrapAround: true,
    cellAlign: "left",
    contain: true,
  });

  $(sideBar, "a").on("click", function (e) {
    closeSideBar();
    let el = $(e.target);
    if (el.attr("id") === "sb-home") {
      // $('#sb-home').addClass
      sb_home.addClass("active");
      sb_about.removeClass("active");
      sb_services.removeClass("active");
    } else if (el.attr("id") === "sb-about") {
      // $('#sb-home').addClass
      sb_about.addClass("active");
      sb_home.removeClass("active");
      sb_services.removeClass("active");
    } else if (el.attr("id") === "sb-services") {
      sb_services.addClass("active");
      sb_about.removeClass("active");
      sb_home.removeClass("active");
    }
  });
  $("#menu-btn").on("click", function () {
    sideBar.css("width", "250px");
    mainContent.css("transform", "translateX(250px)");
    $(".sidebar-backdrop").css("transform", "scale(1)");
  });
  $("#menu-btn-close,.sidebar-backdrop").on("click", function () {
    closeSideBar();
  });
  function closeSideBar() {
    sideBar.css("width", "0");
    mainContent.css("transform", "unset");
    $(".sidebar-backdrop").css("transform", "scale(0)");
  }
});
