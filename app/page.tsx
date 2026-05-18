'use client';

export default function Home() {
  return (
    <>
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-300" id="navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 font-bold text-xl text-brand-900 tracking-tight">
              USAHA BABULU <span className="text-brand-500">KM.53</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#beranda" className="text-gray-700 hover:text-brand-600 font-medium">Beranda</a>
              <a href="#layanan" className="text-gray-700 hover:text-brand-600 font-medium">Layanan</a>
              <a href="#lokasi" className="text-gray-700 hover:text-brand-600 font-medium">Lokasi Maps</a>
            </div>
            <div className="hidden md:block">
              <span id="status-toko" className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span> Buka Sekarang
              </span>
            </div>
          </div>
        </div>
      </nav>

      <section id="beranda" className="hero-pattern pt-32 pb-20 md:pt-40 md:pb-28 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            Pusat Kebutuhan Anda di Jalur Provinsi PPU
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl mx-auto text-gray-200 mb-10">
            Titik singgah strategis di Km. 53 Babulu Darat. Menawarkan pelayanan terbaik, akses mudah dari jalan raya, dan parkir luas untuk kendaraan besar maupun kecil.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="https://maps.app.goo.gl/9xquLPMBF9kRJfUeA" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-brand-900 bg-white hover:bg-gray-100 shadow-lg transition duration-200">
              <svg className="w-6 h-6 mr-2 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              Arahkan ke Lokasi (Maps)
            </a>
            
            <button onClick={() => {
              const nomorWA = "6281234567890";
              const pesan = "Halo, saya melihat website Anda dan ingin bertanya mengenai produk/layanan di lokasi Km. 53 Babulu Darat.";
              const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
              window.open(url, '_blank');
            }} className="w-full sm:w-auto flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-white bg-green-500 hover:bg-green-400 border border-transparent shadow-lg transition duration-200">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.125-.353-.16-.893-.323-1.636-.895-.845-.65-1.465-1.583-1.505-1.636-.04-.053-.365-.529-.365-1.041s.275-.756.402-.896c.124-.136.275-.173.364-.173.09 0 .175.004.254.004.09 0 .205-.035.316.227.115.27.382.939.418 1.015.035.074.056.163.007.262-.05.1-.075.163-.163.262-.09.102-.185.226-.263.315-.084.098-.175.205-.074.382.1.175.44.733.945 1.182.653.58 1.192.766 1.37.855.176.088.283.074.39-.047.106-.124.462-.533.587-.714.124-.183.245-.153.407-.093.163.06 1.026.485 1.2.575.174.09.29.136.332.215.043.078.043.46-.101.865z"/></svg>
              Hubungi WhatsApp
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white z-20 relative -mt-8 mx-4 sm:mx-6 lg:mx-8 rounded-xl shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <div className="w-16 h-16 mx-auto bg-brand-100 rounded-full flex items-center justify-center mb-4 text-brand-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Akses Cepat</h3>
              <p className="text-gray-600">Tepat di tepi Jalan Provinsi. Tidak perlu repot memutar atau mencari masuk ke dalam gang.</p>
            </div>
            <div className="p-4">
              <div className="w-16 h-16 mx-auto bg-brand-100 rounded-full flex items-center justify-center mb-4 text-brand-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fasilitas Lengkap</h3>
              <p className="text-gray-600">Menyediakan apa yang Anda butuhkan selama di perjalanan. Nyaman, bersih, dan memadai.</p>
            </div>
            <div className="p-4">
              <div className="w-16 h-16 mx-auto bg-brand-100 rounded-full flex items-center justify-center mb-4 text-brand-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Jam Operasional</h3>
              <p className="text-gray-600">Buka melayani Anda dengan jam operasional yang panjang, siap sedia di rute PPU.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="layanan" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Layanan & Produk Kami</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Penuhi kebutuhan Anda tanpa harus jauh-jauh mencari.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg">
              <img className="h-48 w-full object-cover" src="/images/produk-1.jpg" alt="Layanan 1" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">Produk/Layanan Unggulan 1</h3>
                <p className="mt-2 text-gray-600 text-sm">Deskripsi singkat mengenai produk atau layanan ini. Jelaskan mengapa pelintas jalan harus mampir.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg">
              <img className="h-48 w-full object-cover" src="/images/produk-2.jpg" alt="Layanan 2" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">Produk/Layanan Unggulan 2</h3>
                <p className="mt-2 text-gray-600 text-sm">Deskripsi singkat mengenai produk atau layanan ini. Tersedia stok lengkap dan harga bersahabat.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg">
              <img className="h-48 w-full object-cover" src="/images/fasilitas.jpg" alt="Fasilitas" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">Area Parkir & Fasilitas</h3>
                <p className="mt-2 text-gray-600 text-sm">Area parkir yang cukup untuk kendaraan penumpang maupun muatan di sepanjang jalur lintas provinsi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="lokasi" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            
            <div className="p-8 lg:p-12 lg:w-1/2 flex flex-col justify-center text-white">
              <h2 className="text-3xl font-extrabold mb-6">Mampir Sekarang!</h2>
              
              <div className="flex items-start mb-6">
                <svg className="w-6 h-6 mr-4 mt-1 text-brand-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <div>
                  <h4 className="font-bold text-xl mb-1">Alamat Lengkap:</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Jl. Propinsi No.Km. 53<br />
                    Babulu Darat, Kec. Babulu<br />
                    Kabupaten Penajam Paser Utara<br />
                    Kalimantan Timur 76285
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-8">
                <svg className="w-6 h-6 mr-4 mt-1 text-brand-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <div>
                  <h4 className="font-bold text-xl mb-1">Jam Operasional:</h4>
                  <p className="text-gray-300">Senin - Minggu: 08.00 - 22.00 WITA<br /><em>(Sesuaikan dengan jam buka Anda)</em></p>
                </div>
              </div>

              <a href="https://maps.app.goo.gl/9xquLPMBF9kRJfUeA" target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 px-6 rounded-lg transition self-start">
                Buka di Aplikasi Google Maps
              </a>
            </div>

            <div className="lg:w-1/2 h-80 lg:h-auto min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127606.84880922442!2d116.3262!3d-1.4883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df133180572e9a3%3A0xc6d37fa1f21d3f9b!2sBabulu%20Darat%2C%20Babulu%2C%20Penajam%20Paser%20Utara%20Regency%2C%20East%20Kalimantan!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Usaha Babulu Km. 53. Hak Cipta Dilindungi.</p>
          <p className="mt-2 text-sm text-gray-500">Jl. Propinsi Km. 53, Penajam Paser Utara, Kalimantan Timur.</p>
        </div>
      </footer>
    </>
  );
}
