import React from "react";
import {NavLink} from "react-router-dom";

const Pagination = ({pageSize,posts, paginate}) =>{
    const pageNumber=[];
for (let i=1; i<=Math.ceil(posts/pageSize);i++)
    pageNumber.push(i)
    return(
        <nav>
            <ul className="pagination">
                {pageNumber.map(number=>(
                    <li key={number} className="page-item">
                        <NavLink to ="/Page1Container" onClick={()=>paginate(number)}  className="page-link">
                            {number}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;
