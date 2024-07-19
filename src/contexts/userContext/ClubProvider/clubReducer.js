import * as types from './clubTypes';

export const clubReducer = (state, action) => {
  switch (action.type) {
    case types.reveal_player: {
      return { ...state, player: [...action.payload] };
    }

    default: {
      return { ...state };
    }
  }
};
