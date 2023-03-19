import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleProduct from '../Components/SingleProduct'
import "../PagesCSS/ProductsPage.css"
import { BiSearchAlt2 } from 'react-icons/bi';
import { CiFilter } from 'react-icons/ci';
import Modal from 'react-modal';

const getData = (setData) => {
    return axios.get('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')
        .then((res) => setData(res.data))
}
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width:"210px",
        lineHeight:"3px",
        height:'480px'
    },
};


const ProductsPage = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [data, setData] = useState([])
    const [filtdata, setFiltdata] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        getData(setData)
    }, [setData])

    //Filterting--------------------------------------  

    const handleColour = (e) => {
        let color = data.filter((el) => {
            if (el.color === e.target.value) {
                return el
            }
        })
        setFiltdata([...filtdata, ...color])

    }

    const handleGender = (e) => {
        if (filtdata.length === 0) {
            let gender = data.filter((el) => {
                if (el.gender === e.target.value) {
                    return el
                }
            })
            setFiltdata(gender)
        } else {
            let gender = filtdata.filter((el) => {
                if (el.gender === e.target.value) {
                    return el
                }
            })
            setFiltdata(gender)
        }
    }
    const handlePrice = (e) => {
        if (filtdata.length === 0) {
            let gender = data.filter((el) => {
                if (el.price <= e.target.value) {
                    return el
                }
            })
            setFiltdata(gender)
        } else {
            let gender = filtdata.filter((el) => {
                if (el.price <= e.target.value) {
                    return el
                }
            })
            setFiltdata(gender)
        }
    }
    const handleCheckbox = (e) => {
        let type = data.filter((el) => {
            if (el.type === e.target.value) {
                return el
            }
        })
        setFiltdata([...filtdata, ...type])
    }
    //Search Functionality-----------------------------------

    const handlesearchchange = (e) => {
        setSearch(e.target.value)
    }

    const handleSearch = () => {
        console.log(search.toUpperCase())
        let searchdata = data.filter((el) => {
            return el.color.toUpperCase() === search.toUpperCase() || el.type.toUpperCase() === search.toUpperCase() || el.gender.toUpperCase() === search.toUpperCase() || el.name.toUpperCase() === search.toUpperCase()
        })
        setFiltdata(searchdata)


    }


    const openModal = () => {
        setIsOpen(true);
    }

    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <div className='Productpage' >
            <div className='searchbox'>
                <input type="text" value={search} placeholder='Search for products...' onChange={handlesearchchange} />
                <button onClick={handleSearch}><BiSearchAlt2 /></button>
                <button className='filterButton' onClick={openModal}><CiFilter size={"14"} /></button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    ariaHideApp={false}
                    contentLabel="Example Modal"
                >
                    <div className='filterModal'> 
                        <div><h4>Colour</h4>
                            <div>
                                <input type="checkbox" value="Red"
                                    onChange={handleColour}
                                />
                                <label>Red</label>
                            </div>
                            <div>
                                <input type="checkbox" value="Blue"
                                    onChange={handleColour}
                                />
                                <label>Blue</label>
                            </div>
                            <div>
                                <input type="checkbox" value="Green"
                                    onChange={handleColour}
                                />
                                <label>Green</label>
                            </div>
                        </div>
                        <br />
                        <div><h4>Gender</h4>
                            <div>
                                <input type="checkbox" value="Men"
                                    onChange={handleGender}
                                />
                                <label>Men</label>
                            </div>
                            <div>
                                <input type="checkbox" value="Women"
                                    onChange={handleGender}
                                />
                                <label>Women</label>
                            </div>
                        </div>
                        <br />
                        <div><h4>Price</h4>
                            <div>
                                <input type="checkbox" value="250"
                                    onChange={handlePrice}
                                />
                                <label>0-Rs.250</label>
                            </div>
                            <div>
                                <input type="checkbox" value="450"
                                    onChange={handlePrice}
                                />
                                <label>Rs.251-Rs.450</label>
                            </div>
                            <div>
                                <input type="checkbox" value="451"
                                    onChange={handlePrice}
                                />
                                <label>Rs.450</label>
                            </div>
                        </div>
                        <br />
                        <div><h4>Type</h4>
                            <div>
                                <input type="checkbox" value="Polo"
                                    onChange={handleCheckbox}
                                />
                                <label>Polo</label>
                            </div>
                            <div>
                                <input type="checkbox" value="Hoodie"
                                    onChange={handleCheckbox}
                                />
                                <label>Hoodie</label>
                            </div>
                            <div>
                                <input type="checkbox" value="Basic"
                                    onChange={handleCheckbox}
                                />
                                <label>Basic</label>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <button onClick={closeModal} style={{backgroundColor:'green',border:'none',marginTop:'10px'}}>APPLY</button>
                    
                </Modal>
            </div>
            <div className='alldata'>
                <div className='filterbox' >
                    <div><h4>Colour</h4>
                        <div>
                            <input type="checkbox" value="Red"
                                onChange={handleColour}
                            />
                            <label>Red</label>
                        </div>
                        <div>
                            <input type="checkbox" value="Blue"
                                onChange={handleColour}
                            />
                            <label>Blue</label>
                        </div>
                        <div>
                            <input type="checkbox" value="Green"
                                onChange={handleColour}
                            />
                            <label>Green</label>
                        </div>
                    </div>
                    <br />
                    <div><h4>Gender</h4>
                        <div>
                            <input type="checkbox" value="Men"
                                onChange={handleGender}
                            />
                            <label>Men</label>
                        </div>
                        <div>
                            <input type="checkbox" value="Women"
                                onChange={handleGender}
                            />
                            <label>Women</label>
                        </div>
                    </div>
                    <br />
                    <div><h4>Price</h4>
                        <div>
                            <input type="checkbox" value="250"
                                onChange={handlePrice}
                            />
                            <label>0-Rs.250</label>
                        </div>
                        <div>
                            <input type="checkbox" value="450"
                                onChange={handlePrice}
                            />
                            <label>Rs.251-Rs.450</label>
                        </div>
                        <div>
                            <input type="checkbox" value="451"
                                onChange={handlePrice}
                            />
                            <label>Rs.450</label>
                        </div>
                    </div>
                    <br />
                    <div><h4>Type</h4>
                        <div>
                            <input type="checkbox" value="Polo"
                                onChange={handleCheckbox}
                            />
                            <label>Polo</label>
                        </div>
                        <div>
                            <input type="checkbox" value="Hoodie"
                                onChange={handleCheckbox}
                            />
                            <label>Hoodie</label>
                        </div>
                        <div>
                            <input type="checkbox" value="Basic"
                                onChange={handleCheckbox}
                            />
                            <label>Basic</label>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        filtdata.length > 0 ? filtdata.length > 0 &&
                            filtdata.map((el) => {
                                return <div key={el.id}><SingleProduct {...el} /></div>
                            }) :
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