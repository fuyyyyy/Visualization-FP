const sleeptendChart = echarts.init(document.getElementById('sleeptendchart'));
var app = {};
var option;
option = {
    legend: {
    	textStyle:{//图例文字的样式
                color:'#fff',
                fontSize:12
            }
    },//
    radar: [
        {
            indicator: [//入睡期、浅睡期、熟睡期、深睡期、快速眼动期
                { text: '22:00前' },
                { text: '24:00前' },
                { text: '1:00前' },
                { text: '2:00前' },
                { text: '2:00后' }
            ],
            center: ['47%', '55%'],//中心位置
            radius: 55,//调整雷达图的大小
            startAngle: 90,
            splitNumber: 4,
            shape: 'circle',
            name: {
                formatter:'{value}',
                textStyle: {
                    color:'#72ACD1'
                }
            },
            splitArea: {
                areaStyle: {
                    color: ['rgba(114, 172, 209, 0.2)',
                    'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
                    'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 10
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            }
        }
    ],
    series: [
        {
            name: '雷达图',
            type: 'radar',
            itemStyle: {
                emphasis: {
                    // color: 各异,
                    lineStyle: {
                        width: 1
                    }
                }
            },
            data: [
                {
                    value: [-5,0,20,0,-1],
                    name: '睡眠倾向',
                    symbolSize: 1,
                    areaStyle: {
                        normal: {
                            color: 'rgba(255, 255, 255, 0.5)'
                        }
                    }
                }
            ]
        }
    ]
};
option && sleeptendChart.setOption(option);