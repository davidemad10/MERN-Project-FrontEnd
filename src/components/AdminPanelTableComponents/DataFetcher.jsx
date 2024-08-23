async function Fetcher(activeTab) {
    const url = `http://localhost:5000/${activeTab}`;
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error("Something went wrong!");
        }
        const data = await res.json();
        return data.data[activeTab];
    } catch (error) {
        console.log("Error: ", error);
        return null;
    }
}

export default Fetcher;