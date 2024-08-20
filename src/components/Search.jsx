import GetBooks from "./SearchFetchBooks";
import GetAuthors from "./SearchFetchAuthros";

function Search({ data }) {

    return (
        <>
            <div className="container my-5">
                <h4>search for .. <span>{data}</span></h4>
                <div className="">
                    <h2>Books</h2>
                    <GetBooks data={data} />    
                    <h2>Authors</h2>
                    <GetAuthors data={data} />
                </div>
            </div>
        </>
    )
}

export default Search;