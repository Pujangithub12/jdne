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
  mainImage: string;
  galleryImages: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    name: "736 kWp Rooftop – Dabur Nepal",
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
];
