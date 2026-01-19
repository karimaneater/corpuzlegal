import { Button } from "@/app/components/ui/button";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 to-blue-950 text-white">
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1756633231294-f72b004e8c5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VydGhvdXNlJTIwanVzdGljZXxlbnwxfHx8fDE3Njg3NjY0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Justice background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl mb-6">
            Excellence in Legal Representation
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            For over 25 years, Sterling & Associates has provided trusted legal counsel 
            to individuals and businesses. Our experienced team is committed to protecting 
            your rights and achieving the best possible outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              Schedule Consultation
            </Button>
            {/* <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
            >
              Learn More
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
