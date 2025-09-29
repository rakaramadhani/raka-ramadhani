
const ExperienceData = () => {
    return [
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
        {
            job: "Database System Practicum Assistant - Coordinator",
            company: "DASPRO Laboratory (Telkom University)",
            location: "Bandung, Indonesia",
            from: new Date(2024, 1, 1), // Feb 2024
            to: new Date(2024, 5, 1), // Jun 2024
            category: "parttime",
            achievements: [
                "Coordinated 18 practicum assistants and aligned practicum schemes with lecturers.",
                "Developed structured practical materials for Database Systems (SQL).",
                "Taught 40+ students per session using interactive and applied learning methods."
            ],
            key: 2
        },
        {
            job: "Logic Programming Practicum Assistant - Secretary",
            company: "DASPRO Laboratory (Telkom University)",
            location: "Bandung, Indonesia",
            from: new Date(2023, 8, 1), // Sep 2023
            to: new Date(2024, 0, 1), // Jan 2024
            category: "parttime",
            achievements: [
                "Organized schedules for 25 practicum assistants to streamline operations.",
                "Prepared and standardized practicum teaching materials for new students.",
                "Introductory programming sessions using Python, helping students understand programming logic."
            ],
            key: 3
        },
    ]
};


export default ExperienceData;
