import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteLoading } from "@/components/ui/site-loading";
import { useState } from "react";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(() => {
    // Vérifie si l'animation a déjà été vue dans cette session
    const hasSeenLoading = sessionStorage.getItem('hasSeenLoading');
    return !hasSeenLoading;
  });




  const handleLoadingComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem('hasSeenLoading', 'true');
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {isLoading && <SiteLoading onComplete={handleLoadingComplete} />}
        {!isLoading && (
          <>
            <div className="cursor"></div>
            <Router />
          </>
        )}
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
