import { Card, CardContent } from "@/app/components/ui/card";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Mail, Phone } from "lucide-react";

const attorneys = [
  {
    name: "Sarah Mitchell",
    title: "Managing Partner",
    specialization: "Corporate Law & Business Litigation",
    image: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDF8fHx8MTc2ODc1ODUzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    email: "s.mitchell@sterling-law.com",
    phone: "(555) 123-4567"
  },
  {
    name: "James Sterling",
    title: "Senior Partner",
    specialization: "Real Estate & Estate Planning",
    image: "https://images.unsplash.com/photo-1589458223095-03eee50f0054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG1hbnxlbnwxfHx8fDE3Njg3MjcyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    email: "j.sterling@sterling-law.com",
    phone: "(555) 123-4568"
  },
  {
    name: "Michael Chen",
    title: "Partner",
    specialization: "Criminal Defense & Civil Rights",
    image: "https://images.unsplash.com/photo-1764592620941-a5bcaa79ce92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXd5ZXIlMjBhdHRvcm5leSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njg3OTY1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    email: "m.chen@sterling-law.com",
    phone: "(555) 123-4569"
  }
];

export function Attorneys() {
  return (
    <section id="attorneys" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Our Attorneys
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our team of experienced legal professionals dedicated to serving your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attorneys.map((attorney, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-[3/4] overflow-hidden">
                <ImageWithFallback
                  src={attorney.image}
                  alt={attorney.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl mb-1 text-gray-900">
                  {attorney.name}
                </h3>
                <p className="text-sm text-blue-900 mb-2">
                  {attorney.title}
                </p>
                <p className="text-gray-600 mb-4">
                  {attorney.specialization}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="h-4 w-4" />
                    <a href={`mailto:${attorney.email}`} className="hover:text-blue-900">
                      {attorney.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="h-4 w-4" />
                    <a href={`tel:${attorney.phone}`} className="hover:text-blue-900">
                      {attorney.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
