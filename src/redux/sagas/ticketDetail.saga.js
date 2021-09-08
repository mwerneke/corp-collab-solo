import axios from "axios"
import {takeLatest, put} from 'redux-saga/effects'

function* ticketDetail(action) { 
 
    try {
      const detail = yield axios.get(`/api/ticket/${action.payload}`);  //is this right or wrong?
      console.log("get ticket Detail:", detail.data);
      yield put({
        type: "SET_DETAIL",
        payload: detail.data,
      });
    } catch {
      console.log("get ticketDetail error");
    }
  }


function* fetchDetail(){
    yield takeLatest ("TICKET_DETAIL", ticketDetail)
}

export default fetchDetail;