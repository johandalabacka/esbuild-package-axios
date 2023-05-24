import axios from "axios"

export async function getFirstPost() {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
  return data
}