// Written with the help of Joost in semester 2
function calcAge(birthday){
  const dob = new Date(birthday)
  const month_diff = Date.now() - dob.getTime();
  const age_dt = new Date(month_diff);
  const year = age_dt.getUTCFullYear();
  const age = Math.abs(year - 1970);
  
  return age
}

export async function load({fetch}) {
    const res = await fetch('https://fdnd.directus.app/items/person/276')
    const data = await res.json()
    const person = data.data

    // calculates the person's current age from their birthdate
    const age = calcAge(person.birthdate)

    return { person, age } 
}