import { Clock, Mail, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div className="">
      <section className="max-w-6xl mx-auto py-16">
        <h2 className="text-center md:text-left  text-3xl font-bold mb-12">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border  rounded-lg p-8  hover:shadow-xl hover:shadow-green-500 transition-all duration-300 backdrop-blur-2xl">
            <Mail className="w-8 h-8 text-green-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className=" mb-4 text-lg">
              Reach us via email for detailed inquiries
            </p>
            <a
              href="mailto:support@nexacore.com"
              className="text-green-500 hover:text-green-500/80 transition-all "
            >
              support@computer_store.com
            </a>
          </div>

          <div className="border  rounded-lg p-8  hover:shadow-xl hover:shadow-green-500 transition-all duration-300 backdrop-blur-2xl">
            <Phone className="w-8 h-8 text-green-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className=" mb-4 text-lg">
              Call our support team during business hours
            </p>
            <a
              href="tel:+1-555-0123"
              className="text-green-500 hover:text-green-500/80 transition-all "
            >
              (+855) 10944454
            </a>
          </div>

          <div className="border  rounded-lg p-8  hover:shadow-xl hover:shadow-green-500 transition-all duration-300 backdrop-blur-2xl">
            <Clock className="w-8 h-8 text-green-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Hours</h3>
            <p className="text-lg">Monday - Friday: 9AM - 6PM PST</p>
            <p className="text-lg">Saturday - Sunday: 10AM - 4PM PST</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
