import { useEffect, useRef } from "react";

var SmokeMachine = require("@bijection/smoke");

export const Smoke = () => {
  const ref = useRef<HTMLCanvasElement>();

  useEffect(() => {
    var canvas: HTMLCanvasElement = ref.current as HTMLCanvasElement;
    var ctx = canvas.getContext("2d");

    var party = SmokeMachine(ctx, [54, 16.8, 18.2]);

    party.start(); // start animating

    party.addSmoke(500, 500, 10); // wow we made smoke

    setTimeout(function () {
      party.stop(); // stop animating

      party.addSmoke(600, 500, 100);
      party.addSmoke(500, 600, 20);

      for (var i = 0; i < 10; i++) {
        party.step(10); // pretend 10 ms pass and rerender
      }

      setTimeout(function () {
        party.start();
      }, 1000);
    }, 1000);
  });

  return <canvas ref={ref as any} width={1000} height={1000} />;
};
