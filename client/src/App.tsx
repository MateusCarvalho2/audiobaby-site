/*
 * AudioBaby — App Root
 * Updated to include the Política de Privacidade page.  We import the
 * PrivacyPolicy component and register a new route at
 * "/politica-de-privacidade".  All other behaviour remains unchanged.
 */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ExamDetail from "./pages/ExamDetail";
import Equipe from "./pages/Equipe";
import Estrutura from "./pages/Estrutura";
import Exames from "./pages/Exames";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/exames/:slug"} component={ExamDetail} />
      <Route path={"/exames"} component={Exames} />
      <Route path={"/estrutura"} component={Estrutura} />
      <Route path={"/equipe"} component={Equipe} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/:slug"} component={BlogPost} />
      <Route path={"/politica-de-privacidade"} component={PrivacyPolicy} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <ScrollToTop />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
