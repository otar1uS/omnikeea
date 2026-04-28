'use client';

import { useEffect, useRef } from 'react';

type Node = {
  label: string; sub: string;
  r: number; a: number;
  lit: boolean; pulse: number; color: string;
};

export default function Radar() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const labelsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const labelsWrap = labelsRef.current;
    if (!canvas || !labelsWrap) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = 700, H = 700, CX = W / 2, CY = H / 2, R = 300;

    // Mint primary (#3ee0b3 / #5eead4) · Coral secondary (#f57360) · Slate (#94a3b8)
    const nodes: Node[] = [
      { label: 'Omnikeea', sub: 'API Hub', r: 0.0, a: 0, lit: false, pulse: 0, color: '#3ee0b3' },
      { label: 'Merchant', sub: 'E-Commerce', r: 0.52, a: 0.55, lit: false, pulse: 0, color: '#94a3b8' },
      { label: 'PSP Alpha', sub: 'Licensed Partner', r: 0.58, a: 2.10, lit: false, pulse: 0, color: '#f57360' },
      { label: 'PSP Beta', sub: 'Licensed Partner', r: 0.55, a: 3.70, lit: false, pulse: 0, color: '#f57360' },
      { label: 'PSP Gamma', sub: 'Licensed Partner', r: 0.60, a: 5.10, lit: false, pulse: 0, color: '#f57360' },
      { label: 'Analytics', sub: 'Data Layer', r: 0.38, a: 1.30, lit: false, pulse: 0, color: '#5eead4' },
      { label: 'Risk', sub: 'Monitor', r: 0.35, a: 4.20, lit: false, pulse: 0, color: '#5eead4' },
      { label: 'Automation', sub: 'Workflow', r: 0.42, a: 2.85, lit: false, pulse: 0, color: '#5eead4' },
    ];
    const links: [number, number][] = [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[1,5],[2,5]];

    let sweep = 0;
    const SWEEP_SPEED = 0.008;
    const FADE = Math.PI * 1.1;

    const nodePos = (n: Node) => n.r === 0
      ? { x: CX, y: CY }
      : { x: CX + Math.cos(n.a) * n.r * R, y: CY + Math.sin(n.a) * n.r * R };

    const angleDiff = (a: number, b: number) => {
      let d = ((a - b) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
      if (d > Math.PI) d -= Math.PI * 2;
      return d;
    };

    type Packet = { from: number; to: number; t: number; speed: number };
    const packets: Packet[] = [];
    const spawnPacket = (from: number, to: number) => packets.push({ from, to, t: 0, speed: 0.008 + Math.random() * 0.006 });

    function positionLabels() {
      labelsWrap!.innerHTML = '';
      const rect = canvas!.getBoundingClientRect();
      const scale = rect.width / W;
      nodes.forEach((n, i) => {
        const p = nodePos(n);
        const div = document.createElement('div');
        div.className = 'radar-label' + (n.lit ? ' lit' : '');
        div.id = 'rl-' + i;
        let lx = p.x * scale, ly = p.y * scale;
        let tx = -50, ty = -50;
        if (i !== 0) {
          const dx = p.x - CX, dy = p.y - CY;
          const len = Math.sqrt(dx * dx + dy * dy);
          if (len > 0) { lx += (dx / len) * 18 * scale; ly += (dy / len) * 18 * scale; }
          if (p.x < CX - 40) tx = -100; else if (p.x > CX + 40) tx = 0;
          if (p.y < CY - 40) ty = -100; else if (p.y > CY + 40) ty = 0;
        }
        div.style.left = lx + 'px';
        div.style.top = ly + 'px';
        div.style.transform = `translate(${tx}%, ${ty}%)`;
        div.innerHTML = n.label + '<span>' + n.sub + '</span>';
        labelsWrap!.appendChild(div);
      });
    }

    function updateLabels() {
      nodes.forEach((n, i) => {
        const el = document.getElementById('rl-' + i);
        if (!el) return;
        el.classList.toggle('lit', n.lit);
        el.style.opacity = n.lit ? '1' : (0.4 + n.pulse * 0.6).toString();
      });
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);
      ctx!.fillStyle = '#07090f';
      ctx!.beginPath(); ctx!.arc(CX, CY, R + 2, 0, Math.PI * 2); ctx!.fill();

      for (let i = 1; i <= 4; i++) {
        const rr = R * i / 4;
        ctx!.beginPath();
        ctx!.arc(CX, CY, rr, 0, Math.PI * 2);
        ctx!.strokeStyle = `rgba(255,255,255,${0.025 + (i === 4 ? 0.03 : 0)})`;
        ctx!.lineWidth = i === 4 ? 1.5 : 1;
        ctx!.stroke();
      }
      ctx!.strokeStyle = 'rgba(255,255,255,0.04)';
      ctx!.lineWidth = 1;
      for (let a = 0; a < Math.PI * 2; a += Math.PI / 6) {
        ctx!.beginPath(); ctx!.moveTo(CX, CY); ctx!.lineTo(CX + Math.cos(a) * R, CY + Math.sin(a) * R); ctx!.stroke();
      }

      links.forEach(([i, j]) => {
        const a = nodePos(nodes[i]); const b = nodePos(nodes[j]);
        const litFactor = (nodes[i].pulse + nodes[j].pulse) / 2;
        ctx!.beginPath();
        ctx!.moveTo(a.x, a.y); ctx!.lineTo(b.x, b.y);
        ctx!.strokeStyle = `rgba(62,224,179,${0.08 + litFactor * 0.25})`;
        ctx!.lineWidth = 1 + litFactor;
        ctx!.stroke();
      });

      const trailSteps = 60;
      for (let s = 0; s < trailSteps; s++) {
        const angle = sweep - (s / trailSteps) * FADE;
        const alpha = (1 - s / trailSteps) * 0.18;
        ctx!.beginPath();
        ctx!.moveTo(CX, CY);
        ctx!.arc(CX, CY, R, angle - 0.025, angle + 0.025);
        ctx!.closePath();
        ctx!.fillStyle = `rgba(46,200,160,${alpha})`;
        ctx!.fill();
      }

      ctx!.beginPath();
      ctx!.moveTo(CX, CY);
      ctx!.lineTo(CX + Math.cos(sweep) * R, CY + Math.sin(sweep) * R);
      const grad = ctx!.createLinearGradient(CX, CY, CX + Math.cos(sweep) * R, CY + Math.sin(sweep) * R);
      grad.addColorStop(0, 'rgba(62,224,179,0.9)');
      grad.addColorStop(1, 'rgba(62,224,179,0)');
      ctx!.strokeStyle = grad;
      ctx!.lineWidth = 2;
      ctx!.stroke();

      packets.forEach((p) => {
        const a = nodePos(nodes[p.from]); const b = nodePos(nodes[p.to]);
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        const grd = ctx!.createRadialGradient(x, y, 0, x, y, 8);
        grd.addColorStop(0, 'rgba(62,224,179,0.9)');
        grd.addColorStop(1, 'rgba(62,224,179,0)');
        ctx!.beginPath(); ctx!.arc(x, y, 8, 0, Math.PI * 2); ctx!.fillStyle = grd; ctx!.fill();
        ctx!.beginPath(); ctx!.arc(x, y, 2.5, 0, Math.PI * 2); ctx!.fillStyle = '#fff'; ctx!.fill();
      });

      nodes.forEach((n, i) => {
        const p = nodePos(n);
        if (i === 0) {
          const grd = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, 28);
          grd.addColorStop(0, 'rgba(62,224,179,0.5)'); grd.addColorStop(1, 'rgba(62,224,179,0)');
          ctx!.beginPath(); ctx!.arc(p.x, p.y, 28, 0, Math.PI * 2); ctx!.fillStyle = grd; ctx!.fill();
          ctx!.beginPath(); ctx!.arc(p.x, p.y, 10, 0, Math.PI * 2); ctx!.fillStyle = '#3ee0b3'; ctx!.fill();
          ctx!.beginPath(); ctx!.arc(p.x, p.y, 10, 0, Math.PI * 2); ctx!.strokeStyle = 'rgba(62,224,179,0.8)'; ctx!.lineWidth = 2; ctx!.stroke();
        } else {
          const glow = n.pulse;
          const dotR = 5 + glow * 4;
          const glowR = 16 + glow * 20;
          const grd = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR);
          grd.addColorStop(0, n.color + 'cc'); grd.addColorStop(1, n.color + '00');
          ctx!.beginPath(); ctx!.arc(p.x, p.y, glowR, 0, Math.PI * 2); ctx!.fillStyle = grd; ctx!.fill();
          ctx!.beginPath(); ctx!.arc(p.x, p.y, dotR, 0, Math.PI * 2);
          ctx!.fillStyle = n.lit ? n.color : '#1e2a3a';
          ctx!.strokeStyle = n.color; ctx!.lineWidth = 1.5; ctx!.fill(); ctx!.stroke();
          if (n.pulse > 0.3) {
            ctx!.beginPath(); ctx!.arc(p.x, p.y, 2.5, 0, Math.PI * 2); ctx!.fillStyle = '#fff'; ctx!.fill();
          }
        }
      });

      ctx!.save();
      ctx!.globalCompositeOperation = 'destination-in';
      ctx!.beginPath(); ctx!.arc(CX, CY, R + 1, 0, Math.PI * 2); ctx!.fill();
      ctx!.restore();
    }

    let raf = 0;
    function tick() {
      sweep = (sweep + SWEEP_SPEED) % (Math.PI * 2);
      nodes.forEach((n, i) => {
        if (i === 0) return;
        const diff = angleDiff(sweep, n.a);
        if (diff > -0.12 && diff < 0.12) {
          n.lit = true; n.pulse = 1;
          if (Math.random() < 0.6) spawnPacket(0, i);
          if (Math.random() < 0.3) spawnPacket(i, 0);
        }
        n.pulse = Math.max(0, n.pulse - 0.012);
        if (n.pulse < 0.05) n.lit = false;
      });
      for (let i = packets.length - 1; i >= 0; i--) {
        packets[i].t += packets[i].speed;
        if (packets[i].t >= 1) packets.splice(i, 1);
      }
      draw(); updateLabels();
      raf = requestAnimationFrame(tick);
    }

    positionLabels();
    window.addEventListener('resize', positionLabels);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', positionLabels);
    };
  }, []);

  return (
    <div className="radar-wrap hero-reveal">
      <div className="radar-stage">
        <div className="radar-canvas-wrap">
          <canvas id="radar" ref={canvasRef} width={700} height={700} aria-hidden="true" />
          <div className="radar-ring" />
          <div className="radar-labels" ref={labelsRef} />
        </div>
      </div>
    </div>
  );
}
