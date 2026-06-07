import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import GuidesHub from "./pages/GuidesHub";
import GettingStartedGuide from "./pages/GettingStartedGuide";
import NotFound from "./pages/NotFound";

/** Scroll to the top whenever the route changes (guides are long pages). */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<GuidesHub />} />
      <Route path="/getting-started" element={<GettingStartedGuide />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
