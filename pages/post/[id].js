import {useRouter} from "next/router";

function Post({ data }) {
  const router = useRouter()
  const {id} = router.query

  console.log("data from server side: " + data)

  return <div><h1>Post ID: {id}</h1></div>
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps called!")
  return { props: { data: 3 }}
}

export default Post
