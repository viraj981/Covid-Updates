import axios from "axios";
import { GET_DATA } from "./ActionType";

export const getData = () => {
    return dispatch => {
        axios({
            method: 'GET',
            url: 'https://data.covid19india.org/data.json'
        })
        .then(response =>{
            console.log(response.data.statewise[1] , 'response')
            dispatch({
                type: GET_DATA,
                payload: response.data.statewise
            })
        })
        .catch(error => {
            console.log(error, 'data not found');
          });
    }
}