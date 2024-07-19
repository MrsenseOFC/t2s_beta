import * as types from './universityTypes';

export const universityReducer = (state, action) => {
  switch (action.type) {
    case types.reveal_player: {
      return { ...state, player: [...action.payload] };
    }

    default: {
      return { ...state };
    }
  }
};
