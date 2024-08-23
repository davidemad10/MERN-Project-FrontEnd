async function fetchAndProcessAuthors() {
    const url = 'http://localhost:5000/authors';
    
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch authors');
        }

        const data = await response.json();
        const authors = data.data.authors;

        // Create an array with concatenated names
        const concatenatedNames = authors.map(author => `${author.firstName} ${author.lastName}`);

        console.log(concatenatedNames); // Output the array

        return concatenatedNames;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

export default fetchAndProcessAuthors;
