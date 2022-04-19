import axios from 'axios'

const Api = axios.create({
    baseURL: 'https://lucasgerenciadorapi.herokuapp.com'
})


export default Api