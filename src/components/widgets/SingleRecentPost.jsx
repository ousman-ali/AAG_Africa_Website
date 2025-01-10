"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const SingleRecentPost = ({ blog }) => {
  // Function to truncate the title for display
  const truncateString = (str) => {
    if (str.length <= 30) {
      return str;
    }
    return `${str.slice(0, 30)} ...`;
  };

  // Using blog.title for truncated title
  const truncatedTitle = truncateString(blog.title);

  return (
    <li>
      <div className="thumb">
        <Link href={`/blog-single/${blog.slug}`}>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${blog.banner}`}
            width={1900}
            height={995}
            alt="Thumb"
          />
        </Link>
      </div>
      <div className="info">
        <div className="meta-title">
          {/* Assuming blog has a 'postedDate' field */}
          <span className="post-date">{blog.crated_at}</span>
        </div>
        <Link href={`/blog-single/${blog.slug}`}>{truncatedTitle}</Link>
      </div>
    </li>
  );
};

export default SingleRecentPost;
