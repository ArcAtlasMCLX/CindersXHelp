import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import GuidesHub from "./pages/GuidesHub";
import InstallAppGuide from "./pages/InstallAppGuide";
import GettingStartedGuide from "./pages/GettingStartedGuide";
import SalesCoordinationGuide from "./pages/SalesCoordinationGuide";
import EstimatingGuide from "./pages/EstimatingGuide";
import ApprovalsConversionGuide from "./pages/ApprovalsConversionGuide";
import PlanningSchedulingGuide from "./pages/PlanningSchedulingGuide";
import FieldEngineersGuide from "./pages/FieldEngineersGuide";
import AdminSetupGuide from "./pages/AdminSetupGuide";
import ClientProposalsGuide from "./pages/ClientProposalsGuide";
import AdministrationGuide from "./pages/AdministrationGuide";
import BrandGuidelines from "./pages/BrandGuidelines";
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
      <Route path="/install-app" element={<InstallAppGuide />} />
      <Route path="/getting-started" element={<GettingStartedGuide />} />
      <Route path="/sales-coordination" element={<SalesCoordinationGuide />} />
      <Route path="/estimating" element={<EstimatingGuide />} />
      <Route path="/approvals-conversion" element={<ApprovalsConversionGuide />} />
      <Route path="/planning-scheduling" element={<PlanningSchedulingGuide />} />
      <Route path="/field-engineers" element={<FieldEngineersGuide />} />
      <Route path="/admin-setup" element={<AdminSetupGuide />} />
      <Route path="/client-proposals" element={<ClientProposalsGuide />} />
      <Route path="/administration" element={<AdministrationGuide />} />
      <Route path="/brand" element={<BrandGuidelines />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
