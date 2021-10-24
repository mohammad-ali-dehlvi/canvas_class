class CanvasDraw {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
  }
  drawLine({ x1, y1, x2, y2, strokeWidth = 1, strokeColor = "black" }) {
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.strokeStyle = strokeColor;
    this.ctx.lineWidth = strokeWidth;
    this.ctx.stroke();
    this.ctx.closePath();
  }
  drawArc({
    cx,
    cy,
    radius,
    startAngle,
    endAngle,
    strokeWidth,
    strokeColor,
    fillColor
  }) {
    startAngle = (startAngle * Math.PI) / 180;
    endAngle = (endAngle * Math.PI) / 180;
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, radius, startAngle, endAngle, false);
    if (strokeColor || strokeWidth) {
      this.ctx.strokeStyle = strokeColor || "black";
      this.ctx.lineWidth = strokeWidth || 1;
      this.ctx.stroke();
    }
    if (fillColor) {
      this.ctx.fillStyle = fillColor;
      this.ctx.fill();
    }
    this.ctx.closePath();
  }
  drawCircle({ cx, cy, radius, strokeWidth, strokeColor, fillColor }) {
    this.drawArc({
      cx,
      cy,
      radius,
      strokeWidth,
      strokeColor,
      fillColor,
      startAngle: 0,
      endAngle: 360
    });
  }
}

export default CanvasDraw;
