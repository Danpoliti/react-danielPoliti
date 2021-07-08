import React from 'react'
import Layout from 'components/Layout'
// import SearchResults from '../components/SearchResults'
import ProductRow from '../components/ProductRow'
const productList = () => {

  // const [searchState, setSearchState] = useState({
  //   colors: ``
  // })

  // const {colors} = searchState

  // const searchResult = data
  // .filter(({colorsOpt}) => colors.length === `` || 
  //                       colorsOpt.filter((color)=> colors.includes(color)).length > 0)
  
  // const handleEnrolledChange = ({target}) => {
  //   // When a check or uncheck a checkbox, add/remove the "value" from the Array

  //   if (target.checked) {
  //     setSearchState({
  //       ...searchState,
  //       colors: [...searchState.colors, target.value]
  //     })
  //   } else {
  //     setSearchState({
  //       ...searchState,
  //       colors: searchState.colors.filter((color) => color !== target.value)
  //     })
  //   }
  
  // }
    return (
      
<Layout>
        <form className="filters">

        <div className="filter-options">
          <fieldset className="top-filter" >
            <legend>Colour</legend>
            <ul className="filter-list" id="filter-colour">
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
          <fieldset className="top-filter">
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
          <fieldset className="top-filter" id="star-filter">
            <legend>Ratings (above)</legend>
            <ol className="filter-list" id="rating">
              <li>
                <input type="radio" name="rating" value="4" id="aboveFour" hidden />
                <label htmlFor="aboveFour">
  
                  <span className="material-icons">star</span><span className="material-icons">star</span><span
                    className="material-icons">star</span><span className="material-icons">star</span><span
                    className="material-icons">star_border</span>
                </label>
  
              </li>
              <li>
                <input type="radio" name="rating" value="3" id="aboveThree" hidden />
                <label htmlFor="aboveThree">
                  <span className="material-icons">star</span><span className="material-icons">star</span><span
                    className="material-icons">star</span><span className="material-icons">star_border</span><span
                    className="material-icons">star_border</span>
                </label>
              </li>
              <li>
                <input type="radio" name="rating" value="2" id="aboveTwo" hidden />
                <label htmlFor="aboveTwo">
                  <span className="material-icons">star</span><span className="material-icons">star</span><span
                    className="material-icons">star_border</span><span className="material-icons">star_border</span><span
                    className="material-icons">star_border</span>
                </label>
              </li>
              <li>
                <input type="radio" name="rating" value="1" id="aboveOne" hidden />
                <label htmlFor="aboveOne">
                  <span className="material-icons">star</span><span className="material-icons">star_border</span><span
                    className="material-icons">star_border</span><span className="material-icons">star_border</span><span
                    className="material-icons">star_border</span>
                </label>
              </li>
            </ol>
          </fieldset>
        </div>
  
      </form>
      <ProductRow />
      {/* <SearchResults result={searchResult} /> */}
      </Layout>
      
    )
}

export default productList