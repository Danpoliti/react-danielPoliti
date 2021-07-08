import React from 'react'
import ProductRow from 'components/ProductRow'

const SearchResults = ({result}) => {

  const theProducts = result.slice(0,3).map((product) => <ProductRow key={product.id} data={product} />)
  // Pagination is next

  // How many are in the original set (total that meet the criteria)?
  // How many to display per page?
  // What page are we currently showing?


  return (
      <>
        {theProducts}
    </>
  )
}

export default SearchResults