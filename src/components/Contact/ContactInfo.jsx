import { motion, useReducedMotion } from "framer-motion";
import { Zap } from "lucide-react";

import { contactInfo } from "./contactData";
import ContactCard from "./ContactCard";

export default function ContactInfo() {
  const shouldReduceMotion = useReducedMotion();

  const responseCard = {
    id: "response-time",
    icon: Zap,
    title: "Response Time",
    value: "< 24 Hours",
    subtitle: "Usually replies within one business day.",
    link: null,
  };

  const cards = [...contactInfo, responseCard];

  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <div className="grid grid-cols-1 items-stretch justify-items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {cards.map((item, index) => (
          <motion.div
            key={item.id}
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 18 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.4,
              delay: shouldReduceMotion
                ? 0
                : Math.min(index * 0.06, 0.24),
              ease: "easeOut",
            }}
            className="h-full min-w-0"
          >
            <ContactCard
              icon={item.icon}
              title={item.title}
              value={item.value}
              subtitle={item.subtitle}
              href={item.link}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
