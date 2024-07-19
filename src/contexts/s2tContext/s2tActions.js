import * as types from './s2tTypes';

export const showData = (dispatch) => {
  dispatch({ type: types.show_data, payload: [] });
};

export const addProposal = (dispatch, proposalData) => {
  dispatch({ type: types.add_proposal, payload: [proposalData] });
};
