import { RECEIVE_BLOCKS, RECEIVE_BLOCK, REMOVE_BLOCK } from "../actions/block_actions";

const blocksReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_BLOCKS:
      return action.blocks;
    case RECEIVE_BLOCK:
      nextState[action.block.id] = action.post;
      return nextState;
    case REMOVE_BLOCK:
      delete nextState[action.post.id];
      return nextState;
    default:
      return state;
  }
};

export default blocksReducer;