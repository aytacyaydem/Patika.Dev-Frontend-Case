import React,{useState} from 'react'
import "./login-layout.scss"


function LoginLayout({children}) {
    return (
        <div className="login-layout-main d-flex justify-content-cent}er align-items-center py-3">
            {children}  
         </div>
    )
}

export {LoginLayout}
