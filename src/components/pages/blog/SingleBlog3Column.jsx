import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleBlog3Column = ({ blog }) => {
    const { id, thumb, date, author, authorIcon, title, btnIcon, btnText } = blog

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
    };

    return (
        <>
            <div className="blog-style-one">
                <div className="thumb">
                    <Link href={`/blog-single/${blog.slug}`}>
                        <Image src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${blog.banner}`} width={800} height={600} alt="Thumb" />
                    </Link>
                </div>
                <div className="info">
                    <div className="blog-meta">
                        <ul>
                            <li>
                                <i className="far fa-user-circle"></i>
                                <Link href="#">Admin</Link>
                            </li>
                            <li>{formatDate(blog.updated_at)}</li>
                        </ul>
                    </div>
                    <h4>
                        <Link href={`/blog-single/${blog.slug}`}>{blog.eventName}</Link>
                    </h4>
                    <Link href={`/blog-single/${blog.slug}`} className="btn-simple"><i className="fas fa-angle-right"></i>Read More</Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlog3Column;