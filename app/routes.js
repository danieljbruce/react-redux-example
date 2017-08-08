import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FilterableTable from './containers/FilterableTable';
import About from './components/About';
import Contact from './components/Contact';

export default (
	<Switch>3
		<Route exact path="/" component={FilterableTable} />
		<Route path="/about" component={About} />
		<Route path="/contact" component={Contact} />
	</Switch>
);
