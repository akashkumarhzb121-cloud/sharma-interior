import { BrowserRouter as Router } from "react-router-dom";
import { Header, Footer } from "./components/layout";
import AppRoutes from "./routes/AppRoutes";

const App = () => (
  <Router>
    <div className="min-h-dvh bg-white text-gray-800">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  </Router>
);

export default App;
