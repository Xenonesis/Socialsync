import TeamHero from '@/components/TeamHero';
import TeamGrid from '@/components/TeamGrid';
import TeamContactSection from '@/components/TeamContactSection';
import { teamMembers } from '@/data/teamMembers';


const Team = () => {
  return (
    <div className="min-h-screen pt-16">
      <TeamHero />
      <TeamGrid teamMembers={teamMembers} />
      <TeamContactSection />
    </div>
  );
};



export default Team;
