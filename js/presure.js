var option;
const presureChart = echarts.init(document.getElementById('presurechart'));
option = {
    series: [
      {
        type: 'gauge',
        axisLine: {
          lineStyle: {
            width: 30,
            color: [
              [0.3, '#7CFFB2'],
              [0.6, '#67e0e3'],
              [0.8, '#bdb76b'],
              [1, '#fd666d']
            ]
          }
        },
        pointer: {
          itemStyle: {
            color: 'auto'
          }
        },
        axisTick: {
          distance: -30,
          length: 8,
          lineStyle: {
            color: '#fff',
            width: 2
          }
        },
        splitLine: {
          distance: -30,
          length: 30,
          lineStyle: {
            color: '#fff',
            width: 4
          }
        },
        axisLabel: {
          color: 'auto',
          distance: 40,
          fontSize: 20
        },
        detail: {
          valueAnimation: true,
          formatter: '{value} ',
          color: 'auto'
        },
        data: [
          {
            value: 68
          }
        ]
      }
    ]
  };
  // setInterval(function () {
  //   myChart.setOption({
  //     series: [
  //       {
  //         data: [
  //           {
  //             value: +(Math.random() * 100).toFixed(2)
  //           }
  //         ]
  //       }
  //     ]
  //   });
  // }, 2000);
option && presureChart.setOption(option);