import React, { useState,useContext} from "react";
import {FilterContext} from "../Context/FilterContext"
import { CreateProject } from "../Components/CreateProject";
import { Project } from "../Components/Project";
import "./main.scss";

function Main() {
  const [projects, setProjects] = useState([]);
  const selectedCategory = useContext(FilterContext)
  const [projectsToShow,setProjectsToShow] = useState([])
  const [selectedCategories,setSelectedCategories] = useState([])
  function handleCreateProject() {
    setProjects([
      ...projects,
      { id: Math.floor(Math.random() * 99999), projectName: "", todos: [],category:"genel"},
    ]);
  }
  function handleAddTodo(id, title) {
    let modified = projects.map((project) => {
      if (project.id === id) {
        project.todos = [
          ...project.todos,
          {
            id: Math.floor(Math.random() * 99999),
            title: title,
            checked: false,
          },
        ];
      }
      return project;
    });
    setProjects(modified);
  }
  function handleRemoveProject(id) {
    let filtered = projects.filter((project) => project.id !== id);
    setProjects(filtered);
  }
  function handleChangeProjectName(id, name) {
    let arr = projects.map((project) => {
      if (project.id === id) {
        project.projectName = name;
      }
      return project;
    });
    setProjects(arr);
  }
  function handleRemoveTodo(projectId, todo) {
    let filtered = projects.map((project) => {
      if (project.id === projectId) {
        let filtered = project.todos.filter((item) => item.id !== todo.id);
        project.todos = filtered;
        return project;
      }
      return project;
    });
    setProjects(filtered);
  }
  function handleToggleCheck(projectId,todo){
    console.log("Project ID",projectId)
    console.log("Todo:",todo)
    let checked = projects.map(project => {
        if(projectId === project.id) {
            let newTodos = project.todos.map(element => {
                if(element.id === todo.id){
                    element.checked = !element.checked
                    return element
                }
                return element
            })
            project.todos = newTodos
            return project
        }
        return project
    })
    setProjects(checked);
  }
  function handleProjectCategory(projectId,category) {
      let updated = projects.map(project => {
          if(project.id === projectId) {
              project.category = category
              return project
          }
          return project
      })
      setProjects(updated);
  }
  function handleFilterProjects(){
    //   console.log("Seçilenler",selectedCategories)
     
  }
  React.useEffect(() => {
    handleFilterProjects();
    setProjectsToShow(projects);
  }, [projects])


  React.useEffect(() => {
    handleFilterProjects();
    setProjectsToShow(projects);
  },[])
  
  React.useEffect(() => {
    let arr = []
    handleFilterProjects();
    for(let category in selectedCategory){
        console.log(selectedCategory[category])
        if(selectedCategory[category]) {
            arr.push(category)
            setSelectedCategories(arr);
        }else {
            let index = selectedCategories.findIndex(element => category === element)
            if(index > -1) {
                let filtered = selectedCategories.filter((eleman,elemanIndex) => elemanIndex !== index);
                // setSelectedCategories(prev => {
                //     prev.splice(index,1)
                //     return prev
                // });
                setSelectedCategories(filtered);
            }
        }
    }
  }, [selectedCategory])

  React.useEffect(() => { 
      if(selectedCategories.length === 0){
          setProjectsToShow(projects);
      }else {
        let filtered = projects.filter(project => {
            if(selectedCategories.includes(project.category)) {
                return true
            }else {
                return false
            }
        })
        setProjectsToShow(filtered)
      }
      
     
      console.log("Selected Categories:",selectedCategories);
  },[selectedCategories])
  

  return (
    <div className="main-content">
      <div className=" project-list-container d-flex flex-wrap">
        <div className="col-md-3 px-0 mr-2 mb-3">
          <CreateProject onCreate={handleCreateProject} />
        </div>
        
        {projectsToShow.map((project) => (
          <div className="col-md-3 px-0 mr-2 mb-3" key={project.id}>
            <Project
              onAdd={handleAddTodo}
              projectId={project.id}
              projectTodos={project.todos}
              onUpdateName={handleChangeProjectName}
              onRemoveProject={handleRemoveProject}
              onRemoveTodo={handleRemoveTodo}
              onToggleTodo={handleToggleCheck}
              onCategoryChange={handleProjectCategory}
              category={project.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export { Main };
