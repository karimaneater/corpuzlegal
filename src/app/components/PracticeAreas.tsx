import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Briefcase, Home, Users, Building, FileText, Shield } from "lucide-react";

const practiceAreas = [
  {
    icon: Briefcase,
    title: "Business Law",
    description: "Comprehensive legal services for businesses, from formation to dissolution, contracts, and compliance."
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Expert guidance on property transactions, disputes, zoning, and real estate development."
  },
  {
    icon: Users,
    title: "Family Law",
    description: "Compassionate representation in divorce, custody, adoption, and other family matters."
  },
  {
    icon: Building,
    title: "Estate Planning",
    description: "Protect your legacy with wills, trusts, probate administration, and estate planning."
  },
  {
    icon: FileText,
    title: "Civil Litigation",
    description: "Aggressive advocacy in civil disputes, personal injury claims, and contract disputes."
  },
  {
    icon: Shield,
    title: "Criminal Defense",
    description: "Strong defense representation for all criminal charges, from misdemeanors to felonies."
  }
];

export function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Practice Areas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our experienced attorneys provide comprehensive legal services across multiple practice areas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {area.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
