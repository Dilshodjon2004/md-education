import { IMenuItem } from '@/interfaces/menu.interface'
import { PageCategory } from '@/interfaces/page.interface'
import { createContext, PropsWithChildren, useEffect, useState } from 'react'

export interface IAppContext {
	menu: IMenuItem[]
	firstCategory: PageCategory
	setMenu?: (newMenu: IMenuItem[]) => void
}

export const AppContext = createContext<IAppContext>({
	menu: [],
	firstCategory: PageCategory.Courses,
})

export const AppContextProvider = ({
	firstCategory,
	menu,
	children,
}: PropsWithChildren<IAppContext>): JSX.Element => {
	const [menuState, setMenuState] = useState<IMenuItem[]>(menu)

	// useEffect(() => {
	// 	setMenuState(menu)
	// }, [menu])

	const setMenu = (newMenu: IMenuItem[]) => {
		setMenuState(newMenu)
	}

	useEffect(() => {
		setMenu(menu)
	}, [menu])

	return (
		<AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
			{children}
		</AppContext.Provider>
	)
}
