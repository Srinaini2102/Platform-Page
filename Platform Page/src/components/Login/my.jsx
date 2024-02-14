import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/login", {
                email,
                password
            });
            console.log(response);

            if (response.data.status === "exist") {
                console.log("HI");
                localStorage.setItem('accessToken', response.data.accessToken);
                history("/", { state: { id: email } });
                window.location.reload();
            } else if (response.data.status === "notexist") {
                alert("User has not signed up");
            }
        } catch (error) {
            alert("Wrong details or server error");
            console.error(error);
        }
    }

    return (
    <section className="log">
        <div className="login">
            <h3 className='heading-community'>Smart Village.GENAI</h3>
            <form onSubmit={submit}>
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="mb-5"/> <br />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" /> <br />
                <button type="submit" className="mt-7 ">Login</button>
            </form>
            <br />
            <p>If you don't have an account</p>
            
            <Link to="/signup" className="link">Signup</Link>
        </div>
    </section>
    );
}

export default Login;
