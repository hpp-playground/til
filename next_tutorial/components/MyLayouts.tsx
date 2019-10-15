import Header from './Header';

type Props = {};

const layoutStyle = {
	padding: 40,
	border: '1px solid #DDD'
};

const Layout: React.SFC<Props> = props => (
	<div style={layoutStyle}>
		<Header />
		{props.children}
	</div>
);

export default Layout;
