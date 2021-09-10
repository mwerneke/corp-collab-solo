import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* postTicket(action) {
  try {
    const response = yield axios.post("/api/ticket", action.payload); //server.js express route
    console.log("****", response.data);
    yield put({
      type: "FETCH_TICKETS",
    });
  } catch (error) {
    console.log("Post Ticket Error", error);
  }
}

function* ticketSaga() {
  yield takeLatest("POST_TICKET", postTicket);
}

export default ticketSaga;
