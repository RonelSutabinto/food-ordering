
"use client"
import { FcGoogle } from "react-icons/fc";
import {useState} from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleFormSubmit(e){
    e.preventDefault();

    fetch('api/register', {
      method: 'POST',
      body: JSON.stringify(email, password),
      headers: {'Content-Type': 'application/json'},
    })
  }
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">
        Register
      </h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input 
          type="email" 
          placeholder="email"
          value={email}
          onChange={ e => setEmail(e.target.value)}
        />
        <input 
          type="password" placeholder="password"
          vlaue={password}
          onChange={ e => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>

        <div className="my-4 text-center text-gray-500">
          or Login with provider
        </div>
        <button className="flex gap-4 justify-center items-center">
          <FcGoogle size={24} />
          Login with google
        </button>
      </form>
    </section>
  )
}