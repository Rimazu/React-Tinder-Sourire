import * as types from "../types";
import data from "../data";












const INITIAL_STATE = {
  isFetching: false,
  workers: data.slice(0, 10),
  error: null
}

//var PersonnesChoisies =[];
//var Contenu = "";






export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.ADD_TO_SELECTED:
		//Contenu = "";
		//PersonnesChoisies.push(action.payload.worker.name);
		//PersonnesChoisies.forEach(function(entry) {
			//Contenu = Contenu + entry + " ";})
		
		//alert(Contenu);
		
      return Object.assign(state, {workers: state.workers.slice(1)});

    case types.ADD_TO_UNSELECTED:
      return Object.assign(state, {workers: state.workers.slice(1)});

    case types.FETCH_WORKERS_SUCCESS:
      return Object.assign(state, {workers: [...state.workers, ...action.payload.workers]});

    default:
	
	return state;
  }
}