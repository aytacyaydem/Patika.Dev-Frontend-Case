import React, { useState } from "react";
import "./project.scss";
import { FaRegTimesCircle, FaCheck,FaRegCheckCircle } from "react-icons/fa";

function Project({
  onAdd,
  projectId,
  projectTodos,
  onUpdateName,
  onRemoveProject,
  onRemoveTodo,
  onToggleTodo,
  onCategoryChange,
  category
}) {
  const [todos, setTodos] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [todotitle, setToDoTitle] = useState("");
  function handleAdd() {
    onAdd(projectId, todotitle);
  }

  function handleCheck(projectId, todo) {
    onToggleTodo(projectId, todo);
  }

  function handleChangeProjectName(event) {
    setProjectName(event.target.value);
  }
  function handleName() {
    onUpdateName(projectId, projectName);
  }

  function handleRemoveProject(event) {
    event.preventDefault();
    onRemoveProject(projectId);
  }

  function handleRemoveTodo(projectId, todo) {
    onRemoveTodo(projectId, todo);
  }

  function handleCategoryChange(event){
    event.preventDefault();
    onCategoryChange(projectId,event.target.name);
  }

  React.useEffect(() => {
    setTodos(projectTodos);
  }, [projectTodos]);

  return (
    <div className={`project-container d-flex flex-column bg-white px-2 py-3 ${category}`}>
      <div className="row title-container">
        <div className="col-md-12">
          <div className="d-flex justify-content-between mb-2">
            <label htmlFor="project-title-input">Proje Başlığı</label>
            <div>
            
              <div class="btn-group dropright ml-2">
                <button
                  type="button"
                  className="btn btn-sm btn-dark dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Kategori
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item text-success" href="#" name="genel" onClick={handleCategoryChange}>
                   Genel
                  </a>
                  <a className="dropdown-item text-info" href="#" name="is" onClick={handleCategoryChange}>
                   İş
                  </a>
                  <a className="dropdown-item text-danger" href="#" name="kisisel" onClick={handleCategoryChange}>
                    Kişisel
                  </a>
                  <a className="dropdown-item text-warning" href="#" name="okul" onClick={handleCategoryChange}>
                    Okul
                  </a>
                </div>
              </div>
              
            </div>
          </div>
          <div className="d-flex">
            <input
              type="text"
              className={`form-control col-md-12 ${
                projectName && "filledInput"
              }`}
              id="project-title-input"
              aria-describedby="projectTitle"
              value={projectName}
              onChange={handleChangeProjectName}
              placeholder="Projenize Bir İsim Verin"
              name="title"
            />
            {/* <button
              type="button"
              className="btn btn-success col-md-2"
              onClick={handleName}
            >
              <FaCheck />
            </button> */}
          </div>
          <hr />
        </div>
      </div>
      <div className="row add-container">
        <div className="col-md-12 d-flex">
          <input
            type="text"
            className="form-control col-md-10"
            id="project-todo-input"
            onChange={(event) => setToDoTitle(event.target.value)}
            value={todotitle}
            aria-describedby="projectTitle"
            placeholder="Yeni Görev"
            name="title"
          />
          <button
            type="button"
            className="btn btn-dark col-md-2"
            onClick={handleAdd}
          >
            +
          </button>
        </div>
      </div>
      <div className="row todo-list-container mt-2 mb-5">
        <div className="col-md-12 d-flex">
          <ul className="list-group col-md-12 px-0">
            {todos.map((todo) => (
              <li
                className="list-group-item d-flex align-items-center justify-content-between"
                key={todo.id}
              >
                <div className="check-container px-2 d-flex align-items-center">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    checked={todo.checked}
                    onChange={(event) => handleCheck(projectId, todo)}
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    {todo.title}
                  </label>
                </div>
                <a onClick={() => handleRemoveTodo(projectId, todo)}>
                  <FaRegTimesCircle />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <a href="#" onClick={handleRemoveProject} className="removeBtn text-danger border-danger">Projeyi Sil
                {<FaRegTimesCircle />}
              </a>
              <a href="#" onClick={handleRemoveProject} className="saveBtn text-success border-success">Kaydet
                {<FaRegCheckCircle />}
              </a>
    </div>

  );
}

export { Project };
