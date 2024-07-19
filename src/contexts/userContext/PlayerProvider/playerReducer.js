import * as types from './playerTypes';

export const playerReducer = (state, action) => {
  switch (action.type) {
    case types.reveal_player: {
      return { ...state, player: [...action.payload] };
    }

    case types.change_profile_picture: {
      return {
        ...state,
        profile: {
          ...state.profile,
          banner: {
            ...state.profile.banner,
            profileImageSrc: action.payload,
          },
        },
      }; }

    default: {
      return { ...state };
    }
  }
};
