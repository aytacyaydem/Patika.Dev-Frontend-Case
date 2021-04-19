import React from 'react'
import "./create-project.scss"
import {useHistory} from "react-router-dom"

function CreateProject({onCreate}) {
   let history = useHistory();
    function handleLogout(){
        localStorage.clear();
        history.replace("/login")
    }
    return (
        <div className="create-project-container d-flex flex-column text-center justify-content-center py-5 bg-white">
            <div className="row">
                <div className="col-md-12">
                    <h6>Yeni Proje Oluştur</h6>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 mb-5">
                <button type="button" className="btn btn-dark" onClick={onCreate}>Oluştur</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h6>Çıkış Yap</h6>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                <button type="button" className="btn btn-danger" onClick={handleLogout}>Çıkış Yap</button>
                </div>
            </div>
        </div>
    )
}

export {CreateProject}
