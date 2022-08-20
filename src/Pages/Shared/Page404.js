import React from 'react';

const Page404 = () => {
    return (
        <div className='flex flex-col text-4xl container my-10 justify-center items-center'>
            <div className='px-10'>
                <h1> SORRY ! </h1>
                <h1>THIS PAGE IS NOT FOUND ....</h1>
            </div>
            
            <img
                className=''
                width='750px' 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhKYcP81BsVy2VHt7Mm3R5FbgfqO_hNjLuzA&usqp=CAU" alt="" />
        </div>
    );
};

export default Page404;