
import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-datashield-gray-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-datashield-blue mr-2" />
              <span className="font-bold text-xl">DataShield</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your one-stop shop for cutting-edge healthcare technology solutions and products.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Our Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-datashield-blue">Hospitals & Clinics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-datashield-blue">Pharma</a></li>
              <li><a href="#" className="text-gray-300 hover:text-datashield-blue">MedTech</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">DataShield Divisions</h3>
            <ul className="space-y-2">
              <li><a href="https://datashieldsecurity.xyz" className="text-gray-300 hover:text-datashield-blue" target="_blank" rel="noopener noreferrer">DataShield Security</a></li>
              <li><a href="https://www.datashieldpartners.blog/" className="text-gray-300 hover:text-datashield-blue" target="_blank" rel="noopener noreferrer">DataShield Insights</a></li>
              <li><a href="https://datashieldnewsletter.info" className="text-gray-300 hover:text-datashield-blue" target="_blank" rel="noopener noreferrer">DataShield Home</a></li>
              <li><a href="https://www.datashieldemergingtech.pro/" className="text-gray-300 hover:text-datashield-blue" target="_blank" rel="noopener noreferrer">DataShield FinTech and PropTech</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-datashield-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">4901 Seminary Rd, Alexandria, VA</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-datashield-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="text-gray-300">
                  <div>abelassefa19@gmail.com</div>
                  <div>abel@datashieldnewsletter.info</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} DataShield Healthcare Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
