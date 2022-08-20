import { Label } from 'flowbite-react';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Dashboard = () => {
    return (
        <div>
            <div className='flex flex-row justify-center content-start'>
                
                <aside  className="w-64" aria-label="Sidebar">
                    <div className="overflow-y-auto py-4 px-3">
                        <ul className="space-y-2">
                            <li>
                                <Link to="/dashboard" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSohVcrToMSmQi3PtlWIBdVTn9IHvl_toqSCw&usqp=CAU" alt="" />
                                    <span className="ml-3">Add Categories</span>
                                </Link>
                            </li>
                            
                            <li>
                                <Link to="/dashboard/addPost" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJm46nViy_IoyQj0En5NSQgFdxge9AiC7P_mF_Bj4&usqp=CAU" alt="" />
                                    <span className="ml-3">Add Post</span>
                                </Link>
                            </li>
                            
                            <li>
                                <Link to="/dashboard/extraRoute" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxL8SSBHriEZ-Vs8WQMSqCTCTZ2yDD81jd0g&usqp=CAU" alt="" />
                                    <span className="ml-3">Add Admin</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </aside>
                <div className=" w-4/5 pt-10">
                    <div className=" flex flex-col justify-center items-center px-4 ">
                        <h2 className='text-xl text-amber-500 font-bold'>Dashboard</h2>
                        <Outlet />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Dashboard;