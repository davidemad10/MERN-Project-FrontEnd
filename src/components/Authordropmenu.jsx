
import { useState, useEffect } from 'react';
import fetchAndProcessAuthors from './AdminPanelTableComponents/GetAuthors';

function Authordropmenu() {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        const loadAuthors = async () => {
            const authorsData = await fetchAndProcessAuthors();
            // Assuming authorsData is an array of concatenated names
            setAuthors(authorsData.map(name => ({ label: name })));
        };
        loadAuthors();
    }, []);

    return (
        <>
            <select className="form-control mb-3 mt-1" id="exampleFormControlSelect1">
                {
                    authors.map((author, index) =>
                        <option key={index} value={author.label}>
                            {author.label}
                        </option>
                    )
                }
            </select>
        </>
    );
}

export default Authordropmenu;
