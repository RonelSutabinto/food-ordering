"use client";
import {useState} from "react";
import { FcGoogle } from "react-icons/fc";
import {signIn} from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginInProgress, setLoginInProgress] = useState(false);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setLoginInProgress(true);

    await signIn('credentials', {email, password, callbackUrl: '/'});
    
    setLoginInProgress(false);
  }
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">
        Login
      </h1>
      <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input 
          type="email"
          placeholder="email"
          name="email"
          value={email}
          disabled={loginInProgress}
          onChange={ev => setEmail(ev.target.value)}
        />
        <input 
          type="password"
          placeholder="password"
          name="password"
          value={password}
          disabled={loginInProgress}
          onChange={ev => setPassword(ev.target.value)}
        />
        <button type="submit" disabled={loginInProgress}>Login</button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button 
          type="button"
          onClick={() => signIn('google',{callbackUrl:'/'})}
          className="flex gap-4 justify-center"
        >
          <FcGoogle size={24} />
          Login with google
        </button>
      </form>
    </section>
  );
}