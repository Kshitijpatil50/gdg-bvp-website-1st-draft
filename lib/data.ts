export const siteData = {
  chapter: {
    name: "GDG on Campus",
    college: "Bharati Vidyapeeth College of Engineering",
    location: "Pune",
    tagline: "Build. Learn. Ship.",
    description:
      "A community of student developers pushing boundaries with workshops, hackathons, and collaborative builds.",
  },

  hero: {
    title: "Welcome to GDG on Campus",
    subtitle: "Where developers build the future",
    command: "gdg init --passion true --skills.level intermediate",
    stats: [
      { label: "Active Members", value: 240 },
      { label: "Events Hosted", value: 18 },
      { label: "Hackathon Wins", value: 7 },
      { label: "Workshops", value: 12 },
    ],
  },

  events: [
    {
      id: "evt_2024_solchall",
      title: "Solution Challenge 2024",
      date: "2024-03-15",
      category: "hackathon",
      description: "Build solutions for real-world problems using Google tech.",
      attendees: 85,
    },
    {
      id: "evt_2024_firebaseapi",
      title: "Firebase & Gemini API Workshop",
      date: "2024-02-20",
      category: "workshop",
      description: "Learn to build with Firebase and Gemini API in minutes.",
      attendees: 120,
    },
    {
      id: "evt_2024_aibuild",
      title: "Agentic AI Build Night",
      date: "2024-01-28",
      category: "workshop",
      description: "Hands-on session building autonomous AI agents.",
      attendees: 95,
    },
    {
      id: "evt_2024_webdev",
      title: "Modern Web Development",
      date: "2024-04-10",
      category: "workshop",
      description: "Deep dive into Next.js, Tailwind, and production patterns.",
      attendees: 110,
    },
    {
      id: "evt_2024_meetup_jan",
      title: "January Developer Meetup",
      date: "2024-01-15",
      category: "meetup",
      description: "Monthly networking and tech talks.",
      attendees: 60,
    },
    {
      id: "evt_2024_cloudskills",
      title: "Cloud Skills Workshop",
      date: "2024-05-05",
      category: "workshop",
      description: "Master cloud architecture and deployment.",
      attendees: 75,
    },
  ],

  teams: [
    {
      name: "Events & Operations",
      description: "Organizing workshops, hackathons, and community events that keep the chapter thriving.",
      members: 8,
      icon: "Calendar",
    },
    {
      name: "Entrepreneurship & Development",
      description: "Building startup-ready projects and mentoring founders through the development journey.",
      members: 6,
      icon: "Rocket",
    },
    {
      name: "Technical",
      description: "Deep-diving into cutting-edge technologies and driving technical excellence across projects.",
      members: 12,
      icon: "Code",
    },
    {
      name: "Training & Placement",
      description: "Upskilling members for internships and full-time roles through intensive training.",
      members: 5,
      icon: "Briefcase",
    },
  ],

  joinProcess: [
    {
      step: 1,
      title: "Fill the Form",
      description: "Tell us about yourself, your interests, and what you want to learn.",
    },
    {
      step: 2,
      title: "Attend a Session",
      description: "Join one of our upcoming workshops or build nights to experience the community.",
    },
    {
      step: 3,
      title: "Interview for a Team",
      description: "Chat with team leads about which sub-team aligns with your goals.",
    },
  ],

  heatmapData: [
    { date: "2024-01-15", events: 1, eventName: "January Meetup" },
    { date: "2024-01-28", events: 1, eventName: "Agentic AI Build Night" },
    { date: "2024-02-20", events: 1, eventName: "Firebase & Gemini API" },
    { date: "2024-03-15", events: 1, eventName: "Solution Challenge" },
    { date: "2024-04-10", events: 1, eventName: "Modern Web Dev" },
    { date: "2024-05-05", events: 1, eventName: "Cloud Skills Workshop" },
  ],
};
