import React from "react";
import Mission from "../components/Mission";
import { Award, Target, Users, Zap } from "lucide-react";

const value = [
  {
    icon: <Target className="w-8 h-8 text-green-500" />,
    title: "Quality",
    description: "We never compromise on component quality or build standards",
  },
  {
    icon: <Users className="w-8 h-8 text-green-500" />,
    title: "Community",
    description: "Building strong relationships with customers and partners",
  },
  {
    icon: <Zap className="w-8 h-8 text-green-500" />,
    title: "Innovation",
    description: "Staying ahead of technology trends and industry standards",
  },
  {
    icon: <Award className="w-8 h-8 text-green-500" />,
    title: "Excellence",
    description: "Delivering outstanding service and support consistently",
  },
];

const why = [
  {
    title: "10,000+ Products",
    description:
      "Access the largest selection of computer components and peripherals in the industry",
  },
  {
    title: "Expert Guidance",
    description:
      "Our knowledgeable team helps you find the perfect components for your needs",
  },
  {
    title: "Custom PC Builder",
    description:
      "Use our advanced builder tool to configure your dream system with real-time pricing",
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock customer support to help with any questions or issues",
  },
  {
    title: "Fast Shipping",
    description:
      "Quick turnaround times with multiple shipping options available",
  },
  {
    title: "30-Day Guarantee",
    description:
      "We stand behind our products with a comprehensive satisfaction guarantee",
  },
];
const stats = [
  { number: "50K+", label: "Happy Customers" },
  { number: "10K+", label: "Products Available" },
  { number: "4.9★", label: "Average Rating" },
  { number: "15+", label: "Years Experience" },
];

const About = () => {
  return (
    <div className="py-10">
      {/* Hero Section */}
      <section className="  px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About Computer Store</h1>
          <p className="text-xl ">
            Building the future of personal computing through innovation,
            quality, and exceptional customer service
          </p>
        </div>
      </section>

      {/* Mission */}
      <Mission />

      {/* Values Section */}
      <section className=" px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {value.map((value, index) => (
              <div
                key={index}
                className="border  rounded-lg p-6 backdrop-blur-3xl hover:shadow-xl hover:shadow-green-500 hover:border-green-500 transition-all duration-300"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm ">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold mb-12">Why Choose NexaCore?</h2>

        <div className="space-y-6">
          {why.map((item, index) => (
            <div
              key={index}
              className="border  rounded-lg p-6  hover:shadow-xl hover:shadow-green-500 transition-all duration-300"
            >
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto bg-gradient-to-r from-green-400 to-blue-400  border-green-500 px-8 py-16 rounded-2xl">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-blue-500 mb-2">
                {stat.number}
              </div>
              <p className="">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
