export const siteConfig = {
  name: "Dhruv Gundecha",
  title: "Cybersecurity Graduate Student | Aspiring Security Engineer",
  description: "Portfolio website of Dhruv Gundecha",
  accentColor: "#1d4ed8",
  social: {
    email: "dhruvgundecha10@gmail.com",
    linkedin: "https://www.linkedin.com/in/dhruv-gundecha", 
    twitter: "",
    github: "https://github.com/dhruv-gundecha",
  },
  aboutMe:
    "I am an undergraduate student in Computer Engineering with a strong interest in cybersecurity and technology. My experience spans coding, security research, and building projects that combine problem-solving with hands-on learning. I enjoy exploring new tools, experimenting with open-source projects, and applying my knowledge to real-world challenges in security and software development.",
  skills: [
    "Python",
    "Java",
    "PHP",
    "Bash",
    "C/C++",
    "PowerShell",
    "JavaScript",
    "SQL",
    "Networking",
    "Operating Systems",
    "Application Security",
    "Vulnerability Testing",
    "OSINT",
    "Reverse Engineering",
    "SIEM",
  ],
  projects: [
    {
      name: "SIEM Elastic Home Lab",
      description:
        "Created a monitoring environment with Elasticsearch, Kibana, and Elastic Defender, using Sysmon for event tracking and real-time log analysis.",
      link: "https://github.com/dhruv-gundecha/siem-home-lab-elasticsearch", 
      skills: ["Elasticsearch", "Kibana", "Sysmon", "Threat Detection"],
    },
    {
      name: "FileMon",
      description:
        "Developed a Python tool using the Watchdog library to monitor file system activity and support auditing, debugging, and compliance use cases.",
      link: "https://github.com/dhruv-gundecha/filemon", 
      skills: ["Python", "Watchdog", "System Monitoring"],
    },
    {
      name: "Security Scripts Collection",
      description:
        "Built a suite of Python scripts demonstrating concepts such as brute-force automation, SQL injection testing, DLL injection, and keylogging in controlled environments.",
      link: "https://github.com/dhruv-gundecha/python-securityScripts",
      skills: ["Python", "Automation", "Security Concepts"],
    },
    {
      name: "SSH & HTTP Honeypot",
      description:
        "Collaborated on a honeypot project mimicking vulnerable services to study attacker behavior and strengthen defensive strategies.",
      link: "https://github.com/aaryan-11-x/HTTP-Honeypot", 
      skills: ["Python", "Honeypot", "Threat Intelligence"],
    },
  ],
  experience: [
    {
      company: "DeepCytes Cyberlabs UK",
      title: "Team Lead – OSINT Research",
      dateRange: "Apr 2024 – Jun 2024",
      bullets: [
        "Led OSINT research team, mentoring interns and ensuring high-quality deliverables.",
        "Worked extensively with open-source tools for intelligence gathering and analysis.",
      ],
    },
    {
      company: "DeepCytes Cyberlabs UK",
      title: "Cyber Threat Investigator",
      dateRange: "Jun 2023 – Dec 2023",
      bullets: [
        "Collaborated with teams on security testing and research initiatives.",
        "Assisted in malware and ransomware analysis using tools like Frida and Ghidra.",
        "Developed custom Python scripts to support investigation and recovery workflows.",
      ],
    },
  ],
  education: [
    {
      school: "University of Washington, Bothell, WA, US",
      degree: "Master of Science (MS) in Cyber Security Engineering",
      dateRange: "Sep 2025 – May 2027",
      achievements: [
        "Relevant Coursework: Cryptography, Information Assurance and Cyber Security",
      ],
    },
    {
      school: "KJ Somaiya College of Engineering, Mumbai, IN",
      degree: "Bachelor of Technology (B.Tech.) in Computer Engineering",
      dateRange: "Aug 2021 – Jun 2025",
      achievements: [
        "GPA: 3.7/4",
        "Relevant Coursework: Computer Networks, Operating Systems, Data Structures & OOP, Secure Software Development, Full Stack Development",
      ],
    },
  ],
};
