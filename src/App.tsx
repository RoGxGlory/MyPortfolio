import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Use Vite's BASE_URL so the router basename always matches the build base.
// "/" on Lovable & custom domain → "", "/MyPortfolio/" on GitHub Pages → "/MyPortfolio".
const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, "");

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