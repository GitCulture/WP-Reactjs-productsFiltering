import {sanitize} from '../../../utils/miscellaneous';
import { isEmpty, isArray } from 'lodash';
import Link from 'next/link';
import { getIconComponentByName } from '../../../utils/iconsmap';

const Footer = ({ footer }) => {
  // console.log('footer', footer);

  const { copyrightText, footerMenuItems, sidebarOne, sidebarTwo, socialLinks } = footer || {};

  return (
    <footer className="bg-blue-400 p-6 mx-auto">
    <div className="container flex sm:flex-wrap w-full overflow-hidden mx-auto ">
        <div className="flex flex-wrap w-full items-stretch  overflow-hidden text-white  ">
          {/* WidgetOne */}
          <div className="  w-full sm:w-full lg:w-1/4 my-1 px-1 overflow-hidden font-semibold ">
              <div dangerouslySetInnerHTML={{ __html: sanitize(sidebarTwo)}}></div>
          </div>
          {/*WidgetTwo*/}
          <div className="  w-full sm:w-full lg:w-1/4 my-1 px-1 overflow-hidden font-semibold ">
              <div dangerouslySetInnerHTML={{ __html: sanitize(sidebarOne)}}></div>
          </div>
          {/*WidgetTwo*/}
          <div className="  w-full sm:w-full lg:w-1/4 my-1 px-1 overflow-hidden font-semibold ">
              <div dangerouslySetInnerHTML={{ __html: sanitize(sidebarOne)}}></div>
          </div>
          <div className="  w-full sm:w-full lg:w-1/4 my-1 px-1 overflow-hidden font-semibold ">
              <div>Widget </div>
          </div>
        </div>
    </div>
    <div className="container flex  flex-wrap overflow-hidden mx-auto ">
        

        <div className=" w-full flex justify-end mt-7 mb-5 ">
          <div className=' w-full  mt-4'>
          { ! isEmpty( footerMenuItems ) && footerMenuItems.length ? footerMenuItems.map( menuItem => (
                    <Link key={ menuItem?.ID } href='#'>
                      <a className="block mt-4  font-semibold lg:inline-block lg:mt-0px text-black hover:text-white mr-10"
                        dangerouslySetInnerHTML={ { __html: menuItem.title } }/>
                    </Link>
                  ) ) : null }
          </div>
              { !isEmpty(socialLinks) && isArray(socialLinks) ? (
                <ul className='flex items-end'>
                  { socialLinks.map( socialLink => (
                    <li key={socialLink?.iconName} className='ml-4 '>
                      <a href={socialLink?.iconUrl || '/'}>
                        <div className="">
                          { getIconComponentByName(socialLink?.iconName)}
                        </div>
                        
                        <span className="sr-only ">{socialLink?.iconName}</span>
                      </a>
                    </li>
                  ))}

                </ul>
              ) : null}
        </div>

      </div>
      
    </footer>
  )
}

export default Footer