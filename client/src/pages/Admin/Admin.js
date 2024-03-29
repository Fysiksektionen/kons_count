import React, { useState, useEffect } from "react";
import { Spinner } from 'react-bootstrap';
import { getLoggedIn } from "../../serverUtils/authentication";
import CounterPanel from "./CounterPanel";
import Login from "./Login";
import '../DivStyles.css';

function Admin() {
    const [loggedIn, setLoggedIn] = useState();

    useEffect(() => {
        getLoggedIn()
            .then(data => { setLoggedIn(data.loggedIn) })
            .catch(console.error);
    }, []);

    return (
        <div className="vh-100">
            {loggedIn !== undefined
                ? loggedIn
                    ? <CounterPanel />
                    : <Login setLoggedIn={setLoggedIn} />
                : <div className="page-center"><Spinner animation="border" variant="light" /></div>
            }
        </div>
    );
}
  
export default Admin;
