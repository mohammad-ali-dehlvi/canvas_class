import CanvasDraw from "./canvas";
import "./styles.css";

const canvas = document.querySelector("canvas");

const canvasObj = new CanvasDraw(canvas);

// canvasObj.drawLine({
//   x1: 10,
//   y1: 10,
//   x2: 100,
//   y2: 100,
//   strokeWidth: 5,
//   strokeColor: "blue"
// });

canvasObj.drawArc({
  cx: 100,
  cy: 100,
  radius: 20,
  startAngle: 90,
  endAngle: 270,
  fillColor: "transparent",
  strokeColor: "blue",
  strokeWidth: 1
});
canvasObj.drawCircle({
  cx: 100 + 5,
  cy: 100 + 5,
  radius: 20,
  fillColor: "transparent",
  strokeColor: "rgba(128,128,128,0.5)",
  strokeWidth: 10
});
