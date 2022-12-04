const csrcChart = echarts.init(document.getElementById("sleeptimechart"), "shine");
const csrcChartOpt = {
    tooltip: {
        trigger: "item",
        formatter: "{b0}<br />时长：{c0}h"//更改了显示的内容
    },
    legend: {
        type: "scroll",
        orient: "vertical",
        padding: 0,
        top: 15,
        right: 0,
        itemGap: 5,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            fontSize: 10,
            color: "#b0c2f9"
        }
    },
    series: [{
        name: "睡眠时长",
        type: "pie",
        center: ["51%", "55%"],//更改了饼状图的大小和位置
        radius: ["30%", "55%"]
    }]
};
csrcChart.setOption(csrcChartOpt);
$.ajax({
    url: "data/sleeptime.json",
    dataType: "json"
}).done(function() {
    $("#csrcChart").addClass("chart-done");
}).done(function(data) {
    //console.log('Data: ', data);
    const chartData = [];
    for(let i in data) {
        chartData.push({
            name: data[i].perior,
            value: data[i].times
        });
    }
    csrcChart.setOption({
        series: [{
            name: "睡眠时长",
            data: chartData
        }]
    });
}).fail(function(jqXHR) {
    console.log("Ajax Fail: ", jqXHR.status, jqXHR.statusText);
});