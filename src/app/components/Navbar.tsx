import React, { useState, useEffect } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import { IoCodeSlashSharp } from 'react-icons/io5';
import { navLinks } from '@/const';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleRouteChange = () => setIsMenuOpen(false);
        window.addEventListener('popstate', handleRouteChange);
        return () => window.removeEventListener('popstate', handleRouteChange);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md py-2' : 'py-4'}`}>
            <div className="container mx-auto px-4">
                <nav className={`flex items-center justify-between border border-white/15 rounded-full p-3 transition-all ${scrolled ? 'py-2 px-4' : 'p-4'}`}>
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
                            <IoCodeSlashSharp className="text-white text-xs" />
                        </div>
                        <h1 className="text-base font-bold md:text-2xl">
                            SM Infinite Tech
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className='hidden md:flex items-center justify-center space-x-6'>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    className=' font-bold text-neutral-600 dark:text-neutral-300 hover:text-violet-500 dark:hover:text-violet-400 transition-colors'
                                    href={link.href}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA */}
                    <div className='hidden md:flex items-center'>
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-2"
                        >
                            <IoCodeSlashSharp />
                            <span>Start A Project</span>
                        </HoverBorderGradient>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className='flex md:hidden items-center justify-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
                        onClick={() => setIsMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <BiMenu className='w-6 h-6' />
                    </button>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 z-40"
                            onClick={() => setIsMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25 }}
                            className="fixed top-0 right-0 h-full w-80 max-w-full bg-white dark:bg-gray-900 z-50 shadow-2xl"
                        >
                            <div className="flex flex-col h-full p-6">
                                {/* Menu Header */}
                                <div className="flex justify-between items-center mb-10">
                                    <div className="flex items-center gap-2">
                                        <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
                                        <h2 className="text-xl font-bold bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
                                            SM Infinite Tech
                                        </h2>
                                    </div>
                                    <button
                                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                                        onClick={() => setIsMenuOpen(false)}
                                        aria-label="Close menu"
                                    >
                                        <BiX className="w-6 h-6" />
                                    </button>
                                </div>

                                {/* Mobile Navigation */}
                                <ul className="flex-1 space-y-4">
                                    {navLinks.map((link) => (
                                        <motion.li
                                            key={link.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 * navLinks.indexOf(link) }}
                                        >
                                            <Link
                                                className="block py-3 text-lg font-medium text-neutral-700 dark:text-neutral-200 hover:text-violet-500 dark:hover:text-violet-400 transition-colors border-b border-gray-100 dark:border-gray-800"
                                                href={link.href}
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Mobile CTA */}
                                <div className="pt-8 border-t border-gray-100 dark:border-gray-800">
                                    <HoverBorderGradient
                                        containerClassName="rounded-full w-full"
                                        as="button"
                                        className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2 w-full py-3"
                                    >
                                        <IoCodeSlashSharp />
                                        <span>Start A Project</span>
                                    </HoverBorderGradient>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Navbar;