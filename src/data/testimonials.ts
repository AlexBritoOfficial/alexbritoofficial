// Real LinkedIn recommendations (PORT-4). Quotes are verbatim except for minor
// spelling/whitespace fixes; wording is unchanged.
export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  relationship: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I worked with Alex at State Street in the position of software developer. He was punctual and willing to take on new tasks, showing a genuine interest in learning and growing professionally. He was supportive of his colleagues and maintained a positive attitude in the workplace. I believe with continued development, Alex has the potential to make valuable contributions to any team.",
    name: "Rei Poci",
    title: "Vice President, State Street",
    relationship: "Worked with Alex on the same team",
  },
  {
    quote:
      "I managed Alex when he was a co-op at ASICS Digital working on the Runkeeper mobile app. Alex has endless enthusiasm for learning and software development. While he was a co-op with ASICS Digital Alex was able to quickly learn both Android and iOS development. Alex is scrappy and tenacious when it comes to solving technical problems. Our codebase is not only large but pretty old with lots of different engineers contributing to it over the years. Alex was able to navigate through the code base, implement new features and resolve important bugs. I highly recommend Alex for his technical abilities, work ethic and enthusiasm.",
    name: "David Crelling",
    title: "Senior Director, Software Engineering (Mobile) at Best Egg",
    relationship: "Managed Alex directly at ASICS Digital",
  },
  {
    quote:
      "Alex's vigor for software development is most prominent when working with him within a team. We were on the same team for the Boston Fitness Android app. I've found him to be an excellent teammate and efficient programmer. He provides incredible ideas that are executed skillfully.",
    name: "Gary Hui",
    title: "Associate Technical Consultant",
    relationship: "Worked with Alex on the same team",
  },
  {
    quote:
      "Looking for a programmer who will dive deep and work persistently to help you solve your programming problems? Alex is a skilled programmer in multiple languages including C++ and Java, can work independently but is also a strong team member.",
    name: "Liz Miller",
    title: "Professor Emeritus, Bunker Hill Community College",
    relationship: "Was Alex's professor",
  },
];