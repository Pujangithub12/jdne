import solar1 from "../assets/solar-1.jpg";
import solar2 from "../assets/solar-2.jpg";
import solar3 from "../assets/solar-3.jpg";
import solarControlPanel from "../assets/solar-control-panel.jpg";
import burner from "../assets/burner.jpg";
import site1 from "../assets/IMG-20260603-WA0006.jpg";
import site2 from "../assets/IMG-20260603-WA0007.jpg";
import site3 from "../assets/IMG-20260603-WA0013.jpg";
import site4 from "../assets/IMG-20260603-WA0014.jpg";
import site5 from "../assets/IMG-20260603-WA0018.jpg";
import britanniaRooftop from "../assets/Project-Images/Britannia Rooftop/Britannia.jpg";
import b2 from "../assets/Project-Images/Britannia Rooftop/b2.jpeg";
import b3 from "../assets/Project-Images/Britannia Rooftop/b3.jpeg";
import b4 from "../assets/Project-Images/Britannia Rooftop/b4.jpeg";
import b5 from "../assets/Project-Images/Britannia Rooftop/b5.jpeg";
import galaxyGarden from "../assets/Project-Images/Galaxy garden/galaxy garden.jpg";
import g2 from "../assets/Project-Images/Galaxy garden/g2.jpeg";
import g3 from "../assets/Project-Images/Galaxy garden/g3.jpeg";
import hotelHolidayInn from "../assets/Project-Images/Hotel Holiday Inn/Hotel Holiday Inn solar.jpg";
import hotel2 from "../assets/Project-Images/Hotel Holiday Inn/hotel2.jpg";
import h3  from "../assets/Project-Images/Hotel Holiday Inn/h3.jpeg";
import h4 from "../assets/Project-Images/Hotel Holiday Inn/h4.jpeg";
import jhapaSolar from "../assets/Project-Images/Jhapa solar/jhapa.png";
import shantaComplex from "../assets/Project-Images/Shanta Complex Solar/shanta complex.jpg";
import sunmaiWater from "../assets/Project-Images/Sunmai water rooftop/sunmai.png";
import vishnuSadan from "../assets/Project-Images/Vishnu Sadan Solar PV/VISNU SADAN.png";
import v2 from "../assets/Project-Images/Vishnu Sadan Solar PV/v2.jpg";
import collegeOfMedicalSciences from "../assets/Project-Images/College of medical sciences/college of medical sciences.jpeg";
import c2 from "../assets/Project-Images/College of medical sciences/c2.jpeg";

export interface Project {
  id: number;
  name: string;
  description: string;
  type: "solar" | "biomass" | "hydropower";
  capacity: string;
  location: string;
  savings: string;
  panels: string;
  inverter: string;
  date: string;
  modules: string;
  warranty: string;
  owner: string;
  area: string;
  mainImage?: string;
  galleryImages: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Dabur Nepal-736 kWp Rooftop",
    description:
      "Large scale rooftop solar installation for industrial use, significantly cutting grid dependency and long-term energy costs for one of Nepal's leading manufacturers.",
    type: "solar",
    capacity: "736 kWp",
    location: "Bara, Nepal",
    savings: "30% reduction in grid dependency",
    panels: "Trina Solar 545W Mono PERC",
    inverter: "Huawei SUN2000 String Inverters",
    date: "2023-10-15",
    modules: "1,350 units",
    warranty: "25 years performance",
    owner: "Dabur Nepal",
    area: "6,500 sq.m",
    mainImage: solar1,
    galleryImages: [solar2, solar3, solarControlPanel],
  },
  {
    id: 2,
    name: "Industrial Biomass Boiler",
    description:
      "High efficiency biomass boiler for steam generation, replacing furnace oil with a cost-effective and sustainable fuel source for beverage manufacturing operations.",
    type: "biomass",
    capacity: "2.5 Tons/hr",
    location: "Birgunj, Nepal",
    savings: "Cost effective alternative to furnace oil",
    panels: "N/A",
    inverter: "N/A",
    date: "2023-12-20",
    modules: "Single high-efficiency biomass boiler unit",
    warranty: "10 years mechanical",
    owner: "Himalayan Beverages",
    area: "1,200 sq.m",
    mainImage: burner,
    galleryImages: [site1, site2],
  },
  {
    id: 3,
    name: "High Voltage Transmission Line",
    description:
      "132 kV transmission line project improving grid stability and enabling reliable power evacuation for regional distribution networks.",
    type: "hydropower",
    capacity: "132 kV",
    location: "Dhalkebar, Nepal",
    savings: "Improved grid stability",
    panels: "N/A",
    inverter: "N/A",
    date: "2024-02-10",
    modules: "Steel lattice towers, ACSR conductors",
    warranty: "20 years structural",
    owner: "NEA",
    area: "12 km corridor",
    mainImage: site3,
    galleryImages: [site4, site5],
  },
  {
    id: 4,
    name: "Jhapa Solar PV Project",
    description:
      "A utility-scale solar plant developed across 15.57 hectares, comprising 22,232 solar modules and two 5 MVA inverters. Connected directly to the NEA 33 kV grid infrastructure.",
    type: "solar",
    capacity: "12 MWp",
    location: "Shivasatakshi, Jhapa",
    savings:
      "Clean electricity generation through direct NEA 33 kV grid connection",
    panels: "22,232 Solar Modules",
    inverter: "Two 5 MVA Inverters",
    date: "2023",
    modules: "22,232 units",
    warranty: "N/A",
    owner: "N/A",
    area: "15.57 hectares",
    mainImage: jhapaSolar,
    galleryImages: [],
  },
  {
    id: 5,
    name: "Beldiya Solar Project",
    description:
      "A grid-connected utility solar PV development engineered to generate over 20 GWh of clean electricity annually, stabilizing regional grid loads.",
    type: "solar",
    capacity: "12 MWp",
    location: "Nawalpur",
    savings: "Over 20 GWh clean electricity generation annually",
    panels: "N/A",
    inverter: "N/A",
    date: "Ongoing",
    modules: "N/A",
    warranty: "N/A",
    owner: "N/A",
    area: "N/A",
    galleryImages: [],
  },
  {
    id: 6,
    name: "Butwal Solar PV Project",
    description:
      "Large-scale generation plant spanning 17.2 hectares with 31,280 advanced solar modules. Power evacuated systematically via the 33 kV Amuwa Substation.",
    type: "solar",
    capacity: "10.2 MWp",
    location: "Tillottama, Rupandehi",
    savings: "Large-scale renewable electricity generation",
    panels: "31,280 Solar Modules",
    inverter: "N/A",
    date: "Completed",
    modules: "31,280 units",
    warranty: "N/A",
    owner: "N/A",
    area: "17.2 hectares",

    galleryImages: [],
  },
  {
    id: 7,
    name: "Janaki Solar Project",
    description:
      "An ongoing grid-connected infrastructure project expected to generate over 10 GWh annually, reducing baseline transmission stress in western zones.",
    type: "solar",
    capacity: "6 MWp",
    location: "Banke",
    savings: "Over 10 GWh annual clean energy generation",
    panels: "N/A",
    inverter: "N/A",
    date: "Ongoing",
    modules: "N/A",
    warranty: "N/A",
    owner: "N/A",
    area: "N/A",
    galleryImages: [],
  },
  {
    id: 8,
    name: "College of Medical Sciences Solar",
    description:
      "Engineering and design of a high-capacity institutional rooftop framework expected to generate 682,460 kWh annually for medical operations.",
    type: "solar",
    capacity: "1 MWp",
    location: "Bharatpur, Chitwan",
    savings: "682,460 kWh expected annual generation",
    panels: "N/A",
    inverter: "N/A",
    date: "Ongoing",
    modules: "N/A",
    warranty: "N/A",
    owner: "College of Medical Sciences",
    area: "N/A",
    mainImage: collegeOfMedicalSciences,
    galleryImages: [c2],
  },
  {
    id: 9,
    name: "Hotel Holiday Inn Express Rooftop",
    description:
      "A premium grid-connected commercial array generating roughly 88,351 kWh annually, yielding significant operational savings for the hospitality asset.",
    type: "solar",
    capacity: "60 kWp",
    location: "Naxal, Kathmandu",
    savings: "88,351 kWh annual generation",
    panels: "JA Solar Modules",
    inverter: "Huawei SUN2000-50K-MC0",
    date: "Completed (2026)",
    modules: "N/A",
    warranty: "N/A",
    owner: "Hotel Holiday Inn Express",
    area: "4,000 sq. ft.",
    mainImage: hotelHolidayInn,
    galleryImages: [hotel2, h3, h4],
  },
  {
    id: 10,
    name: "Galaxy Garden Resort Solar",
    description:
      "A targeted rooftop deployment engineered to produce 169,755 kWh annually, optimized for a calculated financial payback period under three years.",
    type: "solar",
    capacity: "250 kWp",
    location: "Bharatpur",
    savings: "169,755 kWh annual generation with payback optimization",
    panels: "N/A",
    inverter: "N/A",
    date: "Ongoing",
    modules: "N/A",
    warranty: "N/A",
    owner: "Galaxy Garden Resort",
    area: "N/A",
    mainImage: galaxyGarden,
    galleryImages: [g2, g3],
  },
  {
    id: 11,
    name: "Shanta Complex Solar Plant",
    description:
      "High-density urban rooftop engineering generating 73.81 MWh annually, mitigating long-term peak electricity tariffs within a commercial hub.",
    type: "solar",
    capacity: "50.7 kWp",
    location: "Putalisadak, Kathmandu",
    savings: "73.81 MWh annual generation",
    panels: "N/A",
    inverter: "N/A",
    date: "Completed (2024)",
    modules: "N/A",
    warranty: "N/A",
    owner: "Shanta Complex",
    area: "N/A",
    mainImage: shantaComplex,
    galleryImages: [],
  },
  {
    id: 12,
    name: "33 kV Single Circuit Transmission Line (Butwal)",
    description:
      "Full structural route mapping, easement advisory, and physical development of a 33 kV single circuit link for total integration of the solar asset.",
    type: "hydropower",
    capacity: "33 kV",
    location: "Butwal Power Plant",
    savings: "Reliable power evacuation infrastructure",
    panels: "N/A",
    inverter: "N/A",
    date: "Completed",
    modules: "Transmission line infrastructure",
    warranty: "N/A",
    owner: "N/A",
    area: "N/A",
    galleryImages: [],
  },
  {
    id: 13,
    name: "33 kV Bay — Amuwa Substation",
    description:
      "Turnkey advisory and technical delivery of a dedicated 33 kV substation bay layout, enabling secure power evacuation across vulnerable geographical basins.",
    type: "hydropower",
    capacity: "Substation Bay",
    location: "Tinahu River Basin",
    savings: "Improved grid integration and power evacuation",
    panels: "N/A",
    inverter: "N/A",
    date: "Completed",
    modules: "Substation Bay Infrastructure",
    warranty: "N/A",
    owner: "N/A",
    area: "N/A",
    galleryImages: [],
  },
  {
    id: 14,
    name: "33 kV Beldiya–Mukundapur Line",
    description:
      "Structural engineering design, clearance configuration, and transmission network layouts connecting the Beldiya Solar arrays to the NEA Substation.",
    type: "hydropower",
    capacity: "5.6 km Grid",
    location: "Nawalpur Corridor",
    savings: "Enhanced solar grid connectivity",
    panels: "N/A",
    inverter: "N/A",
    date: "Completed",
    modules: "Transmission Line Infrastructure",
    warranty: "N/A",
    owner: "N/A",
    area: "5.6 km corridor",
    galleryImages: [],
  },
  {
    id: 15,
    name: "Jay Ambe Captive Solar PV Project",
    description:
      "A captive solar project for industrial energy consumption, designed to enable the facility to operate with minimal dependency on NEA grid power through sustainable on-site generation.",
    type: "solar",
    capacity: "12 MWp",
    location: "Banke",
    savings: "Reduced dependency on NEA grid power",
    panels: "N/A",
    inverter: "N/A",
    date: "Ongoing",
    modules: "N/A",
    warranty: "N/A",
    owner: "Jay Ambe",
    area: "N/A",
    galleryImages: [],
  },
  {
    id: 16,
    name: "Kutumba Hotel Rooftop PV Project",
    description:
      "A commercial rooftop installation generating approximately 4,900 kWh annually with estimated savings of USD 24,900 over 10 years, demonstrating the viability of solar energy in Nepal's hospitality industry.",
    type: "solar",
    capacity: "12 kWp",
    location: "Lalitpur",
    savings: "USD 24,900 estimated savings over 10 years",
    panels: "N/A",
    inverter: "N/A",
    date: "Completed (2022)",
    modules: "N/A",
    warranty: "N/A",
    owner: "Kutumba Hotel",
    area: "N/A",
    galleryImages: [],
  },
  {
    id: 17,
    name: "Sunmai Water Solar PV Project",
    description:
      "A rooftop industrial solar system of 114 modules and a 40 kW string inverter, supplying three-phase power to the facility's distribution system and reducing dependence on grid electricity.",
    type: "solar",
    capacity: "50.73 kWp",
    location: "Jhapa",
    savings: "Reduced dependence on grid electricity",
    panels: "114 Solar Modules",
    inverter: "40 kW String Inverter",
    date: "Completed (2024)",
    modules: "114 units",
    warranty: "N/A",
    owner: "Sunmai Water",
    area: "N/A",
    mainImage: sunmaiWater,
    galleryImages: [],
  },
  {
    id: 18,
    name: "33 kV Transmission Line (Shivasatakshi)",
    description:
      "Development of a 1 km transmission line connecting the Jhapa Solar Project to Buluchwok Substation for reliable integration into the national grid.",
    type: "hydropower",
    capacity: "1 km Grid",
    location: "Shivasatakshi, Jhapa",
    savings: "Reliable national grid integration",
    panels: "N/A",
    inverter: "N/A",
    date: "Completed",
    modules: "Transmission Line Infrastructure",
    warranty: "N/A",
    owner: "N/A",
    area: "1 km corridor",
    galleryImages: [],
  },
  {
    id: 19,
    name: "Vishnu Sadan Solar PV Project",
    description:
      "High-density urban rooftop engineering generating 73.81 MWh annually, mitigating long-term peak electricity tariffs within a commercial hub.",
    type: "solar",
    capacity: "50.73 kWp",
    location: "Pinglasthan, Kathmandu",
    savings: "73.81 MWh annual generation",
    panels: "N/A",
    inverter: "N/A",
    date: "Completed (2024)",
    modules: "N/A",
    warranty: "N/A",
    owner: "Vishnu Sadan",
    area: "N/A",
    mainImage: vishnuSadan,
    galleryImages: [v2],
  },
  {
    id: 20,
    name: "Britannia Nepal Solar PV Project",
    description:
      "A rooftop industrial solar system of 489 modules having capacity of 615Wp each and two string inverters with total capacity of 250 kW, supplying three-phase power to the facility's distribution system and reducing dependence on grid electricity.",
    type: "solar",
    capacity: "300 kWp",
    location: "Jeetpur Simara",
    savings: "Reduced dependence on grid electricity",
    panels: "489 × 615Wp Solar Modules",
    inverter: "Two String Inverters (250 kW total capacity)",
    date: "Completed (2026)",
    modules: "489 units",
    warranty: "N/A",
    owner: "Britannia Nepal",
    area: "N/A",
    mainImage: britanniaRooftop,
    galleryImages: [b2, b3, b4, b5],
  },
];
