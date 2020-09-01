$(document).ready(function () {
  let e = $("#sidebar"),
    a = $("#main"),
    s = $("#sb-home"),
    t = $("#sb-services"),
    o = $("#sb-about");
  function r() {
    e.css("width", "0"),
      a.css("transform", "unset"),
      $(".sidebar-backdrop").css("transform", "scale(0)");
  }
  $(".navbar-2-logo").hide(),
    $(window).scroll(function () {
      $(window).scrollTop() >= 200
        ? ($(".navbar-2-logo").show(), $(".navbar-2").addClass("fixed-header"))
        : ($(".navbar-2-logo").hide(),
          $(".navbar-2").removeClass("fixed-header"));
      let e = $(window).scrollTop() + 1,
        a = $("#home").offset().top,
        r = $("#about").offset().top,
        c = $("#services").offset().top,
        i = $("#products").offset().top;
      e >= a
        ? ($("#home-btn").parent().addClass("active"), s.addClass("active"))
        : ($("#home-btn").parent().removeClass("active"),
          s.removeClass("active")),
        e >= r
          ? ($("#about-btn").parent().addClass("active"),
            $("#home-btn").parent().removeClass("active"),
            s.removeClass("active"),
            o.addClass("active"))
          : ($("#about-btn").parent().removeClass("active"),
            o.removeClass("active")),
        e >= c
          ? ($("#services-btn").parent().addClass("active"),
            $("#about-btn").parent().removeClass("active"),
            o.removeClass("active"),
            t.addClass("active"))
          : ($("#services-btn").parent().removeClass("active"),
            t.removeClass("active")),
        e >= i
          ? ($("#products-btn").parent().addClass("active"),
            $("#services-btn").parent().removeClass("active"))
          : $("#products-btn").parent().removeClass("active");
    }),
    $(".slide-container").flickity({
      wrapAround: !0,
      cellAlign: "left",
      contain: !0,
    }),
    $(e, "a").on("click", function (e) {
      r();
      let a = $(e.target);
      "sb-home" === a.attr("id")
        ? (s.addClass("active"),
          o.removeClass("active"),
          t.removeClass("active"))
        : "sb-about" === a.attr("id")
        ? (o.addClass("active"),
          s.removeClass("active"),
          t.removeClass("active"))
        : "sb-services" === a.attr("id") &&
          (t.addClass("active"),
          o.removeClass("active"),
          s.removeClass("active"));
    }),
    $("#menu-btn").on("click", function () {
      e.css("width", "250px"),
        a.css("transform", "translateX(250px)"),
        $(".sidebar-backdrop").css("transform", "scale(1)");
    }),
    $("#menu-btn-close,.sidebar-backdrop").on("click", function () {
      r();
    });
});
