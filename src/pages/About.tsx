import React from "react";
import { motion } from "framer-motion";
import { TrendingDown, Leaf, Battery } from "lucide-react";
import team from "../assets/team.jpeg";
import Kishor from "../assets/founders/kishor.jpg";
import Kuber from "../assets/founders/kubermani.jpg";
import Damayanti from "../assets/team/damayanti.jpg";
import Arjun from "../assets/team/arjun.jpg";
import Prayash from "../assets/team/prayash.jpeg";
import Kusum from "../assets/team/kusum.png";
import Pushpa from "../assets/team/pushpa.jpeg";
import Kadam from "../assets/team/kadam.jpg";
import Mukesh from "../assets/team/mukesh.jpeg";
import Prabin from "../assets/team/prabin.jpg";
import Promod from "../assets/team/Promod.jpg";
import Suresh from "../assets/team/suresh.jpg";
import Bisham from "../assets/team/bisham.jpg";
import Abishek from "../assets/team/Abishek.jpg";



const stats = [
  { label: "Projects Completed", value: "50+" },
  { label: "MW Installed", value: "20+" },
  { label: "CO2 Reduced (Tons)", value: "120k" },
  { label: "Happy Clients", value: "40+" },
];

const valueProps = [
  {
    icon: <TrendingDown className="text-green-600" />,
    title: "Cost Savings",
    description:
      "Reduce your electricity bills by up to 80% with our efficient energy solutions.",
  },
  {
    icon: <Leaf className="text-green-600" />,
    title: "Sustainability",
    description:
      "Minimize your carbon footprint and contribute to a cleaner, greener planet.",
  },
  {
    icon: <Battery className="text-green-600" />,
    title: "Energy Independence",
    description:
      "Protect yourself from rising utility costs and grid failures with backup storage.",
  },
];

const teamMembers = [
  {
    name: "Dimyamati Poudel",
    position: "Chairman",
    image: Damayanti,
  },
  {
    name: "Kuber Mani Nepal",
    position: "Advisor",
    image: Kuber,
  },
  {
    name: "Kishor Neupane",
    position: "Director",
    image: Kishor,
  },
  {
    name: "Kadam Mani Nepal",
    position: "Technical Director",
    image: Kadam,
  },
  {
    name: "Bisham Bharati",
    position: "Advisor",
    image: Bisham,
  },
  {
    name: "Prabin Dhakal",
    position: "Mechanical Engineer",
    image: Prabin,
  },
  {
    name: "Pramod Shah",
    position: "Electrical Engineer",
    image: Promod,
  },
  {
    name: "Mukesh Neupane",
    position: "General Manager",
    image: Mukesh,
  },
  {
    name: "Pushpa Mahat",
    position: "Business Development Manager",
    image: Pushpa,
  },
  {
    name: "Abishek Parajuli",
    position: "Advisor",
    image: Abishek,
  },
  {
    name: "Arjun Nepal",
    position: "Project Coordinator",
    image: Arjun,
  },
  {
    name: "Suresh Kumar",
    position: "Electrical Engineer",
    image: Suresh,
  },
  {
    name: "Prayash Dahal",
    position: "Solar Engineer",
    image: Prayash,
  },
  {
    name: "Kushum Lama",
    position: "Accountant",
    image: Kusum,
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={team}
                alt="Our Team"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-10 -right-10 hidden md:block bg-green-600 p-8 rounded-2xl text-white shadow-xl max-w-xs">
              <p className="text-3xl font-bold mb-2">5+</p>
              <p className="text-sm font-medium opacity-90">
                Years of excellence in renewable energy sector.
              </p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <span className="text-green-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              About Our Company
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Pioneering the Path to{" "}
              <span className="text-green-600">Energy Freedom</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Janda Energy, our mission is to empower communities through
              accessible, reliable, and sustainable energy solutions. We believe
              that clean energy is not just a choice, but a responsibility for a
              better tomorrow.
            </p>

            <div className="space-y-6 mb-10">
              {valueProps.map((prop, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1">{prop.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{prop.title}</h4>
                    <p className="text-gray-600 text-sm">{prop.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-100">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-2xl font-extrabold text-green-600">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Meet the <span className="text-green-600">Leadership</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl border-4 border-green-100 mb-5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-green-600 font-semibold text-sm uppercase tracking-wider">
                  {member.position}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
