import React, { useEffect, useRef } from 'react';
import { initPixiShapes } from './pixiShapes';
import { useLocation } from 'react-router-dom';

function PixiComponent() {
  const appRef = useRef(null);
  const location = useLocation();
  const prevPathname = useRef(location.pathname);
  const containerRef = useRef(null); // Ajoutez cette référence pour le conteneur div

  useEffect(() => {
    const { app, cleanup } = initPixiShapes();
    appRef.current = app;

    if (prevPathname.current === location.pathname) {
      return;
    }

    prevPathname.current = location.pathname;

    // Ajoutez la classe 'fade-out' pour commencer la transition d'opacité
    containerRef.current.classList.add('fade-out');

    const timeoutId = setTimeout(() => {
        cleanup();
        if (appRef.current) {
            appRef.current.stage.children.forEach(child => {
                child.destroy();
            });
            appRef.current.ticker.stop();
            appRef.current.destroy(true);
        }

        const { app: newApp } = initPixiShapes();
        appRef.current = newApp;

        // Retirez la classe 'fade-out' après que l'application a été rechargée
        containerRef.current.classList.remove('fade-out');
    }, 300); // Assurez-vous que ce délai correspond à la durée de la transition CSS

    return () => {
        clearTimeout(timeoutId);
        if (appRef.current) {
            appRef.current.stage.children.forEach(child => {
                child.destroy();
            });
            appRef.current.ticker.stop();
            appRef.current.destroy(true);
        }
        cleanup();
    };
  }, [location.pathname]);

  // Utilisez `containerRef` pour la référence du div
  return <div id="pixi-container" ref={containerRef}></div>;
}

export default PixiComponent;