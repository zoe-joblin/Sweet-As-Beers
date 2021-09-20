import request from 'superagent'

const api = '/api/v1/beers'

export const getBeers = () => {
  return request
    .get(api)
    .then(response => response.body)
}
