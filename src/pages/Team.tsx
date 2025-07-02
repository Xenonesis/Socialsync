import TeamHero from '@/components/TeamHero';
import TeamGrid from '@/components/TeamGrid';
import ContactForm from '@/components/ContactForm';
import ServicesInfo from '@/components/ServicesInfo';


const Team = () => {
  const teamMembers = [
    {
      name: "Himanshu",
      role: "Founder",
      bio: "Founder of Social Sync, dedicated to providing innovative web solutions and social media management services.",
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
      <section className="py-16 sm:py-20 bg-muted">
        <div className="container mx-auto mobile-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            <ContactForm />
            <ServicesInfo />
          </div>
        </div>
      </section>
    </div>
  );
};



export default Team;