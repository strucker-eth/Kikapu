import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
    <main className="lg:px-20 xl:px-20 text-navyBlue">
      <Head>
        <title>Kikapu Finance</title>
        <meta
          name="description"
          content="Kikapu is a Modern Financial Management Tool"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Kikapu Benefits"
        title=" Why Choose Kikapu for Your Financial Management"
        className="text-navyBlue">
       Kikapu is your ultimate companion in the world of financial management. Whether you're an individual or a business owner, take full control of your finances with Kikapu. This powerful tool provides you with the necessary features and insights to track, analyze, and optimize your financial activities effectively. 
      </SectionTitle>
      <Benefits data={benefitOne}  className="text-navyBlue"/>
      <Benefits imgPos="right" data={benefitTwo} className="text-navyBlue"/>
      
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
      
      </SectionTitle>
      <Testimonials  className="text-navyBlue" />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        
      </SectionTitle>
      <Faq  className="text-navyBlue" />
      <Cta  className="" />
      <Footer  className="text-navyBlue" />
      <PopupWidget  className="text-navyBlue" />
      </main>
    </>
  );
}

export default Home;