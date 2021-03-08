import React from 'react'
import Filters from '../../components/Filters/filters.component'
import Layout from '../../components/Layout/layout.component'
import Pagination from '../../components/Pagination/pagination.component'
import CharactersContainer from '../../components/CharactersContainer/characters-container.component'

const CharactersPage = () => {

    return <Layout>
        <>
            <Filters />
            <CharactersContainer />
            <Pagination />
        </>
    </Layout>

}

export default CharactersPage


