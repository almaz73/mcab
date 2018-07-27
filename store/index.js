import Vuex from 'vuex';
import * as axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state:{
      users:[],
      programm:{}
    },
    getters:{
      users(state){
        return state.users;
      },
      programm(state){
        return state.programm;
      }
    },
    mutations:{
      getUsers(state, users){
        state.users = users;
      },
      getProgramm(state, programm){
        state.programm = programm;
      }
    },
    actions:{
      async getUsers(context) {
        let config = {proxy: {host: '127.0.0.1', port: 18080}};
        const req = await axios.get('http://jsonplaceholder.typicode.com/users', config);
        context.commit('getUsers', req.data)
      },
      async getProgramm(context) {
        let config = {proxy: {host: '127.0.0.1', port: 18080}};
        const req = await axios.get('https://api.musicabinet.com/api/program?instrumentId=fcf4c23a-7bba-4990-83d9-f210710e1d51&active=true&enrichMarketInfo=true&page=1&count=4&sortField=el.sortOrder&sortDir=ASC&', config);
        context.commit('getProgramm', req.data)
      }
    }
  });
};

export default createStore;
