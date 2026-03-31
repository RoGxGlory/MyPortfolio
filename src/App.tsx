import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// React Router requires the basename to NOT have a trailing slash.
// This gives "" in Lovable, and "/MyPortfolio" on GitHub Pages.
const routerBasename = import.meta.env.MODE === "production" ? "/MyPortfolio" : "";

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster />
            <Sonner />
            {/* Use our safely formatted basename here */}
            <BrowserRouter basename={routerBasename}>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/project/:projectId" element={<ProjectDetail />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;