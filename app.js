const App = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#home">SIMBOK</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">Beranda</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">Tentang Kami</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#products">Produk Kami</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#blog">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#testimonials">Testimoni</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Kontak Kami</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <section id="home" className="container text-center my-5">
                <h1>Selamat datang di SIMBOK</h1>
                <p>Solusi Jamu Bubuk Alami</p>
            </section>
            <section id="about" className="container my-5">
                <h2>Tentang Kami</h2>
                <p>SIMBOK didirikan pada tahun 2018 dengan visi untuk menghidupkan kembali tradisi herbal Indonesia melalui produk jamu bubuk yang inovatif. Dengan berbekal pengetahuan turun-temurun dan teknologi modern, kami berkomitmen untuk menyediakan jamu bubuk yang mudah digunakan dan bermanfaat bagi kesehatan.</p>
                <h3>Misi dan Visi</h3>
                <ul>
                    <li>Visi: Menjadi pelopor dalam industri jamu bubuk dengan produk berkualitas yang dipercaya oleh konsumen di seluruh dunia.</li>
                    <li>Misi: Menghasilkan jamu bubuk dari bahan alami terbaik, menjaga warisan budaya, dan mendukung gaya hidup sehat dengan inovasi berkelanjutan.</li>
                </ul>
                <h3>Nilai-Nilai Kami</h3>
                <ul>
                    <li>Kualitas</li>
                    <li>Keaslian</li>
                    <li>Inovasi</li>
                </ul>
            </section>
            <section id="products" className="container my-5">
                <h2>Produk Kami</h2>
                <h3>Kategori Produk</h3>
                <ul>
                    <li>Jamu Bubuk untuk Kesehatan</li>
                    <li>Jamu Bubuk untuk Kebugaran</li>
                </ul>
                <h3>Produk Unggulan</h3>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Jamu Bubuk Kunyit"/>
                            <div className="card-body">
                                <h5 className="card-title">Jamu Bubuk Kunyit</h5>
                                <p className="card-text">Jamu bubuk kunyit yang kaya akan manfaat kesehatan.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Jamu Bubuk Jahe Merah"/>
                            <div className="card-body">
                                <h5 className="card-title">Jamu Bubuk Jahe Merah</h5>
                                <p className="card-text">Jamu bubuk jahe merah yang baik untuk kekebalan tubuh.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Jamu Bubuk Temulawak"/>
                            <div className="card-body">
                                <h5 className="card-title">Jamu Bubuk Temulawak</h5>
                                <p className="card-text">Jamu bubuk temulawak yang dapat membantu pencernaan.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="testimonials" className="container my-5">
                <h2>Testimoni Pelanggan</h2>
                <p>Baca cerita dari pelanggan kami yang telah merasakan manfaat dari produk-produk jamu bubuk kami. Kepuasan pelanggan adalah prioritas utama kami.</p>
            </section>
            <section id="contact" className="container my-5">
                <h2>Kontak Kami</h2>
                <p>Alamat: Jalan Kesehatan No. 123, Jakarta, Indonesia</p>
                <p>Telepon: +62 21 1234 5678</p>
                <p>Email: info@simbok.com</p>
                <p>Media Sosial: @simbok_jamu</p>
            </section>
            <footer className="text-center py-4">
                <p>&copy; 2024 SIMBOK. All rights reserved.</p>
            </footer>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
