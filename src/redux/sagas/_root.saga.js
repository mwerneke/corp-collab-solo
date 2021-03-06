import { all } from "redux-saga/effects";
import fetchSaga from "./fetchVideo.saga";
import loginSaga from "./login.saga";
import ticketSaga from "./ticket.saga";
import registrationSaga from "./registration.saga";
import userSaga from "./user.saga";
import videoSaga from "./video.saga";
import fetchTicket from "./fetchTicket.saga";
import fetchDetail from "./ticketDetail.saga";
import searchSaga from "./search.saga";
import deleteTicket from "./delete.saga";
import deleteVideo from "./deleteVideo.saga";

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    videoSaga(),
    fetchTicket(),
    ticketSaga(),
    fetchSaga(),
    fetchDetail(),
    searchSaga(),
    deleteTicket(),
    deleteVideo(),
  ]);
}
