import React, { useEffect, useState } from "react";
import "./BirthDay.css";
import { useParams, NavLink, useNavigate } from "react-router-dom";
// C:\Users\RISHI\Desktop\Programmes\WebDev\React\birthdaywishes\src\Pages\BirthDay-FlexCeter.css

const BirthDay = () => {
  // const Months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const params = useParams();
  const [details, setDetails] = useState([params.YourName, params.Date]);

  // setDetails();

  useEffect(() => {
    const c = document.getElementById("c");
    const count = document.getElementById("count");
    const head = document.getElementById("head");
    const giftbox = document.getElementById("merrywrap");
    const canvasC = document.getElementById("c");
    // const foot = document.getElementById("foot");

    const config = {
      birthdate: details[1],
      name: details[0],
    };

    function hideEverything() {
      head.style.display = "none";
      count.style.display = "none";
      giftbox.style.display = "none";
      canvasC.style.display = "none";
    }

    hideEverything();

    function ConfettiGenerator(e) {
      function t(e, t) {
        e || (e = 1);
        var i = Math.random() * e;
        return t ? Math.floor(i) : i;
      }
      function i() {
        return {
          prop: a.props[t(a.props.length, !0)],
          x: t(a.width),
          y: t(a.height),
          radius: t(4) + 1,
          line: Math.floor(t(65) - 30),
          angles: [t(10, !0) + 2, t(10, !0) + 2, t(10, !0) + 2, t(10, !0) + 2],
          color: a.colors[t(a.colors.length, !0)],
          rotation: (t(360, !0) * Math.PI) / 180,
          speed: t(a.clock / 7) + a.clock / 30,
        };
      }
      function r(e) {
        var t = e.radius <= 3 ? 0.4 : 0.8;
        // switch (
        //   ((n.fillStyle = n.strokeStyle = "rgba(" + e.color + ", " + t + ")"),
        //   n.beginPath(),
        //   e.prop)
        // ) {
        //   case "circle":
        //     n.moveTo(e.x, e.y),
        //       n.arc(e.x, e.y, e.radius * a.size, 0, 2 * Math.PI, !0),
        //       n.fill();
        //     break;
        //   case "triangle":
        //     n.moveTo(e.x, e.y),
        //       n.lineTo(e.x + e.angles[0] * a.size, e.y + e.angles[1] * a.size),
        //       n.lineTo(e.x + e.angles[2] * a.size, e.y + e.angles[3] * a.size),
        //       n.closePath(),
        //       n.fill();
        //     break;
        //   case "line":
        //     n.moveTo(e.x, e.y),
        //       n.lineTo(e.x + e.line * a.size, e.y + 5 * e.radius),
        //       (n.lineWidth = 2 * a.size),
        //       n.stroke();
        //     break;
        //   case "square":
        //     n.save(),
        //       n.translate(e.x + 15, e.y + 5),
        //       n.rotate(e.rotation),
        //       n.fillRect(-15 * a.size, -5 * a.size, 15 * a.size, 5 * a.size),
        //       n.restore();
        // }

        function r(e) {
          var t = e.radius <= 3 ? 0.4 : 0.8;

          // Separate the statements within the switch case
          n.fillStyle = n.strokeStyle = "rgba(" + e.color + ", " + t + ")";
          n.beginPath();

          switch (e.prop) {
            case "circle":
              n.moveTo(e.x, e.y);
              n.arc(e.x, e.y, e.radius * a.size, 0, 2 * Math.PI, !0);
              n.fill();
              break;

            case "triangle":
              n.moveTo(e.x, e.y);
              n.lineTo(e.x + e.angles[0] * a.size, e.y + e.angles[1] * a.size);
              n.lineTo(e.x + e.angles[2] * a.size, e.y + e.angles[3] * a.size);
              n.closePath();
              n.fill();
              break;

            case "line":
              n.moveTo(e.x, e.y);
              n.lineTo(e.x + e.line * a.size, e.y + 5 * e.radius);
              n.lineWidth = 2 * a.size;
              n.stroke();
              break;

            case "square":
              n.save();
              n.translate(e.x + 15, e.y + 5);
              n.rotate(e.rotation);
              n.fillRect(-15 * a.size, -5 * a.size, 15 * a.size, 5 * a.size);
              n.restore();
              break;
            default:
              console.log("Incorrect Syntax");
          }
        }
      }
      var a = {
        target: "confetti-holder",
        max: 80,
        size: 1,
        animate: !0,
        props: ["circle", "square", "triangle", "line"],
        colors: [
          [165, 104, 246],
          [230, 61, 135],
          [0, 199, 228],
          [253, 214, 126],
        ],
        clock: 25,
        interval: null,
        width: window.innerWidth,
        height: window.innerHeight,
      };

      // e &&
      //   (e.target && (a.target = e.target),
      //   e.max && (a.max = e.max),
      //   e.size && (a.size = e.size),
      //   void 0 !== e.animate && null !== e.animate && (a.animate = e.animate),
      //   e.props && (a.props = e.props),
      //   e.colors && (a.colors = e.colors),
      //   e.clock && (a.clock = e.clock),
      //   e.width && (a.width = e.width),
      //   e.height && (a.height = e.height));
      // var o = document.getElementById(a.target),
      //   n = o.getContext("2d"),
      //   l = [];

      if (e) {
        if (e.target) a.target = e.target;
        if (e.max) a.max = e.max;
        if (e.size) a.size = e.size;
        if (e.animate !== undefined && e.animate !== null)
          a.animate = e.animate;
        if (e.props) a.props = e.props;
        if (e.colors) a.colors = e.colors;
        if (e.clock) a.clock = e.clock;
        if (e.width) a.width = e.width;
        if (e.height) a.height = e.height;
      }

      var o = document.getElementById(a.target),
        n = o.getContext("2d"),
        l = [];

      // return {
      //   render: function () {
      //     function e() {
      //       n.clearRect(0, 0, a.width, a.height);
      //       for (var e in l) r(l[e]);
      //       s();
      //     }
      //     function s() {
      //       for (var e = 0; e < a.max; e++) {
      //         var i = l[e];
      //         a.animate && (i.y += i.speed),
      //           i.y > a.height &&
      //             ((l[e] = i), (l[e].x = t(a.width, !0)), (l[e].y = -10));
      //       }
      //     }
      //     (o.width = a.width), (o.height = a.height), (l = []);
      //     for (var c = 0; c < a.max; c++) l.push(i());
      //     return a.animate ? (a.interval = setInterval(e, 20)) : e();
      //   },
      //   clear: function () {
      //     n.clearRect(0, 0, o.width, o.height);
      //     var e = o.width;
      //     (o.width = 1), (o.width = e), clearInterval(a.interval);
      //   },
      // };

      return {
        render: function () {
          function renderFrame() {
            n.clearRect(0, 0, a.width, a.height);
            for (var e in l) r(l[e]);
            updateParticles();
          }

          function updateParticles() {
            for (var e = 0; e < a.max; e++) {
              var particle = l[e];
              if (a.animate) {
                particle.y += particle.speed;
              }
              if (particle.y > a.height) {
                l[e] = particle;
                particle.x = t(a.width, !0);
                particle.y = -10;
              }
            }
          }

          o.width = a.width;
          o.height = a.height;
          l = [];

          for (var c = 0; c < a.max; c++) {
            l.push(i());
          }

          return a.animate
            ? (a.interval = setInterval(renderFrame, 20))
            : renderFrame();
        },
        clear: function () {
          n.clearRect(0, 0, o.width, o.height);
          var originalWidth = o.width;
          o.width = 1;
          o.width = originalWidth;
          clearInterval(a.interval);
        },
      };
    }

    const confettiSettings = { target: "confetti" };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    let countDown = new Date(`${config.birthdate} 00:00:00`).getTime();
    let x = setInterval(function () {
      let now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("day").innerText = Math.floor(distance / day);
      document.getElementById("hour").innerText = Math.floor(
        (distance % day) / hour
      );
      document.getElementById("minute").innerText = Math.floor(
        (distance % hour) / minute
      );
      document.getElementById("second").innerText = Math.floor(
        (distance % minute) / second
      );

      let w = (c.width = window.innerWidth),
        h = (c.height = window.innerHeight),
        ctx = c.getContext("2d"),
        hw = w / 2, // half-width
        hh = h / 2,
        opts = {
          strings: ["HAPPY", "BIRTHDAY!", config.name],
          charSize: 30,
          charSpacing: 35,
          lineHeight: 40,

          cx: w / 2,
          cy: h / 2,

          fireworkPrevPoints: 10,
          fireworkBaseLineWidth: 5,
          fireworkAddedLineWidth: 8,
          fireworkSpawnTime: 200,
          fireworkBaseReachTime: 30,
          fireworkAddedReachTime: 30,
          fireworkCircleBaseSize: 20,
          fireworkCircleAddedSize: 10,
          fireworkCircleBaseTime: 30,
          fireworkCircleAddedTime: 30,
          fireworkCircleFadeBaseTime: 10,
          fireworkCircleFadeAddedTime: 5,
          fireworkBaseShards: 5,
          fireworkAddedShards: 5,
          fireworkShardPrevPoints: 3,
          fireworkShardBaseVel: 4,
          fireworkShardAddedVel: 2,
          fireworkShardBaseSize: 3,
          fireworkShardAddedSize: 3,
          gravity: 0.1,
          upFlow: -0.1,
          letterContemplatingWaitTime: 360,
          balloonSpawnTime: 20,
          balloonBaseInflateTime: 10,
          balloonAddedInflateTime: 10,
          balloonBaseSize: 20,
          balloonAddedSize: 20,
          balloonBaseVel: 0.4,
          balloonAddedVel: 0.4,
          balloonBaseRadian: -(Math.PI / 2 - 0.5),
          balloonAddedRadian: -1,
        },
        calc = {
          totalWidth:
            opts.charSpacing *
            Math.max(opts.strings[0].length, opts.strings[1].length),
        },
        Tau = Math.PI * 2,
        TauQuarter = Tau / 4,
        letters = [];

      ctx.font = opts.charSize + "px Verdana";

      function Letter(char, x, y) {
        this.char = char;
        this.x = x;
        this.y = y;

        this.dx = -ctx.measureText(char).width / 2;
        this.dy = +opts.charSize / 2;

        this.fireworkDy = this.y - hh;

        let hue = (x / calc.totalWidth) * 360;

        this.color = "hsl(hue,80%,50%)".replace("hue", hue);
        this.lightAlphaColor = "hsla(hue,80%,light%,alp)".replace("hue", hue);
        this.lightColor = "hsl(hue,80%,light%)".replace("hue", hue);
        this.alphaColor = "hsla(hue,80%,50%,alp)".replace("hue", hue);

        this.reset();
      }
      Letter.prototype.reset = function () {
        this.phase = "firework";
        this.tick = 0;
        this.spawned = false;
        this.spawningTime = (opts.fireworkSpawnTime * Math.random()) | 0;
        this.reachTime =
          (opts.fireworkBaseReachTime +
            opts.fireworkAddedReachTime * Math.random()) |
          0;
        this.lineWidth =
          opts.fireworkBaseLineWidth +
          opts.fireworkAddedLineWidth * Math.random();
        this.prevPoints = [[0, hh, 0]];
      };
      Letter.prototype.step = function () {
        if (this.phase === "firework") {
          if (!this.spawned) {
            ++this.tick;
            if (this.tick >= this.spawningTime) {
              this.tick = 0;
              this.spawned = true;
            }
          } else {
            ++this.tick;

            let linearProportion = this.tick / this.reachTime,
              armonicProportion = Math.sin(linearProportion * TauQuarter),
              x = linearProportion * this.x,
              y = hh + armonicProportion * this.fireworkDy;

            if (this.prevPoints.length > opts.fireworkPrevPoints)
              this.prevPoints.shift();

            this.prevPoints.push([x, y, linearProportion * this.lineWidth]);

            let lineWidthProportion = 1 / (this.prevPoints.length - 1);

            for (let i = 1; i < this.prevPoints.length; ++i) {
              let point = this.prevPoints[i],
                point2 = this.prevPoints[i - 1];

              ctx.strokeStyle = this.alphaColor.replace(
                "alp",
                i / this.prevPoints.length
              );
              ctx.lineWidth = point[2] * lineWidthProportion * i;
              ctx.beginPath();
              ctx.moveTo(point[0], point[1]);
              ctx.lineTo(point2[0], point2[1]);
              ctx.stroke();
            }

            if (this.tick >= this.reachTime) {
              this.phase = "contemplate";

              this.circleFinalSize =
                opts.fireworkCircleBaseSize +
                opts.fireworkCircleAddedSize * Math.random();
              this.circleCompleteTime =
                (opts.fireworkCircleBaseTime +
                  opts.fireworkCircleAddedTime * Math.random()) |
                0;
              this.circleCreating = true;
              this.circleFading = false;

              this.circleFadeTime =
                (opts.fireworkCircleFadeBaseTime +
                  opts.fireworkCircleFadeAddedTime * Math.random()) |
                0;
              this.tick = 0;
              this.tick2 = 0;

              this.shards = [];

              let shardCount =
                  (opts.fireworkBaseShards +
                    opts.fireworkAddedShards * Math.random()) |
                  0,
                angle = Tau / shardCount,
                cos = Math.cos(angle),
                sin = Math.sin(angle),
                x = 1,
                y = 0;

              for (let i = 0; i < shardCount; ++i) {
                let x1 = x;
                x = x * cos - y * sin;
                y = y * cos + x1 * sin;

                this.shards.push(
                  new Shard(this.x, this.y, x, y, this.alphaColor)
                );
              }
            }
          }
        } else if (this.phase === "contemplate") {
          ++this.tick;

          if (this.circleCreating) {
            ++this.tick2;
            let proportion = this.tick2 / this.circleCompleteTime,
              armonic = -Math.cos(proportion * Math.PI) / 2 + 0.5;

            ctx.beginPath();
            ctx.fillStyle = this.lightAlphaColor
              .replace("light", 50 + 50 * proportion)
              .replace("alp", proportion);
            ctx.beginPath();
            ctx.arc(this.x, this.y, armonic * this.circleFinalSize, 0, Tau);
            ctx.fill();

            if (this.tick2 > this.circleCompleteTime) {
              this.tick2 = 0;
              this.circleCreating = false;
              this.circleFading = true;
            }
          } else if (this.circleFading) {
            ctx.fillStyle = this.lightColor.replace("light", 70);
            ctx.fillText(this.char, this.x + this.dx, this.y + this.dy);

            ++this.tick2;
            let proportion = this.tick2 / this.circleFadeTime,
              armonic = -Math.cos(proportion * Math.PI) / 2 + 0.5;

            ctx.beginPath();
            ctx.fillStyle = this.lightAlphaColor
              .replace("light", 100)
              .replace("alp", 1 - armonic);
            ctx.arc(this.x, this.y, this.circleFinalSize, 0, Tau);
            ctx.fill();

            if (this.tick2 >= this.circleFadeTime) this.circleFading = false;
          } else {
            ctx.fillStyle = this.lightColor.replace("light", 70);
            ctx.fillText(this.char, this.x + this.dx, this.y + this.dy);
          }

          for (let i = 0; i < this.shards.length; ++i) {
            this.shards[i].step();

            if (!this.shards[i].alive) {
              this.shards.splice(i, 1);
              --i;
            }
          }

          if (this.tick > opts.letterContemplatingWaitTime) {
            this.phase = "balloon";

            this.tick = 0;
            this.spawning = true;
            this.spawnTime = (opts.balloonSpawnTime * Math.random()) | 0;
            this.inflating = false;
            this.inflateTime =
              (opts.balloonBaseInflateTime +
                opts.balloonAddedInflateTime * Math.random()) |
              0;
            this.size =
              (opts.balloonBaseSize + opts.balloonAddedSize * Math.random()) |
              0;

            let rad =
                opts.balloonBaseRadian +
                opts.balloonAddedRadian * Math.random(),
              vel = opts.balloonBaseVel + opts.balloonAddedVel * Math.random();

            this.vx = Math.cos(rad) * vel;
            this.vy = Math.sin(rad) * vel;
          }
        } else if (this.phase === "balloon") {
          ctx.strokeStyle = this.lightColor.replace("light", 80);

          if (this.spawning) {
            ++this.tick;
            ctx.fillStyle = this.lightColor.replace("light", 70);
            ctx.fillText(this.char, this.x + this.dx, this.y + this.dy);

            if (this.tick >= this.spawnTime) {
              this.tick = 0;
              this.spawning = false;
              this.inflating = true;
            }
          } else if (this.inflating) {
            ++this.tick;

            let proportion = this.tick / this.inflateTime,
              x = (this.cx = this.x),
              y = (this.cy = this.y - this.size * proportion);

            ctx.fillStyle = this.alphaColor.replace("alp", proportion);
            ctx.beginPath();
            generateBalloonPath(x, y, this.size * proportion);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, this.y);
            ctx.stroke();

            ctx.fillStyle = this.lightColor.replace("light", 70);
            ctx.fillText(this.char, this.x + this.dx, this.y + this.dy);

            if (this.tick >= this.inflateTime) {
              this.tick = 0;
              this.inflating = false;
            }
          } else {
            this.cx += this.vx;
            this.cy += this.vy += opts.upFlow;

            ctx.fillStyle = this.color;
            ctx.beginPath();
            generateBalloonPath(this.cx, this.cy, this.size);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(this.cx, this.cy);
            ctx.lineTo(this.cx, this.cy + this.size);
            ctx.stroke();

            ctx.fillStyle = this.lightColor.replace("light", 70);
            ctx.fillText(
              this.char,
              this.cx + this.dx,
              this.cy + this.dy + this.size
            );

            if (this.cy + this.size < -hh || this.cx < -hw || this.cy > hw)
              this.phase = "done";
          }
        }
      };

      function Shard(x, y, vx, vy, color) {
        let vel =
          opts.fireworkShardBaseVel +
          opts.fireworkShardAddedVel * Math.random();

        this.vx = vx * vel;
        this.vy = vy * vel;

        this.x = x;
        this.y = y;

        this.prevPoints = [[x, y]];
        this.color = color;

        this.alive = true;

        this.size =
          opts.fireworkShardBaseSize +
          opts.fireworkShardAddedSize * Math.random();
      }
      Shard.prototype.step = function () {
        this.x += this.vx;
        this.y += this.vy += opts.gravity;

        if (this.prevPoints.length > opts.fireworkShardPrevPoints)
          this.prevPoints.shift();

        this.prevPoints.push([this.x, this.y]);

        let lineWidthProportion = this.size / this.prevPoints.length;

        for (let k = 0; k < this.prevPoints.length - 1; ++k) {
          let point = this.prevPoints[k],
            point2 = this.prevPoints[k + 1];

          ctx.strokeStyle = this.color.replace(
            "alp",
            k / this.prevPoints.length
          );
          ctx.lineWidth = k * lineWidthProportion;
          ctx.beginPath();
          ctx.moveTo(point[0], point[1]);
          ctx.lineTo(point2[0], point2[1]);
          ctx.stroke();
        }

        if (this.prevPoints[0][1] > hh) this.alive = false;
      };

      function generateBalloonPath(x, y, size) {
        ctx.moveTo(x, y);
        ctx.bezierCurveTo(
          x - size / 2,
          y - size / 2,
          x - size / 4,
          y - size,
          x,
          y - size
        );
        ctx.bezierCurveTo(
          x + size / 4,
          y - size,
          x + size / 2,
          y - size / 2,
          x,
          y
        );
      }

      function anim() {
        window.requestAnimationFrame(anim);

        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, w, h);

        ctx.translate(hw, hh);

        let done = true;
        for (let l = 0; l < letters.length; ++l) {
          letters[l].step();
          if (letters[l].phase !== "done") done = false;
        }

        ctx.translate(-hw, -hh);

        if (done) for (let l = 0; l < letters.length; ++l) letters[l].reset();
      }

      for (let i = 0; i < opts.strings.length; ++i) {
        for (let j = 0; j < opts.strings[i].length; ++j) {
          letters.push(
            new Letter(
              opts.strings[i][j],
              j * opts.charSpacing +
                opts.charSpacing / 2 -
                (opts.strings[i].length * opts.charSize) / 2,
              i * opts.lineHeight +
                opts.lineHeight / 2 -
                (opts.strings.length * opts.lineHeight) / 2
            )
          );
        }
      }

      window.addEventListener("resize", function () {
        w = c.width = window.innerWidth;
        h = c.height = window.innerHeight;

        hw = w / 2;
        hh = h / 2;

        ctx.font = opts.charSize + "px Verdana";
      });

      if (distance > 0) {
        head.style.display = "initial";
        count.style.display = "initial";
        // count.style.display = 'flex';
      } else {
        head.style.display = "none";
        count.style.display = "none";
        giftbox.style.display = "initial";
        clearInterval(x);
        let merrywrap = document.getElementById("merrywrap");
        let box = merrywrap.getElementsByClassName("giftbox")[0];
        let step = 1;
        let stepMinutes = [2000, 2000, 1000, 1000];

        function init() {
          box.addEventListener("click", openBox, false);
          // box.addEventListener("click", startSong, false);
          box.addEventListener("click", showfireworks, false);
        }

        function stepClass(step) {
          merrywrap.className = "merrywrap";
          merrywrap.className = "merrywrap step-" + step;
        }

        function openBox() {
          if (step === 1) {
            box.removeEventListener("click", openBox, false);
          }
          stepClass(step);
          if (step === 3) {
          }
          if (step === 4) {
            return;
          }
          setTimeout(openBox, stepMinutes[step - 1]);
          step++;
          //   setTimeout(anim, 1900);
        }

        function showfireworks() {
          canvasC.style.display = "initial";
          setTimeout(anim, 1500);
        }

        function startSong() {
          // const audio = new Audio("../files/Happy-Birthday-Instrumental.mp3");
          const audio = new Audio("../Assets/Happy-Birthday-Instrumental.mp3");
          audio.loop = true;
          audio.play();
        }

        init();
      }
    }, second);
  }, [details]);

  return (
    <div className="main1">
      <canvas id="c"></canvas>
      <canvas id="confetti"></canvas>
      <div class="container1" id="count">
        <h1 id="head">Countdown to your birthday:</h1>
        <ul>
          <li>
            <span id="day"></span>days
          </li>
          <li>
            <span id="hour"></span>hours
          </li>
          <li>
            <span id="minute"></span>minutes
          </li>
          <li>
            <span id="second"></span>seconds
          </li>
        </ul>
      </div>
      <div id="merrywrap" class="merrywrap">
        <canvas id="snowfall"></canvas>
        <div class="giftbox">
          <div class="cover">
            <div></div>
          </div>
          <div class="box"></div>
        </div>
      </div>

      {/* <script src="scripts/confetti.min.js" charset="utf-8"></script>
      <script src="scripts/index.js" charset="utf-8"></script> */}

      <footer id="foot">
          <NavLink className="generate-here" to={"/"}>
            Generate Here
          </NavLink>
        <p>
          Design & Developed By Mariya Babu
          Copy right &copy; all right reserved
        </p>
      </footer>
    </div>
  );
};

export default BirthDay;