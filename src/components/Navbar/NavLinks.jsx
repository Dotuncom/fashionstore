
import React from 'react'
import {Link} from 'react-router-dom'
import{links} from './MyLink'
const NavLinks = () => {
  
  return (
   <>
   {
    links.map((link,id)=>(
      <div key={id}>
        <div className='px-3 text-left md:cursor-pointer group'>
          <h1 className='py-7'> {link.name}</h1>
           {link.submenu&&(
            <div>
              <div className='absolute top-20  hidden group-hover:block hover:block'>
                <div className='py-3'>
                  {/* tool tip pointer */}
                    <div className='w-4 h-4 left-3 absolute mt-1 bg-white rotate-45'> </div>
                </div>
                <div className='bg-white p-5 grid grid-cols-3 gap-10'>
                  {
                    link.sublinks.map(mysubmenulinks=>(
                      <div>
                        <h1 className='text-lg font-semibold flex items-center'>{mysubmenulinks.Head}</h1>
                        {mysubmenulinks.sublink.map(slink=>(
                        
                          <li className='text-sm text-gray-600 my-2.5'>
                            <Link to={slink.link} className='hover:text-blue-900'>{slink.name}</Link>
                            </li>
                        ))}
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
           )}
        </div>
      </div>
    ))
   }
   </>
  )
}

export default NavLinks