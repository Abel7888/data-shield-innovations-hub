
import { 
  Activity, Building, Flask, TestTube, Microscope, Database,
  Dna, Shield, Video, HeartPulse, Stethoscope
} from "lucide-react";
import SolutionCard from "./SolutionCard";

interface Solution {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SolutionsSection = () => {
  const hospitalSolutions: Solution[] = [
    {
      title: "Digital Twin for Hospital Operations",
      description: "Real-time digital replicas of hospital operations to optimize resource allocation and patient flow.",
      icon: <Building className="h-10 w-10" />
    },
    {
      title: "AI-assisted Surgical Robotics",
      description: "Robotic systems enhanced with AI for precision surgeries and reduced recovery times.",
      icon: <Microscope className="h-10 w-10" />
    },
    {
      title: "Virtual Care Platforms with Remote Monitoring",
      description: "Integrated platforms for telehealth, remote diagnostics, and patient monitoring.",
      icon: <HeartPulse className="h-10 w-10" />
    },
    {
      title: "AI-powered Diagnostics & Imaging Platforms",
      description: "AI solutions for early detection in radiology, pathology, and cardiology.",
      icon: <Activity className="h-10 w-10" />
    }
  ];

  const pharmaSolutions: Solution[] = [
    {
      title: "AI-driven Drug Discovery Platforms",
      description: "Accelerate molecule screening, target identification, and lead optimization using AI.",
      icon: <Flask className="h-10 w-10" />
    },
    {
      title: "Continuous Manufacturing Systems (CM)",
      description: "End-to-end continuous production lines for faster, flexible pharmaceutical manufacturing.",
      icon: <TestTube className="h-10 w-10" />
    },
    {
      title: "Blockchain for Supply Chain Integrity",
      description: "Secure, transparent tracking of raw materials, production batches, and distribution networks.",
      icon: <Shield className="h-10 w-10" />
    }
  ];

  const medtechSolutions: Solution[] = [
    {
      title: "3D Bioprinting of Medical Devices",
      description: "On-demand printing of implants, prosthetics, and custom medical components.",
      icon: <Dna className="h-10 w-10" />
    },
    {
      title: "Smart Wearable Device Manufacturing Platforms",
      description: "Scalable platforms for developing next-gen health monitoring wearables.",
      icon: <Database className="h-10 w-10" />
    },
    {
      title: "AR/VR-assisted Device Training & Prototyping",
      description: "Use of augmented and virtual reality in device prototyping, testing, and clinical training.",
      icon: <Video className="h-10 w-10" />
    }
  ];

  return (
    <section className="py-20 bg-datashield-gray-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-datashield-gray-dark">
          Our Healthcare Technology Solutions
        </h2>
        
        {/* Hospitals & Clinics Section */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-10">
            <div className="h-16 w-16 rounded-full bg-datashield-blue text-white flex items-center justify-center mr-4">
              <Building className="h-8 w-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-datashield-gray-dark">Hospitals & Clinics</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hospitalSolutions.map((solution) => (
              <SolutionCard
                key={solution.title}
                title={solution.title}
                description={solution.description}
                icon={solution.icon}
                category="Hospitals & Clinics"
              />
            ))}
          </div>
        </div>
        
        {/* Pharma Section */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-10">
            <div className="h-16 w-16 rounded-full bg-datashield-teal text-white flex items-center justify-center mr-4">
              <Flask className="h-8 w-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-datashield-gray-dark">Pharma</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pharmaSolutions.map((solution) => (
              <SolutionCard
                key={solution.title}
                title={solution.title}
                description={solution.description}
                icon={solution.icon}
                category="Pharma"
              />
            ))}
          </div>
        </div>
        
        {/* MedTech Section */}
        <div>
          <div className="flex items-center justify-center mb-10">
            <div className="h-16 w-16 rounded-full bg-datashield-purple text-white flex items-center justify-center mr-4">
              <Microscope className="h-8 w-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-datashield-gray-dark">MedTech</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {medtechSolutions.map((solution) => (
              <SolutionCard
                key={solution.title}
                title={solution.title}
                description={solution.description}
                icon={solution.icon}
                category="MedTech"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
