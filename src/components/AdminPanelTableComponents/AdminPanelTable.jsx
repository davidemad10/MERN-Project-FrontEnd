import '../../styles/Table1.css';
import { APContext } from './AdminPanel';
import Thead from './Thead';
import Tbody from './Tbody';

function Table() {
  const Books = ["title", "image", "desc", "categoryId", "authorId"];
  const Authors = ["firstName", "lastName", "disc","image"];
  const Categories = ["categoryName", "image"];
  
  const { activeTab } = APContext();

  const headersMap = {
    books: Books,
    authors: Authors,
    categories: Categories,
  };

  const headers = headersMap[activeTab] || [];

  return (
    <>
      {/* <table className="table table-striped table-bordered custom-table"> */}
      <table className="table table-striped table-dark custom-table mb-0">
        <Thead header={headers} />
        <Tbody header={headers} />
      </table>
    </>
  );
}

export default Table;
