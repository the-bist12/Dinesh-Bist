export const siteConfig = {
  name: "Dinesh Bist",
  title: "Data Analyst · Data Science · IT Student",
  description:
    "Detail-oriented final-year IT student turning telecom-scale datasets and clinical records into actionable insights through SQL, Power BI, and Python.",
  url: "https://yourdomain.com",
  email: "dinesh.221420@ncit.edu.np",
  phone: "+977-9847111649",
  location: "Kathmandu, Nepal",
  social: {
    github: "https://github.com/the-bist12",
    linkedin: "https://linkedin.com/in/dinesh-bist",
  },
};

export const roles = [
  "Data Analyst",
  "Data Science",
  "BEIT Student",
];

export const summary =
  "Detail-oriented final-year Information Technology student with hands-on experience in data analysis, SQL, and dashboard development. Completed an AI/ML internship at Nepal Telecom performing ETL, EDA, and feature analysis on large telecom datasets. Built interactive Power BI dashboards and applied statistical analysis to derive actionable insights. Certified in SQL and Power BI via DataCamp.";

export const education = {
  degree: "Bachelor of Engineering in Information Technology (BEIT)",
  school: "Nepal College of Information Technology (NCIT)",
  location: "Kathmandu, Nepal",
  period: "2022 — 2026",
};

export const certifications = [
  {
    title: "Associate Data Analyst in SQL",
    issuer: "DataCamp",
    date: "Jan 2026",
  },
  {
    title: "Data Analyst in Power BI",
    issuer: "DataCamp",
    date: "Feb 2026",
  },
];

export const stats = [
  { value: "69K+", label: "Patient Records Analysed" },
  { value: "3", label: "Major Projects Built" },
  { value: "2", label: "DataCamp Certifications" },
  { value: "1", label: "Industry Internship" },
];

export const skills = [
  {
    category: "Analytics",
    items: [
      "SQL",
      "EDA",
      "Statistical Analysis",
      "Data Cleaning",
      "Feature Engineering",
      "Imbalanced Data",
    ],
  },
  {
    category: "Visualisation",
    items: [
      "Power BI",
      "DAX Measures",
      "KPI Dashboards",
      "Dynamic Slicers",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    category: "Languages & Libraries",
    items: [
      "Python",
      "SQL",
      "JavaScript",
      "HTML/CSS",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
    ],
  },
  {
    category: "Web, IoT & Tools",
    items: [
      "FastAPI",
      "REST APIs",
      "ESP32",
      "Arduino",
      "Git",
      "GitHub",
      "Jupyter Notebook",
      "VS Code",
    ],
  },
];

export const projects = [
  {
    title: "Hospital Readmission Analysis & Dashboard",
    description:
      "Analysed 69,973 diabetic patient records from 130 US hospitals; built an interactive 3-page Power BI dashboard with DAX measures, KPI cards, and dynamic slicers. Engineered 8 clinical features and validated with ML — XGBoost achieved AUC-ROC 0.6448, outperforming the original 2014 paper.",
    tags: ["Python", "Power BI", "SQL", "XGBoost"],
    gradient: "from-violet-600 to-indigo-600",
    period: "Mar — May 2026",
  },
  {
    title: "F1 Race Data Analysis & Prediction",
    description:
      "Merged and cleaned 7 datasets (drivers, races, results, qualifying, constructors, lap times, standings) into a unified pipeline. Random Forest achieved Spearman rank correlation 0.91, correctly predicting the 2023 Bahrain GP podium.",
    tags: ["Python", "Pandas", "Scikit-learn"],
    gradient: "from-cyan-500 to-blue-600",
    period: "Sep — Nov 2025",
  },
  {
    title: "AgriSmart – IoT Smart Agriculture System",
    description:
      "Designed automated irrigation using ESP32, Arduino Uno, DHT11, soil moisture sensors, and relay modules with real-time threshold logic. Built a web monitoring interface in HTML/CSS/JavaScript for live sensor data and remote control.",
    tags: ["ESP32", "Arduino", "JavaScript"],
    gradient: "from-emerald-500 to-teal-600",
    period: "Jun — Sep 2025",
  },
];

export const experience = [
  {
    role: "Data Science Intern",
    company: "Nepal Telecom",
    location: "Jawalakhel, Lalitpur",
    period: "May 2025 — July 2025",
    highlights: [
      "Performed ETL and in-depth EDA on large telecom datasets to uncover patterns, trends, and anomalies that directly informed business decisions.",
      "Applied statistical analysis and feature analysis to evaluate data quality and improve downstream model inputs.",
      "Built and deployed FastAPI-based REST endpoints for data inference; maintained clean, reproducible data pipelines using Python, Pandas, and NumPy.",
    ],
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
