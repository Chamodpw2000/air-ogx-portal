import React from 'react';

const WhyExProd = ({ Image, Image2, Title, Description }) => {
    return (
        <div>
            <div className="col">
                <div className="card shadow-sm">
                    <img src={Image} alt="" className="image-large" />
                    <div className="card-body d-flex">
                        <img src={Image2} alt="" className="image-small" />
                        <p>
                            <strong className="description-margin">{Title}</strong>
                            <br />
                            {Description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyExProd;
