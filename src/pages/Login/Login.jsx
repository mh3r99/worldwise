import { useEffect, useState } from "react";
import Button from "../../components/Button/Button"
import PageNav from "../../components/PageNav/PageNav"
import cls from "./Login.module.css"
import { useAuth } from "../../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("123");

  const { login, isAuth } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) navigate("/app", { replace: true });
  
  }, [isAuth, navigate])
  

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) login(email, password);
  }
  return (
    <main className={cls.login}>
    <PageNav />

    <form className={cls.form} onSubmit={handleSubmit}>
      <div className={cls.row}>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

      <div className={cls.row}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <div>
        <Button type="primary">Login</Button>
      </div>
    </form>
  </main>
  )
}

export default Login