import { useNavigate } from 'react-router-dom';
import cls from './User.module.css';
import { useAuth } from '../../contexts/FakeAuthContext';

const User = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate('/');
  }

  return (
    <div className={cls.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default User;
