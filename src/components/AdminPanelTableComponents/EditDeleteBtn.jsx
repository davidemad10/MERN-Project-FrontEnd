import DeleteRecord from './DeleteRecord';
import { APContext } from './AdminPanel';
import Editbook from './Editbook';
import EditCategory from './Editcategory';
import EditAuthor from './Editauthor';


function EditDeleteBtn({ recordId, activeTab, record }) {
    const { setContent } = APContext();
    const handlDelete = async () => {
        const isConfirmed = window.confirm("Are you sure you want to delete this record?");
        if (isConfirmed) {
            const result = await DeleteRecord(recordId, activeTab);
            if (!result) {
                window.location.reload()
            }
            else {
                console.log("Record has been deleted")
                // window.location.reload()
            }
        }
        else {
            alert("Deletion canceled")
        }
    }
    const handleEdit = () => {
        switch (activeTab) {
            case "books":
                setContent(<Editbook record={record} />);
                console.log(record)
                break;
            case "categories":
                setContent(<EditCategory record={record} />);
                console.log(record)
                break;
            case "authors":
                setContent(<EditAuthor record={record} />);
                console.log(record)
                break;
            default:
                break;
        }
    }
        return (
            <>
                <td className="custom-cell">
                    <button onClick={handleEdit} className="btn btn-secondary mx-1 btn-sm">Edit</button>
                    <button onClick={handlDelete} className="btn btn-dark mx-1 btn-sm">Delete</button>
                </td>
            </>
        )
    }

    export default EditDeleteBtn;
