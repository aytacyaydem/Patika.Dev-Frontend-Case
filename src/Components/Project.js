import React, { useState } from "react";
import "./project.scss";
import { FaRegTimesCircle, FaEdit, FaRegCheckCircle } from "react-icons/fa";
import { useSpring, animated } from "react-spring";

function Project({
  onAdd,
  projectId,
  projectTodos,
  onUpdateName,
  onRemoveProject,
  onRemoveTodo,
  onToggleTodo,
  onCategoryChange,
  category,
  onSaveProject,
  saved,
  existName,
  onUnsaveProject,
}) {
  const [todos, setTodos] = useState([]);
  const [projectName, setProjectName] = useState(existName);
  const [todotitle, setToDoTitle] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);
  const props = useSpring({
    y: 0,
    x: 0,
    from: { y: -100, x: -100 },
  });

  function handleAdd() {
    onAdd(projectId, todotitle);
  }

  function handleCheck(projectId, todo) {
    onToggleTodo(projectId, todo);
  }

  function handleChangeProjectName(event) {
    setProjectName(event.target.value);
  }

  function handleRemoveProject(event) {
    event.preventDefault();
    onRemoveProject(projectId);
  }

  function handleRemoveTodo(projectId, todo) {
    onRemoveTodo(projectId, todo);
  }

  function handleCategoryChange(event) {
    event.preventDefault();
    onCategoryChange(projectId, event.target.name);
  }

  function handleSaveProject() {
    onUpdateName(projectId, projectName);
    onSaveProject(projectId);
    // handleName();
  }
  function handleUnsaveProject() {
    onUnsaveProject(projectId);
  }

  React.useEffect(() => {
    setTodos(projectTodos);
  }, [projectTodos]);

  return (
    <animated.div
      style={props}
      className={`project-container d-flex flex-column bg-white px-2 py-3 ${category}`}
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      {showOverlay && saved && (
        <div className="overlay d-flex justify-content-center align-items-center">
          <button
            href="#"
            onClick={handleUnsaveProject}
            className="btn btn-dark text-white border-success ml-2 d-flex justify-content-center align-items-center text-center py-2 px -2"
          >
            {<FaEdit className="ml-1" />}
          </button>
        </div>
      )}
      <div className="row title-container">
        <div className="col-md-12">
          <div className="d-flex justify-content-between mb-2">
            <label htmlFor="project-title-input">Proje Başlığı</label>
            <div>
              <div className="btn-group dropright ml-2">
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
                  <a
                    className="dropdown-item text-success"
                    href="#"
                    name="genel"
                    onClick={handleCategoryChange}
                  >
                    Genel
                  </a>
                  <a
                    className="dropdown-item text-info"
                    href="#"
                    name="is"
                    onClick={handleCategoryChange}
                  >
                    İş
                  </a>
                  <a
                    className="dropdown-item text-danger"
                    href="#"
                    name="kisisel"
                    onClick={handleCategoryChange}
                  >
                    Kişisel
                  </a>
                  <a
                    className="dropdown-item text-warning"
                    href="#"
                    name="okul"
                    onClick={handleCategoryChange}
                  >
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
              readOnly={saved}
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
      {!saved && (
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
      )}

      <div className="row todo-list-container mb-5 mt-2">
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
                {!saved && (
                  <a onClick={() => handleRemoveTodo(projectId, todo)}>
                    <FaRegTimesCircle />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row footer-buttons flex-fill justify-content-end align-items-end">
        <div className="col-md-12 d-flex justify-content-end">
          {!saved && (
            <button
              href="#"
              onClick={handleRemoveProject}
              className="removeBtn btn btn-outline text-danger border-danger"
            >
              Kaldır
              {<FaRegTimesCircle />}
            </button>
          )}
          {!saved && (
            <button
              href="#"
              onClick={handleSaveProject}
              disabled={todos.length < 1 || !projectName}
              className="saveBtn btn btn-outline text-success border-success ml-2"
            >
              Kaydet
              {<FaRegCheckCircle />}
            </button>
          )}
        </div>
      </div>
    </animated.div>
  );
}

export { Project };
