import React from 'react';
import { ChartIcon } from '../../Icon';

const Card = () => {
    return (
      <>
        <div className="cards px-5 mt-5">
            <div className="container">
            <div className="row">
                <div className="col-12 col-xl-3 col-md-4 col-sm-6 mb-4">
                    <div className="left">
                        <div className="card_inner">
                            <span>Total Images</span>
                            <h4>36,476GB</h4>
                            <p><span><ChartIcon /> +32.40%</span> Last Month</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-3 col-md-4 col-sm-6 mb-4">
                    <div className="left">
                        <div className="card_inner">
                            <span>Total Images</span>
                            <h4>36,476GB</h4>
                            <p><span><ChartIcon /> +32.40%</span> Last Month</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-3 col-md-4 col-sm-6 mb-4">
                    <div className="left">
                        <div className="card_inner">
                            <span>Total Images</span>
                            <h4>36,476GB</h4>
                            <p><span><ChartIcon /> +32.40%</span> Last Month</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-3 col-md-4 col-sm-6 mb-4">
                    <div className="left">
                        <div className="card_inner">
                            <span>Total Images</span>
                            <h4>36,476GB</h4>
                            <p><span><ChartIcon /> +32.40%</span> Last Month</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
      </>
    );
  };

export default Card;