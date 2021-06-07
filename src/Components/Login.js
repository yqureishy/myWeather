const Login = () => {
    return ( 
        <div>
            <h1>Login</h1>
            <form action="">
            <label htmlFor="username">Username </label>
            <input id="username" type="text" />
            <br/>
            <label htmlFor="passwordLogin">  Password </label>
            <input id="passwordLogin" type="password" />
            <br/>
            <button>Submit</button>
            </form>
        </div>
     );
}
 
export default Login;