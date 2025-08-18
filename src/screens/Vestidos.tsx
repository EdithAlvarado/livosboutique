'use client'

import React, { useState } from 'react'
import Components from '../components'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'

interface CartItem {
  id: string
  name: string
  price: number
  image: string
  category: string
  quantity: number
}

export default function Vestidos() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')
  const [filterBy, setFilterBy] = useState('all')

  const dresses = [
    {
      id: '1',
      name: 'Vestido Floral Rosa Elegante',
      price: 89.99,
      image: 'https://uxcanvas.ai/api/generated-images/8c4f1bbc-9c64-4524-beaf-c1502afd7dd8/8f61a964-947e-40b1-927b-c4bdf3eb4ab6',
      category: 'dress' as const,
      isNew: true,
      type: 'casual'
    },
    {
      id: '2',
      name: 'Vestido Negro de Noche',
      price: 129.99,
      image: 'https://uxcanvas.ai/api/generated-images/8c4f1bbc-9c64-4524-beaf-c1502afd7dd8/31c2bdd4-49f5-4e65-83b0-96c4a31230e2',
      category: 'dress' as const,
      type: 'formal'
    },
    {
      id: '5',
      name: 'Vestido Rojo Cocktail',
      price: 95.99,
      image: 'https://uxcanvas.ai/api/generated-images/8c4f1bbc-9c64-4524-beaf-c1502afd7dd8/12b71fd9-3ecc-447b-a599-8d1362244115',
      category: 'dress' as const,
      type: 'cocktail'
    },
    {
      id: '7',
      name: 'Vestido Azul Marino Clásico',
      price: 75.99,
      image: 'https://images.unsplash.com/photo-1566479179817-c0ae8e4b4b3d?w=400&h=400&fit=crop',
      category: 'dress' as const,
      type: 'casual'
    },
    {
      id: '8',
      name: 'Vestido Blanco Bohemio',
      price: 68.99,
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=400&fit=crop',
      category: 'dress' as const,
      isNew: true,
      type: 'casual'
    },
    {
      id: '9',
      name: 'Vestido Verde Esmeralda',
      price: 110.99,
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop',
      category: 'dress' as const,
      type: 'formal'
    }
  ]

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

  // Filter and sort dresses
  let filteredDresses = dresses
  if (filterBy !== 'all') {
    filteredDresses = dresses.filter(dress => dress.type === filterBy)
  }

  if (sortBy === 'price-low') {
    filteredDresses = [...filteredDresses].sort((a, b) => a.price - b.price)
  } else if (sortBy === 'price-high') {
    filteredDresses = [...filteredDresses].sort((a, b) => b.price - a.price)
  } else if (sortBy === 'name') {
    filteredDresses = [...filteredDresses].sort((a, b) => a.name.localeCompare(b.name))
  }

  return (
    <div className="min-h-screen bg-white">
      <Components.Header 
        cartItemCount={cartItemCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main>
        {/* Page Header */}
        <section className="bg-gradient-to-r from-pink-50 to-rose-50 py-16">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                Colección de Vestidos
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Descubre vestidos únicos para cada ocasión especial en tu vida
              </p>
            </div>
          </div>
        </section>

        {/* Filters and Sort */}
        <section className="py-8 border-b border-pink-100">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-sm font-medium text-gray-700">Filtrar por:</span>
                <div className="flex gap-2">
                  <Button
                    variant={filterBy === 'all' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilterBy('all')}
                    className={filterBy === 'all' ? 'bg-pink-600 hover:bg-pink-700' : 'border-pink-200 text-pink-600 hover:bg-pink-50'}
                  >
                    Todos
                  </Button>
                  <Button
                    variant={filterBy === 'casual' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilterBy('casual')}
                    className={filterBy === 'casual' ? 'bg-pink-600 hover:bg-pink-700' : 'border-pink-200 text-pink-600 hover:bg-pink-50'}
                  >
                    Casual
                  </Button>
                  <Button
                    variant={filterBy === 'formal' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilterBy('formal')}
                    className={filterBy === 'formal' ? 'bg-pink-600 hover:bg-pink-700' : 'border-pink-200 text-pink-600 hover:bg-pink-50'}
                  >
                    Formal
                  </Button>
                  <Button
                    variant={filterBy === 'cocktail' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilterBy('cocktail')}
                    className={filterBy === 'cocktail' ? 'bg-pink-600 hover:bg-pink-700' : 'border-pink-200 text-pink-600 hover:bg-pink-50'}
                  >
                    Cocktail
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700">Ordenar por:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48 border-pink-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Destacados</SelectItem>
                    <SelectItem value="name">Nombre A-Z</SelectItem>
                    <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
                    <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-600">
                Mostrando {filteredDresses.length} de {dresses.length} vestidos
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            {filteredDresses.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron vestidos</h3>
                <p className="text-gray-500 mb-4">Intenta cambiar los filtros para ver más opciones</p>
                <Button 
                  onClick={() => setFilterBy('all')}
                  className="bg-pink-600 hover:bg-pink-700 text-white"
                >
                  Ver Todos los Vestidos
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDresses.map((dress) => (
                  <Components.ProductCard
                    key={dress.id}
                    id={dress.id}
                    name={dress.name}
                    price={dress.price}
                    image={dress.image}
                    category={dress.category}
                    isNew={dress.isNew}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            )}
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