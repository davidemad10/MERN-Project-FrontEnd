import { useEffect, useState, useRef, createContext, useContext } from "react";
import Navigator from "./AdminPanelNavigator";
import Fetcher from "./DataFetcher";
import Table from "./AdminPanelTable";

const AdminPanelContext = createContext();

export const APContext = () => useContext(AdminPanelContext);

function AdminPanel() {

    const [activeTab, onTabChange] = useState('books');
    const [data, setData] = useState();
    const [Content, setContent] = useState(<><Navigator />
        <Table /></>);
    const hasMounted = useRef(false);

    useEffect(() => {
        if (hasMounted.current) {
            async function fetchData() {
                const result = await Fetcher(activeTab);
                setData(result);
            }
            fetchData();
        } else {
            hasMounted.current = true;
        }
    }, [activeTab]);

    return (
        <>
            <AdminPanelContext.Provider value={{ activeTab, onTabChange, data, setContent }}>
                {Content}
            </AdminPanelContext.Provider>
        </>
    );
}

export default AdminPanel;
