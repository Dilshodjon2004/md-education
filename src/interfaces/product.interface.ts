export interface IProduct {
	alias: string
	title: string
	_id: string
	productId: string
	category: string
	price: string
	credit: string
	images: string
	oldPrice: number
	description: string
	advantages: string
	disadvantages: string
	tags: string[]
	characteristics: ICharacteristic[]
	intialRating: number
	reviews: IReview[]
	reviewCount: number
}

export interface ICharacteristic {
	name: string
	value: string
}

export interface IReview {
	_id: string
	name: string
	title: string
	description: string
	rating: number
	productId: string
}
