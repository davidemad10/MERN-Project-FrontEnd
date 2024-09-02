async function Login(email, password, setJwt) {
  try {
    const response = await fetch(
      "https://goodreadfdm.vercel.app/admin/adminlogin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to log in. Please check your credentials.");
    }

    const data = await response.json();
    // console.log("From Login: ", data)
    localStorage.clear();
    localStorage.setItem("jwt", data.data.token);
    // console.log("jwt set into localSt. from Login")
    setJwt(data.data.token);
    // console.log("jwt state changed from Login to Admin")
  } catch (err) {
    alert("Email or Password is Wrong");
  }
}

export default Login;
