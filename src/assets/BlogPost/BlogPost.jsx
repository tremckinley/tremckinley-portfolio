//import React from 'react';
import { motion } from "motion/react";

export default function BlogPost(props) {
    const {blog} = props;
    return (
        <div className=" overflow-clip md:w-1/3 w-full m-2 border-2 accent rounded-sm md:flex-row flex-col  bg-[#dfdfdf]/20 hover:bg-accent-secondary/10 hover:border-accent-secondary shadow-sm shadow-[peru]">
            <div className=" border-b flex">
            <a href={blog.linkUrl} target="_blank" className="w-full overflow-clip max-h-48">
            <motion.img 
          whileHover={{scale: 1.3}}
          transition={{duration: .2}}
          className="w-full md:min-w-60 h-full md:max-h-48 md:object-center" 
          src={blog.imageUrl}
          alt="project screenshot"
        />
        </a>
        </div>
            <div className="p-2">
                <h4 className="text-gray-800 pt-1 w-full max-w-fit border-b text-xl font-roboto font-bold">{blog.title}</h4>
                <p className="text-sm italic">{blog.date}</p>
                <h5 className="my-2">{blog.desc}</h5>
                <a href={blog.linkUrl} className="hover:text-accent hover:underline mt-4 my-2 w-full text-gray-600" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-up-right-from-square text-xs m-1"></i> {blog.linkText}
                </a>
            </div>
        </div>
    );
};

