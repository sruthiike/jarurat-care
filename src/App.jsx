import { useState } from "react";
import "./App.css";

function App() {
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (role === "patient") {
      setMessage(
        "Thank you for reaching out. Our volunteers will contact you shortly to provide healthcare support."
      );
    } else if (role === "volunteer") {
      setMessage(
        "Thank you for your willingness to help. Our team will connect you with patients who need support."
      );
    } else {
      setMessage("Please select whether you are a patient or volunteer.");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Jarurat Care – Healthcare Support</h1>
      <p className="subtitle">
        We are here to help patients and connect volunteers.
      </p>

      <form className="form" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input type="text" placeholder="Enter your name" />

        <label>Email Address</label>
        <input type="email" placeholder="Enter your email" />

        <label>You are registering as</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Select</option>
          <option value="patient">Patient (Need Help)</option>
          <option value="volunteer">Volunteer (Want to Help)</option>
        </select>

        <label>
          Describe your healthcare need or how you want to help
        </label>
        <textarea placeholder="Write here..."></textarea>

        <button type="submit">Submit</button>
      </form>

      {message && <p className="ai-message">{message}</p>}
    </div>
  );
}

export default App;
