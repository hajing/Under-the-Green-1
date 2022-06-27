let loadMacro3 = 0;
const maxMacro3 = 1;
let isFinish = false;

function initMacro3() {
  loadMacro3++;
  console.log("loadMacro3--", loadMacro3);
  if (loadMacro3 < maxMacro3) return;

  console.log("load Macro3");

  registerScroll("#svg_macro3", (event, isDown) => {
    console.log(isDown);
    if (isDown) {
      //
      if (!isFinish) {
        // 未完成滚动
        // 1 左边文字变化 general trends 图片变化
        // 2 左边文字变化  2004? 图片变化
        // 3 左边文字变化  2008 图片变化
        // 4 左边文字变化  fall in 2004 图片变化
        // 5 左边文字变化  fall in 2004 图片变化
        // 6
      } else {
        scrollTo(6, 1000, false);
        setTimeout(() => showLight(), 500);
        initAnimMicro1();
      }
    } else {
      scrollTo(4, 1000, false);
      d3.select("#macro2_audio")
        .transition()
        .duration(1000)
        .style("display", "inline-block");
    }
  });
}
