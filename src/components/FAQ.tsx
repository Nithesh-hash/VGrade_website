import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    question: "How to use the GPA Calculator?",
    answer: "Enter credits and grade for each course. Add more courses as needed using 'Add Course'. Click 'Calculate GPA' to get your result and download it for future reference."
  },
  {
    question: "How to use the CGPA Calculator?",
    answer: "Enter your previous CGPA, total credits completed so far, your current semester GPA, and credits taken this semester. Click 'Calculate CGPA' to get your result."
  },
  {
    question: "How does the Grade Impact Analysis work?",
    answer: "Once you calculate your GPA, use this feature to see exactly how changing individual course grades would affect your overall semester GPA."
  },
  {
    question: "How do I use the Target CGPA Planner?",
    answer: "Enter your current CGPA, credits completed, credits registered this semester, and your target CGPA. The required GPA for this semester will update instantly as you type."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section container" id="faq">
      <div className="faq-header">
        <h2>Frequently asked questions.</h2>
      </div>
      
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${openIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span className="faq-icon">
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
