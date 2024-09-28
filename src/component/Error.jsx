import React from "react";
import {useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function Error() {
    let errorData = useRouteError();
    return(
    <>
    <Link to="/" style={{fontSize:"35px", margin:"20px"}}>Back to Home</Link>
    <div className="error-container">
        <div>

            <h1 style={{fontSize:"90px"}}>{errorData.status}</h1>
            <h1 style={{fontSize: "80px"}}>{errorData.statusText}</h1>
            <div style={{fontSize: "60px"}}>Oops! The Page You Are Looking For Is Not Found </div>
            
        </div>
    </div>
    </>
    )
}

export default Error;