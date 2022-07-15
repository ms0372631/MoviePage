
export const RECEIVE_BLOCKS = "RECEIVE_BLOCKS";
export const RECEIVE_BLOCK = "RECEIVE_BLOCK";
export const REMOVE_BLOCK = "REMOVE_BLOCK";

export const receiveBlocks = blocks => ({
  type: RECEIVE_BLOCKS,
  blocks
})

export const receiveBlock = block => ({
  type: RECEIVE_BLOCK,
  block
})

export const removeBlock = block => ({
  type: REMOVE_BLOCK,
  block
})

