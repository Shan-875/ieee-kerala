import Navbar from "./components/Navbar";
import AnnouncementTicker from "./components/AnnouncementTicker";
import Hero from "./components/Hero";
import About from "./components/About";
import GlobalReach from "./components/GlobalReach";
import Achievements from "./components/Achievements";
import MembershipBenefits from "./components/MembershipBenefits";
import FlagshipConferences from "./components/FlagshipConferences";
import DistinguishedLecturers from "./components/DistinguishedLecturers";
import ResearchHighlights from "./components/ResearchHighlights";
import NewsSection from "./components/NewsSection";
import Events from "./components/Events";
import Milestones from "./components/Milestones";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import StudentOpportunities from "./components/StudentOpportunities";
import TeamSection from "./components/TeamSection";
import SBChapters from "./components/SBChapters";
import FAQ from "./components/FAQ";
import Sponsors from "./components/Sponsors";
import FloatingActions from "./components/FloatingActions";
import Footer from "./components/Footer";
import {
  studentExecom2025,
  professionalExecom2025,
  achievements,
  milestones,
  newsItems,
  globalReach,
} from "./data/siteData";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      <Navbar />
      <AnnouncementTicker />
      <main>
        <Hero />
        <About />
        <GlobalReach data={globalReach} />
        <Achievements achievements={achievements} />
        <MembershipBenefits />
        <FlagshipConferences />
        <DistinguishedLecturers />
        <ResearchHighlights />
        <NewsSection news={newsItems} />
        <Events />
        <Milestones milestones={milestones} />
        <Gallery />
        <Testimonials />
        <StudentOpportunities />
        <TeamSection
          id="student-execom"
          title="Student Execom"
          year="Term 2025"
          members={studentExecom2025}
        />
        <TeamSection
          id="professional-execom"
          title="Professional Execom"
          year="Term 2025"
          members={professionalExecom2025}
        />
        <SBChapters />
        <FAQ />
        <Sponsors />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
