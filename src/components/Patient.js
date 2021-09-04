import {useState} from 'react';


const Patient = () => {
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword , setConfirmPassword] = useState("");
   
        
      
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email,password,);
      };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
  <label>
  <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}/>
    password:
    <input  type="text" name="password" 
          value={password}
          onChange={(event) => setPassword(event.target.value)} />
    confirmPassword:
    <input  type="text" name="confirmPassword"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)} />
  </label>
  <input type="submit" value="Submit" />
</form>
        </div>
    )
}

export default Patient
