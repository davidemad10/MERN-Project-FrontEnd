import { APContext } from './AdminPanel';
import AddBook from './Adminaddbook';
import AddCategory from './Adminaddcategory';
import AddAuthor from './AdminAddAuthor';

function AddNewRecord() {
    const { activeTab } = APContext();
    return (
        <>
            {activeTab == 'books' ? <AddBook /> : null}
            {activeTab == 'categories' ? <AddCategory /> : null}
            {activeTab == 'authors' ? <AddAuthor /> : null}
        </>
    )
}

export default AddNewRecord;