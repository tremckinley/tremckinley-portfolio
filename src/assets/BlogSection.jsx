import BlogPost from "./BlogPost/BlogPost";
import { blogs } from "../utils/blogs";


export default function BlogSection() {
    return (
        <>
        <h3 className="text-2xl font-bold text-accent-secondary mb-6">Featured Articles</h3>
        <section>
        <div className="flex flex-wrap justify-center">
            {!blogs ? <p>Error: Projects not loaded</p> : 
                blogs.map((blog) => {
                    return(
                    <BlogPost key={blog.title} blog={blog} />
                )
                })
            }

        </div>
        </section>
        </>
    )
}