
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-datashield-blue to-datashield-teal py-20 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Healthcare's Emerging Technology Hub
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in animate-delay-200">
            Your one-stop shop for cutting-edge healthcare technology solutions and products
          </p>
          <div className="animate-fade-in animate-delay-300">
            <Button size="lg" className="bg-white text-datashield-blue-dark hover:bg-gray-100 hover:text-datashield-blue">
              Explore Solutions
            </Button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16 animate-fade-in animate-delay-400">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 border border-white/20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
            We Bring Together Top Emerging Tech Solutions
          </h2>
          <p className="text-center text-lg opacity-90">
            DataShield partners with industry leaders to provide innovative solutions for hospitals, pharmaceutical companies, and medical technology developers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
