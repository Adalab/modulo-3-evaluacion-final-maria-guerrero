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
            <label className="filterHouseTitle" htmlFor="house">Select a house:</label>
            <select className="selectStyles" name="house" id="house" onChange={handleSelect} value={props.filterHouse}>
              <option value="gryffindor">Gryffindor</option>
              <option value="slytherin">Slytherin</option>
              <option value="ravenclaw">Ravenclaw</option>
              <option value="hufflepuff">Hufflepuff</option>
            </select>
        </>
    );
};

export default FilterHouse;