import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import './AddRequests.css';


function AddRequests() {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({
            type: 'FETCH_TICKETS'
        });
    }, []);



    let [question, setQuestion] = useState('')
    let [department, setDept] = useState('')
    let [priority, setPriority] = useState('')


    const postTicket = () => {  //Runs the data that are taken in form and delivers to index.js
        dispatch({
            type: 'POST_TICKET',
            payload: {
                question: question,
                department: department,
                priority: priority,

            }
        })
        history.push('/openrequests')
    }

    const handleQuestion = (event) => {  //Handling Input for Question
        console.log('handleQuestion');
        setQuestion(event.target.value)
    }
    const handleDept = (event) => {  //Handling Input for Title
        console.log('handleDept');
        setDept(event.target.value)
    }
    const handlePriority = (event) => {  //Handling Input for Title
        console.log('handlePriority');
        setPriority(event.target.value)
    }
    // const handleCancel =() =>{
    //     console.log('Cancel Btn'); //Cancel
    //     history.push('/')
    // }
    const handleBackBtn = () => {   //Sends user Back to (Main)
        history.push('/')
    }


    return (

        <div className="addRequests">
            <form name="frm" onSubmit={postTicket}>
                <h5>Tutorial Request</h5>
                <textarea rows='5' font-size='5px' className="question" onChange={handleQuestion} />
                <br />
                <h5>Department</h5>
                <select className="deptDropdown" placeholder="Departments" onChange={handleDept}>
                    <option value="0"></option>
                    <option value="Customer Service">Customer Service</option>
                    <option value="Management">Management</option>
                    <option value="Quality Assurance">Quality Assurance</option>
                    <option value="Finance">Finance</option>
                    <option value="Information Technology">Information Technology</option>
                </select>

                <br />
                <h5>Priority</h5>
                <select className="priorityDropdown" placeholder="" onChange={handlePriority}>
                    <option value="0"></option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <br />
                {/* <div>
                <Button variant="contained" color="primary" className="cancel" onClick={handleCancel} type= "submit">Cancel</Button>
                </div> */}
                <br />
                <br />
                
                <Button variant="contained" color="primary" className="add" type="submit">Add a Ticket</Button>
                {/* <button onClick={handleBackBtn}/> */}
            </form>
            <br />
            <Button variant="contained" color="primary" className="return" onClick={handleBackBtn}>Return to Home</Button>
            
        </div>
    );
}

export default AddRequests
