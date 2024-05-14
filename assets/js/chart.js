function sliceSize(dataNum, dataTotal) {
    return dataNum / dataTotal * 360;
  }
  
  function addSlice(id, sliceSize, pieElement, offset, sliceID, color) {
    $(pieElement).append("<div class='slice " + sliceID + "'><span></span></div>");
    var offset = offset - 1;
    var sizeRotation = -179 + sliceSize;
  
    $(id + " ." + sliceID).css({
      "transform": "rotate(" + offset + "deg) translate3d(0,0,0)" });
  
  
    $(id + " ." + sliceID + " span").css({
      "transform": "rotate(" + sizeRotation + "deg) translate3d(0,0,0)",
      "background-color": color });
  
  }
  
  function iterateSlices(id, sliceSize, pieElement, offset, dataCount, sliceCount, color) {
    var
    maxSize = 179,
    sliceID = "s" + dataCount + "-" + sliceCount;
  
    if (sliceSize <= maxSize) {
      addSlice(id, sliceSize, pieElement, offset, sliceID, color);
    } else {
      addSlice(id, maxSize, pieElement, offset, sliceID, color);
      iterateSlices(id, sliceSize - maxSize, pieElement, offset + maxSize, dataCount, sliceCount + 1, color);
    }
  }
  
  function createPie(id) {
    var
    listData = [],
    listTotal = 0,
    offset = 0,
    i = 0,
    pieElement = id + " .pie-chart__pie";
    dataElement = id + " .pie-chart__legend";
  
    color = [
      "rgb(19, 34, 48)",
      "rgb(209, 102, 2)",
      "rgb(90, 104, 103)",
      "rgb(68, 37, 66)",
      "rgb(0, 86, 47)",
      "rgb(66, 52, 43)",
      "rgb(129, 155, 76)"];
  
    color = shuffle(color);
  
    $(dataElement + " span").each(function () {
      listData.push(Number($(this).html()));
    });
  
    for (i = 0; i < listData.length; i++) {if (window.CP.shouldStopExecution(0)) break;
      listTotal += listData[i];
    }window.CP.exitedLoop(0);
  
    for (i = 0; i < listData.length; i++) {if (window.CP.shouldStopExecution(1)) break;
      var size = sliceSize(listData[i], listTotal);
      iterateSlices(id, size, pieElement, offset, i, 0, color[i]);
      $(dataElement + " li:nth-child(" + (i + 1) + ")").css("border-color", color[i]);
      offset += size;
    }window.CP.exitedLoop(1);
  }
  
  function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {if (window.CP.shouldStopExecution(2)) break;
      j = Math.floor(Math.random() * i);
      x = a[i - 1];
      a[i - 1] = a[j];
      a[j] = x;
    }window.CP.exitedLoop(2);
  
    return a;
  }
  
  function createPieCharts() {
    createPie('.pieID--mainstack');
    createPie('.pieID--scripting');
    createPie('.pieID--devopstooling');
  }
  
  createPieCharts();
  //# sourceURL=pen.js