// import EditDeleteCard from "./EditCard";
import DeleteRecord from './DeleteRecord';
import { APContext } from './AdminPanel';
import AdminLogin from "./AdminLogin";

function EditDeleteBtn({ recordId, activeTab }) {
    const { setContent } = APContext();
    const handlDelete = async () => {
        const isConfirmed = window.confirm("Are you sure you want to delete this record?");
        if (isConfirmed) {
            const result = await DeleteRecord(recordId, activeTab);
            if(!result){
                setContent(<AdminLogin/>)
            }
        }
        else {
            alert("Deletion canceled")
        }
    }

    return (
        <>
            <td className="rounded custom-cell">
                {/* <button onClick={<EditDeleteCard record={record} activeTab={activeTab} />} className="btn btn-secondary mx-1 btn-sm">Edit</button> */}
                <button onClick={handlDelete} className="btn btn-dark mx-1 btn-sm">Delete</button>
            </td>
        </>
    )
}

export default EditDeleteBtn;
