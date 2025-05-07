import { IMenuItem } from '@/interfaces/menu.interface'
import { PageCategory } from '@/interfaces/page.interface'
import { createContext, ReactNode, useState } from 'react'

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
}: IAppContext & { children: ReactNode }): JSX.Element => {
	const [menuState, setMenuState] = useState<IMenuItem[]>(menu)

	const setMenu = (newMenu: IMenuItem[]) => {
		setMenuState(newMenu)
	}

	return (
		<AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
			{children}
		</AppContext.Provider>
	)
}
