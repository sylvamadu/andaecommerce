import React,{useContext} from 'react'
import { NewsContext } from './NewsContext'

function TopBreadCrumb() {
  const{selectedCategory, setSelectedCategory} = useContext(NewsContext)
  // console.log(selectedCategory)
  return (
    <div className="topBreadCrumb">
        <h3>Men's shoes</h3>
        <form>
            <label>Sort by: </label>
            <select value={selectedCategory} onChange={(e)=>setSelectedCategory(e.target.value)}>
                <option value="Popularity">Popularity</option>
                <option value="Price: High to Low">Price: High to Low</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price More Than 5,000">Price More Than 5,000</option>
                <option value="Price More Than 10,000">Price More Than 10,000</option>
                <option value="Price More Than 20,000">Price More Than 20,000</option>
                <option value="Product rating">Product rating</option>
            </select>
        </form>
    </div>
  )
}

export default TopBreadCrumb