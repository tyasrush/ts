import {useRouter} from "next/router";

function PostSlug() {
  const router = useRouter()
  const {slug} = router.query

  return <div><h1>Post Slug: {slug}</h1></div>
}

export default PostSlug
