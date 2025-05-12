
import { Button } from "@/components/ui/button";
import { useState } from "react";
import RequestDemoModal from "./RequestDemoModal";

interface SolutionCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  category: string;
}

const SolutionCard = ({ title, description, icon, category }: SolutionCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <div className="solution-card bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
        <div className="p-6">
          {icon && <div className="mb-4 text-datashield-blue">{icon}</div>}
          <h3 className="text-lg font-semibold mb-3 text-datashield-gray-dark">{title}</h3>
          <p className="text-gray-600 mb-5">{description}</p>
          <Button 
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-datashield-blue hover:bg-datashield-blue-dark"
          >
            Request Demo
          </Button>
        </div>
      </div>
      
      <RequestDemoModal 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen}
        solution={title}
        category={category}
      />
    </>
  );
};

export default SolutionCard;
