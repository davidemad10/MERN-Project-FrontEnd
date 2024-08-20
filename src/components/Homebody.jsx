import HomeBooksection from "./HomeBooksection";
import HomeAuthorsection from './HomeAuthorsection';

function Homebody() {
    return (
        <>
            <div className="container">
                <HomeBooksection />
                <HomeAuthorsection />
            </div>
        </>
    )
}

export default Homebody;