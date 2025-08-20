'use client'

import React, { useState } from 'react'
import Components from '../components'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from '@/lib'

interface CartItem {
  id: string
  name: string
  price: number
  image: string
  category: string
  quantity: number
}

export default function Inicio() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const featuredProducts = [
  { id: '1', name: 'Vestido Floral Rosa Elegante', price: 89.99, image: '../img/Vestido-Floral-Rosa-Elegante.jpeg', category: 'dress' as const, isNew: true },
  { id: '2', name: 'Vestido Negro de Noche',       price: 129.99, image: '../img/Vestido-Negrode-Noche.jpeg',       category: 'dress' as const },
  { id: '3', name: 'Top Blanco con Bordado',       price: 45.99,  image: '../img/Top-Blancocon-Bordado.jpeg',       category: 'top'   as const, isNew: true },
  { id: '4', name: 'Blusa Azul Off-Shoulder',      price: 52.99,  image: '../img/Blusa-AzulOff-Shoulder.jpeg',      category: 'top'   as const },
  { id: '5', name: 'Vestido Rojo Cocktail',        price: 95.99,  image: '../img/Vestido-Rojo-Cocktail.jpg',        category: 'dress' as const },
  { id: '6', name: 'Top Rayado Casual',            price: 38.99,  image: '../img/Top-Rayado-Casual.jpeg',           category: 'top'   as const }
];

   

  const handleAddToCart = (product: { id: string; name: string; price: number; image: string; category: string }) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id)
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevItems, { ...product, quantity: 1 }]
      }
    })
  }

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      )
    }
  }

  const handleRemoveItem = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen bg-white">
      <Components.Header 
        cartItemCount={cartItemCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-pink-50 to-rose-50 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
                Descubre tu Estilo
                <span className="block text-pink-600">Único</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Explora nuestra exclusiva colección de vestidos y tops diseñados para realzar tu belleza natural y expresar tu personalidad única.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/Vestidos">
                  <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 text-lg">
                    Ver Vestidos
                  </Button>
                </Link>
                <Link to="/Tops">
                  <Button variant="outline" size="lg" className="border-pink-200 text-pink-600 hover:bg-pink-50 px-8 py-3 text-lg">
                    Ver Tops
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                Productos Destacados
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Descubre nuestras piezas más populares, cuidadosamente seleccionadas para ti
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <Components.ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                  isNew={product.isNew}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                Nuestras Categorías
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl overflow-hidden">
                <Link to="/Vestidos">
                  <div className="relative h-64 bg-gradient-to-br from-pink-100 to-pink-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="text-2xl font-serif font-bold text-pink-800 mb-2">Vestidos</h3>
                        <p className="text-pink-600">Elegancia para cada ocasión</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>

              <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl overflow-hidden">
                <Link to="/Tops">
                  <div className="relative h-64 bg-gradient-to-br from-blue-100 to-blue-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="text-2xl font-serif font-bold text-blue-800 mb-2">Tops</h3>
                        <p className="text-blue-600">Versatilidad y estilo</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Components.Footer />

      <Components.CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  )
}