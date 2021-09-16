import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* ticketDelete(action) {
  try {
    console.log("*****DELETEMIKEDELETMIKE", action);
    const detail = yield axios.delete(`/api/ticket/${action.payload}`); //is this right or wrong?
    console.log("get ticket Detail:", detail.data);
    yield put({
      type: "FETCH_TICKETS",
    });
  } catch {
    console.log("get ticketDetail error");
  }
}

function* deleteTicket() {
  yield takeLatest("DELETE_OPENREQUEST", ticketDelete);
}

export default deleteTicket;
