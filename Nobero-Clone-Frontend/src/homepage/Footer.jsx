import React from 'react'
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa"
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = [
    {
      title: "Categories",
      links: [
        { name: "Men", href: "/men" },
        { name: "Oversized Tees", href: "/oversized-tees" },
        { name: "T-Shirts", href: "/tshirts", link: "/printed-t-shirts" },
        { name: "Hoodies", href: "/hoodies", link: "/hoodies" },
        { name: "Joggers", href: "/joggers", link: "/joggers" },
        { name: "Co-ords", href: "/co-ords" },
        { name: "Polos", href: "/polos" },
        { name: "Travel", href: "/travel" },
      ],
    },
    {
      title: "Need Help",
      links: [
        { name: "Track Your Order", href: "/track-order" },
        { name: "Returns & Exchanges", href: "/returns" },
        { name: "Chat on WhatsApp", href: "/whatsApp" },
        { name: "Contact Us", href: "/contact", link: '/contact-us' },
        { name: "FAQs", href: "/faqs" },
        { name: "Stores Near Me", href: "/stores", link: '/store-locator' },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "Shipping Policy", href: "/shipping-policy" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Franchise Enquiry", href: "/franchise" },
      ],
    },
  ];
  return (
    <footer className="bg-[#0b2a52] text-white">

      <div className="w-full max-w-6xl mx-auto px-16 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 ">
        {footerLinks.map((section) => (
          <div
            key={section.title}>
            <h3 className="mb-4 font-semibold uppercase tracking-wide text-center md:text-left">
              {section.title}
            </h3>
            <ul className="space-y-2 text-sm text-center md:text-left">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.link}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    href={link.href}
                    className="hover:underline hover:text-gray-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social Icons */}
        <div className="col-span-1 flex flex-col items-center md:items-start">
          <h3 className="mb-4 font-semibold uppercase tracking-wide text-center md:text-left">
            Get in touch
          </h3>
          <div className="flex space-x-8 text-3xl">
            <a href="https://instagram.com/yourpage" aria-label="Instagram" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="https://facebook.com/yourpage" aria-label="Facebook" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="https://wa.me/911234567890" aria-label="WhatsApp" className="hover:text-gray-300">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full text-xs py-12 px-32">
        © 2025 NOBERO. All rights reserved | By Playglab Ecommerce Pvt. Ltd.
      </div>
    </footer>
  );
}

export default Footer