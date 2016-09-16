import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3004/api'

class ApplicationApi {

  static getApplication(id) {
    return axios.get('/application/' + id)
      .then((res) => {
        const applicationResponse = res.data
        return (Object.assign({}, applicationResponse, { id: applicationResponse._id }))
      })
      .catch((err) => {
        throw new Error('La candidature que vous cherchez n\'existe pas')
      })
  }

  static saveApplication(application) {
    console.log(application)
    return axios.post('/application', application)
      .then((res) => {
        const applicationResponse = res.data
        return (Object.assign({}, applicationResponse, { id: applicationResponse._id }))
      })
  }
}

export default ApplicationApi