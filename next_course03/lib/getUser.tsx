
export default async function getUser(userId: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    
    if(!response.ok) undefined

      return response.json()
}
