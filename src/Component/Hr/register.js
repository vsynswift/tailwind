import { useEffect, useState } from "react";
import "../../css/style.css";

function Register() {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [profile, setProfile] = useState([]);
  const [gender, setGender] = useState("");
  const [sickLeave, setSickLeave] = useState([]);
  const [casualLeave, setCasualLeave] = useState([]);
  const [earnLeave, setEarnLeave] = useState([]);
  const [status, setStatus] = useState("");
  const [maternityleave, setMaternityleave] = useState("");
  const [managerAssign, setManagerAssign] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const [isMaternityleave, setIsMaternityleave] = useState(false);

  const collectData = async (e) => {
    e.preventDefault();
    console.log(
      name,
      email,
      profile,
      password,
      gender,
      sickLeave,
      casualLeave,
      earnLeave,
      status,
      maternityleave,
      managerAssign,
      joiningDate,
      birthDate
    );
    try {
      let result = await fetch("http://localhost:2000/register", {
        method: "Post",
        body: JSON.stringify({
          name,
          email,
          profile,
          password,
          gender,
          sickLeave,
          casualLeave,
          earnLeave,
          status,
          maternityleave,
          joiningDate,
          birthDate,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
      result = await result.json();
      console.log(result);
      localStorage.setItem("user", JSON.stringify(result));
    } catch (error) {
      console.log("dddddd", error);
    }
  };


  useEffect(() => {
    if (status && gender) {
      if (status === "married" && gender === "female") {
        setIsMaternityleave(true);
        setMaternityleave("60");
      } else if (status === "married" && gender === "male") {
        setMaternityleave("14");
        setIsMaternityleave(true);
      } else {
        setIsMaternityleave(false);
        setMaternityleave("");
      }
    } else {
      setIsMaternityleave(false);
      setMaternityleave("");
    }
  }, [status, gender]);
  //   useEffect(()=>{
  //     console.log('gender',gender)
  //   },[status,gender])

  return (
    <>
      <section
        className="vh-90"
        style={{ backgroundColor: "rgb(216 216 216)" }}
      >
        <div className="container py-5 h-80">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-12">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row align-item-center">
                  <div className="align-items-center mt-3 pb-1">
                    <h1>Register Employee</h1>
                  </div>
                  <div className="col-md-12 col-lg-12 d-flex align-items-center">
                    <div className="col-lg-6 card-body p-4 p-lg-9 text-black">
                      {/* <form> */}
                      <div className="d-flex align-items-center mb-3 pb-1"></div>
                      <div className="form-outline mb-4 mt-4">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Employee Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
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
                      <div className="form-outline mb-4 mt-4">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Designation- Hr , Manager, Developer, Trainee "
                          value={profile}
                          onChange={(e) => setProfile(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4 mt-4">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Manager Assign"
                          value={managerAssign}
                          onChange={(e) => setManagerAssign(e.target.value)}
                        />
                      </div>
                      <div className="d-flex form-outline mb-4">
                        <label>Date of Joining</label>
                        <input
                          type="Date"
                          className="form-control form-control-lg"
                          placeholder="Date of Joining"
                          value={joiningDate}
                          onChange={(e) => setJoiningDate(e.target.value)}
                        />
                      </div>
                      {/* <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                          onClick={(e) => collectData(e)}
                        >
                          Register
                        </button>
                      </div> */}

                      {/* </form> */}
                    </div>

                    <div className="card-body p-4 p-lg-5 text-black">
                      {/* <form> */}
                      <div className="d-flex form-outline mb-4">
                        <label>Date of Birth</label>
                        <input
                          type="Date"
                          className="form-control form-control-lg"
                          placeholder="Date of Birth"
                          value={birthDate}
                          onChange={(e) => setBirthDate(e.target.value)}
                        />
                      </div>
                      <div className="d-flex form-outline mb-4">
                        <label>Gender</label>
                        <input
                          type="radio"
                          name="Gender"
                          value="male"
                          onChange={(e) => setGender(e.target.value)}
                        />
                        <label htmlFor="Gender">Male</label>
                        <input
                          type="radio"
                          name="Gender"
                          value="female"
                          onChange={(e) => setGender(e.target.value)}
                        />
                        <label htmlFor="Gender">Female</label>
                      </div>
                      <div className="d-flex form-outline mb-4">
                        <label>Status</label>
                        <input
                          type="radio"
                          name="Status"
                          value="married"
                          onChange={(e) => setStatus(e.target.value)}
                        />
                        <label htmlFor="Status">Married</label>

                        <input
                          type="radio"
                          name="Status"
                          value="unmarried"
                          onChange={(e) => setStatus(e.target.value)}
                        />
                        <label htmlFor="Status">Unmarried</label>
                      </div>

                      <div className="d-flex form-outline mb-4 width">
                        <lavel>Total Sick Leave</lavel>
                        <input
                          type="Text"
                          className="form-control form-control-lg"
                          placeholder=""
                          value={sickLeave}
                          onChange={(e) => setSickLeave(e.target.value)}
                        />
                      </div>
                      <div className="d-flex form-outline mb-4 width">
                        <lavel>Total Casual Leave</lavel>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder=""
                          value={casualLeave}
                          onChange={(e) => setCasualLeave(e.target.value)}
                        />
                      </div>
                      <div className="d-flex form-outline mb-4 width">
                        <lavel>Total Earn Leave</lavel>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder=""
                          value={earnLeave}
                          onChange={(e) => setEarnLeave(e.target.value)}
                        />
                      </div>
                      {isMaternityleave ? (
                        <div className="d-flex form-outline mb-4 width">
                          <lavel>Maternity leave</lavel>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder=""
                            value={maternityleave}
                            onChange={(e) => setMaternityleave(e.target.value)}
                          />
                        </div>
                      ) : (
                        ""
                      )}

                      {/* </form> */}
                    </div>
                  </div>
                </div>
                <div className="pt-1 mb-4">
                  <button
                    className="btn btn-dark btn-lg btn-block"
                    type="button"
                    onClick={(e) => collectData(e)}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
