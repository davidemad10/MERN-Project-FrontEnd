
function Categorydropmenu() {
    const categories = [
        { label: 'action' },
        { label: 'Sci-Fi' },
        { label: 'Drama' },
        { label: 'AA77AA' },
    ]

    return (
        <>
            <select class="form-control mb-3 mt-1" id="exampleFormControlSelect1">
                {
                    categories.map((category, index) =>
                        <option>{category.label}</option>
                    )
                }
            </select>
        </>
    )
}

export default Categorydropmenu;