import * as types from "../types";
import * as XLSX from 'xlsx';

let BATCH_NUM = 1;

const filename = "Test";
const dataExcel = [];
dataExcel.push(['sourire', 'Nom', 'Selectionne']);
//dataExcel.push(['data1', 'data2']);


function addWorkerToSelected(worker) {
	dataExcel.push([worker.gender, worker.name,'oui']);
  return {
    type: types.ADD_TO_SELECTED,
    payload: { worker }
  };
}

function addWorkerToUnselected(worker) {
		dataExcel.push([worker.gender, worker.name,'non']);
  return {
    type: types.ADD_TO_UNSELECTED,
    payload: { worker }
  };
}

export function selectWorker() {
  return (dispatch, getState) => {
    const worker = getWorker(dispatch, getState);
    dispatch(addWorkerToSelected(worker));
	
  };
}

export function unselectWorker() {
  return (dispatch, getState) => {
    const worker = getWorker(dispatch, getState);
    dispatch(addWorkerToUnselected(worker));
  };
}

function fetchMoreWorkersSuccess(workers) {

  return {
    type: types.FETCH_WORKERS_SUCCESS,
    payload: { workers }
  };
}

/*
Here we just mock a db call with a "batch" parameter indicating what next batch of workers we require
*/
export function fetchMoreWorkers(batch) {
  return dispatch => {
    fetch("/data.json", {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
      })
      .then(data => data.json())
      .then(workers => {
        dispatch(fetchMoreWorkersSuccess(workers.slice((batch * 5), (batch * 5) + 5)));
      })
      .catch(err => console.error("ERROR FETCHING WORKERS", err));
  }
}

function getWorker(dispatch, getState) {
  const {workers} = getState().inventory;
  
  if (workers.length === 5)
  {
	  if (BATCH_NUM === 3) {
		  const book = XLSX.utils.book_new();
	const sheet = XLSX.utils.aoa_to_sheet(dataExcel);
	XLSX.utils.book_append_sheet(book, sheet, 'Resultat');
	XLSX.writeFile(book, `${filename}.xls`);
	  }
	  else {
			dispatch(fetchMoreWorkers(BATCH_NUM++));
	  }
  }

  return workers[0];
}