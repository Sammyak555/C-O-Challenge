import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleProduct from '../Components/SingleProduct'
import "../PagesCSS/ProductsPage.css"

//https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json

const getData = (setData) => {
    return axios.get('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')
        .then((res) => setData(res.data))
}

const ProductsPage = () => {
    const [data, setData] = useState([])
    const [toggle,setToggle] = useState(false)
    var checkdata = ([])

    useEffect(() => {
        getData(setData)
        setToggle(!toggle)
    }, [setData])
    
    const handleCheckbox = (e) => {
        let color = data.filter((el) => {
            if( el.color === e.target.value){
                checkdata.push(el)
                setToggle(!toggle)
            }
        })
        
    console.log(checkdata)
    }

    // console.log(data)
    return (
        <div className='Productpage'>
            <div className='searchbox'>
                <input type="text" name="" id="" placeholder='Search for products...' />
                <button>search</button>
            </div>
            <div className='alldata'>
                <div className='filterbox'>
                    <div><h4>Colour</h4>
                        <div>
                            <input type="checkbox" value="Red"
                                onChange={handleCheckbox}
                                // checked={title.includes("Red")}
                            />
                            <label>Red</label>
                        </div>
                        <div>
                            <input type="checkbox" value="Blue"
                                onChange={handleCheckbox}
                                // checked={title.includes("Blue")}
                            />
                            <label>Blue</label>
                        </div>
                        <div>
                            <input type="checkbox" value="Green"
                                onChange={handleCheckbox}
                                // checked={title.includes("Green")}
                            />
                            <label>Green</label>
                        </div>
                    </div>
                    <br />
                    <div><h4>Gender</h4>
                    <div>
                            <input type="checkbox" value="Men"
                                onChange={handleCheckbox}
                                // checked={title.includes("Men")}
                            />
                            <label>Men</label>
                        </div>
                        <div>
                            <input type="checkbox" value="Women"
                                onChange={handleCheckbox}
                                // checked={title.includes("Women")}
                            />
                            <label>Women</label>
                        </div>
                    </div>
                    <br />
                    <div><h4>Price</h4>
                    <div>
                            <input type="checkbox" value="Red"
                                onChange={handleCheckbox}
                                // checked={title.includes("Red")}
                            />
                            <label>0-Rs.250</label>
                        </div>
                        <div>
                            <input type="checkbox" value="Red"
                                onChange={handleCheckbox}
                                // checked={title.includes("Red")}
                            />
                            <label>Rs.251-Rs.450</label>
                        </div>
                        <div>
                            <input type="checkbox" value="Red"
                                onChange={handleCheckbox}
                                // checked={title.includes("Red")}
                            />
                            <label>Rs.450</label>
                        </div>
                    </div>
                    <br />
                    <div><h4>Type</h4>
                    <div>
                            <input type="checkbox" value="Polo"
                                onChange={handleCheckbox}
                                // checked={title.includes("Polo")}
                            />
                            <label>Polo</label>
                        </div>
                        <div>
                            <input type="checkbox" value="Hoodie"
                                onChange={handleCheckbox}
                                // checked={title.includes("Hoodie")}
                            />
                            <label>Hoodie</label>
                        </div>
                        <div>
                            <input type="checkbox" value="Basic"
                                onChange={handleCheckbox}
                                // checked={title.includes("Basic")}
                            />
                            <label>Basic</label>
                        </div>
                    </div>
                </div>
                <div>
                    {
                       data.length > 0 &&
                        data.map((el) => {
                            return <div key={el.id}><SingleProduct {...el} /></div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductsPage