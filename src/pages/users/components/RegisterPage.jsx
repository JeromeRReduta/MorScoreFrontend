import { Link, useNavigate } from "react-router";
import JwtStore from "../stores/JwtStore";

export default function RegisterPage() {
  const { response, loading, registerAsync } = JwtStore();
  const navigateTo = useNavigate();
  const handleRegister = (formData) => {
    const response = registerAsync({
      // for some reason if I DON'T await it works properly
      email: formData.get("email"),
      password: formData.get("password"),
      name: formData.get("name"),
    });
    if (response?.success) {
      navigateTo("/");
    }
  };
  const buttonMessage = loading ? "Registering..." : "MY BONES";
  console.log("loading here is", loading);
  console.log("buttonMessage is", buttonMessage);

  return (
    <>
      <form action={(formData) => handleRegister(formData)}>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" autoComplete="on" required />

        <label htmlFor="name">Name</label>
        <input type="name" name="name" autoComplete="on" required />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" autoComplete="on" required />

        <button>{buttonMessage}</button>
      </form>
      {response?.error && (
        <div className="error-message">{response.error.message}</div>
      )}
      <div>
        Been here before? <Link to="/users/register">Login here.</Link>
      </div>
    </>
  );
}
