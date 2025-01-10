import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SocialShare from '../../utilities/SocialShare';

import SearchWidget from '@/components/widgets/SearchWidget';
import RecentPostsWidget from '../../widgets/RecentPostsWidget';
import CategoryWidget from '../../widgets/CategoryWidget';
import GalleryWidget from '../../widgets/GalleryWidget';
import ArchiveWidget from '../../widgets/ArchiveWidget';
import FollowWidget from '../../widgets/FollowWidget';
import TagsWidget from '../../widgets/TagsWidget';
import team2Thumb from '@/assets/img/teams/2.jpg'
import InnerCta from '@/components/landingPage/InnerCta';

const BlogSingleWithSidebarContent = ({ serviceInfo, allServices }) => {
    

    return (
        <>
            <div className="blog-area single full-blog right-sidebar full-blog default-padding">
                <div className="container">
                    <div className="blog-items">
                        <div className="row">
                            <div className="blog-content col-xl-8 col-lg-7 col-md-12 pr-35 pr-md-15 pl-md-15 pr-xs-15 pl-xs-15">
                                <div className="blog-style-two item">
                                    <div className="blog-item-box">
                                        <div className="thumb">
                                            <Link href="#"><Image src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${serviceInfo?.banner}`} alt="Thumb" width={1900} height={995} objectFit='cover' /></Link>
                                        </div>
                                        <div className="info">
                                            <div className="meta">
                                                <ul>
                                                    {/* <li>
                                                        <Link href="#"><i className={dateIcon}></i> {date}</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#"><i className={authorIcon}></i> {author}</Link>
                                                    </li> */}
                                                </ul>
                                            </div>
                                            <p dangerouslySetInnerHTML={{ __html: serviceInfo?.description }} > 
                                               
                                            </p>
                                            <p dangerouslySetInnerHTML={{ __html: serviceInfo?.details }} />
                                                
                                           
                                        </div>
                                    </div>
                                </div>
                               
                                
                            </div>


                            <div className="sidebar col-xl-4 col-lg-5 col-md-12 mt-md-50 mt-xs-50">
                                <aside>
                                    <SearchWidget />
                                    <div className="sidebar-item recent-post">
      <h4 className="title">Recent Posts</h4>
      <ul>
        {allServices.slice(0, 6).map((blog) => (
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
                                    <InnerCta />
                                </aside>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogSingleWithSidebarContent;