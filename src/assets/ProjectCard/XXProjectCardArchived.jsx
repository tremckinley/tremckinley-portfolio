export default function XXProjectCard(props) {
    const {project} = props;
    return (
      <div className='flex flex-col bg-white rounded-lg p-1 border border-black w-fit'>
        <div className='flex mb-4'>
            <div className="bg-orange-100 w-48"></div>
          {/* <img src={project.image} className='flex border border-gray-300 rounded-lg w-64' alt={`information about ${project.name}`} /> */}
          <div className='flex flex-col w-64 px-4'>
            <div className='text-4xl mb-4'>Fright Night</div>
            <div className='flex justify-between'><div className='font-bold'>Nickname</div><div>Guessing Game</div></div>
            <div className='flex justify-between'><div className='font-bold'>Capital</div><div>Here you go</div></div>
             <div className='flex justify-between'><div className='font-bold'>Population</div><div>So many</div></div>
          </div>
        </div>
        <div>Description</div>
      </div>
    )
  }