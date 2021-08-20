import React, {useState} from 'react'
import Layout from 'components/Layout'
import SearchResults from '../components/SearchResults'


const productList = ({data}) => {

  const [searchState, setSearchState] = useState({
    colors: [],
    sort:(a,b) => a.price - b.price,
    type: []
  })

  const {colors, sort, type} = searchState
console.log(data)
  const searchResult = data
  .filter((guitar) => colors.length === 0 || colors.includes(guitar.color))
  .filter((style) => type.length === 0 || type.includes(style.type))
  .sort(sort)
  
  const handleColorOptionChange = ({target}) => {
    // When a check or uncheck a checkbox, add/remove the "value" from the Array

    if (target.checked) {
      setSearchState({
        ...searchState,
        colors: [...searchState.colors, target.value]
      })
    } else {
      setSearchState({
        ...searchState,
        colors: searchState.colors.filter((color) => color !== target.value)
      })
    }
  
  }
  const handleHandOptionChange = ({target}) => {
    // When a check or uncheck a checkbox, add/remove the "value" from the Array

    if (target.checked) {
      setSearchState({
        ...searchState,
        type: [...searchState.type, target.value]
      })
    } else {
      setSearchState({
        ...searchState,
        type: searchState.type.filter((hand) => hand !== target.value)
      })
    }
  
  }

  const handleSortChange = ({target}) => {

    let sorting
    if (target.value === "0") {
      sorting = (a, b) => a.price - b.price
    } else if (target.value === "1") {
      sorting = (a, b) => b.price - a.price
    }

    setSearchState({
      ...searchState,
      sort: sorting
    })
  }

    return (
      
<Layout>
        <form className="filters">
        <div className="result-header">
      <h2 className="subheading">Results</h2>
                        <section className="show-filter">
                        <h4>Show</h4>
                        <label htmlFor="sort">Show</label>
                        <select name="sort" id="sort" defaultValue="0" onChange={handleSortChange}>
                            <option value="0">Price, lowest to highest</option>
                            <option value="1">Price, highest to lowest</option>
                        </select>
                        </section>
             </div>
        <div className="filter-options">
          <fieldset className="top-filter" onChange={handleColorOptionChange}>
            <legend>Colour</legend>
            <ul className="filter-list" id="filter-colour" >
              <label htmlFor="filter-black" className="colorpicked-filter">
                <li><input type="checkbox" name="colour" value="black" id="filter-black" className="checkbox" />
                  <span>Black</span>
                </li>
              </label>
              <label htmlFor="filter-white" className="colorpicked-filter">
                <li><input type="checkbox" name="colour" value="white" id="filter-white" className="checkbox" />
                  <span>White</span>
                </li>
              </label>
              <label htmlFor="filter-red" className="colorpicked-filter">
                <li><input type="checkbox" name="colour" value="red" id="filter-red" className="checkbox" /> <span>Red</span>
                </li>
              </label>
              
            </ul>
          </fieldset>
          <fieldset className="top-filter" onChange={handleHandOptionChange}>
            <legend>Type</legend>
            <ol className="filter-list">
              <label htmlFor="right-handed" className="handed-filter">
                <li><input type="checkbox" name="size" value="RH" id="right-handed"
                    className="checkbox" /><span>Right-handed</span>
                    </li>
                    </label> 
  
              <label htmlFor="left-handed" className="handed-filter">
                <li><input type="checkbox" name="size" value="LH" id="left-handed"
                    className="checkbox" /><span>Left-handed</span>
                    </li>
              </label> 
  
            </ol>
          </fieldset>
        </div>

      </form>

      <SearchResults result={searchResult} />
      </Layout>
      
    )
}

export default productList