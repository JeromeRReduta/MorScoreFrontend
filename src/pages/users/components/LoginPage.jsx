import { Link, useNavigate } from "react-router";
import useJwt from "../stores/JwtStore";

export default function LoginPage() {
  const { response, loginAsync } = useJwt();
  const navigateTo = useNavigate();
  const handleLogin = async (formData) => {
    await loginAsync({
      email: formData.get("email"),
      password: formData.get("password"),
    });
    if (response?.success) {
      navigateTo("/");
    }
  };

  let buttonMessage;

  if (!response) {
    buttonMessage = "Log In";
  } else if (!response.success) {
    buttonMessage = response.error.message;
  } else {
    buttonMessage = "Log In";
  }
  return (
    <>
      <form action={handleLogin}>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" autoComplete="on" required />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" autoComplete="on" required />

        <button>{buttonMessage}</button>
      </form>
      {response?.error && (
        <div className="error-message">{response.error.message}</div>
      )}
      <div>
        New? <Link to="/users/register">Register here.</Link>
      </div>
    </>
  );
}
