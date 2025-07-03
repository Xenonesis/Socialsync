import React from 'react';
import ContactForm from './ContactForm';
import ServicesInfo from './ServicesInfo';

const TeamContactSection = () => {
  return (
    <section className="py-8 xs:py-12 sm:py-16 lg:py-20 bg-muted">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 lg:gap-12 items-start">
          <div className="order-1 lg:order-1">
            <ContactForm />
          </div>
          <div className="order-2 lg:order-2">
            <ServicesInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamContactSection;
