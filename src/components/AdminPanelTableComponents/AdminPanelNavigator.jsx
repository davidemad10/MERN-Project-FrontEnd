import { APContext } from './AdminPanel';
import AddNewRecord from './AddNewRecord';

function Navigator() {
    const navItems = [
        { label: 'books' },
        { label: 'categories' },
        { label: 'authors' }
    ];

    const handlelogout = () => {
        localStorage.clear();
    }

    const handlenewrecord = () => {
        setContent(<AddNewRecord/>)
    }

    const { activeTab, onTabChange, setContent } = APContext();

    return (
        <>
            <div className='d-flex'>
                <ul className="nav nav-tabs col-sm-8 ms-5 mt-1">
                    {navItems.map((item, index) => (
                        <li key={index} className="nav-item">
                            <a
                                className={`nav-link ${item.label === activeTab ? 'active' : ''}`}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    item.label === activeTab ? null : onTabChange(item.label);
                                }}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <a
                    className='m-auto'
                    style={{ cursor: "pointer" }}
                    href='/'
                    onClick={handlelogout}
                >Logout</a>
            </div>
            <div className='d-flex justify-content-end w-100'>
                <a 
                className='pe-3' 
                style={{ cursor: "pointer" }}
                onClick={handlenewrecord}
                >add new record</a>
            </div>

        </>
    );
}

export default Navigator;

