
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleContactTeam = () => {
    window.open('mailto:abelassefa19@gmail.com', '_blank');
  };

  return (
    <div className="bg-gradient-to-br from-datashield-blue to-datashield-teal text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            DataShield Healthcare Technologies
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
            Your one-stop shop for cutting-edge healthcare technology solutions and products
          </p>
          <p className="text-lg md:text-xl mb-10 opacity-80 max-w-3xl mx-auto animate-fade-in">
            We work with healthcare vendors and all size healthcare solutions providers to bridge production, demo, and selection. We research Gartner and top internet sources for top solution partners with emerging tech vendors to bring all together as a one-stop shop for emerging tech healthcare solutions and products.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-datashield-blue hover:bg-gray-100 font-semibold animate-fade-in"
            onClick={handleContactTeam}
          >
            Contact Our Team
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
