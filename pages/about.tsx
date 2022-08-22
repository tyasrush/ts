import { GetStaticProps} from "next";

function About({ data }) {
	console.log(data);
	return (
		<div>
			<h1>About</h1>
		</div>
	);
}

export const getStaticProps: GetStaticProps =  async () => {
	return { props: { data: 1 } };
}


export default About;
