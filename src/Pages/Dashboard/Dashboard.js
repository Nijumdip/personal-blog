import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        
<aside class="w-64" aria-label="Sidebar">
<div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
   <ul class="space-y-2">
   
      <li>
         <Link to="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <img class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSohVcrToMSmQi3PtlWIBdVTn9IHvl_toqSCw&usqp=CAU" alt="" />
            <span class="ml-3">Add Categories</span>
         </Link>
      </li>
      
      <li>
         <Link to="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <img class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJm46nViy_IoyQj0En5NSQgFdxge9AiC7P_mF_Bj4&usqp=CAU" alt="" />
            <span class="ml-3">Add Post</span>
         </Link>
      </li>
      
      <li>
         <Link to="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <img class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxL8SSBHriEZ-Vs8WQMSqCTCTZ2yDD81jd0g&usqp=CAU" alt="" />
            <span class="ml-3">Extra Route</span>
         </Link>
      </li>
      

   </ul>
</div>
</aside>

    );
};

export default Dashboard;