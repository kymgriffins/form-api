import { useEffect, useState } from "react";
import axios from "axios";
const DataFetcher = () => {
    /* const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const[ department, setDepartment ] = useState();
    const[email, setEmail] = useState();
    const[employeePayroll, setEmployeePayroll] = useState();
    const[phone, setPhone] = useState(); */
    const [accountCreation, setAccountCreation] = useState(
      { firstName: '',lastName: '', department: '', email: '', employeePayroll:'',phone:''}
  );
  const handleChange = (event) => {
    setAccountCreation({...accountCreation, [event.target.name]: event.target.value})
}
const handleSubmit = (e) => {
  e.preventDefault()
  axios.post('https://dev-kuza-backend.herokuapp.com/user-management/create-new-account/', accountCreation)
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    })}

  
    return (
        <>
        <div>
            <form onSubmit={handleSubmit
            }>
                <div className="form-group">
                  <label for="firstname">First Name</label>
                  <input type="text" value={accountCreation.firstName}
                  onChange={handleChange}  name='first_name'

          
                    className="form-control" placeholder="First Name"/>
        
                </div>
                <div className="form-group">
                  <label for="lastname">Last Name</label>
                  <input type="text" value={accountCreation.lastName}
                  onChange={handleChange}
                    className="form-control" name="last_name" id="" placeholder="Last Name"/>
        
                </div>
                <div className="form-group">
                  <label for="department">Department</label>
                  <input type="text" value={accountCreation.department}
                  onChange={handleChange}
                    className="form-control" name="department" id="" placeholder="Department"/>
        
                </div>
                <div className="form-group">
                  <label for="email">Email</label>
                  <input type="email" value={accountCreation.email}
                  onChange={handleChange}
                    className="form-control" name="email" id="" placeholder="Email"/>
        
                </div>
                <div className="form-group">
                  <label for="employerpayroll">employerpayroll</label>
                  <input type="text" value={accountCreation.employeePayroll}
                  onChange={handleChange}
                    className="form-control" name="employeePayroll" id="employeePayroll" placeholder="employerpayroll"/>
        
                </div>
                <div className="form-group">
                  <label for="phone">phone number</label>
                  <input type="text"  value={accountCreation.phone}
                  onChange={handleChange}
                    className="form-control" name="phone" id="" placeholder="phone"/>
        
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        </>
    )
}

export default DataFetcher
