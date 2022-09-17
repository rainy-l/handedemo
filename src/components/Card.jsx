import React from 'react';
import { Badge } from 'antd';
import data from '../utils/data'

import img from '../assets/imgs/image.jpg'
import wjx from '../assets/imgs/五角星.png'
import '../assets/styles/card.less'

export default function card() {

	return (
		<div className='cardAll'>
			{
				data.map((item, index) => {
					return (
						<div className='cardOneOf' >
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<div className='cardImg'>
									<img src={img} style={{ width: '100%' }} />
								</div>
								<div>
									<h3>{item.prjName}</h3>
									<p>项目经理：{item.prjManager}</p>
									<p>立项日期：{[item.prjStartDate].join('').split(' ')[0]}</p>
									{
										item.taskCount != null && <p>任务：{item.taskCount} 完成：{item.taskDoneCount} 进行：{item.taskDoingCount}</p>
									}
								</div>
							</div>
							
							<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
								<p>{item.projectStatus == "processing" ? <Badge status="processing" text="进行中" /> : <Badge status="error" text="审批中" />}</p>
								<div style={{ height: 18 }}>
									<img src={wjx} style={{ height: '100%', float: 'right' }} />
								</div>
							</div>
						</div>
					)
				})
			}
		</div >
	)
}
