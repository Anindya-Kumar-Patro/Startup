import React from 'react'
import './NavFilter.css'

const NavFilter = () => {
    return (
        <>
           <div className="fullsection">
            <div className="filter-section">
                <div>
                    <div className="slidecontainer">
                        <h4>Bedrooms</h4>
                        <input type="range" min="1" max="6" className="slider" id="myRange" />
                    </div>
                    <div className="slidecontainer">
                        <h4>Bathrooms</h4>
                        <input type="range" min="1" max="6" className="slider" id="myRange" />
                    </div>
                    <div className="facing">
                        <h4>Facing</h4>
                        <div className="facing-buttons">
                            
                            <button className="btnstyl">North</button>
                            <button className="btnstyl">South</button>
                            
                            <button className="btnstyl">West</button>
                        </div>
                        <div className="facing-buttons">
                            <button className="btnstyl">East</button>
                            <button className="btnstyl">North East</button>
                            <button className="btnstyl">South East</button>
                           
                        </div>
                        <div className="facing-buttons">
                            
                            <button className="btnstyl">North West</button>
                            <button className="btnstyl">South West</button>
                           
                        </div>
                    </div>


                    <div className="facing">
                        <h4>Amenities</h4>
                        <div className="facing-buttons">
                            
                            <button className="btnstyl">Parking</button>
                            <button className="btnstyl">Pool</button>
                            <button className="btnstyl">Park</button>
                            <button className="btnstyl">Lift</button>
                        </div>
                        <div className="facing-buttons">
                            <button className="btnstyl">Security</button>
                            <button className="btnstyl">Temple</button>
                            <button className="btnstyl">Gym</button>
                           
                        </div>
                        <div className="facing-buttons">
                            
                            <button className="btnstyl">Club-House</button>
                            <button className="btnstyl">View 10+</button>
                           
                        </div>
                    </div>
                </div>



            </div>
            <div className="navbar-section">
                <div className="rowval">
                    <div className="dropdowns">
                        <select id="property-type" className="Property-Type" name="property-type">
                            <option value="">Property Type</option>
                            <option value="saab">Saab</option>
                            <option value="fiat">Fiat</option>
                            <option value="audi">Audi</option>
                        </select>

                        <select id="pricing" className="Pricing" name="Pricing">
                            <option value="">Pricing</option>
                            <option value="saab">Saab</option>
                            <option value="fiat">Fiat</option>
                            <option value="audi">Audi</option>
                        </select>

                        <select id="sales-type" className="Sales-Type" name="Sales">
                            <option value="">Sales Type</option>
                            <option value="saab">Saab</option>
                            <option value="fiat">Fiat</option>
                            <option value="audi">Audi</option>
                        </select>

                        <select id="more-filters" className="More-Filters" name="More-Filters">
                            <option value="">More Filters</option>
                            <option value="saab">Saab</option>
                            <option value="fiat">Fiat</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div className="spacehere">
                        
                    </div>
                    <div className="Post-Ad">
                       <a href="/" className="Postad"><h4>Post an Ad</h4></a>
                    </div>
                

                </div>
                
            </div>
           </div> 
        </>
    )
}

export default NavFilter
