// import { useState } from "react";
// import "./Login.css";

// const Login = () => {
//     const [formData, setFormData] = useState({
//         user:"",
//         password:""
//     })

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setFormData((prevData) => ({
//           ...prevData,
//           [name]: value,
//         }));
//       };

//     return(
//         <form onSubmit={(e) => console.log(e.target.value)} className="login-wrapper">
//             <h1 className="admin-header">Admin Page</h1>
//             <div className="login-input-wrapper">
//                 <label htmlFor="login">Login</label>
//                 <input onChange={(e) => {handleInputChange(e)}} name="login" className="login-input" />
//                 <label htmlFor="password">Password</label>
//                 <input onChange={(e) => {handleInputChange(e)}} name="password" className="password-input" />
//                 <button className="sign-in-btn" type="submit">Sign In</button>
//             </div>
            
//         </form>
//     )
// }

// export default Login;

import { useState } from "react";
import "./Login.css";

const Login = () => {
  // State for form data
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    console.log("Form Submitted:", formData);
    // Perform authentication logic here
  };

  return (
    <form onSubmit={handleSubmit} className="login-wrapper">
      <h1 className="admin-header">Admin Page</h1>
      <div className="login-input-wrapper">
        <label htmlFor="user">Login</label>
        <input
          name="username"
          className="login-input"
          value={formData.user}
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          className="password-input"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button className="sign-in-btn" type="submit">
          Sign In
        </button>
      </div>
    </form>
  );
};

export default Login;
