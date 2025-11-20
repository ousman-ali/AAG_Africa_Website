"use client";
import React, { useEffect, useState } from "react";
import logo from "@/assets/img/logo/logo3.png";
import Image from "next/image";
import Link from "next/link";

const HeaderLogo = ({ openMenu }) => {
  const [companies, setCompanies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

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

  const allLogos = [
    { id: "main", logo: logo.src },
    ...companies.map((c) => ({
      id: c.id,
      logo: `${process.env.NEXT_PUBLIC_API_URL}/storage/${c.logo}`,
    })),
  ];

  // REAL SMOOTH FLIP
  useEffect(() => {
    if (allLogos.length === 0) return;

    const interval = setInterval(() => {
      setIsFlipping(true);

      // switch logo exactly at mid-flip
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1 < allLogos.length ? prev + 1 : 0));
      }, 300); // half of animation duration

      // end flip
      setTimeout(() => setIsFlipping(false), 600);
    }, 6000);

    return () => clearInterval(interval);
  }, [allLogos.length]);

  return (
    <>
      <style>{`
        .logo-wrapper {
          perspective: 800px;
        }

        .logo-img {
          transition: transform 1.2s ease, opacity 1.2s ease;
          transform-style: preserve-3d;
        }

        .flip-out {
          transform: rotateY(90deg);
          opacity: 0;
        }

        .flip-in {
          transform: rotateY(0deg);
          opacity: 1;
        }
      `}</style>

      <div className="navbar-header">
        <button type="button" className="navbar-toggle" onClick={openMenu}>
          <i className="fa fa-bars"></i>
        </button>

        <Link
          className="navbar-brand"
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="logo-wrapper">
            <Image
              key={allLogos[currentIndex]?.logo}
              src={allLogos[currentIndex]?.logo || logo}
              alt="Logo"
              width={140}
              height={70}
              className={`logo-img ${isFlipping ? "flip-out" : "flip-in"}`}
              style={{
                width: "140px",
                height: "70px",
                objectFit: "contain",
                boxShadow: "0 0 4px rgba(0,0,0,0.25)",
                borderRadius: "6px",
              }}
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default HeaderLogo;
