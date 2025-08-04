import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./Effect.css";

// const FormEffect = () => {
//   const navigate = useNavigate();
//   const userType = "user";
//   useEffect(() => {
//     if (userType !== "admin") {
//       navigate("/slider");
//     }
//   }, [navigate]);

//   return <p style={{ fontSize: "100px" }}>This is admin page.</p>;
// };

// export default FormEffect;





























// const FormEffect = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   console.log(name, email);

//   useEffect(() => {
//     console.log("Use effect is running!");
//   }, [name, email]);

//   const reset = (data) => {
//     if (data === "email") {
//       setEmail("");
//     } else {
//       setName("");
//     }
//   };

//   return (
//     <>
//       <button className="set-name" onClick={() =>
//         setName("Techspire")}>
//         Set Name
//       </button>
//       <button
//         className="set-email"
//         onClick={() =>
//           setEmail("techspire@gmail.com")}
//       >
//         Set Email
//       </button>
//       <button className="reset-name" onClick={() =>
//         reset("name")}>
//         Reset Name
//       </button>
//       <button className="reset-email" onClick={() =>
//         reset("email")}>
//         Reset Email
//       </button>
//     </>
//   );
// };

// export default FormEffect;




















const FormEffect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
    console.log("Form data saved to localStorage:", formData);
  }, [formData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="form-container">
      <h2>Save Form Data with useEffect</h2>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleChange}
        className="form-input"
      />
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
        className="form-input"
      />
      <p className="form-note">
        Form data is automatically saved to localStorage whenever you type.
      </p>
    </div>
  );
};

export default FormEffect;
