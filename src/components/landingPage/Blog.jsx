"use client"
import React, { useEffect, useState } from 'react';
import SingleBlog3Column from './SingleBlog3Column';
import axios from 'axios';

const Blog = () => {


    const [blogData, setBlogData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/event_list`
                );
                setBlogData(data);
            } catch (error) {
                console.error("Error fetching blog data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <div className="blog-area blog-grid default-padding">
                <div className="container">
                    <div className="blog-item-box">
                        <div className="row">
                            {blogData.slice(0, 3).map(blog =>
                                <div className="col-xl-4 col-md-6 single-item" key={blog.id}>
                                    <SingleBlog3Column blog={blog} />
                                </div>
                            )}
                        </div>
                    </div>

                    
                </div>
            </div>
        </>
    );
};

export default Blog;