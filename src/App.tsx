import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer";
import useLocalizeDocumentAttributes from "./hooks/common/ui/useLocalizeDocumentAttributes";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/common/loader/Loader";
import FixedBtn from "./components/common/buttons/FixedBtn";
const Home = lazy(() => import("./app/home/page"));
const About = lazy(() => import("./app/about/page"));
const Contact = lazy(() => import("./app/contact/page"));
const Services = lazy(() => import("./app/services/page"));
const Service = lazy(() => import("./app/service/page"));
const Works = lazy(() => import("./app/works/page"));
const Work = lazy(() => import("./app/work/page"));
const NotFound = lazy(() => import("./app/not-found/page"));
const App = () => {
  useLocalizeDocumentAttributes();
  return (
    <div>
      <Suspense fallback={
        <div className="w-screen h-screen flex justify-center items-center">
          <Loader />
        </div>
      }>
        <FixedBtn />
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<Service />} />
            <Route path="/portfolio" element={<Works />} />
            <Route path="/portfolio/:id" element={<Work />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Suspense>


    </div>
  )
}

export default App