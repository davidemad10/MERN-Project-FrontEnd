import { useState, useEffect } from 'react';
import fetchAndProcessCategories from './AdminPanelTableComponents/GetCategories';

function CategoryDropdownMenu() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const loadCategories = async () => {
            const categoriesData = await fetchAndProcessCategories();
            setCategories(categoriesData.map(name => ({ label: name })));
        };
        loadCategories();
    }, []);

    return (
        <>
            <select className="form-control mb-3 mt-1" id="exampleFormControlSelect1">
                {
                    categories.map((category, index) =>
                        <option key={index} value={category.label}>
                            {category.label}
                        </option>
                    )
                }
            </select>
        </>
    );
}

export default CategoryDropdownMenu;
