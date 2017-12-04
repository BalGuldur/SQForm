import axios from 'axios'
// import * as types from '@/store/mutation-types'
import { apiVerPrefix, apiProdLink, apiLocalLink } from '@/initializers/Api'

// Задаем базовый маршрут для всех запросов
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? apiLocalLink : apiProdLink

// Api requests
const state = {
  axios: axios
}

const getters = {
  axios: state => state.axios
}

const actions = {
  // Отправка запроса к api
  // (передаем method:string, link:string, data:object, params:object, withoutApiPref:boolean)
  request ({getters, dispatch, commit}, {method, link, data, params, withoutApiPref}) {
    // Добавляем api префикс, если не задан параметр withoutApiPref
    const url = withoutApiPref ? link : apiVerPrefix + link
    return getters.axios.request({url, method, data, params})
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error))
  },
  // Загрузка моделей запросом к api, все коллекции из response.data будут обнулены и
  // установлены согласно данным response
  fetchModel ({dispatch, commit}, {link, params}) {
    return dispatch('request', {method: 'get', link: link, params})
      .then(
        response => {
          // Загружаем модели из response в state
          commit('SET_MODELS', response.data, {root: true})
          return Promise.resolve(response.data)
        }
      )
  },
  // Добавление модели, все модели коллекций из response.data будут добавлены (или обновлены значения)
  // к текущим моделям
  addModelItem ({dispatch, commit}, {link, item}) {
    return dispatch('request', {method: 'post', link: link, data: item})
      .then(
        response => {
          // Добавляем модели к текущим моделям state
          commit('ADD_MODELS', response.data, {root: true})
          return Promise.resolve(response.data)
        }
      )
  },
  // Удаление модели, все модели коллекций из response.data будут удалены из текущих моделей
  deleteModelItem ({dispatch, commit}, {link, item}) {
    return dispatch('request', {method: 'delete', link: link + '/' + item.id})
      .then(
        response => {
          // Удаляем модели из state
          commit('REMOVE_MODELS', response.data, {root: true})
          return Promise.resolve(response.data)
        }
      )
  },
  // TODO: Добавить основной интерфейс вывода ошибок
  // Обработка ошибок запросов (для последующего отбражения)
  rejectError ({commit}, {error, addErrorType}) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
    } else {
      // Something happened in setting up the request that triggered an Error
    }
    return Promise.resolve()
  }
}

const mutations = {
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
