import Head from 'next/head';
import Link from 'next/link';
import { useContext, useState } from 'react';
import Image from'next/image';
import logo from '../../../images/logo.svg'

import { BurgerIcon, TailwindIcon, Bag, User, Wishlist } from '../../icons';
import { AppContext } from '../../context';
import { isArray, isEmpty } from 'lodash';

const Header = ( { header } ) => {
	
	const [ cart, setCart ] = useContext( AppContext );
	const { headerMenuItems, siteDescription, siteLogoUrl, siteTitle, favicon } = header || {};
	
	const [ isMenuVisible, setMenuVisibility ] = useState( false );
	
	return (
		<>
			<Head>
				<title>{ siteTitle || 'Nexts WooCommerce' }</title>
				<link rel="icon" href={ favicon || '/favicon.ico' }/>
				<link rel="stylesheet" href="https://bootswatch.com/5/flatly/bootstrap.min.css"/>
			</Head>
			<div className="header sticky top-0 z-10">
				<nav className="bg-white py-5">
					<div className="flex items-center justify-between flex-wrap container mx-auto">
						<div className="flex ml-4 items-center flex-shrink-0 text-black mr-20">
							<Link  href="/">
								<a>
									{
										siteLogoUrl ? (
                                                <Image src={ siteLogoUrl } alt={ `${ siteTitle } logo` }
											     width="86"
											     height="86"/>
											
										) : 
                                                <Image src={logo} alt="" width="280" height="100%" />
                                            
									}
								</a>
							</Link>
							{/* <span>
								<Link href="/">
									<a className="font-semibold text-xl tracking-tight">{ siteTitle || 'WooNext' }</a>
								</Link>
								{ siteDescription ? <p>{ siteDescription }</p> : null } 
							</span> */}
						</div>
						<div className="block lg:hidden">
							<button
								onClick={ () => setMenuVisibility( ! isMenuVisible ) }
								className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-black hover:border-black mb-8 mr-5 ">
								<BurgerIcon className="fill-current h-3 w-3"/>
							</button>
						</div>
						<div
							className={ `${ isMenuVisible ? 'max-h-full' : 'h-0' } overflow-hidden w-full lg:h-full block flex-grow lg:flex lg:items-center lg:w-auto` }>
							<div className="text-sm ml-4 font-medium uppercase mb-5 lg:flex-grow ">
								{ ! isEmpty( headerMenuItems ) && headerMenuItems.length ? headerMenuItems.map( menuItem => (
                                    // { menuItem?.url ?? '/' }> 
									<Link key={ menuItem?.ID } href='#'>
										<a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10"
										   dangerouslySetInnerHTML={ { __html: menuItem.title } }/>
									</Link>
								) ) : null }
							</div>
							<div className="text-sm  ml-4 font-medium">
								<a href="#responsive-header"
								   className="flex mb-5 mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
									<span className="flex flex-row items-center lg:flex-col">
									<User className="mr-1 lg:mr-0"/>
									Profile
									</span>
								</a>
								<a href="#responsive-header"
								   className="flex mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
									<span className="flex flex-row items-center lg:flex-col">
										<Wishlist className="mr-1 lg:mr-0"/>
										Wishlist
									</span>
								</a>
								<Link href="/cart">
									<a className="flex mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
									<span className="flex flex-row items-center lg:flex-col">
									<Bag className="mr-1 lg:mr-0"/>
										<span className="ml-1">Bag{ cart?.totalQty ? `(${cart?.totalQty})` : null }</span>
									</span>
									</a>
								</Link>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</>
	);
};

export default Header;