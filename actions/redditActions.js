export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const DELETE_POSTS = 'DELETE_POSTS';

export const receivePosts = (data) =>{
  console.log('data',data);
  return{
    type: RECEIVE_POSTS,
    data
  }
}

export const deletePosts = (index) =>{
  console.log('index',index);
  return{
    type: DELETE_POSTS,
    index
  }
}