import { useState } from "react";
import "./Form.css";

// const Form = () => {
//   const [name, setName] = useState("");

//   const submitHandler = (event) => {
//     event.preventDefault();
//     alert(`Hello ${name}!`);
//   };

//   return (
//     <form className="custom-form" onSubmit={submitHandler}>
//       <label className="form-label">
//         Enter your name:
//         <input
//           type="text"
//           className="form-input"
//           value={name}
//           onChange={(event) => setName(event.target.value)}
//         />
//       </label>
//       <button className="form-button" type="submit">Submit</button>
//     </form>
//   );
// };

// export default Form;













// const Form = () => {
//   const [name, setName] = useState("");
//   const [error, setError] = useState(null);

//   const submitHandler = (event) => {
//     event.preventDefault();
//     if (name === "") {
//       setError("Name is required!");
//       return;
//     }
//     alert(`Hello ${name}!`);
//   };

//   return (
//     <form className="custom-form" onSubmit={submitHandler}>
//       <label className="form-label">
//         Enter your name:
//         <input
//           type="text"
//           className="form-input"
//           value={name}
//           onChange={(event) => setName(event.target.value)}
//         />
//       </label>
//       <button className="form-button" type="submit">
//         Submit
//       </button>
//       {error && <p className="error-msg">{error}</p>}
//     </form>
//   );
// };

// export default Form;















// Create a form with two input field email & password

// Both input fields are required

// Show error message when given empty

// Email field must only accept email

// Password should be greater than 6 letters

// Alert login successfull if all condition gets fulfilled









// const Form = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState([]);

//   const submitHandler = (event) => {
//     event.preventDefault();
//     const newErrors = [];

//     if (email === "") {
//       newErrors.push("Email is required!");
//     }

//     if (password === "") {
//       newErrors.push("Password is required!");
//     }

//     if (password.length > 0 && password.length < 6) {
//       newErrors.push("Password must be 6 characters long!");
//     }

//     if (newErrors.length > 0) {
//       setErrors(newErrors);
//       setTimeout(() => setErrors([]), 2000);
//       return;
//     }

//     alert("Login successful!");
//   };

//   return (
//     <form className="custom-form" onSubmit={submitHandler}>
//       <label className="form-label">
//         Enter your email:
//         <input
//           type="email"
//           className="form-input"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//         />
//       </label>
//       <label className="form-label">
//         Enter your password:
//         <input
//           type="password"
//           className="form-input"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//         />
//       </label>
//       <button className="form-button" type="submit">
//         Submit
//       </button>
//       {errors.length > 0 && errors.map((err) => 
//       <p className="error-msg" key={err}>{err}</p>)}
//     </form>
//   );
// };

// export default Form;











// To handle many input field at once
const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newErrors = [];

    if (!formData.email) newErrors.push("Email is required!");
    if (!formData.password) newErrors.push("Password is required!");
    if (!formData.username) newErrors.push("Username is required!");

    if (newErrors.length > 0) {
      setErrors(newErrors);
      setTimeout(() => setErrors([]), 5000);
      return;
    }

    alert("Form submitted successfully!");
    console.log("Submitted Data:", formData);
  };

  return (
    <form className="custom-form" onSubmit={submitHandler}>
      <label className="form-label">
        Email:
        <input
          type="email"
          name="email"
          className="form-input"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Password:
        <input
          type="password"
          name="password"
          className="form-input"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Username:
        <input
          type="text"
          name="username"
          className="form-input"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <button className="form-button" type="submit">
        Submit
      </button>
      {errors.map((err, idx) => (
        <p className="error-msg" key={idx}>
          {err}
        </p>
      ))}
    </form>
  );
};

export default Form;
