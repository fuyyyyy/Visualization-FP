<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue';
import sport from '../../../../assets/data/sport.json';

export default {
  data () {
    return {
      cdata: []
    }
  },
  inject:[
    "dateValue"
  ],
  components: {
    Chart,
  },
  mounted () {
  },
  watch: {
    dateValue: {
      handler: function(newData) {
        this.setData(newData.date)
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    setData(date) {
      this.cdata = [];
      var children1 = [];
      var children2 = [];
      var children3 = [];
      for(let i in sport){
        if(sport[i].date == date) {
          if(sport[i].kind == "有氧运动") {
            children1.push({name:sport[i].name, value:sport[i].time, itemStyle:{color: '#79CDCD'}})
          }
          else if(sport[i].kind == "无氧运动") {
            children2.push({name:sport[i].name, value:sport[i].time, itemStyle:{color: '#7FFFD4'}})
          }
          else if(sport[i].kind == "拉伸运动") {
            children3.push({name:sport[i].name, value:sport[i].time, itemStyle:{color: '#528B8B'}})
          }
        }
      }
      this.cdata.push({name:"有氧运动", children:children1, itemStyle:{color: '#79CDCD'}});
      this.cdata.push({name:"无氧运动", children:children2, itemStyle:{color: '#7FFFD4'}});
      this.cdata.push({name:"拉伸运动", children:children3, itemStyle:{color: '#528B8B'}});
    }
  }
}
</script>

<style lang="scss" scoped>
</style>