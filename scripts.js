$(function () {
  var s = Snap("#bucket-svg");
  var b1, b2, bw;
  b1 = Snap.select("#watertop");
  b2 = Snap.select("#water_buttom");
  bw = Snap.select("#waterfill");

  function anim_2() {
    b1.attr("opacity", "1");
    bw.animate(
      {
        y: "87.691",
        height: "269.493",
      },
      5000,
      mina.linear,
      function () {
        $(".ct-3").fadeIn(500);
        $nextBtn.show(0);
      }
    );
    b1.animate(
      {
        cx: "196.761",
        cy: "67.999",
      },
      5000,
      mina.linear
    );
  }

  function anim_1() {
    b2.animate(
      {
        rx: "130.375",
        ry: "26.25",
      },
      1000,
      mina.linear,
      anim_2
    );
  }

  var s2 = Snap("#glass-svg");
  var g1, g2, gw;
  g1 = Snap.select("#glass-tp");
  g2 = Snap.select("#glass-bt");
  gw = Snap.select("#glass-water");

  function ganim_2() {
    g1.attr("opacity", "1");
    gw.animate(
      {
        y: "87.691",
        height: "269.493",
      },
      1200,
      mina.linear
    );
    g1.animate(
      {
        cy: "67.767",
      },
      1200,
      mina.linear,
      function () {
        $(".ct-1").fadeIn(500);
        w2_a();
      }
    );
  }

  function ganim_1() {
    g2.animate(
      {
        rx: "85.896",
        ry: "44.463",
      },
      500,
      mina.linear,
      ganim_2
    );
  }

  var s3 = Snap("#pot-svg");
  var p1;
  p1 = Snap.select("#pot-water");

  function panim_2() {
    p1.animate(
      {
        rx: "408.021",
        ry: "345.085",
      },
      3000,
      mina.linear,
      function () {
        $(".ct-2").fadeIn(500);
        w3_a();
      }
    );
  }

  function panim_1() {
    p1.animate(
      {
        rx: "78.021",
        ry: "20.085",
      },
      800,
      mina.linear,
      panim_2
    );
  }

  var w1 = Snap("#water-1");
  var wpa1, wpa2, wpa3, wpa4;
  var count = 0;
  var max_count = 6;
  wpa1 = Snap.select("#w1-1");
  wpa2 = Snap.select("#w1-2");
  wpa3 = Snap.select("#w1-3");
  wpa4 = Snap.select("#w1-4");

  function w1_a() {
    count++;
    max_count = 6;
    wpa1.attr("display", "block");
    if (count < max_count) {
      wpa1.animate(
        {
          path: wpa3.attr("path"),
        },
        400,
        mina.linear,
        w1_b
      );
    } else {
      wpa1.animate(
        {
          path: wpa4.attr("path"),
        },
        400,
        mina.linear,
        function () {
          wpa1.attr("display", "none");
          count = 0;
        }
      );
    }
  }

  function w1_b() {
    count++;
    max_count = 6;
    if (count < 3) {
      ganim_1();
    }
    if (count < max_count) {
      wpa1.animate(
        {
          path: wpa2.attr("path"),
        },
        300,
        mina.linear,
        w1_a
      );
    } else {
      wpa1.animate(
        {
          path: wpa4.attr("path"),
        },
        400,
        mina.linear,
        function () {
          wpa1.attr("display", "none");
          count = 0;
        }
      );
    }
  }

  var w2 = Snap("#water-2");
  var wpb1, wpb2, wpb3, wpb4;
  wpb1 = Snap.select("#w2-1");
  wpb2 = Snap.select("#w2-2");
  wpb3 = Snap.select("#w2-3");
  wpb4 = Snap.select("#w2-4");

  function w2_a() {
    count++;
    max_count = 12;
    wpb1.attr("display", "block");
    if (count < max_count) {
      wpb1.animate(
        {
          path: wpb3.attr("path"),
        },
        400,
        mina.linear,
        w2_b
      );
    } else {
      wpb1.animate(
        {
          path: wpb4.attr("path"),
        },
        400,
        mina.linear,
        function () {
          wpb1.attr("display", "none");
          count = 0;
        }
      );
    }
  }

  function w2_b() {
    count++;
    if (count < 3) {
      panim_1();
    }
    max_count = 12;
    if (count < max_count) {
      wpb1.animate(
        {
          path: wpb2.attr("path"),
        },
        300,
        mina.linear,
        w2_a
      );
    } else {
      wpb1.animate(
        {
          path: wpb4.attr("path"),
        },
        400,
        mina.linear,
        function () {
          wpb1.attr("display", "none");
          count = 0;
        }
      );
    }
  }

  var w3 = Snap("#water-3");
  var wpc1, wpc2, wpc3, wpc4;
  wpc1 = Snap.select("#w3-1");
  wpc2 = Snap.select("#w3-2");
  wpc3 = Snap.select("#w3-3");
  wpc4 = Snap.select("#w3-4");

  function w3_a() {
    count++;
    max_count = 17;
    wpc1.attr("display", "block");
    if (count < max_count) {
      wpc1.animate(
        {
          path: wpc3.attr("path"),
        },
        400,
        mina.linear,
        w3_b
      );
    } else {
      wpc1.animate(
        {
          path: wpc4.attr("path"),
        },
        400,
        mina.linear,
        function () {
          wpc1.attr("display", "none");
          count = 0;
        }
      );
    }
  }

  function w3_b() {
    count++;
    max_count = 17;
    if (count < 3) {
      anim_1();
    }
    if (count < max_count) {
      wpc1.animate(
        {
          path: wpc2.attr("path"),
        },
        300,
        mina.linear,
        w3_a
      );
    } else {
      wpc1.animate(
        {
          path: wpc4.attr("path"),
        },
        400,
        mina.linear,
        function () {
          wpc1.attr("display", "none");
          count = 0;
        }
      );
    }
  }
  $(".open-btn").click(function () {
    $(".text-1").fadeOut(500);
    w1_a();
    $(this).css("pointer-events", "none");
  });
});
