import { Button } from '@/components/ui/button'
import React from 'react'
import ComapnionCard from '../components/ComapnionCard'
import CompanionsList from '../components/CompanionsList'
import CTA from '../components/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main >
      <h1 >Popular Companions</h1>
      <section className=' flex gap-3 '>
        <ComapnionCard
          id="123"
          name = "Neura the brainy explorer"
          topic="Neural network of the brain"
          subject="Science"
          duration={45}
          color="#ffda6e"
        />
        <ComapnionCard
          id="456"
          name = "Countey the number wizard"
          topic="Detivatives and integrals"
          subject="Maths"
          duration={30}
          color="#e5d0ff"
        />
        <ComapnionCard
          id="789"
          name = "Verba the vucabolary builder"
          topic="English literature"
          subject="English"
          duration={30}
          color="#ffda6e"
        />
        
      </section>

      <section className='home-section'>
        <CompanionsList 
          title = "Recently Completeds sessions"
          companions = {recentSessions}
          classNames = "w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page