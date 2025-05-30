"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Terima kasih! Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: "Alamat",
      details: ["Jl. Sudirman No. 123", "Jakarta Pusat 10220", "Indonesia"],
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Telepon",
      details: ["+62 21 1234 5678", "+62 812 3456 7890", "Customer Service 24/7"],
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email",
      details: ["info@sumtread.com", "support@sumtread.com", "sales@sumtread.com"],
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Jam Operasional",
      details: ["Senin - Jumat: 09:00 - 18:00", "Sabtu: 09:00 - 15:00", "Minggu: Tutup"],
    },
  ]

  const stores = [
    {
      name: "Sumtread Store Jakarta Pusat",
      address: "Mall Grand Indonesia, Lt. 2",
      phone: "+62 21 2345 6789",
      hours: "10:00 - 22:00",
    },
    {
      name: "Sumtread Store Surabaya",
      address: "Tunjungan Plaza, Lt. 3",
      phone: "+62 31 1234 5678",
      hours: "10:00 - 22:00",
    },
    {
      name: "Sumtread Store Bandung",
      address: "Paris Van Java Mall, Lt. 1",
      phone: "+62 22 9876 5432",
      hours: "10:00 - 22:00",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Hubungi Kami</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Kami siap membantu Anda! Jangan ragu untuk menghubungi tim customer service Sumtread yang ramah dan
            profesional.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Kirim Pesan</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Masukkan email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Masukkan nomor telepon"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subjek *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Pilih subjek</option>
                      <option value="product-inquiry">Pertanyaan Produk</option>
                      <option value="order-status">Status Pesanan</option>
                      <option value="return-exchange">Return/Exchange</option>
                      <option value="complaint">Keluhan</option>
                      <option value="suggestion">Saran</option>
                      <option value="other">Lainnya</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Lokasi Kami</h2>
              <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center mb-6">
                <div className="text-center text-gray-600">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">Jl. Sudirman No. 123, Jakarta Pusat</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Kantor Pusat</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                    Jl. Sudirman No. 123, Jakarta Pusat 10220
                  </p>
                  <p className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-blue-600" />
                    +62 21 1234 5678
                  </p>
                  <p className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-blue-600" />
                    info@sumtread.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Locations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Lokasi Toko</h2>
            <p className="text-gray-600 text-lg">
              Kunjungi toko fisik Sumtread terdekat untuk pengalaman berbelanja yang lebih personal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stores.map((store, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3">{store.name}</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-start">
                    <MapPin className="h-4 w-4 mr-2 text-blue-600 mt-1" />
                    {store.address}
                  </p>
                  <p className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-blue-600" />
                    {store.phone}
                  </p>
                  <p className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-blue-600" />
                    {store.hours}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Pertanyaan yang sering diajukan pelanggan</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-2">Bagaimana cara mengetahui ukuran sepatu yang tepat?</h3>
              <p className="text-gray-600">
                Kami menyediakan size chart lengkap di setiap halaman produk. Anda juga bisa mengunjungi toko fisik kami
                untuk fitting langsung atau menghubungi customer service untuk konsultasi.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-2">Berapa lama waktu pengiriman?</h3>
              <p className="text-gray-600">
                Untuk area Jakarta dan sekitarnya: 1-2 hari kerja. Untuk kota besar lainnya: 2-3 hari kerja. Untuk area
                terpencil: 3-5 hari kerja.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-2">Apakah ada garansi untuk produk Sumtread?</h3>
              <p className="text-gray-600">
                Ya, semua produk Sumtread memiliki garansi kualitas selama 1 tahun untuk kerusakan manufaktur. Garansi
                tidak berlaku untuk kerusakan akibat pemakaian normal.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-2">Bagaimana kebijakan return dan exchange?</h3>
              <p className="text-gray-600">
                Kami menerima return/exchange dalam 30 hari setelah pembelian dengan kondisi produk masih baru dan tidak
                rusak. Biaya pengiriman return ditanggung pembeli kecuali ada kesalahan dari pihak kami.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact