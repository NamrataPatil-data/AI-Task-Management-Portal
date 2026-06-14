import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const register = async () => {

      if (!name || !email || !password) {
              alert("All fields are required");
              return;
          }

        try {

            await API.post("/auth/register", {
                name,
                email,
                password
            });

            alert("Registration Successful");

            navigate("/");

        } catch (error) {

            alert("Registration Failed");
        }
    };

    return (

        <div className="auth-page">

            <div className="auth-card">

                <h1>🚀 AI Task Portal</h1>

                <h2>Create Account</h2>

                <input
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                />

                <br /><br />

                <input
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br /><br />

                <button onClick={register}>
                    Register
                </button>

                <p style={{ marginTop: "20px" }}>
                    Already have an account?
                </p>

                <button
                    onClick={() => navigate("/")}
                >
                    Back to Login
                </button>

            </div>

        </div>
    );
}

export default Register;