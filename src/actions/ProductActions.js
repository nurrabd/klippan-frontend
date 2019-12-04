import axios from "axios";
import setJWTToken from "../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";

export const GET_ERRORS = "GET_ERRORS";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PROJECTS_KOMMUN = "GET_PROJECTS_KOMMUN";

const BASE_URL = 'http://localhost:8081/api/product';



export const createNewProduct = (newProduct, history) => async dispatch => {

    try {
        await axios.post(`${BASE_URL}/createk`, newProduct);
        //If everything goes good, send us to our login page
       // history.push("/");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (error) {
        dispatch({

            type: GET_ERRORS,
            payload: error.response.data
        });

    }
};
export const getProductsByKommun = () => async dispatch => {
    const res = await axios.get(`${BASE_URL}/kommun/${"ost"}`);
    dispatch({
        type: GET_PRODUCTS,
        payload: res.data
    });
};
export const getProducts = () => async dispatch => {
    const res = await axios.get(`${BASE_URL}/all`);
    dispatch({
        type: GET_PRODUCTS,
        payload: res.data
    });
};

export const getProductsByItems = () => async dispatch => {
    const res = await axios.get(`${BASE_URL}/allitems`);
    dispatch({
        type: GET_PRODUCTS,
        payload: res.data
    });
};






