import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
      <img className="w-full h-56 object-cover" src={product.imageUrl} alt={product.name} />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-primary mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>
        {product.features && product.features.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-1">Öne Çıkan Özellikler:</h4>
            <ul className="list-disc list-inside text-xs text-gray-500 space-y-1">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        <button className="mt-auto w-full bg-accent text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors duration-300 text-sm font-medium">
          Detaylı Bilgi
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
