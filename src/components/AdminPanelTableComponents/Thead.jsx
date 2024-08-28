import { APContext } from "./AdminPanel";

function Thead({header}) {
    const { activeTab } = APContext();

    return (
        <>
            <thead className="thead-dark">
                <tr>
                    {activeTab === "books" && header.map((label, index) => (
                        <th key={index} scope="col" className="rounded">{label}</th>
                    ))}
                    {activeTab === "authors" && header.map((label, index) => (
                        <th key={index} scope="col" className="rounded">{label}</th>
                    ))}
                    {activeTab === "categories" && header.map((label, index) => (
                        <th key={index} scope="col" className="rounded">{label}</th>
                    ))}
                    <th scope="col" className="rounded">Actions</th>
                </tr>
            </thead>
        </>
    )
}

export default Thead;