"use client"
import React, { useEffect, useState } from 'react';
import Pagination from '../../pagination/Pagination';
import SingleBlog3Column from './SingleBlog3Column';
import axios from 'axios';
import Link from 'next/link';

const Blog = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [blogData, setBlogData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [allblogData, setAllBlogData] = useState([]);

    const itemsPerPage = 6;

    const handleSmoothScroll = (page) => {
        // e.preventDefault();
        setCurrentPage(page);
        setBlogData(allblogData.slice((page - 1) * itemsPerPage, page * itemsPerPage));
        window.scrollTo({ behavior: 'smooth', top: 0 });
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/event_list`);
                setTotalPages(Math.ceil(data.length / itemsPerPage));
                setBlogData(data);
                setAllBlogData(data);
                setBlogData(data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
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
                            {blogData.slice(0, 6).map(blog =>
                                <div className="col-xl-4 col-md-6 single-item" key={blog.id}>
                                    <SingleBlog3Column blog={blog} />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 pagi-area text-center">
                            <nav aria-label="navigation">
                                {totalPages > 1 && (
                                    <ul className="pagination">
                                        <li className="page-item"><Link className="page-link" href="#" onClick={() => handleSmoothScroll(currentPage-1)}><i className="fas fa-angle-double-left"></i></Link></li>
                                        {Array.from({ length: totalPages }, (_, index) => (
                                            <li className={`page-item ${currentPage === index + 1 ? "active" : ""}`} >
                                                <Link href="#" className="page-link"
                                                    key={index}
                                                    onClick={() => handleSmoothScroll(index + 1)}
                                                    disabled={currentPage === index + 1}
                                                >
                                                    {index + 1}
                                                </Link>
                                            </li>
                                        ))}
                                        <li className="page-item"><Link className="page-link" href="#" onClick={() => handleSmoothScroll(currentPage+1)}><i className="fas fa-angle-double-right"></i></Link></li>
                                    </ul>
                                )}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;