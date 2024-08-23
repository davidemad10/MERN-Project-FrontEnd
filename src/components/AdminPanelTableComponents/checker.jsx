
async function checker() {
    const url = `http://localhost:5000/admin/checker`;
    try {
        const token = localStorage.getItem('jwt');
        if (!token) {
            return { valid: false, message: "No token" };
        }
            // console.log("token from checker: ",token)
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` // Use Bearer token if required
            }
        });

        if (res.ok) {
            const data = await res.json();
            return { valid: true, data };
        } else {
            const errorData = await res.json();
            return { valid: false, message: errorData.errorMessage };
        }
    } catch (err) {
        console.log("Error: ", err);
        return { valid: false, message: "Request failed" };
    }
}

export default checker;
