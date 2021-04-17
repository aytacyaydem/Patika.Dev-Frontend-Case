import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PatikaLogo from "../Assets/Images/patikaLogo.png";

function Login() {
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    name: "",
    surname: "",
    error: "",
  });
  React.useEffect(() => {
    if(localStorage.getItem("user")) {
      history.replace("/");
    }
  },[])
  function handleInput(event) {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  }
  function handleClick() {
    if (!credentials.name || !credentials.surname) {
      setCredentials({
        ...credentials,
        error: "Lütfen tüm alanları doldurunuz.",
      });
    } else {
      setCredentials({
        ...credentials,
        error: "",
      });
      localStorage.setItem("user",`${credentials.name} ${credentials.surname}`)
      history.replace("/");
    }
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-5">
          <div className="text-center">
            <Link to="/" className="logo  mx-auto col-md-12 px-0">
              <img src={PatikaLogo} alt="" className="login-logo mb-3" />
            </Link>
          </div>
          <div className="card">
            <div className="card-body p-4">
              <div className="text-center mb-4">
                <h4 className="text-uppercase mt-0">GİRİŞ YAP</h4>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="isimInput">Adınız</label>
                <input
                  className={`form-control ${
                    credentials.error && !credentials.name && "is-invalid"
                  } ${credentials.name && "is-valid"}`}
                  type="text"
                  id="isimInput"
                  name="name"
                  placeholder="Adınızı Giriniz"
                  value={credentials.name}
                  onChange={handleInput}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="surnameInput">Soyadınız</label>
                <input
                  className={`form-control ${
                    credentials.error && !credentials.surname && "is-invalid"
                  } ${credentials.surname && "is-valid"}`}
                  type="text"
                  id="surnameInput"
                  name="surname"
                  placeholder="Soyadınızı Giriniz"
                  value={credentials.surname}
                  onChange={handleInput}
                />
              </div>
              {credentials.error &&
                (!credentials.name || !credentials.surname) && (
                  <p className="text-center text-danger">{credentials.error}</p>
                )}

              <div className="form-group mb-0 text-center">
                <button
                  className="btn btn-dark btn-block"
                  onClick={handleClick}
                >
                  Giriş Yap
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Login };
