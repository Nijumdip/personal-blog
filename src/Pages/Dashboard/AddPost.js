import React from "react";
import { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import { toast } from 'react-toastify';

const AddPost = ({ placeholder }) => {
  const editor = useRef(null);
//   const [content, setContent] = useState("");

  const config = {
    readonly: false,
    height: 500,
    placeholder: placeholder || "Start typings...",
   
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        const content= {
            description: editor.current.value
        }
        console.log(content);
        fetch('http://localhost:5000/api/blog', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(content),
        })
        .then(res => res.json())
      .then(data => {
        // console.log(data);
        if (data.acknowledged) {
          toast.success('your post added successfully');
        }
        else {
          toast.error('oops! any problem occurred plz try again')
        }
      });
    }

  return (
    <div className="text-black">
      <JoditEditor
        ref={editor}
        // value={content}
        config={config}
        tabIndex={1} // tabIndex of textarea
        // onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => {}}
      />
      <button
        onClick={handleSubmit}
        type="submit"
        className=" mt-5 w-full flex justify-center items-center text-white bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
      >
      Post This Blog
      </button>
    </div>
  );
};

export default AddPost;
