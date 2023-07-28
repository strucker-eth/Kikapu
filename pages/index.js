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
        title=" Why Choose Kikapu for Your Financial Management">
       Kikapu is your ultimate companion in the world of financial management. Whether you're an individual or a business owner, take full control of your finances with Kikapu. This powerful tool provides you with the necessary features and insights to track, analyze, and optimize your financial activities effectively. 
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
      
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;