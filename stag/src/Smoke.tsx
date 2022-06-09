import { useEffect, useRef } from "react";

var SmokeMachine = require("@bijection/smoke");

export const Smoke = () => {
  const ref = useRef<HTMLCanvasElement>();

  useEffect(() => {
    var canvas: HTMLCanvasElement = ref.current as HTMLCanvasElement;
    var ctx = canvas.getContext("2d");

    var party = SmokeMachine(ctx, [200, 200, 200]); //54, 16.8, 18.2]);

    party.start(); // start animating

    setTimeout(function () {
      party.stop(); // stop animating
      console.log("canvaias height", canvas.height);
      party.addSmoke(
        window.innerWidth / 2 - 70,
        window.innerHeight / 1.55,
        150
      );
      party.addSmoke(window.innerWidth / 2 + 50, window.innerHeight / 1.7, 50);

      for (var i = 0; i < 10; i++) {
        party.step(10); // pretend 10 ms pass and rerender
      }

      setTimeout(function () {
        party.start();
      }, 250);
    }, 1000);
  }, []);

  return (
    <canvas
      ref={ref as any}
      width={window.innerWidth - 50}
      height={window.innerHeight - 50}
    />
  );
};
