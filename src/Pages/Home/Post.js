import React from "react";
import "./Post.css";

const Post = () => {
  return (
    <div class="hero mb-20 shadow-xl ">
      <div class="hero-content flex-col lg:flex-row-reverse rounded-lg">
          <img
            src="https://beiing.netlify.app/assets/img/blog/26.jpg"
            class=" shadow-2xl rounded-full postImg"
            alt=""
          />
        <div>
          <button className="btn btn-xs btn-primary px-7 my-8">
            ওয়েব ডেভলপমেন্ট
          </button>
          <h1 class="text-4xl font-bold text-black ">পঁঞ্চ রত্নের Loop .</h1>
          <p class="my-8 text-black">
            LOOP জিনিসটা খুবি ইন্টারেষ্টিং একবার যদি বিষয়টির Concept Clear করতে
            পারেন । তাহলে হয়তোবা এর প্রেমেও পরে যেতে পারেন । আমরা বাস্তব জীবনে
            প্রতিদিন LOOP ব্যবহার করে আসছি । এখন মনে প্রশ্ন জেগেছে কোথায় ব্যবহার
            করি? আচ্ছা বলতেছি । আমরা যারা মুসলিম আছি তাদের উপর কিন্তু পাঁচ
            ওয়াক্ত নামাজ ফরজ করা হয়েছে। ফরজ এর কাজ কি ? ফরজ মানি হলো । কাজটি
            করতেই হবে । তাই আমাদের প্রতিদিন পাঁচ ওয়াক্ত নামাজ একই নিয়মে,
            নির্দিষ্ট সময়ে, একই রকম ভাবে পড়তে হয় । যেমন: প্রতিদিন ভোরে ফজরের
            নামাজ পড়া । এই যে পাঁচ ওয়াক্ত নামাজ আমাদের মৃতুআগ পর্যন্ত করতেই হবে
            প্রতিদিন ।
          </p>
          <div className="flex flex-row text-base text-black ">
            <div class="avatar">
              <div class="rounded-full w-10 my-2 mr-4 ">
                <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>

            <div>
              Shamima Nijum <span className="text-4xl text-gray-500 ">. </span>2
              Days Ago <span className="text-4xl text-gray-500 ">. </span>3 Min
              Read
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
