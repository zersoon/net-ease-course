let clearWaterMark = () => { // 清空水印
  if (style) style.remove();
}

export default function createWaterMark(username) {
  // 先清空之前的水印
  clearWaterMark();

  if (!username) return;

  // 设置宽度
  let width = window.parseInt(document.body.clientWidth);
  let canvasWidth = width / window.parseInt(width / 320);
  let fontFamily = window.getComputedStyle(document.body)['font-family'];
  let canvas = document.createElement('canvas');
  canvas.width = canvasWidth;
  canvas.height = 200;

  let ctx = canvas.getContext('2d');
  ctx.rotate(-20 * Math.PI / 180);
  // 设置字体大小
  ctx.font = `18px ${fontFamily}`;
  // 设置水印颜色
  ctx.fillStyle = 'rgba(8, 8, 8, .1)';
  ctx.fillText(username, 50, 200);

  // 以图片方式
  let imgSrc = canvas.toDataURL('image/png');
  style = document.createElement('style');
  style.innerHTML = `
    .with-water-mark:before {
      content: '';
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      z-index: 9999;
      pointer-events: none;
      background-image: url("${imgSrc}");
    }`;

    (document.head.append || document.head.appendChild).apply(document.head, [style]);
}
