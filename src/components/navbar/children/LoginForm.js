import {useState} from 'react'

const LoginForm = ({ onLogin }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin(name, password);
    };
    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          console.log('enter press here! ')
          onLogin(name, password);
        }
      }
    return (
        <form onSubmit={handleSubmit}>
        <div className='input'>
            <label className='loginLabel'>
                Login:
                <input
                    className='input'
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
        </div>
        <div className='input'>
            <label className='loginLabel'>
                Пароль:  
                <input
                    className='input'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
        </div>
        <button className='submitButton' type="submit">Войти</button>
    </form>
    );
  }
  
  export default LoginForm;