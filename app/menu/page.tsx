"use client";

import { useState } from "react";
import { menuData, MenuItem } from "@/data/menu";

type MenuItemWithImage = MenuItem & { image: string };

export const metadata = {
  title: "Menu | Maza Mediterranean Cuisine",
  description: "Wraps, plates, burgers, and sides — made fresh in-house every day. Chandler's Mediterranean spot for big portions and honest prices.",
};

export default function MenuPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Flatten all items that have images for the lightbox
  const itemsWithImages: MenuItemWithImage[] = menuData
    .flatMap(section => section.items)
    .filter((item): item is MenuItemWithImage => !!item.image);

  const openLightbox = (clickedItem: MenuItem) => {
    const index = itemsWithImages.findIndex(item => item.name === clickedItem.name);
    if (index !== -1) {
      setCurrentIndex(index);
      setIsOpen(true);
    }
  };

  const closeLightbox = () => setIsOpen(false);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? itemsWithImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === itemsWithImages.length - 1 ? 0 : prev + 1));
  };

  const currentItem = itemsWithImages[currentIndex];

  // Keyboard navigation
  if (typeof window !== "undefined") {
    window.onkeydown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gold-gradient mb-4 tracking-wider">
            Our Menu
          </h1>
          <p className="text-[#B8B8B8] text-lg max-w-2xl mx-auto">
            Big portions. Real ingredients. Honest prices. Made fresh, in-house, every day.
          </p>
          <div className="mt-8 mb-4">
            <img src="/images/maza/menu/opt-PXL_20260607_180708446.jpg" alt="Mixed grill platter - Maza Special" className="w-full max-w-4xl mx-auto rounded-xl shadow-xl border border-[#D3AB5E]/20" />
          </div>
        </div>

        <div className="space-y-16">
          {menuData.map((section) => (
            <div key={section.category}>
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-2">
                  <div className="h-px flex-1 bg-[rgba(211,171,94,0.3)]"></div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-[#D3AB5E] tracking-wider">
                    {section.category}
                  </h2>
                  <div className="h-px flex-1 bg-[rgba(211,171,94,0.3)]"></div>
                </div>
                {section.subtitle && (
                  <p className="text-[#B8B8B8] text-sm mt-2 text-center">{section.subtitle}</p>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    onClick={() => openLightbox(item)}
                    className="bg-[#0E0E0E] rounded-lg border border-[rgba(211,171,94,0.15)] hover:border-[rgba(211,171,94,0.35)] transition-all duration-200 overflow-hidden cursor-pointer group"
                  >
                    {item.image && (
                      <div className="relative">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-display text-lg text-[#F5F1E8] tracking-wide">{item.name}</h3>
                        <span className="text-[#D3AB5E] font-bold text-lg ml-4">{item.price}</span>
                      </div>
                      {item.description && (
                        <p className="text-[#B8B8B8] text-sm mb-3">{item.description}</p>
                      )}
                      {item.note && (
                        <p className="text-[#B8B8B8] text-sm italic">{item.note}</p>
                      )}
                      {item.notes && item.notes.map((note, i) => (
                        <p key={i} className="text-[#B8B8B8] text-sm">{note}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#0E0E0E] p-8 rounded-lg border border-[rgba(211,171,94,0.15)] text-center">
          <p className="text-[#F5F1E8]">
            <strong className="text-[#D3AB5E]">Note:</strong> All plates come with 2 kebabs unless otherwise noted, rice, salad, hummus + tahini. Please inform us of any allergies.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && currentItem && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-5xl w-full"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-[#D3AB5E] transition-colors z-10"
            >
              ✕
            </button>

            {/* Image */}
            <div className="relative bg-[#0E0E0E] rounded-xl overflow-hidden border border-[#D3AB5E]/20">
              <img 
                src={currentItem.image} 
                alt={currentItem.name}
                className="w-full max-h-[75vh] object-contain"
              />
            </div>

            {/* Info */}
            <div className="mt-4 text-center">
              <h3 className="font-display text-2xl text-[#F5F1E8] mb-1">{currentItem.name}</h3>
              <p className="text-[#D3AB5E] text-xl font-bold mb-2">{currentItem.price}</p>
              {currentItem.description && (
                <p className="text-[#B8B8B8] max-w-2xl mx-auto">{currentItem.description}</p>
              )}
            </div>

            {/* Navigation Arrows */}
            {itemsWithImages.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-[#D3AB5E] transition-colors bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
                >
                  ←
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-[#D3AB5E] transition-colors bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
                >
                  →
                </button>
              </>
            )}

            {/* Counter */}
            <div className="text-center mt-4 text-[#B8B8B8] text-sm">
              {currentIndex + 1} / {itemsWithImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
