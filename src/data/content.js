export const profile = {
  name: 'Joaquin Kristof',
  tagline: 'Mechatronics-track engineering student, drawn to anything that flies.',
  location: 'Houston, TX',
  email: 'joaquinkristof007@gmail.com',
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
}

export const intro = {
  blurb:
    "I want to build things that fly. Mechatronics is the track that's gotten me closest to that: it's where the airframe, the electronics, and the code all have to agree, or nothing leaves the ground. I'd rather learn by building something and watching it fail than read about why it should've worked.",
}

export const education = {
  school: 'Texas A&M University',
  degree: 'B.S. Multidisciplinary Engineering Technology, Mechatronics Track',
  period: 'Expected May 2029',
}

export const journalEntries = [
  {
    id: 'tricopter-vtol',
    title: 'Tricopter VTOL Design',
    org: 'Personal project',
    period: 'Aug 2026 – Present',
    status: 'Research & Planning',
    image: `${import.meta.env.BASE_URL}images/stallion-vtol-reference.webp`,
    imageAlt: 'A reference tricopter VTOL aircraft design used as inspiration for early concept work, not a photo of a finished build',
    body: [
      "This one's still early. I'm researching and planning a tricopter VTOL (vertical takeoff and landing) aircraft, using a reference design like the one above as a starting point for my own version.",
      "Right now that means working through configuration decisions in Fusion: motor placement, frame layout, and how I want the transition from vertical lift to forward flight to work, before any of it moves toward a prototype.",
    ],
  },
  {
    id: 'target-apogee',
    title: 'Target-Apogee Rocket Design',
    org: 'Personal project',
    period: 'Apr 2026 – Present',
    image: `${import.meta.env.BASE_URL}images/falcon9-night-launch.webp`,
    body: [
      "Right now I'm working through a rocket design constrained on every axis that matters: a hard 7.5-inch length limit, a C5 motor, and a target apogee of exactly 300 meters.",
      "I modeled the airframe in Onshape and ran the flight profile through OpenRocket, adjusting fin geometry and mass distribution between iterations until the simulated apogee landed where I wanted it. The current geometry hits 300 meters within the length constraint, which sounds simple until you've spent evenings tuning a fin change that seemed unrelated to apogee and watching the simulation prove otherwise.",
    ],
    stats: [
      { label: 'Target apogee', value: '300 m' },
      { label: 'Motor', value: 'C5' },
      { label: 'Max length', value: '7.5 in' },
    ],
  },
  {
    id: 'ignitors-rocketry',
    title: 'Ignitors Rocketry Mentorship',
    org: 'Texas A&M University',
    period: 'Feb 2026 – Present',
    body: [
      "Ignitors Rocketry Mentorship is where I actually started building rockets instead of just thinking about them. The program runs through aerodynamics and structures in weekly sessions, and by the time you reach the propulsion unit you're expected to run your own apogee and flight calculations in OpenRocket, not just read about how someone else did it.",
      "I've built three rockets through the program so far, start to finish.",
    ],
  },
  {
    id: 'autodesk-ambassador',
    title: 'Design and Make Ambassador',
    org: 'Autodesk',
    period: 'Feb 2026 – Present',
    body: [
      "Autodesk brought me on to run workshops and outreach events on campus, and to be the technical point of contact between Autodesk and the student community here. I earned the Certified SolidWorks Associate and Autodesk Certified User (Fusion) credentials along the way, mostly so I could actually answer the questions I was fielding at those workshops.",
      "Part of the role has turned into content work too: campaign posts that have reached over 600 impressions on LinkedIn, which was not what I expected to be doing when I signed up to talk about CAD software.",
    ],
  },
  {
    id: 'aggie-robotics',
    title: 'Aggie Robotics',
    org: 'Texas A&M University',
    period: 'Jan 2026 – Present',
    body: [
      "Combat robotics is a different kind of engineering discipline: everything has to survive being hit, on a strict weight limit. With Aggie Robotics I've worked the mechanical side of our 1-pound combat robots, prototyping weapon and drivetrain systems that have to hold up under an impact, not just look good in a CAD render.",
      "I've also ended up running strategy discussions before competitions, which turned out to be its own kind of design problem.",
    ],
  },
  {
    id: 'first-robotics',
    title: 'FIRST Robotics Team',
    org: 'Energy Institute High School',
    period: 'Oct 2022 – Mar 2023',
    body: [
      'This is where it started, in high school. Our FIRST Robotics team built and competed at regional and international events, and I spent most of my time manufacturing mechanical components for the competition robot.',
      'I also ended up compiling scouting data on other teams in Excel between matches, which taught me that half of competitive robotics is just knowing what everyone else is going to do before they do it.',
    ],
  },
]

export const toolbox = [
  'SolidWorks',
  'Autodesk Fusion',
  '3D Printing',
  'OpenRocket',
  'Onshape',
  'JavaScript',
  'Python',
]

export const socials = {
  linkedin: 'https://www.linkedin.com/in/joaquin-kristof-920818335/',
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'journal', label: 'Journal' },
  { id: 'contact', label: 'Contact' },
]
