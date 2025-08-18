'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  category: 'dress' | 'top'
  isNew?: boolean
  onAddToCart?: (product: { id: string; name: string; price: number; image: string; category: string }) => void
}

export default function ProductCard({ 
  id, 
  name, 
  price, 
  image, 
  category, 
  isNew = false, 
  onAddToCart 
}: ProductCardProps) {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({ id, name, price, image, category })
    }
  }

  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-pink-100 overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {isNew && (
          <Badge className="absolute top-3 left-3 bg-pink-500 hover:bg-pink-600 text-white">
            Nuevo
          </Badge>
        )}
        
        {/* Hover overlay with Add to Cart button */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end justify-center pb-4">
          <Button
            onClick={handleAddToCart}
            className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-pink-600 hover:bg-pink-700 text-white shadow-lg"
          >
            Agregar al Carrito
          </Button>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{name}</h3>
        <p className="text-lg font-semibold text-pink-600">${price.toFixed(2)}</p>
      </CardContent>
    </Card>
  )
}