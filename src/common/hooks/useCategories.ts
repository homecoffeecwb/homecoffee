export type Category = {
	id: number;
	name: {
		[Key: string]: string;
	}
}

export const useCategories = () => {
    const categories: Category[] = [
        {
            id: 0,
            name: {
							PT: 'Bebidas',
							EN: 'Drinks',
						},
        },
        {
            id: 1,
            name: {
							PT: 'Comidas',
							EN: 'Food',
						},
        },
        {
            id: 2,
            name: {
							PT: 'Doces',
							EN: 'Sweet',
						},
        },
    ]

    return categories
}
