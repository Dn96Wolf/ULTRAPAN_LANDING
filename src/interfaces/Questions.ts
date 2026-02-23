
export type FAQItem = {
  question: string;
  answer: string[];
};

export type FAQSection = {
  title: string;
  items: FAQItem[];
};