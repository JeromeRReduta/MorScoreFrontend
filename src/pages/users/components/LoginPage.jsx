import { Link, useNavigate } from "react-router";
import useJwt from "../hooks/useJwt.js";

export default function LoginPage() {
    return (
        <section className="login">
            <LoginForm />
            <LinkToOther />
        </section>
    );
}

function LoginForm() {
    const { response, loginAsync } = useJwt();
    const navigateTo = useNavigate();

    async function handleLogin(formData) {
        await loginAsync({
            email: formData.get("email"),
            password: formData.get("password"),
        });
        if (response?.success) {
            navigateTo("/");
        }
    }

    let buttonMessage;
    if (!response) {
        buttonMessage = "Log In";
    } else if (!response.success) {
        buttonMessage = response.error.message;
    } else {
        buttonMessage = "Log In";
    }
    return (
        <div className="login-form">
            {response?.error && <div className="error-message">{response.error.message}</div>}

            <form action={handleLogin}>
                <label>
                    Email
                    <input
                        type="text"
                        name="email"
                        autoComplete="on"
                        required
                    />
                </label>

                <label>
                    Password
                    <input
                        type="password"
                        name="password"
                        autoComplete="on"
                        required
                    />
                </label>
                <button>{buttonMessage}</button>
            </form>
        </div>
    );
}

function LinkToOther() {
    return (
        <Link
            className="login-link-to-other"
            to="/users/register"
        >
            New? Register here.
        </Link>
    );
}
