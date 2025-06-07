import googleIcon from '../../assets/image/logos_google-icon.svg'


function Register() {



    return (
        <>

    <section className="container">
        <div className="form-registrasi">
            <div className="login-box">
                <div className="Judul">
                <h2 className="ms">Pendaftaran Akun</h2>
            <p className="pr">Yuk, daftar akun sekarang juga!</p>
            </div>
            <form className="form" action="">
                
                
                 <label htmlFor="nama">Nama Lengkap</label>
                 <input type="text" id="nama" />

               
                 <label htmlFor="email">E-Mail</label>
                 <input type="email" id="email" required />

                 
                  <label htmlFor="nomot-hp">NO. HP</label>
                  <input type="tel" name="nomor-hp" id="nomot-hp" pattern="085"/>
                  
        
                
                  <label htmlFor="password">Kata Sandi</label>
                  <input type="password" id="password" required />
                  
                  
                  <label htmlFor="password">Konfirmasi Kata Sandi</label>
                  <input type="password" id="password" required />
                  

                <div className="password-option">
                    <a href="lupa">Lupa Password?</a>
                </div>

                <button type="submit" className="btn login">Masuk</button>
                <button type="button" className="btn register">Daftar</button>

                <p className="atu">atau</p>
                <button type="button" className="btn-masuk-google">
                    <img src={googleIcon} alt=""/>
                    Daftar Dengan Google
                </button>
            
            </form>
             </div>

        </div>

     </section>
     </>
    )
}


export default Register;