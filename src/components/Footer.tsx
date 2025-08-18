import React from 'react'
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-pink-100 mt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-pink-600">Livos Boutique</h3>
            <p className="text-gray-600 leading-relaxed">
              Tu destino para la moda femenina más elegante. Descubre nuestra colección de vestidos y tops únicos que realzan tu belleza natural.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-pink-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-pink-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-pink-600 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="h-4 w-4 text-pink-500" />
                <span>info@livosboutique.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="h-4 w-4 text-pink-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="h-4 w-4 text-pink-500" />
                <span>123 Fashion Street, Style City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Enlaces Rápidos</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-600 hover:text-pink-600 transition-colors duration-200">
                Política de Privacidad
              </a>
              <a href="#" className="block text-gray-600 hover:text-pink-600 transition-colors duration-200">
                Términos y Condiciones
              </a>
              <a href="#" className="block text-gray-600 hover:text-pink-600 transition-colors duration-200">
                Envíos y Devoluciones
              </a>
              <a href="#" className="block text-gray-600 hover:text-pink-600 transition-colors duration-200">
                Guía de Tallas
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-pink-100 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © 2024 Livos Boutique. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}