import { motion } from 'motion/react';
import { Camera, Video, Settings, Download, FolderHeart, Star, Quote, ChevronRight, Check, Instagram, Mail, Phone } from 'lucide-react';
import React from 'react';

// Reusable animated container
const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="font-sans text-stone-900 bg-stone-50 selection:bg-[#cca660] selection:text-white pb-20 md:pb-0">

      {/* 1. COVER PAGE */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white">
        {/* Deep cinematic overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        {/* Hero Image */}
        <img 
          src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2940&auto=format&fit=crop" 
          alt="Cinematic Camera Setup" 
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        
        <div className="z-20 text-center max-w-4xl px-6">
          <motion.h2 
            initial={{ opacity: 0, tracking: "0.5em" }}
            animate={{ opacity: 1, tracking: "0.2em" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-xs md:text-sm font-sans uppercase tracking-[0.2em] text-stone-400 mb-6"
          >
            Portofolio
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-serif font-medium tracking-tight mb-8"
          >
            NABASTALA <span className="text-accent italic">Creative</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="flex items-center justify-center gap-4"
          >
            <div className="w-12 h-[1px] bg-accent"></div>
            <p className="text-lg md:text-xl font-light tracking-wide text-stone-300">
              Mengabadikan Momen, Merangkai Sinema.
            </p>
            <div className="w-12 h-[1px] bg-accent"></div>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-20 lg:px-40 flex flex-col justify-center">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-accent mb-4 font-semibold">Tentang Nabastala</h2>
              <h3 className="text-4xl lg:text-6xl font-serif font-medium leading-tight mb-8">
                Mengubah momen sesaat menjadi cerita yang abadi.
              </h3>
              <p className="text-stone-600 text-lg leading-relaxed mb-6 font-light">
                Berfokus pada fotografi, videografi sinematik, dan penyewaan kamera, setiap karya dibangun dengan perhatian pada rasa, bukan hanya tampilan. Setiap momen diolah agar menghadirkan perpaduan estetika dan emosi.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed mb-6 font-light">
                Terus berkembang dan mengasah kemampuan menjadi bagian dari proses untuk membangun standar visual yang melampaui sekadar hasil akhir. Lebih dari sekadar file, setiap proyek dirancang untuk meninggalkan kesan yang bermakna.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed font-light">
                Baik untuk momen personal maupun kebutuhan brand, visi dan peralatan dihadirkan untuk menciptakan hasil yang benar-benar tak terlupakan.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -translate-x-6 translate-y-6 border border-accent/30 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop" 
                alt="Behind the scenes" 
                className="relative z-10 w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 3. SERVICES */}
      <section className="bg-stone-100 py-24 md:py-32 px-6 md:px-20 lg:px-40 flex flex-col justify-center">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="text-sm uppercase tracking-widest text-accent mb-4 font-semibold">Keahlian Kami</h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-medium">Layanan Utama</h3>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto w-full">
          {[
            {
              icon: <Camera className="w-8 h-8 text-white" strokeWidth={1.5} />,
              title: "Fotografi",
              desc: "Mengutamakan emosi, detail, dan cahaya.",
              items: ["Event & Dokumentasi", "Konser & Festival", "Produk & Komersial", "Editorial & Creative"]
            },
            {
              icon: <Video className="w-8 h-8 text-white" strokeWidth={1.5} />,
              title: "Videografi",
              desc: "Storytelling sinematik dengan visual dan audio.",
              items: ["Event Aftermovie", "Company Profile & Brand Video", "Social Media Content", "Documentary & Creative Video"]
            },
            {
              icon: <Settings className="w-8 h-8 text-white" strokeWidth={1.5} />,
              title: "Sewa Kamera",
              desc: "Perlengkapan dasar untuk kebutuhan produksi.",
              items: ["Kamera Canon 5D", "Lensa Wide Angle", "Tripod Stabil"]
            }
          ].map((service, i) => (
            <FadeIn delay={i * 0.2} key={service.title}>
              <div className="bg-white p-10 h-full border border-stone-200">
                <div className="w-16 h-16 bg-black flex items-center justify-center rounded-sm mb-8">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-serif font-medium mb-4">{service.title}</h4>
                <p className="text-stone-500 font-light mb-8 h-12 leading-relaxed">
                  {service.desc}
                </p>
                <div className="w-full h-px bg-stone-100 mb-8"></div>
                <ul className="space-y-4">
                  {service.items.map((item, j) => (
                    <li key={item} className="flex items-center text-stone-700 font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mr-4"></div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 4. PORTFOLIO */}
      <section className="bg-black text-white py-24 md:py-32 px-6 md:px-20 lg:px-40">
        <FadeIn>
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 overflow-hidden">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-accent mb-4 font-semibold">Portofolio</h2>
              <h3 className="text-4xl lg:text-5xl font-serif font-medium">Highlight Karya</h3>
            </div>
            <p className="text-stone-400 font-light max-w-sm md:text-right">
              Kumpulan karya terpilih dengan fokus pada momen dan visual.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FadeIn delay={0.1}>
            <div className="group relative aspect-[4/5] overflow-hidden bg-stone-900 border border-stone-800">
              {/* Ganti '/img1.jpg' dengan nama file Anda yang diunggah ke folder 'public' */}
              <img src="/img1.jpg" alt="Konser Musik" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xs tracking-widest text-accent mb-2 uppercase">Konser Musik</p>
                <h4 className="font-serif text-2xl">Euforia Panggung</h4>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="group relative aspect-[4/5] overflow-hidden bg-stone-900 border border-stone-800">
              {/* Ganti '/img2.jpg' dengan nama file Anda yang diunggah ke folder 'public' */}
              <img src="/img2.jpg" alt="Corporate Event" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xs tracking-widest text-accent mb-2 uppercase">Corporate Event</p>
                <h4 className="font-serif text-2xl">Konferensi & Seminar</h4>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="group relative aspect-[4/5] overflow-hidden bg-stone-900 border border-stone-800">
              {/* Ganti '/img3.jpg' dengan nama file Anda yang diunggah ke folder 'public' */}
              <img src="/img3.jpg" alt="Festival" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xs tracking-widest text-accent mb-2 uppercase">Festival Publik</p>
                <h4 className="font-serif text-2xl">Semarak Perayaan</h4>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. PACKAGES & PRICING */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-20 lg:px-40">
        <FadeIn>
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-sm uppercase tracking-widest text-accent mb-4 font-semibold">Investasi untuk Kenangan</h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-medium mb-6">Paket & Harga</h3>
            <p className="text-stone-500 font-light text-lg">
              Harga yang transparan dan dapat disesuaikan dengan skala kebutuhan Anda. 
            </p>
          </div>
        </FadeIn>

        {/* Photography Packages */}
        <div className="mb-24">
          <h4 className="text-2xl font-serif mb-10 pb-4 border-b border-stone-200">Fotografi</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Basic", price: "Rp 1.300.000", hours: "3–4 Jam", items: ["1 Fotografer", "30–50 Foto Edit", "All file via Drive"] },
              { name: "Standard", price: "Rp 2.500.000", hours: "6–8 Jam", items: ["1 Fotografer", "80–120 Foto Edit", "All file + preview"], standout: true },
              { name: "Premium", price: "Rp 4.600.000", hours: "Full day", items: ["1–2 Fotografer", "150+ Foto Edit", "Highlight + priority edit"] }
            ].map((pkg, i) => (
              <div key={pkg.name} className={`p-10 border ${pkg.standout ? 'border-accent bg-stone-50 shadow-lg' : 'border-stone-200'} relative`}>
                {pkg.standout && <div className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3">Paling Diminati</div>}
                <div className="mb-6">
                  <h5 className="font-serif text-xl mb-2">{pkg.name}</h5>
                  <p className="text-3xl font-light mb-2">{pkg.price}</p>
                  <p className="text-sm text-stone-500">{pkg.hours}</p>
                </div>
                <div className="w-full h-px bg-stone-200 mb-6"></div>
                <ul className="space-y-4">
                  {pkg.items.map(item => (
                    <li key={item} className="flex items-start">
                      <Check className="w-5 h-5 text-accent mr-3 shrink-0" strokeWidth={2} />
                      <span className="text-sm text-stone-700 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Videography Packages */}
        <div className="mb-24">
          <h4 className="text-2xl font-serif mb-10 pb-4 border-b border-stone-200">Videografi</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Basic", price: "Rp 2.000.000", hours: "3–4 Jam", items: ["1 Videografer", "1 menit highlight"] },
              { name: "Standard", price: "Rp 2.800.000", hours: "6–8 Jam", items: ["1 Videografer", "2–3 menit video"], standout: true },
              { name: "Premium", price: "Rp 4.900.000", hours: "Full day", items: ["1–2 Videografer", "3–5 menit cinematic"] }
            ].map((pkg, i) => (
              <div key={pkg.name} className={`p-10 border ${pkg.standout ? 'border-black bg-black text-white shadow-lg' : 'border-stone-200'} relative`}>
                <div className="mb-6">
                  <h5 className="font-serif text-xl mb-2">{pkg.name}</h5>
                  <p className={`text-3xl font-light mb-2 ${pkg.standout ? 'text-white' : ''}`}>{pkg.price}</p>
                  <p className={`text-sm ${pkg.standout ? 'text-stone-400' : 'text-stone-500'}`}>{pkg.hours}</p>
                </div>
                <div className={`w-full h-px mb-6 ${pkg.standout ? 'bg-stone-800' : 'bg-stone-200'}`}></div>
                <ul className="space-y-4">
                  {pkg.items.map(item => (
                    <li key={item} className="flex items-start">
                      <Check className={`w-5 h-5 mr-3 shrink-0 ${pkg.standout ? 'text-accent' : 'text-accent'}`} strokeWidth={2} />
                      <span className={`text-sm font-light ${pkg.standout ? 'text-stone-300' : 'text-stone-700'}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Camera Rental List */}
        <div className="mb-14">
          <h4 className="text-2xl font-serif mb-10 pb-4 border-b border-stone-200">Sewa Peralatan (Harga Per Hari)</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
            <div className="flex justify-between items-center py-3 border-b border-stone-100">
              <span className="text-stone-700 font-light">Canon 5D</span>
              <span className="font-medium">Rp 250.000</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-stone-100">
              <span className="text-stone-700 font-light">Lensa Wide Angle</span>
              <span className="font-medium">Rp 150.000</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-stone-100">
              <span className="text-stone-700 font-light">Tripod</span>
              <span className="font-medium">Rp 75.000</span>
            </div>
          </div>
        </div>

        {/* Terms & Notes */}
        <div className="bg-stone-50 p-8 rounded-sm">
          <p className="text-sm font-medium uppercase tracking-wider mb-4">Catatan Penting</p>
          <ul className="text-sm text-stone-600 font-light space-y-2 list-disc list-inside">
            <li>Booking dikonfirmasi dengan DP minimal 50%.</li>
            <li>Overtime dikenakan Rp 1.000.000 / jam.</li>
            <li>Biaya transport & akomodasi berlaku di luar kota.</li>
            <li>Penyewaan alat wajib menyertakan KTP dan deposit.</li>
          </ul>
        </div>
      </section>

      {/* 6. DELIVERY SYSTEM */}
      <section className="relative bg-stone-900 text-white py-24 md:py-32 px-6 md:px-20 lg:px-40">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2940&auto=format&fit=crop')] opacity-[0.03] grayscale bg-cover bg-center mix-blend-screen"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <h2 className="text-sm uppercase tracking-widest text-accent mb-4 font-semibold">Alur Kerja</h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-medium mb-6">Sistem Penyerahan Hasil</h3>
            <p className="text-stone-400 font-light text-lg mb-8">
              Hasil karya disusun dan dikirim secara rapi, terorganisir, dan mudah diakses.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-12">
            
            {/* Step 1 */}
            <FadeIn delay={0.1}>
              <div className="flex gap-6">
                <div className="shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center bg-black/50 text-accent font-serif text-xl">1</div>
                </div>
                <div>
                  <h4 className="text-2xl font-serif mb-3">Preview</h4>
                  <p className="text-stone-400 font-light mb-4">Dalam 1–2 hari setelah acara, Anda akan menerima 5–10 foto terbaik yang telah diedit.</p>
                </div>
              </div>
            </FadeIn>

            {/* Step 2 */}
            <FadeIn delay={0.2}>
              <div className="flex gap-6">
                <div className="shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center bg-black/50 text-accent font-serif text-xl">2</div>
                </div>
                <div>
                  <h4 className="text-2xl font-serif mb-3">Full Gallery</h4>
                  <p className="text-stone-400 font-light mb-6">Hasil lengkap dikirim melalui Google Drive dengan struktur folder yang rapi:</p>
                  
                  {/* Folder Structure Viz */}
                  <div className="bg-black/80 border border-stone-800 p-6 rounded-md font-mono text-xs md:text-sm text-stone-300">
                    <div className="flex items-center gap-2 text-white mb-4">
                      <FolderHeart className="w-5 h-5 text-accent" />
                      <span>Nama Klien – Proyek</span>
                    </div>
                    <div className="pl-6 space-y-3 relative before:absolute before:left-2 before:top-0 before:bottom-0 before:w-px before:bg-stone-800">
                      <div className="flex items-center gap-3 relative before:absolute before:-left-4 before:top-1/2 before:w-3 before:h-px before:bg-stone-800">
                        <FolderHeart className="w-4 h-4 text-stone-500" />
                        <span>01_Preview</span>
                      </div>
                      <div className="flex items-center gap-3 relative before:absolute before:-left-4 before:top-1/2 before:w-3 before:h-px before:bg-stone-800">
                        <FolderHeart className="w-4 h-4 text-stone-500" />
                        <span>02_Edited_Photos</span>
                      </div>
                      <div className="flex items-center gap-3 relative before:absolute before:-left-4 before:top-1/2 before:w-3 before:h-px before:bg-stone-800">
                        <FolderHeart className="w-4 h-4 text-stone-500" />
                        <span>03_All_Photos</span>
                      </div>
                      <div className="flex items-center gap-3 relative before:absolute before:-left-4 before:top-1/2 before:w-3 before:h-px before:bg-stone-800">
                        <FolderHeart className="w-4 h-4 text-stone-500" />
                        <span>04_Videos</span>
                      </div>
                      <div className="flex items-center gap-3 relative before:absolute before:-left-4 before:top-1/2 before:w-3 before:h-px before:bg-stone-800">
                        <Download className="w-4 h-4 text-accent" />
                        <span className="text-white">05_Download</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </FadeIn>

            {/* Step 3 */}
            <FadeIn delay={0.3}>
              <div className="flex gap-6">
                <div className="shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center bg-black/50 text-accent font-serif text-xl">3</div>
                </div>
                <div>
                  <h4 className="text-2xl font-serif mb-3">Slideshow (Premium)</h4>
                  <p className="text-stone-400 font-light">Untuk paket tertentu, tersedia video slideshow 1–2 menit dengan musik.</p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="bg-stone-100 py-24 md:py-32 px-6 md:px-20 lg:px-40 flex flex-col justify-center">
        <FadeIn>
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <Quote className="w-12 h-12 text-accent/30 mx-auto mb-6" />
            <h2 className="text-sm uppercase tracking-widest text-accent mb-4 font-semibold">Suara Klien</h2>
            <h3 className="text-4xl font-serif font-medium">Ulasan dari mereka yang telah bekerja bersama kami.</h3>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="bg-white p-12 shadow-sm relative">
              <div className="flex items-center gap-1 mb-6">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-accent text-accent" />)}
              </div>
              <p className="font-serif text-xl italic leading-relaxed text-stone-700 mb-8">
                “Selama acara dibantu banget, orangnya santai tapi tetap profesional. Hasil fotonya juga sesuai ekspektasi.”
              </p>
              <div>
                <p className="font-medium text-black">Klien Dokumentasi</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white p-12 shadow-sm relative">
              <div className="flex items-center gap-1 mb-6">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-accent text-accent" />)}
              </div>
              <p className="font-serif text-xl italic leading-relaxed text-stone-700 mb-8">
                “Gear yang disewa masih oke dan terawat. Komunikasinya juga jelas dari awal, jadi enak.”
              </p>
              <div>
                <p className="font-medium text-black">Klien Rental</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. CONTACT & CTA */}
      <section className="bg-black text-white px-6 md:px-20 lg:px-40 py-24 md:py-32 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center w-full">
          <h2 className="text-5xl md:text-7xl font-serif font-medium mb-8">Siap mengabadikan kenangan Anda?</h2>
          <p className="text-xl text-stone-400 font-light mb-16 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk melihat ketersediaan tanggal, berdiskusi mengenai paket, atau memesan peralatan.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-20">
            <a href="https://wa.me/+628568720233" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg hover:text-accent transition-colors">
              <Phone className="w-6 h-6" />
              <span>+62 856 8720 233</span>
            </a>
            <a href="https://www.instagram.com/nbstlaa/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg hover:text-accent transition-colors">
              <Instagram className="w-6 h-6" />
              <span>@nbstlaa</span>
            </a>
            <a href="mailto:arthanabastala@gmail.com" className="flex items-center gap-3 text-lg hover:text-accent transition-colors">
              <Mail className="w-6 h-6" />
              <span>arthanabastala@gmail.com</span>
            </a>
          </div>
        </div>
        
        <div className="mt-32 pt-8 border-t border-stone-800 text-center flex flex-col md:flex-row justify-center items-center text-stone-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Nabastala Creative. Hak Cipta Dilindungi.</p>
        </div>
      </section>

    </div>
  );
}
