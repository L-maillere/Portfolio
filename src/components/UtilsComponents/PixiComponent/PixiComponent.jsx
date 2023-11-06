import React, { useEffect, useRef } from 'react';
import { initPixiShapes } from './pixiShapes';
import { useLocation } from 'react-router-dom';

function PixiComponent() {
  const appRef = useRef(null); // Référence à l'application Pixi
  const containerRef = useRef(null); // Référence au div conteneur de l'application Pixi
  const location = useLocation(); // Obtient l'objet de localisation de React Router
  const prevPathname = useRef(location.pathname); // Stocke le chemin précédent

  // Initalistion de l'application et configurons des Eventlisteners pour les redimensionnements,
  // les changements d'orientation et les changements de page
  useEffect(() => {
    // Fonction qui gère le redimensionnement de l'application
    const handleResize = () => {
      if (appRef.current && appRef.current.renderer) {
        const newWidth = document.documentElement.clientWidth;
        const newHeight = document.documentElement.offsetHeight;
        appRef.current.renderer.resize(newWidth, newHeight);
      }
    };

    const { app } = initPixiShapes(); // Initialise l'application Pixi
    appRef.current = app; // Stocke l'application Pixi dans la référence
    containerRef.current.appendChild(app.view); // Ajoute le canvas de l'application Pixi au div conteneur

    // Ajouts des Eventlisteners pour le redimensionnement et les changements d'orientation
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);

      // Nettoyage de l'application PIXI
      if (appRef.current) {
        appRef.current.destroy(true);
      }
    };
  }, []);

  useEffect(() => {
    // Si le chemin n'a pas changé, ne fait rien
    if (!appRef.current || location.pathname === prevPathname.current) {
      return;
    }

     // Mémorise le nouveau chemin
    prevPathname.current = location.pathname;

    // Déclenche la transition d'opacité
    containerRef.current.classList.add('fade-out');

    const timeoutId = setTimeout(() => {
      // Nettoie l'application PIXI existante
      if (appRef.current) {
        appRef.current.destroy(true);
      }

      // Recrée l'application PIXI
      const { app } = initPixiShapes();
      appRef.current = app;
      containerRef.current.appendChild(app.view);

      // Retire la classe 'fade-out' pour terminer la transition
      containerRef.current.classList.remove('fade-out');
    }, 300);

  // Fonction de nettoyage si le composant est démonté pendant la transition
  return () => {
    clearTimeout(timeoutId);
  };
  }, [location.pathname]); // Se déclenche lorsque location.pathname change

  // Rendu du div conteneur de l'application Pixi
  return <div id="pixi-container" ref={containerRef}></div>;
}

export default PixiComponent;