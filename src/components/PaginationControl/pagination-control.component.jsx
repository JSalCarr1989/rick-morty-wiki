import React from 'react'
import './pagination-control.styles.css'

const PaginationControl = (props) => {

    return <button className="pagination-control">
        {props.title}
    </button>

}

export default PaginationControl