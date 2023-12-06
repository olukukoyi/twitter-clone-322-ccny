import Cookies from "js-cookie";

export async function login(email, password) {
  const res = await fetch("http://localhost:8001/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // You might need additional headers (e.g., authentication tokens) based on the API requirements
    },
    credentials: "include",
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await res.json();

  console.log(data);
  Cookies.set("token", data.token);
  Cookies.set("userid", data.user.id);
  // console.log("cookies: ", Cookies.get("token"));
  return { good: "yes" };
}
