"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SisterCompanies = () => {
  const [companies, setCompanies] = useState([]);
  const [maxCardHeight, setMaxCardHeight] = useState(0);
  const [maxImageHeight, setMaxImageHeight] = useState(0);
  const [expanded, setExpanded] = useState({}); // <-- for read more
  const cardRefs = useRef([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    const getCompanies = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/sister-companies-list`
        );
        const data = await res.json();
        setCompanies(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    getCompanies();
  }, []);

  useEffect(() => {
    if (companies.length === 0) return;

    const cardHeights = cardRefs.current.map((ref) =>
      ref ? ref.offsetHeight : 0
    );
    setMaxCardHeight(Math.max(...cardHeights));

    const imageHeights = imageRefs.current.map((ref) =>
      ref ? ref.offsetHeight : 0
    );
    setMaxImageHeight(Math.max(...imageHeights));
  }, [companies]);

  const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/storage/`;

  const toggleReadMore = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const stripHtml = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]+>/g, "");
  };

  return (
    <div className="container my-3">
      <div className="row mb-4">
        <div className="col text-center">
          <h4 className="text-uppercase text-secondary">Our Network</h4>
          <h2 className="fw-bold text-dark">Sister Companies</h2>
        </div>
      </div>

      <div className="row">
        {companies.map((company, index) => {
          const isExpanded = expanded[company.id] ?? false;
          const description = company.description || "";
          const cleanedDescription = stripHtml(description);
          const cleanedShortText = cleanedDescription.slice(0, 60);

          return (
            <div className="col-md-6 mb-4" key={company.id}>
              <div
                className="card h-100 border-0 shadow-lg bg-dark bg-opacity-75 text-light"
                ref={(el) => (cardRefs.current[index] = el)}
                style={{
                  height: maxCardHeight > 0 ? `${maxCardHeight}px` : "auto",
                }}
              >
                {/* IMAGE SECTION */}
                <div className="position-relative">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}
                    loop
                  >
                    {/* Main Image */}
                    {company.image && (
                      <SwiperSlide>
                        <Image
                          src={baseURL + company.image}
                          alt={company.name}
                          width={800}
                          height={200}
                          className="w-100"
                          ref={(el) => (imageRefs.current[index] = el)}
                          style={{
                            height:
                              maxImageHeight > 0
                                ? `${maxImageHeight}px`
                                : "200px",
                            objectFit: "cover", // <-- FULL WIDTH + FULL HEIGHT (like previous)
                          }}
                        />
                      </SwiperSlide>
                    )}

                    {/* Gallery Images */}
                    {company.images?.map((img, imgIndex) => (
                      <SwiperSlide key={imgIndex}>
                        <Image
                          src={baseURL + img}
                          alt="Gallery"
                          width={800}
                          height={250}
                          className="w-100"
                          style={{
                            height:
                              maxImageHeight > 0
                                ? `${maxImageHeight}px`
                                : "250px",
                            objectFit: "cover", // <-- make gallery consistent
                          }}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* OVERLAY LOGO */}
                  {company.logo && (
                    <div
                      className="position-absolute top-100 start-50 translate-middle"
                      style={{ zIndex: 10 }}
                    >
                      <Image
                        src={baseURL + company.logo}
                        alt="Logo"
                        width={80}
                        height={80}
                        className="rounded-circle border border-3 border-light shadow"
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="card-body mt-5 text-center">
                  <h4
                    className="fw-bold text-light"
                    style={{
                      marginTop: "5px",
                    }}
                  >
                    {company.name}
                  </h4>

                  {/* FLEX ROW: Address | Location | Website | Map */}
                  <div
                    className="d-flex flex-wrap justify-content-start mt-2 text-secondary"
                    style={{
                      lineHeight: "1.2", // reduce line height
                      gap: "4px 8px", // tight spacing (row-gap, column-gap)
                    }}
                  >
                    {company.location && (
                      <div>
                        <strong className="text-light">Location:</strong>{" "}
                        {company.location ?? "N/A"}
                      </div>
                    )}

                    {company.address && (
                      <div>
                        <strong className="text-light">Address:</strong>{" "}
                        {company.address ?? "N/A"}
                      </div>
                    )}

                    {company.website_url && (
                      <div>
                        <Link
                          href={company.website_url}
                          target="_blank"
                          className="text-info text-decoration-underline"
                        >
                          Website
                        </Link>
                      </div>
                    )}

                    {company.map_url && (
                      <div>
                        <Link
                          href={company.map_url}
                          target="_blank"
                          className="text-warning text-decoration-underline"
                        >
                          Map
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* DESCRIPTION WITH READ MORE */}
                  <p
                    className="small mt-3"
                    style={{
                      lineHeight: window.innerWidth > 768 ? "20px" : "15px",
                      textAlign: "justify",
                    }}
                  >
                    {isExpanded
                      ? cleanedDescription + " "
                      : cleanedShortText + "..."}

                    {cleanedDescription.length > 60 && (
                      <button
                        className="p-0 m-0 border-0 bg-transparent text-info small"
                        style={{ cursor: "pointer" }}
                        onClick={() => toggleReadMore(company.id)}
                      >
                        {isExpanded ? (
                          <>
                            Less <span style={{ fontSize: "10px" }}>▲</span>
                          </>
                        ) : (
                          <>
                            More <span style={{ fontSize: "10px" }}>▼</span>
                          </>
                        )}
                      </button>
                    )}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SisterCompanies;
