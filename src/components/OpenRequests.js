import React, { useEffect } from "react";
import "./Library.css";
import "./OpenRequests.css";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function OpenRequests() {
  const user = useSelector((store) => store.user);
  const ticketReducer = useSelector((store) => store.ticketReducer);
  console.log(
    "LOG OF ticketReducer in Open Requests",
    ticketReducer,
    typeof ticketReducer
  );
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch({
      type: "FETCH_TICKETS",
    });
  }, []);

  const seeTicket = (details) => {
    console.log("In See Ticket", details);
    dispatch({
      type: "TICKET_DETAIL",
      payload: details,
    });

    history.push("/addtolibrary");
  };

  const handleDelete = (event) => {
    console.log("ButtonClicked", event);
    // event.preventDefault();
    console.log("Selected Delete", ticketReducer.id);
    // let id=ticketReducer.id;

    dispatch({
      //**ADDED */
      type: "DELETE_OPENREQUEST",
      payload: event,
    });
  };

  return (
    <>
      <div className="container">
        <div className="opentickets">
          <h1>Open Tickets</h1>
        </div>
        <table id="customers">
          <tr>
            <th>Ticket Question</th>
            <th>Department</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>

          {ticketReducer &&
            ticketReducer.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.question}</td>
                  <td>{item.department}</td>
                  <td>{item.priority}</td>

                  <td>
                    <button
                      onClick={(event) => seeTicket(item.id)}
                      alt={item.question}
                      alt={item.department}
                      className="Btn"
                    >
                      Select
                    </button>
                  </td>
                  {user.auth_level === "ADMIN" ? (
                    <>
                      <td>
                        <button
                          onClick={(event) => handleDelete(item.id)}
                          className="Btn"
                        >
                          Delete
                        </button>
                      </td>
                    </>
                  ) : (
                    <></>
                  )}
                </tr>
              );
            })}
        </table>
      </div>
    </>
  );
}

export default OpenRequests;

//revising button click  original code <button className="Btn">Select</button>
//adding a handler to route to add to library

//onClick={event => seeTicket(item.id)} alt={item.question}
