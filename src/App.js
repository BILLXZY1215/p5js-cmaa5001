import logo from './logo.svg'
import React from 'react'
import { useState, useEffect } from 'react'
import { Layout, Space, Col, Row, Button, Progress } from 'antd'

const { Header, Footer, Sider, Content } = Layout

const headerStyle: React.CSSProperties = {
	textAlign: 'center',
	color: '#fff',
	height: 64,
	paddingInline: 50,
	lineHeight: '64px',
	backgroundColor: '#7dbcea',
}

const contentStyle: React.CSSProperties = {
	textAlign: 'center',
	minHeight: 300,
	lineHeight: '120px',
	color: '#fff',
	backgroundColor: '#108ee9',
}

const siderStyle: React.CSSProperties = {
	textAlign: 'center',
	lineHeight: '120px',
	color: '#fff',
	backgroundColor: '#3ba0e9',
}

const footerStyle: React.CSSProperties = {
	textAlign: 'center',
	color: '#fff',
	backgroundColor: '#7dbcea',
}

const twoColors = { '0%': '#108ee9', '100%': '#87d068' }

function App() {
	const [value, setValue] = useState(50)

	const handleKiss = (id) => {
		setValue((v) => (id == 1 ? v + 10 : v - 10))
	}

	return (
		<Space direction='vertical' style={{ width: '100%' }} size={[0, 48]}>
			<Layout>
				<Header style={headerStyle}>Game</Header>
				<Content style={contentStyle}>
					<Row>
						<Col span={12}>P1</Col>
						<Col span={12}>P2</Col>
					</Row>
					<Row>
						<Progress percent={value} status='active' strokeColor={twoColors} />
					</Row>
					<Row>
						<Col span={12}>
							<Button type='primary' onClick={handleKiss.bind(this, 1)}>
								Kiss P1!
							</Button>
						</Col>
						<Col span={12}>
							<Button type='primary' onClick={handleKiss.bind(this, 2)}>
								Kiss P2!
							</Button>
						</Col>
					</Row>
				</Content>
				<Footer style={footerStyle}>Team14</Footer>
			</Layout>
		</Space>
	)
}

export default App
