import React from 'react'
import { CreateProject } from '../Components/CreateProject'
import {Project} from "../Components/Project"
import "./main.scss"

function Main() {
    return (
        <div className="main-content">
            <div className=" project-list-container d-flex flex-wrap justify-content-center">
                <div className="col-md-3 px-0 mr-2 mb-3">
                <CreateProject />
                </div>
                {[0,1,2,3,4,5,].map(() => (
                    <div className="col-md-3 px-0 mr-2 mb-3">
                        <Project />
                    </div>
                ))}
                
            </div>
            
        </div>
    )
}

export {Main}
