'use client'

import React, { useState } from 'react'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { Link } from '@/lib'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'

interface HeaderProps {
  cartItemCount?: number
  onCartClick?: () => void
}

export default function Header({ cartItemCount = 0, onCartClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-pink-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/Inicio" className="flex items-center space-x-2">
            <h1 className="text-2xl font-serif font-bold text-pink-600 tracking-wide">
              Livos Boutique
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/Inicio" 
              className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200 hover:underline underline-offset-4"
            >
              Inicio
            </Link>
            <Link 
              to="/Vestidos" 
              className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200 hover:underline underline-offset-4"
            >
              Vestidos
            </Link>
            <Link 
              to="/Tops" 
              className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200 hover:underline underline-offset-4"
            >
              Tops
            </Link>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onCartClick}
              className="relative hover:bg-pink-50 transition-colors duration-200"
            >
              <ShoppingBag className="h-5 w-5 text-gray-700" />
              {cartItemCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-pink-500 hover:bg-pink-600"
                >
                  {cartItemCount}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden hover:bg-pink-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-gray-700" />
              ) : (
                <Menu className="h-5 w-5 text-gray-700" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-pink-100 pt-4">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/Inicio" 
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                to="/Vestidos" 
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Vestidos
              </Link>
              <Link 
                to="/Tops" 
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tops
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}