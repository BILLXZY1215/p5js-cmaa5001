import logo from './logo.svg'
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Layout, Space, Col, Row, Button, Progress } from 'antd'
import {
	BrowserRouter,
	Routes,
	Route,
	useNavigate,
	useLocation,
} from 'react-router-dom'

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

function Game() {
	const location = useLocation()
	const player = location.player
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
						<Col span={24}>
							<Button type='primary' onClick={handleKiss.bind(this, player)}>
								Kiss!
							</Button>
						</Col>
					</Row>
				</Content>
				<Footer style={footerStyle}>Team14</Footer>
			</Layout>
		</Space>
	)
}

function Home() {
	const navigate = useNavigate()
	const [player, setPlayer] = useState(1)
	return (
		<Space direction='vertical' style={{ width: '100%' }} size={[0, 48]}>
			<Layout>
				<Content style={contentStyle}>
					<Row>
						<Col span={12}>
							<Button
								type={player == 1 ? 'primary' : 'default'}
								onClick={() => {
									setPlayer(1)
								}}
							>
								P1
							</Button>
						</Col>
						<Col span={12}>
							<Button
								type={player == 2 ? 'primary' : 'default'}
								onClick={() => {
									setPlayer(2)
								}}
							>
								P2
							</Button>
						</Col>
					</Row>
					<Row>
						<Col span={24}>
							<Button
								type='primary'
								onClick={() => {
									navigate('/game', { player: player })
								}}
							>
								Play!
							</Button>
						</Col>
					</Row>
				</Content>
			</Layout>
		</Space>
	)
}

function App() {
	useEffect(() => {
		axios.defaults.baseURL = 'https://localhost:7001/'
	}, [])
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='game' element={<Game />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
