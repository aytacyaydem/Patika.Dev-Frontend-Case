import React, { useState,useContext } from "react";
import {FilterContext} from "../Context/FilterContext"
import "./authorized-layout.scss";
import { useHistory } from "react-router-dom";

function AuthorizedLayout({ children }) {
  const history = useHistory();
  const [user, setUser] = useState("");
  const [selectedCategory,setSelectedCategory] = useState({
      genel:false,
      is:false,
      kisisel:false,
      okul:false
  });

  function handleSelectedCategory(event){
    setSelectedCategory({
        ...selectedCategory,
        [event.target.name]:event.target.checked
    })
  }
  React.useEffect(() => {
    if (!localStorage.getItem("user")) {
      history.replace("/login");
    }
    setUser(localStorage.getItem("user"));
  }, []);
  return (
    <div className="main">
      <div className="left-menu py-3 px-2">
        <div className="user-info-container col-md-12 px-0 d-flex align-items-center">
          <div className="avatar-container mr-2">
            <img
              src={`https://ui-avatars.com/api/?name=${user}&background=0D8ABC&color=fff&size=128`}
              alt="User Avatar"
            />
          </div>
          <div className="name-container">
            <h6 className="m-0">{user}</h6>
          </div>
        </div>
        <div className="filter-projects mt-5">
          <h6>Görüntülenenleri Filtrele</h6>
          <div className="filter-form p-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                onChange={handleSelectedCategory}
                value=""
                name="genel"
                id="defaultCheck1"
              />
              <label className="form-check-label" htmlFor="defaultCheck1">
                Genel
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                onChange={handleSelectedCategory}
                name="is"
                value=""
                id="defaultCheck2"
              />
              <label className="form-check-label" htmlFor="defaultCheck1">
                İş
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                onChange={handleSelectedCategory}
                name="kisisel"
                value=""
                id="defaultCheck3"
              />
              <label className="form-check-label" htmlFor="defaultCheck1">
                Kişisel
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                onChange={handleSelectedCategory}
                name="okul"
                value=""
                id="defaultCheck4"
              />
              <label className="form-check-label" htmlFor="defaultCheck1">
                Okul
              </label>
            </div>
            
          </div>
        </div>
      </div>
      <div className="content py-3 px-2">
        <div className="container">
        <FilterContext.Provider value={selectedCategory}>
            {children}
        </FilterContext.Provider>
            </div>
      </div>
    </div>
  );
}

export { AuthorizedLayout };
