import { useState } from 'react'
import ProjectCard from './assets/ProjectCard/ProjectCard'

function App() {

  return (
    <div className='h-screen w-full flex flex-col items-center'>
      <div className="w-full max-w-7xl border flex flex-col items-center h-screen">

      <div className='m-20 flex flex-wrap justify-center'>
        <ProjectCard tools={['html5']}></ProjectCard>
        <ProjectCard tools={['css3']}></ProjectCard>
        <ProjectCard tools={['react']}></ProjectCard>
        <ProjectCard tools={['html5']}></ProjectCard>
        <ProjectCard tools={['html5']}></ProjectCard>
      </div>
      </div>
    </div>
  )
}

export default App
