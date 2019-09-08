<template>
  <v-container id="targets" v-if="showChart.show" class="grey lighten-4 my-4" fluid>
    
    <v-row >
      <draggable class="row wrap">
        <v-col>
          <v-card width="400" height="450">
            <v-card-title>
              <span>Chart</span>
              <div class="flex-grow-1"></div>
              <span>
                <v-icon>{{iconDraggable}}</v-icon>
              </span>
            </v-card-title>
            <v-divider></v-divider>
            <chart :width="400" :height="400" :chart-data="dataCollection" :options="optionsChart" />
          </v-card>
        </v-col>

        <!-- add availables slots -->
        <v-col v-for="i in addSlots" :key="i">
          <v-row>
            <v-col>
              <!-- ADD HERE OTHER CHARTS -->
              <div class="slotSpace"></div>
            </v-col>
          </v-row>
        </v-col>
      </draggable>
    </v-row>

  </v-container>
</template>
<script>
import Chart from "../components/Chart";
import Draggable from "vuedraggable";
import { mdiDragVariant } from "@mdi/js";
export default {
  name: "targets",
  props: ["dataCollection", "optionsChart", "showChart", "addSlots"],
  data() {
    return {
      iconDraggable: mdiDragVariant
    };
  },
  components: {
    Chart,
    Draggable
  }
};
</script>
<style lang="scss">
.slotSpace{
  width: 400px;
  height: 400px;
}
</style>