import { useState } from "react";

function EditDeleteCard(record, activeTab) {
    const [recordd, setRecord] = useState(record);

    function handleChange(e) {
        const { id, value } = e.target;
        setRecord(prevRecord => ({
            ...prevRecord,
            [id]: value
        }));
    }

    function updateRecord() {
        const url = `http://localhost:5000/${activeTab}/${recordd._id}`;

        fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(recordd),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <>
            <div className="shadow rounded p-4 position-absolute w-50 top-50 start-50 translate-middle addcategoryCard">
                <h2 className="text-center">Edit Record Document</h2>
                <form onSubmit={updateRecord}>
                    {Object.entries(recordd).map(([key, value]) => (
                        <div key={key} className="mb-3">
                            <label htmlFor={key}>{key}</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                id={key}
                                value={value}
                                onChange={handleChange}
                            />
                        </div>
                    ))}
                    <button className="btn btn-secondary mt-3" type="submit">Save Changes</button>
                </form>
            </div>
        </>
    );
}

export default EditDeleteCard;
