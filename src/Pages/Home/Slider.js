import React from 'react';

const Slider = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className="carousel w-4/5 h-screen">
                <div id="slide1" className="carousel-item relative w-full h-5/6 bg-gray-300">
                    
                        <div className="z-10 absolute translate-x-28 translate-y-36">
                            <button className="btn btn-xs btn-primary px-7">
                                শিক্ষা / কেরিয়ার
                            </button>
                            <h1 className='text-4xl font-bold text-black leading-normal'>
                                The Biggest <br />
                                Platform 2022 <br />
                                for web Development <br />
                            </h1>
                            <h6 className='text-base text-black my-5 font-normal'>
                                Shamima Nijum
                            </h6>
                        </div>
                    
                        <div className='z-0 translate-x-80 translate-y-7'>
                            <img
                                width={'450px'}
                                src="https://beiing.netlify.app/assets/img/blog/27.jpg"
                                className="rounded-full" alt='' 
                            />
                        </div>
                    
                        <div className="absolute flex justify-between gap-2 right-0 bottom-7">
                            <a href="#slide3" className="btn btn-accent btn-circle">❮❮</a> 
                            <a href="#slide2" className="btn btn-accent btn-circle">❯❯</a>
                        </div>
                    
                </div> 

                <div id="slide2" className="carousel-item relative w-full h-5/6 bg-gray-300">
                    <div className='z-10 absolute translate-x-28 translate-y-36'>
                        <button className="btn btn-xs btn-primary px-5">
                        ওয়েব ডেভলপমেন্ট 
                        </button>
                        <h1 className='text-4xl font-bold text-black leading-normal'>
                            The Biggest <br />
                            Platform 2022 <br />
                            for web Development <br />
                        </h1>
                        <h6 className='text-base text-black my-5 font-normal'>
                            Shamima Nijum
                        </h6>
                    </div>

                    <div className='z-0 absolute translate-x-80 translate-y-7'>
                        <img
                            width={'450px'}
                            src="https://beiing.netlify.app/assets/img/blog/4.jpg"
                            className="width: 450px rounded-full"
                            alt=''
                        />
                    </div>

                    <div className="absolute flex justify-between gap-2 right-0 bottom-7">
                        <a href="#slide1" className="btn btn-accent btn-circle">❮❮</a> 
                        <a href="#slide3" className="btn btn-accent btn-circle">❯❯</a>
                    </div>
                </div> 

                <div id="slide3" className="carousel-item relative w-full h-5/6 bg-gray-300">
                    <div className='absolute z-10 translate-x-28 translate-y-36'>
                        <button className="btn btn-xs btn-primary px-7">
                        গুরুত্বপূর্ণ রিসোর্স
                        </button>
                        <h1 className='text-4xl font-bold text-black leading-normal'>
                            The Biggest <br />
                            Platform 2022 <br />
                            for web Development <br />
                        </h1>
                        <h6 className='text-base text-black my-5 font-normal'>
                            Shamima Nijum
                        </h6>
                    </div>
                    <div className='absolute translate-x-80 translate-y-7'>
                        <img
                            width={'450px'}
                            src="https://beiing.netlify.app/assets/img/blog/32.jpg" className="width: 450px rounded-full"
                            alt=''
                        />
                    </div>
                    <div className="absolute flex justify-between gap-2 right-0 bottom-7">
                        <a href="#slide2" className="btn btn-accent btn-circle">❮❮</a> 
                        <a href="#slide1" className="btn btn-accent btn-circle">❯❯</a>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Slider;