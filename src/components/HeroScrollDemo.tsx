"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center gap-4">
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-mono font-semibold tracking-wide mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for AI/ML Internships &amp; Research
            </div>

            {/* Role Badge */}
            <p className="font-mono text-emerald-400 text-base md:text-lg tracking-widest uppercase">
              AI &amp; Machine Learning Engineer
            </p>

            {/* Main Hero Title */}
            <h1 className="text-5xl md:text-[5.5rem] font-extrabold leading-[1.05] tracking-tight text-white">
              Supriya{" "}
              <span
                className="inline-block"
                style={{
                  background:
                    "linear-gradient(135deg, #10B981 0%, #6366F1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Mohapatra
              </span>
            </h1>

            {/* Sub-heading */}
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed mt-2">
              B.Tech CSE (AI &amp; ML) at{" "}
              <span className="text-indigo-400 font-semibold">
                GIET University Gunupur
              </span>{" "}
              · Bridging deep neural research with production-grade edge
              systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 text-black font-semibold text-sm hover:bg-emerald-400 transition-all hover:-translate-y-0.5 shadow-lg shadow-emerald-500/30"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                Explore Projects
              </a>
              <a
                href="#terminal"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-emerald-500/40 bg-emerald-500/8 text-emerald-400 font-semibold text-sm hover:bg-emerald-500/15 hover:border-emerald-500 hover:-translate-y-0.5 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Launch AI Terminal
              </a>
            </div>

            <p className="font-mono text-zinc-600 text-xs mt-6 tracking-widest uppercase">
              ↓ Scroll to explore the portfolio
            </p>
          </div>
        }
      >
        {/* Portfolio Dashboard Preview inside the 3D scroll card */}
        <div className="relative w-full h-full bg-[#080B10] rounded-xl overflow-hidden">
          {/* Top bar chrome */}
          <div className="flex items-center gap-2 px-4 py-2 bg-[#0D121C] border-b border-white/5">
            <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
            <span className="ml-4 font-mono text-xs text-zinc-500 tracking-wider">
              supriya@neural-lab · NeuralVision AI · LIVE INFERENCE
            </span>
            <span className="ml-auto font-mono text-xs text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block"></span>
              120 FPS · 14.2ms
            </span>
          </div>

          {/* Dashboard preview image */}
          <div className="relative w-full" style={{ height: "calc(100% - 36px)" }}>
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85&fit=crop"
              alt="NeuralVision AI Dashboard — Real-time Edge Computer Vision & Semantic Segmentation Analytics"
              fill
              className="object-cover object-top"
              draggable={false}
              priority
            />

            {/* Emerald overlay grid */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(16,185,129,0.06) 0%, rgba(8,11,16,0.7) 100%)",
              }}
            />

            {/* Floating metric cards overlay */}
            <div className="absolute top-4 left-4 right-4 flex gap-3 flex-wrap">
              {[
                { label: "mAP@0.50", val: "98.6%", color: "#10B981" },
                { label: "Inference Latency", val: "14.2ms", color: "#6366F1" },
                { label: "Segmentation IoU", val: "94.8%", color: "#06B6D4" },
                { label: "Throughput", val: "120 FPS", color: "#F59E0B" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="px-3 py-2 rounded-lg backdrop-blur-md border"
                  style={{
                    background: "rgba(8,11,16,0.75)",
                    borderColor: `${m.color}33`,
                  }}
                >
                  <div
                    className="font-mono text-[10px] uppercase tracking-wider mb-0.5"
                    style={{ color: m.color }}
                  >
                    {m.label}
                  </div>
                  <div className="font-bold text-white text-sm">{m.val}</div>
                </div>
              ))}
            </div>

            {/* Bottom status bar */}
            <div
              className="absolute bottom-0 left-0 right-0 px-4 py-3 flex items-center justify-between"
              style={{ background: "rgba(8,11,16,0.9)" }}
            >
              <span className="font-mono text-xs text-zinc-400">
                NeuralVision AI · CSPDarknet53 ➔ PANet FPN ➔ Decoupled Head · TensorRT INT8
              </span>
              <span className="font-mono text-xs text-emerald-400">
                ● STREAM ACTIVE
              </span>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
