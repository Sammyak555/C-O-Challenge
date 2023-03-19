import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import SingleProduct from '../Components/SingleProduct'
import "../PagesCSS/ProductsPage.css"
import { BiSearchAlt2 } from 'react-icons/bi';

const getData = (setData) => {
    return axios.get('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')
        .then((res) => setData(res.data))
}

const ProductsPage = () => {
    const [data, setData] = useState([])
    const [toggle,setToggle] = useState(false)
    const [filtdata,setFiltdata] = useState([])
    const [search,setSearch] = useState('')
    let col = []

    useEffect(() => {
        getData(setData)
        setToggle(!toggle)
    }, [setData])

  //Filterting--------------------------------------  
    
    const handleColour = (e) => {
            let color = data.filter((el) => {
                if( el.color === e.target.value){         
                    return el
                }
            })
            setFiltdata([...filtdata,...color])
     
    }

    const handleGender = (e) => {
        if(filtdata.length===0){
            let gender = data.filter((el) => {
                if( el.gender === e.target.value){         
                    return el
                }
            })
            setFiltdata(gender) 
        }else{
            let gender = filtdata.filter((el) => {
                if( el.gender === e.target.value){         
                    return el
                }
            })
            setFiltdata(gender) 
        }
    } 
    const handlePrice =(e)=>{
        if(filtdata.length===0){
            let gender = data.filter((el) => {
                if( el.price <= e.target.value){         
                    return el
                }
            })
            setFiltdata(gender) 
        }else{
            let gender = filtdata.filter((el) => {
                if( el.price <= e.target.value){         
                    return el
                }
            })
            setFiltdata(gender) 
        }
    }
    const handleCheckbox =(e)=>{
        let type = data.filter((el) => {
            if( el.type === e.target.value){         
                return el
            }
        })
        setFiltdata([...filtdata,...type])
    }   
    //Search Functionality-----------------------------------

    const handlesearchchange = (e) => {
        setSearch(e.target.value)
    }

    const handleSearch = () => {
        console.log(search.toUpperCase())
            let searchdata = data.filter((el) => {
                return el.color.toUpperCase()===search.toUpperCase() || el.type.toUpperCase()===search.toUpperCase() || el.gender.toUpperCase()===search.toUpperCase() ||el.name.toUpperCase()===search.toUpperCase()
            })
             setFiltdata(searchdata)
           
        
    }

    console.log(filtdata)
    return (
        <div className='Productpage'>
            <div className='searchbox'>
                <input type="text" value={search} placeholder='Search for products...' onChange={handlesearchchange}/>
                <button onClick={handleSearch}><BiSearchAlt2/></button>
            </div>
            <div className='alldata'>
                <div className='filterbox'>
                    <div><h4>Colour</h4>
                        <div>
                            <input type="checkbox" value="Red"
                                onChange={handleColour}
                                // checked={title.includes("Red")}
                            />
                            <label>Red</label>
                        </div>
                        <div>
                            <input type="checkbox" value="Blue"
                                onChange={handleColour}
                                // checked={title.includes("Blue")}
                            />
                            <label>Blue</label>
                        </div>
                        <div>
                            <input type="checkbox" value="Green"
                                onChange={handleColour}
                                // checked={title.includes("Green")}
                            />
                            <label>Green</label>
                        </div>
                    </div>
                    <br />
                    <div><h4>Gender</h4>
                    <div>
                            <input type="checkbox" value="Men"
                                onChange={handleGender}
                                // checked={title.includes("Men")}
                            />
                            <label>Men</label>
                        </div>
                        <div>
                            <input type="checkbox" value="Women"
                                onChange={handleGender}
                                // checked={title.includes("Women")}
                            />
                            <label>Women</label>
                        </div>
                    </div>
                    <br />
                    <div><h4>Price</h4>
                    <div>
                            <input type="checkbox" value="250"
                                onChange={handlePrice}
                                // checked={title.includes("Red")}
                            />
                            <label>0-Rs.250</label>
                        </div>
                        <div>
                            <input type="checkbox" value="450"
                                onChange={handlePrice}
                                // checked={title.includes("Red")}
                            />
                            <label>Rs.251-Rs.450</label>
                        </div>
                        <div>
                            <input type="checkbox" value="451"
                                onChange={handlePrice}
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
                       filtdata.length>0?filtdata.length>0&&
                       filtdata.map((el) => {
                        return <div key={el.id}><SingleProduct {...el} /></div>
                       }):
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