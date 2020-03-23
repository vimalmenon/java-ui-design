import * as React from "react";

import { Responsive as ResponsiveGridLayout } from "react-grid-layout";

class Layout extends React.Component {

	render () {
		const layout = [
			{i: 'a', x: 0, y: 0, w: 1},
			{i: 'b', x: 1, y: 0, w: 1},
			{i: 'c', x: 2, y: 0, w: 1}
		];
		return (
			<ResponsiveGridLayout layout={layout}
				breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
				cols={{lg: 6, md: 6, sm: 6, xs: 4, xxs: 2}}
				width={3}>
				<div key="a">a</div>
				<div key="b">b</div>
				<div key="c">c</div>
			</ResponsiveGridLayout>
		)
	}
}
export default Layout;