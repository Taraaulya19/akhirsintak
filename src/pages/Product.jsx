"use client"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Star, Filter, Grid, List } from "lucide-react"

const Product = () => {
  const { category } = useParams()
  const [selectedCategory, setSelectedCategory] = useState(category || "all")
  const [viewMode, setViewMode] = useState("grid")
  const [sortBy, setSortBy] = useState("name")
  const [priceRange, setPriceRange] = useState("all")

  useEffect(() => {
    if (category) {
      setSelectedCategory(category)
    }
  }, [category])

  const products = [
    // Sepatu Dewasa
    {
      id: 1,
      name: "Sumtread Classic Runner",
      price: 899000,
      image: "/placeholder.svg?height=300&width=300",
      category: "dewasa",
      rating: 4.8,
      reviews: 124,
      description: "Sepatu lari klasik dengan teknologi cushioning terdepan",
    },
    {
      id: 2,
      name: "Sumtread Urban Style",
      price: 1299000,
      image: "/placeholder.svg?height=300&width=300",
      category: "dewasa",
      rating: 4.7,
      reviews: 89,
      description: "Sepatu kasual premium untuk gaya hidup urban",
    },
    {
      id: 3,
      name: "Sumtread Sport Pro",
      price: 1599000,
      image: "/placeholder.svg?height=300&width=300",
      category: "dewasa",
      rating: 4.9,
      reviews: 156,
      description: "Sepatu olahraga profesional dengan performa maksimal",
    },
    {
      id: 4,
      name: "Sumtread Formal Elite",
      price: 1899000,
      image: "/placeholder.svg?height=300&width=300",
      category: "dewasa",
      rating: 4.6,
      reviews: 67,
      description: "Sepatu formal elegan untuk acara resmi",
    },
    {
      id: 5,
      name: "Sumtread Casual Comfort",
      price: 799000,
      image: "/placeholder.svg?height=300&width=300",
      category: "dewasa",
      rating: 4.5,
      reviews: 203,
      description: "Sepatu kasual nyaman untuk aktivitas sehari-hari",
    },
    {
      id: 6,
      name: "Sumtread Outdoor Adventure",
      price: 1399000,
      image: "/placeholder.svg?height=300&width=300",
      category: "dewasa",
      rating: 4.8,
      reviews: 98,
      description: "Sepatu outdoor tahan cuaca untuk petualangan",
    },
    // Sepatu Anak-anak
    {
      id: 7,
      name: "Sumtread Kids Adventure",
      price: 599000,
      image: "/placeholder.svg?height=300&width=300",
      category: "anak-anak",
      rating: 4.9,
      reviews: 145,
      description: "Sepatu anak aktif dengan perlindungan ekstra",
    },
    {
      id: 8,
      name: "Sumtread Kids School",
      price: 499000,
      image: "/placeholder.svg?height=300&width=300",
      category: "anak-anak",
      rating: 4.7,
      reviews: 178,
      description: "Sepatu sekolah nyaman dan tahan lama",
    },
    {
      id: 9,
      name: "Sumtread Kids Sport",
      price: 699000,
      image: "/placeholder.svg?height=300&width=300",
      category: "anak-anak",
      rating: 4.8,
      reviews: 112,
      description: "Sepatu olahraga anak dengan teknologi anti-slip",
    },
    {
      id: 10,
      name: "Sumtread Kids Casual",
      price: 449000,
      image: "/placeholder.svg?height=300&width=300",
      category: "anak-anak",
      rating: 4.6,
      reviews: 134,
      description: "Sepatu kasual anak dengan desain colorful",
    },
    {
      id: 11,
      name: "Sumtread Kids Formal",
      price: 599000,
      image: "/placeholder.svg?height=300&width=300",
      category: "anak-anak",
      rating: 4.5,
      reviews: 87,
      description: "Sepatu formal anak untuk acara khusus",
    },
    {
      id: 12,
      name: "Sumtread Kids Playground",
      price: 399000,
      image: "/placeholder.svg?height=300&width=300",
      category: "anak-anak",
      rating: 4.7,
      reviews: 156,
      description: "Sepatu bermain anak dengan sol anti-selip",
    },
  ]

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const filteredProducts = products
    .filter((product) => {
      if (selectedCategory === "all") return true
      return product.category === selectedCategory
    })
    .filter((product) => {
      if (priceRange === "all") return true
      if (priceRange === "under-500k") return product.price < 500000
      if (priceRange === "500k-1m") return product.price >= 500000 && product.price < 1000000
      if (priceRange === "1m-1.5m") return product.price >= 1000000 && product.price < 1500000
      if (priceRange === "above-1.5m") return product.price >= 1500000
      return true
    })
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name)
      if (sortBy === "price-low") return a.price - b.price
      if (sortBy === "price-high") return b.price - a.price
      if (sortBy === "rating") return b.rating - a.rating
      return 0
    })

  const handleBuyNow = (product) => {
    alert(`Membeli ${product.name} - ${formatPrice(product.price)}`)
  }

  const handleViewDetail = (product) => {
    alert(
      `Detail produk: ${product.name}\n\n${product.description}\n\nHarga: ${formatPrice(product.price)}\nRating: ${product.rating}/5 (${product.reviews} reviews)`,
    )
  }

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {selectedCategory === "all"
              ? "Semua Produk"
              : selectedCategory === "dewasa"
                ? "Sepatu Dewasa"
                : "Sepatu Anak-anak"}
          </h1>
          <p className="text-gray-600 text-lg">Temukan koleksi sepatu Sumtread yang sesuai dengan kebutuhan Anda</p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="font-medium text-gray-700">Filter:</span>
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Semua Kategori</option>
              <option value="dewasa">Sepatu Dewasa</option>
              <option value="anak-anak">Sepatu Anak-anak</option>
            </select>

            {/* Price Range Filter */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Semua Harga</option>
              <option value="under-500k">Di bawah Rp 500.000</option>
              <option value="500k-1m">Rp 500.000 - Rp 1.000.000</option>
              <option value="1m-1.5m">Rp 1.000.000 - Rp 1.500.000</option>
              <option value="above-1.5m">Di atas Rp 1.500.000</option>
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Urutkan: Nama</option>
              <option value="price-low">Harga: Rendah ke Tinggi</option>
              <option value="price-high">Harga: Tinggi ke Rendah</option>
              <option value="rating">Rating Tertinggi</option>
            </select>

            {/* View Mode */}
            <div className="flex border border-gray-300 rounded-lg overflow-hidden ml-auto">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 ${viewMode === "grid" ? "bg-blue-600 text-white" : "bg-white text-gray-600"}`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 ${viewMode === "list" ? "bg-blue-600 text-white" : "bg-white text-gray-600"}`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="text-sm text-gray-600">Menampilkan {filteredProducts.length} produk</div>
        </div>

        {/* Products Grid/List */}
        <div
          className={
            viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-4"
          }
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={
                viewMode === "grid"
                  ? "bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  : "bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex"
              }
            >
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className={viewMode === "grid" ? "w-full h-64 object-cover" : "w-48 h-48 object-cover"}
              />
              <div className={viewMode === "grid" ? "p-6" : "p-6 flex-1"}>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-3 text-sm">{product.description}</p>
                <p className="text-2xl font-bold text-blue-600 mb-4">{formatPrice(product.price)}</p>
                <div className={viewMode === "grid" ? "flex gap-2" : "flex gap-2"}>
                  <button
                    onClick={() => handleBuyNow(product)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors"
                  >
                    Buy Now
                  </button>
                  <button
                    onClick={() => handleViewDetail(product)}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg font-semibold transition-colors"
                  >
                    Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Tidak ada produk yang ditemukan dengan filter yang dipilih.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Product
