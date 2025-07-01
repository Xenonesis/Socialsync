import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Check } from "lucide-react";

export function CardSpotlightDemo() {
  return (
    <CardSpotlight className="h-96 w-96">
      <p className="text-xl font-bold relative z-20 mt-2 text-white">
        Social Sync Services
      </p>
      <div className="text-neutral-200 mt-4 relative z-20">
        Transform your business with our comprehensive web solutions:
        <ul className="list-none mt-2">
          <Step title="Custom Web Development" />
          <Step title="Social Media Integration" />
          <Step title="E-commerce Solutions" />
          <Step title="Mobile-First Design" />
        </ul>
      </div>
      <p className="text-neutral-300 mt-4 relative z-20 text-sm">
        Elevate your digital presence with cutting-edge technology and 
        seamless user experiences tailored to your business needs.
      </p>
    </CardSpotlight>
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <Check className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
  );
};