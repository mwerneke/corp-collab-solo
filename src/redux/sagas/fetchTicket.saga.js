import axios from "axios"
import {takeLatest, put} from 'redux-saga/effects'

function* fetchTickets() { 
 
    try {
      const tickets = yield axios.get("/api/ticket");  //is this right or wrong?
      console.log("get all tickets:", tickets.data);
      yield put({
        type: "SET_TICKETS",
        payload: tickets.data,
      });
    } catch {
      console.log("get all error");
    }
  }


function* fetchTicket(){
    yield takeLatest ("FETCH_TICKETS", fetchTickets)
}

export default fetchTicket;