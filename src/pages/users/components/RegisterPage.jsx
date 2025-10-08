import { Link, useNavigate } from "react-router";
import JwtStore from "../stores/JwtStore";

export default function RegisterPage() {
  const { response, registerAsync } = JwtStore();
  const navigateTo = useNavigate();
  const handleRegister = async (formData) => {
    console.log(
      "formData:",
      formData.get("email"),
      formData.get("password"),
      formData.get("name")
    );
    const response = await registerAsync({
      // for some reason if I DON'T await it works properly
      email: formData.get("email"),
      password: formData.get("password"),
      name: formData.get("name"),
    });
    if (response?.success) {
      navigateTo("/");
    }
  };

  return (
    <>
      <form action={handleRegister}>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" autoComplete="on" required />

        <label htmlFor="name">Name</label>
        <input type="name" name="name" autoComplete="on" required />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" autoComplete="on" required />

        <button>Register</button>
      </form>
      {response?.error && (
        <div className="error-message">{response.error.message}</div>
      )}
      <div>
        Been here before? <Link to="/users/login">Login here.</Link>
      </div>
    </>
  );
}
