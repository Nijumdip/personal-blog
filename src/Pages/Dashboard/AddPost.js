// import React from 'react';
// import { useForm } from "react-hook-form";
// import {useState, useRef, useMemo} from 'react';
// import JoditEditor from "jodit-react";


// const AddPost = ({placeholder}) => {
//     // const { register, handleSubmit } = useForm();
//     // const onSubmit = data => {
//     //     console.log(data)
//     // };
  
  
//     const editor = useRef(null)
//     const [content, setContent] = useState('')

//     const config = useMemo({
//         readonly: false // all options from https://xdsoft.net/jodit/doc/,
//         placeholder: placeholder || 'Start typings...'
//     }, [placeholder])

//   return (
//       <div>
//         {/* <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
//         <div>
//           <input
//               {...register("file")}
//               type="file"
//               required
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//           />
//         </div>

//         <div>
//           <input
//             {...register("text")}
//             type="text"
//             placeholder="Heading"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//             required
//           />
//         </div>
//         <div>
//           <input
//             {...register("text")}
//             type="text"
//             placeholder="Description"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//             required
//           />
//         </div>
//         <div>
//           <input
//             {...register("text")}
//             type="text"
            
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className=" w-full flex justify-center items-center text-white bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
//         >
//           submit
//         </button>
//         </form> */}
      
//         <JoditEditor
//                 ref={editor}
//                 value={content}
//                 config={config}
//         tabIndex={1} // tabIndex of textarea
//         onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
//                 onChange={newContent => {}}
//             />
        
//       </div>
//     );
// };

// export default AddPost;