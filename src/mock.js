import Mock from 'mockjs'

Mock.mock("/mock.json","get",{
	'user|5-10':[{
		"id|+1":1,
		"password|18-28":0,
	}]
})