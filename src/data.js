export const profile = {
  firstName: "Nthabiseng",
  lastName: "Maruping",
  university: "Walter Sisulu University",
  qualification: "Diploma in Applications Development",
  courseStructure: "Extended four-year programme",
  courseStart: 2024,
  studyYear: "Third-year student",
  tutoringYear: 2026,
  module: "Development Software 1",
  lecturer: "Mrs. Twetwa-Dube",
  partner: "Kamvelihle Bavuma",
  faculty:
    "Faculty of Engineering, Built Environment and Information Technology",
  facultyShort: "FEBEIT",

  // Set this after placing the actual image in public/images:
  // portrait: "/images/nthabiseng-portrait.jpg",
  portrait: null,

  contactEmail: "",
  tagline: "Learning with purpose. Leading with heart.",
};

export const navigation = [
  { id: "personal", label: "Personal Statement", icon: "01" },
  { id: "module", label: "Module Details", icon: "02" },
  { id: "training", label: "Training & Development", icon: "03" },
  { id: "delivery", label: "Tutorial Delivery", icon: "04" },
  { id: "technology", label: "Integration of Technology", icon: "05" },
  { id: "reflections", label: "Reflections & Lessons Learnt", icon: "06" },
  { id: "evidence", label: "Gallery / Evidence", icon: "07" },
  { id: "feedback", label: "Student Feedback", icon: "08" },
];

export const strengths = [
  "Friendly and approachable",
  "Bubbly and vibrant",
  "Hard-working",
  "High expectations",
  "Leadership",
  "Public speaking",
];

export const personalStatement = [
  "I am Nthabiseng Maruping, a third-year student in the extended four-year Diploma in Applications Development at Walter Sisulu University. I began my studies in 2024 and tutor Development Software 1 in 2026.",

  "I bring a bubbly, vibrant, and friendly personality to my work, alongside a demanding and hard-working approach. Leading module assessments and projects in my course has helped me develop leadership and speaking skills.",

  "I started tutoring feeling nervous and initially struggled to balance the programme with my own modules. I nevertheless continued conducting sessions with classes and in campus study rooms and the library.",

  "My tutor partner, Kamvelihle Bavuma, a third-year student in the same course, helped with session preparation, supported sessions, and shared documents. Guidance from Mrs. Twetwa-Dube, programme facilitators, and fellow tutors helped me manage my responsibilities.",

  "Through the FEBEIT tutor training programme, I learned practical approaches to student support. My tutorials focused on practical activities, often in groups, with opportunities for students to raise questions during and immediately after sessions.",

  "My aim is to remain approachable while encouraging effort and participation. This portfolio brings together my tutoring experience, the resources we prepared, and the lessons I have taken from the programme.",
];

export const journey = [
  {
    marker: "2024",
    title: "Beginning my studies",
    text: "I began the extended four-year Diploma in Applications Development at Walter Sisulu University.",
  },
  {
    marker: "2026",
    title: "Taking on DS1 tutoring",
    text: "I entered the tutor role nervously while learning to balance tutorial responsibilities with my own modules.",
  },
  {
    marker: "Training",
    title: "Preparing for student success",
    text: "Training at the beginning of both semesters introduced practical methods for conducting sessions and supporting students.",
  },
  {
    marker: "Practice",
    title: "Bringing preparation into sessions",
    text: "I conducted practical tutorials using group activities, module resources, tutor-created notes, and digital tools.",
  },
  {
    marker: "Growth",
    title: "Learning through support",
    text: "My lecturer, programme facilitators, tutor partner, and fellow tutors helped me develop a more manageable approach to my responsibilities.",
  },
];

export const developmentRecords = [
  {
    title: "Tutor Training and Preparation Programme",
    status: "Start of both semesters",
    text: "I attended the FEBEIT Tutor Training and Preparation Programme at the beginning of the first and second semesters.",
    application:
      "The programme focused on Student Success and practical methods for conducting sessions and working with students.",
  },
  {
    title: "Facilitator mentoring",
    status: "Throughout the programme",
    text: "Mrs. Yawa and other student assistance representatives trained and mentored us, with continued support throughout the year.",
    application:
      "Their guidance supported our preparation, tutorial practice, and understanding of the tutor role.",
  },
  {
    title: "Practical group activities",
    status: "Applied in tutorials",
    text: "One technique learned during training was separating students into groups for practical activities.",
    application:
      "I used this approach during DS1 tutorials with whiteboards, markers, dusters, and projectors.",
  },
  {
    title: "Lecturer guidance",
    status: "Module support",
    text: "Mrs. Twetwa-Dube provided most of the module materials used in sessions and requested that tutorials be entirely practical.",
    application:
      "Our tutorials complemented the theory and practical teaching delivered by the lecturer.",
  },
  {
    title: "Peer preparation",
    status: "Tutor partnership",
    text: "Kamvelihle Bavuma supported my preparation, assisted during sessions, and shared documents.",
    application:
      "We also created our own notes and exercise documents for preparation and tutorial delivery.",
  },
];

// Keep this order: it follows the supplied 2026 Student Module Guide.
export const tutorialUnits = [
  {
    unit: "Unit 1",
    title: "Brief introduction to Computers, Systems and Programming",
  },
  {
    unit: "Unit 2",
    title: "General Problem Solving",
  },
  {
    unit: "Unit 3",
    title: "Data Types, Data Representation, Variables and Pseudocode",
  },
  {
    unit: "Unit 4 · Part 1",
    title: "IPO Charts",
  },
  {
    unit: "Unit 5 · Part 1",
    title: "Simple Selection",
    detail: "Pseudocode only",
  },
  {
    unit: "Unit 5 · Part 2",
    title: "Compound Selection",
    detail: "Pseudocode only",
  },
  {
    unit: "Unit 4 · Part 2",
    title: "Flowcharts",
    detail: "With pseudocode only",
  },
  {
    unit: "Unit 4 · Part 3",
    title: "Trace Tables",
    detail: "Pseudocode only",
  },
  {
    unit: "Unit 6",
    title: "C# Coding",
  },
  {
    unit: "Unit 5 · Part 3",
    title: "Repetition FOR NEXT",
    detail: "Pseudocode only",
  },
  {
    unit: "Unit 5 · Part 4",
    title: "Repetition DO-WHILE LOOP",
    detail: "Pseudocode only",
  },
];

export const sessionSchedule = [
  {
    day: "Wednesday",
    time: "13:00–14:00",
    frequency: "Usual session",
  },
  {
    day: "Thursday",
    time: "13:00–14:00",
    frequency: "Usual session",
  },
  {
    day: "Friday",
    time: "09:00–10:00 and/or 13:00–14:00",
    frequency: "Occasional revision, especially before tests",
  },
];

export const technologyTools = [
  {
    title: "Microsoft Word",
    category: "Preparation",
    text: "Used to construct notes and exercises for tutorial preparation and to share solutions to exercises.",
  },
  {
    title: "Microsoft Teams",
    category: "Remote support",
    text: "Used for occasional necessary meetings, including during the strike period at the beginning of the semester when students could not attend campus physically or were still away from the area.",
  },
  {
    title: "Notepad",
    category: "Notes and demonstrations",
    text: "Used during and after sessions to record student questions, feedback, and comments, and to demonstrate workings on session activities.",
  },
  {
    title: "Google Chrome",
    category: "PDF resources",
    text: "Used to display PDF resources during sessions. PDF documents were the standard format for document sharing.",
  },
  {
    title: "Microsoft Visual Studio",
    category: "C# practice",
    text: "Used for practical C# coding exercises.",
  },
  {
    title: "Microsoft PowerPoint",
    category: "Presentations",
    text: "Used to present slides covering the tutored chapter, exercises, and related session content.",
  },
  {
    title: "Projectors",
    category: "Shared display",
    text: "Used in campus venues to display session resources and practical material to the group.",
  },
];

export const reflections = [
  {
    title: "Developing confidence through practice",
    challenge:
      "I started the programme feeling nervous about conducting sessions.",
    response:
      "I continued tutoring classes and supporting students in campus study rooms and the library, with help from my tutor partner and other programme members.",
    lesson:
      "Preparation, continued practice, and accepting support are important to my development as a tutor.",
  },
  {
    title: "Balancing tutoring with my own studies",
    challenge:
      "At the beginning of the year, I struggled to cope with tutoring responsibilities alongside my own modules.",
    response:
      "I sought and received guidance from Mrs. Twetwa-Dube, programme facilitators, and fellow tutors, and eventually managed to cope.",
    lesson:
      "Managing my workload includes recognising when I need support and making time for both preparation and my own academic work.",
  },
  {
    title: "Applying training to practical delivery",
    challenge:
      "Our lecturer requested entirely practical tutorials that complemented her theory and practical teaching.",
    response:
      "I applied the group-activity technique learned during training, using whiteboards, markers, dusters, and projectors in campus venues.",
    lesson:
      "Training becomes useful when I connect it to the activities and needs of a real tutorial session.",
  },
  {
    title: "Using technology to maintain contact",
    challenge:
      "During the strike period, some students could not attend campus physically and others were still away from the area.",
    response:
      "Microsoft Teams supported necessary meetings when physical attendance was not possible.",
    lesson:
      "My planning needs to account for students' circumstances and include suitable ways to maintain communication.",
  },
  {
    title: "Choosing tools for the task",
    challenge:
      "Preparing and presenting practical work required different kinds of resources.",
    response:
      "I used Word for notes and exercises, Chrome for PDFs, PowerPoint and projectors for presentations, Notepad for notes and workings, and Visual Studio for C# exercises.",
    lesson:
      "The purpose of the activity should guide the tool I choose, from preparing a document to demonstrating practical code.",
  },
  {
    title: "Responding to students during sessions",
    challenge:
      "Students raised questions, comments, and feedback while working through practical activities.",
    response:
      "Feedback was received and attended to during and immediately after sessions, with Notepad used to record questions and comments.",
    lesson:
      "Listening and responding are part of tutorial delivery. Recording questions helps me retain the issues raised during a session.",
  },
  {
    title: "Working with a tutor partner",
    challenge:
      "Preparing resources and conducting tutorials placed demands on my developing skills and available time.",
    response:
      "Kamvelihle helped with preparation, assisted during sessions, and shared documents. We also created notes and exercise resources.",
    lesson:
      "Collaboration is a valuable part of my preparation and gives me opportunities to learn from another tutor's experience.",
  },
];

// Set file to the matching /documents/... path once the PDF is present.
// null keeps preview/download controls hidden without displaying prompts.
export const documents = [
  {
    id: "ipo-notes",
    title: "IPO Charts — Tutor Notes",
    category: "Notes",
    description: "Notes on IPO charts created by the tutors.",
    file: "/documents/ipo-charts-notes.pdf",
    downloadName: "IPO-Charts-Notes.pdf",
    downloadable: true,
  },
  {
    id: "compound-if",
    title: "Compound IF Statements — Practical Guide",
    category: "Notes",
    description:
      "Tutor-created practical notes on compound IF statements.",
    file: "/documents/compound-if-practical-guide.pdf",
    downloadName: "Compound-IF-Practical-Guide.pdf",
    downloadable: true,
  },
  {
    id: "revision-one",
    title: "Test 3 — Assessment 1 Revision",
    category: "Revision",
    description:
      "Questions and memo covering simple and compound IF statements, flowcharts, and trace tables.",
    file: "/documents/test-3-assessment-1-revision.pdf",
    downloadName: "Test-3-Assessment-1-Revision.pdf",
    downloadable: true,
  },
  {
    id: "revision-two",
    title: "Test 3 — Assessment 2 Additional Revision",
    category: "Revision",
    description:
      "Additional revision with a memo and rough work on trace tables.",
    file: "/documents/test-3-assessment-2-revision.pdf",
    downloadName: "Test-3-Assessment-2-Revision.pdf",
    downloadable: true,
  },
  {
    id: "module-guide",
    title: "2026 Module Study Guide",
    category: "Module Guide",
    description:
      "The guide followed for tutorial preparation, topic order, and delivery.",
    file: "/documents/ds1-module-guide-2026.pdf",
    downloadName: "DS1-Module-Study-Guide-2026.pdf",
    downloadable: true,
  },
  {
    id: "session-plan-one",
    title: "Tutorial Session Plan 1",
    category: "Session Plans",
    description:
      "A session plan required for submission alongside the physical registers.",
    file: "/documents/tutorial-session-plan-1.pdf",
    downloadName: "Tutorial-Session-Plan-1.pdf",
    downloadable: true,
  },
  {
    id: "session-plan-two",
    title: "Tutorial Session Plan 2",
    category: "Session Plans",
    description:
      "A session plan required for submission alongside the physical registers.",
    file: "/documents/tutorial-session-plan-2.pdf",
    downloadName: "Tutorial-Session-Plan-2.pdf",
    downloadable: true,
  },
  {
    id: "session-plan-three",
    title: "Tutorial Session Plan 3",
    category: "Session Plans",
    description:
      "A session plan required for submission alongside the physical registers.",
    file: "/documents/tutorial-session-plan-3.pdf",
    downloadName: "Tutorial-Session-Plan-3.pdf",
    downloadable: true,
  },
];

// The professional portrait comes from profile.portrait.
// Only the two pages of the physical register are listed here.
export const gallery = [
  {
    id: "register-front",
    title: "Physical Register — Front",
    category: "Attendance",
    caption: "Front page of the physical tutorial register.",
    image: "/images/register-front.jpg",
    alt: "Front page of the DS1 tutorial attendance register",
  },
  {
    id: "register-back",
    title: "Physical Register — Back",
    category: "Attendance",
    caption: "Back page of the same physical tutorial register.",
    image: "/images/register-back.jpg",
    alt: "Back page of the DS1 tutorial attendance register",
  },
];

export const feedbackChannels = {
  whatsapp: {
    title: "WhatsApp learning groups",
    text:
      "The main DS1 WhatsApp group included the main DS1 students. Additional residence-based groups connected students living around campus, where tutors occasionally joined study-room sessions.",
    image: "/images/whatsapp-groups.jpg",
    alt:
      "WhatsApp group overview showing the main DS1 group and residence-based study groups",
    caption:
      "The main DS1 group and residence-based groups used to connect students and tutors.",
  },
  teams: {
    title: "DS1 Microsoft Teams class",
    text:
      "The DS1 class team provided a channel for necessary online meetings, including when students could not attend campus during the strike period.",
    url:
      "https://teams.microsoft.com/l/team/19%3AS-Nef0oGH8g-t1eVcbHVBK3qropWrsjt3wUJiTylM2g1%40thread.tacv2/conversations?groupId=4e7d6812-7acf-44ae-b644-4b02d9d0eb79&tenantId=48e89992-1e2b-4908-803a-7957e2cc1cbd",
  },
};