
// async function checker() {
//     const url = `http://localhost:5000/admin/checker`
//     try {
//         const res = await fetch(url,
//             {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "authorization": localStorage.getItem('jwt')
//                 }
//             }

//         )
//         if (res.status === 201) {
//             const data = await res.json()
//             return data
//         }
//     }
//     catch (err) {
//         console.log("Error: ", err)
//     }
// }

// export default checker;
async function checker() {
    const url = `http://localhost:5000/admin/checker`;
    try {
        const token = localStorage.getItem('jwt');
        if (!token) {
            return { valid: false, message: "No token" };
        }

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
