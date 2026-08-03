import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-neutral-800">
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-[#f5f5f5] group-hover:text-[#c9a769] transition-colors pr-8">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-[#c9a769] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}
      >
        <p className="text-[#a3a3a3] text-base leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: { question: string; answer: string }[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className = '' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`w-full max-w-3xl mx-auto ${className}`}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};
