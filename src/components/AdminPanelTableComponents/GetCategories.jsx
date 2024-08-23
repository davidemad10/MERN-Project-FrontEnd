
async function fetchAndProcessCategories() {
    const url = `http://localhost:5000/categories`;
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        if (data.status === "Success") {
            return data.data.categories.map(category => category.categoryName);
        }
    } catch (err) {
        console.error("Error fetching categories: ", err);
        return [];
    }
}

export default fetchAndProcessCategories;
