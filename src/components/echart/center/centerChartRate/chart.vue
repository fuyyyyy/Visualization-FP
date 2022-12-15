<template>
    <div>
      <Echart
        :options="options"
        id="centreLeft1Chart"
        height="400px"
        width="650px"
      ></Echart>
    </div>
  </template>
  
  <script>
  import Echart from '@/common/echart'
  export default {
    data () {
      return {
        options: {},
      };
    },
    components: {
      Echart,
    },
    props: {
      cdata: {
        type: Array,
        default: () => ({})
      },
      datevalue: {
        type: String,
      }
    },
    watch: {
      cdata: {
        handler (newData) {
        this.options = {
            series: {
                center: ["42%","45%"],
                avoidLabelOverlap: true,
                type: 'sunburst',
                data: newData,
                radius: [0, '90%'],
                itemStyle: {
                  borderRadius: 10,
                  borderWidth: 2,
                  emphasis: {
                      color: '#00fa9a'
                  },
                },
                label: {
                  show: true
                }
            }
          }
        },
        immediate: true,
        deep: true
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  </style>