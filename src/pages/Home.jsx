import { Link } from "react-router-dom"
import { ArrowRight, Star, Truck, Shield, Headphones } from "lucide-react"

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Sumtread Classic Runner",
      price: "Rp 899.000",
      image: "/placeholder.svg?height=300&width=300",
      category: "dewasa",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Sumtread Kids Adventure",
      price: "Rp 599.000",
      image: "/placeholder.svg?height=300&width=300",
      category: "anak-anak",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Sumtread Urban Style",
      price: "Rp 1.299.000",
      image: "/placeholder.svg?height=300&width=300",
      category: "dewasa",
      rating: 4.7,
    },
  ]

  const features = [
    {
      icon: <Truck className="h-8 w-8 text-blue-600" />,
      title: "Free Shipping",
      description: "Gratis ongkir untuk pembelian di atas Rp 500.000",
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Quality Guarantee",
      description: "Garansi kualitas produk hingga 1 tahun",
    },
    {
      icon: <Headphones className="h-8 w-8 text-blue-600" />,
      title: "24/7 Support",
      description: "Customer service siap membantu kapan saja",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/placeholder.svg?height=1080&width=1920')`,
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Step Into <span className="text-blue-400">Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Temukan koleksi sepatu premium Sumtread yang menggabungkan gaya, kenyamanan, dan kualitas terbaik
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/product/dewasa"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Shop Dewasa
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/product/anak-anak"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Shop Anak-anak
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Produk Unggulan</h2>
            <p className="text-gray-600 text-lg">Koleksi terbaik dari Sumtread yang paling disukai pelanggan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-4">{product.price}</p>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                      Buy Now
                    </button>
                    <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg font-semibold transition-colors">
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/product"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Lihat Semua Produk
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Bergabunglah dengan Keluarga Sumtread</h2>
          <p className="text-xl mb-8 text-blue-100">
            Dapatkan update produk terbaru dan penawaran eksklusif langsung ke email Anda
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home