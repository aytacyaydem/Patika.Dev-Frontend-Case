import React, { useState } from 'react'
import { CreateProject } from '../Components/CreateProject'
import {Project} from "../Components/Project"
import "./main.scss"

function Main() {
    const [projects,setProjects] = useState([])
    function handleCreateProject(){
        setProjects([...projects,{id:projects.length+1,projectName:"",todos:[]}])
    }
    function handleAddTodo(id,title){
        setProjects(prev => {
            let arr = prev.map(project => {
                if(id === project.id) {
                    project.todos.push({id:project.todos.length+1,title:title,checked:false})
                   
                }
                return project
            })
            return arr;  
        })
      }
      function handleChangeProjectName(id,name){
        let arr = projects.map(project => {
            if(project.id === id) {
                project.projectName = name;
            }
            return project;
        }
        )
        setProjects(arr);
      }
    
    return (
        <div className="main-content">
            <div className=" project-list-container d-flex flex-wrap">
                <div className="col-md-3 px-0 mr-2 mb-3">
                <CreateProject onCreate={handleCreateProject}/>
                </div>
                {console.log("Projeler",projects)}
                {projects.map((project) => (
                    <div className="col-md-3 px-0 mr-2 mb-3" key={project.id}>
                        <Project onAdd={handleAddTodo} projectId={project.id} projectTodos={project.todos} onUpdateName={handleChangeProjectName}/>
                    </div>
                ))}
                
            </div>
            
        </div>
    )
}

export {Main}
