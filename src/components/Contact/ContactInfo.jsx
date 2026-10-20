import { contactInfo } from "./contactData";
import ContactCard from "./ContactCard";

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {contactInfo.map((item) => (
        <ContactCard
          key={item.id}
          icon={item.icon}
          title={item.title}
          value={item.value}
          subtitle={item.subtitle}
          href={item.link}
        />
      ))}

      <ContactCard
        icon={() => <span className="text-2xl leading-none">⚡</span>}
        title="Response Time"
        value="< 24 Hours"
        subtitle="Usually replies within one business day."
      />
    </div>
  );
}
