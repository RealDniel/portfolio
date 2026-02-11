"use client";

import { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { Particle } from "@/public/particle"; // adjust path

const noise3D = createNoise3D();

const zIncrement = 0.001;
const size = 25;
const noiseScale = 0.08;

const particleSpeed = 10;
const numParticles = 35000;
const particleSize = 0.75;
const baseHue = 140; // emerald-ish

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    let animationId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Flow field
    let cols = Math.floor(canvas.width / size);
    let rows = Math.floor(canvas.height / size);
    let flow_angles = new Float32Array(cols * rows);

    function randomSimilarColor() {
      const h = baseHue + (Math.random() * 3 - 1) * 40;
      return `hsla(${h}, 70%, 50%, 0.4)`;
    }

    const particles = Array.from({ length: numParticles }, () =>
      new Particle(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        particleSize,
        particleSpeed,
        randomSimilarColor()
      )
    );

    let zOffset = 0;

    function updateFlowField() {
      let i = 0;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const n = noise3D(x * noiseScale, y * noiseScale, zOffset);
          flow_angles[i++] = n * Math.PI * 2;
        }
      }
    }

    function animate() {
      ctx.fillStyle = "rgba(0,0,0,0.8)";
      if(!canvas){
        return;
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      updateFlowField();
      zOffset += zIncrement;

      // Update
      for (const p of particles) {
        p.update(flow_angles, size, rows, cols);
      }

      // Draw (bucketed by color would be even faster)
      for (const p of particles) {
        ctx.fillStyle = p.color;
        ctx.fillRect(p.px, p.py, particleSize, particleSize);
      }

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10" />
  );
}
