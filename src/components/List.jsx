import { Space, Table, Tag, Badge } from 'antd';
import React from 'react';
import { StarOutlined } from '@ant-design/icons';
import data from '../utils/data';

import '../assets/styles/list.less'
import wjx from '../assets/imgs/五角星.png'

export default function list() {

	const columns = [
		{
			title: '所属类品',
			dataIndex: 'productCategory',
			key: 'productCategory',
			render: (text) => <>
				<img src={wjx} style={{ width: 16, marginRight: 15, marginBottom: 5 }} />
				{text}
			</>
		},
		{
			title: '项目类别',
			dataIndex: 'prjCategory',
			key: 'prjCategory',
		},
		{
			title: '项目编号',
			dataIndex: 'number',
			key: 'number',
		},
		{
			title: '项目名称',
			key: 'prjName',
			dataIndex: 'prjName',
		},
		{
			title: '项目状态',
			// dataIndex: 'projectStatus',
			key: 'projectStatus',
			render: (_, { projectStatus }) => {
				// console.log(projectStatus);
				return (
					projectStatus == "processing" ? <Badge status="processing" text="进行中" /> : <Badge status="error" text="审批中" />
				)

			}
		},
		{
			title: '项目经理',
			dataIndex: 'prjManager',
			key: 'prjManager',
		},
		{
			title: '所属部门',
			dataIndex: 'department',
			key: 'department',
		},
		{
			title: '项目计划时间',
			// dataIndex: 'time',
			key: 'time',
			render: (_, { prjStartDate, prjEndDate }) => {
				let startTime = [prjStartDate].join('').split(' ')[0]
				let endTime = [prjEndDate].join('').split(' ')[0]
				return (
					<>
						{startTime} ~ {endTime}
					</>
				)
			}
		},
	];

	const Data = data
	return (
		<div>
			<Table
				columns={columns}
				dataSource={Data}
				pagination={false}
				rowClassName='rowEven'

			/>
		</div>
	)
}
