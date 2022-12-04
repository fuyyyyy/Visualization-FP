var option;
const heartrateChart = echarts.init(document.getElementById('heartratechart'));
// prettier-ignore
const heartratedata = [["0:00", 88], ["0:30", 70], ["1:00", 110], ["1:30", 84], ["2:00", 72], ["2:30", 49], ["3:00", 69], ["3:30", 80], ["4:00", 73], ["4:30", 66], ["5:00", 56], ["5:30", 63], ["6:00", 90], ["6:30", 56], ["7:00", 75], ["7:30", 132], ["8:00", 86], ["8:30", 56], ["9:00", 73], ["9:30", 66], ["10:00", 65], ["10:30", 56], ["11:00", 69], ["11:30", 66], ["12:00", 55], ["12:30", 76], ["13:00", 82], ["13:30", 56], ["14:00", 63], ["14:30", 76], ["15:00", 116], ["15:30", 126], ["16:00", 129], ["16:30", 76], ["17:00", 55], ["17:30", 66], ["18:00", 96], ["18:30", 146], ["19:00", 73], ["19:30", 116], ["20:00", 66], ["20:30", 64], ["21:00", 59], ["21:30", 76], ["22:00", 135], ["22:30", 116], ["23:00", 66], ["23:30", 86], ["24:00", 73]];
const heartratedateList = heartratedata.map(function (item) {
    return item[0];
});
const valueList = heartratedata.map(function (item) {
    return item[1];
});
option = {
    // Make gradient line here
    visualMap: [
        {
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 50,
            max: 150
        },
    ],
    title: [
        {
            left: 'center',
            text: 'Daily Heart Rate Monitoring Chart'
        },
    ],
    grid:{
        x:2,
        y:2,
        x2:2,
        y2:2,
        borderWidth:1
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: [
        {
            name: 'time',
            data: heartratedateList
        },
    ],
    yAxis: [
        {
            name: 'rate',
            min: 0,
            max: 200
        },
    ],
    grid: [
        {
            //bottom: '60%'
        }
    ],
    series: [
        {
            type: 'line',
            showSymbol: false,
            data: valueList
        },
    ]
};
option && heartrateChart.setOption(option);