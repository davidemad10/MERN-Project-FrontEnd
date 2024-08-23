import EditDeleteBtn from './EditDeleteBtn';
import { APContext } from './AdminPanel';
import { useEffect, useState } from 'react';
import NameGetter from './NameGetter';

function Tbody({ header }) {
    // const { result, setResult } = useState(NameGetter("authorId", "66c7c1a38b6b9f4b6cfd38b6"));
    const { activeTab, data } = APContext();
    useEffect(() => {
    }, [])

    return (
        <>
            <tbody>
                {activeTab === "books" && data && data.length > 0 && data.map((record, index) => (
                    <tr key={index}>
                        {header.map((field) => (
                            <td key={field} className="rounded custom-cell">
                                {/* {(field === "categoryId" || field === "authorId") ? NameGetter(field, record._id)
                                    : record[field]}
                                {(field === "categoryId" || field === "authorId") ? "a1a"
                                    : record[field]} */}
                                    {record[field] || ""}
                            </td>
                        ))}
                        <EditDeleteBtn recordId={record._id} activeTab={activeTab} record={record}/>
                    </tr>
                ))}
                {activeTab === "authors" && data && data.length > 0 && data.map((record, index) => (
                    <tr key={index}>
                        {header.map((field) => (
                            <td key={field} className="rounded custom-cell">
                                {record[field] || ""}
                            </td>
                        ))}
                        <EditDeleteBtn recordId={record._id} activeTab={activeTab} record={record}/>
                    </tr>
                ))}
                {activeTab === "categories" && data && data.length > 0 && data.map((record, index) => (
                    <tr key={index}>
                        {header.map((field) => (
                            <td key={field} className="rounded custom-cell">
                                {record[field] || ""}
                            </td>
                        ))}
                        <EditDeleteBtn recordId={record._id} activeTab={activeTab} record={record}/>
                    </tr>
                ))}
            </tbody>
        </>
    )
}

export default Tbody;