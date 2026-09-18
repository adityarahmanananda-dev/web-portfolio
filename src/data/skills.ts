export interface SkillGroup {
  group: string;
  items: { name: string; level: number }[];
}

export const skillGroups: SkillGroup[] = [
  {
    group: "Languages",
    items: [
      { name: "Go", level: 80 },
      { name: "Java", level: 90 },
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 },
      { name: "JavaScript", level: 75 },
    ],
  },
  {
    group: "Backend & Frameworks",
    items: [
      { name: "Spring (MVC)", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "FastAPI", level: 70 },
      { name: "Flask", level: 85 },
      { name: "Microservices", level: 70 },
    ],
  },
  {
    group: "Databases",
    items: [
      { name: "PostgreSQL", level: 85 },
      { name: "Oracle Database", level: 75 },
      { name: "SQLite", level: 80 },
      { name: "Database Design", level: 85 },
      { name: "Query Optimization", level: 85 },
    ],
  },
  {
    group: "DevOps & Platforms",
    items: [
      { name: "Docker", level: 80 },
      { name: "Linux", level: 85 },
      { name: "Git", level: 90 },
      { name: "CI/CD", level: 65 },
    ],
  },
  {
    group: "Engineering Practices",
    items: [
      { name: "System Design", level: 75 },
      { name: "Software Architecture", level: 80 },
      { name: "Agile / Scrum", level: 85 },
      { name: "Code Review", level: 85 },
    ],
  },
];