"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CourseHero() {
  return (
    <div className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col justify-center space-y-4 text-center max-w-3xl">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Master <span className="text-primary">Decentralized Finance</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Learn the fundamentals of DeFi, blockchain technology, and smart contracts through interactive lessons
                and practical exercises.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link href="/modules/introduction-to-defi">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  START YOUR JOURNEY
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center w-full max-w-xl">
            <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-purple-900/30 p-6 shadow-lg md:h-[400px]">
              {/* Dynamic background with animated gradients */}
              <div className="absolute inset-0 bg-[linear-gradient(40deg,rgba(79,70,229,0.15)_0%,rgba(0,0,0,0)_40%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(220,38,38,0.1),rgba(0,0,0,0)_30%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.1),rgba(0,0,0,0)_30%)]"></div>

              {/* Animated blockchain nodes background */}
              <div className="absolute inset-0">
                <div
                  className="absolute h-20 w-20 rounded-full bg-primary/10 blur-xl animate-pulse"
                  style={{ top: "20%", left: "10%" }}
                />
                <div
                  className="absolute h-24 w-24 rounded-full bg-blue-500/10 blur-xl animate-pulse"
                  style={{ top: "60%", left: "70%", animationDelay: "1s" }}
                />
                <div
                  className="absolute h-16 w-16 rounded-full bg-purple-500/10 blur-xl animate-pulse"
                  style={{ top: "30%", left: "60%", animationDelay: "2s" }}
                />
                <div
                  className="absolute h-32 w-32 rounded-full bg-primary/5 blur-xl animate-pulse"
                  style={{ top: "70%", left: "20%", animationDelay: "1.5s" }}
                />

                {/* Blockchain connection lines with animation */}
                <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                  <line x1="20%" y1="20%" x2="60%" y2="30%" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1">
                    <animate attributeName="stroke-opacity" values="0.2;0.5;0.2" dur="4s" repeatCount="indefinite" />
                  </line>
                  <line x1="60%" y1="30%" x2="70%" y2="60%" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1">
                    <animate attributeName="stroke-opacity" values="0.2;0.5;0.2" dur="5s" repeatCount="indefinite" />
                  </line>
                  <line x1="70%" y1="60%" x2="20%" y2="70%" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1">
                    <animate attributeName="stroke-opacity" values="0.2;0.5;0.2" dur="6s" repeatCount="indefinite" />
                  </line>
                  <line x1="20%" y1="70%" x2="20%" y2="20%" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1">
                    <animate attributeName="stroke-opacity" values="0.2;0.5;0.2" dur="7s" repeatCount="indefinite" />
                  </line>
                </svg>

                {/* Floating crypto symbols with enhanced effects */}
                <div
                  className="absolute text-primary/20 text-2xl"
                  style={{ top: "15%", left: "15%", animation: "float 8s ease-in-out infinite" }}
                >
                  Ξ
                </div>
                <div
                  className="absolute text-primary/20 text-2xl"
                  style={{ top: "65%", left: "75%", animation: "float 7s ease-in-out infinite 1s" }}
                >
                  ₿
                </div>
                <div
                  className="absolute text-primary/20 text-2xl"
                  style={{ top: "35%", left: "65%", animation: "float 9s ease-in-out infinite 2s" }}
                >
                  Ð
                </div>
                <div
                  className="absolute text-blue-500/20 text-2xl"
                  style={{ top: "25%", left: "45%", animation: "float 10s ease-in-out infinite 3s" }}
                >
                  Ł
                </div>
                <div
                  className="absolute text-red-500/20 text-2xl"
                  style={{ top: "75%", left: "35%", animation: "float 11s ease-in-out infinite 4s" }}
                >
                  ₳
                </div>
              </div>

              {/* Subtle grid overlay with animation */}
              <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.3))]">
                <div
                  className="absolute inset-0 bg-black/10 animate-pulse opacity-30"
                  style={{ animationDuration: "10s" }}
                ></div>
              </div>

              {/* Binary code rain effect */}
              <div className="absolute inset-0 overflow-hidden opacity-10">
                <div className="binary-rain"></div>
              </div>

              <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
                {/* Glowing backdrop for progress wheel */}
                <div
                  className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-70"
                  style={{ width: "100%", height: "100%", top: "0", left: "0" }}
                ></div>

                {/* Enhanced particle effects with multiple types */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Standard particles */}
                  {[...Array(15)].map((_, i) => (
                    <div
                      key={`p1-${i}`}
                      className="absolute h-1 w-1 rounded-full bg-primary/30"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `particle ${3 + Math.random() * 4}s linear infinite ${Math.random() * 5}s`,
                      }}
                    />
                  ))}

                  {/* Larger glowing particles */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={`p2-${i}`}
                      className="absolute h-2 w-2 rounded-full bg-blue-400/20 blur-sm"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `particleGlow ${5 + Math.random() * 5}s ease-in-out infinite ${Math.random() * 5}s`,
                      }}
                    />
                  ))}

                  {/* Horizontal moving particles */}
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={`p3-${i}`}
                      className="absolute h-[1px] w-[3px] bg-primary/20"
                      style={{
                        top: `${10 + Math.random() * 80}%`,
                        left: `-5px`,
                        animation: `particleHorizontal ${10 + Math.random() * 15}s linear infinite ${Math.random() * 5}s`,
                      }}
                    />
                  ))}

                  {/* Pulsing dot clusters */}
                  <div className="absolute flex gap-[2px]" style={{ top: "15%", left: "25%" }}>
                    <div
                      className="h-1 w-1 rounded-full bg-primary/40 animate-ping"
                      style={{ animationDuration: "2s" }}
                    ></div>
                    <div
                      className="h-1 w-1 rounded-full bg-primary/40 animate-ping"
                      style={{ animationDuration: "2.5s" }}
                    ></div>
                    <div
                      className="h-1 w-1 rounded-full bg-primary/40 animate-ping"
                      style={{ animationDuration: "3s" }}
                    ></div>
                  </div>

                  <div className="absolute flex gap-[2px]" style={{ top: "75%", left: "65%" }}>
                    <div
                      className="h-1 w-1 rounded-full bg-blue-400/40 animate-ping"
                      style={{ animationDuration: "2.2s" }}
                    ></div>
                    <div
                      className="h-1 w-1 rounded-full bg-blue-400/40 animate-ping"
                      style={{ animationDuration: "2.7s" }}
                    ></div>
                    <div
                      className="h-1 w-1 rounded-full bg-blue-400/40 animate-ping"
                      style={{ animationDuration: "3.2s" }}
                    ></div>
                  </div>

                  {/* Blockchain data blocks */}
                  <div
                    className="absolute h-6 w-10 border border-primary/10 rounded opacity-20"
                    style={{ top: "40%", left: "15%", animation: "blockFloat 20s linear infinite" }}
                  >
                    <div className="h-1 w-6 bg-primary/30 mx-auto mt-1"></div>
                    <div className="h-1 w-4 bg-primary/30 mx-auto mt-1"></div>
                  </div>

                  <div
                    className="absolute h-6 w-10 border border-blue-400/10 rounded opacity-20"
                    style={{ top: "60%", left: "80%", animation: "blockFloat 25s linear infinite 5s" }}
                  >
                    <div className="h-1 w-6 bg-blue-400/30 mx-auto mt-1"></div>
                    <div className="h-1 w-4 bg-blue-400/30 mx-auto mt-1"></div>
                  </div>
                </div>

                {/* Enhanced progress wheel container with 3D effect */}
                <div
                  className="relative mx-auto mb-6 h-44 w-44 transform transition-all duration-500 hover:scale-105"
                  style={{ perspective: "1000px" }}
                >
                  {/* 3D rotation container */}
                  <div
                    className="relative h-full w-full transform-gpu transition-transform duration-1000 hover:rotate-y-12 hover:rotate-x-12"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Outer rotating circle with glow */}
                    <div className="absolute inset-0 animate-[spin_8s_linear_infinite]">
                      <div
                        className="absolute -inset-3 rounded-full bg-primary/15 blur-xl animate-pulse"
                        style={{ animationDuration: "4s" }}
                      ></div>
                      <div className="absolute -inset-2 rounded-full bg-gradient-radial from-primary/20 to-transparent blur-md"></div>
                      <svg viewBox="0 0 100 100" className="h-full w-full drop-shadow-lg">
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="url(#gradientOuter)"
                          strokeWidth="8"
                          strokeDasharray="70 30"
                          className="animate-pulse"
                          style={{ filter: "drop-shadow(0 0 4px rgba(124, 58, 237, 0.5))" }}
                        />
                        <defs>
                          <linearGradient id="gradientOuter" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgb(124, 58, 237)" stopOpacity="0.9" />
                            <stop offset="50%" stopColor="rgb(167, 139, 250)" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="rgb(220, 38, 38)" stopOpacity="0.9" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    {/* Middle rotating circle with enhanced effects */}
                    <div className="absolute inset-2 animate-[spin_6s_linear_infinite_reverse]">
                      <svg viewBox="0 0 100 100" className="h-full w-full filter drop-shadow">
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="url(#gradientMiddle)"
                          strokeWidth="4"
                          strokeDasharray="60 40"
                        />
                        {/* Small decorative dots along the circle */}
                        {[...Array(8)].map((_, i) => (
                          <circle
                            key={i}
                            cx={50 + 40 * Math.cos((i * Math.PI) / 4)}
                            cy={50 + 40 * Math.sin((i * Math.PI) / 4)}
                            r="2"
                            fill="rgb(139, 92, 246)"
                            className="animate-ping"
                            style={{ animationDuration: "3s", animationDelay: `${i * 0.5}s` }}
                          />
                        ))}
                        <defs>
                          <linearGradient id="gradientMiddle" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="rgb(124, 58, 237)" />
                            <stop offset="100%" stopColor="rgb(59, 130, 246)" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    {/* Inner progress circle with enhanced effects */}
                    <div className="absolute inset-4">
                      <svg viewBox="0 0 100 100" className="h-full w-full filter drop-shadow-xl">
                        {/* Background circle with subtle texture */}
                        <circle cx="50" cy="50" r="35" fill="rgba(0,0,0,0.7)" />
                        <circle cx="50" cy="50" r="35" fill="url(#noisePattern)" fillOpacity="0.1" />

                        {/* Progress indicator with glow effect */}
                        <circle
                          cx="50"
                          cy="50"
                          r="35"
                          fill="none"
                          stroke="url(#gradientProgress)"
                          strokeWidth="8"
                          strokeDasharray={`${50 * 2.2} ${100 - 50 * 2.2}`}
                          strokeDashoffset="25"
                          strokeLinecap="round"
                          className="drop-shadow-[0_0_10px_rgba(139,92,246,0.7)]"
                        />

                        {/* Progress end cap with glow */}
                        <circle
                          cx={50 + 35 * Math.cos((50 * 2.2 * Math.PI) / 100 - Math.PI / 2)}
                          cy={50 + 35 * Math.sin((50 * 2.2 * Math.PI) / 100 - Math.PI / 2)}
                          r="4"
                          fill="rgb(139, 92, 246)"
                          className="animate-pulse"
                        />

                        <defs>
                          <linearGradient id="gradientProgress" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgb(124, 58, 237)" />
                            <stop offset="100%" stopColor="rgb(139, 92, 246)" />
                          </linearGradient>
                          <pattern id="noisePattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="100" height="100" fill="#000" />
                            <rect x="0" y="0" width="100" height="100" fill="url(#noise)" />
                          </pattern>
                          <filter id="noise">
                            <feTurbulence
                              type="fractalNoise"
                              baseFrequency="0.65"
                              numOctaves="3"
                              stitchTiles="stitch"
                            />
                            <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.5 0" />
                          </filter>
                        </defs>
                      </svg>

                      {/* Enhanced percentage display with animation */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex flex-col items-center">
                          <div className="relative">
                            <span className="text-4xl font-bold text-primary drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]">
                              50%
                            </span>
                            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-primary animate-ping"></span>
                          </div>
                          <div className="mt-1 flex items-center gap-1 text-primary/80">
                            <span className="text-xs uppercase tracking-wider">Progress</span>
                            <svg
                              className="h-4 w-4 animate-bounce"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7 7 7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced text with animation and glow */}
                <div className="space-y-3 transform transition-all duration-500">
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-300">
                    You're 50% to DeFi Mastery!
                  </h2>
                  <p className="max-w-[300px] text-muted-foreground leading-relaxed">
                    Continue your journey to become a DeFi expert with our interactive lessons and unlock new
                    opportunities.
                  </p>

                  <div className="w-full max-w-[300px] space-y-3 pt-2">
                    {/* Progress visualization with gamification elements */}
                    <div className="relative h-6 w-full overflow-hidden rounded-lg bg-gradient-to-r from-black/40 to-black/60 p-[2px] shadow-inner">
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJ3aGl0ZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMSIvPjwvZz48L3N2Z3Y=')]"></div>
                      </div>

                      {/* Progress track with milestone markers */}
                      <div className="absolute inset-y-0 left-0 flex w-full items-center px-1">
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className="relative flex-1">
                            {i < 4 ? (
                              <div className="absolute top-1/2 -mt-1 h-2 w-2 -translate-y-1/2 rounded-full bg-white/80 shadow-[0_0_5px_rgba(255,255,255,0.5)]"></div>
                            ) : (
                              <div className="absolute top-1/2 -mt-1 h-2 w-2 -translate-y-1/2 rounded-full bg-white/20"></div>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Actual progress bar with dynamic effects */}
                      <div
                        className="relative h-full w-1/2 origin-left rounded bg-gradient-to-r from-primary via-purple-500 to-primary/90 transition-all duration-1000 ease-out"
                        style={{
                          boxShadow: "0 0 15px rgba(139, 92, 246, 0.5), 0 0 5px rgba(139, 92, 246, 0.3) inset",
                          animation: "pulse-glow 2s infinite alternate",
                        }}
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 overflow-hidden">
                          <div className="h-full w-20 animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                        </div>

                        {/* Particle effects inside progress bar */}
                        <div className="absolute inset-0 overflow-hidden">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute h-1 w-1 rounded-full bg-white/80"
                              style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animation: `progress-particle ${2 + Math.random() * 3}s ease-out infinite ${Math.random() * 2}s`,
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>

                      {/* Progress indicator with pulsing effect */}
                      <div className="absolute top-1/2 left-1/2 flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-primary shadow-[0_0_10px_rgba(139,92,246,0.7)]">
                        <div
                          className="absolute h-full w-full animate-ping rounded-full bg-primary/40 opacity-75"
                          style={{ animationDuration: "1.5s" }}
                        ></div>
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                    </div>

                    {/* Enhanced text indicators with motivational elements */}
                    <div className="flex flex-col space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <div className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/20">
                            <svg className="h-2.5 w-2.5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="text-xs font-medium text-primary/90">4/8 Modules Mastered</span>
                        </div>
                        <div className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                          50% Complete
                        </div>
                      </div>

                      {/* Motivational message with social proof */}
                      <p className="text-xs text-muted-foreground">
                        <span className="font-medium text-primary/80">Impressive progress!</span> You're learning faster
                        than 65% of students.
                      </p>

                      {/* Next milestone indicator */}
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <svg
                          className="h-3.5 w-3.5 text-primary/70"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                        <span>
                          Next milestone: <span className="font-medium text-primary/80">Liquidity Pool Expert</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes particle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
        }
        @keyframes particleGlow {
          0% { transform: translateY(0) translateX(0); opacity: 0; filter: blur(2px); }
          25% { opacity: 1; filter: blur(1px); }
          75% { opacity: 1; filter: blur(3px); }
          100% { transform: translateY(-150px) translateX(-20px); opacity: 0; filter: blur(2px); }
        }
        @keyframes particleHorizontal {
          0% { transform: translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(calc(100vw + 5px)); opacity: 0; }
        }
        @keyframes blockFloat {
          0% { transform: translateX(-50px) translateY(0); opacity: 0; }
          10% { opacity: 0.2; }
          90% { opacity: 0.2; }
          100% { transform: translateX(calc(100% + 50px)) translateY(-20px); opacity: 0; }
        }
        .binary-rain {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          color: rgba(139, 92, 246, 0.15);
          font-family: monospace;
          font-size: 14px;
          overflow: hidden;
        }
        .binary-rain::before {
          content: "10101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010";
          position: absolute;
          top: -100px;
          left: 0;
          width: 100%;
          height: 100%;
          animation: binary-rain-fall 20s linear infinite;
          letter-spacing: 5px;
          line-height: 1.5;
          transform: rotate(90deg);
        }
        @keyframes binary-rain-fall {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes pulse-glow {
          0% { filter: brightness(1); }
          100% { filter: brightness(1.2); }
        }
        @keyframes progress-particle {
          0% { transform: translate(0, 0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translate(-20px, -10px); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
