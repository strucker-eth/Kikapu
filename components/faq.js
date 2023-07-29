import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0  text-navyBlue">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What is Kikapu, and how does it work?",
    answer: "Kikapu is a comprehensive financial management tool designed to help individuals and businesses track their income, expenses, and investments effortlessly. It offers intelligent budgeting, goal setting, and insightful analytics to make informed financial decisions..",
  },
  {
    question: "Is Kikapu secure? How is my financial data protected?",
    answer: "Yes, Kikapu takes your data security seriously. We employ advanced encryption and security measures to safeguard your financial information, ensuring it remains confidential and secure.",
  },
  {
    question: "Can I use Kikapu on multiple devices?",
    answer:
      "Absolutely! Kikapu is built with a mobile-responsive design, allowing you to access your financial data from any device, whether it's a desktop computer, tablet, or smartphone.",
  },
  {
    question: "Is Kikapu suitable for businesses and startups? ",
    answer:
      "Yes, Kikapu is designed to cater to the needs of both individuals and businesses. It offers features like smart budgeting, financial analytics, and goal-oriented planning, making it an ideal tool for startups and small businesses seeking to manage their finances efficiently.",
  },
];

export default Faq;