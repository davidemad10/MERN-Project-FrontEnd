
async function Login(email, password, setJwt) {
    try {
        const response = await fetch("http://localhost:5000/admin/adminlogin", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        if (!response.ok) {
            throw new Error('Failed to log in. Please check your credentials.');
        }

        const data = await response.json();
        localStorage.setItem('jwt', data.data.token)
        setJwt(data.data.token)
    } catch (err) {
        alert('Email or Password is Wrong')
    }
}

export default Login;