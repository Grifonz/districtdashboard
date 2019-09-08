<script>
import { HorizontalBar } from "vue-chartjs";
export default {
  extends: HorizontalBar,
  props: ["chartData", "options"],
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
  watch: {
    chartData: {
      deep: true,
      handler() {
        //update chart
        this.$data._chart.update();
      }
    }
  }
};
</script>
<style lang="scss">
</style>
