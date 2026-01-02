import React from 'react'


const CountryProd = ({Image,Title,Description}) => {
    return (
        
            <div className="card shadow-sm">
                <img src={Image} alt="" className="image-project" />
                <div className="card-body">
                    <p>
                        <strong className="description-margin">{Title} </strong>
                    </p>

                    <p>
                        {Description}
                    </p>


                </div>
            </div>
        
    )
}

export default CountryProd