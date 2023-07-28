import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "",
  desc: "Explore the myriad of benefits Kikapu offers and see how it can transform your financial management journey.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand your Finances",
      desc: "Gain deep insights into your financial activities, empowering you to make informed decisions and improve your overall financial health. 🧠💡",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Streamline Financial Acquisition",
      desc: "Enhance your ability to acquire and manage funds efficiently, ensuring your financial goals are within reach. 🚀📈",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Foster Long-term Financial Retention",
      desc: "Develop effective strategies to retain and grow your wealth, securing a stable financial future. 🔒💰",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Explore additional advantages of Kikapu in the realm of financial management",
  desc: "",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Comprehensive Expense Tracking",
      desc: "Effortlessly monitor your income and expenses in real-time, gaining a clear picture of your financial health. 💰📈",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Real-time Investment and Savings  Insights",
      desc: "Stay informed about your investments' performance, enabling you to make strategic decisions to grow your wealth. 📊💹",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Smart Budget Allocation",
      desc: "Create customized budgets that align with your financial goals, ensuring your spending stays on track. 📅📉",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
