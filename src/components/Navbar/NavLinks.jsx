
// import React, { useState } from 'react'
// import {Link} from 'react-router-dom'
// import {links} from './MyLink'
// import {FaChevronUp, FaChevronLeft} from 'react-icons/fa6'
// const NavLinks = () => {
//   const[heading, setHeading] =useState('')
//   const[subHeading, setsubHeading] =useState('')

//   return (
//    <>
//    {
//     links.map((link,id)=>(
//       <div key={id}>
//         <div className='px-3 text-left md:cursor-pointer group'>
//           <h1 className='py-7 flex justify-between items-center md:pr-0 p-5' onClick={()=> {
//             heading !== link.name ? setHeading(link.name): setHeading('');setsubHeading('')}}>
//              {link.name}
//              <span>
//               {heading === link.name ?  <FaChevronUp/>: <FaChevronLeft/>}
             
//              </span>
//           </h1>
//            {link.submenu&&(
//             <div>
//               <div className='absolute top-20  hidden group-hover:block hover:block'>
//                 <div className='py-3'>
//                   {/* tool tip pointer */}
//                     <div className='w-4 h-4 left-3 absolute mt-1 bg-white rotate-45'> </div>
//                 </div>
//                 <div className='bg-white p-5 grid grid-cols-3 gap-10'>
//                   {
//                     link.sublinks.map(mysubmenulinks=>(
//                       <div>
//                         <h1 className='text-lg font-semibold flex items-center'>{mysubmenulinks.Head}</h1>
//                         {mysubmenulinks.sublink.map(slink=>(
                        
//                           <li className='text-sm text-gray-600 my-2.5'>
//                             <Link to={slink.link} className='hover:text-blue-900'>{slink.name}</Link>
//                             </li>
//                         ))}
//                       </div>
//                     ))
//                   }
//                 </div>
//               </div>
//             </div>
//            )}
//         </div>

//         {/* mobile menu*/}
//         <div className={`${heading=== link.name? 'md:hidden':'hidden'}`}>

//         {/* sublinks */}
//         {
//           link.sublinks.map((slinks)=>(
//             <div>
//               <div>
//                 <h1 onClick={  ()=> subHeading !== slinks.Head? setsubHeading(slinks.Head):setsubHeading('')} className='flex justify-between items-center md:pr-0 p-5 py-4 pl-7 font-semibold md:pr-0 pr-5'>
//                   {slinks.Head}
//                   <span>
//               {heading === link.name ?  <FaChevronUp/>: <FaChevronLeft/>}
             
//              </span>
//                 </h1>
//                 <div className={`${subHeading!== slinks.Head ? 'md:hidden':'hidden' }`}>
//                   {slinks.sublink.map(slink=>(
//                     <li className='py-3 pl-14'>
//                       <Link to={slink.link} >
//                       {slink.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))
//         }
//         </div>
//       </div>
//     ))
//    }
//    </>
//   )
// }

// export default NavLinks
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { links } from './MyLink'; // Assuming MyLink contains your navigation data
import { FaChevronUp, FaChevronDown, FaChevronRight } from 'react-icons/fa6'; // Added FaChevronDown/Right for better UX

const NavLinks = () => {
  const [openHeading, setOpenHeading] = useState('');
  const [openSubHeading, setOpenSubHeading] = useState('');

  const toggleHeading = (name) => {
    setOpenHeading(openHeading !== name ? name : '');
    setOpenSubHeading(''); // Close any open sub-headings when a main heading is toggled
  };

  const toggleSubHeading = (head) => {
    setOpenSubHeading(openSubHeading !== head ? head : '');
  };

  return (
    <>
      {links.map((link, index) => (
        <div key={link.id || index}> {/* Use link.id if available, otherwise index */}
          {/* Desktop and Mobile Main Link */}
          <div className='px-3 text-left md:cursor-pointer group'>
            <h1
              className='py-7 flex justify-between items-center md:pr-0 p-5'
              onClick={() => toggleHeading(link.name)}
              // ARIA attributes for accessibility
              aria-haspopup={link.submenu ? "menu" : false}
              aria-expanded={openHeading === link.name}
              aria-controls={`menu-${link.name.replace(/\s/g, '-')}`} // Unique ID for controlled element
            >
              {link.name}
              {link.submenu && ( // Only show chevron if there's a submenu
                <span className="md:hidden"> {/* Hide on desktop, show on mobile */}
                  {openHeading === link.name ? <FaChevronUp /> : <FaChevronRight />}
                </span>
              )}
            </h1>

            {/* Desktop Submenu */}
            {link.submenu && (
              <div
                className='absolute top-20 hidden group-hover:block hover:block bg-white p-5 grid grid-cols-3 gap-10'
                id={`menu-${link.name.replace(/\s/g, '-')}`} // Link with aria-controls
              >
                {/* Tooltip pointer */}
                <div className='w-4 h-4 left-3 absolute mt-1 bg-white rotate-45'></div>
                {link.sublinks.map((mysubmenulinks, subIndex) => (
                  <div key={mysubmenulinks.Head || subIndex}>
                    <h1 className='text-lg font-semibold flex items-center'>{mysubmenulinks.Head}</h1>
                    <ul> {/* Use ul for list of links */}
                      {mysubmenulinks.sublink.map((slink, subLinkIndex) => (
                        <li className='text-sm text-gray-600 my-2.5' key={slink.name || subLinkIndex}>
                          <Link to={slink.link} className='hover:text-blue-900'>
                            {slink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu for Sublinks (only visible on small screens) */}
          {link.submenu && ( // Only render mobile submenu if submenu exists
            <div className={`${openHeading === link.name ? 'block' : 'hidden'} md:hidden`}>
              {link.sublinks.map((slinks, subIndex) => (
                <div key={slinks.Head || subIndex}>
                  <h1
                    onClick={() => toggleSubHeading(slinks.Head)}
                    className='flex justify-between items-center md:pr-0 p-5 py-4 pl-7 font-semibold pr-5'
                    // ARIA attributes for accessibility
                    aria-expanded={openSubHeading === slinks.Head}
                    aria-controls={`submenu-${slinks.Head.replace(/\s/g, '-')}`}
                  >
                    {slinks.Head}
                    <span>
                      {openSubHeading === slinks.Head ? <FaChevronUp /> : <FaChevronRight />}
                    </span>
                  </h1>
                  <ul // Use ul for list of links
                    className={`${openSubHeading === slinks.Head ? 'block' : 'hidden'}`}
                    id={`submenu-${slinks.Head.replace(/\s/g, '-')}`}
                  >
                    {slinks.sublink.map((slink, itemIndex) => (
                      <li className='py-3 pl-14' key={slink.name || itemIndex}>
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default NavLinks;