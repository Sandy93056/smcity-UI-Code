import React from 'react'

export default function Alerts(props) {
    return (
        <>
        {props.Alert &&
        <div style={{height:"25px"}} className="mt-2">
            <div className="container">
                <div className={`alert alert-${props.Alert.type} alert-dismissible fade show p-2`} role="alert">
                    <strong>{props.Alert.msg}</strong> 
                    {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
                </div>
            </div>
        </div>
         }
        </>
         

        // </div>

    )
}
