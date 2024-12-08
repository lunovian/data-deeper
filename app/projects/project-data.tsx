export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "REColor",
    year: 2024,
    description:
      "An AI-driven application for recoloring grayscale and faded images, enhancing visual quality with precision and a user-friendly interface.",
    url: "https://github.com/lunovian/REColor",
  },
  {
    title: "AI Tool for Room Decoration",
    year: 2024,
    description:
      "An AI-powered assistant that provides tailored recommendations for furniture, color schemes, and room arrangements based on preferences and layout.",
    url: "https://github.com/Ekanara/AI-Tool-for-Room-Decoration",
  },
  {
    title: "ANAug",
    year: 2023,
    description:
      "A Python-based data augmentation library for specialized domains like medical imaging, improving model robustness and performance in niche applications.",
    url: "https://github.com/lunovian/an-augment",
  },
];
