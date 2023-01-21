import React from 'react'
import Thumbnail from './Thumbnail'

const TopAnime = () => {
  return (
    <main>
       <p className="font-orbitron font-bold text-sm mx-5 text-center custombp:text-left sm:text-xl xr:text-center pro:text-center ">Showing Top Animes</p>
       <div className='grid grid-cols-1 sm:grid-cols-4 se:grid-cols-2 mini:grid-cols-3 su:grid-cols-4 gap-6 my-5 justify-items-center'>
       <Thumbnail/>
       </div>
    </main>
  )
}

export default TopAnime