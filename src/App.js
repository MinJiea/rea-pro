import React, { useState, useReducer }from 'react';
import { Button, Input} from 'antd'
import axios from 'axios';
import Mock from 'mockjs'

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
	// const  [logstate, setLogstate] = useState(0)
	const [state, dispatch] = useReducer(reducer, initialState);
	const data = Mock.mock(
		'/mock.json',
		'get',
		{
			success:true,
			data:true
		}
	)
	return (
	<div>
		<Input placeholder="账号" 
		innerRef={(input) => this.account = input}
		></Input>
		<Input placeholder="密码" 
		innerRef={(input) => this.password = input}
		></Input>
		<Button type="primary" onClick={
			// ()=>dispatch({type:'login'})
			()=>{(axios.get('/mock.json').then((res)=> {console.log(res.data);dispatch({type:'login'})}))}
			// (account,password)=>{(axios.get('/mock.json?account'+account+ '&password=' + password).then((res)=> {console.log(res.data);dispatch({type:'logout'})}))}
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
