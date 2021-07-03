import "../AuthForm/index.css";
import Form from '../AuthForm'

const Login = ({onSubmit}) => {
  return (
    <Form onSubmit={onSubmit}/>
  );
}

export default Login;
