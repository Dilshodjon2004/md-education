export enum PageCategory {
	Courses,
	Books,
}

export interface IPage {
	_id: string
	alias: string
	title: string
	tags: string[]
	description: string
	hh: IHhData
	category: string
	advantages: IAdvantageData[]
}

export interface IHhData {
	count: number
	juniorSalary: number
	middleSalary: number
	seniorSalary: number
}

export interface IAdvantageData {
	title: string
	description: string
	id: string
}
