import axios from 'axios';

export const getVipcars = () =>async dispatch => {
    await axios
        .get(
            `http://localhost:3001/vipcars`
        )
        .then(res =>  dispatch({ type: 'GET_VIPCARS', payload: res.data }));

};
export const getEndadv = () =>async dispatch => {
    await axios
        .get(
            `http://localhost:3001/end`
        )
        .then(res =>  dispatch({ type: 'GET_ENDADV', payload: res.data }));

};
export const getPremium = () =>async dispatch => {
    await axios
        .get(
            `http://localhost:3001/premium`
        )
        .then(res =>  dispatch({ type: 'GET_PREMIUM', payload: res.data }));

};
export const addWishList = car => {
    return {
        type: 'ADD_WISHLIST',
        payload: car,
    };
};

export const deleteWishList = id => {
    return {
        type: 'DELETE_FROM_WISHLIST',
        payload: id,
    };
};
