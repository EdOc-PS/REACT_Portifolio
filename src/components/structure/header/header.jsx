import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import style from './header.module.sass';

export default function Header() {
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0
  });
  const [activeIndex, setActiveIndex] = useState(0); // índice do item ativo

  const containerRef = useRef();
  const itemRefs = useRef([]);

  const updateIndicator = (element) => {
    setIndicatorStyle({
      left: element.offsetLeft,
      top: element.offsetTop,
      width: element.offsetWidth,
      height: element.offsetHeight
    });
  };

  const handleClick = (index) => (e) => {
    setActiveIndex(index);
    updateIndicator(e.currentTarget);
  };

  // Seleciona o primeiro item ao carregar
  useEffect(() => {
    const firstItem = itemRefs.current[0];
    if (firstItem) {
      updateIndicator(firstItem);
    }
  }, []);

  useEffect(() => {
    const scrollHeader = () => {
      const header = document.querySelector('header');
      if (header) {
        header.classList.toggle(style.scroll_header, window.scrollY > 500);
      }
    };
    window.addEventListener("scroll", scrollHeader);
    return () => window.removeEventListener("scroll", scrollHeader);
  }, []);

  const menuItems = [
    { href: "#about", label: "Perfil", icon: "fi fi-sr-user-crown" },
    { href: "#skills", label: "Carreira", icon: "fi fi-sr-graduation-cap" },
    { href: "#projects", label: "Projetos", icon: "fi fi-sr-briefcase-blank" }
  ];

  return (
    <header className={style.header}>
      <ul className={style.header_ul} ref={containerRef}>
        <motion.div
          className={style.indicator}
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          style={{
            position: "absolute",
            borderRadius: "35px",
            backgroundColor: "#583EBC",
            zIndex: 0,
            ...indicatorStyle,
          }}
        />
        {menuItems.map((item, index) => (
          <li
            key={item.href}
            className={`${style.header_li} ${activeIndex === index ? style.ativo : ""}`}
            ref={(el) => (itemRefs.current[index] = el)}
            onClick={handleClick(index)}
          >
            <a href={item.href}>
              {item.label} <i className={item.icon}></i>
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
