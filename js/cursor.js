import document from "next/document";

document
  .getElementsByTagName("body")[0]
  .addEventListener("mousemove", function (n) {
    (e.style.left = n.clientX + "px"), (e.style.top = n.clientY + "px");
  });
var e = document.getElementById("js-pointer");

$(document).mousemove(function (e) {
  $(
    ".js-pointer-large, .swiper-button-next, .swiper-button-prev, .mfp-arrow-left, .mfp-arrow-right"
  )
    .on("mouseenter", function () {
      $(".js-pointer").addClass("js-large");
    })
    .on("mouseleave", function () {
      $(".js-pointer").removeClass("js-large");
    });

  $(".js-pointer-small, .swiper-pagination-bullet")
    .on("mouseenter", function () {
      $(".js-pointer").addClass("js-small");
    })
    .on("mouseleave", function () {
      $(".js-pointer").removeClass("js-small");
    });

  $(".js-pointer-drag")
    .on("mouseenter", function () {
      $(".js-pointer").addClass("js-drag");
    })
    .on("mouseleave", function () {
      $(".js-pointer").removeClass("js-drag");
    });

  $(".js-pointer-zoom")
    .on("mouseenter", function () {
      $(".js-pointer").addClass("js-zoom");
    })
    .on("mouseleave", function () {
      $(".js-pointer").removeClass("js-zoom");
    });

  $(".js-pointer-none")
    .on("mouseenter", function () {
      $(".js-pointer").addClass("js-none");
    })
    .on("mouseleave", function () {
      $(".js-pointer").removeClass("js-none");
    });
});
