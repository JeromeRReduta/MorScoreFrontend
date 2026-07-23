import { Link, useNavigate } from "react-router";
import useJwt from "../hooks/useJwt";

export default function RegisterPage() {
    return (
        <section className="register">
            <RegisterForm />
            <LinkToOther />
        </section>
    );
}

function RegisterForm() {
    const { response, registerAsync } = useJwt();
    const navigateTo = useNavigate();

    async function handleRegister(formData) {
        const response = await registerAsync({
            // for some reason if I DON'T await it works properly
            email: formData.get("email"),
            password: formData.get("password"),
            name: formData.get("name"),
        });
        if (response?.success) {
            navigateTo("/");
        }
    }

    let buttonMessage;
    if (!response) {
        buttonMessage = "Register";
    } else if (!response.success) {
        buttonMessage = response.error.message;
    } else {
        buttonMessage = "Register";
    }

    return (
        <div className="register-form">
            {response?.error && <div className="error-message">{response.error.message}</div>}
            <form action={handleRegister}>
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
                    Name
                    <input
                        type="name"
                        name="name"
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
            className="register-link-to-other"
            to="/users/login"
        >
            Been here before? Login here.
        </Link>
    );
}
