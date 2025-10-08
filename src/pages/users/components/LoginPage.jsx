import { Link, useNavigate } from "react-router";
import useAuth from "../stores/JwtStore.jsx";

export default function LoginPage() {
  const { response, loginAsync } = useAuth();
  const navigateTo = useNavigate();
  const sendLogin = async (formData) => {
    loginAsync({
      email: formData.get("email"),
      password: formData.get("password"),
    });
    if (response?.hasSucceeded) {
      navigateTo("/books");
    }
  };
  console.log("response", response);
  const buttonMessage =
    response && !response.hasSucceeded ? response.error.message : "Log In";

  return (
    <>
      <form action={sendLogin}>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" autoComplete="on" required />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" autoComplete="on" required />

        <button>{buttonMessage}</button>
      </form>
      <div>
        New? <Link to="/account/register">Register here.</Link>
      </div>
    </>
  );
}
