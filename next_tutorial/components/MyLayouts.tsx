import Header from './Header';

type Props = {};

const layoutStyle = {
	margin: 20,
	padding: 20,
	border: '1px solid #DDD'
};

const Layout: React.SFC<Props> = props => (
	<div style={layoutStyle}>
		<Header />
		{props.children}
	</div>
);

export default Layout;
