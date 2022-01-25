const FilterHouse = () => {
    return (
        <>
            <label htmlFor="select">Selecciona la casa</label>
            <select name="select" id="select">
              <option value="griffindor">Griffindor</option>
              <option value="ravenclaw">Ravenclaw</option>
              <option value="hufflepuff">Hufflepuff</option>
              <option value="slytherin">Slytherin</option>
            </select>
        </>
    );
};

export default FilterHouse;