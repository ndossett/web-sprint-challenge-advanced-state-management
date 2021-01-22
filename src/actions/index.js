import axios from 'axios';
export const API_START = 'API_START';
export const API_SUCCESS = 'API_SUCCESS';
export const API_FAILURE= 'API_FAILURE';

export const POST_CHECK= 'POST_CHECK';
export const POST_FAILURE= 'POST_FAILURE';
export const POST_SUCCESS= 'POST_SUCCESS';


export const fetchSmurfs = () => {
    return (dispatch) => {
   dispatch({type: API_START});
   axios
   .get('http://localhost:3333/smurfs')
    .then((res) => {
        dispatch({type: API_SUCCESS, payload:res.data})
    })
    .catch((err) => {
        dispatch({type: API_FAILURE, payload:err.message});
    });
 };
}

export const addSmurfs = (smurfInfo) => {
return (dispatch) => {
    dispatch({type: POST_CHECK});
    axios
        .post('http://localhost:3333/smurfs', smurfInfo)
        .then((res) => {
            console.log('action', res.data);
            dispatch({ type: POST_SUCCESS, payload: res.data });
        })
      .catch((err) => {
        console.log('error', err.message)
        dispatch({ type: POST_FAILURE, payload: err.message });
      });
 };
};


//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.