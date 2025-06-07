
import googleIcon from '../../assets/image/logos_google-icon.svg'




function Login() {


    return (
    <>
    <section className="container">
        <div className="log">
            <div className="login-box">
            <div className="Judul">
                <h2 className="ms">Masuk Akun</h2>
            <p className="pr">Yuk, lanjut belajar di videobelajar</p>
            </div>
            <form className="form" action=""></form>
                 <label for="email">E-Mail</label>
                 <input type="email" id="email" required/>

                  <label for="password">Kata Sandi</label>
                  <input type="password" id="password" required />
                  


                <div className="password-option">
                    <a href="lupa">Lupa Password?</a>
                </div>

                <button type="submit" className="btn login">Masuk</button>
                <button type="button" className="btn register">Daftar</button>

                <p className="atu">atau</p>
                <button type="button" className="btn-masuk-google">
                    <img src={googleIcon} alt=""/>
                    Masuk Dengan Google
                </button>
            
             </div>
        </div>

    </section>
    </>
    )
}

export default Login;

