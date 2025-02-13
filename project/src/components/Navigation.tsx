import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Menu, X, Moon, Sun, Palette } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-scroll";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, colorScheme, toggleTheme, setColorScheme } = useTheme();
  const { scrollY } = useScroll();
  const [isColorMenuOpen, setIsColorMenuOpen] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const navItems = [
    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Experience", href: "experience" },
    { label: "Projects", href: "projects" },
    { label: "Contact", href: "contact" },
  ];

  const colorSchemes = [
    { name: "default", label: "Default" },
    { name: "blue", label: "Blue" },
    { name: "green", label: "Green" },
    { name: "purple", label: "Purple" },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/10 backdrop-blur-lg shadow-lg`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item,index) => (
              <Link
              key={index}
                to={item.href}
                smooth={true}
                className="text-white hover:text-white/80 transition-colors hover:scale-110 active:scale-95s cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsColorMenuOpen(!isColorMenuOpen)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Palette className="w-5 h-5 text-white" />
              </motion.button>

              {isColorMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg">
                  {colorSchemes.map((scheme) => (
                    <button
                      key={scheme.name}
                      onClick={() => {
                        setColorScheme(scheme.name as any);
                        setIsColorMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-white hover:bg-white/20 transition-colors"
                    >
                      {scheme.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-white" />
              ) : (
                <Moon className="w-5 h-5 text-white" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMobileMenuOpen ? "auto" : 0 }}
          className={`md:hidden overflow-hidden ${
            isMobileMenuOpen ? "border-t border-white/10" : ""
          }`}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item,index) => (
              // <motion.a
              //   key={item.label}
              //   href={item.href}
              //   className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
              //   onClick={handleNavClick}
              //   whileTap={{ scale: 0.98 }}
              // >
              //   {item.label}
              // </motion.a>
              <Link
              key={index}
              to={item.href}
              smooth={true}
              className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
              onClick={handleNavClick}
            >
              {item.label}
            </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
