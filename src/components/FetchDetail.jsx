import React from "react";
import { useSelector } from "react-redux";
import "./FetchDetail.css";

function FetchDetail() {
  const ticketDetailReducer = useSelector((store) => store.ticketDetailReducer);

  return (
    <div className="all">
      {ticketDetailReducer &&
        ticketDetailReducer.map((item) => {
          return (
            <tr key={item.id}>
              <div>
                <h4 className="question">Tutorial Request: {item.question}</h4>
              </div>
              <div>
                <h4 className="department">Department: {item.department}</h4>
              </div>
            </tr>
          );
        })}
    </div>
  );
}

export default FetchDetail;
