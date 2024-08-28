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
        setContent(<AddNewRecord />)
    }

    const { activeTab, onTabChange, setContent } = APContext();

    return (
        <>
            <div className='d-flex px-3 dark' data-bs-theme="dark">
                <ul className="nav nav-tabs col-sm-8 mt-1 w-100">
                    {navItems.map((item, index) => (
                        <li key={index} className="nav-item">
                            <a
                                className={`nav-link ${item.label === activeTab ? 'active' : ''}`}
                                style={{color: "darkgrey"}}    
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
                    <li className="nav-item ms-auto">
                        <a
                            className='m-auto nav-link'
                            style={{ cursor: "pointer" , color: "black"}}
                            href='/'
                            onClick={handlelogout}
                        >Logout</a>
                    </li>
                </ul>
            </div>
            <div className=' d-flex justify-content-end w-100 py-3' data-bs-theme="dark">
                <a
                    className='pe-3 nav-link'
                    style={{ cursor: "pointer" }}
                    onClick={handlenewrecord}
                >add new record</a>
            </div>
        </>
    );
}

export default Navigator;

