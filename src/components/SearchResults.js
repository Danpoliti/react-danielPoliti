import React, {useState} from 'react'
import ProductRow from 'components/ProductRow'
import { Pagination } from 'antd'
import 'antd/dist/antd.css'

const SearchResults = ({result}) => {

  const [currPage, setCurrPage] = useState(1)
  const pageSize = 6

  const startRow = (currPage - 1) * pageSize
  const endRow = startRow + pageSize
  const totalPages = Math.ceil(result.length / pageSize)

  const theProducts = result.slice(startRow,endRow).map((product) => <ProductRow key={product.id} data={product} />)
  // Pagination is next

  // How many are in the original set (total that meet the criteria)?
  // How many to display per page?
  // What page are we currently showing?

  const updatePage = (page) => {
    if (page < 0) 
      setCurrPage(1)
    else if (page > totalPages) 
      setCurrPage(totalPages)
    else 
      setCurrPage(page)
  }

  return (
      <>
        {theProducts}
        <div className="pagination">
        <p style={{backgroundColor: `purple`} }>
        <button onClick={()=> updatePage(currPage-1)} disabled={(currPage === 1 )?`disabled`:``}>prev</button>
        Showing {(theProducts.length === 1) ? `product` : `products`} {startRow + 1} to {Math.min(endRow, result.length)} of {result.length}
        <button onClick={()=> updatePage(currPage+1)} disabled={(currPage === totalPages )?`disabled`:``} >next</button>
      </p>
      
        <Pagination defaultCurrent={currPage} total={result.length} defaultPageSize={pageSize} onChange={(page) => setCurrPage(page)} />
        </div>
    </>
  )
}

export default SearchResults