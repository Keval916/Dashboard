import React from 'react';
import Card from './Cards';
import { Search, Notification,Setting,Profile,Message } from '../../Icon';

const Dashboard = () => {
  return (
    <>
    <div className='header'>
        <div className="container">
            <div className="header_inner d-flex align-items-center justify-content-xl-between justify-content-xxl-between justify-content-lg-between justify-content-md-between flex-wrap gap-3 justify-content-center">
                <div className="left">
                    <div className="input_sec position-relative w-auto">
                        <input type="text" placeholder="Search Your Page" />
                        <Search/>
                        <button className='btn_search'>K</button>
                    </div>
                </div>

                <div className="right">
                    <ul>
                        <li className='d-inline-block'>
                            <a className='d-flex align-items-center' href="#">
                                <Notification/>
                            </a>
                        </li>
                        <li className='d-inline-block'>
                            <a className='d-flex align-items-center' href="#">
                                <Message/>
                            </a>
                        </li>
                        <li className='d-inline-block'>
                            <a className='d-flex align-items-center' href="#">
                                <Setting/>
                            </a>
                        </li>
                        <li className='d-inline-block'>
                            <a className='d-flex align-items-center' href="#">
                                <Profile/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div className="cards">
        <Card />
    </div>
    </>
  );
};

export default Dashboard;
