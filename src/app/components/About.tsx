import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Award, Users, Clock, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Satisfied Clients" },
  { icon: Clock, value: "25+", label: "Years of Experience" },
  { icon: Award, value: "98%", label: "Success Rate" },
  { icon: TrendingUp, value: "$50M+", label: "In Settlements" }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">
              About Sterling & Associates
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 1999, Sterling & Associates has grown to become one of the most 
                respected law firms in the region. Our commitment to excellence and client 
                satisfaction has earned us a reputation for delivering outstanding results.
              </p>
              <p>
                We believe in building lasting relationships with our clients, understanding 
                that legal matters can be complex and stressful. Our approach combines 
                professional expertise with personal attention, ensuring that every client 
                receives the dedicated representation they deserve.
              </p>
              <p>
                Our team of experienced attorneys brings together diverse backgrounds and 
                specializations, allowing us to provide comprehensive legal services across 
                multiple practice areas. Whether you're facing a complex business transaction, 
                family matter, or criminal charge, we have the knowledge and skills to help.
              </p>
            </div>
          </div>

          <div>
            <div className="relative rounded-lg overflow-hidden mb-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758310999515-645097b709db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXclMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY4NzQ0NTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Law office"
                className="w-full h-80 object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="text-2xl text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
