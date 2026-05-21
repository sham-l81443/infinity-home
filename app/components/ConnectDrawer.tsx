"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight } from "lucide-react";

/* ─── Inline SVG icons ─── */
const WhatsAppIcon = ({ className = "size-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.46 3.48 1.332 5l-1.416 5.172 5.292-1.392c1.476.8 3.12 1.22 4.78 1.22 5.506 0 9.988-4.482 9.988-9.988S17.518 2 12.012 2zm6.264 14.184c-.252.708-1.476 1.308-2.028 1.392-.504.072-1.164.132-3.372-.78-2.82-1.164-4.632-4.032-4.776-4.224-.144-.192-1.14-1.512-1.14-2.88 0-1.368.708-2.04 1.008-2.352.252-.264.672-.372.996-.372.108 0 .204 0 .288.012.264.012.396.024.564.432.204.504.708 1.728.768 1.848.06.12.108.264.024.432-.084.18-.18.288-.3.432-.12.132-.252.3-.36.408-.12.12-.252.252-.108.504.144.252.648 1.068 1.392 1.728.96.852 1.764 1.116 2.016 1.248.252.132.396.108.54-.06.144-.168.624-.732.792-.984.168-.252.336-.204.564-.12.228.084 1.44.684 1.692.804.252.12.42.18.48.288.06.108.06.624-.192 1.332z" />
  </svg>
);

const InstagramIcon = ({ className = "size-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const PhoneIcon = ({ className = "size-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

/* ─── The drawer overlay, portalled to document.body ─── */
function DrawerOverlay({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-end justify-center bg-black/45 backdrop-blur-xs transition-opacity duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`w-full sm:max-w-md bg-white/95 backdrop-blur-xl border border-zinc-200/50 rounded-t-3xl shadow-2xl p-6 relative flex flex-col items-center pb-8 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag handle */}
        <div className="w-12 h-1 bg-zinc-300 rounded-full mb-6" />

        <div className="text-center pt-1 pb-5">
          <h3 className="text-xl font-bold text-zinc-900 tracking-tight font-sans">
            Connect with Us
          </h3>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1">
            Choose your preferred channel to collaborate. We&apos;d love to chat.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 w-full px-2">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="size-12 rounded-full bg-linear-to-tr from-yellow-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-md shadow-rose-500/10 transition-all">
              <InstagramIcon className="size-6" />
            </div>
            <span className="text-[11px] font-semibold text-zinc-700 mt-3 tracking-wide">Instagram</span>
          </a>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="size-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/10 transition-all">
              <WhatsAppIcon className="size-6 fill-white" />
            </div>
            <span className="text-[11px] font-semibold text-zinc-700 mt-3 tracking-wide">WhatsApp</span>
          </a>

          <a href="tel:+919999999999" className="flex flex-col items-center">
            <div className="size-12 rounded-full bg-linear-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-blue-600/10 transition-all">
              <PhoneIcon className="size-5" />
            </div>
            <span className="text-[11px] font-semibold text-zinc-700 mt-3 tracking-wide">Call</span>
          </a>
        </div>
      </div>
    </div>,
    document.body   // ← mounted directly on <body>, escapes ALL stacking contexts
  );
}

/* ─── Default export: the button + portal drawer ─── */
export default function ConnectDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="group/btn flex-1 cursor-pointer btn-gradient text-white px-3 h-9 lg:h-auto sm:px-5 sm:py-3 lg:px-8 lg:py-4 rounded-lg lg:rounded-xl inline-flex lg:flex items-center justify-center gap-2 lg:gap-3 text-xs lg:text-base font-medium shadow-(--shadow-medium) hover:shadow-(--shadow-large) transition-all lg:hover:-translate-y-1"
      >
        Connect Us
        <ArrowRight className="size-4 lg:group-hover/btn:translate-x-1 lg:transition-transform" />
      </button>

      {/* Portal renders outside the section's overflow/transform stacking context */}
      {isOpen && <DrawerOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </>
  );
}