import React, { useState } from "react";
import { CreateProject } from "../Components/CreateProject";
import { Project } from "../Components/Project";
import "./main.scss";

function Main() {
  const [projects, setProjects] = useState([]);
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
          if(project.id == projectId) {
              project.category = category
              return project
          }
          return project
      })
      setProjects(updated);
  }
  React.useEffect(() => {
    console.log("Projects güncellendi");
  }, [projects]);

  return (
    <div className="main-content">
      <div className=" project-list-container d-flex flex-wrap">
        <div className="col-md-3 px-0 mr-2 mb-3">
          <CreateProject onCreate={handleCreateProject} />
        </div>
        {console.log("Projeler", projects)}
        {projects.map((project) => (
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
