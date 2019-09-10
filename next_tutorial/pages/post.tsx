import Layout from '../components/MyLayouts';
import fetch from 'isomorphic-unfetch';
import { NextPage, NextPageContext } from 'next';
import { Show } from './index';
import { ParsedUrlQuery } from 'querystring';

type Props = {
	show: Show;
};

interface Context extends NextPageContext {
	query: ParsedUrlQuery;
}

const Post: NextPage<Props> = props => (
	<Layout>
		<h1>{props.show.name}</h1>
		<p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
		<img src={props.show.image.medium} />
	</Layout>
);

Post.getInitialProps = async (context: Context) => {
	const { id } = context.query;
	const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
	const show = await res.json();

	console.log(`Fetched show: ${show.name}`);

	return { show };
};

export default Post;
