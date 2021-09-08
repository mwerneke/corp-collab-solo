import React, { useEffect } from 'react'
import './Library.css'
import './OpenRequests.css';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


function OpenRequests() {

    const ticketReducer = useSelector((store) => store.ticketReducer);
    console.log('LOG OF ticketReducer in Open Requests', ticketReducer, typeof ticketReducer)
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({
            type: 'FETCH_TICKETS'
        });
    }, []);

    // const seeTicket = (details) => {
    //     console.log('In See Ticket', details);
    //     dispatch({
    //         type: 'FETCH_TICKETS',
    //         payload: details
    //     })

    //     history.push('/addtolibrary')
    // }




    return (
        <>
        <div className="container">
            <table id="customers">


                <tr>
                    <th>Ticket Question</th>
                    <th>Department</th>
                    <th>Priority</th>
                    <th>Select</th>
                </tr>

                {ticketReducer && ticketReducer.map(item => {
                    return (
                            <tr key= {item.id}>
                                <td>{item.question}</td>
                                <td>{item.department}</td>
                                <td>{item.priority}</td>
                                <button className="Btn" >Select</button>
                            </tr>

                    );
                })}

            </table>
            </div>
        </>
    )
}


export default OpenRequests

//revising button click  original code <button className="Btn">Select</button>
//adding a handler to route to add to library

//onClick={event => seeTicket(item.id)} alt={item.question}