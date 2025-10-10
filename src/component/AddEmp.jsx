import React, { useContext, useState, } from "react";
import { listContext } from "../App";

const AddEmp = () => {
  const { employeeList, setEmployeeList } = useContext(listContext)

  const [formValue, setFormValue] = useState({
    EmployeeName: "",
    EmployeeId: "",
    Designation: "",
    Email: "",
    Education: "",
    Address: "",
    Salary: "",
    JoiningDate: "",
    Performance: "Normal",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log("name", name);
    //console.log("value",value)
    setFormValue({ ...formValue, [name]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployeeList([...employeeList, formValue]);
    setFormValue(
      {
    EmployeeName: "",
    EmployeeId: "",
    Designation: "",
    Email: "",
    Education: "",
    Address: "",
    Salary: "",
    JoiningDate: "",
    Performance: "Normal",
      }

    )
   
  };
  console.log('employee-list', employeeList);

  return (
    <div className="container-fluid">
      <div className="row  mt-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header ">
              <h4 className="m-0"> ADD EMPLOYEE </h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row row-gap-3">
                  <div className="col-3">
                    <label htmlFor="" className="font-size-13">
                      EMPLOYEE NAME
                    </label>
                    <input
                      type="text"
                      placeholder="EMPLOYEE NAME"
                      className="form-input"
                      name="EmployeeName"
                      value={formValue?.EmployeeName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-13">
                      EMPLOYEE ID
                    </label>
                    <input
                      type="text"
                      placeholder="EMPLOYEE ID"
                      className="form-input"
                      name="EmployeeId"
                      value={formValue?.EmployeeId}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-13">
                      DESIGNATION
                    </label>
                    <input
                      type="text"
                      placeholder="DESIGNATION"
                      className="form-input"
                      name="Designation"
                      value={formValue?.Designation}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-13">
                      EMAIL
                    </label>
                    <input
                      type="text"
                      placeholder="EMAIL"
                      className="form-input"
                      name="Email"
                      value={formValue?.Email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-13">
                      EDUCATION
                    </label>
                    <input
                      type="text"
                      placeholder="EDUCATION"
                      className="form-input"
                      name="Education"
                      value={formValue?.Education}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-13">
                      {" "}
                      ADDRESS
                    </label>
                    <input
                      type="text"
                      placeholder=" ADDRESS"
                      className="form-input"
                      name="Address"
                      value={formValue?.Address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-13">
                      SALARY
                    </label>
                    <input
                      type="text"
                      placeholder="SALARY"
                      className="form-input"
                      name="Salary"
                      value={formValue?.Salary}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-13">
                      JOINING DATE
                    </label>
                    <input
                      type="date"
                      placeholder="JOINING DATE"
                      className="form-input"
                      name="JoiningDate"
                      value={formValue?.JoiningDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="" className="font-size-13">
                      PERFORMANCE
                    </label>
                    <select className="form-input" name="Performance" onChange={handleChange} 
                    value={formValue?.Performance}>
                      <option value="Normal">Normal</option>
                      <option value="Avarage">Average</option>
                      <option value="Excellent">Excellent</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 d-flex justify-content-end">
                    <button className="btn btn-primary" type="submit">SUBMIT</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmp;
