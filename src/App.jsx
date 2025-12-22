import { RouterProvider, createBrowserRouter } from "react-router-dom";

import About from "./pages/About";
import AppLayout from "./components/AppLayout";
import CelebrateWithUs from "./pages/CelebrateWithUs";
import Contact from "./pages/Contact";
import { ErrorPage } from "./pages/ErrorPage";
import Gallery from "./pages/Gallery";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import PDD from "./pages/PDD";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import BlogCardOne from "./components/BlogCardOne";
import ReverseEngineering from "./pages/Services/ReverseEngineering";
import CADConversion from "./pages/Services/CADConversion";
import PrintingProto from "./pages/Services/PrintingProto";
import ScanningSection from "./pages/Services/ScanningSection";
import FEA from "./pages/Services/FEA";
import ManufactureSection from "./components/Card/ManufactureSection";
import ProductRendering from "./pages/Services/ProductRendering";
import BlogCardTwo from "./components/Blog/BlogTwo";
import BlogCardThree from "./components/Blog/BlogThree";
import BlogCardFour from "./components/Blog/BlogFour";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },

        // Services
        { path: "/services", element: <Services /> },

        // Individual service routes
        { path: "/services/product-design-dva", element: <PDD /> },
        { path: "/services/reverse-engineering", element: <ReverseEngineering /> },
        { path: "/services/cad-data-conversion", element: <CADConversion /> },
        { path: "/services/3d-printing-rapid-prototyping", element: <PrintingProto /> },
        { path: "/services/3d-scanning-benchmarking", element: <ScanningSection /> },
        { path: "/services/fea", element: <FEA /> },
        { path: "/services/manufacturing-prototyping", element: <ManufactureSection /> },
        { path: "/services/product-rendering-technical-animation", element: <ProductRendering /> },
       
       
        { path: "/blog", element: <Blog /> },
        { path: "/blog/cardone", element: <BlogCardOne /> },
        { path: "/blog/cardtwo", element: <BlogCardTwo /> },
        { path: "/blog/cardthree", element: <BlogCardThree /> },
        { path: "/blog/cardfour", element: <BlogCardFour /> },
        { path: "/menu", element: <Menu /> },
        { path: "/celebratewithus", element: <CelebrateWithUs /> },
        { path: "/gallery", element: <Gallery /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
