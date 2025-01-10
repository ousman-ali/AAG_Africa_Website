import React from 'react';
import SingleRecentPost from './SingleRecentPost';

const RecentPostsWidget = ({ recentPosts = [] }) => {
  

  return (
    <div className="sidebar-item recent-post">
      <h4 className="title">Recent Posts</h4>
      <ul>
        {recentPosts.slice(0, 6).map((blog) => (
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
            <Link href={`/blog-single/${blog.slug}`}>{blog.eventName}</Link>
          </div>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentPostsWidget;
