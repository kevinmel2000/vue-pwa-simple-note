<template>
  <div class="home">
     <div class="siimple-list" id="listing">
       
        <div v-if="allNotes.length == 0" > 
          <div class="siimple-content" style="padding: 10px; text-align: center">
              No Data Yet !
          </div>
        </div>

        <div v-for="(v,k) in allNotes" class="siimple-list-item" :key="k" :style="{ 'border-left-color': v.doc.color }">
          <div class="title">{{ v.doc.title }}</div>
          <div class="content">
            <div class="content-text"> {{ v.doc.content }} </div>
            <div class="siimple-checkbox">
                <!-- <input name="complete" type="checkbox" />
                <label for="complete"></label> -->

                
            </div>
            
          </div>
        </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Store from '../store'
import { mapState } from 'vuex';

@Component({
  components: {
  },
  computed: {
    ...mapState(['allNotes'])
  }
})
export default class Home extends Vue {
  data(){
    return {
      msg: 'hello'
    }
  }

  mounted(){
    Store.dispatch("setCurrentRoute", "index")
  }
}
</script>

<style lang="scss" scoped>
  #listing{
    padding-top: 18%;
  }

  .siimple-list-item{
    padding: 15px;
    border-left-width: 5px;
    // border-left-color:rgb(77, 145, 228) !important;
    border-left-style: solid
  }

  .title{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .content{
    display: flex;
    flex-direction: row
    
  }

  .content-text{
    flex-grow: 2;
    flex-wrap: wrap
  }

  .siimple-checkbox{
    flex-grow: 1;
  }

</style>
