import React from 'react'
import "./create-project.scss"

function CreateProject() {
    return (
        <div className="create-project-container d-flex flex-column text-center justify-content-between py-5 bg-white">
            <div className="row">
                <div className="col-md-12">
                    <h6>Yeni Proje Oluştur</h6>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                <button type="button" class="btn btn-dark">Oluştur</button>
                </div>
            </div>
        </div>
    )
}

export {CreateProject}
