
import { useState, useEffect } from "react";

function HomeAuthorsection() {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/authors")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Something went wrong!")
                }
                return res.json();
            })
            .then((data) => {
                setAuthors(data.data.authors)
            })
            .catch((error) => {
                return console.log("Error: \n", error)
            })
    }, [])
    return (
        <>
            <div className='pt-4 ps-5'>
                <h6>Featured Author</h6>
                <div className="d-flex w-75 flex-direction-row p-2 justify-content-center    booksection">
                    {authors.slice(0, 5).map((author, index) => (
                        <div className="bookcard" key={index}>
                            <img className="ms-1 bookcardimg"
                                src={author.photo}
                                // src={author.photo.toLowerCase() == 'no photo' ? '' : author.photo}
                                // alt={author.photo.toLowerCase() == 'no photo' ? `${author.firstName} ${author.lastName}` : ''}
                            />
                            <p className="mt-2 w-75"><small>{author.firstName} {author.lastName}</small></p>
                            {/* <p>{author.disc}</p> */}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default HomeAuthorsection;