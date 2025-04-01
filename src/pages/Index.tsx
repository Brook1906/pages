
import React from 'react';
import WaitlistForm from '../components/WaitlistForm';
import Benefits from '../components/Benefits';
import SocialProof from '../components/SocialProof';
import Logo from '../components/Logo';
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  const launchDate = "JANUARY 2024";
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col">
      <Toaster />
      
      <div className="container mx-auto p-4 sm:p-6 md:p-0 flex-grow flex flex-col">
        {/* Main content */}
        <div className="flex flex-col md:flex-row min-h-[90vh] items-center">
          {/* Left side with form */}
          <div className="w-full md:w-1/2 p-4 md:p-8 lg:p-12 order-2 md:order-1 animate-fade-in">
            <div className="mb-8 md:mb-12">
              <div className="flex justify-between items-center">
                <Logo />
                <span className="text-sm font-semibold text-accounting-secondary border border-accounting-secondary px-3 py-1 rounded-full">
                  LAUNCHING {launchDate}
                </span>
              </div>
            </div>
            
            <div className="mb-6 md:mb-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accounting-dark mb-3">
                Join Our Exclusive Waitlist
              </h1>
              <p className="text-muted-foreground">
                Be among the first to experience our revolutionary accounting services.
              </p>
            </div>
            
            <div className="mb-8">
              <WaitlistForm />
            </div>
            
            <SocialProof />
          </div>
          
          {/* Right side with image */}
          <div className="w-full md:w-1/2 h-[40vh] md:h-full relative order-1 md:order-2">
            <div className="absolute inset-0 bg-gradient-to-r from-accounting-primary/90 to-accounting-secondary/80 mix-blend-multiply z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1574" 
              alt="Serene landscape view" 
              className="object-cover h-full w-full" 
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white border border-white/20">
                <h3 className="font-semibold mb-2">Why Ascend Accounting?</h3>
                <p className="text-sm">Our innovative approach combines AI-powered insights with human expertise to provide unparalleled accounting services for modern businesses.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Benefits section */}
        <div className="w-full max-w-lg mx-auto py-10 px-4 md:px-0 md:py-16">
          <Benefits />
        </div>
        
        {/* Footer */}
        <footer className="py-6 border-t border-gray-200">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Ascend Accounting. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-accounting-primary hover:underline">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accounting-primary hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-accounting-accent font-medium hover:underline">
                Get the template - FREE
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
