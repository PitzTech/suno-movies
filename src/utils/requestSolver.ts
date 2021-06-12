import preferences from "../model/preferences"

export function solveParams(params: string) {
   const newUrl = `${params}&api_key=${preferences.API_KEY}&language=${preferences.language}`

   return newUrl
}
