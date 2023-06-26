import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleClick(event) {
    event.preventDefault();

    // Check if email and password are empty
    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter both email and password.");
      return;
    }

    // Check email format using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Save the form data or perform any other actions here
    console.log("Form Data:", { email, password });

    // Reset the form
    setEmail("");
    setPassword("");
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  const containerStyles = {};

  const buttonStyles = {
    width: "150px",
    height: "40px",
  };

  const inputStyles = {
    marginTop: "50px",
  };

  const iconStyles = {};

  return (
    <>
      <div className="contreg" data-aos="zoom-in" data-aos-duration="1500">
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="//netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css"
          rel="stylesheet"
        />

        <div className="testbox" style={containerStyles}>
          <h1>LOGIN</h1>

          <form action="/">
            <hr />
            <hr />
            
            <label htmlFor="email" id="icon" style={iconStyles}>
              <i className="icon-envelope"></i>
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
              style={inputStyles}
            />
            
            <label htmlFor="password" id="icon" style={iconStyles}>
              <i className="icon-user"></i>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
              style={inputStyles}
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                onClick={handleClick}
                className="button"
                style={buttonStyles}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
