
const ExperienceData = () => {
    return [
        {
            job: "Full-Stack Developer",
            company: "Freelance",
            location: "Work From Anywhere",
            from: new Date(2025, 12, 24), // Jun 2024
            to: new Date(2026, 4, 23), // Aug 2024
            category: "freelance",
            achievements: [
                "Executed end-to-end system analysis and full-stack development for diverse business clients to digitize manual workflows and drive operational efficiency.",
                "Designed and deployed a custom Content Management System (CMS) and an interactive digital product catalog.",
                "Engineered an offline-first Point of Sale (POS) application for a food & beverage client, successfully eliminating 100% of their recurring monthly software subscription costs."
            ],
            key: 3
        },
        {
            job: "Network Sales Digitalization Internship",
            company: "PT Bank CIMB Niaga, Tbk",
            location: "Jakarta Selatan, Indonesia",
            from: new Date(2025, 11, 24), // Jun 2024
            to: new Date(2026, 5, 23), // Aug 2024
            category: "internship",
            achievements: [
                "Assisted in the development of comprehensive user requirement documentation to ensure a seamless bridge between business objectives and technical implementation.",
                "Conducted discussions with users to elicit operational requirements and conducted intensive technical discussions with the IT team to synchronize requirement specifications.",
                "Developed business flows, system flowcharts, and UI/UX flow designs to ensure intuitive, efficient digital business processes and minimize manual errors.",
                "Executed and conducted User Acceptance Testing (UAT) with stakeholders to validate system functionality and ensure high-quality deliverables prior to official release."
            ],
            key: 2
        },
        {
            job: "IT Business Analyst & Database Engineer",
            company: "Diskominfo Kota Bandung",
            location: "Bandung, Indonesia",
            from: new Date(2024, 5, 1), // Jun 2024
            to: new Date(2024, 7, 1), // Aug 2024
            category: "internship",
            achievements: [
                "Created SRS & BRS documentation for government web applications.",
                "Conducted manual testing, ensuring end-to-end system reliability.",
                "Implemented MariaDB master-slave replication to maintain high data availability."
            ],
            key: 1
        },
    ]
};


export default ExperienceData;
