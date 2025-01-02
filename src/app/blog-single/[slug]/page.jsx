
import BlogSingleContent from '@/components/blog/BlogSingleContent';
import React from 'react';
import blogData from '@/assets/jsonData/blog/BlogData.json';
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';

export const metadata = {
    title: "Consua - Consulting Business - Blog Single"
}

const BlogSingle = ({ params }) => {

    const { id } = params
    const data = blogData.find(blog => blog.id === parseInt(id))

    return (
        <>
            <BreadCrumb breadCrumb="blog-single" title="Blog Single" />
                <BlogSingleContent blogInfo={data} />
            
        </>
    );
};

export default BlogSingle;