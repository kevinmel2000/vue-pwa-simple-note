<template>
  <div class="home">
     <div id="listing">
       <div class="siimple-content siimple-content--large" style=" padding: 10px; margin: 0 auto">
        <div style="max-width: 100%;">
          <div class="siimple-field">
              <div class="siimple-field-label">Title</div>
              <input v-model="form.title" type="text" class="siimple-input siimple-input--fluid" placeholder="Say Hi to Bryan">
              <div class="siimple-field-helper">This field can't be empty</div>
          </div>
          <div class="siimple-field">
              <div class="siimple-field-label">Content</div>
              <textarea v-model="form.content" class="siimple-textarea siimple-textarea--fluid" rows="9"></textarea>
              <div class="siimple-field-helper">This field can't be empty</div>
          </div>
          <div class="siimple-field">
            <div class="siimple-field-label">
              <strong>Please choose a color:</strong>
              <swatches v-model="form.color" inline></swatches>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Swatches from 'vue-swatches';
import Store from '../store'
import { mapState } from 'vuex'

@Component({
  components: {
    Swatches
  },
  computed: {
    ...mapState(['form'])
  },
  methods: {
    showSnackbar: () => {
      Store.dispatch('showSnackbar', {
        color: 'info',
        msg: 'Successfuly adding data'
      })
    }
  }
})
export default class Add extends Vue {
  data() {
    return {
      snackbar: null,
      // color: 'info'
    }
  };

  mounted(){
    Store.dispatch("setCurrentRoute", "add")
  }
}
</script>

<style lang="scss" scoped>
  #listing{
    padding: 18% 0 0;
  }

  .siimple-field{
    max-width: 100%;
  }

  .siimple-input, .siimple-textarea{
    max-width: 90%;
  }

  .siimple-list-item{
    padding: 15px;
    border-left-width: 5px;
    border-left-color:red !important;
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
