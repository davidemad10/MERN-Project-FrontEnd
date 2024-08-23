// function NameGetter({activeTab, id}){
//     const url = `http://localhost:5000/${activeTab}/${id}`;
//     fetch(url,{
//         method: "GET",
//         headers: 
//         {"Content-Type": "application/json"},
//     })
//     .then((res)=>{
//         if(!res.ok){
//             console.log(res.errorMessage)
//         }
//     })
//     .then((data)=>{
//         const result = activeTab == "authors" ? `${data.data.oneAuthor.firstName} ${data.data.oneAuthor.lastName}` 
//         : data.data.Category.categoryName ;
//         return result
//     })
//     .catch((error)=>{
//         console.log("Error: ", error)
//     })
// }

// export default NameGetter;
async function NameGetter(cat, id) {
    const des = cat == "categoryId" ? "categories" : "authors";
    const url = `http://localhost:5000/${des}/${id}`;
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if(!response.ok){
            return "No ok";
        }
        const data = await response.json();
        const result = des === "authors" 
            ? `${data.data.oneAuthor.firstName} ${data.data.oneAuthor.lastName}` 
            : data.data.Category.categoryName;
        return result.length > 0 ? result : ""
    }
    catch{
        return "not okkk"
    }
}

export default NameGetter;
