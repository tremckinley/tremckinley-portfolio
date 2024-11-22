import { useState } from 'react'
import ProjectCard from './assets/ProjectCard/ProjectCard'

function App() {

  return (
    <div className='h-screen w-full flex flex-col items-center bg-[#C9E6C050]'>
      <div className="w-full max-w-7xl border flex flex-col items-between h-screen">
      <div className='h-40 border border-green-900 mb-20 p-4'>
        
      </div>
      <div className='flex flex-wrap justify-center'>
        <ProjectCard tools={['html5']}></ProjectCard>
        <ProjectCard tools={['css3']}></ProjectCard>
        <ProjectCard tools={['react']}></ProjectCard>
        
      </div>
      </div>
    </div>
  )
}

export default App
