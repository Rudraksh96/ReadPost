import axios from "axios";
import { CREATE_POST, DELETE_POST, GET_DATA, GET_POST, REGISTER, UPDATE_POST } from "./type";



export const getReduxList = ()=> async (dispatch) => {
  
    const result = await axios.get("https://jsonplaceholder.typicode.com/posts")
    console.log(result);

    dispatch({
        type:GET_DATA,
        payload:result.data
    })}

    export const getPost = (id) => async (dispatch) => {
        const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        console.log(result,"get reQuired List rom sever");
        
        dispatch({
          type: GET_POST,
          payload: result.data
        })
      };


      export const createPost = (data) => async (dispatch) => {
        const result = await axios.post(`https://jsonplaceholder.typicode.com/posts`,data);
        console.log(result,"get reQuired List om serverrrr");
        
        dispatch({
          type: CREATE_POST,
          payload: result.data
        })
      };

      export const registerUser = (data) => async (dispatch) => {
        const result = await axios.post(`http://localhost:3000/student`,data);
        console.log(result,"get result from account");
        
        dispatch({
          type: REGISTER,
          payload: result
        })
      };


      // update a post
export const updatePost = (post) => ({
  type: UPDATE_POST,
  payload: post,
});



export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: id,
});





