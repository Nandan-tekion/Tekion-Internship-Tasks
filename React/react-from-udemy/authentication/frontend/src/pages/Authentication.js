import AuthForm from "../components/AuthForm";
import { json, redirect } from "react-router-dom";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export const action = async ({ request }) => {
  const data = await request.formData();
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  console.log(authData, mode);

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Unsupported mode" }, { status: 422 });
  }

  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Could not Authenticate The User" }, { status: 500 });
  }

  const resData = await response.json();
  const token = resData.token;
  localStorage.setItem("token", token);
  const expirationDate = new Date();
  expirationDate.setHours(expirationDate.getHours() + 1);
  localStorage.setItem('expiration', expirationDate.toISOString());
  return redirect("/");
};
