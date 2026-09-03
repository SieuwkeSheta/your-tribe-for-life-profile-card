export async function load({ fetch }) {
    const params = new URLSearchParams()
    params.set('filter[squads][squad_id][name]', '2G')
    params.set('sort', 'name')

    const squadApiResponse = await fetch (`https://fdnd.directus.app/items/person/?${params.toString()}`)
    const squadApiResponseJSON = await squadApiResponse.json()    
    const squad = squadApiResponseJSON.data

    return { squad }
}


