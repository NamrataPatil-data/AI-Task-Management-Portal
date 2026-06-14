import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const login = async () => {
      if (!email || !password) {
              alert("All fields are required");
              return;
          }

        try {

            const res = await API.post("/auth/login", {
                email,
                password
            });

            localStorage.setItem("token", res.data);

            navigate("/dashboard");

        } catch (err) {

            alert("Login Failed");
        }
    };

    return (

        <div className="auth-page">

            <div className="auth-card">

                <h1>🚀 AI Task Portal</h1>

                <h2>Login</h2>

                <input
                    type="email"
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

                <button onClick={login}>
                    Login
                </button>

                <p style={{ marginTop: "20px" }}>
                    Don't have an account?
                </p>

                <button
                    onClick={() => navigate("/register")}
                    style={{
                        backgroundColor: "#28a745"
                    }}
                >
                    Create Account
                </button>

            </div>

        </div>
    );
}

export default Login;