var option;
const BMIChart = echarts.init(document.getElementById('BMIchart'));
const colors = ['#4962FC', '#EE6666', '#FD9E06'];
option = {
  color: colors,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  grid: {
    right: '20%'
  },
  legend: {
    data: ['Weight', 'Height', 'BMI']
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      // prettier-ignore
      data: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019','2020']
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '体重',
      position: 'right',
      alignTicks: false,
      splitLine:{
          show:false
      },

      axisLine: {
        show: true,
        lineStyle: {
          color: colors[0]
        }
      },
      axisLabel: {
        formatter: '{value} kg'
      }
    },
    {
      type: 'value',
      name: '身高',
      position: 'right',
      alignTicks: true,
      offset: 80,
      splitLine:{
          show:false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: colors[1]
        }
      },
      axisLabel: {
        formatter: '{value} cm'
      }
    },
    {
      type: 'value',
      name: 'BMI',
      position: 'left',
      alignTicks: true,
      splitLine:{
          show:false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: colors[2]
        }
      },
      axisLabel: {
        formatter: '{value} '
      }
    }
  ],
  series: [
    {
      name: 'Weight',
      type: 'bar',
      data: [
        10.48, 13.31, 17, 18.23, 22.45, 23.62, 25.46, 27.12, 30.1, 34.23, 38.78, 41.12,45.4
      ],
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' }
        ]
      },
      markLine: {
        data: [{ type: 'average', name: 'Avg' }]
      },
    },
    {
      name: 'Height',
      type: 'bar',
      yAxisIndex: 1,
      data: [
        75, 87.2, 96.8, 104.1, 111.4, 117.8, 125, 130, 136.3, 142, 148.8, 155.0,162
      ],
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' }
        ]
      },
      markLine: {
        data: [{ type: 'average', name: 'Avg' }]
      },
    },
    {
      name: 'BMI',
      type: 'line',
      yAxisIndex: 2,
      data: [18.3,18.6, 19.5, 17.5, 17.9, 17.3, 17, 17.5, 17.4, 17.5, 18.8, 18.1,18.2],
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' }
        ]
      },
    },
    
  ],
 dataZoom : [
          {
            type: 'slider',
            show: true,
            start: 0,
            end: 30,
            xAxisIndex: [0],
          },
          
        ],

};
option && BMIChart.setOption(option);