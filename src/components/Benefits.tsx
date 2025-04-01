import React from 'react';
import { Check } from 'lucide-react';

interface BenefitProps {
  title: string;
  description: string;
}

const BenefitItem = ({ title, description }: BenefitProps) => (
  <div className="flex gap-3 items-start">
    <div className="mt-1 flex-shrink-0 rounded-full bg-accounting-secondary p-1">
      <Check className="h-4 w-4 text-white" />
    </div>
    <div>
      <h4 className="font-medium text-accounting-dark">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

const Benefits = () => {
  const benefits = [
    {
      title: "20% Discount",
      description: "Get 20% off your first 3 months of service when you join from the waitlist.",
    },
    {
      title: "Priority Onboarding",
      description: "Skip the queue with dedicated account manager onboarding assistance.",
    },
    {
      title: "Free Tax Consultation",
      description: "Receive a complimentary consultation with our expert tax advisors.",
    },
    {
      title: "Product Influence",
      description: "Shape our service by providing feedback that impacts our roadmap.",
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-accounting-primary">Why Join Our Waitlist?</h3>
      <div className="space-y-4">
        {benefits.map((benefit, index) => (
          <BenefitItem 
            key={index} 
            title={benefit.title} 
            description={benefit.description} 
          />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
