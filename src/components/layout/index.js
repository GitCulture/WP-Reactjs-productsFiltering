import { AppProvider } from '../context';
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';


const Layout = ({children, headerFooter}) => {
	const { header, footer } = headerFooter || {};
	return (
		<AppProvider>
			<Header header={header}/>
			<div >
				<div className='flex'>
					<Sidebar />
					<main className="flex-1 flex-row container mx-auto py-4 ">
						{children}
					</main>
				</div>
				
				<Footer footer={footer}/>
			</div>
		</AppProvider>
	)
}

export default Layout
