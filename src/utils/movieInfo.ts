import { categoryList } from "../services/requests"

export function getCategoryName(categoryId: number): string {
	const categoryName = categoryList.find(category => category.id == categoryId)
	return categoryName?.name || ""
}

export function getCategoriesName(categoriesId: number[], limit: number): string[] {
	categoriesId = categoriesId.slice(0, limit)
	const categoriesName = categoriesId.map(getCategoryName)

	return categoriesName
}
