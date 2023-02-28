
import HeroSection from '../components/HeroSection'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import GithubCTA from '../components/GithubCTA'
import WorkHistory from '../components/WorkHistory'
import Recommendation from '../components/Recommendation'
import Socials from '../components/Socials'

export default function Home() {
  return (
    <main className={`App`}>
      <header className='header'>
        <div className='header_container'>
          <img className='header_img' src="https://ik.imagekit.io/s93qwyistj0/valtteriOnline/heading_cube_l-ZHHiM7Z.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663977666465" alt="cube" />
          Valtteri Juvonen
        </div>
      </header>
      <HeroSection />
      {/* <Contributions /> */}
      <Projects />
      <Skills />
      <GithubCTA />
      <WorkHistory />
      <div className='section_divider'></div>
      <Recommendation />
      <Socials />
    </main>
  )
}
