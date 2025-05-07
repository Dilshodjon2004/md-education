import { FunctionComponent } from 'react'
import Footer from './footer/footer'
import Header from './header/header'
import { LayoutProps } from './layout.props'
import Sidebar from './sidebar/sidebar'

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<>
			<Header />
			<div>
				<Sidebar />
				<div>{children}</div>
			</div>
			<Footer />
		</>
	)
}

export default Layout

export const withLayout = <T extends Record<string, unknown>>(
	Component: FunctionComponent<T>
) => {
	return function withLayoutComponent(props: T): JSX.Element {
		console.log(props)

		return (
			<Layout>
				<Component {...props} />
			</Layout>
		)
	}
}
