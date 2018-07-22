import Vue from 'vue';
import Vuex from 'vuex';
import PouchDB from './models/pouch'
import UUID from 'uuid/v1'
// import { isContext } from 'vm';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentRoute: 'index',
    form: {
      title: '',
      content: '',
      color: '#3398DB'
    },
    allNotes: [],
    snackbar: {
      show: false,
      color: '',
      msg: ''
    }
  },
  getters: {
    currentRoute: state => state.currentRoute,
    getAllNotes: state => state.allNotes
  },
  mutations: {
    SET_CURRENT_ROUTE: (state, payload) => state.currentRoute = payload ,
    ADD_NOTE: (state) => {
      const { title, content, color } = state.form
      PouchDB.put({
        _id: UUID(),
        title,
        content,
        color
      })
    },
    LIST_NOTES: (state) => {
      PouchDB.allDocs({
        include_docs: true,
      }).then(data => {
        console.log(data.rows)
        state.allNotes = data.rows
      })
      .catch(err => console.log(err))
    },
    EMPTY_FORM: (state) => {
      state.form = {
        title: '',
        content: '',
        color: '#3398DB'
      }
    },
    SHOW_SNACKBAR: (state, payload)  => {
      const { color, msg } = payload
      state.snackbar = {
        show: true,
        color,
        msg
      }
    }
  },
  actions: {
    setCurrentRoute: (context, payload) => context.commit("SET_CURRENT_ROUTE", payload),
    addNote: (context) => {
      context.commit("ADD_NOTE")
      context.dispatch("listNotes")
      context.dispatch("emptyForm")
      context.dispatch('showSnackbar', {
        color: 'success',
        msg: 'successfuly creating notes'
      })
    },
    emptyForm: (context) => context.commit("EMPTY_FORM"),
    listNotes: (context) => context.commit('LIST_NOTES'),
    showSnackbar: (context, payload) => context.commit("SHOW_SNACKBAR", payload)
  },
});
