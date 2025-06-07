import logofooter from '../../assets/image/logo footer.svg';
import keyborarrow from '../../assets/image/KeyboardArrowRight.svg';
import Lucide from '../../assets/image/Lucide Icon.svg';
import fb from '../../assets/image/fb Icon.svg';
import ig from '../../assets/image/ig Icon.svg';
import tw from '../../assets/image/twitter.svg';
 
 
 
 function Footer() {
 
 
     return (
         <>

     <section className="footer">
        <div className="container-footer">
            <div className="footer-logo">
                <img src={logofooter} alt="llogo bos"/>
                <div className="footer-logo-conten">
                    <p><b>Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</b></p>
                    <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
                    <p>+62-877-7123-1234</p>
                </div>
            </div>
            <div className="footer-conten">
                <div className="footer-kategori-01">
                    <p id="ktg-01">Kategori</p>
                    <div className="footer-kategori">
                        <p>Digital & Teknologi</p>
                        <p>Pemasaran</p>
                        <p>Manajemen Bisnis</p>
                        <p>Pengembangan Diri</p>
                        <p>Desain</p>
                    </div>
                    <div className="img-key">
                        <img src={keyborarrow} alt=""/>
                    </div>
                </div>

                <div className="footer-kategori-01">
                    <p id="ktg-01">Tentang kami</p>
                    <div className="footer-kategori">
                        <p>FAQ</p>
                        <p>Kebijakan Privasi</p>
                        <p>Kententuan Layanan</p>
                        <p>Bantuan</p>
                    </div>
                    <div className="img-key">
                        <img src={keyborarrow} alt=""/>
                    </div>
                    
                    
                    
                </div>

                <div className="footer-kategori-01">
                    <p id="ktg-01">Komunitas</p>
                    <div className="footer-kategori">
                        <p>Tips Sukses</p>
                        <p>Blog</p>
                    </div>
                    <div className="img-key">
                        <img src="assets/KeyboardArrowRight.svg" alt=""/>
                    </div>
                    
                </div>
            </div>
            

        </div>
        <hr className="garis"/>

        <div className="akhir">
            <p>@2023 Gerobak Sayur All Rights Reserved.</p>
            <div className="icon">
                <div className="icon-terakhir">
                    <img src={Lucide}  alt=""/>
                </div>

                <div className="icon-terakhir">
                    <img src={fb}  alt=""/>
                </div>

                <div className="icon-terakhir">
                    <img src={ig}  alt=""/>
                </div>

                <div className="icon-terakhir">
                    <img src={tw}  alt=""/>
                </div>
            </div>
            
        </div>



    </section>
    

         </>
     )
 }
 
 export default Footer;