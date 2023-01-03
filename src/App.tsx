import { Button, Form, Input } from 'antd'
import './App.css'
import {
  changePassword,
  changePasswordParam,
  hello,
  helloAdmin,
  index,
  login,
  LoginParam,
  logout,
  refreshToken,
} from './services'

const onFinish = (values: LoginParam) => {
  login(values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log(errorInfo.errorFields[0].errors[0])
}

const onChangePasswordFinish = (values: changePasswordParam) => {
  changePassword(values)
}

const App = () => (
  <div className="App">
    <div>
      <Form
        name="login"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>

    <div>
      <Form
        name="changePassword"
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 16 }}
        onFinish={onChangePasswordFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Old Password"
          name="oldPassword"
          rules={[{ required: true, message: 'Please input old password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="New Password"
          name="newPassword"
          rules={[{ required: true, message: 'Please input new password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Change Password
          </Button>
        </Form.Item>
      </Form>
    </div>

    <div>
      <Button type="primary" onClick={index}>
        Index
      </Button>
    </div>
    <div>
      <Button type="primary" onClick={refreshToken}>
        Refresh
      </Button>
    </div>
    <div>
      <Button type="primary" onClick={logout}>
        Logout
      </Button>
    </div>
    <div>
      <Button type="primary" onClick={hello}>
        Hello
      </Button>
      <Button type="primary" onClick={helloAdmin}>
        Hello Admin
      </Button>
    </div>
  </div>
)

export default App
