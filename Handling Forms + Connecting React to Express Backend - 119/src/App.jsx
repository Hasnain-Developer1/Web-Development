import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm()

  const delay = (d) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }
  const onSubmit = async data => {
    // await delay(2)  //Simulating Network Delay
    let r = await fetch('http://localhost:3000/', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    let res = await r.text()

    console.log(data, res)
    // if(data.username!=='Hasnain'){
    //   setError('myform', { message: "Your form is not in Good order because credentials are invalid" })
    // } 
    // if(data.username === 'Ayyan'){
    //   setError('blocked', { message: "Sorry This user is blocked" })
    // }
  }

  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username' {...register('username', { required: { value: true, message: "Username is required" }, minLength: { value: 3, message: "Username must be at least 3 characters" }, maxLength: { value: 8, message: "Username must be at most 8 characters" } })} type="text" /><br />
          {errors.username && <div className='red'>{errors.username.message}</div>}
          <input placeholder='password' {...register('password', { required: { value: true, message: "Password is required" }, minLength: { value: 7, message: "Password must be at least 7 characters" } })} type="password" /> <br />
          {errors.password && <div className='red'>{errors.password.message}</div>}
          <input disabled={isSubmitting} type="submit" value="Submit" />
          {errors.myform && <div className='red'>{errors.myform.message}</div>}
          {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App
