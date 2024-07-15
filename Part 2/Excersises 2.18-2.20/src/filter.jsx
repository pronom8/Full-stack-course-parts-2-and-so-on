import React from "react";
import axios from 'axios'


const FilterForm = ({filter, handleFilterChange}) => {


    return(
        <form>

            <div>
                Filter Country: <input value={filter} onChange={handleFilterChange} />
            </div>
        </form>

    )

}


export default FilterForm;