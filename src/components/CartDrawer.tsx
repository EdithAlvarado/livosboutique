'use client'

import React from 'react'
import { X, Plus, Minus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

interface CartItem {
  id: string
  name: string
  price: number
  image: string
  category: string
  quantity: number
}

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onUpdateQuantity: (id: string, quantity: number) => void
  onRemoveItem: (id: string) => void
}

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemoveItem 
}: CartDrawerProps) {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="h-full max-h-[100vh] w-full max-w-md ml-auto">
        <DrawerHeader className="border-b border-pink-100 pb-4">
          <div className="flex items-center justify-between">
            <DrawerTitle className="text-xl font-semibold text-gray-900">
              Carrito de Compras
              {itemCount > 0 && (
                <Badge variant="secondary" className="ml-2 bg-pink-100 text-pink-700">
                  {itemCount} {itemCount === 1 ? 'artículo' : 'artículos'}
                </Badge>
              )}
            </DrawerTitle>
            <Button variant="ghost" size="sm" onClick={onClose} className="hover:bg-pink-50">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </DrawerHeader>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Tu carrito está vacío</h3>
              <p className="text-gray-500 mb-4">Agrega algunos productos para comenzar</p>
              <Button onClick={onClose} className="bg-pink-600 hover:bg-pink-700 text-white">
                Continuar Comprando
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 truncate">{item.name}</h4>
                    <p className="text-sm text-gray-500 capitalize">{item.category === 'dress' ? 'Vestido' : 'Top'}</p>
                    <p className="text-lg font-semibold text-pink-600">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                        className="h-8 w-8 p-0 border-pink-200 hover:bg-pink-50"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8 p-0 border-pink-200 hover:bg-pink-50"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-pink-100 p-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-900">Subtotal:</span>
              <span className="text-xl font-bold text-pink-600">${subtotal.toFixed(2)}</span>
            </div>
            <Button 
              className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 text-lg font-medium"
              size="lg"
            >
              Proceder al Checkout
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-pink-200 text-pink-600 hover:bg-pink-50"
              onClick={onClose}
            >
              Continuar Comprando
            </Button>
          </div>
        )}
      </DrawerContent>
    </Drawer>
  )
}