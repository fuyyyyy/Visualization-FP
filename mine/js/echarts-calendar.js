var option;
const calendarChart = echarts.init(document.getElementById('calendarchart'));
option = {

    title: {
        text: '每日步数',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip : {
        trigger: 'item'
    },
    calendar: [{
        top: 50,
        left: 'center',
        range: ['2022-01-01', '2022-06-30'],
        splitLine: {
            show: true,
            lineStyle: {
                color: '#000',
                width: 4,
                type: 'solid'
            }
        },
        yearLabel: {
            formatter: '{start}  1st',
            textStyle: {
                color: '#fff'
            }
        },
        itemStyle: {
            normal: {
                color: '#323c48',
                borderWidth: 1,
                borderColor: '#111'
            }
        }
    }, {
        top: 220,
        left: 'center',
        range: ['2022-07-01', '2022-12-31'],
        splitLine: {
            show: true,
            lineStyle: {
                color: '#000',
                width: 4,
                type: 'solid'
            }
        },
        yearLabel: {
            formatter: '{start}  2nd',
            textStyle: {
                color: '#fff'
            }
        },
        itemStyle: {
            normal: {
                color: '#323c48',
                borderWidth: 1,
                borderColor: '#111'
            }
        }
    }],
    series: [
        {
            name: '步数',
            type: 'scatter',
            coordinateSystem: 'calendar',
            symbolSize: function (val) {
                return val[1] / 500;
            },
            itemStyle: {
                normal: {
                    color: '#ddb926'
                }
            }
        },
        {
            name: '步数',
            type: 'scatter',
            coordinateSystem: 'calendar',
            calendarIndex: 1,
            symbolSize: function (val) {
                return val[1] / 500;
            },
            itemStyle: {
                normal: {
                    color: '#ddb926'
                }
            }
        },
        {
            name: 'Top 12',
            type: 'effectScatter',
            coordinateSystem: 'calendar',
            calendarIndex: 1,
            symbolSize: function (val) {
                return val[1] / 500;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        },
        {
            name: 'Top 12',
            type: 'effectScatter',
            coordinateSystem: 'calendar',
            symbolSize: function (val) {
                return val[1] / 500;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};
option && calendarChart.setOption(option);
$.ajax({
    url: "data/stepcount.json",
    dataType: "json"
}).done(function() {
    $("#calendar").addClass("chart-done");
}).done(function(data) {
    const stepcountData = [];
    for(let i in data) {
        stepcountData.push([
            echarts.format.formatTime("yyyy-MM-dd", data[i].date),
            data[i].stepcount
            ]);
    }
    calendarChart.setOption({
        series: [{
            data: stepcountData
        }, {
            data: stepcountData
        }, {
            data: stepcountData.sort(function (a, b) {
                return b[1] - a[1];
            }).slice(0, 12),
        }, {
            data: stepcountData.sort(function (a, b) {
                return b[1] - a[1];
            }).slice(0, 12),
        }]
    });
}).fail(function(jqXHR) {
    console.log("Ajax Fail: ", jqXHR.status, jqXHR.statusText);
});
