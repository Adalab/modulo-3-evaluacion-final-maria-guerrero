const FilterName = (props) => {
    // Función encargada de ejecutar a handleFilter
    const handleInputName = (ev) => {
        props.handleFilter({
            key: 'name',
            value: ev.currentTarget.value
        });
    };

    return (
        <>
            <label className="inputTitleStyles" htmlFor="name">Search by character:</label>
            <input
            className="backgroundInput" 
            type="text" 
            name="name" 
            id="name"
            placeholder="Ej: Albus Dumbledore"
            onChange={handleInputName}
            value={props.filterName} 
            />
        </>
    );
};

export default FilterName;
