import React,{useState} from "react";
import "./project.scss";
import { FaRegTimesCircle,FaCheck } from "react-icons/fa";

function Project() {
  const [todos, setTodos] = useState([]);
  const [projectName,setProjectName] = useState("");
  const [todotitle,setToDoTitle] = useState("")
  function handleAdd(){
    setTodos([
        ...todos,
        {id:todos.length+1,title:todotitle,checked:false}
    ])
    setToDoTitle("");
  }

  function handleRemove(todo) {
      let arr = todos.filter(item => item.id !== todo.id)
      setTodos(arr)
  }
  function handleCheck(event,todo) {
        console.log(todos);
        if(event.target.checked) {
            let arr = todos.map((item) => {
                if(item.id === todo.id) {
                    item.checked = true;
                }
                return item
            })
            setTodos(arr)
        }else {
          let arr = todos.map((item) => {
              if(item.id === todo.id) {
                  item.checked = false;
              }
              return item
          })
          setTodos(arr)
        }
  }

  function handleBlur (){
   
  }

  function handleChangeProjectName(event){
    setProjectName(event.target.value);
  }
  return (
    <div className="project-container d-flex flex-column bg-white px-2 py-3">
      <div className="row title-container">
        <div className="col-md-12">
          <label for="project-title-input">Proje Başlığı</label>
          <div className="d-flex">
          <input
            type="text"
            class="form-control col-md-10"
            id="project-title-input"
            aria-describedby="projectTitle"
            value={projectName}
            onChange={handleChangeProjectName}
            onBlur={handleBlur}
            placeholder="Projenize Bir İsim Verin"
            name="title"
           
          />
           <button type="button" class="btn btn-success col-md-2" >
           <FaCheck />
          </button>
          </div>
          <hr />
        </div>
      </div>
      <div className="row add-container">
        <div className="col-md-12 d-flex">
          <input
            type="text"
            class="form-control col-md-10"
            id="project-title-input"
            onChange={event => setToDoTitle(event.target.value)}
            value={todotitle}
            aria-describedby="projectTitle"
            placeholder="Yeni Görev"
            name="title"
          />
          <button type="button" class="btn btn-dark col-md-2" onClick={handleAdd}>
            +
          </button>
        </div>
      </div>
      <div className="row todo-list-container mt-2">
        <div className="col-md-12 d-flex">
          <ul class="list-group col-md-12 px-0">
              {todos.map((todo) => (
                <li class="list-group-item d-flex align-items-center justify-content-between">
              <div class="check-container px-2 d-flex align-items-center">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                  checked={todo.checked}
                  onChange={(event) => handleCheck(event,todo)}
                />
                <label class="form-check-label" for="exampleCheck1">
                  {todo.title}
                </label>
              </div>
              <a onClick={() => handleRemove(todo)}>
                  <FaRegTimesCircle />
              </a>
            </li>
              ))}
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export { Project };
