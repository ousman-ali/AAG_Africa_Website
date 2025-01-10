
"use client"
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Services2Data from '@/assets/jsonData/services/Services2Data.json';
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import ServiceDetails from '@/components/pages/service-details/ServiceDetails';
import BlogSingleWithSidebarContent from "@/components/pages/blog-details/BlogSingleWithSidebarContent";
import ProductDetails from "@/components/pages/product-details/ProductDetails";

const BlogDetailsPage = () => {
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    if (!slug) {
      console.log(slug)
      return;
    }

    const fetchProductDetails = async () => {
      try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products-list`);
        const currentProduct = data.find((svc) => svc.slug === slug);
        currentProduct.images = typeof currentProduct.images === 'string'
          ? JSON.parse(currentProduct.images)
          : currentProduct.images;
        setProduct(currentProduct);
        setRelatedProducts(data.filter((svc) => (svc.slug !== slug && currentProduct.category_id === svc.category_id)).slice(-6));
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [slug]);

    return (
        <>
            <BreadCrumb breadCrumb={product?.title} title={product?.title} />
           <ProductDetails productInfo={product} relatedProducts={relatedProducts} a/>
        </>
    );
};

export default BlogDetailsPage;
