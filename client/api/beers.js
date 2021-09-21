import request from 'superagent'

const api = '/api/v1/beers'

export const getBeers = () => {
  return request
    .get(api)
    .then(response => response.body)
}
export const getOneBeer = (id) => {
  return request
    .get(`${api}/${id}`)
    .then(res => res.body)
}
export const postNewBeer = (newBeer) => {
  return request
    .post(api)
    .send(newBeer)
    .then (res => res.body)
}