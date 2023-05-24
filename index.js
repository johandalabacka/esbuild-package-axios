import * as client from './client.js'

// No top-level awaits allowed so we must put code in a function
(async () => {
  const post = await client.getFirstPost()
  console.log('first post:', post)
})()