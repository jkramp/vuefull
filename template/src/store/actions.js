import axios from 'axios'
import {
  mapGetters
} from 'vuex'

export const addStuff = ({
  commit
}, payload) => commit('ADD_STUFF', payload);

export const removeStuff = ({
  commit
}, payload) => commit('REMOVE_STUFF', payload || {});

export const getStuff = ({
  commit
}, payload) => {
  console.log('mapGetters', mapGetters(['test3'])
    .test3);
  return new Promise((resolve, reject) => {
    return axios.get('https://api.vipdeskconnect.com/prod/date-time-service')
      .then(function (response) {
        console.log(response.data);
        console.log(this);
        commit('GOT_STUFF', response.data || {})
        resolve(response.data)
      })
      .catch(function (error) {
        console.log(error);
        reject(error);
      });
  });
};
