// En este componente vamos a englobar todos los filters

import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";

const Filters = (props) => {
    return (
        <section>

          <form>
            <FilterName handleFilterName={props.handleFilterName} />
            <FilterHouse />
          </form>
          
        </section>
    );
};

export default Filters;