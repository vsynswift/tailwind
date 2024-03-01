import { useState } from "react";
import "../../css/style.css";

function LeaveApply() {
  const [startDate, setStartDate] = useState([]);
  const [endDate, setEndDate] = useState([]);
  const [days, setDays] = useState([]);
  const [typeOfLeave, setTypeOfLeave] = useState([]);

    

  const applyLeave = (e) => {
    e.preventDefault();
    localStorage.setItem(startDate, endDate);
    console.log(startDate, endDate,days, typeOfLeave);
  };

  return (
    <>
      <section
        className="vh-90"
        style={{ backgroundColor: "rgb(216 216 216)" }}
      >
        <div className="container py-5 h-80">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-6">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div>
                  {" "}
                  <h1>Leave Application</h1>
                </div>
                <div className="row g-0">
                  <div>
                    {" "}
                    <h3>Hello Users </h3>
                  </div>
                  <div className="col-md-12 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      {/* <form> */}

                      <div className="d-flex align-items-center form-outline mb-4 mt-4">
                        <label>Start Date</label>
                        <input
                          type="date"
                          className="form-control form-control-lg"
                          placeholder="Start Date"
                          value={startDate}
                          id="day1"
                          onChange={(e) => setStartDate(e.target.value)}
                        />
                      </div>

                      <div className="d-flex align-items-center form-outline mb-4">
                        <label>End Date</label>
                        <input
                          type="date"
                          className="form-control form-control-lg"
                          placeholder="End Date"
                          id="day2"
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                        />
                      </div>
                      <div className="d-flex align-items-center form-outline mb-4">
                        <label>No. of Days</label>
                        <input
                          className="form-control form-control-lg"
                          placeholder=""
                          id="day"
                          value={days}
                          onChange={(e) => setDays(e.target.value)}
                        />
                      </div>
                      <div className="d-flex align-items-center form-outline mb-4">
                        <label>Type Of Leave</label>
                        <select
                          type="Dropdown"
                          className="form-control form-control-lg"
                          placeholder="Type Of Leave"
                          id="day"
                          value={typeOfLeave}
                          onChange={(e) => setTypeOfLeave(e.target.value)}
                        >
                          <option value="Sick Leave">Sick Leave</option>
                          <option value="Earn Leave">Earn Leave</option>
                          <option value="Casual Leave">Casual Leave</option>
                        </select>
                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                          onClick={(e) => applyLeave(e)}
                        >
                          Apply Leave
                        </button>
                      </div>
                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                      </p>
                      <a href="#!" className="small text-muted">
                        Terms of use.
                      </a>
                      <a href="#!" className="small text-muted">
                        Privacy policy
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

export default LeaveApply;
