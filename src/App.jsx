import React, { useState } from 'react'
import { Tabs } from 'antd';
import './assets/styles/home.less'
import Card from './components/Card'
import List from './components/List'


export default function App() {

	const onChange = (key) => {
		console.log(key);
	};

	return (
		<div className='mainApp'>
			<Tabs
				className='homeApp'
				defaultActiveKey="1"
				onChange={onChange}
				items={[
					{
						label: `卡片`,
						key: '1',
						children: <Card />,
					},
					{
						label: `列表`,
						key: '2',
						children: <List />,
					},
				]}
			/>
		</div>
	)
}

