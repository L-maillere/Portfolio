import * as PIXI from 'pixi.js';

export function initPixiShapes() {
  const app = new PIXI.Application({
    width: window.innerWidth,
    height: document.documentElement.offsetHeight,
    backgroundColor: 0x181A1F
  });

  const container = document.getElementById('pixi-container');
  if (container) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(app.view);
  }

  class Creature {
    constructor(x, y) {
      this.segments = [];
      this.graphics = new PIXI.Graphics();
      app.stage.addChild(this.graphics);
      this.createSegments(x, y);

      // Initialiser la direction et la vitesse
      this.direction = Math.random() * Math.PI * 2;
      this.speed = 1; // Vitesse à laquelle la créature se déplace
    }

    createSegments(x, y) {
      const numSegments = Math.floor(Math.random() * 10) + 1;
      let lastX = x;
      let lastY = y;

      for (let i = 0; i < numSegments; i++) {
        const length = Math.random() * 30 + 10;
        const angle = Math.random() * Math.PI * 2;

        this.segments.push({
          start: { x: lastX, y: lastY },
          length: length,
          angle: angle,
          speed: (Math.random() - 0.5) * 0.05,
        });

        lastX += length * Math.cos(angle);
        lastY += length * Math.sin(angle);
      }
    }

    move() {
      // Déplacer la créature
      this.segments[0].start.x += Math.cos(this.direction) * this.speed;
      this.segments[0].start.y += Math.sin(this.direction) * this.speed;

      let outOfBounds = false;

      // Vérifier les limites pour chaque segment
      this.segments.forEach(segment => {
        if (segment.start.x < 0 || segment.start.x > app.screen.width || 
            segment.start.y < 0 || segment.start.y > app.screen.height) {
          outOfBounds = true;
        }
      });

      if (outOfBounds) {
        this.direction += Math.PI; // Changer de direction de 180 degrés
      }

      // Mouvement oscillant pour chaque segment
      this.segments.forEach(segment => {
        segment.angle += segment.speed;
        const dx = 0.02 * segment.length * Math.cos(segment.angle);
        const dy = 0.02 * segment.length * Math.sin(segment.angle);
        segment.start = { x: segment.start.x + dx, y: segment.start.y + dy };
      });
    }

    draw() {
      this.graphics.clear();
      this.graphics.lineStyle(2, 0xDDDDDD, 0.5);
      let lastX = this.segments[0].start.x;
      let lastY = this.segments[0].start.y;
      this.segments.forEach(segment => {
        const endX = lastX + segment.length * Math.cos(segment.angle);
        const endY = lastY + segment.length * Math.sin(segment.angle);

        // Dessiner les lignes
        this.graphics.moveTo(lastX, lastY);
        this.graphics.lineTo(endX, endY);

        // Dessiner les cercles aux intersections
        this.graphics.beginFill(0xDDDDDD);
        this.graphics.drawCircle(lastX, lastY, 1); // petit cercle de rayon 3
        this.graphics.drawCircle(endX, endY, 1); // petit cercle de rayon 3
        this.graphics.endFill();

        lastX = endX;
        lastY = endY;
      });
    }
  }

  const creatures = [];
 
  for (let i = 0; i < 30; i++) {
    const x = Math.random() * app.screen.width;
    const y = Math.random() * app.screen.height;
    creatures.push(new Creature(x, y));
  }

  app.ticker.add(() => {
    creatures.forEach(creature => {
      creature.move();
      creature.draw();
    });
  });
  return { app };
}