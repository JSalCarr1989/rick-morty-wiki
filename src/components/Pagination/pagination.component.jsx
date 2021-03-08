import React from 'react'
import './pagination.styles.css'
import PaginationControl from '../PaginationControl/pagination-control.component'


const Pagination = () => {

    return <div className="pagination">
        <PaginationControl title="prev" />
        <PaginationControl title="next" />
    </div>

}

export default Pagination