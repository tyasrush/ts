import {useRouter} from "next/router";

function Post({ data }) {
  const router = useRouter()
  const {id} = router.query

  console.log("data from server side: " + data)

  return <div><h1>Post ID: {id}</h1></div>
}


export function getStaticPaths() {
	return { props: {data: 2}}
}

export default Post
