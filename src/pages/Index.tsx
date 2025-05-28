
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

const Index = () => {
  const handleContactTeam = () => {
    window.open('mailto:abelassefa19@gmail.com', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* NavBar */}
      <nav className="bg-white shadow-sm border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-datashield-blue" />
              <span className="font-bold text-xl text-datashield-gray-dark">DataShield Healthcare</span>
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-datashield-gray-dark hover:text-datashield-blue font-medium">Solutions</a>
              <a href="#" className="text-datashield-gray-dark hover:text-datashield-blue font-medium">About Us</a>
              <a href="#" className="text-datashield-gray-dark hover:text-datashield-blue font-medium">Partners</a>
              <a href="#" className="text-datashield-gray-dark hover:text-datashield-blue font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="flex-grow">
        <HeroSection />
        <SolutionsSection />
        
        {/* CTA Section */}
        <section className="py-20 bg-datashield-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Healthcare Technology?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Partner with DataShield to access cutting-edge solutions that will revolutionize your healthcare operations.
            </p>
            <button 
              onClick={handleContactTeam}
              className="bg-white text-datashield-blue-dark hover:bg-gray-100 font-medium py-3 px-8 rounded-md shadow-lg"
            >
              Contact Our Team
            </button>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
