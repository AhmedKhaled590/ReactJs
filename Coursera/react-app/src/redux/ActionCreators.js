import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseUrl'



export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true))
    return (
        fetch(baseUrl + 'dishes')
            .then(response => {
                if (response.ok)
                    return response;
                else {
                    var error = new Error('Error ' + error.status + ': ' + error.message)
                    error.response = response
                    throw error;
                }
            },
                error => {
                    var errMsg = new Error(error.message);
                    throw errMsg
                })
            .then(res => res.json())
            .then(dishes => dispatch(addDishes(dishes)))
            .catch(error => dispatch(dishesFailed(error.message)))
    )
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
})

export const dishesFailed = (errMess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errMess
})

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})

export const fetchComments = () => (dispatch) => {
    return (
        fetch(baseUrl + 'comments')
            .then(response => {
                if (response.ok)
                    return response;
                else {
                    var error = new Error('Error ' + error.status + ': ' + error.message)
                    error.response = response
                    throw error;
                }
            },
                error => {
                    var errMsg = new Error(error.message);
                    throw errMsg
                })
            .then(res => res.json())
            .then(comments => dispatch(addComments(comments)))
            .catch(error => dispatch(commentsFailed(error.message)))
    )
}

export const commentsFailed = () => ({
    type: ActionTypes.COMMENTS_FAILED
})

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
})

export const fetchPromos = () => (dispatch) => {

    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
        .then(response => {
            if (response.ok)
                return response;
            else {
                var error = new Error('Error ' + error.status + ': ' + error.message)
                error.response = response
                throw error;
            }
        },
            error => {
                var errMsg = new Error(error.message);
                throw errMsg
            })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => {
            dispatch(promosFailed(error.message))
        })

}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
})

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment,
    }
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => { console.log('post comments', error.message); alert('Your comment could not be posted\nError: ' + error.message); });

}

export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading())
    return (
        fetch(baseUrl + 'leaders')
            .then(res => {
                if (res.ok)
                    return res;
                else {
                    var error = new Error('Error ' + res.status + ': ' + res.statusText)
                    error.response = res;
                    throw error
                }
            }, err => {
                var errMes = new Error(err.message)
                throw errMes
            })
            .then(res => res.json())
            .then(leaders => dispatch(addLeaders(leaders)))
            .catch(err => {
                alert(err.message);
            })
    );
}

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
})

export const leadersFailed = (err) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: err
})

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
})

export const postFeedback = (feedback) => {
    var newFeedback = {
        firstname: feedback.firstname,
        lastname: feedback.lastname,
        telnum: feedback.telnum,
        email: feedback.email,
        agree: feedback.agree,
        contactType: feedback.contactType,
        message: feedback.message
    }
    return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers: {
            "CONTENT-TYPE": "application/json"
        },
        credentials: "same-origin"
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(error => { console.log('post feedback', error.message); alert('Your feedback could not be posted\nError: ' + error.message); });
}