import { withRouter } from 'next/router';
import Layout from '../components/MyLayouts';
import { WithRouterProps } from 'next/dist/client/with-router';

type Props = {};

const Content: React.ComponentClass<
	Pick<WithRouterProps, never>,
	string
> = withRouter(props => (
	<div>
		<h1>{props.router.query.title}</h1>
		<p>This is the blog post content.</p>
	</div>
));

const Page: React.SFC<Props> = _ => (
	<Layout>
		<Content />
	</Layout>
);

export default Page;
