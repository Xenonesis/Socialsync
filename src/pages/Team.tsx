import TeamHero from '@/components/TeamHero';
import TeamGrid from '@/components/TeamGrid';
import ContactForm from '@/components/ContactForm';
import ServicesInfo from '@/components/ServicesInfo';


const Team = () => {
  const teamMembers = [
    {
      name: "Himanshu",
      role: "Founder",
      bio: "Founder of Social Sync, dedicated to providing social media management services.",
      avatar: `${window.location.origin}/owner.jpg`,
      contact: "+91 7061752337",
      email: "business@socialsync.com",
      linkedin: "https://www.linkedin.com/company/socialsync",
      expertise: [
        "Business Strategy",
        "Entrepreneurial Leadership",
        "Digital Marketing",
        "Client Relations",
        "Brand Development"
      ],
    },
    {
      name: "Aditya",
      role: "Technical Lead",
      bio: "Technical expert at Social Sync, specializing in web development and creating robust digital solutions.",
      avatar: `${window.location.origin}/1.png`,
      contact: "+91 9142409903",
      email: "itisaddy7@gmail.com",
      linkedin: "https://www.linkedin.com/in/itisaddy/",
      portfolio: "https://iaddy.netlify.app/",
      expertise: [
        "Full-Stack Development",
        "React.js/Next.js",
        "Node.js & Express",
        "Database Architecture",
        "Web Security"
      ],
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <TeamHero />
      <TeamGrid teamMembers={teamMembers} />
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
    </div>
  );
};



export default Team;