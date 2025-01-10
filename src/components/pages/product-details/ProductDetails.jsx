import Image from 'next/image';
import React from 'react';
import Faq1Data from '@/assets/jsonData/faq/Faq1Data.json';
import Link from 'next/link';
import handleSmoothScroll from '../../utilities/handleSmoothScroll';
import InnerCta from '@/components/landingPage/InnerCta';

const ProductDetails = ({ productInfo, relatedProducts }) => {
    return (
        <>
            <div className="services-details-area overflow-hidden default-padding">
                <div className="container">
                    <div className="services-details-items">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7 order-lg-last pl-50 pl-md-15 pl-xs-15">
                                <div className="thumb">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${productInfo?.banner}`}
                                        alt="Thumb"
                                        width={1460}
                                        height={782}
                                        objectFit="cover"
                                    />
                                </div>
                                <h2>{productInfo?.title}</h2>
                                <p dangerouslySetInnerHTML={{ __html: productInfo?.description }}></p>
                                <div className="features mt-10 mt-xs-30 mb-30 mb-xs-20">
                                    <p dangerouslySetInnerHTML={{ __html: productInfo?.details }} />
                                </div>
                                <div className="row">
                                                {productInfo?.images?.slice(0,3).map((image, index) => (
                                                  <div key={index} className="col-xl-4 col-md-6 single-item">
                                                    <div className="blog-style-one">
                                                      <div className="thumb">
                                                        <Image
                                                          src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${image}`}
                                                          width={800}
                                                          height={600}
                                                          alt="Thumb"
                                                        />
                                                      </div>
                                                    </div>
                                                  </div>
                                                ))}
                                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-5 mt-md-120 mt-xs-50 services-sidebar">
                            {relatedProducts?.length > 0 && (
                                
                                    <div className="single-widget services-list-widget">
                                        <h4 className="widget-title">Related Products</h4>
                                        <div className="content">
                                            <ul>
                                                {relatedProducts.map((product, index) => (
                                                    <li key={index}>
                                                        <Link href={`/product-details/${product.slug}`}>
                                                            {product.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                               )} 
                               <InnerCta />
                               </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
