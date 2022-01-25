// En este componente vamos a englobar todos los filters

import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";

const Filters = (props) => {
    return (
        <section>

          <form>
            <FilterName 
            handleFilter={props.handleFilter} 
            filterName={props.filterName} 
            />
            <FilterHouse
            handleFilter={props.handleFilter}
            filterHouse={props.filterHouse}
            />
          </form>
          
        </section>
    );
};

export default Filters;