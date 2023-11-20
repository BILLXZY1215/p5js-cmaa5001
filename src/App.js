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
	backgroundColor: '#ff54e4',
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
	const { innerWidth: width, innerHeight: height } = window
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
					<Row justify='space-between'>
						{/* <Progress percent={value} status='active' strokeColor={twoColors} /> */}
						<div>
							{/* <Col span={12}> */}
							{p1 <= 0 ? (
								<Image
									width={width * 0.05}
									height={300}
									src='./kisser1/1.png'
									preview={false}
								/>
							) : p1 == 1 ? (
								<Image
									width={width * 0.1}
									height={300}
									src='./kisser1/1.png'
									preview={false}
								/>
							) : p1 == 2 ? (
								<Image
									width={width * 0.2}
									height={300}
									src='./kisser1/2.png'
									preview={false}
								/>
							) : p1 == 3 ? (
								<Image
									width={width * 0.3}
									height={300}
									src='./kisser1/3.png'
									preview={false}
								/>
							) : p1 == 4 ? (
								<Image
									width={width * 0.4}
									height={300}
									src='./kisser1/4.png'
									preview={false}
								/>
							) : p1 == 5 ? (
								<Image
									width={width * 0.5}
									height={300}
									src='./kisser1/5.png'
									preview={false}
								/>
							) : p1 == 6 ? (
								<Image
									width={width * 0.6}
									height={300}
									src='./kisser1/6.png'
									preview={false}
								/>
							) : p1 == 7 ? (
								<Image
									width={width * 0.7}
									height={300}
									src='./kisser1/7.png'
									preview={false}
								/>
							) : p1 == 8 ? (
								<Image
									width={width * 0.8}
									height={300}
									src='./kisser1/8.png'
									preview={false}
								/>
							) : p1 == 9 ? (
								<Image
									width={width * 0.9}
									height={300}
									src='./kisser1/9.png'
									preview={false}
								/>
							) : (
								<Image
									width={width * 0.95}
									height={300}
									src='./kisser1/10.png'
									preview={false}
								/>
							)}
						</div>
						{/* </Col> */}
						{/* <Col span={12}> */}
						<div>
							{p2 <= 0 ? (
								<Image
									width={width * 0.05}
									height={300}
									src='./kisser2/1.png'
									preview={false}
								/>
							) : p2 == 1 ? (
								<Image
									width={width * 0.1}
									height={300}
									src='./kisser2/1.png'
									preview={false}
								/>
							) : p2 == 2 ? (
								<Image
									width={width * 0.2}
									height={300}
									src='./kisser2/2.png'
									preview={false}
								/>
							) : p2 == 3 ? (
								<Image
									width={width * 0.3}
									height={300}
									src='./kisser2/3.png'
									preview={false}
								/>
							) : p2 == 4 ? (
								<Image
									width={width * 0.4}
									height={300}
									src='./kisser2/4.png'
									preview={false}
								/>
							) : p2 == 5 ? (
								<Image
									width={width * 0.5}
									height={300}
									src='./kisser2/5.png'
									preview={false}
								/>
							) : p2 == 6 ? (
								<Image
									width={width * 0.6}
									height={300}
									src='./kisser2/6.png'
									preview={false}
								/>
							) : p2 == 7 ? (
								<Image
									width={width * 0.7}
									height={300}
									src='./kisser2/7.png'
									preview={false}
								/>
							) : p2 == 8 ? (
								<Image
									width={width * 0.8}
									height={300}
									src='./kisser2/8.png'
									preview={false}
								/>
							) : p2 == 9 ? (
								<Image
									width={width * 0.9}
									height={300}
									src='./kisser2/9.png'
									preview={false}
								/>
							) : (
								<Image
									width={width * 0.95}
									height={300}
									src='./kisser2/10.png'
									preview={false}
								/>
							)}
						</div>
						{/* </Col> */}
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
	const { innerWidth: width, innerHeight: height } = window
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
					<Image width={width} src='./cover.png' preview={false} />
				) : (
					<Content style={contentStyle}>
						<Row>
						<Col span={12} style={{ height: '50vh', marginTop:'5vh'}}>
								<Image width={'50%'} onClick={() => {setPlayer(1)}} src="k1.png" preview={false}/>
						</Col>
						<Col span={12} style={{ height: '50vh'}}>
						<Image  width={'50%'} onClick={() => {setPlayer(2)}}  src="k2.png" preview={false}/>
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
