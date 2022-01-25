// En este componente vamos a englobar todos los filters

import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";

const Filters = () => {
    return (
        <section>

          <form>
            <FilterName />
            <FilterHouse />
          </form>
          
        </section>
    );
};

export default Filters;