import React from 'react';
import { Disclosure, Menu, Transition } from  '@headlessui/react';
import { useState } from 'react';

const Navbar = () => {

  const [isShowing, setIsShowing] = useState(false);

  return (
<div>
  <div>
    <div className='flex justify-end'>

      <Disclosure>
        
      {({ open }) => (
        <div>
          <Disclosure.Button onClick={() => setIsShowing((isShowing) => !isShowing)} className="mt-10 ml-10 mr-10 transition-all delay-150 ease-in-out  p-2 text-gray-400 hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                      {open ? (
                        <svg className=" h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>

                      ) : (
                        <svg className=" h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth={1.5} stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

                      )}
            </Disclosure.Button>
            <div>
            <Transition
            show={isShowing}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
             <Menu>
                  <Menu.Button className="space-y-1">
                        <h1>Home</h1>
                        <h1>Work</h1>
                  </Menu.Button>
                </Menu>
          </Transition>
            <Disclosure.Panel className="transntion-all ease-in-out delay-150">

               

      
            </Disclosure.Panel>
            </div>
            

        </div>
      )}
      </Disclosure>
      </div>
    </div>
</div>
    
  )
}

export default Navbar