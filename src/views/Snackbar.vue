<template>
        <div>
                <v-snackbar
                        v-model="snackbar.show"
                        :color="color"
                        :multi-line="multiLine"
                        :timeout="timeout"
                        :vertical="vertical"
                        >
                        {{ snackbar.msg }}
                        <v-btn
                                dark
                                flat
                                @click="snackbar.show = false"
                        >
                                Close
                        </v-btn>
                </v-snackbar>
        </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex';
export default Vue.extend({
        data(){
                return {
                        multiLine: false,
                        timeout: 3000,
                        vertical: false,
                        color: 'success'
                }
                // return {
                //         // snackbar: false,
                //         // color: 'success'
                // }
        },
        computed: {
                ...mapState(['snackbar'])
        }
})
</script>

<style lang="sass" scoped>

</style>


