const FilterHouse = (props) => {
    // Función encargada de mandar arriba el valor del estado
    const handleSelect = (ev) => {
        props.handleFilter({
            key: 'house',
            value: ev.currentTarget.value
        });
    };

    return (
        <>
            <label htmlFor="select">Selecciona la casa</label>
            <select name="select" id="select" onChange={handleSelect} value={props.filterHouse}>
              <option value="gryffindor">Gryffindor</option>
              <option value="ravenclaw">Ravenclaw</option>
              <option value="hufflepuff">Hufflepuff</option>
              <option value="slytherin">Slytherin</option>
            </select>
        </>
    );
};

export default FilterHouse;