import React, { useState, useReducer, useRef }from 'react';
import { Button, Input} from 'antd'
import axios from 'axios';
// import Mock from 'mockjs'
import './mock';

function reducer(state, action) {
  switch (action.type) {
    case 'login':
      return {v:false};
    case 'logout':
      return {v:true};
    default:
      throw new Error();
  }
}
const initialState = {v:true};
function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [input1,setInput1] = useState(0);
	const [input2,setInput2] = useState(0);
	// const data = Mock.mock(
	// 	'/mock.json',
	// 	'get',
	// 	{
	// 		success:true,
	// 		data:true
	// 	}
	// )
	const input11 = useRef();
	const input22 = useRef();
	const Change = () => {
		axios.get('/mock.json').then((res)=> {	
			res.data.id == input11.current&&res.data.password == input22.current?
			// console.log(1):
			dispatch({type:'login'}):
			console.log('wu')
		})
	};
	return (
	<div>
		<Input placeholder="账号" onChange={e=>{
			input11.current = e.target.value;
			setInput1(e.target.value);
		}}
		// ref = {input1}
		></Input>
		<Input placeholder="密码"  onChange={e=>{
			input22.current = e.target.value;
			setInput2(e.target.value);
		}}
		// ref = {input2}
		// ref={(input) => this.password = input}
		></Input>
		<Button type="primary" onClick={Change
			// ()=>{(axios.get('/mock.json').then((res)=> {res.data.user.id === this.innerRefs.value&&res.data.user.password === this.password.value?dispatch({type:'login'}):console.log('wu')}))}
		}>登录</Button>
		{
			state.v ?
			<Button type="primary" >未登录</Button> :
			<Button type="primary" onClick={() => dispatch({type:'logout'})}>退出</Button>
		}
	</div>
  );
}

export default App;
