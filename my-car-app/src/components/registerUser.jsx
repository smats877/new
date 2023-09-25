import React, { useState } from "react";
import Register from "./Register"; // Import your Register component

function ParentComponent() {
  // Define the registerUser function
  const registerUser = async (userData) => {
    try {
      // Your registration logic here, e.g., making an API request
      console.log("Registering user with data:", userData);

      // Assuming you're making an API request to register the user
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log("User registered successfully");
        // Handle success, e.g., redirect to login page
      } else {
        console.error("Registration failed");
        // Handle registration failure, e.g., show an error message
      }
    } catch (error) {
      console.error("An error occurred during registration:", error);
      // Handle other errors here
    }
  };

  return (
    <div>
      {/* Render your Register component and pass the registerUser function */}
      <Register registerUser={registerUser} />
    </div>
  );
}

export default ParentComponent;
