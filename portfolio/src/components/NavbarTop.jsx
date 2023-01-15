import { NavLink } from 'react-router-dom'

export default function NavbarTop() {
  return (
    <div>

         <div className="m-10 sm:px-6 lg:px-8">
         <div className="relative flex h-16 items-start justify-between">
           <div className="flex flex-1 items-start justify-start sm:items-stretch sm:justify-start">
             <div className="flex flex-shrink-0 flex-col items-start text-white">
               <h1 className='text-2xl pb-4'>Tayte Bitton</h1>
               {(isActive) => (
                 <div className='space-y-5 pl-6'>
                    {isActive ? (
                      <h1 className='text-white'>.</h1>
                    ) : (
                      <>
                        <NavLink activeClassName="is-active" to="/"><h1>Home</h1></NavLink>
                        <NavLink activeClassName="is-active" to="/portfolio"><h1>Portfolio</h1></NavLink>
                      </>
                    
                    )}
                 </div>
                 )}
             </div>
           </div>
         </div>
       </div>               
    </div>
  )
}
