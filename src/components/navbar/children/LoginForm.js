import {useState} from 'react'

const LoginForm = ({ onLogin }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        // Pass the username and password back to the parent component
        onLogin(name, password);
        // Reset fields (optional)
        // setName('');
        // setPassword('');
    };

    return (
        <form onSubmit={handleSubmit}>
        <div className='input'>
            <label className='loginLabel'>
                Username:
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
                Password:  
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