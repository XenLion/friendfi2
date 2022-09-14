function SignUp() {
    return (
        <>
            <form action="/newuser" method="POST">
                <label htmlFor="username">Username:</label><br/>
                <input type="text" id="username" name="username"/><br/>
                <label htmlFor="email">Email:</label><br/>
                <input type="text" id="email" name="email"/><br/>
                <label htmlFor="password">Password:</label><br/>
                <input type="text" id="password" name="password"/><br/>
                <input type="submit" name="submit-btn" value="Submit"/>
            </form>
        </>
    )
}

export default SignUp