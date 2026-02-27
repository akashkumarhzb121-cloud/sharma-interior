import { Routes, Route } from "react-router-dom";
import {
  Home, Company, CustomDesign, DesignBuild, Products,
  Offers, Projects, Gallery, Contact, FAQ,
  Careers, Refer, CSR, AnnualReturn, Sitemap,
} from "../pages";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/company" element={<Company />} />
    <Route path="/custom" element={<CustomDesign />} />
    <Route path="/design-build" element={<DesignBuild />} />
    <Route path="/products" element={<Products />} />
    <Route path="/offers" element={<Offers />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/faq" element={<FAQ />} />
    <Route path="/careers" element={<Careers />} />
    <Route path="/refer" element={<Refer />} />
    <Route path="/csr" element={<CSR />} />
    <Route path="/annual-return" element={<AnnualReturn />} />
    <Route path="/sitemap" element={<Sitemap />} />
  </Routes>
);

export default AppRoutes;
