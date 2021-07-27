const Register = () => {
    return (
        <div>
            <h1>Register</h1>
            <form action="">
                <label htmlFor="username">Username </label>
                <input id="username" type="text" />
                <br />
                <label htmlFor="passwordRegister">  Password </label>
                <input id="passwordRegister" type="password" />
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Register;