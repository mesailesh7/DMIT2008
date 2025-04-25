import { BASE_URL } from './base.js'


export const getReviews = () => {
  return fetch(`${BASE_URL}/reviews/`, {
    method: "GET",
    header: {
      'Content-Type': 'application/json',
    }
    })
    .then((response)=> {
      return response.json()
    }).then((data)=> {
      return Promise.resolve(data)
    })
}


export const postReview = ({title, comment, rating}) => {
  return fetch(`${BASE_URL}/reviews/`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title,
      comment,
      rating
    })
  }).then((response)=> {
    return response.json()
  }).then((data)=> {
    // using Promise.resolve here will pass the data we have
    // fetched here as the returnedData passed when we use the function.
    // postReview({title: title,
    //   comment: comment,
    //   rating: rating}).then((returnedData) => { }))
    // where title, comment and rating or function
    return Promise.resolve(data)
    })
}


export const deleteReview = (id) => {
  return fetch(`${BASE_URL}/reviews/${id}`, {
    method: "DELETE",
    header: {
      'Content-Type': 'application/json',
    }
    })
    .then((response)=> {
      return response.ok
    })
}
