import axios from "axios";
import setJWTToken from "../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";
export const GET_ERRORS = "GET_ERRORS";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

const BASE_URL = 'http://localhost:8081/api/users'
//this takes the object(project) and takes history parameter
//history parameter, this is what is going to allow us to redirect once we submit the form
//async the functions always returns a promise, use it with await means that javascript wait until that promise settles and returns its result
export const createNewUser = (newuser, history) => async dispatch => {

    try {
        await axios.post(`${BASE_URL}/register`, newuser);
        //If everything goes good, send us to our login page
        history.push("/");
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

export const login = LoginRequest => async dispatch => {
    try {
        //fist we need to do is to hit the end point
        //post => Login request
        const res = await axios.post(`${BASE_URL}/login`, LoginRequest);

        //extract token from res.data
        const {token} = res.data;
        //store the token in the localStorage
        localStorage.setItem("jwtToken", token);
        //make sure to set our token in header
        setJWTToken(token);
        //decode token on react
        const decoded = jwt_decode(token);

        //dispatch to our securityReducer
        dispatch({
            type: SET_CURRENT_USER,
            payload: decoded
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};

export const logout = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setJWTToken(false);
    dispatch({
        type: SET_CURRENT_USER,
        payload: {}
    });
};




