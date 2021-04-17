import React, { useState } from "react";
import "./authorized-layout.scss"
import {useHistory} from "react-router-dom"

function AuthorizedLayout({children}) {
    const history = useHistory();
    const [user,setUser] = useState("")
    React.useEffect(() => {
        if(!localStorage.getItem("user")) {
            history.replace("/login");
        }
        setUser(localStorage.getItem("user"))
    },[])
    return (
        <div className="main">
            <div className="left-menu py-3 px-2">        
                    <div className="user-info-container col-md-12 px-0 d-flex align-items-center">
                        <div className="avatar-container mr-2">
                            <img src={`https://ui-avatars.com/api/?name=${user}&background=0D8ABC&color=fff&size=128`} alt="User Avatar"/>
                        </div>
                        <div className="name-container">
                            <h6 className="m-0">{user}</h6>
                        </div>
                    </div>
           
            </div>
            <div className="content py-3 px-2">
                <div className="container">
                    {children}
                </div>
            </div>
        </div>
    )
}

export { AuthorizedLayout };
