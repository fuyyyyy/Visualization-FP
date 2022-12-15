<template>
  <div>
    <Chart :cdata="cdata"/>
  </div>
</template>

<script>
import Chart from './chart.vue';
import sleeptime from '../../../../assets/data/sleep.json'

export default {
  inject:[
    "dateValue"
  ],
  data () {
    return {
      cdata: [],
    }
  },
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
      for(let i in sleeptime) {
        if(String(sleeptime[i].date) == String(date)) {
          this.cdata.push({value:sleeptime[i].times, name:sleeptime[i].perior});
        }
      }
    },
  }
}
</script>