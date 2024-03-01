import { useState } from "react";
import imglogin from "../Images/imglogin.jpg";
import logo from "../Images/synswift.svg";
import "../css/style.css";


function Login() {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const handlelogin = async (e) => {
    e.preventDefault();
    localStorage.setItem(email, setEmail);
    console.log(email, password);


    try{
      let result = await fetch("http://localhost:2000/login", {
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: {
          "content-type": "application/json",
        },
      });
      result = await result.json();
      console.log('25---',result);
      localStorage.setItem("user", JSON.stringify(result));
      

    }catch(error) {
      console.log("login", error);
    }

  };

  return (
    <>
      <section
        className="vh-90"
        style={{ backgroundColor: "rgb(216 216 216)" }}
      >
        <div className="container py-5 h-80">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src={imglogin}
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      {/* <form> */}
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <div className="logo-img d-flex align-items-center">
                          <img
                            src={logo}
                            alt="login form"
                            className="img-fluid"
                            style={{ borderRadius: "1rem 0 0 1rem" }}
                          />
                        </div>
                      </div>

                      <div className="form-outline mb-4 mt-4">
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                          onClick={(e) => handlelogin(e)}
                        >
                          Login
                        </button>
                      </div>
                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      {/* </form> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
