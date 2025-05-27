
import { useState, useEffect } from 'react';
import styles from "./header.module.css";

function useMobileDetection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkScreenSize();
    
    // Listen for resize events
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isMobile;
}

function Header() {
  //move props up a level 
  const [isLogin, setIsLogin] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMobileDetection(); // Using our hook

  return (
    <header className={styles.header}>
      <h3 className={styles.header__logo}>NewsExplorer</h3>

      {/* Desktop Navigation */}
      {!isMobile && (
        <nav className={styles.nav}>
          <div className={styles.nav__item}>
            <button className={styles.nav__button}>Home</button>
          </div>
          {isLogin && (
            <div className={styles.nav__item}>
              <button className={styles.nav__button}>Saved Articles</button>
            </div>
          )}
          <button
            className={styles.header__authbutton}
            onClick={() => setIsLogin(!isLogin)}
          >
            Sign in
          </button>
        </nav>
      )}

      {/* Mobile Navigation */}
      {isMobile && (
        <>
          <button 
            className={styles.mobileMenuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen? "x": "☰"}
          </button>
          
          {isMenuOpen && (
            <div className={styles.mobileMenu}>
              <button className={styles.nav__button}>Home</button>
              {isLogin && (
                <button className={styles.nav__button}>Saved Articles</button>
              )}
              <button
                className={styles.header__authbutton}
                onClick={() => setIsLogin(!isLogin)}
              >
                Sign in
              </button>
            </div>
          )}
        </>
      )}
    </header>
  );
}

export default Header;