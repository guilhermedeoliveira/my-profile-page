import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Tabs, Tab } from 'material-ui';
import styled from 'styled-components';

const MyAppBar = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	background-color: rgb(63, 81, 181);
	height: auto;
	padding: 1rem 13rem;
	line-height: 20px;
	font-size: 14px;
	-webkit-box-shadow: 0 8px 6px -6px #999;
	-moz-box-shadow: 0 8px 6px -6px #999;
	box-shadow: 0 8px 6px -6px #999;

	> a {
		font-weight: 400;
		text-transform: uppercase;
		text-decoration: none;
		color: #fff;
	}
`;

export default class NavBar extends React.Component {
	render() {
		return (
			<MyAppBar>
				<Link to="/">Home</Link>
				<Link to="/skills">Skills</Link>
				<Link to="/portfolio">Portfolio</Link>
				<Link to="/contact">Contact</Link>
			</MyAppBar>
		);
	}
}
