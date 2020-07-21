import React, { useState, useReducer }from 'react';
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
	// const data = Mock.mock(
	// 	'/mock.json',
	// 	'get',
	// 	{
	// 		success:true,
	// 		data:true
	// 	}
	// )
	return (
	<div>
		<Input placeholder="账号" id = 'input1'
		// innerRef={(input) => this.account = input}
		></Input>
		<Input placeholder="密码" 
		innerRef={(input) => this.password = input}
		></Input>
		<Button type="primary" onClick={
			()=>{(axios.get('/mock.json').then((res)=> {res.data.id === document.getElementById('input1').value?dispatch({type:'login'}):console.log('wu')}))}
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
