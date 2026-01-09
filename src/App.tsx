import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Cart from "./pages/Cart";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import Setup from "./pages/Setup";
import Updates from "./pages/Updates";
import UpdateDetail from "./pages/UpdateDetail";
import TermsOfService from "./pages/TermsOfService";
import ReturnPolicy from "./pages/ReturnPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Orders from "./pages/Orders";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFailed from "./pages/PaymentFailed";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/setup" element={<Setup />} />
              <Route path="/updates" element={<Updates />} />
              <Route path="/updates/:id" element={<UpdateDetail />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/payment-success" element={<PaymentSuccess />} />
              <Route path="/payment-failed" element={<PaymentFailed />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/return-policy" element={<ReturnPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;