import logo from './logo.svg'
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Layout, Space, Col, Row, Button, Progress, Image } from 'antd'
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
	const player = location.state.player
	console.log(player)
	// const [value, setValue] = useState(50)

	const [timer, setTimer] = useState(false)

	const [p1, setP1] = useState(0)
	const [p2, setP2] = useState(0)

	const [p1Win, setP1Win] = useState(0)
	const [p2Win, setP2Win] = useState(0)

	const length = 10

	useEffect(() => {
		async function getValue() {
			await axios
				.get(`/value/1`)
				.then((resp) => {
					setP1(resp.data)
				})
				.catch((e) => {
					console.log(e)
				})
			await axios
				.get(`/value/2`)
				.then((resp) => {
					setP2(resp.data)
				})
				.catch((e) => {
					console.log(e)
				})
		}
		setTimeout(() => {
			getValue()
			if (p1 >= 10) {
				setP1Win(1)
			}
			if (p2 >= 10) {
				setP2Win(1)
			}
			setTimer((v) => !v)
		}, 1000)
	}, [timer])

	const handleKiss = async (id) => {
		// setValue((v) => (id == 1 ? v + 10 : v - 10))
		await axios
			.post(`/value/${id}/${id == 1 ? p1 + 1 : p2 + 1}`)
			.then(async (resp) => {
				if (p1 + p2 >= 10) {
					await axios
						.post(`/value/${id == 1 ? 2 : 1}/${id == 1 ? p2 - 1 : p1 - 1}`)
						.catch((e) => {
							console.log(e)
						})
				}
			})
			.catch((e) => {
				console.log(e)
			})
		setTimer((v) => !v)
	}

	return (
		<Space direction='vertical' style={{ width: '100%' }} size={[0, 48]}>
			<Layout>
				<Header style={headerStyle}>Game</Header>
				<Content style={contentStyle}>
					<Row>
						<Col span={12}>P1: {p1}</Col>
						<Col span={12}>P2: {p2}</Col>
					</Row>
					<Row>
						{/* <Progress percent={value} status='active' strokeColor={twoColors} /> */}
						<Col span={12}></Col>
						<Col span={12}></Col>
					</Row>
					<Row>
						<Col span={24}>
							<Button
								type='primary'
								onClick={handleKiss.bind(this, player)}
								disabled={p1Win || p2Win}
							>
								Kiss!
							</Button>
						</Col>
					</Row>
					<Row>{p1Win ? 'P1 Win!' : p2Win ? 'P2 Win!' : ''}</Row>
				</Content>
				<Footer style={footerStyle}>Team14</Footer>
			</Layout>
		</Space>
	)
}

function Home() {
	const navigate = useNavigate()
	const [player, setPlayer] = useState(1)
	const [isCover, setIsCover] = useState(1)
	useEffect(() => {
		async function clearValue() {
			await axios.post('/value/clear').catch((e) => console.log(e))
		}
		clearValue()
		setTimeout(() => {
			setIsCover(0)
		}, 2000)
	}, [])
	return (
		<Space direction='vertical' style={{ width: '100%' }} size={[0, 48]}>
			<Layout>
				{isCover ? (
					<Image width={2000} src='./cover.png' preview={false} />
				) : (
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
										navigate('/game', { state: { player: player } })
									}}
								>
									Play!
								</Button>
							</Col>
						</Row>
					</Content>
				)}
			</Layout>
		</Space>
	)
}

function App() {
	useEffect(() => {
		axios.defaults.baseURL = 'https://124.222.21.202:7777/'
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
