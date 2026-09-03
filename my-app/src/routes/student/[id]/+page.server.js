export async function load({ fetch, params }) {
    const personApiResponse = await fetch (`https://fdnd.directus.app/items/person/${params.id}`)
    const personApiResponseJSON = await personApiResponse.json()    
    const person = personApiResponseJSON.data

    return { person }
}