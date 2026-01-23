'use client';

import AboutHero from './_components/hero';
import MissionVision from './_components/mission-vision';
import Values from './_components/values';
import Story from './_components/story';
import Stats from './_components/stats';
import Team from './_components/team';

export default function AboutPage() {
  return (
    <div>
      
      <AboutHero />
      <Story />
      <MissionVision />
      <Values />
      <Stats />
      <Team />
    </div>
  )
}