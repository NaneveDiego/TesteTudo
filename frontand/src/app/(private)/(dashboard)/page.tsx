import { cookies } from 'next/headers'
export default async function Dashboard() {

  const cookieStore = (await cookies()).get('token')

  console.log(cookieStore)
  if (!cookieStore) {
    return 'erro no token'
  }
  const data = await fetch('http://localhost:5000/post', {
    headers: {
      'Authorization': `Bearer ${cookieStore.value}`, // Use "Bearer" for JWT tokens
      'Content-Type': 'application/json' // Adjust if needed
    }
  }
  )
  const posts = await data.json()


  return (
    <>
      <p>posts</p>
      <div>
        {posts.map((post: any) => (
          <div key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}