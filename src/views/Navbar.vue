<template>
        <div id="navbar" class="siimple-navbar siimple-navbar--primary sd-navbar siimple-navbar--large">
                <router-link to="/" class="siimple-navbar-title">{{ title }}</router-link>
                <!-- <a class="siimple-navbar-subtitle">v3.1.0</a> -->
        
                <div id="add">
                        <div v-if="currentRoute == 'add'" id="add-wrapper">
                                <router-link class="button-1" to="/" style="color: white" >
                                        <i class="fa fa-2x fa-times"></i>
                                </router-link>
                                <span class="button-2" to="/" style="color: white">
                                        <i class="fa fa-2x fa-check"></i>
                                </span>
                        </div>

                        <div v-if="currentRoute == 'index'" id="add-wrapper">
                               
                                <router-link class="button-1" to="add" style="color: white">
                                        <i class="fa fa-2x fa-cog"></i>
                                </router-link>
                                 <router-link class="button-1" to="add" style="color: white">
                                        <i class="fa fa-2x fa-plus"></i>
                                </router-link>
                        </div>
                </div>
                
        
        </div>
</template>

<script lang="ts">
        import {
                Component,
                Vue
        } from 'vue-property-decorator';
        import {
                mapGetters, mapState
        } from 'vuex'
        import Store from '../store'
       

        @Component({
                components: {},
                computed: {
                        ...mapState(['currentRoute'])
                },
                watch: {
                        currentRoute: {
                                handler: function(val){ this.setNavbarButton(val) },
                                deep: true
                        }
                },
                methods: {
                        setNavbarButton(data){
                                if(data == 'add'){
                                        this.iconUse = ["fa-cancel", "fa-address-book"]
                                        this.title = "Simple Note"
                                        this.icon =  "fa-address-card"
                                }

                                if(data == 'index'){
                                        this.iconUse = ["fa-cancel", "fa-plus"]
                                        this.title = "Simple Note"
                                        this.icon =  "fa-plus"
                                }
                        },
                        save(){
                                Store.dispatch("addNote")
                        }
                }
        })
        export default class Navbar extends Vue {
               data(){
                       return {
                               title: "Simple Note",
                               iconSet: {
                                       index: [ "fa-plus", "fa-plus" ],
                                       add: [ "fa-cancel", "fa-check" ]
                               },
                               iconUse: [  "fa-cancel", "fa-address-book" ],
                               icon: "fa-address-card"
                               
                       }
               }

               mounted(){
                       Store.dispatch('listNotes')
               }
        }
</script>

<style lang="scss" scoped>
        #navbar {
                position: fixed;
                height: 10%;
                display: flex;
                width: 100%;
                flex-direction: row;
        }
        
        .siimple-navbar-title {
                flex-grow: 3;
        }
        
        #add {
                flex-grow: 1;
                background: transparent;
                color: white;
                outline-color: transparent;
                border: 0px;
                
        }

        #add-wrapper {
                display: flex
        }

        .button-1, .button-2{
                flex-grow: 1
        }
        
</style>
