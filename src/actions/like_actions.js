export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";


export const receiveLikes = likes => ({
  type: RECEIVE_LIKES,
  likes
})

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
})

export const removeLike = like => ({
  type: REMOVE_LIKE,
  like
})

export const requestLikes = likes => dispatch => (
  dispatch(receiveLikes(likes))
)

export const createLike = like => dispatch => (
  dispatch(receiveLike(like))
)

export const removelike = like => dispatch => (
  dispatch(removeLike(like))
)