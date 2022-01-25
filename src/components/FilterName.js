const FilterName = (props) => {
    // Función encargada de ejecutar a handleFilterName
    const handleInputName = (ev) => {
        props.handleFilterName(ev.currentTarget.value);
    };

    return (
        <>
            <label htmlFor="name">Busca por personaje:</label>
            <input 
            type="text" 
            name="name" 
            id="name"
            onChange={handleInputName} 
            />
        </>
    );
};

export default FilterName;
