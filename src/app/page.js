import Banner from "@/components/landingPage/Banner";
import About from "@/components/landingPage/About";
import Service from "@/components/landingPage/Service";
import ChooseUs from "@/components/landingPage/ChooseUs";
import Blog from "@/components/landingPage/Blog";
import Cta from "@/components/landingPage/Cta";
import Product from "@/components/landingPage/Product";
import Testimonial from "@/components/landingPage/Testimonial";
import Brand from "@/components/landingPage/Brand";

export default function HomePage() {
  return (
    <>
      <Banner />
      <About />
      <ChooseUs />
      <Service />
      <Testimonial />
      <Product />
      <Cta />
      <Blog />
      <Brand sectionClass="default-padding" />
    </>
  );
}
