// 'use client'


// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import React from "react";
// import { useEffect, useRef, useState } from "react";
// import Image from 'next/image';
// import { Check, Link, Hash, Calendar, Type, Settings, X, GripVertical, ExternalLink, Download } from "lucide-react";
// import { File, Video } from "lucide-react";
// import Lottie from "lottie-react";


// const USERS = [
//   {
//     name: "Joseph Cole",
//     email: "j.cole@example.com",
//     code: "4D5Qd1FgbtABXe",
//   },
//   {
//     name: "Bjorn Daniel",
//     email: "b.daniel@example.com",
//     code: "AzWlPjHlytDN3",
//   },
//   {
//     name: "Elodie Carroll",
//     email: "e.carroll@example.com",
//     code: "71m42Fhcu4B0gh",
//   },
//   {
//     name: "Amara Okoro",
//     email: "a.okoro@example.com",
//     code: "2tZo3dVF1xfEdQ",
//   },
// ];

// export function SocialSignOnComponentZ() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useGSAP(() => {
//     // 1. DATA FLOW PULSES
//     // Set initial states for the traveling cyan dashes
//     gsap.set([".pulse-path-left", ".pulse-path-right"], {
//       strokeDasharray: "0.15 0.85", // 15% line, 85% empty space
//       strokeDashoffset: 1
//     });

//     // Animate the left path pulse continuously
//     gsap.to(".pulse-path-left", {
//       strokeDashoffset: 0,
//       duration: 4.5,
//       ease: "none",
//       repeat: -1
//     });

//     // Animate the right path pulse continuously (slightly different duration for organic feel)
//     gsap.to(".pulse-path-right", {
//       strokeDashoffset: 0,
//       duration: 5.2,
//       ease: "none",
//       repeat: -1,
//       delay: 0.5
//     });

//     // 2. CENTRAL CLOUD GLOW
//     // Rhythmically fade the active blue cloud layer in and out
//     gsap.to(".active-cloud", {
//       opacity: 1,
//       duration: 0.8,
//       yoyo: true,
//       repeat: -1,
//       repeatDelay: 1.5,
//       ease: "power2.inOut"
//     });

//     // 3. SOCIAL NODE PINGS
//     // Randomly scale the social icons slightly to simulate network transmission
//     gsap.to(".social-icon", {
//       scale: 1.1,
//       duration: 0.3,
//       yoyo: true,
//       repeat: -1,
//       stagger: {
//         amount: 6,
//         from: "random"
//       },
//       ease: "power1.inOut"
//     });

//   }, { scope: containerRef });

//   // Extracted SVG Path Data (Used across both sides)
//   const networkPathD = "M 104.715 48.667 L 61.353 4.402 A 8 8 0 0 0 55.638 2 H -100 a 8 8 0 0 0 -8 8 V 206 a 8 8 0 0 0 8 8 H 99 A 8 8 0 0 0 107 206 V 54.266 C 107 52.172 106.18 50.163 104.715 48.667 Z";
//   const networkStrokePathD = "M 60.996 4.752 L 104.358 49.017 A 7.5 7.5 0 0 1 106.5 54.265 V 206 A 7.5 7.5 0 0 1 99 213.5 H -100 a 7.5 7.5 0 0 1 -7.5 -7.5 V 10 a 7.5 7.5 0 0 1 7.5 -7.5 H 55.638 A 7.5 7.5 0 0 1 60.996 4.752 Z";

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black p-8 font-sans">
//       <div ref={containerRef} className="group isolate flex flex-col rounded-2xl bg-[#212126] shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.025] overflow-hidden w-[476px] h-[260px]">
//         <div className="relative z-10 flex-none px-6 order-last pb-6">
//           <h3 className="text-sm font-medium text-white">Social Sign-On</h3>
//           <p className="mt-2 text-pretty text-[14px] leading-5 text-gray-400">
//             Add high-conversion Social Sign-on (SSO) to your application in minutes. 20+ options and growing.
//           </p>
//         </div>
        
//         <div className="pointer-events-none relative flex-auto select-none min-h-[10.25rem]" aria-hidden="true">
//           <div className="absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,white_60%,transparent)]">
            
//             {/* Faint Background Grid/Lines */}
//             <div className="relative mx-auto aspect-[98/192] w-[calc(98/16*1rem)]">
//               <svg viewBox="0 0 98 192" fill="none" aria-hidden="true" className="absolute inset-0 h-full w-full">
//                 <path stroke="#fff" strokeOpacity=".06" d="M49 192V96.266a8 8 0 0 0-2.285-5.599L3.285 46.333A8 8 0 0 1 1 40.734V-28M49 93l45.715-46.667A8 8 0 0 0 97 40.734V-23"></path>
//               </svg>
//             </div>

//             {/* Left Side Icons Group */}
//             <div className="absolute right-1/2 top-6 mr-[calc(76/16*1rem)]">
//               <div className="relative h-[15.5rem] w-[15.5rem]">
//                 <svg viewBox="0 0 109 216" fill="none" className="absolute right-[1.125rem] top-[1.125rem] h-[13.5rem] w-[6.8125rem] overflow-visible" aria-hidden="true">
//                   <g filter="url(#social-background-filter)">
//                     <path fill="#fff" fillOpacity=".02" d={networkPathD} shapeRendering="crispEdges"></path>
//                     <path stroke="#fff" strokeOpacity=".05" d={networkStrokePathD} shapeRendering="crispEdges"></path>
//                   </g>
//                   {/* INJECTED: Animated Pulse Path */}
//                   <path 
//                     className="pulse-path-left" 
//                     stroke="#5DE3FF" 
//                     strokeOpacity="0.8" 
//                     strokeWidth="1.5" 
//                     strokeLinecap="round" 
//                     d={networkStrokePathD} 
//                     pathLength={1} 
//                     style={{ filter: "drop-shadow(0px 0px 4px #5DE3FF)" }}
//                   />
//                 </svg>
//                 <div style={{ opacity: 0.7 }}>
//                   {/* Discord */}
//                   <div className="social-icon absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(5rem, 0rem)' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037c-1.687.29-3.33.8-4.885 1.515a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.083.083 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.077.077 0 0 0 .084-.028c.462-.63.874-1.295 1.227-1.994a.076.076 0 0 0-.042-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.291.075.075 0 0 1 .077-.011c3.928 1.793 8.18 1.793 12.062 0a.073.073 0 0 1 .078.01c.12.098.246.198.373.292a.076.076 0 0 1 .03.065.078.078 0 0 1-.036.063c-.599.349-1.225.647-1.873.89a.076.076 0 0 0-.05.076c.001.012.004.022.009.032.36.698.772 1.362 1.225 1.993a.077.077 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.029.079.079 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03ZM8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z"></path></svg>
//                   </div>
//                   {/* Google */}
//                   <div className="social-icon absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(10rem, 0rem)' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72 0-4.827 3.773-8.72 8.6-8.72 2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48Z"></path></svg>
//                   </div>
//                   {/* Github */}
//                   <div className="social-icon absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(calc(13rem), 3rem)' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12Z"></path></svg>
//                   </div>
//                   {/* Notion/Other */}
//                   <div className="social-icon absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(calc(13rem), calc(10rem))' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true"><path d="M4.458 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447Zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.328-.747.934Zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.821 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933l3.222-.188ZM1.935 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.25 2.986c.7.513.933.653.933 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632Z"></path></svg>
//                   </div>
//                   {/* Apple */}
//                   <div className="social-icon absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(-1.5rem, 0rem)' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.83 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.04-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.43-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.091-4.61 1.091ZM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"></path></svg>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Side Icons Group (Mirrored) */}
//             <div className="absolute left-1/2 top-6 ml-[calc(76/16*1rem)] -scale-x-100">
//               <div className="relative h-[15.5rem] w-[15.5rem]">
//                 <svg viewBox="0 0 109 216" fill="none" className="absolute right-[1.125rem] top-[1.125rem] h-[13.5rem] w-[6.8125rem] overflow-visible" aria-hidden="true">
//                   <g filter="url(#social-background-filter)">
//                     <path fill="#fff" fillOpacity=".02" d={networkPathD} shapeRendering="crispEdges"></path>
//                     <path stroke="#fff" strokeOpacity=".05" d={networkStrokePathD} shapeRendering="crispEdges"></path>
//                   </g>
//                   {/* INJECTED: Animated Pulse Path */}
//                   <path 
//                     className="pulse-path-right" 
//                     stroke="#5DE3FF" 
//                     strokeOpacity="0.8" 
//                     strokeWidth="1.5" 
//                     strokeLinecap="round" 
//                     d={networkStrokePathD} 
//                     pathLength={1} 
//                     style={{ filter: "drop-shadow(0px 0px 4px #5DE3FF)" }}
//                   />
//                 </svg>
//                 <div style={{ opacity: 0.7 }}>
//                   {/* LinkedIn */}
//                   <div className="social-icon absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(calc(10rem + 3rem), calc(10rem + 3rem))' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white -scale-x-100" aria-hidden="true"><path d="M19.04 19.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531-1.544 0-1.78 1.204-1.78 2.449v4.722H9.793V9.5h2.845v1.3h.038c.397-.75 1.364-1.54 2.808-1.54 3.001 0 3.556 1.974 3.556 4.545v5.238ZM6.447 8.194c-.954 0-1.72-.772-1.72-1.72a1.72 1.72 0 1 1 1.72 1.72Zm1.484 10.85h-2.97V9.5h2.97v9.543ZM20.521 2H3.476C2.66 2 2 2.645 2 3.44v17.12c0 .796.66 1.44 1.476 1.44h17.042c.815 0 1.482-.644 1.482-1.44V3.44C22 2.646 21.333 2 20.518 2h.003Z"></path></svg>
//                   </div>
//                   {/* Microsoft */}
//                   <div className="social-icon absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(calc(10rem + 3rem), calc(5rem + 5rem))' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white -scale-x-100" aria-hidden="true"><path d="M2 2v9.507h9.507V2H2Zm10.495 0v9.507H22V2h-9.505ZM2 12.495V22h9.507v-9.505H2Zm10.495 0V22H22v-9.505h-9.505Z"></path></svg>
//                   </div>
//                   {/* Atlassian */}
//                   <div className="social-icon absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(calc(10rem + 3rem), 3rem)' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white -scale-x-100" aria-hidden="true"><path d="M7.526 11.16a.626.626 0 0 0-1.063.116L1.068 22.06a.645.645 0 0 0 .578.933h7.507a.621.621 0 0 0 .578-.358c1.62-3.346.638-8.436-2.206-11.476l.001.002Zm3.955-9.806a14.222 14.222 0 0 0-.83 14.04l3.62 7.242a.644.644 0 0 0 .576.356h7.507a.644.644 0 0 0 .578-.932L12.577 1.348a.61.61 0 0 0-1.096.006Z"></path></svg>
//                   </div>
//                   {/* Dropbox */}
//                   <div className="social-icon absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(10rem, 0rem)' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white -scale-x-100" aria-hidden="true"><path d="M6 1.807 0 5.629l6 3.822 6.001-3.822L6 1.807Zm12 0-6 3.822 6 3.822 6-3.822-6-3.822ZM0 13.274l6 3.822 6.001-3.822L6 9.451l-6 3.823Zm18-3.823-6 3.823 6 3.822 6-3.822-6-3.823Zm-12 8.92 6.001 3.822 6-3.822-6-3.822L6 18.371Z"></path></svg>
//                   </div>
//                   {/* X / Twitter */}
//                   <div className="social-icon absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(5rem, 0rem)' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white -scale-x-100" aria-hidden="true"><path d="M17.521 3.325h2.944l-6.432 7.352L21.6 20.679h-5.924l-4.64-6.067-5.31 6.067H2.78l6.88-7.864-7.26-9.49h6.076l4.194 5.546 4.851-5.546Zm-1.033 15.593h1.632L7.59 4.995H5.838l10.65 13.923Z"></path></svg>
//                   </div>
//                   {/* Slack */}
//                   <div className="social-icon absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(-1.5rem, 0rem)' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white -scale-x-100" aria-hidden="true"><path d="M18.164 7.93V5.084a2.198 2.198 0 0 0 1.267-1.978v-.067A2.2 2.2 0 0 0 17.238.845h-.067a2.2 2.2 0 0 0-2.193 2.193v.067a2.195 2.195 0 0 0 1.252 1.973l.013.006v2.852a6.22 6.22 0 0 0-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 1 0 4.3 4.656l-.012.006 7.697 5.991a6.175 6.175 0 0 0-1.038 3.446 6.22 6.22 0 0 0 1.147 3.607l-.013-.02-2.342 2.343a1.967 1.967 0 0 0-.58-.095h-.002a2.033 2.033 0 1 0 2.033 2.033 1.982 1.982 0 0 0-.1-.595l.005.014 2.317-2.317a6.246 6.246 0 1 0 4.782-11.134l-.036-.005h.006Zm-.964 9.378a3.206 3.206 0 1 1 3.215-3.207v.002a3.207 3.207 0 0 1-3.207 3.207l-.008-.002Z"></path></svg>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Central Cloud Box */}
//             <div className="absolute left-1/2 top-0 ml-[calc(-98/2/16*1rem)] aspect-[98/192] w-[calc(98/16*1rem)] pt-[calc(60/16*1rem)]">
//               <div className="relative mx-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-sm bg-gray-800 bg-gradient-to-br from-white/5 to-[64%]" style={{ boxShadow: '0 1px 1px rgba(255, 255, 255, 0.05) inset, 0 2px 13px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.2), 0 0 0 3px rgba(19, 19, 22, 0.5)' }}>
//                 <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(111.72% 100% at 50% 0%, rgba(118, 237, 255, 0.2), rgba(118, 237, 255, 0) 53.91%)', opacity: 0 }}></div>
//                 <div className="relative">
//                   <svg viewBox="0 0 34 23" fill="none" aria-hidden="true" className="w-[calc(34/16*1rem)] overflow-visible">
//                     <g filter="url(#social-cloud-filter0)">
//                       <path fill="#212126" d="M26.008 22.984a.008.008 0 0 0-.008.008.008.008 0 0 1-.008.008H8.008A.008.008 0 0 1 8 22.992a.008.008 0 0 0-.009-.008 7.5 7.5 0 1 1 0-14.968A.008.008 0 0 0 8 8.008C8 8.004 8.003 8 8.008 8h.02a.03.03 0 0 0 .03-.026 9.001 9.001 0 0 1 17.884 0 .029.029 0 0 0 .029.026h.02c.005 0 .009.004.009.008 0 .005.004.008.008.008a7.5 7.5 0 1 1 0 14.968Z"></path>
//                     </g>
//                   </svg>
//                   {/* Active/Animated Cloud */}
//                   <svg viewBox="0 0 34 23" fill="none" aria-hidden="true" className="active-cloud absolute inset-0 w-[calc(34/16*1rem)] overflow-visible" style={{ opacity: 0 }}>
//                     <g filter="url(#social-cloud-active-filter)">
//                       <path fill="#5DE3FF" d="M26.008 22.984a.008.008 0 0 0-.008.008.008.008 0 0 1-.008.008H8.008A.008.008 0 0 1 8 22.992a.008.008 0 0 0-.009-.008 7.5 7.5 0 1 1 0-14.968A.008.008 0 0 0 8 8.008C8 8.004 8.003 8 8.008 8h.02a.03.03 0 0 0 .03-.026 9.001 9.001 0 0 1 17.884 0 .029.029 0 0 0 .029.026h.02c.005 0 .009.004.009.008 0 .005.004.008.008.008a7.5 7.5 0 1 1 0 14.968Z"></path>
//                     </g>
//                   </svg>
//                 </div>
//                 <div className="absolute -inset-4 bg-gradient-to-br from-white/0 from-[35%] via-white/25 to-white/0 to-[65%] mix-blend-overlay" style={{ transform: 'translate(-4rem, -4rem)' }}></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Filters and Gradients Definitions */}
//         <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
//           <defs>
//             <filter id="social-background-filter" width="219" height="216" x="-110" y="0" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
//               <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//               <feOffset></feOffset>
//               <feGaussianBlur stdDeviation="1"></feGaussianBlur>
//               <feComposite in2="hardAlpha" operator="out"></feComposite>
//               <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
//               <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1860_5760"></feBlend>
//               <feBlend in="SourceGraphic" in2="effect1_dropShadow_1860_5760" result="shape"></feBlend>
//             </filter>
//             <filter id="social-cloud-filter0" width="34" height="25" x="0" y="0" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
//               <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//               <feOffset dy="1"></feOffset>
//               <feComposite in2="hardAlpha" operator="out"></feComposite>
//               <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.06 0"></feColorMatrix>
//               <feBlend in2="BackgroundImageFix" mode="color-dodge" result="effect1_dropShadow_228_61"></feBlend>
//               <feBlend in="SourceGraphic" in2="effect1_dropShadow_228_61" result="shape"></feBlend>
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//               <feOffset dy="2"></feOffset>
//               <feGaussianBlur stdDeviation="2.5"></feGaussianBlur>
//               <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
//               <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
//               <feBlend in2="shape" result="effect2_innerShadow_228_61"></feBlend>
//             </filter>
//             <filter id="social-cloud-active-filter" width="52" height="41" x="-9" y="-9" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
//               <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//               <feMorphology in="SourceAlpha" operator="dilate" radius="1" result="effect1_dropShadow_228_63"></feMorphology>
//               <feOffset></feOffset>
//               <feGaussianBlur stdDeviation="4"></feGaussianBlur>
//               <feComposite in2="hardAlpha" operator="out"></feComposite>
//               <feColorMatrix values="0 0 0 0 0.419608 0 0 0 0 0.905882 0 0 0 0 1 0 0 0 0.4 0"></feColorMatrix>
//               <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_228_63"></feBlend>
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//               <feOffset></feOffset>
//               <feGaussianBlur stdDeviation="1"></feGaussianBlur>
//               <feComposite in2="hardAlpha" operator="out"></feComposite>
//               <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"></feColorMatrix>
//               <feBlend in2="effect1_dropShadow_228_63" result="effect2_dropShadow_228_63"></feBlend>
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//               <feOffset></feOffset>
//               <feGaussianBlur stdDeviation=".5"></feGaussianBlur>
//               <feComposite in2="hardAlpha" operator="out"></feComposite>
//               <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0"></feColorMatrix>
//               <feBlend in2="effect2_dropShadow_228_63" result="effect3_dropShadow_228_63"></feBlend>
//               <feBlend in="SourceGraphic" in2="effect3_dropShadow_228_63" result="shape"></feBlend>
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//               <feOffset dy="1"></feOffset>
//               <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
//               <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"></feColorMatrix>
//               <feBlend in2="shape" result="effect4_innerShadow_228_63"></feBlend>
//             </filter>
//           </defs>
//         </svg>
//       </div>
//     </div>
//   );
// }


// export function SocialSignOnComponentAni() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const cloudActiveRef = useRef<SVGGElement>(null);
//   const cloudGlowRef = useRef<HTMLDivElement>(null);
//   const leftIconsRef = useRef<HTMLDivElement>(null);
//   const rightIconsRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // 1. Central Cloud Pulsing
//       gsap.to([cloudActiveRef.current, cloudGlowRef.current], {
//         opacity: 1,
//         duration: 2,
//         repeat: -1,
//         yoyo: true,
//         ease: "power1.inOut",
//       });

//       // 2. Define the path coordinates for animation
//       // We map the static positions into a sequence for the flow
//       const leftPath = [
//         { x: "13rem", y: "10rem" },   // Notion
//         { x: "13rem", y: "3rem" },    // Github
//         { x: "10rem", y: "0rem" },    // Google
//         { x: "5rem", y: "0rem" },     // Discord
//         { x: "-1.5rem", y: "0rem" },  // Apple (Last stop before center)
//       ];

//       const rightPath = [
//         { x: "13rem", y: "13rem" },   // LinkedIn
//         { x: "13rem", y: "10rem" },   // Microsoft
//         { x: "13rem", y: "3rem" },    // Atlassian
//         { x: "10rem", y: "0rem" },    // Dropbox
//         { x: "5rem", y: "0rem" },     // X
//         { x: "-1.5rem", y: "0rem" },  // Slack (Last stop before center)
//       ];

//       const animateIcons = (container: HTMLDivElement | null, path: any[]) => {
//         if (!container) return;
//         const icons = Array.from(container.children) as HTMLElement[];
        
//         icons.forEach((icon, index) => {
//           const tl = gsap.timeline({
//             repeat: -1,
//             delay: index * 1.2, // Staggered start
//           });

//           // Reset to start of path (invisible)
//           tl.set(icon, { ...path[0], opacity: 0, scale: 0.8 });

//           // Appear and move through path nodes
//           path.forEach((point, pIndex) => {
//             tl.to(icon, {
//               x: point.x,
//               y: point.y,
//               opacity: pIndex === 0 ? 0 : pIndex === path.length - 1 ? 0 : 0.7,
//               scale: pIndex === 0 ? 0.8 : pIndex === path.length - 1 ? 0.5 : 1,
//               duration: 1.5,
//               ease: "none"
//             });
//           });
//         });
//       };

//       animateIcons(leftIconsRef.current, leftPath);
//       animateIcons(rightIconsRef.current, rightPath);

//       // Subtle pulse for the container lines
//       gsap.to('path[stroke-opacity=".06"]', {
//         strokeOpacity: 0.15,
//         duration: 2,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut"
//       });

//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={containerRef} className="flex items-center justify-center min-h-screen bg-black p-8">
//       <div className="group isolate flex flex-col rounded-2xl bg-[#212126] shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.025] overflow-hidden w-[476px] h-[260px]">
        
//         <div className="relative z-10 flex-none px-6 order-last pb-6">
//           <h3 className="text-sm font-medium text-white">Social Sign-On</h3>
//           <p className="mt-2 text-pretty text-sm/5 text-gray-400">
//             Add high-conversion Social Sign-on (SSO) to your application in minutes. 20+ options and growing.
//           </p>
//         </div>
        
//         <div className="pointer-events-none relative flex-auto select-none min-h-[10.25rem]" aria-hidden="true">
//           <div className="absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,white_60%,transparent)]">
//             <div className="relative mx-auto aspect-[98/192] w-[calc(98/16*1rem)]">
//               <svg viewBox="0 0 98 192" fill="none" aria-hidden="true" className="absolute inset-0 h-full w-full">
//                 <path stroke="#fff" strokeOpacity=".06" d="M49 192V96.266a8 8 0 0 0-2.285-5.599L3.285 46.333A8 8 0 0 1 1 40.734V-28M49 93l45.715-46.667A8 8 0 0 0 97 40.734V-23"></path>
//               </svg>
//             </div>

//             {/* Left Side Icons Group */}
//             <div className="absolute right-1/2 top-6 mr-[calc(76/16*1rem)]">
//               <div className="relative h-[15.5rem] w-[15.5rem]">
//                 <svg viewBox="0 0 109 216" fill="none" className="absolute right-[1.125rem] top-[1.125rem] h-[13.5rem] w-[6.8125rem] overflow-visible" aria-hidden="true">
//                   <g filter="url(#social-background-filter)">
//                     <path fill="#fff" fillOpacity=".02" d="M 104.715 48.667 L 61.353 4.402 A 8 8 0 0 0 55.638 2 H -100 a 8 8 0 0 0 -8 8 V 206 a 8 8 0 0 0 8 8 H 99 A 8 8 0 0 0 107 206 V 54.266 C 107 52.172 106.18 50.163 104.715 48.667 Z" shapeRendering="crispEdges"></path>
//                     <path stroke="#fff" strokeOpacity=".05" d="M 60.996 4.752 L 104.358 49.017 A 7.5 7.5 0 0 1 106.5 54.265 V 206 A 7.5 7.5 0 0 1 99 213.5 H -100 a 7.5 7.5 0 0 1 -7.5 -7.5 V 10 a 7.5 7.5 0 0 1 7.5 -7.5 H 55.638 A 7.5 7.5 0 0 1 60.996 4.752 Z" shapeRendering="crispEdges"></path>
//                   </g>
//                 </svg>
//                 <div ref={leftIconsRef} className="relative w-full h-full">
//                   {/* Notion */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow opacity-0">
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true"><path d="M4.458 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447Zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.328-.747.934Zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.821 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933l3.222-.188ZM1.935 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.25 2.986c.7.513.933.653.933 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632Z"></path></svg>
//                   </div>
//                   {/* Github */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow opacity-0">
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12Z"></path></svg>
//                   </div>
//                   {/* Google */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow opacity-0">
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72 0-4.827 3.773-8.72 8.6-8.72 2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48Z"></path></svg>
//                   </div>
//                   {/* Discord */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow opacity-0">
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037c-1.687.29-3.33.8-4.885 1.515a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.083.083 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.077.077 0 0 0 .084-.028c.462-.63.874-1.295 1.227-1.994a.076.076 0 0 0-.042-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.291.075.075 0 0 1 .077-.011c3.928 1.793 8.18 1.793 12.062 0a.073.073 0 0 1 .078.01c.12.098.246.198.373.292a.076.076 0 0 1 .03.065.078.078 0 0 1-.036.063c-.599.349-1.225.647-1.873.89a.076.076 0 0 0-.05.076c.001.012.004.022.009.032.36.698.772 1.362 1.225 1.993a.077.077 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.029.079.079 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03ZM8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z"></path></svg>
//                   </div>
//                   {/* Apple */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow opacity-0">
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.83 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.04-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.43-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.091-4.61 1.091ZM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"></path></svg>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Side Icons Group (Mirrored) */}
//             <div className="absolute left-1/2 top-6 ml-[calc(76/16*1rem)] -scale-x-100">
//               <div className="relative h-[15.5rem] w-[15.5rem]">
//                 <svg viewBox="0 0 109 216" fill="none" className="absolute right-[1.125rem] top-[1.125rem] h-[13.5rem] w-[6.8125rem] overflow-visible" aria-hidden="true">
//                   <g filter="url(#social-background-filter)">
//                     <path fill="#fff" fillOpacity=".02" d="M 104.715 48.667 L 61.353 4.402 A 8 8 0 0 0 55.638 2 H -100 a 8 8 0 0 0 -8 8 V 206 a 8 8 0 0 0 8 8 H 99 A 8 8 0 0 0 107 206 V 54.266 C 107 52.172 106.18 50.163 104.715 48.667 Z" shapeRendering="crispEdges"></path>
//                     <path stroke="#fff" strokeOpacity=".05" d="M 60.996 4.752 L 104.358 49.017 A 7.5 7.5 0 0 1 106.5 54.265 V 206 A 7.5 7.5 0 0 1 99 213.5 H -100 a 7.5 7.5 0 0 1 -7.5 -7.5 V 10 a 7.5 7.5 0 0 1 7.5 -7.5 H 55.638 A 7.5 7.5 0 0 1 60.996 4.752 Z" shapeRendering="crispEdges"></path>
//                   </g>
//                 </svg>
//                 <div ref={rightIconsRef} className="relative w-full h-full">
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow opacity-0">
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white -scale-x-100"><path d="M19.04 19.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531-1.544 0-1.78 1.204-1.78 2.449v4.722H9.793V9.5h2.845v1.3h.038c.397-.75 1.364-1.54 2.808-1.54 3.001 0 3.556 1.974 3.556 4.545v5.238ZM6.447 8.194c-.954 0-1.72-.772-1.72-1.72a1.72 1.72 0 1 1 1.72 1.72Zm1.484 10.85h-2.97V9.5h2.97v9.543ZM20.521 2H3.476C2.66 2 2 2.645 2 3.44v17.12c0 .796.66 1.44 1.476 1.44h17.042c.815 0 1.482-.644 1.482-1.44V3.44C22 2.646 21.333 2 20.518 2h.003Z"></path></svg>
//                   </div>
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow opacity-0">
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white -scale-x-100"><path d="M2 2v9.507h9.507V2H2Zm10.495 0v9.507H22V2h-9.505ZM2 12.495V22h9.507v-9.505H2Zm10.495 0V22H22v-9.505h-9.505Z"></path></svg>
//                   </div>
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow opacity-0">
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white -scale-x-100"><path d="M7.526 11.16a.626.626 0 0 0-1.063.116L1.068 22.06a.645.645 0 0 0 .578.933h7.507a.621.621 0 0 0 .578-.358c1.62-3.346.638-8.436-2.206-11.476l.001.002Zm3.955-9.806a14.222 14.222 0 0 0-.83 14.04l3.62 7.242a.644.644 0 0 0 .576.356h7.507a.644.644 0 0 0 .578-.932L12.577 1.348a.61.61 0 0 0-1.096.006Z"></path></svg>
//                   </div>
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow opacity-0">
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white -scale-x-100"><path d="M6 1.807 0 5.629l6 3.822 6.001-3.822L6 1.807Zm12 0-6 3.822 6 3.822 6-3.822-6-3.822ZM0 13.274l6 3.822 6.001-3.822L6 9.451l-6 3.823Zm18-3.823-6 3.823 6 3.822 6-3.822-6-3.823Zm-12 8.92 6.001 3.822 6-3.822-6-3.822L6 18.371Z"></path></svg>
//                   </div>
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow opacity-0">
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white -scale-x-100"><path d="M17.521 3.325h2.944l-6.432 7.352L21.6 20.679h-5.924l-4.64-6.067-5.31 6.067H2.78l6.88-7.864-7.26-9.49h6.076l4.194 5.546 4.851-5.546Zm-1.033 15.593h1.632L7.59 4.995H5.838l10.65 13.923Z"></path></svg>
//                   </div>
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow opacity-0">
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white -scale-x-100"><path d="M18.164 7.93V5.084a2.198 2.198 0 0 0 1.267-1.978v-.067A2.2 2.2 0 0 0 17.238.845h-.067a2.2 2.2 0 0 0-2.193 2.193v.067a2.195 2.195 0 0 0 1.252 1.973l.013.006v2.852a6.22 6.22 0 0 0-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 1 0 4.3 4.656l-.012.006 7.697 5.991a6.175 6.175 0 0 0-1.038 3.446 6.22 6.22 0 0 0 1.147 3.607l-.013-.02-2.342 2.343a1.967 1.967 0 0 0-.58-.095h-.002a2.033 2.033 0 1 0 2.033 2.033 1.982 1.982 0 0 0-.1-.595l.005.014 2.317-2.317a6.246 6.246 0 1 0 4.782-11.134l-.036-.005h.006Zm-.964 9.378a3.206 3.206 0 1 1 3.215-3.207v.002a3.207 3.207 0 0 1-3.207 3.207l-.008-.002Z"></path></svg>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Central Cloud Box */}
//             <div className="absolute left-1/2 top-0 ml-[calc(-98/2/16*1rem)] aspect-[98/192] w-[calc(98/16*1rem)] pt-[calc(60/16*1rem)]">
//               <div className="relative mx-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-sm bg-gray-800 bg-gradient-to-br from-white/5 to-[64%]" style={{ boxShadow: '0 1px 1px rgba(255, 255, 255, 0.05) inset, 0 2px 13px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.2), 0 0 0 3px rgba(19, 19, 22, 0.5)' }}>
//                 <div ref={cloudGlowRef} className="absolute inset-0 opacity-0" style={{ backgroundImage: 'radial-gradient(111.72% 100% at 50% 0%, rgba(118, 237, 255, 0.6), rgba(118, 237, 255, 0) 53.91%)' }}></div>
//                 <div className="relative">
//                   <svg viewBox="0 0 34 23" fill="none" aria-hidden="true" className="w-[calc(34/16*1rem)] overflow-visible">
//                     <g filter="url(#social-cloud-filter0)">
//                       <path fill="#212126" d="M26.008 22.984a.008.008 0 0 0-.008.008.008.008 0 0 1-.008.008H8.008A.008.008 0 0 1 8 22.992a.008.008 0 0 0-.009-.008 7.5 7.5 0 1 1 0-14.968A.008.008 0 0 0 8 8.008C8 8.004 8.003 8 8.008 8h.02a.03.03 0 0 0 .03-.026 9.001 9.001 0 0 1 17.884 0 .029.029 0 0 0 .029.026h.02c.005 0 .009.004.009.008 0 .005.004.008.008.008a7.5 7.5 0 1 1 0 14.968Z"></path>
//                     </g>
//                   </svg>
//                   {/* Active/Animated Cloud */}
//                   <svg ref={cloudActiveRef} viewBox="0 0 34 23" fill="none" aria-hidden="true" className="absolute inset-0 w-[calc(34/16*1rem)] overflow-visible opacity-0">
//                     <g filter="url(#social-cloud-active-filter)">
//                       <path fill="#5DE3FF" d="M26.008 22.984a.008.008 0 0 0-.008.008.008.008 0 0 1-.008.008H8.008A.008.008 0 0 1 8 22.992a.008.008 0 0 0-.009-.008 7.5 7.5 0 1 1 0-14.968A.008.008 0 0 0 8 8.008C8 8.004 8.003 8 8.008 8h.02a.03.03 0 0 0 .03-.026 9.001 9.001 0 0 1 17.884 0 .029.029 0 0 0 .029.026h.02c.005 0 .009.004.009.008 0 .005.004.008.008.008a7.5 7.5 0 1 1 0 14.968Z"></path>
//                     </g>
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
//           <defs>
//             <filter id="social-background-filter" width="219" height="216" x="-110" y="0" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
//               <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//               <feOffset></feOffset>
//               <feGaussianBlur stdDeviation="1"></feGaussianBlur>
//               <feComposite in2="hardAlpha" operator="out"></feComposite>
//               <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
//               <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1860_5760"></feBlend>
//               <feBlend in="SourceGraphic" in2="effect1_dropShadow_1860_5760" result="shape"></feBlend>
//             </filter>
//             <filter id="social-cloud-filter0" width="34" height="25" x="0" y="0" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
//               <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//               <feOffset dy="1"></feOffset>
//               <feComposite in2="hardAlpha" operator="out"></feComposite>
//               <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.06 0"></feColorMatrix>
//               <feBlend in2="BackgroundImageFix" mode="color-dodge" result="effect1_dropShadow_228_61"></feBlend>
//               <feBlend in="SourceGraphic" in2="effect1_dropShadow_228_61" result="shape"></feBlend>
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//               <feOffset dy="2"></feOffset>
//               <feGaussianBlur stdDeviation="2.5"></feGaussianBlur>
//               <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
//               <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
//               <feBlend in2="shape" result="effect2_innerShadow_228_61"></feBlend>
//             </filter>
//             <filter id="social-cloud-active-filter" width="52" height="41" x="-9" y="-9" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
//               <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//               <feMorphology in="SourceAlpha" operator="dilate" radius="1" result="effect1_dropShadow_228_63"></feMorphology>
//               <feOffset></feOffset>
//               <feGaussianBlur stdDeviation="4"></feGaussianBlur>
//               <feComposite in2="hardAlpha" operator="out"></feComposite>
//               <feColorMatrix values="0 0 0 0 0.419608 0 0 0 0 0.905882 0 0 0 0 1 0 0 0 0.4 0"></feColorMatrix>
//               <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_228_63"></feBlend>
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//               <feOffset></feOffset>
//               <feGaussianBlur stdDeviation="1"></feGaussianBlur>
//               <feComposite in2="hardAlpha" operator="out"></feComposite>
//               <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"></feColorMatrix>
//               <feBlend in2="effect1_dropShadow_228_63" result="effect2_dropShadow_228_63"></feBlend>
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//               <feOffset></feOffset>
//               <feGaussianBlur stdDeviation=".5"></feGaussianBlur>
//               <feComposite in2="hardAlpha" operator="out"></feComposite>
//               <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0"></feColorMatrix>
//               <feBlend in2="effect2_dropShadow_228_63" result="effect3_dropShadow_228_63"></feBlend>
//               <feBlend in="SourceGraphic" in2="effect3_dropShadow_228_63" result="shape"></feBlend>
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//               <feOffset dy="1"></feOffset>
//               <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
//               <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"></feColorMatrix>
//               <feBlend in2="shape" result="effect4_innerShadow_228_63"></feBlend>
//             </filter>
//           </defs>
//         </svg>
//       </div>
//     </div>
//   );
// }

// export function SecurityComponentAnimation() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const leftPanelRef = useRef<HTMLDivElement>(null);
//   const rightPanelRef = useRef<HTMLDivElement>(null);
//   const fingerprintPathsRef = useRef<SVGPathElement[]>([]);
//   const dotGridRef = useRef<HTMLDivElement>(null);
//   const innerGlowRef = useRef<HTMLDivElement>(null);
//   const scanLineRefs = useRef<HTMLDivElement[]>([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Set initial state for paths
//       fingerprintPathsRef.current.forEach((path) => {
//         if (path) {
//           const length = path.getTotalLength();
//           gsap.set(path, {
//             strokeDasharray: length,
//             strokeDashoffset: length,
//             opacity: 0,
//           });
//         }
//       });

//       // Scanning lines loop
//       const scanTl = gsap.timeline({ repeat: -1, paused: true });
//       scanLineRefs.current.forEach((line) => {
//         if (line) {
//           scanTl.fromTo(
//             line,
//             { y: -30, opacity: 0 },
//             { y: 60, opacity: 1, duration: 1.5, ease: "none", repeat: -1, stagger: 0.2 },
//             0
//           );
//         }
//       });

//       // Pulse loop
//       const pulseTl = gsap.timeline({ repeat: -1, yoyo: true, paused: true });
//       pulseTl.to(innerGlowRef.current, {
//         opacity: 0.6,
//         scale: 1.1,
//         duration: 1.5,
//         ease: "sine.inOut",
//       });

//       // Main Interaction Timeline
//       const mainTl = gsap.timeline({ paused: true });

//       mainTl
//         .to(leftPanelRef.current, { x: "4.2rem", duration: 0.6, ease: "power2.out" }, 0)
//         .to(rightPanelRef.current, { x: "-4.2rem", duration: 0.6, ease: "power2.out" }, 0)
//         .to(dotGridRef.current, { opacity: 0.4, duration: 0.4 }, 0)
//         .to(innerGlowRef.current, { opacity: 1, duration: 0.4 }, 0)
//         .to(
//           fingerprintPathsRef.current,
//           {
//             strokeDashoffset: 0,
//             opacity: 1,
//             duration: 0.8,
//             stagger: 0.05,
//             ease: "power2.out",
//           },
//           0.1
//         );

//       // Mouse Events
//       const onEnter = () => {
//         mainTl.play();
//         scanTl.play();
//         pulseTl.play();
//       };

//       const onLeave = () => {
//         mainTl.reverse();
//         // Softly fade out scan and pulse rather than instant pause
//         gsap.to([scanTl, pulseTl], { timeScale: 0, duration: 0.3, onComplete: () => {
//            scanTl.pause(); 
//            pulseTl.pause();
//            scanTl.timeScale(1);
//            pulseTl.timeScale(1);
//         }});
//       };

//       const container = containerRef.current;
//       container?.addEventListener("mouseenter", onEnter);
//       container?.addEventListener("mouseleave", onLeave);

//       return () => {
//         container?.removeEventListener("mouseenter", onEnter);
//         container?.removeEventListener("mouseleave", onLeave);
//       };
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a] p-4">
//       <div
//         ref={containerRef}
//         className="group isolate flex h-[260px] w-[476px] flex-col overflow-hidden rounded-2xl bg-[#212126] shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.025] cursor-default"
//       >
//         {/* Dynamic Background Elements */}
//         <div 
//           ref={dotGridRef}
//           className="absolute inset-0 opacity-0 pointer-events-none"
//           style={{
//             backgroundImage: `radial-gradient(circle, rgba(93, 227, 255, 0.15) 1px, transparent 1px)`,
//             backgroundSize: '16px 16px',
//             maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
//           }}
//         />

//         <div className="relative z-10 order-last flex-none px-6 pb-6">
//           <h3 className="text-sm font-medium text-white transition-colors duration-300 group-hover:text-sky-300">Advanced security</h3>
//           <p className="mt-2 text-pretty text-sm/5 text-gray-400">
//             Clerk is SOC 2 type 2 compliant and CCPA compliant. We conduct
//             regular third-party audits and penetration tests.
//           </p>
//         </div>

//         <div
//           className="pointer-events-none relative isolate flex-auto select-none"
//           style={{ minHeight: "10.25rem" }}
//           aria-hidden="true"
//         >
//           {/* Overlays for depth */}
//           <div className="absolute inset-0 -bottom-5 z-10 bg-[radial-gradient(50%_100%_at_top,transparent,rgba(17,24,39,0.68)_61.5%,rgb(33,33,38))]"></div>
//           <div className="absolute inset-x-0 top-full z-10 mt-5 h-12 bg-[#212126]"></div>

//           <div className="relative flex h-full items-center justify-center">
//             <div className="relative h-[4.5rem] w-[4.5rem]">
              
//               {/* Left Shield Panel */}
//               <div
//                 ref={leftPanelRef}
//                 className="absolute right-full top-1/2 mr-12 mt-[calc(-280/2/16*1rem)]"
//                 style={{ transform: "translateX(5.1875rem)" }}
//               >
//                 <div className="relative aspect-[224/280] w-[calc(224/16*1rem)] -scale-x-100">
//                   <svg
//                     viewBox="0 0 224 280"
//                     height="280"
//                     fill="none"
//                     aria-hidden="true"
//                     className="absolute inset-0 h-full w-full overflow-visible"
//                   >
//                     <path
//                       fill="#fff"
//                       fillOpacity="0.05"
//                       d="M8 .25a8 8 0 0 0-8 8v91.704c0 2.258.954 4.411 2.628 5.927l10.744 9.738A7.998 7.998 0 0 1 16 121.546v36.408a7.998 7.998 0 0 1-2.628 5.927l-10.744 9.738A7.998 7.998 0 0 0 0 179.546v92.204a8 8 0 0 0 8 8h308a8 8 0 0 0 8-8V8.25a8 8 0 0 0-8-8H8Z"
//                     ></path>
//                     <path
//                       stroke="#fff"
//                       strokeOpacity="0.05"
//                       d="M.5 99.954V8.25A7.5 7.5 0 0 1 8 .75h308a7.5 7.5 0 0 1 7.5 7.5v263.5a7.5 7.5 0 0 1-7.5 7.5H8a7.5 7.5 0 0 1-7.5-7.5v-92.204a7.5 7.5 0 0 1 2.464-5.557l10.744-9.737a8.5 8.5 0 0 0 2.792-6.298v-36.408a8.5 8.5 0 0 0-2.792-6.298l-10.744-9.737A7.5 7.5 0 0 1 .5 99.954Z"
//                     ></path>
//                   </svg>
//                   <div className="absolute left-4 top-1/2 -mt-7 flex h-14 w-5 items-center overflow-hidden">
//                     <div 
//                       ref={(el) => { if (el) scanLineRefs.current[0] = el; }}
//                       className="-ml-4 h-10 w-5 rounded-[50%] bg-sky-300/30 blur opacity-0"
//                     ></div>
//                     <div className="absolute inset-y-4 left-0 w-px bg-gradient-to-t from-sky-300/0 via-sky-300/20 to-sky-300/0"></div>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Shield Panel */}
//               <div
//                 ref={rightPanelRef}
//                 className="absolute left-full top-1/2 ml-12 mt-[calc(-280/2/16*1rem)]"
//                 style={{ transform: "translateX(-5.1875rem)" }}
//               >
//                 <div className="relative aspect-[224/280] w-[calc(224/16*1rem)]">
//                   <svg
//                     viewBox="0 0 224 280"
//                     height="280"
//                     fill="none"
//                     aria-hidden="true"
//                     className="absolute inset-0 h-full w-full overflow-visible"
//                   >
//                     <path
//                       fill="#fff"
//                       fillOpacity="0.05"
//                       d="M8 .25a8 8 0 0 0-8 8v91.704c0 2.258.954 4.411 2.628 5.927l10.744 9.738A7.998 7.998 0 0 1 16 121.546v36.408a7.998 7.998 0 0 1-2.628 5.927l-10.744 9.738A7.998 7.998 0 0 0 0 179.546v92.204a8 8 0 0 0 8 8h308a8 8 0 0 0 8-8V8.25a8 8 0 0 0-8-8H8Z"
//                     ></path>
//                     <path
//                       stroke="#fff"
//                       strokeOpacity="0.05"
//                       d="M.5 99.954V8.25A7.5 7.5 0 0 1 8 .75h308a7.5 7.5 0 0 1 7.5 7.5v263.5a7.5 7.5 0 0 1-7.5 7.5H8a7.5 7.5 0 0 1-7.5-7.5v-92.204a7.5 7.5 0 0 1 2.464-5.557l10.744-9.737a8.5 8.5 0 0 0 2.792-6.298v-36.408a8.5 8.5 0 0 0-2.792-6.298l-10.744-9.737A7.5 7.5 0 0 1 .5 99.954Z"
//                     ></path>
//                   </svg>
//                   <div className="absolute left-4 top-1/2 -mt-7 flex h-14 w-5 items-center overflow-hidden">
//                     <div 
//                       ref={(el) => { if (el) scanLineRefs.current[1] = el; }}
//                       className="-ml-4 h-10 w-5 rounded-[50%] bg-sky-300/30 blur opacity-0"
//                     ></div>
//                     <div className="absolute inset-y-4 left-0 w-px bg-gradient-to-t from-sky-300/0 via-sky-300/20 to-sky-300/0"></div>
//                   </div>
//                 </div>
//               </div>

//               {/* Central Button / Icon Container */}
//               <div className="absolute inset-0 z-10 rounded-full bg-black/60 shadow-[0_1px_rgba(255,255,255,0.03)]"></div>
//               <div className="absolute inset-1 z-10 rounded-full bg-[#2a2a30] bg-gradient-to-tr from-white/0 via-white/0 to-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.5)]"></div>
              
//               {/* Active Glow Layer */}
//               <div
//                 ref={innerGlowRef}
//                 className="absolute inset-1 z-10 rounded-full bg-gradient-to-tr from-[#64E5FF]/40 via-[#64E5FF]/10 to-[#64E5FF]/0"
//                 style={{ opacity: 0 }}
//               ></div>
              
//               <div className="absolute inset-[calc(0.25rem+1px)] z-10 rounded-full bg-gradient-to-b from-[#25252b] to-[#1e1e24]"></div>
              
//               {/* Fingerprint SVG */}
//               <svg
//                 viewBox="0 0 44 44"
//                 fill="none"
//                 aria-hidden="true"
//                 className="absolute left-1/2 top-1/2 z-10 h-11 w-11 -translate-x-1/2 -translate-y-1/2"
//               >
//                 <g filter="url(#_R_3qt78hinpfknnrdb_)">
//                   <path
//                     stroke="#000"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeOpacity=".25"
//                     strokeWidth="1.5"
//                     d="M32.147 27.52c0-5.471-4.543-9.908-10.147-9.908s-10.147 4.437-10.147 9.909c0 3.744 1.329 7.184 3.551 9.897a16.152 16.152 0 0 0 2.549 2.488m21.297-22.83C35.67 11.45 29.283 7.704 22 7.704c-7.283 0-13.67 3.746-17.25 9.372M34.176 5.785A25.735 25.735 0 0 0 22 2.75c-4.413 0-8.562 1.1-12.176 3.035M28.088 40.25c-6.322-.953-11.162-6.29-11.162-12.73 0-2.735 2.272-4.953 5.074-4.953s5.073 2.218 5.073 4.954c0 2.736 2.272 4.954 5.074 4.954s5.074-2.218 5.074-4.954c0-8.209-6.815-14.863-15.221-14.863-8.406 0-15.22 6.654-15.22 14.863 0 2.505.634 4.865 1.755 6.935M22 26.53c0 5.472 4.543 9.908 10.147 9.908.695 0 1.374-.068 2.03-.198"
//                   ></path>
//                 </g>
//                 <path
//                   ref={(el) => { if (el) fingerprintPathsRef.current[0] = el; }}
//                   stroke="#5DE3FF"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="1.5"
//                   d="M39.25 17.076C35.67 11.45 29.283 7.704 22 7.704c-7.283 0-13.67 3.746-17.25 9.372"
//                 ></path>
//                 <path
//                   ref={(el) => { if (el) fingerprintPathsRef.current[1] = el; }}
//                   stroke="#5DE3FF"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="1.5"
//                   d="M34.177 5.785A25.735 25.735 0 0 0 22.001 2.75c-4.413 0-8.562 1.1-12.177 3.035"
//                 ></path>
//                 <path
//                   ref={(el) => { if (el) fingerprintPathsRef.current[2] = el; }}
//                   stroke="#5DE3FF"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="1.5"
//                   d="M32.148 27.52c0-5.471-4.543-9.908-10.147-9.908-5.605 0-10.148 4.437-10.148 9.909 0 3.744 1.33 7.184 3.552 9.897a16.152 16.152 0 0 0 2.548 2.488"
//                 ></path>
//                 <path
//                   ref={(el) => { if (el) fingerprintPathsRef.current[3] = el; }}
//                   stroke="#5DE3FF"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="1.5"
//                   d="M22 26.53c0 5.472 4.543 9.908 10.147 9.908.695 0 1.374-.068 2.03-.198"
//                 ></path>
//                 <path
//                   ref={(el) => { if (el) fingerprintPathsRef.current[4] = el; }}
//                   stroke="#5DE3FF"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="1.5"
//                   d="M28.088 40.25c-6.322-.953-11.162-6.29-11.162-12.73 0-2.735 2.272-4.953 5.074-4.953s5.073 2.218 5.073 4.954c0 2.736 2.272 4.954 5.074 4.954s5.074-2.218 5.074-4.954c0-8.209-6.815-14.863-15.221-14.863-8.406 0-15.22 6.654-15.22 14.863 0 2.505.634 4.865 1.755 6.935"
//                 ></path>
//                 <defs>
//                   <filter
//                     id="_R_3qt78hinpfknnrdb_"
//                     width="36"
//                     height="40"
//                     x="4"
//                     y="2"
//                     colorInterpolationFilters="sRGB"
//                     filterUnits="userSpaceOnUse"
//                   >
//                     <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//                     <feColorMatrix
//                       in="SourceAlpha"
//                       result="hardAlpha"
//                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                     ></feColorMatrix>
//                     <feOffset dy="1"></feOffset>
//                     <feComposite in2="hardAlpha" operator="out"></feComposite>
//                     <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.06 0"></feColorMatrix>
//                     <feBlend
//                       in2="BackgroundImageFix"
//                       mode="color-dodge"
//                       result="effect1_dropShadow_145_93"
//                     ></feBlend>
//                     <feBlend
//                       in="SourceGraphic"
//                       in2="effect1_dropShadow_145_93"
//                       result="shape"
//                     ></feBlend>
//                   </filter>
//                 </defs>
//               </svg>

//               {/* Shine / Reflection Overlay */}
//               <div className="absolute inset-1 z-10 rounded-full mix-blend-overlay [clip-path:circle(50%)]">
//                 <div
//                   className="absolute inset-0 bg-gradient-to-br from-white/0 from-[30%] via-sky-100/70 to-white/0 to-[70%]"
//                   style={{ transform: "translate(-2.75rem, -2.75rem)" }}
//                 ></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const BLOCKED_DATA = [
//   { email: "bad_actor+1@email.com", time: "Blocked Aug 4 at 14:09" },
//   { email: "bad_actor+2@email.com", time: "Blocked Aug 4 at 14:10" },
//   { email: "another.bad.actor@throwaway.com", time: "Blocked Aug 4 at 14:12" },
//   { email: "bad_actor+3@email.com", time: "Blocked Aug 4 at 14:16" },
// ];

// export function FraudPreventionComponentAnimation() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const spinnerRef = useRef<SVGSVGElement>(null);
//   const pathRef = useRef<SVGPathElement>(null);
//   const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // 1. Continuous Spinner Animation
//       gsap.to(spinnerRef.current, {
//         rotation: 360,
//         duration: 3,
//         repeat: -1,
//         ease: "linear",
//       });

//       // 2. Prepare Path
//       const path = pathRef.current;
//       if (path) {
//         const length = path.getTotalLength();
//         gsap.set(path, {
//           strokeDasharray: length,
//           strokeDashoffset: length,
//           opacity: 1,
//         });
//       }

//       // 3. Create Hover Timeline
//       const tl = gsap.timeline({ paused: true });

//       tl.to(pathRef.current, {
//         strokeDashoffset: 0,
//         duration: 1,
//         ease: "power2.inOut",
//       });

//       itemsRef.current.forEach((item, index) => {
//         if (!item) return;

//         const redNode = item.querySelector(".red-node");
//         const emailText = item.querySelector(".email-text");
//         const subText = item.querySelector(".sub-text");

//         // Stagger nodes based on path progress
//         const startTime = 0.1 + index * 0.2;

//         tl.to(redNode, {
//           opacity: 1,
//           scale: 1,
//           duration: 0.4,
//           ease: "back.out(2)",
//         }, startTime)
//         .to(emailText, {
//           opacity: 1,
//           filter: "blur(0px)",
//           duration: 0.5,
//           ease: "power2.out",
//         }, startTime)
//         .to(subText, {
//           opacity: 1,
//           y: 0,
//           duration: 0.5,
//           ease: "power2.out",
//         }, startTime + 0.1);
//       });

//       // Event Listeners
//       const handleEnter = () => tl.play();
//       const handleLeave = () => tl.reverse();

//       const container = containerRef.current;
//       container?.addEventListener("mouseenter", handleEnter);
//       container?.addEventListener("mouseleave", handleLeave);

//       return () => {
//         container?.removeEventListener("mouseenter", handleEnter);
//         container?.removeEventListener("mouseleave", handleLeave);
//       };
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black p-8">
//       <div 
//         ref={containerRef}
//         className="group isolate flex flex-col rounded-2xl bg-[#212126] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.024),inset_0_0_0_1px_rgba(255,255,255,0.024)] overflow-hidden w-[476px] h-[528px] cursor-default"
//       >
//         {/* Header Section */}
//         <div className="relative z-10 flex-none px-6 pt-6">
//           <h3 className="text-sm font-medium text-white">Fraud and Abuse Prevention</h3>
//           <p className="mt-2 text-pretty text-sm/5 text-gray-400">
//             Reduce fraudulent sign-ups and free trial abuse by blocking high-risk
//             disposable email domains and restricting the use of email
//             subaddresses with the “+” separator.
//           </p>
//         </div>

//         {/* Visual Content Section */}
//         <div className="pointer-events-none relative flex-auto select-none min-h-[10.25rem]" aria-hidden="true">
//           <div className="flex h-full items-center justify-center">
//             <div className="w-min">
//               {/* Notification Card */}
//               <div className="flex w-[304px] items-center gap-3.5 rounded-md bg-gray-800/40 bg-gradient-to-br from-white/10 to-transparent p-3 ring-1 ring-white/10 shadow-2xl backdrop-blur-sm">
//                 <div className="flex items-center justify-center">
//                   <svg 
//                     ref={spinnerRef}
//                     viewBox="0 0 16 16" 
//                     fill="none" 
//                     className="size-4"
//                   >
//                     <path
//                       stroke="url(#paint0_radial_27_5200)"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="1.25"
//                       d="M8 1.75v1.042m0 10.416v1.042m3.125-11.663-.521.902m-5.208 9.022-.521.902m8.537-8.538-.902.52m-9.02 5.21-.903.52M14.25 8h-1.042M2.792 8H1.75m11.662 3.125-.902-.52m-9.02-5.21-.903-.52m8.538 8.538-.52-.902m-5.21-9.022-.52-.902"
//                     />
//                     <defs>
//                       <radialGradient
//                         id="paint0_radial_27_5200"
//                         cx="0"
//                         cy="0"
//                         r="1"
//                         gradientTransform="rotate(102.529 4.047 5.711) scale(11.5244)"
//                         gradientUnits="userSpaceOnUse"
//                       >
//                         <stop stopColor="#fff" />
//                         <stop offset="1" stopColor="#fff" stopOpacity=".2" />
//                       </radialGradient>
//                     </defs>
//                   </svg>
//                 </div>
//                 <div className="font-mono text-[10px] leading-4 text-gray-500 transition-colors duration-500 group-hover:text-white">
//                   Fraudulent sign-ups detected
//                 </div>
//                 <div className="ml-auto text-[0.625rem] leading-[1.125rem] text-gray-600">
//                   14:09
//                 </div>
//               </div>

//               {/* Connecting Path and Dots */}
//               <div className="relative pl-[2.875rem] pt-16">
//                 {/* SVG Connecting Lines */}
//                 <div className="absolute left-[1.1875rem] top-0 -z-10 aspect-[39/393] w-[2.4375rem]">
//                   <svg viewBox="0 0 39 393" fill="none" className="absolute inset-0 size-full">
//                     {/* Base Path (Static) */}
//                     <path 
//                       d="M2 0V34.6863C2 36.808 2.84285 38.8429 4.34315 40.3431L34.6569 70.6569C36.1571 72.1571 37 74.192 37 76.3137V393" 
//                       className="stroke-white/5"
//                     />
//                     {/* Active Path (Animated) */}
//                     <path 
//                       ref={pathRef}
//                       d="M2 0V34.6863C2 36.808 2.84285 38.8429 4.34315 40.3431L34.6569 70.6569C36.1571 72.1571 37 74.192 37 76.3137V393" 
//                       className="stroke-red-500/40"
//                       style={{ opacity: 0 }}
//                     />
//                   </svg>
//                 </div>

//                 {/* List of Blocked Indicators */}
//                 <div className="space-y-6">
//                   {BLOCKED_DATA.map((data, i) => (
//                     <div 
//                       key={i} 
//                       ref={el => (itemsRef.current[i] = el)}
//                       className="flex items-start gap-4 text-[0.625rem] leading-[1.125rem]"
//                     >
//                       <div className="relative mt-[0.0625rem] flex size-5 flex-none items-center justify-center rounded-full bg-gray-600/20">
//                         {/* Static Dot */}
//                         <div className="size-1 rounded-full bg-gray-600 shadow-[0_1px_rgba(255,255,255,0.1)_inset,0_1px_2px_rgba(0,0,0,0.25)]"></div>
                        
//                         {/* Animated Error Overlay */}
//                         <div
//                           className="red-node absolute inset-0 flex items-center justify-center rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]"
//                           style={{ opacity: 0, transform: "scale(0.8)" }}
//                         >
//                           <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-4">
//                             <path
//                               stroke="#131316"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="1.5"
//                               d="m5 5 6 6M11 5l-6 6"
//                             />
//                           </svg>
//                         </div>
//                       </div>

//                       {/* Animated Labels */}
//                       <div className="flex flex-col">
//                         <div 
//                           className="email-text font-medium text-white" 
//                           style={{ opacity: 0, filter: "blur(8px)" }}
//                         >
//                           {data.email}
//                         </div>
//                         <div 
//                           className="sub-text text-gray-500" 
//                           style={{ opacity: 0, transform: "translateY(4px)" }}
//                         >
//                           {data.time}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function MFAComponentAnimation() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const glowRef = useRef<HTMLDivElement>(null);
//   const boxesRef = useRef<(HTMLDivElement | null)[]>([]);
//   const digitsRef = useRef<(HTMLSpanElement | null)[]>([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
//       const boxes = boxesRef.current;
//       const digits = digitsRef.current;
//       const glow = glowRef.current;

//       // Initial Hidden State
//       gsap.set(digits, { y: 12, opacity: 0 });
//       gsap.set(glow, { opacity: 0, x: 0 });

//       // Sequence Data (Can be randomized or fixed)
//       const sequences = [
//         ['9', '5', '4', '6', '2', '8'],
//         ['3', '6', '1', '9', '8', '4'],
//         ['8', '5', '3', '6', '8', '2']
//       ];

//       sequences.forEach((sequence) => {
//         // 1. Show Glow at first box
//         tl.to(glow, { opacity: 1, duration: 0.2 });

//         sequence.forEach((val, i) => {
//           // Set the number text
//           tl.set(digits[i], { innerText: val });

//           // Animate digit in
//           tl.to(digits[i], {
//             y: 0,
//             opacity: 1,
//             duration: 0.25,
//             ease: "back.out(2)"
//           }, "+=0.1");

//           // Move glow to next box if not at end
//           if (i < sequence.length - 1) {
//             tl.to(glow, {
//               x: (i + 1) * (32 + 12), // width (32) + gap (12)
//               duration: 0.3,
//               ease: "power2.inOut"
//             }, "<");
//           } else {
//             // Fade out glow on last digit
//             tl.to(glow, { opacity: 0, duration: 0.2 }, "+=0.1");
//           }
//         });

//         // Hold full state
//         tl.to({}, { duration: 1 });

//         // Clear state for next loop
//         tl.to(digits, {
//           y: -10,
//           opacity: 0,
//           stagger: 0.05,
//           duration: 0.3,
//           ease: "power2.in"
//         });
        
//         // Reset positions for next run
//         tl.set(digits, { y: 12 });
//         tl.set(glow, { x: 0, opacity: 0 });
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-[#0a0a0c] p-8">
//       <div 
//         ref={containerRef}
//         className="group isolate flex flex-col rounded-[16px] bg-[#212126] shadow-[inset_0_1px_rgba(255,255,255,0.024),inset_0_0_0_1px_rgba(255,255,255,0.024)] overflow-hidden" 
//         style={{ width: '476px', height: '260px' }}
//       >
//         <div className="relative z-10 flex-none px-6 order-last pb-6">
//           <h3 className="text-[14px] font-medium leading-normal text-white">
//             Multifactor Authentication
//           </h3>
//           <p className="mt-2 text-pretty text-[14px] leading-[20px] text-[#9ca3af]">
//             Each user's self-serve multifactor settings are enforced automatically during sign-in.
//           </p>
//         </div>

//         <div className="pointer-events-none relative flex-auto select-none" style={{ minHeight: '10.25rem' }} aria-hidden="true">
//           <div className="isolate flex h-full items-center justify-center">
//             <div className="relative">
//               {/* Moving Glow Border */}
//               <div 
//                 ref={glowRef}
//                 className="absolute top-0 left-0 h-10 w-8 rounded-md border border-cyan-400/50 bg-cyan-400/10 shadow-[0_0_12px_rgba(34,211,238,0.3)] z-20 pointer-events-none"
//                 style={{ opacity: 0 }}
//               />

//               <div className="flex gap-3">
//                 {[...Array(6)].map((_, i) => (
//                   <div 
//                     key={i}
//                     ref={(el) => { boxesRef.current[i] = el }}
//                     className="flex h-10 w-8 items-center justify-center overflow-hidden rounded-md bg-[#030712] relative" 
//                     style={{ 
//                       boxShadow: '0 10px 19px 4px rgb(0 0 0 / 0.16), 0 -10px 16px -4px rgb(255 255 255 / 0.04), 0 0 0 1px rgb(255 255 255 / 0.01), 0 1px 0 0 rgb(255 255 255 / 0.02)' 
//                     }}
//                   >
//                     {/* Digit Container */}
//                     <span
//                       ref={(el) => { digitsRef.current[i] = el }}
//                       className="text-white font-mono text-lg font-semibold"
//                     >
//                     </span>

//                     {/* Original dot (hidden as per video preference for digits) */}
//                     <div 
//                       className="absolute z-0 h-2 w-2 rounded-full bg-white opacity-0 pointer-events-none" 
//                       style={{ 
//                         boxShadow: '0 0 3px 1px rgb(0 0 0 / 0.3)', 
//                       }}
//                     ></div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function Component() {
//   return (
//     <div className="text-center mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
//       <h1 className="mx-auto max-w-[17.5rem] text-balance text-3xl/9 font-bold tracking-tight text-gray-950 sm:!max-w-4xl sm:text-[4.5rem] md:text-5xl md:font-bold lg:text-6xl [@media(width>=27.5em)]:max-w-[24.25rem]">
//         More than authentication, Complete User Management
//       </h1>
//       <p className="mx-auto mt-4 max-w-md text-pretty text-base/6 text-gray-600 sm:max-w-2xl sm:text-lg">
//         Need more than sign-in? Clerk gives you full stack auth and user
//         management — so you can launch faster, scale easier, and stay focused
//         on building your business.
//       </p>
//       <div className="mt-8 flex items-center justify-center gap-x-6 gap-y-3 max-sm:flex-col sm:hidden">
//         <a
//           href="https://dashboard.clerk.com/sign-up"
//           className="group relative isolate inline-flex items-center justify-center overflow-hidden text-left font-medium transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transition-opacity rounded-md shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-gradient-to-b before:from-white/20 before:opacity-50 hover:before:opacity-100 after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay text-sm h-[1.875rem] px-3 ring-1 bg-purple-500 text-white ring-purple-500"
//           target=""
//         >
//           Start building for free
//         </a>
//       </div>
//       <div className="mt-8 hidden items-center justify-center gap-x-6 gap-y-3 max-sm:flex-col sm:flex">
//         <a
//           href="/start-building"
//           className="group relative isolate inline-flex items-center justify-center overflow-hidden text-left font-medium transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transition-opacity rounded-md shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-gradient-to-b before:from-white/20 before:opacity-50 hover:before:opacity-100 after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay text-sm h-[1.875rem] px-3 ring-1 bg-purple-500 text-white ring-purple-500"
//           target=""
//         >
//           Start building for free
//         </a>
//       </div>
//     </div>
//   );
// }

// gsap.registerPlugin(useGSAP);

// // Data sets from Section 8 of the report
// const profiles = [
//   { name: "Adelaide Sloan", email: "a.sloan@example.com", token: "MtuE7Gpc7SrRsf" },
//   { name: "Selene Carey",   email: "s.carey@example.com", token: "A7ltvCcSWFvD9u" },
//   { name: "Riggs Weiss",    email: "r.weiss@example.com", token: "vDehzt9tuJFSfB" },
//   { name: "Callen Harmon",  email: "c.harmon@example.com", token: "eTOeN3rI2PsBA8" }
// ];

// // Continuous background matrix stream
// //const backgroundStream = `sDCjwxYiTAuLvXVcXfQaqwM0QZXyxVh4GQVCLuqC3Qz3oIT7f1kqd3kjc8mv3sjfg3sFljY28yDXXjjbsUuW1seyuwXJnDNaPUQCS1AuiHqM2stcWwa2nl5GUdixM5IkLGGhUPDlHvIPd57strXMdnVwAPsCyqifTuHhXvS5C494Tk5O1rNZEfWAEiEf9BL8i6Xot6wHX2riiccp6bJ9khVWEPMHLYMdgfEhX8vKwamvYv2e04EP31EX0X4z832NaaspOANcNgt21ptR5ljLeW0vmW19Axoz7jVnuYx8NNiyXjssfTRq2Ur6i9NwF6UzgQTiYcuEE0q8Gn0KxYzCnxZ7TGFD4uK52w9dHBb97hZvsRj9zCLohzKSGSi1eByv6jsSzkMN7B88w8sWNSM36vptpe3fBkcslexsYXMPRoIujKDQxNGy0pB013Swn5mAdpy9FvvgPUkVFH5qDnoaBM9crHHuxFKKTKjhNXK2kkQMrLkwWJPV8sXVdS5FxLA5XWW6d02BZ9oN2W6IpLgAYLmDPXoEy0A9V6VsSmOxoqzuTSQYygzeB6AjJlFS4FPBbvswa1t54xGEzLKtVNanwtcqvCI1FtARo4dP6auMrsocj5dfa8gPQj987KTwOMSFHJRDBhYu5ZbkdVHjQeD0PotXHqMTQlAjXfjbJMgQSgBW8xpUte42MMzCADDbeWnPc0PKzjC2lbWO1vJe9XDbKKwvbqgjTB9ZaQ5WhxQrE4momptFXufwJ9ZVIESgvn7FacmGdF62YGAJqPl0bwQm3UBJJr2Q04tkZe9GaUkr0W7Ht6kl5B8hBNTGCRZajazs38RGSpaq9EH7QHbOk88K5q3KONgozbeTTxQQFAdDhhq8oAtx9KZDRmLe2fVySBxhggjLuNY5TXEZqA`;

// export function MagicLinksPreciseGSAP() {
//   const containerRef = useRef<HTMLDivElement>(null);
  
//   // Refs for direct DOM manipulation to bypass React state re-renders during 120fps GSAP ticks
//   const nameRef = useRef<HTMLDivElement>(null);
//   const emailRef = useRef<HTMLDivElement>(null);
//   const tokenRef = useRef<HTMLDivElement>(null);

//   useGSAP(() => {
//     // ----------------------------------------------------------------------
//     // INDEPENDENT BACKGROUND ANIMATION (Section 4)
//     // ----------------------------------------------------------------------
//     gsap.to(".bg-scroll-content", {
//       yPercent: -50,
//       duration: 20,
//       ease: "none",
//       repeat: -1
//     });

//     // ----------------------------------------------------------------------
//     // MASTER TIMELINE RECURSIVE LOOP (Section 3 & 10)
//     // ----------------------------------------------------------------------
//     const buildCycle = (idx: number) => {
//       const data = profiles[idx];
      
//       // Update DOM content instantly while hidden (T+0.00s)
//       if (nameRef.current) nameRef.current.textContent = data.name;
//       if (emailRef.current) emailRef.current.textContent = data.email;
//       if (tokenRef.current) tokenRef.current.textContent = "";

//       const tl = gsap.timeline({
//         onComplete: () => {
//           // Recursive call for continuous cycling
//           buildCycle((idx + 1) % profiles.length);
//         }
//       });

//       // T+0.00s | INSTANT RESET
//       tl.set(".card-wrap", { rotation: 20, opacity: 0, transformOrigin: "50% 400%" });
//       tl.set(".avatar-path-1", { strokeDasharray: 480, strokeDashoffset: 480 });
//       tl.set(".avatar-path-2", { strokeDasharray: 120, strokeDashoffset: 120 });
//       tl.set(".check-badge", { scale: 0, opacity: 0 });

//       // T+0.05s -> T+0.90s | CARD_WRAP | Enter Swing
//       tl.to(".card-wrap", { rotation: 0, opacity: 1, duration: 0.85, ease: "power2.out" }, 0.05);

//       // T+0.60s -> T+1.90s | SVG_PATH_1 | Body Silhouette Draw
//       tl.to(".avatar-path-1", { strokeDashoffset: 0, duration: 1.30, ease: "power1.inOut" }, 0.60);

//       // T+1.40s -> T+1.95s | SVG_PATH_2 | Head/Neck Draw
//       tl.to(".avatar-path-2", { strokeDashoffset: 0, duration: 0.55, ease: "power1.inOut" }, 1.40);

//       // T+1.70s -> T+2.43s | TOKEN_TEXT | Typing Effect via onUpdate
//       const typeObj = { progress: 0 };
//       tl.to(typeObj, {
//         progress: 1,
//         duration: 0.73,
//         ease: "none",
//         onUpdate: () => {
//           if (tokenRef.current) {
//             tokenRef.current.textContent = data.token.slice(0, Math.floor(typeObj.progress * data.token.length));
//           }
//         }
//       }, 1.70);

//       // T+2.58s -> T+2.98s | CHECK_BADGE | Spring Pop Confirmation
//       tl.to(".check-badge", { scale: 1, opacity: 1, duration: 0.40, ease: "back.out(2.8)" }, 2.58);

//       // (T+2.98s -> T+4.38s is an implicit HOLD phase in the timeline)

//       // T+4.38s -> T+5.13s | CARD_WRAP | Exit Swing
//       tl.to(".card-wrap", { rotation: -22, opacity: 0, duration: 0.75, ease: "power2.in" }, 4.38);

//       // T+5.13s -> T+5.33s | GAP | Empty buffer before next cycle begins
//       tl.to({}, { duration: 0.20 }, 5.13);
//     };

//     // Kick off the infinite loop
//     buildCycle(0);

//   }, { scope: containerRef });

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black p-6 font-sans antialiased">
      
//       {/* Main Container */}
//       <div 
//         ref={containerRef}
//         className="group isolate flex flex-col rounded-2xl bg-[#212126] shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.024] overflow-hidden w-[476px] h-[528px] relative"
//       >
//         {/* Header Text */}
//         <div className="relative z-30 flex-none px-6 pt-6">
//           <h3 className="text-sm font-medium text-white">Magic Links</h3>
//           <p className="mt-2 text-pretty text-[14px] leading-5 text-gray-400">
//             Improve sign-up conversion rates and filter out spam/fraud with Magic Links.
//           </p>
//         </div>

//         {/* Animation Area */}
//         <div className="pointer-events-none relative flex-auto select-none min-h-[10.25rem] overflow-hidden">
//           <div className="relative flex h-full flex-col items-center justify-center">
            
//             {/* Background Stream Text Area */}
//             <div className="relative flex w-full justify-center break-all text-center font-mono text-[0.625rem]/[0.875rem] tracking-widest z-10 h-full overflow-hidden">
              
//               {/* Scrolling Matrix Container (Doubled for seamless looping) */}
//               <div className="bg-scroll-content absolute top-0 w-full text-[#37373C]">
//                 <div>{backgroundStream}</div>
//                 <div>{backgroundStream}</div>
//               </div>
              
//               {/* Radial mask to fade edges of text */}
//               <div 
//                 className="absolute left-1/2 top-1/2 ml-[-18.75rem] mt-[-10rem] h-[25rem] w-[37.5rem] z-20 pointer-events-none" 
//                 style={{ backgroundImage: "radial-gradient(10.75rem 9.5rem at center, transparent, rgb(33, 33, 38))" }}
//               ></div>
              
//               {/* The Highlight Pill Wrapper */}
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[6rem] z-30">
//                 <div 
//                   ref={tokenRef}
//                   className="bg-sky-400/10 px-1 py-[0.0625rem] text-[#5DE3FF] font-bold shadow-[0_0_8px_inset] shadow-sky-500/20 backdrop-blur-[2px] rounded-sm flex items-center justify-center min-h-[20px] min-w-[20px]"
//                 >
//                   {/* Token typed here via GSAP */}
//                 </div>
//               </div>
//             </div>

//             {/* The Stage / Blurred Ring */}
//             <div className="absolute top-1/2 left-0 w-full z-20 mt-4 flex justify-center">
//               <div className="absolute inset-x-[-10%] top-4 aspect-[2/1] rounded-[50%] backdrop-blur-[3px]" style={{ backgroundImage: "radial-gradient(98.23% 104.12% at 50% -4.12%, rgba(255,255,255,0.05) 6.12%, transparent 55.4%)" }}></div>
//               <div className="absolute inset-x-[-10%] top-4 aspect-[2/1] rounded-[50%] border-t border-white/5 [mask-image:linear-gradient(to_right,transparent,white,transparent)]"></div>
              
//               {/* CARD_WRAP: The element that executes the pendulum swing */}
//               <div className="card-wrap flex flex-col items-center z-30 relative top-[-60px]">
                
//                 {/* The ID Card */}
//                 <div className="relative h-24 w-20 rounded-sm bg-gray-800 bg-gradient-to-br from-white/5 to-[64%] flex items-center justify-center" style={{ boxShadow: "rgba(255, 255, 255, 0.05) 0px 1px 1px inset, rgba(0, 0, 0, 0.2) 0px 2px 13px, rgba(0, 0, 0, 0.2) 0px 1px 2px, rgba(19, 19, 22, 0.5) 0px 0px 0px 3px" }}>
//                   <svg viewBox="0 0 80 96" fill="none" className="absolute inset-0 h-full w-full" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                    
//                     {/* Base dark paths */}
//                     <path d="M26.22 78.25c2.679-3.522 1.485-17.776 1.485-17.776-1.084-2.098-1.918-4.288-2.123-5.619-3.573 0-3.7-8.05-3.827-9.937-.102-1.509 1.403-1.383 2.169-1.132-.298-1.3-.92-5.408-1.021-11.446C22.775 24.794 30.94 17.75 40 17.75h.005c9.059 0 17.225 7.044 17.097 14.59-.102 6.038-.723 10.147-1.021 11.446.765-.251 2.271-.377 2.169 1.132-.128 1.887-.254 9.937-3.827 9.937-.205 1.331-1.039 3.521-2.123 5.619 0 0-1.194 14.254 1.485 17.776" className="stroke-[#26262C]"></path>
//                     <path d="M27.705 60.474a26.884 26.884 0 0 0 1.577 2.682c1.786 2.642 5.36 6.792 10.718 6.792h.005c5.358 0 8.932-4.15 10.718-6.792a26.884 26.884 0 0 0 1.577-2.682" className="stroke-[#26262C]"></path>
                    
//                     {/* Animated Cyan Paths. (Path 1 = Body, Path 2 = Head) */}
//                     <path className="avatar-path-1" stroke="#5DE3FF" d="M26.22 78.25c2.679-3.522 1.485-17.776 1.485-17.776-1.084-2.098-1.918-4.288-2.123-5.619-3.573 0-3.7-8.05-3.827-9.937-.102-1.509 1.403-1.383 2.169-1.132-.298-1.3-.92-5.408-1.021-11.446C22.775 24.794 30.94 17.75 40 17.75h.005c9.059 0 17.225 7.044 17.097 14.59-.102 6.038-.723 10.147-1.021 11.446.765-.251 2.271-.377 2.169 1.132-.128 1.887-.254 9.937-3.827 9.937-.205 1.331-1.039 3.521-2.123 5.619 0 0-1.194 14.254 1.485 17.776"></path>
//                     <path className="avatar-path-2" stroke="#5DE3FF" d="M27.705 60.474a26.884 26.884 0 0 0 1.577 2.682c1.786 2.642 5.36 6.792 10.718 6.792h.005c5.358 0 8.932-4.15 10.718-6.792a26.884 26.884 0 0 0 1.577-2.682"></path>
//                   </svg>
//                 </div>

//                 {/* User Details */}
//                 <div className="relative mt-6 flex flex-col items-center">
//                   <div className="flex items-center gap-1.5 text-[11px] font-semibold text-white">
//                     <span ref={nameRef}></span>
                    
//                     {/* Blue Checkmark Badge */}
//                     <div className="check-badge flex items-center justify-center w-[14px] h-[14px] bg-[#3b82f6] rounded-full text-white">
//                       <svg viewBox="0 0 24 24" fill="none" className="w-[10px] h-[10px]" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
//                         <polyline points="20 6 9 17 4 12"></polyline>
//                       </svg>
//                     </div>
//                   </div>
//                   <div ref={emailRef} className="mt-0.5 font-mono text-[10px] text-zinc-500">
//                     {/* Email injected via GSAP */}
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// // Token strings to type — each ~14–16 chars, one per user cycle
// const TOKENS = [
//   "MtuE7Gpc7SrRsf",
//   "A7ltvCcSWFvD9u",
//   "pE4DxJ1t9VvD9u",
//   "NYWuMQRbyHc6qn",
//   "vDehzt9tuJFSfB",
//   "eTOeN3rI2PsBA8",
//   "QhZiABB9rtkljB",
// ];

// // Long base64-like noise for the scrolling background
// const NOISE =
//   "sDCjwxYiTAuLvXVcXfQaqwM0QZXyxVh4GQVCLuqC3Qz3oIT7f1kqd3kjc8mv3sjfg3sFljY28yDXXjjbs" +
//   "UuW1seyuwXJnDNaPUQCS1AuiHqM2stcWwa2nl5GUdixM5IkLGGhUPDlHvIPd57strXMdnVwAPsCyqifTuH" +
//   "hXvS5C494Tk5O1rNZEfWAEiEf9BL8i6Xot6wHX2riiccp6bJ9khVWEPMHLYMdgfEhX8vKwamvYv2e04EP3" +
//   "1EX0X4z832NaaspOANcNgt21ptR5ljLeW0vmW19Axoz7jVnuYx8NNiyXjssfTRq2Ur6i9NwF6UzgQTiYcuE" +
//   "E0q8Gn0KxYzCnxZ7TGFD4uK52w9dHBb97hZvsRj9zCLohzKSGSi1eByv6jsSzkMN7B88w8sWNSM36vptpe" +
//   "3fBkcslexsYXMPRoIujKDQxNGy0pB013Swn5mAdpy9FvvgPUkVFH5qDnoaBM9crHHuxFKKTKjhNXK2kkQMr" +
//   "LkwWJPV8sXVdS5FxLA5XWW6d02BZ9oN2W6IpLgAYLmDPXoEy0A9V6VsSmOxoqzuTSQYygzeB6AjJlFS4FP" +
//   "Bbvswa1t54xGEzLKtVNanwtcqvCI1FtARo4dP6auMrsocj5dfa8gPQj987KTwOMSFHJRDBhYu5ZbkdVHjQeD" +
//   "0PotXHqMTQlAjXfjbJMgQSgBW8xpUte42MMzCADDbeWnPc0PKzjC2lbWO1vJe9XDbKKwvbqgjTB9ZaQ5Whx" +
//   "QrE4momptFXufwJ9ZVIESgvn7FacmGdF62YGAJqPl0bwQm3UBJJr2Q04tkZe9GaUkr0W7Ht6kl5B8hBNTGC" +
//   "RZajazs38RGSpaq9EH7QHbOk88K5q3KONgozbeTTxQQFAdDhhq8oAtx9KZDRmLe2fVySBxhggjLuNY5TXEZq";

// // SVG paths for silhouette
// const PATH_BODY =
//   "M26.22 78.25c2.679-3.522 1.485-17.776 1.485-17.776-1.084-2.098-1.918-4.288-2.123-5.619" +
//   "-3.573 0-3.7-8.05-3.827-9.937-.102-1.509 1.403-1.383 2.169-1.132-.298-1.3-.92-5.408" +
//   "-1.021-11.446C22.775 24.794 30.94 17.75 40 17.75h.005c9.059 0 17.225 7.044 17.097 14.59" +
//   "-.102 6.038-.723 10.147-1.021 11.446.765-.251 2.271-.377 2.169 1.132-.128 1.887-.254 9.937" +
//   "-3.827 9.937-.205 1.331-1.039 3.521-2.123 5.619 0 0-1.194 14.254 1.485 17.776";

// const PATH_NECK =
//   "M27.705 60.474a26.884 26.884 0 0 0 1.577 2.682c1.786 2.642 5.36 6.792 10.718 6.792h.005" +
//   "c5.358 0 8.932-4.15 10.718-6.792a26.884 26.884 0 0 0 1.577-2.682";

// // ─── AvatarCard sub-component ─────────────────────────────────────────────────
// function AvatarCard({
//   path1Ref,
//   path2Ref,
// }: {
//   path1Ref: React.RefObject<SVGPathElement | null>;
//   path2Ref: React.RefObject<SVGPathElement | null>;
// }) {
//   return (
//     <div
//       className="relative h-24 w-20 rounded-sm"
//       style={{
//         background: "linear-gradient(135deg,rgba(255,255,255,0.05) 0%,transparent 64%), #1f2937",
//         boxShadow:
//           "rgba(255,255,255,0.05) 0px 1px 1px inset," +
//           "rgba(0,0,0,0.20) 0px 2px 13px," +
//           "rgba(0,0,0,0.20) 0px 1px 2px," +
//           "rgba(19,19,22,0.50) 0px 0px 0px 3px",
//       }}
//     >
//       <svg
//         viewBox="0 0 80 96"
//         fill="none"
//         className="absolute inset-0 h-full w-full"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="1.5"
//       >
//         {/* dim grey base paths */}
//         <path d={PATH_BODY} stroke="#26262C" transform="translate(0 1)" />
//         <path d={PATH_NECK} stroke="#26262C" transform="translate(0 1)" />
//         {/* animated cyan paths */}
//         <path
//           ref={path1Ref}
//           d={PATH_BODY}
//           stroke="#22d3ee"
//           transform="translate(0 1)"
//           strokeDasharray="480"
//           strokeDashoffset="480"
//         />
//         <path
//           ref={path2Ref}
//           d={PATH_NECK}
//           stroke="#22d3ee"
//           transform="translate(0 1)"
//           strokeDasharray="120"
//           strokeDashoffset="120"
//         />
//       </svg>
//     </div>
//   );
// }

// // ─── Main component ───────────────────────────────────────────────────────────
// export function MagicLinks() {
//   const rootRef     = useRef<HTMLDivElement>(null);
//   const bgRef       = useRef<HTMLDivElement>(null);
//   const cardWrap    = useRef<HTMLDivElement>(null);
//   const tokenEl     = useRef<HTMLSpanElement>(null);
//   const path1Ref    = useRef<SVGPathElement>(null);
//   const path2Ref    = useRef<SVGPathElement>(null);
//   const nameEl      = useRef<HTMLDivElement>(null);
//   const emailEl     = useRef<HTMLDivElement>(null);
//   const checkEl     = useRef<HTMLDivElement>(null);

//   // React state only for the text content — updated mid-animation
//   const [user, setUser] = useState(USERS[0]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // ── Background scroll (independent infinite loop) ───────────────────
//       gsap.to(bgRef.current, {
//         y: "-50%",
//         duration: 20,
//         ease: "none",
//         repeat: -1,
//       });

//       // ── Main sequential timeline ────────────────────────────────────────
//       let idx = 0;

//       function buildCycle() {
//         const token     = TOKENS[idx % TOKENS.length];
//         const nextUser  = USERS[idx % USERS.length];

//         const tl = gsap.timeline({
//           onComplete: () => {
//             idx++;
//             buildCycle();
//           },
//         });

//         // 0. Instant reset before entering
//         tl.set(cardWrap.current, { rotation: 20, opacity: 0, transformOrigin: "50% 400%" });
//         tl.set([path1Ref.current, path2Ref.current], { strokeDashoffset: (i) => i === 0 ? 480 : 120 });
//         tl.set(tokenEl.current,  {});
//         tl.set(checkEl.current,  { scale: 0, opacity: 0 });
//         tl.add(() => {
//           // Update React text content just before card enters
//           setUser(nextUser);
//           if (tokenEl.current) tokenEl.current.textContent = "";
//         });

//         // 1. Card rotates in from the right arc (20deg → 0deg)
//         tl.to(cardWrap.current, {
//           rotation: 0,
//           opacity: 1,
//           duration: 0.85,
//           ease: "power2.out",
//         }, "+=0.05");

//         // 2. SVG body path draws in
//         tl.to(path1Ref.current, {
//           strokeDashoffset: 0,
//           duration: 1.3,
//           ease: "power1.inOut",
//         }, "-=0.3");

//         // 3. SVG neck path draws in (overlapping)
//         tl.to(path2Ref.current, {
//           strokeDashoffset: 0,
//           duration: 0.55,
//           ease: "power1.inOut",
//         }, "-=0.5");

//         // 4. Token types character by character
//         tl.add(() => {
//           if (!tokenEl.current) return;
//           const totalDuration = token.length * 0.052;
//           const obj = { progress: 0 };
//           gsap.to(obj, {
//             progress: 1,
//             duration: totalDuration,
//             ease: "none",
//             onUpdate() {
//               if (tokenEl.current) {
//                 const chars = Math.floor(obj.progress * token.length);
//                 tokenEl.current.textContent = token.slice(0, chars);
//               }
//             },
//           });
//         }, "-=0.1");

//         const typeDuration = token.length * 0.052 + 0.15;

//         // 5. Verified check pops in after typing finishes
//         tl.to(checkEl.current, {
//           scale: 1,
//           opacity: 1,
//           duration: 0.4,
//           ease: "back.out(2.8)",
//         }, `+=${typeDuration}`);

//         // 6. Hold for user to read
//         tl.to({}, { duration: 1.4 });

//         // 7. Card rotates away to the left arc
//         tl.to(cardWrap.current, {
//           rotation: -22,
//           opacity: 0,
//           duration: 0.75,
//           ease: "power2.in",
//         });

//         // 8. Tiny gap before next cycle
//         tl.to({}, { duration: 0.2 });
//       }

//       buildCycle();
//     }, rootRef);

//     return () => ctx.revert();
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   return (
//     <div
//       ref={rootRef}
//       className="group isolate flex pb-24 flex-col rounded-2xl bg-gray-900 overflow-hidden w-full max-w-[380px]"
//       style={{
//         boxShadow:
//           "inset 0 1px rgba(255,255,255,0.025)," +
//           "inset 0 0 0 1px rgba(255,255,255,0.025)",
//       }}
//     >
//       {/* ── Header text ──────────────────────────────────────────────────── */}
//       <div className="relative z-10 flex-none px-6 pt-6">
//         <h3 className="text-sm font-medium text-white">Magic Links</h3>
//         <p className="mt-2 text-pretty text-sm/5 text-gray-400">
//           Improve sign-up conversion rates and filter out spam/fraud with Magic Links.
//         </p>
//       </div>

//       {/* ── Animation viewport ───────────────────────────────────────────── */}
//       <div
//         className="pointer-events-none relative flex-auto select-none isolate"
//         style={{ minHeight: "10.25rem" }}
//         aria-hidden="true"
//       >
//         <div className="relative flex h-full flex-col items-center justify-center">

//           {/* Background noise text — scrolls upward infinitely */}
//           <div className="absolute inset-0 overflow-hidden">
//             <div
//               ref={bgRef}
//               className="font-mono text-[0.625rem]/[0.875rem] tracking-widest text-[#37373C] break-all text-center"
//               style={{ willChange: "transform" }}
//             >
//               {/* doubled so seamless scroll loop works */}
//               {NOISE + NOISE}
//             </div>
//           </div>

//           {/* Radial gradient — cuts a hole to reveal center, fades edges */}
//           <div
//             className="absolute inset-0 z-10 pointer-events-none"
//             style={{
//               background:
//                 "radial-gradient(" +
//                 "37rem 18rem at 50% 46%," +
//                 "transparent 8%," +
//                 "rgb(17 24 39) 68%" +
//                 ")",
//             }}
//           />

//           {/* Token badge — fixed in the middle row */}
//           <div className="relative z-20 flex w-full justify-center font-mono text-[0.625rem]/[0.875rem] tracking-widest">
//             <div
//               className="relative px-1 py-[0.0625rem] text-gray-400"
//               style={{
//                 background: "rgba(255,255,255,0.04)",
//                 boxShadow: "0 0 0 1px inset rgba(255,255,255,0.15)",
//                 backdropFilter: "blur(1px)",
//                 borderLeft: "1.5px solid #22d3ee",
//                 minWidth: "7rem",
//               }}
//             >
//               <span ref={tokenEl} className="inline-block min-w-[1ch]">&nbsp;</span>
//             </div>
//           </div>

//           {/* Card + user section */}
//           <div className="relative z-20 mt-9 flex w-full">

//             {/* Curved highlight glow on the shelf */}
//             <div
//               className="absolute inset-x-[-10%] top-8 aspect-[2/1] rounded-[50%]"
//               style={{
//                 backgroundImage:
//                   "radial-gradient(98.23% 104.12% at 50% -4.12%," +
//                   "rgba(255,255,255,0.05) 6.12%," +
//                   "rgba(255,255,255,0) 55.4%)",
//                 backdropFilter: "blur(3px)",
//               }}
//             />
//             {/* Shelf top arc border */}
//             <div
//               className="absolute inset-x-[-10%] top-8 aspect-[2/1] rounded-[50%] border-t border-white/5"
//               style={{
//                 maskImage: "linear-gradient(to right, transparent, white, transparent)",
//                 WebkitMaskImage: "linear-gradient(to right, transparent, white, transparent)",
//               }}
//             />

//             {/* Rotating card wrapper — transform-origin far below creates arc rotation */}
//             <div
//               ref={cardWrap}
//               className="flex w-full flex-none flex-col items-center"
//               style={{ transformOrigin: "50% 400%", opacity: 0 }}
//             >
//               <AvatarCard path1Ref={path1Ref} path2Ref={path2Ref} />

//               {/* Name + verified badge */}
//               <div className="relative mt-6 flex items-center gap-1.5">
//                 <div
//                   ref={nameEl}
//                   className="font-mono text-[0.75rem]/[1.125rem] font-semibold text-white tracking-tight"
//                 >
//                   {user.name}
//                 </div>

//                 {/* Verified check — scaled in by GSAP */}
//                 <div
//                   ref={checkEl}
//                   className="flex h-4 w-4 items-center justify-center rounded-full bg-cyan-500"
//                   style={{ transform: "scale(0)", opacity: 0 }}
//                 >
//                   <svg viewBox="0 0 12 12" fill="none" className="h-2.5 w-2.5">
//                     <path
//                       d="M2 6.5L4.5 9L10 3"
//                       stroke="white"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//               </div>

//               {/* Email */}
//               <div
//                 ref={emailEl}
//                 className="mt-0.5 font-mono text-[0.625rem]/[1.125rem] text-white/50"
//               >
//                 {user.email}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// gsap.registerPlugin(useGSAP);

// // Mock data based on the video
// const verificationProfiles = [
//   {
//     name: "Adelaide Sloan",
//     email: "a.sloan@example.com",
//     token: "A7ltvCcSwFvD9u",
//   },
//   {
//     name: "Selene Carey",
//     email: "s.carey@example.com",
//     token: "NYWuMQRbyHc6qn",
//   },
//   {
//     name: "Riggs Weiss",
//     email: "r.weiss@example.com",
//     token: "vDehzt9tuJlfsfB",
//   },
//   {
//     name: "Callen Harmon",
//     email: "c.harmon@example.com",
//     token: "wkX2riiccp6bJ9",
//   }
// ];

// // A large chunk of random background text
// const backgroundStream = `sDCjwxYiTAuLvXVcXfQaqwM0QZXyxVh4GQVCLuqC3Qz3oIT7f1kqd3kjc8mv3sjfg3sFljY28yDXXjjbsUuW1seyuwXJnDNaPUQCS1AuiHqM2stcWwa2nl5GUdixM5IkLGGhUPDlHvIPd57strXMdnVwAPsCyqifTuHhXvS5C494Tk5O1rNZEfWAEiEf9BL8i6Xot6wHX2riiccp6bJ9khVWEPMHLYMdgfEhX8vKwamvYv2e04EP31EX0X4z832NaaspOANcNgt21ptR5ljLeW0vmW19Axoz7jVnuYx8NNiyXjssfTRq2Ur6i9NwF6UzgQTiYcuEE0q8Gn0KxYzCnxZ7TGFD4uK52w9dHBb97hZvsRj9zCLohzKSGSi1eByv6jsSzkMN7B88w8sWNSM36vptpe3fBkcslexsYXMPRoIujKDQxNGy0pB013Swn5mAdpy9FvvgPUkVFH5qDnoaBM9crHHuxFKKTKjhNXK2kkQMrLkwWJPV8sXVdS5FxLA5XWW6d02BZ9oN2W6IpLgAYLmDPXoEy0A9V6VsSmOxoqzuTSQYygzeB6AjJlFS4FPBbvswa1t54xGEzLKtVNanwtcqvCI1FtARo4dP6auMrsocj5dfa8gPQj987KTwOMSFHJRDBhYu5ZbkdVHjQeD0PotXHqMTQlAjXfjbJMgQSgBW8xpUte42MMzCADDbeWnPc0PKzjC2lbWO1vJe9XDbKKwvbqgjTB9ZaQ5WhxQrE4momptFXufwJ9ZVIESgvn7FacmGdF62YGAJqPl0bwQm3UBJJr2Q04tkZe9GaUkr0W7Ht6kl5B8hBNTGCRZajazs38RGSpaq9EH7QHbOk88K5q3KONgozbeTTxQQFAdDhhq8oAtx9KZDRmLe2fVySBxhggjLuNY5TXEZqA`;


// export function MagicLinksGSAP() {
//   const containerRef = useRef<HTMLDivElement>(null);
  
//   // State to handle the text updates that need to sync with the GSAP timeline
//   const [activeProfileIndex, setActiveProfileIndex] = useState(0);

//   useGSAP(() => {
//     const tl = gsap.timeline({ repeat: -1 });
    
//     // We will build a sequential timeline that loops through each profile
//     verificationProfiles.forEach((profile, index) => {
      
//       const isFirst = index === 0;

//       // 1. SET / RESET STATE for the incoming card
//       tl.set(".avatar-card-container", { 
//         rotation: -45, // Swing in from the left
//         opacity: 0,
//         transformOrigin: "50% 400%" // The crucial pivot point for the ferris-wheel swing
//       })
//       .set(".avatar-path", { strokeDasharray: 1, strokeDashoffset: 1, stroke: "#3f3f46" })
//       .set(".verified-badge", { scale: 0 })
//       .set(".highlight-pill", { opacity: 0, scale: 0.9 })
      
//       // Update React state at the exact moment the new sequence starts
//       .call(() => setActiveProfileIndex(index));

//       // Small delay before swing
//       tl.to({}, { duration: 0.2 });

//       // 2. SWING IN
//       tl.to(".avatar-card-container", {
//         rotation: 0,
//         opacity: 1,
//         duration: 0.8,
//         ease: "power2.out"
//       });

//       // 3. SCAN & HIGHLIGHT
//       const SCAN_LABEL = `scan-${index}`;
//       tl.addLabel(SCAN_LABEL);

//       // Fade in the text pill
//       tl.to(".highlight-pill", {
//         opacity: 1,
//         scale: 1,
//         duration: 0.4,
//         ease: "back.out(1.5)"
//       }, SCAN_LABEL);

//       // Draw the silhouette path in Cyan
//       tl.to(".avatar-path", {
//         strokeDashoffset: 0,
//         stroke: "#5DE3FF",
//         duration: 1.2,
//         ease: "power1.inOut"
//       }, SCAN_LABEL);

//       // 4. VERIFY SUCCESS
//       tl.to(".verified-badge", {
//         scale: 1,
//         duration: 0.5,
//         ease: "elastic.out(1, 0.5)"
//       }, "+=0.2"); // Trigger slightly after scan finishes

//       // 5. HOLD STATE
//       tl.to({}, { duration: 1.5 });

//       // 6. SWING OUT & CLEANUP
//       const EXIT_LABEL = `exit-${index}`;
//       tl.addLabel(EXIT_LABEL);

//       tl.to(".verified-badge", { scale: 0, duration: 0.2 }, EXIT_LABEL);
//       tl.to(".highlight-pill", { opacity: 0, duration: 0.3 }, EXIT_LABEL);
      
//       tl.to(".avatar-card-container", {
//         rotation: 45, // Swing out to the right
//         opacity: 0,
//         duration: 0.8,
//         ease: "power2.in"
//       }, EXIT_LABEL);

//       // Small buffer before next profile
//       tl.to({}, { duration: 0.2 });
//     });

//   }, { scope: containerRef });

//   const activeProfile = verificationProfiles[activeProfileIndex];

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black p-6 font-sans antialiased">
      
//       {/* Main Card */}
//       <div 
//         ref={containerRef}
//         className="group isolate flex flex-col rounded-2xl bg-[#212126] shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.024] overflow-hidden w-[476px] h-[528px] relative"
//       >
//         {/* Header Text */}
//         <div className="relative z-30 flex-none px-6 pt-6">
//           <h3 className="text-sm font-medium text-white">Magic Links</h3>
//           <p className="mt-2 text-pretty text-[14px] leading-5 text-gray-400">
//             Improve sign-up conversion rates and filter out spam/fraud with Magic Links.
//           </p>
//         </div>

//         {/* Animation Area */}
//         <div className="pointer-events-none relative flex-auto select-none min-h-[10.25rem] overflow-hidden">
          
//           <div className="relative flex h-full flex-col items-center justify-center">
            
//             {/* Background Stream Text Area */}
//             <div className="relative flex w-full justify-center break-all text-center font-mono text-[0.625rem]/[0.875rem] tracking-widest z-10">
              
//               <div className="absolute inset-x-0 bottom-[0.0625rem] overflow-hidden text-[#37373C]">
//                 <div className="mb-[-0.875rem]">{backgroundStream.slice(0, 500)}</div>
//               </div>
//               <div className="absolute inset-x-0 top-full text-[#37373C]">
//                 {backgroundStream.slice(500)}
//               </div>
              
//               {/* Radial mask to fade edges of text */}
//               <div 
//                 className="absolute left-1/2 top-1/2 ml-[-18.75rem] mt-[-10rem] h-[25rem] w-[37.5rem] z-20 pointer-events-none" 
//                 style={{ backgroundImage: "radial-gradient(10.75rem 9.5rem at center, transparent, rgb(33, 33, 38))" }}
//               ></div>
              
//               {/* The Highlight Pill */}
//               <div className="highlight-pill relative z-30 bg-sky-400/10 px-1 py-[0.0625rem] text-[#5DE3FF] font-bold shadow-[0_0_8px_inset] shadow-sky-500/20 backdrop-blur-[2px] rounded-sm flex items-center justify-center">
//                 {activeProfile.token}
//               </div>

//             </div>

//             {/* The Stage / Blurred Ring */}
//             <div className="relative z-20 mt-12 flex w-full justify-center">
//               <div className="absolute inset-x-[-10%] top-4 aspect-[2/1] rounded-[50%] backdrop-blur-[3px]" style={{ backgroundImage: "radial-gradient(98.23% 104.12% at 50% -4.12%, rgba(255,255,255,0.05) 6.12%, transparent 55.4%)" }}></div>
//               <div className="absolute inset-x-[-10%] top-4 aspect-[2/1] rounded-[50%] border-t border-white/5 [mask-image:linear-gradient(to_right,transparent,white,transparent)]"></div>
              
//               {/* Avatar Card Container (The element that swings) */}
//               <div className="avatar-card-container flex flex-col items-center z-30">
                
//                 {/* The ID Card */}
//                 <div className="relative h-24 w-20 rounded-sm bg-gray-800 bg-gradient-to-br from-white/5 to-[64%] flex items-center justify-center" style={{ boxShadow: "rgba(255, 255, 255, 0.05) 0px 1px 1px inset, rgba(0, 0, 0, 0.2) 0px 2px 13px, rgba(0, 0, 0, 0.2) 0px 1px 2px, rgba(19, 19, 22, 0.5) 0px 0px 0px 3px" }}>
//                   <svg viewBox="0 0 80 96" fill="none" className="absolute inset-0 h-full w-full" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                    
//                     {/* Dark background paths */}
//                     <path d="M26.22 78.25c2.679-3.522 1.485-17.776 1.485-17.776-1.084-2.098-1.918-4.288-2.123-5.619-3.573 0-3.7-8.05-3.827-9.937-.102-1.509 1.403-1.383 2.169-1.132-.298-1.3-.92-5.408-1.021-11.446C22.775 24.794 30.94 17.75 40 17.75h.005c9.059 0 17.225 7.044 17.097 14.59-.102 6.038-.723 10.147-1.021 11.446.765-.251 2.271-.377 2.169 1.132-.128 1.887-.254 9.937-3.827 9.937-.205 1.331-1.039 3.521-2.123 5.619 0 0-1.194 14.254 1.485 17.776" className="stroke-[#26262C]"></path>
//                     <path d="M27.705 60.474a26.884 26.884 0 0 0 1.577 2.682c1.786 2.642 5.36 6.792 10.718 6.792h.005c5.358 0 8.932-4.15 10.718-6.792a26.884 26.884 0 0 0 1.577-2.682" className="stroke-[#26262C]"></path>
                    
//                     {/* Animated Cyan Paths (Overlay) */}
//                     <path pathLength="1" d="M26.22 78.25c2.679-3.522 1.485-17.776 1.485-17.776-1.084-2.098-1.918-4.288-2.123-5.619-3.573 0-3.7-8.05-3.827-9.937-.102-1.509 1.403-1.383 2.169-1.132-.298-1.3-.92-5.408-1.021-11.446C22.775 24.794 30.94 17.75 40 17.75h.005c9.059 0 17.225 7.044 17.097 14.59-.102 6.038-.723 10.147-1.021 11.446.765-.251 2.271-.377 2.169 1.132-.128 1.887-.254 9.937-3.827 9.937-.205 1.331-1.039 3.521-2.123 5.619 0 0-1.194 14.254 1.485 17.776" className="avatar-path"></path>
//                     <path pathLength="1" d="M27.705 60.474a26.884 26.884 0 0 0 1.577 2.682c1.786 2.642 5.36 6.792 10.718 6.792h.005c5.358 0 8.932-4.15 10.718-6.792a26.884 26.884 0 0 0 1.577-2.682" className="avatar-path"></path>
//                   </svg>
//                 </div>

//                 {/* User Details */}
//                 <div className="relative mt-6 flex flex-col items-center">
//                   <div className="flex items-center gap-1.5 text-[11px] font-semibold text-white">
//                     {activeProfile.name}
                    
//                     {/* Blue Checkmark Badge */}
//                     <div className="verified-badge flex items-center justify-center w-[14px] h-[14px] bg-[#3b82f6] rounded-full text-white">
//                       <svg viewBox="0 0 24 24" fill="none" className="w-[10px] h-[10px]" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
//                         <polyline points="20 6 9 17 4 12"></polyline>
//                       </svg>
//                     </div>
//                   </div>
//                   <div className="mt-0.5 font-mono text-[10px] text-zinc-500">
//                     {activeProfile.email}
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function MagicLinksCard() {
//   return (
//     <div className="mt-16 grid grid-cols-1 grid-rows-[repeat(12,minmax(0,1fr))] gap-2 md:grid-cols-2 md:grid-rows-6 xl:grid-flow-col xl:grid-cols-3 xl:grid-rows-4">
//     <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#1C1D22] to-[#15161A] p-14">

//       {/* Soft Outer Glow */}
//       <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[0_0_120px_rgba(0,0,0,0.6)_inset]" />

//       {/* Header */}
//       <div className="relative z-20 max-w-3xl">
//         <h3 className="text-2xl font-semibold text-white">
//           Magic Links
//         </h3>

//         <p className="mt-6 text-xl leading-relaxed text-gray-400">
//           Improve sign-up conversion rates and filter out spam/fraud with Magic Links.
//         </p>
//       </div>

//       {/* Center Content Area */}
//       <div className="relative z-20 mt-40 flex flex-col items-center">

//         {/* Background Random Code (blurred + faded) */}
//         <div className="pointer-events-none absolute top-[-140px] w-[900px] text-center font-mono text-xs tracking-widest text-[#2A2B31] opacity-40 blur-[0.5px]">
//           <div className="leading-6">
//             qCMG2zRXxI5UPF 8JfS93JksHjdf92JDKf9sdf 9dsfKJSDf...
//             <br />
//             dskfJSDFKJSDF8934ksdf9sdf8sdf9sd...
//             <br />
//             sdf98sdf9sdf89sdf89sdf89sdf89sd...
//           </div>
//         </div>

//         {/* Highlighted Token */}
//         <div className="relative z-30 mb-20 rounded-md bg-white/5 px-3 py-1 font-mono text-sm text-gray-300 backdrop-blur-sm shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset]">
//           qCMG2zRXxI5UPF
//         </div>

//         {/* Profile Card */}
//         <div className="relative flex flex-col items-center">

//           {/* Large Bottom Radial Glow */}
//           <div className="pointer-events-none absolute -bottom-56 h-[600px] w-[1200px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

//           {/* Avatar Card */}
//           <div className="relative h-32 w-24 rounded-md bg-gradient-to-b from-[#2A2B31] to-[#222329] shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_0_3px_rgba(20,21,25,0.9)] flex items-center justify-center">

//             {/* Minimal Silhouette */}
//             <svg
//               viewBox="0 0 80 96"
//               fill="none"
//               className="h-20 w-16"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path
//                 d="M26 78c3-4 2-18 2-18-2-4-3-7-3-9-4 0-4-8-4-10 0-2 2-2 3-2-1-4-1-10-1-12C23 24 31 18 40 18c9 0 17 6 17 9 0 2 0 8-1 12 1 0 3 0 3 2 0 2 0 10-4 10 0 2-1 5-3 9 0 0-1 14 2 18"
//                 className="stroke-[#3A3B42]"
//               />
//             </svg>
//           </div>

//           {/* Name */}
//           <div className="mt-10 text-xl font-semibold text-gray-200">
//             Luisa Combs
//           </div>

//           {/* Email */}
//           <div className="mt-3 font-mono text-lg text-gray-500">
//             l.combs@example.com
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   )
// }

// export function MyComponent() {
//   return (
//     <div className="border-b border-gray-950/5 dark:border-white/10">
//       <div className="sm:flex mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
//         <p className="flex-auto self-center py-8 text-center text-base/6 font-normal text-gray-950 dark:text-white sm:pr-10 sm:text-left xl:py-10">
//           Trusted by fast-growing companies around the world.
//         </p>
//         <ul role="list" className="-mx-6 grid flex-none grid-cols-2 dark:border-white/10 sm:mx-0 sm:border-l sm:border-gray-950/5 lg:flex">
//           <li className="relative isolate flex flex-none justify-center overflow-hidden border-t border-gray-950/5 dark:border-white/10 sm:border-t-0 border-r">
//             <div className="flex items-center justify-center py-3" style={{ mask: 'linear-gradient(to bottom, transparent calc(50% - 2.5rem), black calc(50% - 1rem), black calc(50% + 1rem), transparent calc(50% + 2.5rem))' }}>
//               <ul role="list" className="grid" style={{ transform: 'translateY(-300%)' }}>
//                 <li className="col-start-1 row-start-1 px-7 py-3 md:px-12 lg:px-6 xl:px-10" style={{ transform: 'translateY(0%)' }}>
//                   <Image alt="Browserbase" loading="lazy" width={144} height={32} decoding="async" data-nimg="1" className="w-32 dark:invert xl:w-36" style={{ color: 'transparent' }} src="/_next/static/media/browserbase.69f0a090.svg" />
//                 </li>
//                 <li className="col-start-1 row-start-1 px-7 py-3 md:px-12 lg:px-6 xl:px-10" style={{ transform: 'translateY(100%)' }}>
//                   <Image alt="Inngest" loading="lazy" width={144} height={32} decoding="async" data-nimg="1" className="w-32 dark:invert xl:w-36" style={{ color: 'transparent' }} src="/_next/static/media/inngest.b3e619be.svg" />
//                 </li>
//                 <li className="col-start-1 row-start-1 px-7 py-3 md:px-12 lg:px-6 xl:px-10" style={{ transform: 'translateY(200%)' }}>
//                   <Image alt="Profound" loading="lazy" width={144} height={32} decoding="async" data-nimg="1" className="w-32 dark:invert xl:w-36" style={{ color: 'transparent' }} src="/_next/static/media/profound.92e6bff8.svg" />
//                 </li>
//                 <li className="col-start-1 row-start-1 px-7 py-3 md:px-12 lg:px-6 xl:px-10" style={{ transform: 'translateY(300%)' }} inert>
//                   <Image alt="Browserbase" loading="lazy" width={144} height={32} decoding="async" data-nimg="1" className="w-32 dark:invert xl:w-36" style={{ color: 'transparent' }} src="/_next/static/media/browserbase.69f0a090.svg" />
//                 </li>
//               </ul>
//             </div>
//           </li>
//           <li className="relative isolate flex flex-none justify-center overflow-hidden border-t border-gray-950/5 dark:border-white/10 sm:border-t-0 sm:border-r">
//             <div className="flex items-center justify-center py-3" style={{ mask: 'linear-gradient(to bottom, transparent calc(50% - 2.5rem), black calc(50% - 1rem), black calc(50% + 1rem), transparent calc(50% + 2.5rem))' }}>
//               <ul role="list" className="grid" style={{ transform: 'translateY(-300%)' }}>
//                 <li className="col-start-1 row-start-1 px-7 py-3 md:px-12 lg:px-6 xl:px-10" style={{ transform: 'translateY(0%)' }}>
//                   <Image alt="Braintrust" loading="lazy" width={144} height={32} decoding="async" data-nimg="1" className="w-32 dark:invert xl:w-36" style={{ color: 'transparent' }} src="/_next/static/media/braintrust.66a7486a.svg" />
//                 </li>
//                 <li className="col-start-1 row-start-1 px-7 py-3 md:px-12 lg:px-6 xl:px-10" style={{ transform: 'translateY(100%)' }}>
//                   <Image alt="Durable" loading="lazy" width={144} height={32} decoding="async" data-nimg="1" className="w-32 dark:invert xl:w-36" style={{ color: 'transparent' }} src="/_next/static/media/durable.e4e40629.svg" />
//                 </li>
//                 <li className="col-start-1 row-start-1 px-7 py-3 md:px-12 lg:px-6 xl:px-10" style={{ transform: 'translateY(200%)' }}>
//                   <Image alt="OpenRouter" loading="lazy" width={144} height={32} decoding="async" data-nimg="1" className="w-32 dark:invert xl:w-36" style={{ color: 'transparent' }} src="/_next/static/media/open-router.bcb01312.svg" />
//                 </li>
//                 <li className="col-start-1 row-start-1 px-7 py-3 md:px-12 lg:px-6 xl:px-10" style={{ transform: 'translateY(300%)' }} inert>
//                   <Image alt="Braintrust" loading="lazy" width={144} height={32} decoding="async" data-nimg="1" className="w-32 dark:invert xl:w-36" style={{ color: 'transparent' }} src="/_next/static/media/braintrust.66a7486a.svg" />
//                 </li>
//               </ul>
//             </div>
//           </li>
//           <li className="relative isolate flex flex-none justify-center overflow-hidden border-t border-gray-950/5 dark:border-white/10 lg:border-t-0 border-r">
//             <div className="flex items-center justify-center py-3" style={{ mask: 'linear-gradient(to bottom, transparent calc(50% - 2.5rem), black calc(50% - 1rem), black calc(50% + 1rem), transparent calc(50% + 2.5rem))' }}>
//               <ul role="list" className="grid" style={{ transform: 'translateY(-300%)' }}>
//                 <li className="col-start-1 row-start-1 px-7 py-3 md:px-12 lg:px-6 xl:px-10" style={{ transform: 'translateY(0%)' }}>
//                   <Image alt="Higgsfield" loading="lazy" width={144} height={32} decoding="async" data-nimg="1" className="w-32 dark:invert xl:w-36" style={{ color: 'transparent' }} src="/_next/static/media/higgsfield.2cfcda68.svg" />
//                 </li>
//                 <li className="col-start-1 row-start-1 px-7 py-3 md:px-12 lg:px-6 xl:px-10" style={{ transform: 'translateY(100%)' }}>
//                   <Image alt="Upstash" loading="lazy" width={144} height={32} decoding="async" data-nimg="1" className="w-32 dark:invert xl:w-36" style={{ color: 'transparent' }} src="/_next/static/media/upstash.0d1f9469.svg" />
//                 </li>
//                 <li className="col-start-1 row-start-1 px-7 py-3 md:px-12 lg:px-6 xl:px-10" style={{ transform: 'translateY(200%)' }}>
//                   <Image alt="Samaya AI" loading="lazy" width={144} height={32} decoding="async" data-nimg="1" className="w-32 dark:invert xl:w-36" style={{ color: 'transparent' }} src="/_next/static/media/samaya.25182e45.svg" />
//                 </li>
//                 <li className="col-start-1 row-start-1 px-7 py-3 md:px-12 lg:px-6 xl:px-10" style={{ transform: 'translateY(300%)' }} inert>
//                   <Image alt="Higgsfield" loading="lazy" width={144} height={32} decoding="async" data-nimg="1" className="w-32 dark:invert xl:w-36" style={{ color: 'transparent' }} src="/_next/static/media/higgsfield.2cfcda68.svg" />
//                 </li>
//               </ul>
//             </div>
//           </li>
//           <li className="relative isolate flex flex-none justify-center overflow-hidden border-t border-gray-950/5 dark:border-white/10 lg:border-t-0 sm:border-r">
//             <div className="flex items-center justify-center py-3" style={{ mask: 'linear-gradient(to bottom, transparent calc(50% - 2.5rem), black calc(50% - 1rem), black calc(50% + 1rem), transparent calc(50% + 2.5rem))' }}>
//               <ul role="list" className="grid" style={{ transform: 'translateY(-300%)' }}>
//                 <li className="col-start-1 row-start-1 px-7 py-3 md:px-12 lg:px-6 xl:px-10" style={{ transform: 'translateY(0%)' }}>
//                   <Image alt="Consensus" loading="lazy" width={144} height={32} decoding="async" data-nimg="1" className="w-32 dark:invert xl:w-36" style={{ color: 'transparent' }} src="/_next/static/media/consensus.f2ef2982.svg" />
//                 </li>
//                 <li className="col-start-1 row-start-1 px-7 py-3 md:px-12 lg:px-6 xl:px-10" style={{ transform: 'translateY(100%)' }}>
//                   <Image alt="Cartesia" loading="lazy" width={144} height={32} decoding="async" data-nimg="1" className="w-32 dark:invert xl:w-36" style={{ color: 'transparent' }} src="/_next/static/media/cartesia.db0799e7.svg" />
//                 </li>
//                 <li className="col-start-1 row-start-1 px-7 py-3 md:px-12 lg:px-6 xl:px-10" style={{ transform: 'translateY(200%)' }}>
//                   <Image alt="David AI" loading="lazy" width={144} height={32} decoding="async" data-nimg="1" className="w-32 dark:invert xl:w-36" style={{ color: 'transparent' }} src="/_next/static/media/david-ai.d32408d8.svg" />
//                 </li>
//                 <li className="col-start-1 row-start-1 px-7 py-3 md:px-12 lg:px-6 xl:px-10" style={{ transform: 'translateY(300%)' }} inert>
//                   <Image alt="Consensus" loading="lazy" width={144} height={32} decoding="async" data-nimg="1" className="w-32 dark:invert xl:w-36" style={{ color: 'transparent' }} src="/_next/static/media/consensus.f2ef2982.svg" />
//                 </li>
//               </ul>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export function SocialSignOnComponent() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black p-8">
//       <div 
//         className="group isolate flex flex-col rounded-[16px] bg-[#15151a] overflow-hidden" 
//         style={{
//           width: '476px',
//           height: '260px',
//           boxShadow: 'rgba(255, 255, 255, 0.024) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.024) 0px 0px 0px 1px inset',
//           background: 'rgb(33, 33, 38)'
//         }}
//       >
//         {/* Bottom Text Content */}
//         <div className="relative z-10 flex-none px-6 order-last pb-6">
//           <h3 className="text-sm font-medium text-white">Social Sign-On</h3>
//           <p className="mt-2 text-pretty text-sm/5 text-gray-400">
//             Add high-conversion Social Sign-on (SSO) to your application in minutes. 20+ options and growing.
//           </p>
//         </div>

//         {/* Top Graphic Area */}
//         <div className="pointer-events-none relative flex-auto select-none" style={{ minHeight: '10.25rem' }} aria-hidden="true">
//           <div className="absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,white_60%,transparent)]">
            
//             {/* Background Connector Lines */}
//             <div className="relative mx-auto aspect-[98/192] w-[calc(98/16*1rem)]">
//               <svg viewBox="0 0 98 192" fill="none" aria-hidden="true" className="absolute inset-0 h-full w-full">
//                 <path 
//                   stroke="#fff" 
//                   strokeOpacity=".06" 
//                   d="M49 192V96.266a8 8 0 0 0-2.285-5.599L3.285 46.333A8 8 0 0 1 1 40.734V-28M49 93l45.715-46.667A8 8 0 0 0 97 40.734V-23"
//                 ></path>
//               </svg>
              
//               {/* Additional connector lines for visual density matching screenshot */}
//               <svg viewBox="0 0 400 200" className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px]" stroke="#fff" strokeOpacity=".06" fill="none">
//                 {/* Connection to GitHub/Google */}
//                 <path d="M200 100 L 150 60 L 100 60" strokeWidth="1" />
//                 {/* Connection to Notion */}
//                 <path d="M200 100 L 140 140" strokeWidth="1" />
//                 {/* Right side connections */}
//                 <path d="M200 100 L 250 140 L 300 140" strokeWidth="1" opacity="0" /> {/* Hidden but structural */}
//                 <path d="M200 100 L 280 60 L 340 60" strokeWidth="1" />
//                 <path d="M245 85 L 300 140" strokeWidth="0" />
//               </svg>
//             </div>

//             {/* Icons Layout */}
//             <div className="absolute inset-0">
              
//               {/* Left Side Icons */}
//               {/* Google - Far Left Top */}
//               <IconCircle x={30} y={30}>
//                 <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72 0-4.827 3.773-8.72 8.6-8.72 2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48Z"></path></svg>
//               </IconCircle>

//               {/* GitHub - Middle Left */}
//               <IconCircle x={105} y={30}>
//                 <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12Z"></path></svg>
//               </IconCircle>

//               {/* Notion - Bottom Left */}
//               <IconCircle x={150} y={105}>
//                 <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white"><path d="M4.458 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447Zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.328-.747.934Zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.821 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933l3.222-.188ZM1.935 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.25 2.986c.7.513.933.653.933 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632Z"></path></svg>
//               </IconCircle>

//               {/* Right Side Icons */}
//               {/* Atlassian - Mid Right */}
//               <IconCircle x={335} y={100}>
//                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white"><path d="M7.526 11.16a.626.626 0 0 0-1.063.116L1.068 22.06a.645.645 0 0 0 .578.933h7.507a.621.621 0 0 0 .578-.358c1.62-3.346.638-8.436-2.206-11.476l.001.002Zm3.955-9.806a14.222 14.222 0 0 0-.83 14.04l3.62 7.242a.644.644 0 0 0 .576.356h7.507a.645.645 0 0 0 .578-.932L12.577 1.348a.61.61 0 0 0-1.096.006Z"></path></svg>
//               </IconCircle>

//               {/* Dropbox - Top Right */}
//               <IconCircle x={382} y={30}>
//                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white"><path d="M6 1.807 0 5.629l6 3.822 6.001-3.822L6 1.807Zm12 0-6 3.822 6 3.822 6-3.822-6-3.822ZM0 13.274l6 3.822 6.001-3.822L6 9.451l-6 3.823Zm18-3.823-6 3.823 6 3.822 6-3.822-6-3.823Zm-12 8.92 6.001 3.822 6-3.822-6-3.822L6 18.371Z"></path></svg>
//               </IconCircle>

//               {/* X - Far Right */}
//               <IconCircle x={460} y={30}>
//                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white"><path d="M17.521 3.325h2.944l-6.432 7.352L21.6 20.679h-5.924l-4.64-6.067-5.31 6.067H2.78l6.88-7.864-7.26-9.49h6.076l4.194 5.546 4.851-5.546Zm-1.033 15.593h1.632L7.59 4.995H5.838l10.65 13.923Z"></path></svg>
//               </IconCircle>
//             </div>
//           </div>

//           {/* Central Cloud Icon Container */}
//           <div className="absolute left-1/2 top-0 -ml-8 pt-[calc(60/16*1rem)]">
//             <div 
//               className="relative mx-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-sm bg-[#1e1e24] bg-gradient-to-br from-white/5 to-[64%]" 
//               style={{
//                 boxShadow: '0 1px 1px rgba(255, 255, 255, 0.05) inset, 0 2px 13px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.2), 0 0 0 3px rgba(19, 19, 22, 0.5)'
//               }}
//             >
//               <div 
//                 className="absolute inset-0" 
//                 style={{
//                   backgroundImage: 'radial-gradient(111.72% 100% at 50% 0%, rgba(118, 237, 255, 0.2), rgba(118, 237, 255, 0) 53.91%)',
//                   opacity: 1
//                 }}
//               ></div>
              
//               <div className="relative">
//                 <svg viewBox="0 0 34 23" fill="none" aria-hidden="true" className="w-[calc(34/16*1rem)] overflow-visible">
//                   <defs>
//                     <linearGradient id="cloud-grad" x1="17" x2="17" y1="0" y2="15.5" gradientUnits="userSpaceOnUse">
//                       <stop offset=".529" stopColor="#5DE3FF"></stop>
//                       <stop offset="1" stopColor="#5DE3FF" stopOpacity="0"></stop>
//                     </linearGradient>
//                     <filter id="cloud-glow" width="52" height="41" x="-9" y="-9" filterUnits="userSpaceOnUse">
//                       <feGaussianBlur stdDeviation="4" result="blur" />
//                       <feFlood floodColor="#5DE3FF" floodOpacity="0.4" result="color" />
//                       <feComposite in="color" in2="blur" operator="in" />
//                       <feMerge>
//                         <feMergeNode />
//                         <feMergeNode in="SourceGraphic" />
//                       </feMerge>
//                     </filter>
//                   </defs>
//                   <path 
//                     fill="#5DE3FF" 
//                     filter="url(#cloud-glow)"
//                     d="M26.008 22.984a.008.008 0 0 0-.008.008.008.008 0 0 1-.008.008H8.008A.008.008 0 0 1 8 22.992a.008.008 0 0 0-.009-.008 7.5 7.5 0 1 1 0-14.968A.008.008 0 0 0 8 8.008C8 8.004 8.003 8 8.008 8h.02a.03.03 0 0 0 .03-.026 9.001 9.001 0 0 1 17.884 0 .029.029 0 0 0 .029.026h.02c.005 0 .009.004.009.008 0 .005.004.008.008.008a7.5 7.5 0 1 1 0 14.968Z"
//                   />
//                   <path 
//                     fill="url(#cloud-grad)" 
//                     style={{ mixBlendMode: 'overlay' }}
//                     d="M26.008 22.984a.008.008 0 0 0-.008.008.008.008 0 0 1-.008.008H8.008A.008.008 0 0 1 8 22.992a.008.008 0 0 0-.009-.008 7.5 7.5 0 1 1 0-14.968A.008.008 0 0 0 8 8.008C8 8.004 8.003 8 8.008 8h.02a.03.03 0 0 0 .03-.026 9.001 9.001 0 0 1 17.884 0 .029.029 0 0 0 .029.026h.02c.005 0 .009.004.009.008 0 .005.004.008.008.008a7.5 7.5 0 1 1 0 14.968Z"
//                   />
//                 </svg>
//               </div>

//               {/* Subtle shine overlay */}
//               <div 
//                 className="absolute -inset-4 bg-gradient-to-br from-white/0 from-[35%] via-white/10 to-white/0 to-[65%] mix-blend-overlay"
//                 style={{ transform: 'translate(0rem, 0rem)' }}
//               ></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /**
//  * IconCircle: Reusable component for social icons in the background
//  */
// function IconCircle({ x, y, children }: { x: number; y: number; children: React.ReactNode }) {
//   return (
//     <div 
//       className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-[#1e1e24] bg-gradient-to-b from-white/5 to-[67%] shadow-sm" 
//       style={{ 
//         left: 0,
//         top: 0,
//         transform: `translate(${x - 20}px, ${y}px)`,
//         boxShadow: '0 0 0 1px rgba(255,255,255,0.05), 0 2px 4px rgba(0,0,0,0.3)'
//       }}
//     >
//       <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//       <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//       {children}
//     </div>
//   );
// }

// export function SocialSignOnComponentNew() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black p-4">
//       <div 
//         className="group isolate flex flex-col rounded-[16px] bg-[#212126] overflow-hidden"
//         style={{
//           width: '476px',
//           height: '260px',
//           boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.024), inset 0 0 0 1px rgba(255, 255, 255, 0.024)'
//         }}
//       >
//         <div className="relative z-10 flex-none px-6 order-last pb-6">
//           <h3 className="text-sm font-medium text-white">Social Sign-On</h3>
//           <p className="mt-2 text-pretty text-sm/5 text-gray-400">
//             Add high-conversion Social Sign-on (SSO) to your application in minutes. 20+ options and growing.
//           </p>
//         </div>

//         <div className="pointer-events-none relative flex-auto select-none" style={{ minHeight: '10.25rem' }} aria-hidden="true">
//           <div className="absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,white_60%,transparent)]">
//             <div className="relative mx-auto aspect-[98/192] w-[calc(98/16*1rem)]">
//               <svg viewBox="0 0 98 192" fill="none" aria-hidden="true" className="absolute inset-0 h-full w-full">
//                 <path 
//                   stroke="#fff" 
//                   strokeOpacity=".06" 
//                   d="M49 192V96.266a8 8 0 0 0-2.285-5.599L3.285 46.333A8 8 0 0 1 1 40.734V-28M49 93l45.715-46.667A8 8 0 0 0 97 40.734V-23"
//                 ></path>
//               </svg>
//             </div>

//             {/* Left Side Icons Container */}
//             <div className="absolute right-1/2 top-6 mr-[calc(76/16*1rem)]">
//               <div className="relative h-[15.5rem] w-[15.5rem]">
//                 <svg viewBox="0 0 109 216" fill="none" className="absolute right-[1.125rem] top-[1.125rem] h-[13.5rem] w-[6.8125rem] overflow-visible" aria-hidden="true">
//                   <g filter="url(#social-background-filter)">
//                     <path fill="#fff" fillOpacity=".02" d="M 104.715 48.667 L 61.353 4.402 A 8 8 0 0 0 55.638 2 H -100 a 8 8 0 0 0 -8 8 V 206 a 8 8 0 0 0 8 8 H 99 A 8 8 0 0 0 107 206 V 54.266 C 107 52.172 106.18 50.163 104.715 48.667 Z" shapeRendering="crispEdges"></path>
//                     <path stroke="#fff" strokeOpacity=".05" d="M 60.996 4.752 L 104.358 49.017 A 7.5 7.5 0 0 1 106.5 54.265 V 206 A 7.5 7.5 0 0 1 99 213.5 H -100 a 7.5 7.5 0 0 1 -7.5 -7.5 V 10 a 7.5 7.5 0 0 1 7.5 -7.5 H 55.638 A 7.5 7.5 0 0 1 60.996 4.752 Z" shapeRendering="crispEdges"></path>
//                   </g>
//                   <defs>
//                     <filter id="social-background-filter" width="219" height="216" x="-110" y="0" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
//                       <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//                       <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//                       <feOffset></feOffset>
//                       <feGaussianBlur stdDeviation="1"></feGaussianBlur>
//                       <feComposite in2="hardAlpha" operator="out"></feComposite>
//                       <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
//                       <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1860_5760"></feBlend>
//                       <feBlend in="SourceGraphic" in2="effect1_dropShadow_1860_5760" result="shape"></feBlend>
//                     </filter>
//                   </defs>
//                 </svg>

//                 <div style={{ opacity: 0.7 }}>
//                   {/* Discord */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(-1.5rem, 0rem)' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
//                       <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037c-1.687.29-3.33.8-4.885 1.515a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.083.083 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.077.077 0 0 0 .084-.028c.462-.63.874-1.295 1.227-1.994a.076.076 0 0 0-.042-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.291.075.075 0 0 1 .077-.011c3.928 1.793 8.18 1.793 12.062 0a.073.073 0 0 1 .078.01c.12.098.246.198.373.292a.076.076 0 0 1 .03.065.078.078 0 0 1-.036.063c-.599.349-1.225.647-1.873.89a.076.076 0 0 0-.05.076c.001.012.004.022.009.032.36.698.772 1.362 1.225 1.993a.077.077 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.029.079.079 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03ZM8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z"></path>
//                     </svg>
//                   </div>
//                   {/* Google */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(5rem, 0rem)' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
//                       <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72 0-4.827 3.773-8.72 8.6-8.72 2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48Z"></path>
//                     </svg>
//                   </div>
//                   {/* GitHub */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(10rem, 0rem)' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
//                       <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12Z"></path>
//                     </svg>
//                   </div>
//                   {/* Notion */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(calc(10rem + 3rem), 3rem)' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
//                       <path d="M4.458 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447Zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.328-.747.934Zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.821 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933l3.222-.188ZM1.935 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.25 2.986c.7.513.933.653.933 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632Z"></path>
//                     </svg>
//                   </div>
//                   {/* Apple */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(calc(10rem + 3rem), calc(10rem + 3rem))' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
//                       <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.83 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.04-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.43-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.091-4.61 1.091ZM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"></path>
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Side Icons Container (Mirrored) */}
//             <div className="absolute left-1/2 top-6 ml-[calc(76/16*1rem)] -scale-x-100">
//               <div className="relative h-[15.5rem] w-[15.5rem]">
//                 <svg viewBox="0 0 109 216" fill="none" className="absolute right-[1.125rem] top-[1.125rem] h-[13.5rem] w-[6.8125rem] overflow-visible" aria-hidden="true">
//                   <g filter="url(#social-background-filter)">
//                     <path fill="#fff" fillOpacity=".02" d="M 104.715 48.667 L 61.353 4.402 A 8 8 0 0 0 55.638 2 H -100 a 8 8 0 0 0 -8 8 V 206 a 8 8 0 0 0 8 8 H 99 A 8 8 0 0 0 107 206 V 54.266 C 107 52.172 106.18 50.163 104.715 48.667 Z" shapeRendering="crispEdges"></path>
//                     <path stroke="#fff" strokeOpacity=".05" d="M 60.996 4.752 L 104.358 49.017 A 7.5 7.5 0 0 1 106.5 54.265 V 206 A 7.5 7.5 0 0 1 99 213.5 H -100 a 7.5 7.5 0 0 1 -7.5 -7.5 V 10 a 7.5 7.5 0 0 1 7.5 -7.5 H 55.638 A 7.5 7.5 0 0 1 60.996 4.752 Z" shapeRendering="crispEdges"></path>
//                   </g>
//                 </svg>
//                 <div style={{ opacity: 0.7 }}>
//                   {/* LinkedIn */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(calc(10rem + 3rem), calc(10rem + 3rem))' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white -scale-x-100" aria-hidden="true">
//                       <path d="M19.04 19.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531-1.544 0-1.78 1.204-1.78 2.449v4.722H9.793V9.5h2.845v1.3h.038c.397-.75 1.364-1.54 2.808-1.54 3.001 0 3.556 1.974 3.556 4.545v5.238ZM6.447 8.194c-.954 0-1.72-.772-1.72-1.72a1.72 1.72 0 1 1 1.72 1.72Zm1.484 10.85h-2.97V9.5h2.97v9.543ZM20.521 2H3.476C2.66 2 2 2.645 2 3.44v17.12c0 .796.66 1.44 1.476 1.44h17.042c.815 0 1.482-.644 1.482-1.44V3.44C22 2.646 21.333 2 20.518 2h.003Z"></path>
//                     </svg>
//                   </div>
//                   {/* Windows / Microsoft */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(calc(10rem + 3rem), calc(5rem + 5rem))' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white -scale-x-100" aria-hidden="true">
//                       <path d="M2 2v9.507h9.507V2H2Zm10.495 0v9.507H22V2h-9.505ZM2 12.495V22h9.507v-9.505H2Zm10.495 0V22H22v-9.505h-9.505Z"></path>
//                     </svg>
//                   </div>
//                   {/* Atlassian */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(calc(10rem + 3rem), 3rem)' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white -scale-x-100" aria-hidden="true">
//                       <path d="M7.526 11.16a.626.626 0 0 0-1.063.116L1.068 22.06a.645.645 0 0 0 .578.933h7.507a.621.621 0 0 0 .578-.358c1.62-3.346.638-8.436-2.206-11.476l.001.002Zm3.955-9.806a14.222 14.222 0 0 0-.83 14.04l3.62 7.242a.644.644 0 0 0 .576.356h7.507a.645.645 0 0 0 .578-.932L12.577 1.348a.61.61 0 0 0-1.096.006Z"></path>
//                     </svg>
//                   </div>
//                   {/* Dropbox */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(10rem, 0rem)' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white -scale-x-100" aria-hidden="true">
//                       <path d="M6 1.807 0 5.629l6 3.822 6.001-3.822L6 1.807Zm12 0-6 3.822 6 3.822 6-3.822-6-3.822ZM0 13.274l6 3.822 6.001-3.822L6 9.451l-6 3.823Zm18-3.823-6 3.823 6 3.822 6-3.822-6-3.823Zm-12 8.92 6.001 3.822 6-3.822-6-3.822L6 18.371Z"></path>
//                     </svg>
//                   </div>
//                   {/* X / Twitter */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(5rem, 0rem)' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white -scale-x-100" aria-hidden="true">
//                       <path d="M17.521 3.325h2.944l-6.432 7.352L21.6 20.679h-5.924l-4.64-6.067-5.31 6.067H2.78l6.88-7.864-7.26-9.49h6.076l4.194 5.546 4.851-5.546Zm-1.033 15.593h1.632L7.59 4.995H5.838l10.65 13.923Z"></path>
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Central Cloud Box */}
//             <div className="absolute left-1/2 top-0 ml-[calc(-98/2/16*1rem)] aspect-[98/192] w-[calc(98/16*1rem)] pt-[calc(60/16*1rem)]">
//               <div 
//                 className="relative mx-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-sm bg-gray-800 bg-gradient-to-br from-white/5 to-[64%]"
//                 style={{
//                   boxShadow: '0 1px 1px rgba(255, 255, 255, 0.05) inset, 0 2px 13px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.2), 0 0 0 3px rgba(19, 19, 22, 0.5)'
//                 }}
//               >
//                 <div className="relative">
//                   <svg viewBox="0 0 34 23" fill="none" aria-hidden="true" className="w-[calc(34/16*1rem)] overflow-visible">
//                     <g filter="url(#social-cloud-filter0)">
//                       <path fill="#212126" d="M26.008 22.984a.008.008 0 0 0-.008.008.008.008 0 0 1-.008.008H8.008A.008.008 0 0 1 8 22.992a.008.008 0 0 0-.009-.008 7.5 7.5 0 1 1 0-14.968A.008.008 0 0 0 8 8.008C8 8.004 8.003 8 8.008 8h.02a.03.03 0 0 0 .03-.026 9.001 9.001 0 0 1 17.884 0 .029.029 0 0 0 .029.026h.02c.005 0 .009.004.009.008 0 .005.004.008.008.008a7.5 7.5 0 1 1 0 14.968Z"></path>
//                     </g>
//                     <defs>
//                       <filter id="social-cloud-filter0" width="34" height="25" x="0" y="0" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
//                         <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//                         <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//                         <feOffset dy="1"></feOffset>
//                         <feComposite in2="hardAlpha" operator="out"></feComposite>
//                         <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.06 0"></feColorMatrix>
//                         <feBlend in2="BackgroundImageFix" mode="color-dodge" result="effect1_dropShadow_228_61"></feBlend>
//                         <feBlend in="SourceGraphic" in2="effect1_dropShadow_228_61" result="shape"></feBlend>
//                         <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//                         <feOffset dy="2"></feOffset>
//                         <feGaussianBlur stdDeviation="2.5"></feGaussianBlur>
//                         <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
//                         <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
//                         <feBlend in2="shape" result="effect2_innerShadow_228_61"></feBlend>
//                       </filter>
//                     </defs>
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function SessionManagementComponent() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black p-8">
//       <div className="group isolate flex flex-col rounded-2xl bg-[#212126] shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.025] overflow-hidden w-[476px] h-[528px] relative">
//         {/* Header Section */}
//         <div className="relative z-10 flex-none px-6 pt-6">
//           <h3 className="text-sm font-medium text-white">Session Management</h3>
//           <p className="mt-2 text-pretty text-sm/5 text-gray-400">
//             Clerk manages the full session lifecycle, including critical security
//             functionality like active device monitoring and session revocation.
//           </p>
//         </div>

//         {/* Animation/Graphic Area */}
//         <div className="pointer-events-none relative flex-auto select-none" style={{ minHeight: '10.25rem' }} aria-hidden="true">
//           <div className="relative flex h-full flex-col items-center justify-center">
            
//             {/* Top Connector Line SVG */}
//             <div className="absolute left-1/2 top-[1.875rem] ml-[-18.75rem] aspect-[600/87] w-[37.5rem]">
//               <svg viewBox="0 0 600 87" fill="none" aria-hidden="true" className="absolute inset-0 size-full stroke-white/5">
//                 <path d="M0 86h136.686a8 8 0 0 0 5.657-2.343l80.314-80.314A8 8 0 0 1 228.314 1h143.372a8 8 0 0 1 5.657 2.343l80.314 80.314A8 8 0 0 0 463.314 86H600"></path>
//               </svg>
//             </div>

//             {/* Left Background "Wing" SVG */}
//             <svg viewBox="0 0 208 248" fill="none" aria-hidden="true" className="absolute right-full top-[7.625rem] mr-1.5 w-52 -scale-x-100">
//               <g filter="url(#filter0_bd_29_5466)" shapeRendering="crispEdges">
//                 <path fill="#fff" fillOpacity=".04" d="M4.229 24.678 23.639 4.46A8 8 0 0 1 29.409 2H198a8 8 0 0 1 8 8v228a8 8 0 0 1-8 8H10a8 8 0 0 1-8-8V30.219a8 8 0 0 1 2.229-5.54Z"></path>
//                 <path stroke="#fff" strokeOpacity=".05" d="M24 4.806 4.59 25.024a7.5 7.5 0 0 0-2.09 5.194V238a7.5 7.5 0 0 0 7.5 7.5h188a7.5 7.5 0 0 0 7.5-7.5V10a7.5 7.5 0 0 0-7.5-7.5H29.41A7.5 7.5 0 0 0 24 4.806Z"></path>
//               </g>
//               <defs>
//                 <filter id="filter0_bd_29_5466" width="220" height="260" x="-6" y="-6" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
//                   <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//                   <feGaussianBlur in="BackgroundImageFix" stdDeviation="4"></feGaussianBlur>
//                   <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_29_5466"></feComposite>
//                   <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//                   <feOffset></feOffset>
//                   <feGaussianBlur stdDeviation="1"></feGaussianBlur>
//                   <feComposite in2="hardAlpha" operator="out"></feComposite>
//                   <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
//                   <feBlend in2="effect1_backgroundBlur_29_5466" result="effect2_dropShadow_29_5466"></feBlend>
//                   <feBlend in="SourceGraphic" in2="effect2_dropShadow_29_5466" result="shape"></feBlend>
//                 </filter>
//               </defs>
//             </svg>

//             {/* Right Background "Wing" SVG */}
//             <svg viewBox="0 0 208 248" fill="none" aria-hidden="true" className="absolute left-full top-[7.625rem] ml-1.5 w-52">
//               <g filter="url(#filter0_bd_29_5466)" shapeRendering="crispEdges">
//                 <path fill="#fff" fillOpacity=".04" d="M4.229 24.678 23.639 4.46A8 8 0 0 1 29.409 2H198a8 8 0 0 1 8 8v228a8 8 0 0 1-8 8H10a8 8 0 0 1-8-8V30.219a8 8 0 0 1 2.229-5.54Z"></path>
//                 <path stroke="#fff" strokeOpacity=".05" d="M24 4.806 4.59 25.024a7.5 7.5 0 0 0-2.09 5.194V238a7.5 7.5 0 0 0 7.5 7.5h188a7.5 7.5 0 0 0 7.5-7.5V10a7.5 7.5 0 0 0-7.5-7.5H29.41A7.5 7.5 0 0 0 24 4.806Z"></path>
//               </g>
//             </svg>

//             {/* Central Card */}
//             <div className="relative">
//               <div className="relative z-10 mx-auto mt-12 w-64 rounded-lg bg-gray-500/5 bg-gradient-to-br from-white/5 to-65% px-6 pb-6 pt-14 text-[0.625rem]/[1.125rem] shadow-[0_1px_1px_rgba(255,255,255,0.05)_inset,0_2px_13px_rgba(0,0,0,0.2),0_1px_2px_rgba(0,0,0,0.2)] backdrop-blur-sm">
                
//                 {/* Laptop Graphic */}
//                 <div className="relative isolate z-20 mx-auto flex justify-center">
//                   <div className="relative isolate [perspective:1000px]">
//                     <div 
//                       className="[--screen-off-color:theme(colors.gray.900)] [--screen-on-color:theme(colors.gray.600)] absolute bottom-[calc(100%-0.0625rem)] left-1/2 flex h-[4.25rem] w-[6.5rem] origin-bottom items-center justify-center rounded-t border border-gray-600 shadow-[inset_0_0_0_2px_theme(colors.black/75%)] [transform-style:preserve-3d] before:absolute before:inset-[-0.0625rem] before:z-10 before:rounded-[inherit] before:bg-gradient-to-b before:from-black/40 before:from-[0.0625rem] before:to-black/80 before:transition-opacity before:duration-1000 before:group-hover:opacity-0 before:group-hover:duration-500 after:absolute after:inset-x-[-1px] after:top-0 after:-z-10 after:h-[0.125rem] after:rounded-t-full after:bg-gray-500 after:[transform:rotateX(90deg)_translateY(-1px)] [perspective:60px]"
//                       style={{ transform: 'rotateX(-75deg) translateX(-50%)', background: 'var(--screen-on-color)' }}
//                     >
//                       <div className="absolute inset-x-0 top-0.5 h-5 origin-top bg-gradient-to-b from-white/15 to-transparent blur-sm" style={{ transform: 'rotateX(90deg)' }}></div>
//                       <div className="absolute inset-0 z-30 overflow-hidden rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:duration-1000">
//                         <div className="absolute size-[125%] -translate-x-10 -translate-y-1/2 -rotate-45 bg-gradient-to-l from-white/[0.08]"></div>
//                       </div>
//                     </div>
//                     {/* Laptop Base */}
//                     <div className="relative h-[0.375rem] w-[7.25rem] rounded-b-md rounded-t-sm bg-gradient-to-b from-gray-600 from-65% to-gray-700 shadow-[inset_0_1px_0px] shadow-white/10 before:absolute before:left-1/2 before:top-0 before:h-[0.125rem] before:w-[1.25rem] before:-translate-x-1/2 before:rounded-b-full before:bg-gray-700 before:shadow-[inset_2px_0_1px_-2px_theme(colors.black/50%),inset_-2px_0_1px_-2px_theme(colors.black/50%),0_1px_0_theme(colors.white/10%)]"></div>
//                   </div>
//                 </div>

//                 {/* Device Info List */}
//                 <div className="mt-6 flex py-1.5 items-center justify-center">
//                   <div className="w-14 flex-none text-gray-400 text-center">Device</div>
//                 </div>
//                 <div className="flex border-t border-white/5 py-1.5 items-center justify-center">
//                   <div className="w-14 flex-none text-gray-400 text-center">Browser</div>
//                 </div>
//                 <div className="flex border-t border-white/5 py-1.5 items-center justify-center">
//                   <div className="w-14 flex-none text-gray-400 text-center">Location</div>
//                 </div>

//                 {/* Button */}
//                 <div className="mt-6 rounded-md p-1 text-center font-medium text-gray-600 ring-1 ring-inset ring-[#2a2a2e] transition duration-1000 group-hover:text-white group-hover:ring-gray-700 cursor-default">
//                   Sign out device
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Radial Shadow Overlay */}
//         <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(97.14%_100%_at_top,rgba(33,33,38,0)_42.04%,#212126_89.82%)]"></div>
//       </div>
//     </div>
//   );
// }

// export function MFAComponent() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-[#0a0a0c] p-8">
//       <div 
//         className="group isolate flex flex-col rounded-[16px] bg-[#212126] shadow-[inset_0_1px_rgba(255,255,255,0.024),inset_0_0_0_1px_rgba(255,255,255,0.024)] overflow-hidden" 
//         style={{ width: '476px', height: '260px' }}
//       >
//         <div className="relative z-10 flex-none px-6 order-last pb-6">
//           <h3 className="text-[14px] font-medium leading-normal text-white">
//             Multifactor Authentication
//           </h3>
//           <p className="mt-2 text-pretty text-[14px] leading-[20px] text-[#9ca3af]">
//             Each user's self-serve multifactor settings are enforced automatically during sign-in.
//           </p>
//         </div>

//         <div className="pointer-events-none relative flex-auto select-none" style={{ minHeight: '10.25rem' }} aria-hidden="true">
//           <div className="isolate flex h-full items-center justify-center">
//             <div className="relative">
//               <div className="flex gap-3">
//                 {[...Array(6)].map((_, i) => (
//                   <div 
//                     key={i}
//                     data-num="true" 
//                     className="flex h-10 w-8 items-center justify-center overflow-hidden rounded-md bg-[#030712]" 
//                     style={{ 
//                       boxShadow: '0 10px 19px 4px rgb(0 0 0 / 0.16), 0 -10px 16px -4px rgb(255 255 255 / 0.04), 0 0 0 1px rgb(255 255 255 / 0.01), 0 1px 0 0 rgb(255 255 255 / 0.02)' 
//                     }}
//                   >
//                     <div 
//                       data-dot="true" 
//                       className="z-10 h-2 w-2 rounded-full bg-white" 
//                       style={{ 
//                         boxShadow: '0 0 3px 1px rgb(0 0 0 / 0.3)', 
//                         opacity: 0 
//                       }}
//                     ></div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function FraudPreventionComponent() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black p-8">
//       <div className="group isolate flex flex-col rounded-2xl bg-[#212126] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.024),inset_0_0_0_1px_rgba(255,255,255,0.024)] overflow-hidden w-[476px] h-[528px]">
//         {/* Header Section */}
//         <div className="relative z-10 flex-none px-6 pt-6">
//           <h3 className="text-sm font-medium text-white">Fraud and Abuse Prevention</h3>
//           <p className="mt-2 text-pretty text-sm/5 text-gray-400">
//             Reduce fraudulent sign-ups and free trial abuse by blocking high-risk
//             disposable email domains and restricting the use of email
//             subaddresses with the “+” separator.
//           </p>
//         </div>

//         {/* Visual Content Section */}
//         <div className="pointer-events-none relative flex-auto select-none min-h-[10.25rem]" aria-hidden="true">
//           <div className="flex h-full items-center justify-center">
//             <div className="w-min">
//               {/* Notification Card */}
//               <div className="flex w-[304px] items-center gap-3.5 rounded-md bg-gray-800 bg-gradient-to-br from-white/5 to-65% p-3 ring-[0.25rem] ring-gray-950/50">
//                 <div style={{ transform: "none" }}>
//                   <svg viewBox="0 0 16 16" fill="none" className="size-4">
//                     <path
//                       stroke="url(#paint0_radial_27_5200)"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="1.25"
//                       d="M8 1.75v1.042m0 10.416v1.042m3.125-11.663-.521.902m-5.208 9.022-.521.902m8.537-8.538-.902.52m-9.02 5.21-.903.52M14.25 8h-1.042M2.792 8H1.75m11.662 3.125-.902-.52m-9.02-5.21-.903-.52m8.538 8.538-.52-.902m-5.21-9.022-.52-.902"
//                     />
//                     <defs>
//                       <radialGradient
//                         id="paint0_radial_27_5200"
//                         cx="0"
//                         cy="0"
//                         r="1"
//                         gradientTransform="rotate(102.529 4.047 5.711) scale(11.5244)"
//                         gradientUnits="userSpaceOnUse"
//                       >
//                         <stop stopColor="#fff" />
//                         <stop offset="1" stopColor="#fff" stopOpacity=".2" />
//                       </radialGradient>
//                     </defs>
//                   </svg>
//                 </div>
//                 <div className="font-mono text-[10px] leading-4 text-gray-500 transition duration-500 group-hover:text-white">
//                   Fraudulent sign-ups detected
//                 </div>
//                 <div className="ml-auto text-[0.625rem] leading-[1.125rem] text-gray-600">
//                   14:09
//                 </div>
//               </div>

//               {/* Connecting Path and Dots */}
//               <div className="relative pl-[2.875rem] pt-16">
//                 {/* SVG Connecting Line */}
//                 <div className="absolute left-[1.1875rem] top-0 -z-10 aspect-[39/393] w-[2.4375rem]">
//                   <svg viewBox="0 0 39 393" fill="none" className="absolute inset-0 size-full stroke-white/5">
//                     <path d="M2 0V34.6863C2 36.808 2.84285 38.8429 4.34315 40.3431L34.6569 70.6569C36.1571 72.1571 37 74.192 37 76.3137V393"></path>
//                   </svg>
//                 </div>

//                 {/* List of Blocked Indicators */}
//                 <div className="space-y-6">
//                   {[1, 2, 3, 4].map((i) => (
//                     <div key={i} className="flex items-start gap-4 text-[0.625rem] leading-[1.125rem]">
//                       <div className="relative mt-[0.0625rem] flex size-5 flex-none items-center justify-center rounded-full bg-gray-600/20">
//                         <div className="size-1 rounded-full bg-gray-600 shadow-[0_1px_rgba(255,255,255,0.1)_inset,0_1px_2px_rgba(0,0,0,0.25)]"></div>
//                         {/* Hidden Error/Blocked State Overlay (Matches HTML opacity: 0) */}
//                         <div
//                           className="absolute inset-0 flex items-center justify-center rounded-full bg-red-500"
//                           style={{ opacity: 0, transform: "scale(0.8)" }}
//                         >
//                           <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-4">
//                             <path
//                               stroke="#131316"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="1.25"
//                               d="m5 5 6 6M11 5l-6 6"
//                             />
//                           </svg>
//                         </div>
//                       </div>
//                       {/* Hidden Labels (Matches HTML opacity: 0) */}
//                       <div className="invisible">
//                         <div className="font-medium text-white" style={{ opacity: 0, filter: "blur(8px)" }}>
//                           bad_actor@email.com
//                         </div>
//                         <div className="text-gray-600" style={{ opacity: 0, transform: "translateY(0.5rem)" }}>
//                           Blocked Aug 4 at 14:09
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function SecurityComponent() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a] p-4">
//       <div className="group isolate flex h-[260px] w-[476px] flex-col overflow-hidden rounded-2xl bg-[#212126] shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.025]">
//         <div className="relative z-10 order-last flex-none px-6 pb-6">
//           <h3 className="text-sm font-medium text-white">Advanced security</h3>
//           <p className="mt-2 text-pretty text-sm/5 text-gray-400">
//             Clerk is SOC 2 type 2 compliant and CCPA compliant. We conduct
//             regular third-party audits and penetration tests.
//           </p>
//         </div>
//         <div
//           className="pointer-events-none relative isolate flex-auto select-none"
//           style={{ minHeight: "10.25rem" }}
//           aria-hidden="true"
//         >
//           <div className="absolute inset-0 -bottom-5 z-10 bg-[radial-gradient(50%_100%_at_top,transparent,rgba(17,24,39,0.68)_61.5%,rgb(33,33,38))]"></div>
//           <div className="absolute inset-x-0 top-full z-10 mt-5 h-12 bg-[#212126]"></div>
//           <div className="relative flex h-full items-center justify-center">
//             <div className="relative h-[4.5rem] w-[4.5rem]">
//               <div
//                 className="absolute right-full top-1/2 mr-12 mt-[calc(-280/2/16*1rem)]"
//                 style={{ transform: "translateX(5.1875rem)" }}
//               >
//                 <div className="relative aspect-[224/280] w-[calc(224/16*1rem)] -scale-x-100">
//                   <svg
//                     viewBox="0 0 224 280"
//                     height="280"
//                     fill="none"
//                     aria-hidden="true"
//                     className="absolute inset-0 h-full w-full overflow-visible"
//                   >
//                     <path
//                       fill="#fff"
//                       fillOpacity="0.05"
//                       d="M8 .25a8 8 0 0 0-8 8v91.704c0 2.258.954 4.411 2.628 5.927l10.744 9.738A7.998 7.998 0 0 1 16 121.546v36.408a7.998 7.998 0 0 1-2.628 5.927l-10.744 9.738A7.998 7.998 0 0 0 0 179.546v92.204a8 8 0 0 0 8 8h308a8 8 0 0 0 8-8V8.25a8 8 0 0 0-8-8H8Z"
//                     ></path>
//                     <path
//                       stroke="#fff"
//                       strokeOpacity="0.05"
//                       d="M.5 99.954V8.25A7.5 7.5 0 0 1 8 .75h308a7.5 7.5 0 0 1 7.5 7.5v263.5a7.5 7.5 0 0 1-7.5 7.5H8a7.5 7.5 0 0 1-7.5-7.5v-92.204a7.5 7.5 0 0 1 2.464-5.557l10.744-9.737a8.5 8.5 0 0 0 2.792-6.298v-36.408a8.5 8.5 0 0 0-2.792-6.298l-10.744-9.737A7.5 7.5 0 0 1 .5 99.954Z"
//                     ></path>
//                   </svg>
//                   <div className="absolute left-4 top-1/2 -mt-7 flex h-14 w-5 items-center overflow-hidden">
//                     <div className="-ml-4 h-10 w-5 rounded-[50%] bg-sky-300/20 blur"></div>
//                     <div className="absolute inset-y-4 left-0 w-px bg-gradient-to-t from-sky-300/0 via-sky-300/10 to-sky-300/0"></div>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className="absolute left-full top-1/2 ml-12 mt-[calc(-280/2/16*1rem)]"
//                 style={{ transform: "translateX(-5.1875rem)" }}
//               >
//                 <div className="relative aspect-[224/280] w-[calc(224/16*1rem)]">
//                   <svg
//                     viewBox="0 0 224 280"
//                     height="280"
//                     fill="none"
//                     aria-hidden="true"
//                     className="absolute inset-0 h-full w-full overflow-visible"
//                   >
//                     <path
//                       fill="#fff"
//                       fillOpacity="0.05"
//                       d="M8 .25a8 8 0 0 0-8 8v91.704c0 2.258.954 4.411 2.628 5.927l10.744 9.738A7.998 7.998 0 0 1 16 121.546v36.408a7.998 7.998 0 0 1-2.628 5.927l-10.744 9.738A7.998 7.998 0 0 0 0 179.546v92.204a8 8 0 0 0 8 8h308a8 8 0 0 0 8-8V8.25a8 8 0 0 0-8-8H8Z"
//                     ></path>
//                     <path
//                       stroke="#fff"
//                       strokeOpacity="0.05"
//                       d="M.5 99.954V8.25A7.5 7.5 0 0 1 8 .75h308a7.5 7.5 0 0 1 7.5 7.5v263.5a7.5 7.5 0 0 1-7.5 7.5H8a7.5 7.5 0 0 1-7.5-7.5v-92.204a7.5 7.5 0 0 1 2.464-5.557l10.744-9.737a8.5 8.5 0 0 0 2.792-6.298v-36.408a8.5 8.5 0 0 0-2.792-6.298l-10.744-9.737A7.5 7.5 0 0 1 .5 99.954Z"
//                     ></path>
//                   </svg>
//                   <div className="absolute left-4 top-1/2 -mt-7 flex h-14 w-5 items-center overflow-hidden">
//                     <div className="-ml-4 h-10 w-5 rounded-[50%] bg-sky-300/20 blur"></div>
//                     <div className="absolute inset-y-4 left-0 w-px bg-gradient-to-t from-sky-300/0 via-sky-300/10 to-sky-300/0"></div>
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute inset-0 z-10 rounded-full bg-black/60 shadow-[0_1px_rgba(255,255,255,0.03)]"></div>
//               <div className="absolute inset-1 z-10 rounded-full bg-[#2a2a30] bg-gradient-to-tr from-white/0 via-white/0 to-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.5)]"></div>
//               <div
//                 className="absolute inset-1 z-10 rounded-full bg-gradient-to-tr from-[#64E5FF]/20 via-[#64E5FF]/0 to-[#64E5FF]/0"
//                 style={{ opacity: 0 }}
//               ></div>
//               <div className="absolute inset-[calc(0.25rem+1px)] z-10 rounded-full bg-gradient-to-b from-[#25252b] to-[#1e1e24]"></div>
//               <svg
//                 viewBox="0 0 44 44"
//                 fill="none"
//                 aria-hidden="true"
//                 className="absolute left-1/2 top-1/2 z-10 h-11 w-11 -translate-x-1/2 -translate-y-1/2"
//               >
//                 <g filter="url(#_R_3qt78hinpfknnrdb_)">
//                   <path
//                     stroke="#000"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeOpacity=".25"
//                     strokeWidth="1.5"
//                     d="M32.147 27.52c0-5.471-4.543-9.908-10.147-9.908s-10.147 4.437-10.147 9.909c0 3.744 1.329 7.184 3.551 9.897a16.152 16.152 0 0 0 2.549 2.488m21.297-22.83C35.67 11.45 29.283 7.704 22 7.704c-7.283 0-13.67 3.746-17.25 9.372M34.176 5.785A25.735 25.735 0 0 0 22 2.75c-4.413 0-8.562 1.1-12.176 3.035M28.088 40.25c-6.322-.953-11.162-6.29-11.162-12.73 0-2.735 2.272-4.953 5.074-4.953s5.073 2.218 5.073 4.954c0 2.736 2.272 4.954 5.074 4.954s5.074-2.218 5.074-4.954c0-8.209-6.815-14.863-15.221-14.863-8.406 0-15.22 6.654-15.22 14.863 0 2.505.634 4.865 1.755 6.935M22 26.53c0 5.472 4.543 9.908 10.147 9.908.695 0 1.374-.068 2.03-.198"
//                   ></path>
//                 </g>
//                 <path
//                   stroke="#5DE3FF"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="1.5"
//                   pathLength="1"
//                   strokeDasharray="0 2"
//                   d="M39.25 17.076C35.67 11.45 29.283 7.704 22 7.704c-7.283 0-13.67 3.746-17.25 9.372"
//                   opacity="0"
//                 ></path>
//                 <path
//                   stroke="#5DE3FF"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="1.5"
//                   pathLength="1"
//                   strokeDasharray="0 2"
//                   d="M34.177 5.785A25.735 25.735 0 0 0 22.001 2.75c-4.413 0-8.562 1.1-12.177 3.035"
//                   opacity="0"
//                 ></path>
//                 <path
//                   stroke="#5DE3FF"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="1.5"
//                   pathLength="1"
//                   strokeDasharray="0 2"
//                   d="M32.148 27.52c0-5.471-4.543-9.908-10.147-9.908-5.605 0-10.148 4.437-10.148 9.909 0 3.744 1.33 7.184 3.552 9.897a16.152 16.152 0 0 0 2.548 2.488"
//                   opacity="0"
//                 ></path>
//                 <path
//                   stroke="#5DE3FF"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="1.5"
//                   pathLength="1"
//                   strokeDasharray="0 2"
//                   d="M22 26.53c0 5.472 4.543 9.908 10.147 9.908.695 0 1.374-.068 2.03-.198"
//                   opacity="0"
//                 ></path>
//                 <path
//                   stroke="#5DE3FF"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="1.5"
//                   pathLength="1"
//                   strokeDasharray="0 0.5 0 0.5 2"
//                   d="M28.088 40.25c-6.322-.953-11.162-6.29-11.162-12.73 0-2.735 2.272-4.953 5.074-4.953s5.073 2.218 5.073 4.954c0 2.736 2.272 4.954 5.074 4.954s5.074-2.218 5.074-4.954c0-8.209-6.815-14.863-15.221-14.863-8.406 0-15.22 6.654-15.22 14.863 0 2.505.634 4.865 1.755 6.935"
//                   opacity="0"
//                 ></path>
//                 <defs>
//                   <filter
//                     id="_R_3qt78hinpfknnrdb_"
//                     width="36"
//                     height="40"
//                     x="4"
//                     y="2"
//                     colorInterpolationFilters="sRGB"
//                     filterUnits="userSpaceOnUse"
//                   >
//                     <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//                     <feColorMatrix
//                       in="SourceAlpha"
//                       result="hardAlpha"
//                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                     ></feColorMatrix>
//                     <feOffset dy="1"></feOffset>
//                     <feComposite in2="hardAlpha" operator="out"></feComposite>
//                     <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.06 0"></feColorMatrix>
//                     <feBlend
//                       in2="BackgroundImageFix"
//                       mode="color-dodge"
//                       result="effect1_dropShadow_145_93"
//                     ></feBlend>
//                     <feBlend
//                       in="SourceGraphic"
//                       in2="effect1_dropShadow_145_93"
//                       result="shape"
//                     ></feBlend>
//                   </filter>
//                 </defs>
//               </svg>
//               <div className="absolute inset-1 z-10 rounded-full mix-blend-overlay [clip-path:circle(50%)]">
//                 <div
//                   className="absolute inset-0 bg-gradient-to-br from-white/0 from-[30%] via-sky-100/70 to-white/0 to-[70%]"
//                   style={{ transform: "translate(-2.75rem, -2.75rem)" }}
//                 ></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function SocialSignOnComponentAnimation() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black p-8">
//       <div className="group isolate flex flex-col rounded-2xl bg-[#212126] shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.025] overflow-hidden w-[476px] h-[260px]">
//         <div className="relative z-10 flex-none px-6 order-last pb-6">
//           <h3 className="text-sm font-medium text-white">Social Sign-On</h3>
//           <p className="mt-2 text-pretty text-sm/5 text-gray-400">
//             Add high-conversion Social Sign-on (SSO) to your application in minutes. 20+ options and growing.
//           </p>
//         </div>
        
//         <div className="pointer-events-none relative flex-auto select-none min-h-[10.25rem]" aria-hidden="true">
//           <div className="absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,white_60%,transparent)]">
//             <div className="relative mx-auto aspect-[98/192] w-[calc(98/16*1rem)]">
//               <svg viewBox="0 0 98 192" fill="none" aria-hidden="true" className="absolute inset-0 h-full w-full">
//                 <path stroke="#fff" strokeOpacity=".06" d="M49 192V96.266a8 8 0 0 0-2.285-5.599L3.285 46.333A8 8 0 0 1 1 40.734V-28M49 93l45.715-46.667A8 8 0 0 0 97 40.734V-23"></path>
//               </svg>
//             </div>

//             {/* Left Side Icons Group */}
//             <div className="absolute right-1/2 top-6 mr-[calc(76/16*1rem)]">
//               <div className="relative h-[15.5rem] w-[15.5rem]">
//                 <svg viewBox="0 0 109 216" fill="none" className="absolute right-[1.125rem] top-[1.125rem] h-[13.5rem] w-[6.8125rem] overflow-visible" aria-hidden="true">
//                   <g filter="url(#social-background-filter)">
//                     <path fill="#fff" fillOpacity=".02" d="M 104.715 48.667 L 61.353 4.402 A 8 8 0 0 0 55.638 2 H -100 a 8 8 0 0 0 -8 8 V 206 a 8 8 0 0 0 8 8 H 99 A 8 8 0 0 0 107 206 V 54.266 C 107 52.172 106.18 50.163 104.715 48.667 Z" shapeRendering="crispEdges"></path>
//                     <path stroke="#fff" strokeOpacity=".05" d="M 60.996 4.752 L 104.358 49.017 A 7.5 7.5 0 0 1 106.5 54.265 V 206 A 7.5 7.5 0 0 1 99 213.5 H -100 a 7.5 7.5 0 0 1 -7.5 -7.5 V 10 a 7.5 7.5 0 0 1 7.5 -7.5 H 55.638 A 7.5 7.5 0 0 1 60.996 4.752 Z" shapeRendering="crispEdges"></path>
//                   </g>
//                 </svg>
//                 <div style={{ opacity: 0.7 }}>
//                   {/* Discord */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(5rem, 0rem)' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037c-1.687.29-3.33.8-4.885 1.515a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.083.083 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.077.077 0 0 0 .084-.028c.462-.63.874-1.295 1.227-1.994a.076.076 0 0 0-.042-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.291.075.075 0 0 1 .077-.011c3.928 1.793 8.18 1.793 12.062 0a.073.073 0 0 1 .078.01c.12.098.246.198.373.292a.076.076 0 0 1 .03.065.078.078 0 0 1-.036.063c-.599.349-1.225.647-1.873.89a.076.076 0 0 0-.05.076c.001.012.004.022.009.032.36.698.772 1.362 1.225 1.993a.077.077 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.029.079.079 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03ZM8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z"></path></svg>
//                   </div>
//                   {/* Google */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(10rem, 0rem)' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72 0-4.827 3.773-8.72 8.6-8.72 2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48Z"></path></svg>
//                   </div>
//                   {/* Github */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(calc(13rem), 3rem)' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12Z"></path></svg>
//                   </div>
//                   {/* Notion/Other */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(calc(13rem), calc(10rem))' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true"><path d="M4.458 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447Zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.328-.747.934Zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.821 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933l3.222-.188ZM1.935 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.25 2.986c.7.513.933.653.933 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632Z"></path></svg>
//                   </div>
//                   {/* Apple */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(-1.5rem, 0rem)' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.83 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.04-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.43-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.091-4.61 1.091ZM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"></path></svg>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Side Icons Group (Mirrored) */}
//             <div className="absolute left-1/2 top-6 ml-[calc(76/16*1rem)] -scale-x-100">
//               <div className="relative h-[15.5rem] w-[15.5rem]">
//                 <svg viewBox="0 0 109 216" fill="none" className="absolute right-[1.125rem] top-[1.125rem] h-[13.5rem] w-[6.8125rem] overflow-visible" aria-hidden="true">
//                   <g filter="url(#social-background-filter)">
//                     <path fill="#fff" fillOpacity=".02" d="M 104.715 48.667 L 61.353 4.402 A 8 8 0 0 0 55.638 2 H -100 a 8 8 0 0 0 -8 8 V 206 a 8 8 0 0 0 8 8 H 99 A 8 8 0 0 0 107 206 V 54.266 C 107 52.172 106.18 50.163 104.715 48.667 Z" shapeRendering="crispEdges"></path>
//                     <path stroke="#fff" strokeOpacity=".05" d="M 60.996 4.752 L 104.358 49.017 A 7.5 7.5 0 0 1 106.5 54.265 V 206 A 7.5 7.5 0 0 1 99 213.5 H -100 a 7.5 7.5 0 0 1 -7.5 -7.5 V 10 a 7.5 7.5 0 0 1 7.5 -7.5 H 55.638 A 7.5 7.5 0 0 1 60.996 4.752 Z" shapeRendering="crispEdges"></path>
//                   </g>
//                 </svg>
//                 <div style={{ opacity: 0.7 }}>
//                   {/* LinkedIn */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(calc(10rem + 3rem), calc(10rem + 3rem))' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white -scale-x-100" aria-hidden="true"><path d="M19.04 19.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531-1.544 0-1.78 1.204-1.78 2.449v4.722H9.793V9.5h2.845v1.3h.038c.397-.75 1.364-1.54 2.808-1.54 3.001 0 3.556 1.974 3.556 4.545v5.238ZM6.447 8.194c-.954 0-1.72-.772-1.72-1.72a1.72 1.72 0 1 1 1.72 1.72Zm1.484 10.85h-2.97V9.5h2.97v9.543ZM20.521 2H3.476C2.66 2 2 2.645 2 3.44v17.12c0 .796.66 1.44 1.476 1.44h17.042c.815 0 1.482-.644 1.482-1.44V3.44C22 2.646 21.333 2 20.518 2h.003Z"></path></svg>
//                   </div>
//                   {/* Microsoft */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(calc(10rem + 3rem), calc(5rem + 5rem))' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white -scale-x-100" aria-hidden="true"><path d="M2 2v9.507h9.507V2H2Zm10.495 0v9.507H22V2h-9.505ZM2 12.495V22h9.507v-9.505H2Zm10.495 0V22H22v-9.505h-9.505Z"></path></svg>
//                   </div>
//                   {/* Atlassian */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(calc(10rem + 3rem), 3rem)' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white -scale-x-100" aria-hidden="true"><path d="M7.526 11.16a.626.626 0 0 0-1.063.116L1.068 22.06a.645.645 0 0 0 .578.933h7.507a.621.621 0 0 0 .578-.358c1.62-3.346.638-8.436-2.206-11.476l.001.002Zm3.955-9.806a14.222 14.222 0 0 0-.83 14.04l3.62 7.242a.644.644 0 0 0 .576.356h7.507a.644.644 0 0 0 .578-.932L12.577 1.348a.61.61 0 0 0-1.096.006Z"></path></svg>
//                   </div>
//                   {/* Dropbox */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(10rem, 0rem)' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white -scale-x-100" aria-hidden="true"><path d="M6 1.807 0 5.629l6 3.822 6.001-3.822L6 1.807Zm12 0-6 3.822 6 3.822 6-3.822-6-3.822ZM0 13.274l6 3.822 6.001-3.822L6 9.451l-6 3.823Zm18-3.823-6 3.823 6 3.822 6-3.822-6-3.823Zm-12 8.92 6.001 3.822 6-3.822-6-3.822L6 18.371Z"></path></svg>
//                   </div>
//                   {/* X / Twitter */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(5rem, 0rem)' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white -scale-x-100" aria-hidden="true"><path d="M17.521 3.325h2.944l-6.432 7.352L21.6 20.679h-5.924l-4.64-6.067-5.31 6.067H2.78l6.88-7.864-7.26-9.49h6.076l4.194 5.546 4.851-5.546Zm-1.033 15.593h1.632L7.59 4.995H5.838l10.65 13.923Z"></path></svg>
//                   </div>
//                   {/* Slack */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(-1.5rem, 0rem)' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white -scale-x-100" aria-hidden="true"><path d="M18.164 7.93V5.084a2.198 2.198 0 0 0 1.267-1.978v-.067A2.2 2.2 0 0 0 17.238.845h-.067a2.2 2.2 0 0 0-2.193 2.193v.067a2.195 2.195 0 0 0 1.252 1.973l.013.006v2.852a6.22 6.22 0 0 0-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 1 0 4.3 4.656l-.012.006 7.697 5.991a6.175 6.175 0 0 0-1.038 3.446 6.22 6.22 0 0 0 1.147 3.607l-.013-.02-2.342 2.343a1.967 1.967 0 0 0-.58-.095h-.002a2.033 2.033 0 1 0 2.033 2.033 1.982 1.982 0 0 0-.1-.595l.005.014 2.317-2.317a6.246 6.246 0 1 0 4.782-11.134l-.036-.005h.006Zm-.964 9.378a3.206 3.206 0 1 1 3.215-3.207v.002a3.207 3.207 0 0 1-3.207 3.207l-.008-.002Z"></path></svg>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Central Cloud Box */}
//             <div className="absolute left-1/2 top-0 ml-[calc(-98/2/16*1rem)] aspect-[98/192] w-[calc(98/16*1rem)] pt-[calc(60/16*1rem)]">
//               <div className="relative mx-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-sm bg-gray-800 bg-gradient-to-br from-white/5 to-[64%]" style={{ boxShadow: '0 1px 1px rgba(255, 255, 255, 0.05) inset, 0 2px 13px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.2), 0 0 0 3px rgba(19, 19, 22, 0.5)' }}>
//                 <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(111.72% 100% at 50% 0%, rgba(118, 237, 255, 0.2), rgba(118, 237, 255, 0) 53.91%)', opacity: 0 }}></div>
//                 <div className="relative">
//                   <svg viewBox="0 0 34 23" fill="none" aria-hidden="true" className="w-[calc(34/16*1rem)] overflow-visible">
//                     <g filter="url(#social-cloud-filter0)">
//                       <path fill="#212126" d="M26.008 22.984a.008.008 0 0 0-.008.008.008.008 0 0 1-.008.008H8.008A.008.008 0 0 1 8 22.992a.008.008 0 0 0-.009-.008 7.5 7.5 0 1 1 0-14.968A.008.008 0 0 0 8 8.008C8 8.004 8.003 8 8.008 8h.02a.03.03 0 0 0 .03-.026 9.001 9.001 0 0 1 17.884 0 .029.029 0 0 0 .029.026h.02c.005 0 .009.004.009.008 0 .005.004.008.008.008a7.5 7.5 0 1 1 0 14.968Z"></path>
//                     </g>
//                   </svg>
//                   {/* Active/Animated Cloud (hidden by default in code, keep for fidelity) */}
//                   <svg viewBox="0 0 34 23" fill="none" aria-hidden="true" className="absolute inset-0 w-[calc(34/16*1rem)] overflow-visible" style={{ opacity: 0 }}>
//                     <g filter="url(#social-cloud-active-filter)">
//                       <path fill="#5DE3FF" d="M26.008 22.984a.008.008 0 0 0-.008.008.008.008 0 0 1-.008.008H8.008A.008.008 0 0 1 8 22.992a.008.008 0 0 0-.009-.008 7.5 7.5 0 1 1 0-14.968A.008.008 0 0 0 8 8.008C8 8.004 8.003 8 8.008 8h.02a.03.03 0 0 0 .03-.026 9.001 9.001 0 0 1 17.884 0 .029.029 0 0 0 .029.026h.02c.005 0 .009.004.009.008 0 .005.004.008.008.008a7.5 7.5 0 1 1 0 14.968Z"></path>
//                     </g>
//                   </svg>
//                 </div>
//                 <div className="absolute -inset-4 bg-gradient-to-br from-white/0 from-[35%] via-white/25 to-white/0 to-[65%] mix-blend-overlay" style={{ transform: 'translate(-4rem, -4rem)' }}></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Filters and Gradients Definitions */}
//         <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
//           <defs>
//             <filter id="social-background-filter" width="219" height="216" x="-110" y="0" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
//               <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//               <feOffset></feOffset>
//               <feGaussianBlur stdDeviation="1"></feGaussianBlur>
//               <feComposite in2="hardAlpha" operator="out"></feComposite>
//               <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
//               <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1860_5760"></feBlend>
//               <feBlend in="SourceGraphic" in2="effect1_dropShadow_1860_5760" result="shape"></feBlend>
//             </filter>
//             <filter id="social-cloud-filter0" width="34" height="25" x="0" y="0" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
//               <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//               <feOffset dy="1"></feOffset>
//               <feComposite in2="hardAlpha" operator="out"></feComposite>
//               <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.06 0"></feColorMatrix>
//               <feBlend in2="BackgroundImageFix" mode="color-dodge" result="effect1_dropShadow_228_61"></feBlend>
//               <feBlend in="SourceGraphic" in2="effect1_dropShadow_228_61" result="shape"></feBlend>
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//               <feOffset dy="2"></feOffset>
//               <feGaussianBlur stdDeviation="2.5"></feGaussianBlur>
//               <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
//               <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
//               <feBlend in2="shape" result="effect2_innerShadow_228_61"></feBlend>
//             </filter>
//             <filter id="social-cloud-active-filter" width="52" height="41" x="-9" y="-9" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
//               <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//               <feMorphology in="SourceAlpha" operator="dilate" radius="1" result="effect1_dropShadow_228_63"></feMorphology>
//               <feOffset></feOffset>
//               <feGaussianBlur stdDeviation="4"></feGaussianBlur>
//               <feComposite in2="hardAlpha" operator="out"></feComposite>
//               <feColorMatrix values="0 0 0 0 0.419608 0 0 0 0 0.905882 0 0 0 0 1 0 0 0 0.4 0"></feColorMatrix>
//               <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_228_63"></feBlend>
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//               <feOffset></feOffset>
//               <feGaussianBlur stdDeviation="1"></feGaussianBlur>
//               <feComposite in2="hardAlpha" operator="out"></feComposite>
//               <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"></feColorMatrix>
//               <feBlend in2="effect1_dropShadow_228_63" result="effect2_dropShadow_228_63"></feBlend>
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//               <feOffset></feOffset>
//               <feGaussianBlur stdDeviation=".5"></feGaussianBlur>
//               <feComposite in2="hardAlpha" operator="out"></feComposite>
//               <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0"></feColorMatrix>
//               <feBlend in2="effect2_dropShadow_228_63" result="effect3_dropShadow_228_63"></feBlend>
//               <feBlend in="SourceGraphic" in2="effect3_dropShadow_228_63" result="shape"></feBlend>
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//               <feOffset dy="1"></feOffset>
//               <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
//               <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"></feColorMatrix>
//               <feBlend in2="shape" result="effect4_innerShadow_228_63"></feBlend>
//             </filter>
//             <linearGradient id="social-cloud-active-gradient" x1="17" x2="17" y1="0" y2="15.5" gradientUnits="userSpaceOnUse">
//               <stop offset=".529"></stop>
//               <stop offset="1" stopOpacity="0"></stop>
//             </linearGradient>
//           </defs>
//         </svg>
//       </div>
//     </div>
//   );
// }

// export function SecurityComponentAni() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const fingerprintPathsRef = useRef<SVGPathElement[]>([]);
//   const leftPanelRef = useRef<HTMLDivElement>(null);
//   const rightPanelRef = useRef<HTMLDivElement>(null);
//   const scanLinesRef = useRef<HTMLDivElement[]>([]);
//   const shineRef = useRef<HTMLDivElement>(null);
//   const centerPulseRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ repeat: -1 });

//       // 1. Fingerprint Path Drawing Logic
//       tl.to(
//         fingerprintPathsRef.current,
//         {
//           strokeDasharray: "1 0",
//           opacity: 1,
//           duration: 1.5,
//           stagger: 0.15,
//           ease: "power2.inOut",
//         },
//         0
//       );

//       // 2. Vertical Scan Beams
//       scanLinesRef.current.forEach((line) => {
//         gsap.to(line, {
//           y: 40,
//           opacity: 1,
//           duration: 2,
//           repeat: -1,
//           ease: "linear",
//           yoyo: true,
//         });
//       });

//       // 3. Side Panels Breathing
//       gsap.to([leftPanelRef.current, rightPanelRef.current], {
//         x: (i) => (i === 0 ? "5.5rem" : "-5.5rem"),
//         duration: 3,
//         repeat: -1,
//         yoyo: true,
//         ease: "power1.inOut",
//       });

//       // 4. Center Shine Sweep
//       gsap.to(shineRef.current, {
//         x: "2.75rem",
//         y: "2.75rem",
//         duration: 2.5,
//         repeat: -1,
//         ease: "power2.inOut",
//       });

//       // 5. Center Hub Glow Pulse
//       gsap.to(centerPulseRef.current, {
//         opacity: 0.5,
//         scale: 1.1,
//         duration: 1.5,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//       });

//       // 6. Data "Nodes" traveling from panels to center
//       // Creating virtual nodes since they aren't in the static JSX
//       const createNode = (isLeft: boolean) => {
//         const node = document.createElement("div");
//         node.className = "absolute w-1 h-1 bg-sky-400 rounded-full blur-[1px] z-20";
//         containerRef.current?.querySelector(".relative.flex")?.appendChild(node);
        
//         const startX = isLeft ? -120 : 120;
//         gsap.fromTo(node, 
//           { x: startX, y: gsap.utils.random(-20, 20), opacity: 0 },
//           { 
//             x: 0, 
//             y: 0, 
//             opacity: 1, 
//             duration: 1.2, 
//             ease: "power1.in",
//             onComplete: () => node.remove() 
//           }
//         );
//       };

//       const nodeInterval = setInterval(() => {
//         createNode(true);
//         createNode(false);
//       }, 800);

//       return () => clearInterval(nodeInterval);
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a] p-4">
//       <div 
//         ref={containerRef}
//         className="group isolate flex h-[260px] w-[476px] flex-col overflow-hidden rounded-2xl bg-[#212126] shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.025]"
//       >
//         <div className="relative z-10 order-last flex-none px-6 pb-6">
//           <h3 className="text-sm font-medium text-white">Advanced security</h3>
//           <p className="mt-2 text-pretty text-sm/5 text-gray-400">
//             Clerk is SOC 2 type 2 compliant and CCPA compliant. We conduct
//             regular third-party audits and penetration tests.
//           </p>
//         </div>
//         <div
//           className="pointer-events-none relative isolate flex-auto select-none"
//           style={{ minHeight: "10.25rem" }}
//           aria-hidden="true"
//         >
//           <div className="absolute inset-0 -bottom-5 z-10 bg-[radial-gradient(50%_100%_at_top,transparent,rgba(17,24,39,0.68)_61.5%,rgb(33,33,38))]"></div>
//           <div className="absolute inset-x-0 top-full z-10 mt-5 h-12 bg-[#212126]"></div>
//           <div className="relative flex h-full items-center justify-center">
//             <div className="relative h-[4.5rem] w-[4.5rem]">
              
//               {/* Left Panel */}
//               <div
//                 ref={leftPanelRef}
//                 className="absolute right-full top-1/2 mr-12 mt-[calc(-280/2/16*1rem)]"
//                 style={{ transform: "translateX(5.1875rem)" }}
//               >
//                 <div className="relative aspect-[224/280] w-[calc(224/16*1rem)] -scale-x-100">
//                   <svg
//                     viewBox="0 0 224 280"
//                     height="280"
//                     fill="none"
//                     aria-hidden="true"
//                     className="absolute inset-0 h-full w-full overflow-visible"
//                   >
//                     <path
//                       fill="#fff"
//                       fillOpacity="0.05"
//                       d="M8 .25a8 8 0 0 0-8 8v91.704c0 2.258.954 4.411 2.628 5.927l10.744 9.738A7.998 7.998 0 0 1 16 121.546v36.408a7.998 7.998 0 0 1-2.628 5.927l-10.744 9.738A7.998 7.998 0 0 0 0 179.546v92.204a8 8 0 0 0 8 8h308a8 8 0 0 0 8-8V8.25a8 8 0 0 0-8-8H8Z"
//                     ></path>
//                     <path
//                       stroke="#fff"
//                       strokeOpacity="0.05"
//                       d="M.5 99.954V8.25A7.5 7.5 0 0 1 8 .75h308a7.5 7.5 0 0 1 7.5 7.5v263.5a7.5 7.5 0 0 1-7.5 7.5H8a7.5 7.5 0 0 1-7.5-7.5v-92.204a7.5 7.5 0 0 1 2.464-5.557l10.744-9.737a8.5 8.5 0 0 0 2.792-6.298v-36.408a8.5 8.5 0 0 0-2.792-6.298l-10.744-9.737A7.5 7.5 0 0 1 .5 99.954Z"
//                     ></path>
//                   </svg>
//                   <div className="absolute left-4 top-1/2 -mt-7 flex h-14 w-5 items-center overflow-hidden">
//                     <div className="-ml-4 h-10 w-5 rounded-[50%] bg-sky-300/20 blur"></div>
//                     <div 
//                       ref={(el) => { if (el) scanLinesRef.current[0] = el }}
//                       className="absolute inset-y-4 left-0 w-px bg-gradient-to-t from-sky-300/0 via-sky-300/60 to-sky-300/0"
//                     ></div>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Panel */}
//               <div
//                 ref={rightPanelRef}
//                 className="absolute left-full top-1/2 ml-12 mt-[calc(-280/2/16*1rem)]"
//                 style={{ transform: "translateX(-5.1875rem)" }}
//               >
//                 <div className="relative aspect-[224/280] w-[calc(224/16*1rem)]">
//                   <svg
//                     viewBox="0 0 224 280"
//                     height="280"
//                     fill="none"
//                     aria-hidden="true"
//                     className="absolute inset-0 h-full w-full overflow-visible"
//                   >
//                     <path
//                       fill="#fff"
//                       fillOpacity="0.05"
//                       d="M8 .25a8 8 0 0 0-8 8v91.704c0 2.258.954 4.411 2.628 5.927l10.744 9.738A7.998 7.998 0 0 1 16 121.546v36.408a7.998 7.998 0 0 1-2.628 5.927l-10.744 9.738A7.998 7.998 0 0 0 0 179.546v92.204a8 8 0 0 0 8 8h308a8 8 0 0 0 8-8V8.25a8 8 0 0 0-8-8H8Z"
//                     ></path>
//                     <path
//                       stroke="#fff"
//                       strokeOpacity="0.05"
//                       d="M.5 99.954V8.25A7.5 7.5 0 0 1 8 .75h308a7.5 7.5 0 0 1 7.5 7.5v263.5a7.5 7.5 0 0 1-7.5 7.5H8a7.5 7.5 0 0 1-7.5-7.5v-92.204a7.5 7.5 0 0 1 2.464-5.557l10.744-9.737a8.5 8.5 0 0 0 2.792-6.298v-36.408a8.5 8.5 0 0 0-2.792-6.298l-10.744-9.737A7.5 7.5 0 0 1 .5 99.954Z"
//                     ></path>
//                   </svg>
//                   <div className="absolute left-4 top-1/2 -mt-7 flex h-14 w-5 items-center overflow-hidden">
//                     <div className="-ml-4 h-10 w-5 rounded-[50%] bg-sky-300/20 blur"></div>
//                     <div 
//                       ref={(el) => { if (el) scanLinesRef.current[1] = el }}
//                       className="absolute inset-y-4 left-0 w-px bg-gradient-to-t from-sky-300/0 via-sky-300/60 to-sky-300/0"
//                     ></div>
//                   </div>
//                 </div>
//               </div>

//               {/* Center Fingerprint Hub */}
//               <div className="absolute inset-0 z-10 rounded-full bg-black/60 shadow-[0_1px_rgba(255,255,255,0.03)]"></div>
//               <div className="absolute inset-1 z-10 rounded-full bg-[#2a2a30] bg-gradient-to-tr from-white/0 via-white/0 to-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.5)]"></div>
              
//               {/* Pulsing Glow Overlay */}
//               <div
//                 ref={centerPulseRef}
//                 className="absolute inset-1 z-10 rounded-full bg-gradient-to-tr from-[#64E5FF]/20 via-[#64E5FF]/0 to-[#64E5FF]/0"
//                 style={{ opacity: 0 }}
//               ></div>
              
//               <div className="absolute inset-[calc(0.25rem+1px)] z-10 rounded-full bg-gradient-to-b from-[#25252b] to-[#1e1e24]"></div>
              
//               <svg
//                 viewBox="0 0 44 44"
//                 fill="none"
//                 aria-hidden="true"
//                 className="absolute left-1/2 top-1/2 z-10 h-11 w-11 -translate-x-1/2 -translate-y-1/2"
//               >
//                 <g filter="url(#_R_3qt78hinpfknnrdb_)">
//                   <path
//                     stroke="#000"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeOpacity=".25"
//                     strokeWidth="1.5"
//                     d="M32.147 27.52c0-5.471-4.543-9.908-10.147-9.908s-10.147 4.437-10.147 9.909c0 3.744 1.329 7.184 3.551 9.897a16.152 16.152 0 0 0 2.549 2.488m21.297-22.83C35.67 11.45 29.283 7.704 22 7.704c-7.283 0-13.67 3.746-17.25 9.372M34.176 5.785A25.735 25.735 0 0 0 22 2.75c-4.413 0-8.562 1.1-12.176 3.035M28.088 40.25c-6.322-.953-11.162-6.29-11.162-12.73 0-2.735 2.272-4.953 5.074-4.953s5.073 2.218 5.073 4.954c0 2.736 2.272 4.954 5.074 4.954s5.074-2.218 5.074-4.954c0-8.209-6.815-14.863-15.221-14.863-8.406 0-15.22 6.654-15.22 14.863 0 2.505.634 4.865 1.755 6.935M22 26.53c0 5.472 4.543 9.908 10.147 9.908.695 0 1.374-.068 2.03-.198"
//                   ></path>
//                 </g>
                
//                 {/* Animated Fingerprint Paths */}
//                 {[
//                   "M39.25 17.076C35.67 11.45 29.283 7.704 22 7.704c-7.283 0-13.67 3.746-17.25 9.372",
//                   "M34.177 5.785A25.735 25.735 0 0 0 22.001 2.75c-4.413 0-8.562 1.1-12.177 3.035",
//                   "M32.148 27.52c0-5.471-4.543-9.908-10.147-9.908-5.605 0-10.148 4.437-10.148 9.909 0 3.744 1.33 7.184 3.552 9.897a16.152 16.152 0 0 0 2.548 2.488",
//                   "M22 26.53c0 5.472 4.543 9.908 10.147 9.908.695 0 1.374-.068 2.03-.198",
//                   "M28.088 40.25c-6.322-.953-11.162-6.29-11.162-12.73 0-2.735 2.272-4.953 5.074-4.953s5.073 2.218 5.073 4.954c0 2.736 2.272 4.954 5.074 4.954s5.074-2.218 5.074-4.954c0-8.209-6.815-14.863-15.221-14.863-8.406 0-15.22 6.654-15.22 14.863 0 2.505.634 4.865 1.755 6.935"
//                 ].map((d, i) => (
//                   <path
//                     key={i}
//                     ref={(el) => { if (el) fingerprintPathsRef.current[i] = el }}
//                     stroke="#5DE3FF"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="1.5"
//                     pathLength="1"
//                     strokeDasharray="0 2"
//                     d={d}
//                     opacity="0"
//                   ></path>
//                 ))}
                
//                 <defs>
//                   <filter
//                     id="_R_3qt78hinpfknnrdb_"
//                     width="36"
//                     height="40"
//                     x="4"
//                     y="2"
//                     colorInterpolationFilters="sRGB"
//                     filterUnits="userSpaceOnUse"
//                   >
//                     <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//                     <feColorMatrix
//                       in="SourceAlpha"
//                       result="hardAlpha"
//                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                     ></feColorMatrix>
//                     <feOffset dy="1"></feOffset>
//                     <feComposite in2="hardAlpha" operator="out"></feComposite>
//                     <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.06 0"></feColorMatrix>
//                     <feBlend
//                       in2="BackgroundImageFix"
//                       mode="color-dodge"
//                       result="effect1_dropShadow_145_93"
//                     ></feBlend>
//                     <feBlend
//                       in="SourceGraphic"
//                       in2="effect1_dropShadow_145_93"
//                       result="shape"
//                     ></feBlend>
//                   </filter>
//                 </defs>
//               </svg>

//               {/* Shine / Reflector */}
//               <div className="absolute inset-1 z-10 rounded-full mix-blend-overlay [clip-path:circle(50%)]">
//                 <div
//                   ref={shineRef}
//                   className="absolute inset-0 bg-gradient-to-br from-white/0 from-[30%] via-sky-100/70 to-white/0 to-[70%]"
//                   style={{ transform: "translate(-2.75rem, -2.75rem)" }}
//                 ></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function SocialSignOnComponentTesdt() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black p-8">
//       <div className="group isolate flex flex-col rounded-2xl bg-[#212126] shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.025] overflow-hidden w-[476px] h-[260px]">
//         <div className="relative z-10 flex-none px-6 order-last pb-6">
//           <h3 className="text-sm font-medium text-white">Social Sign-On</h3>
//           <p className="mt-2 text-pretty text-sm/5 text-gray-400">
//             Add high-conversion Social Sign-on (SSO) to your application in minutes. 20+ options and growing.
//           </p>
//         </div>
        
//         <div className="pointer-events-none relative flex-auto select-none min-h-[10.25rem]" aria-hidden="true">
//           <div className="absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,white_60%,transparent)]">
//             <div className="relative mx-auto aspect-[98/192] w-[calc(98/16*1rem)]">
//               <svg viewBox="0 0 98 192" fill="none" aria-hidden="true" className="absolute inset-0 h-full w-full">
//                 <path stroke="#fff" strokeOpacity=".06" d="M49 192V96.266a8 8 0 0 0-2.285-5.599L3.285 46.333A8 8 0 0 1 1 40.734V-28M49 93l45.715-46.667A8 8 0 0 0 97 40.734V-23"></path>
//               </svg>
//             </div>

//             {/* Left Side Icons Group */}
//             <div className="absolute right-1/2 top-6 mr-[calc(76/16*1rem)]">
//               <div className="relative h-[15.5rem] w-[15.5rem]">
//                 <svg viewBox="0 0 109 216" fill="none" className="absolute right-[1.125rem] top-[1.125rem] h-[13.5rem] w-[6.8125rem] overflow-visible" aria-hidden="true">
//                   <g filter="url(#social-background-filter)">
//                     <path fill="#fff" fillOpacity=".02" d="M 104.715 48.667 L 61.353 4.402 A 8 8 0 0 0 55.638 2 H -100 a 8 8 0 0 0 -8 8 V 206 a 8 8 0 0 0 8 8 H 99 A 8 8 0 0 0 107 206 V 54.266 C 107 52.172 106.18 50.163 104.715 48.667 Z" shapeRendering="crispEdges"></path>
//                     <path stroke="#fff" strokeOpacity=".05" d="M 60.996 4.752 L 104.358 49.017 A 7.5 7.5 0 0 1 106.5 54.265 V 206 A 7.5 7.5 0 0 1 99 213.5 H -100 a 7.5 7.5 0 0 1 -7.5 -7.5 V 10 a 7.5 7.5 0 0 1 7.5 -7.5 H 55.638 A 7.5 7.5 0 0 1 60.996 4.752 Z" shapeRendering="crispEdges"></path>
//                   </g>
//                 </svg>
//                 <div style={{ opacity: 0.7 }}>
//                   {/* Discord */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(5rem, 0rem)' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037c-1.687.29-3.33.8-4.885 1.515a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.083.083 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.077.077 0 0 0 .084-.028c.462-.63.874-1.295 1.227-1.994a.076.076 0 0 0-.042-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.291.075.075 0 0 1 .077-.011c3.928 1.793 8.18 1.793 12.062 0a.073.073 0 0 1 .078.01c.12.098.246.198.373.292a.076.076 0 0 1 .03.065.078.078 0 0 1-.036.063c-.599.349-1.225.647-1.873.89a.076.076 0 0 0-.05.076c.001.012.004.022.009.032.36.698.772 1.362 1.225 1.993a.077.077 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.029.079.079 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03ZM8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z"></path></svg>
//                   </div>
//                   {/* Google */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(10rem, 0rem)' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72 0-4.827 3.773-8.72 8.6-8.72 2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48Z"></path></svg>
//                   </div>
//                   {/* Github */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(calc(13rem), 3rem)' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12Z"></path></svg>
//                   </div>
//                   {/* Notion/Other */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(calc(13rem), calc(10rem))' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true"><path d="M4.458 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447Zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.328-.747.934Zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.821 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933l3.222-.188ZM1.935 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.25 2.986c.7.513.933.653.933 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632Z"></path></svg>
//                   </div>
//                   {/* Apple */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(-1.5rem, 0rem)' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.83 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.04-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.43-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.091-4.61 1.091ZM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"></path></svg>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Side Icons Group (Mirrored) */}
//             <div className="absolute left-1/2 top-6 ml-[calc(76/16*1rem)] -scale-x-100">
//               <div className="relative h-[15.5rem] w-[15.5rem]">
//                 <svg viewBox="0 0 109 216" fill="none" className="absolute right-[1.125rem] top-[1.125rem] h-[13.5rem] w-[6.8125rem] overflow-visible" aria-hidden="true">
//                   <g filter="url(#social-background-filter)">
//                     <path fill="#fff" fillOpacity=".02" d="M 104.715 48.667 L 61.353 4.402 A 8 8 0 0 0 55.638 2 H -100 a 8 8 0 0 0 -8 8 V 206 a 8 8 0 0 0 8 8 H 99 A 8 8 0 0 0 107 206 V 54.266 C 107 52.172 106.18 50.163 104.715 48.667 Z" shapeRendering="crispEdges"></path>
//                     <path stroke="#fff" strokeOpacity=".05" d="M 60.996 4.752 L 104.358 49.017 A 7.5 7.5 0 0 1 106.5 54.265 V 206 A 7.5 7.5 0 0 1 99 213.5 H -100 a 7.5 7.5 0 0 1 -7.5 -7.5 V 10 a 7.5 7.5 0 0 1 7.5 -7.5 H 55.638 A 7.5 7.5 0 0 1 60.996 4.752 Z" shapeRendering="crispEdges"></path>
//                   </g>
//                 </svg>
//                 <div style={{ opacity: 0.7 }}>
//                   {/* LinkedIn */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(calc(10rem + 3rem), calc(10rem + 3rem))' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white -scale-x-100" aria-hidden="true"><path d="M19.04 19.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531-1.544 0-1.78 1.204-1.78 2.449v4.722H9.793V9.5h2.845v1.3h.038c.397-.75 1.364-1.54 2.808-1.54 3.001 0 3.556 1.974 3.556 4.545v5.238ZM6.447 8.194c-.954 0-1.72-.772-1.72-1.72a1.72 1.72 0 1 1 1.72 1.72Zm1.484 10.85h-2.97V9.5h2.97v9.543ZM20.521 2H3.476C2.66 2 2 2.645 2 3.44v17.12c0 .796.66 1.44 1.476 1.44h17.042c.815 0 1.482-.644 1.482-1.44V3.44C22 2.646 21.333 2 20.518 2h.003Z"></path></svg>
//                   </div>
//                   {/* Microsoft */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(calc(10rem + 3rem), calc(5rem + 5rem))' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white -scale-x-100" aria-hidden="true"><path d="M2 2v9.507h9.507V2H2Zm10.495 0v9.507H22V2h-9.505ZM2 12.495V22h9.507v-9.505H2Zm10.495 0V22H22v-9.505h-9.505Z"></path></svg>
//                   </div>
//                   {/* Atlassian */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(calc(10rem + 3rem), 3rem)' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white -scale-x-100" aria-hidden="true"><path d="M7.526 11.16a.626.626 0 0 0-1.063.116L1.068 22.06a.645.645 0 0 0 .578.933h7.507a.621.621 0 0 0 .578-.358c1.62-3.346.638-8.436-2.206-11.476l.001.002Zm3.955-9.806a14.222 14.222 0 0 0-.83 14.04l3.62 7.242a.644.644 0 0 0 .576.356h7.507a.644.644 0 0 0 .578-.932L12.577 1.348a.61.61 0 0 0-1.096.006Z"></path></svg>
//                   </div>
//                   {/* Dropbox */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(10rem, 0rem)' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white -scale-x-100" aria-hidden="true"><path d="M6 1.807 0 5.629l6 3.822 6.001-3.822L6 1.807Zm12 0-6 3.822 6 3.822 6-3.822-6-3.822ZM0 13.274l6 3.822 6.001-3.822L6 9.451l-6 3.823Zm18-3.823-6 3.823 6 3.822 6-3.822-6-3.823Zm-12 8.92 6.001 3.822 6-3.822-6-3.822L6 18.371Z"></path></svg>
//                   </div>
//                   {/* X / Twitter */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(5rem, 0rem)' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white -scale-x-100" aria-hidden="true"><path d="M17.521 3.325h2.944l-6.432 7.352L21.6 20.679h-5.924l-4.64-6.067-5.31 6.067H2.78l6.88-7.864-7.26-9.49h6.076l4.194 5.546 4.851-5.546Zm-1.033 15.593h1.632L7.59 4.995H5.838l10.65 13.923Z"></path></svg>
//                   </div>
//                   {/* Slack */}
//                   <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow" style={{ transform: 'translate(-1.5rem, 0rem)' }}>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]"></span>
//                     <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]"></span>
//                     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white -scale-x-100" aria-hidden="true"><path d="M18.164 7.93V5.084a2.198 2.198 0 0 0 1.267-1.978v-.067A2.2 2.2 0 0 0 17.238.845h-.067a2.2 2.2 0 0 0-2.193 2.193v.067a2.195 2.195 0 0 0 1.252 1.973l.013.006v2.852a6.22 6.22 0 0 0-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 1 0 4.3 4.656l-.012.006 7.697 5.991a6.175 6.175 0 0 0-1.038 3.446 6.22 6.22 0 0 0 1.147 3.607l-.013-.02-2.342 2.343a1.967 1.967 0 0 0-.58-.095h-.002a2.033 2.033 0 1 0 2.033 2.033 1.982 1.982 0 0 0-.1-.595l.005.014 2.317-2.317a6.246 6.246 0 1 0 4.782-11.134l-.036-.005h.006Zm-.964 9.378a3.206 3.206 0 1 1 3.215-3.207v.002a3.207 3.207 0 0 1-3.207 3.207l-.008-.002Z"></path></svg>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Central Cloud Box */}
//             <div className="absolute left-1/2 top-0 ml-[calc(-98/2/16*1rem)] aspect-[98/192] w-[calc(98/16*1rem)] pt-[calc(60/16*1rem)]">
//               <div className="relative mx-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-sm bg-gray-800 bg-gradient-to-br from-white/5 to-[64%]" style={{ boxShadow: '0 1px 1px rgba(255, 255, 255, 0.05) inset, 0 2px 13px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.2), 0 0 0 3px rgba(19, 19, 22, 0.5)' }}>
//                 <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(111.72% 100% at 50% 0%, rgba(118, 237, 255, 0.2), rgba(118, 237, 255, 0) 53.91%)', opacity: 0 }}></div>
//                 <div className="relative">
//                   <svg viewBox="0 0 34 23" fill="none" aria-hidden="true" className="w-[calc(34/16*1rem)] overflow-visible">
//                     <g filter="url(#social-cloud-filter0)">
//                       <path fill="#212126" d="M26.008 22.984a.008.008 0 0 0-.008.008.008.008 0 0 1-.008.008H8.008A.008.008 0 0 1 8 22.992a.008.008 0 0 0-.009-.008 7.5 7.5 0 1 1 0-14.968A.008.008 0 0 0 8 8.008C8 8.004 8.003 8 8.008 8h.02a.03.03 0 0 0 .03-.026 9.001 9.001 0 0 1 17.884 0 .029.029 0 0 0 .029.026h.02c.005 0 .009.004.009.008 0 .005.004.008.008.008a7.5 7.5 0 1 1 0 14.968Z"></path>
//                     </g>
//                   </svg>
//                   {/* Active/Animated Cloud (hidden by default in code, keep for fidelity) */}
//                   <svg viewBox="0 0 34 23" fill="none" aria-hidden="true" className="absolute inset-0 w-[calc(34/16*1rem)] overflow-visible" style={{ opacity: 0 }}>
//                     <g filter="url(#social-cloud-active-filter)">
//                       <path fill="#5DE3FF" d="M26.008 22.984a.008.008 0 0 0-.008.008.008.008 0 0 1-.008.008H8.008A.008.008 0 0 1 8 22.992a.008.008 0 0 0-.009-.008 7.5 7.5 0 1 1 0-14.968A.008.008 0 0 0 8 8.008C8 8.004 8.003 8 8.008 8h.02a.03.03 0 0 0 .03-.026 9.001 9.001 0 0 1 17.884 0 .029.029 0 0 0 .029.026h.02c.005 0 .009.004.009.008 0 .005.004.008.008.008a7.5 7.5 0 1 1 0 14.968Z"></path>
//                     </g>
//                   </svg>
//                 </div>
//                 <div className="absolute -inset-4 bg-gradient-to-br from-white/0 from-[35%] via-white/25 to-white/0 to-[65%] mix-blend-overlay" style={{ transform: 'translate(-4rem, -4rem)' }}></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Filters and Gradients Definitions */}
//         <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
//           <defs>
//             <filter id="social-background-filter" width="219" height="216" x="-110" y="0" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
//               <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//               <feOffset></feOffset>
//               <feGaussianBlur stdDeviation="1"></feGaussianBlur>
//               <feComposite in2="hardAlpha" operator="out"></feComposite>
//               <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
//               <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1860_5760"></feBlend>
//               <feBlend in="SourceGraphic" in2="effect1_dropShadow_1860_5760" result="shape"></feBlend>
//             </filter>
//             <filter id="social-cloud-filter0" width="34" height="25" x="0" y="0" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
//               <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//               <feOffset dy="1"></feOffset>
//               <feComposite in2="hardAlpha" operator="out"></feComposite>
//               <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.06 0"></feColorMatrix>
//               <feBlend in2="BackgroundImageFix" mode="color-dodge" result="effect1_dropShadow_228_61"></feBlend>
//               <feBlend in="SourceGraphic" in2="effect1_dropShadow_228_61" result="shape"></feBlend>
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//               <feOffset dy="2"></feOffset>
//               <feGaussianBlur stdDeviation="2.5"></feGaussianBlur>
//               <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
//               <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
//               <feBlend in2="shape" result="effect2_innerShadow_228_61"></feBlend>
//             </filter>
//             <filter id="social-cloud-active-filter" width="52" height="41" x="-9" y="-9" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
//               <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//               <feMorphology in="SourceAlpha" operator="dilate" radius="1" result="effect1_dropShadow_228_63"></feMorphology>
//               <feOffset></feOffset>
//               <feGaussianBlur stdDeviation="4"></feGaussianBlur>
//               <feComposite in2="hardAlpha" operator="out"></feComposite>
//               <feColorMatrix values="0 0 0 0 0.419608 0 0 0 0 0.905882 0 0 0 0 1 0 0 0 0.4 0"></feColorMatrix>
//               <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_228_63"></feBlend>
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//               <feOffset></feOffset>
//               <feGaussianBlur stdDeviation="1"></feGaussianBlur>
//               <feComposite in2="hardAlpha" operator="out"></feComposite>
//               <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"></feColorMatrix>
//               <feBlend in2="effect1_dropShadow_228_63" result="effect2_dropShadow_228_63"></feBlend>
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//               <feOffset></feOffset>
//               <feGaussianBlur stdDeviation=".5"></feGaussianBlur>
//               <feComposite in2="hardAlpha" operator="out"></feComposite>
//               <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0"></feColorMatrix>
//               <feBlend in2="effect2_dropShadow_228_63" result="effect3_dropShadow_228_63"></feBlend>
//               <feBlend in="SourceGraphic" in2="effect3_dropShadow_228_63" result="shape"></feBlend>
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//               <feOffset dy="1"></feOffset>
//               <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
//               <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"></feColorMatrix>
//               <feBlend in2="shape" result="effect4_innerShadow_228_63"></feBlend>
//             </filter>
//             <linearGradient id="social-cloud-active-gradient" x1="17" x2="17" y1="0" y2="15.5" gradientUnits="userSpaceOnUse">
//               <stop offset=".529"></stop>
//               <stop offset="1" stopOpacity="0"></stop>
//             </linearGradient>
//           </defs>
//         </svg>
//       </div>
//     </div>
//   );
// }


// // ─── IconButton ───────────────────────────────────────────────────────────────
// function IconButton({ children, flip = false, innerRef, style }) {
//   return (
//     <div
//       ref={innerRef}
//       className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-b from-white/5 to-[67%] shadow"
//       style={style}
//     >
//       <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 [mask-image:linear-gradient(to_right,white,transparent)]" />
//       <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#64E5FF]/[0.08] [mask-image:linear-gradient(to_left,white,transparent)]" />
//       <div className={flip ? '-scale-x-100' : ''}>{children}</div>
//     </div>
//   );
// }

// // ─── ConnectionLine ───────────────────────────────────────────────────────────
// function ConnectionLine({ x1, y1, x2, y2, innerRef }) {
//   const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
//   return (
//     <line
//       ref={innerRef}
//       x1={x1} y1={y1} x2={x2} y2={y2}
//       stroke="url(#lineGrad)"
//       strokeWidth="1"
//       strokeLinecap="round"
//       strokeDasharray={length}
//       strokeDashoffset={length}
//       opacity="0"
//     />
//   );
// }

// // ─── Icon SVGs ────────────────────────────────────────────────────────────────
// const DiscordSVG   = () => <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037c-1.687.29-3.33.8-4.885 1.515a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.083.083 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.077.077 0 0 0 .084-.028c.462-.63.874-1.295 1.227-1.994a.076.076 0 0 0-.042-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.291.075.075 0 0 1 .077-.011c3.928 1.793 8.18 1.793 12.062 0a.073.073 0 0 1 .078.01c.12.098.246.198.373.292a.076.076 0 0 1-.006.128c-.6.349-1.225.647-1.873.89a.076.076 0 0 0-.05.076c.001.012.004.022.009.032.36.698.772 1.362 1.225 1.993a.077.077 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.029.079.079 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03ZM8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z"/></svg>;
// const GoogleSVG    = () => <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72 0-4.827 3.773-8.72 8.6-8.72 2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48Z"/></svg>;
// const GithubSVG    = () => <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12Z"/></svg>;
// const NotionSVG    = () => <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white"><path d="M4.458 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447Zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.328-.747.934Zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.821 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933l3.222-.188ZM1.935 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.25 2.986c.7.513.933.653.933 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632Z"/></svg>;
// const AppleSVG     = () => <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.83 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.04-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.43-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.091-4.61 1.091ZM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg>;
// const LinkedInSVG  = () => <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white"><path d="M19.04 19.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531-1.544 0-1.78 1.204-1.78 2.449v4.722H9.793V9.5h2.845v1.3h.038c.397-.75 1.364-1.54 2.808-1.54 3.001 0 3.556 1.974 3.556 4.545v5.238ZM6.447 8.194c-.954 0-1.72-.772-1.72-1.72a1.72 1.72 0 1 1 1.72 1.72Zm1.484 10.85h-2.97V9.5h2.97v9.543ZM20.521 2H3.476C2.66 2 2 2.645 2 3.44v17.12c0 .796.66 1.44 1.476 1.44h17.042c.815 0 1.482-.644 1.482-1.44V3.44C22 2.646 21.333 2 20.518 2h.003Z"/></svg>;
// const MicrosoftSVG = () => <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white"><path d="M2 2v9.507h9.507V2H2Zm10.495 0v9.507H22V2h-9.505ZM2 12.495V22h9.507v-9.505H2Zm10.495 0V22H22v-9.505h-9.505Z"/></svg>;
// const AtlassianSVG = () => <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white"><path d="M7.526 11.16a.626.626 0 0 0-1.063.116L1.068 22.06a.645.645 0 0 0 .578.933h7.507a.621.621 0 0 0 .578-.358c1.62-3.346.638-8.436-2.206-11.476l.001.002Zm3.955-9.806a14.222 14.222 0 0 0-.83 14.04l3.62 7.242a.644.644 0 0 0 .576.356h7.507a.644.644 0 0 0 .578-.932L12.577 1.348a.61.61 0 0 0-1.096.006Z"/></svg>;
// const DropboxSVG   = () => <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white"><path d="M6 1.807 0 5.629l6 3.822 6.001-3.822L6 1.807Zm12 0-6 3.822 6 3.822 6-3.822-6-3.822ZM0 13.274l6 3.822 6.001-3.822L6 9.451l-6 3.823Zm18-3.823-6 3.823 6 3.822 6-3.822-6-3.823Zm-12 8.92 6.001 3.822 6-3.822-6-3.822L6 18.371Z"/></svg>;
// const XSVG         = () => <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white"><path d="M17.521 3.325h2.944l-6.432 7.352L21.6 20.679h-5.924l-4.64-6.067-5.31 6.067H2.78l6.88-7.864-7.26-9.49h6.076l4.194 5.546 4.851-5.546Zm-1.033 15.593h1.632L7.59 4.995H5.838l10.65 13.923Z"/></svg>;
// const SlackSVG     = () => <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white"><path d="M18.164 7.93V5.084a2.198 2.198 0 0 0 1.267-1.978v-.067A2.2 2.2 0 0 0 17.238.845h-.067a2.2 2.2 0 0 0-2.193 2.193v.067a2.195 2.195 0 0 0 1.252 1.973l.013.006v2.852a6.22 6.22 0 0 0-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 1 0 4.3 4.656l-.012.006 7.697 5.991a6.175 6.175 0 0 0-1.038 3.446 6.22 6.22 0 0 0 1.147 3.607l-.013-.02-2.342 2.343a1.967 1.967 0 0 0-.58-.095h-.002a2.033 2.033 0 1 0 2.033 2.033 1.982 1.982 0 0 0-.1-.595l.005.014 2.317-2.317a6.246 6.246 0 1 0 4.782-11.134l-.036-.005h.006Zm-.964 9.378a3.206 3.206 0 1 1 3.215-3.207v.002a3.207 3.207 0 0 1-3.207 3.207l-.008-.002Z"/></svg>;

// // ─── Layout data ──────────────────────────────────────────────────────────────
// // All connection lines point toward the center cloud at ~(238, 82) in a 476×164 SVG viewBox
// const CENTER = { x: 238, y: 82 };

// const LEFT_ICONS = [
//   { id: 'apple',   style: { transform: 'translate(-24px, 0px)'    }, Icon: AppleSVG,   cx: 50,  cy: 24  },
//   { id: 'discord', style: { transform: 'translate(80px, 0px)'     }, Icon: DiscordSVG,  cx: 157, cy: 24  },
//   { id: 'google',  style: { transform: 'translate(160px, 0px)'    }, Icon: GoogleSVG,   cx: 237, cy: 24  },
//   { id: 'github',  style: { transform: 'translate(208px, 48px)'   }, Icon: GithubSVG,   cx: 280, cy: 72  },
//   { id: 'notion',  style: { transform: 'translate(208px, 160px)'  }, Icon: NotionSVG,   cx: 280, cy: 150 },
// ];

// const RIGHT_ICONS = [
//   { id: 'slack',     style: { transform: 'translate(-24px, 0px)'   }, Icon: SlackSVG,     cx: 426, cy: 24  },
//   { id: 'x',         style: { transform: 'translate(80px, 0px)'    }, Icon: XSVG,         cx: 317, cy: 24  },
//   { id: 'dropbox',   style: { transform: 'translate(160px, 0px)'   }, Icon: DropboxSVG,   cx: 397, cy: 24  },
//   { id: 'atlassian', style: { transform: 'translate(208px, 48px)'  }, Icon: AtlassianSVG, cx: 424, cy: 72  },
//   { id: 'microsoft', style: { transform: 'translate(208px, 160px)' }, Icon: MicrosoftSVG, cx: 424, cy: 136 },
//   { id: 'linkedin',  style: { transform: 'translate(208px, 208px)' }, Icon: LinkedInSVG,  cx: 424, cy: 184 },
// ];

// // ─── Main component ───────────────────────────────────────────────────────────
// export function SocialSignOnComponentS() {
//   const iconRefsLeft  = useRef([]);
//   const iconRefsRight = useRef([]);
//   const lineRefsLeft  = useRef([]);
//   const lineRefsRight = useRef([]);
//   const cloudBoxRef   = useRef(null);
//   const cloudGlowRef  = useRef(null);
//   const cloudDarkRef  = useRef(null);
//   const cloudLitRef   = useRef(null);
//   const tlRef         = useRef(null);

//   useEffect(() => {
//     const allIcons = [...iconRefsLeft.current, ...iconRefsRight.current].filter(Boolean);
//     const allLines = [...lineRefsLeft.current, ...lineRefsRight.current].filter(Boolean);

//     // Set initial states
//     gsap.set(allLines,              { strokeDashoffset: (_, el) => parseFloat(el.getAttribute('stroke-dasharray') || 0), opacity: 0 });
//     gsap.set(allIcons,              { boxShadow: '0 0 0 0px rgba(93,227,255,0)' });
//     gsap.set(cloudGlowRef.current,  { opacity: 0 });
//     gsap.set(cloudDarkRef.current,  { opacity: 1 });
//     gsap.set(cloudLitRef.current,   { opacity: 0 });
//     gsap.set(cloudBoxRef.current,   {
//       boxShadow: '0 1px 1px rgba(255,255,255,0.05) inset, 0 2px 13px rgba(0,0,0,0.2), 0 1px 2px rgba(0,0,0,0.2), 0 0 0 3px rgba(19,19,22,0.5)',
//     });

//     const tl = gsap.timeline({ repeat: -1, delay: 0.8 });

//     // ── Phase 1: Lines draw in, staggered ──
//     tl.to(allLines, {
//       strokeDashoffset: 0,
//       opacity: 1,
//       duration: 0.55,
//       ease: 'power2.inOut',
//       stagger: 0.06,
//     }, 0);

//     // ── Phase 1b: Icon glow pulses as line arrives ──
//     allIcons.forEach((icon, i) => {
//       const t = i * 0.06 + 0.25;
//       tl.to(icon, { boxShadow: '0 0 0 5px rgba(93,227,255,0.2), 0 0 18px rgba(93,227,255,0.12)', duration: 0.25, ease: 'power2.out' }, t)
//         .to(icon, { boxShadow: '0 0 0 0px rgba(93,227,255,0)',                                    duration: 0.45, ease: 'power2.in'  }, t + 0.3);
//     });

//     // ── Phase 2: Cloud lights up (after last line finishes) ──
//     const afterLines = (allLines.length - 1) * 0.06 + 0.55 + 0.15;

//     tl.to(cloudDarkRef.current, { opacity: 0, duration: 0.4, ease: 'power2.inOut' }, afterLines)
//       .to(cloudLitRef.current,  { opacity: 1, duration: 0.4, ease: 'power2.inOut' }, afterLines)
//       .to(cloudGlowRef.current, { opacity: 1, duration: 0.4, ease: 'power2.inOut' }, afterLines)
//       .to(cloudBoxRef.current,  {
//         boxShadow: '0 1px 1px rgba(255,255,255,0.05) inset, 0 2px 13px rgba(0,0,0,0.2), 0 1px 2px rgba(0,0,0,0.2), 0 0 0 3px rgba(93,227,255,0.3), 0 0 30px rgba(93,227,255,0.28)',
//         duration: 0.4, ease: 'power2.inOut',
//       }, afterLines);

//     // ── Phase 3: Lines fade out ──
//     tl.to(allLines, { opacity: 0, duration: 0.35, ease: 'power2.in' }, afterLines + 0.1);

//     // ── Phase 4: Cloud dims back ──
//     const cloudHold = afterLines + 1.5;
//     tl.to(cloudDarkRef.current, { opacity: 1, duration: 0.5, ease: 'power2.inOut' }, cloudHold)
//       .to(cloudLitRef.current,  { opacity: 0, duration: 0.5, ease: 'power2.inOut' }, cloudHold)
//       .to(cloudGlowRef.current, { opacity: 0, duration: 0.5, ease: 'power2.inOut' }, cloudHold)
//       .to(cloudBoxRef.current,  {
//         boxShadow: '0 1px 1px rgba(255,255,255,0.05) inset, 0 2px 13px rgba(0,0,0,0.2), 0 1px 2px rgba(0,0,0,0.2), 0 0 0 3px rgba(19,19,22,0.5)',
//         duration: 0.5, ease: 'power2.inOut',
//       }, cloudHold);

//     // ── Reset lines for next loop ──
//     tl.set(allLines, {
//       strokeDashoffset: (_, el) => parseFloat(el.getAttribute('stroke-dasharray') || 0),
//       opacity: 0,
//     }, cloudHold + 0.5);

//     tlRef.current = tl;
//     return () => tl.kill();
//   }, []);

//   // Shared background panel SVG
//   const PanelSVG = () => (
//     <svg viewBox="0 0 109 216" fill="none" className="absolute right-[1.125rem] top-[1.125rem] h-[13.5rem] w-[6.8125rem] overflow-visible">
//       <g filter="url(#social-background-filter)">
//         <path fill="#fff" fillOpacity=".02" d="M 104.715 48.667 L 61.353 4.402 A 8 8 0 0 0 55.638 2 H -100 a 8 8 0 0 0 -8 8 V 206 a 8 8 0 0 0 8 8 H 99 A 8 8 0 0 0 107 206 V 54.266 C 107 52.172 106.18 50.163 104.715 48.667 Z" shapeRendering="crispEdges" />
//         <path stroke="#fff" strokeOpacity=".05" d="M 60.996 4.752 L 104.358 49.017 A 7.5 7.5 0 0 1 106.5 54.265 V 206 A 7.5 7.5 0 0 1 99 213.5 H -100 a 7.5 7.5 0 0 1 -7.5 -7.5 V 10 a 7.5 7.5 0 0 1 7.5 -7.5 H 55.638 A 7.5 7.5 0 0 1 60.996 4.752 Z" shapeRendering="crispEdges" />
//       </g>
//     </svg>
//   );

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black p-8">
//       <div className="group isolate flex flex-col rounded-2xl bg-[#212126] shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.025] overflow-hidden w-[476px] h-[260px]">

//         {/* Text — bottom */}
//         <div className="relative z-10 flex-none px-6 order-last pb-6">
//           <h3 className="text-sm font-medium text-white">Social Sign-On</h3>
//           <p className="mt-2 text-pretty text-sm/5 text-gray-400">
//             Add high-conversion Social Sign-on (SSO) to your application in minutes. 20+ options and growing.
//           </p>
//         </div>

//         {/* Visual area */}
//         <div className="pointer-events-none relative flex-auto select-none min-h-[10.25rem]" aria-hidden="true">
//           <div className="absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,white_60%,transparent)]">

//             {/* Background path */}
//             <div className="relative mx-auto aspect-[98/192] w-[calc(98/16*1rem)]">
//               <svg viewBox="0 0 98 192" fill="none" className="absolute inset-0 h-full w-full">
//                 <path stroke="#fff" strokeOpacity=".06" d="M49 192V96.266a8 8 0 0 0-2.285-5.599L3.285 46.333A8 8 0 0 1 1 40.734V-28M49 93l45.715-46.667A8 8 0 0 0 97 40.734V-23" />
//               </svg>
//             </div>

//             {/* ── ConnectionLine SVG overlay ── */}
//             <svg
//               className="absolute inset-0 w-full h-full"
//               viewBox="0 0 476 164"
//               preserveAspectRatio="xMidYMid meet"
//               style={{ overflow: 'visible' }}
//             >
//               <defs>
//                 <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
//                   <stop offset="0%"   stopColor="#5DE3FF" stopOpacity="0" />
//                   <stop offset="50%"  stopColor="#5DE3FF" stopOpacity="0.75" />
//                   <stop offset="100%" stopColor="#5DE3FF" stopOpacity="0" />
//                 </linearGradient>
//               </defs>
//               {LEFT_ICONS.map((icon, i) => (
//                 <ConnectionLine
//                   key={icon.id}
//                   x1={icon.cx} y1={icon.cy}
//                   x2={CENTER.x} y2={CENTER.y}
//                   innerRef={el => { lineRefsLeft.current[i] = el; }}
//                 />
//               ))}
//               {RIGHT_ICONS.map((icon, i) => (
//                 <ConnectionLine
//                   key={icon.id}
//                   x1={icon.cx} y1={icon.cy}
//                   x2={CENTER.x} y2={CENTER.y}
//                   innerRef={el => { lineRefsRight.current[i] = el; }}
//                 />
//               ))}
//             </svg>

//             {/* ── Left icon group ── */}
//             <div className="absolute right-1/2 top-6 mr-[calc(76/16*1rem)]">
//               <div className="relative h-[15.5rem] w-[15.5rem]">
//                 <PanelSVG />
//                 <div style={{ opacity: 0.7 }}>
//                   {LEFT_ICONS.map((icon, i) => (
//                     <IconButton
//                       key={icon.id}
//                       style={icon.style}
//                       innerRef={el => { iconRefsLeft.current[i] = el; }}
//                     >
//                       <icon.Icon />
//                     </IconButton>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* ── Right icon group (mirrored) ── */}
//             <div className="absolute left-1/2 top-6 ml-[calc(76/16*1rem)] -scale-x-100">
//               <div className="relative h-[15.5rem] w-[15.5rem]">
//                 <PanelSVG />
//                 <div style={{ opacity: 0.7 }}>
//                   {RIGHT_ICONS.map((icon, i) => (
//                     <IconButton
//                       key={icon.id}
//                       style={icon.style}
//                       flip
//                       innerRef={el => { iconRefsRight.current[i] = el; }}
//                     >
//                       <icon.Icon />
//                     </IconButton>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* ── Central cloud ── */}
//             <div className="absolute left-1/2 top-0 ml-[calc(-98/2/16*1rem)] aspect-[98/192] w-[calc(98/16*1rem)] pt-[calc(60/16*1rem)]">
//               <div
//                 ref={cloudBoxRef}
//                 className="relative mx-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-sm bg-gray-800 bg-gradient-to-br from-white/5 to-[64%]"
//               >
//                 <div
//                   ref={cloudGlowRef}
//                   className="absolute inset-0"
//                   style={{ backgroundImage: 'radial-gradient(111.72% 100% at 50% 0%, rgba(118,237,255,0.25), rgba(118,237,255,0) 53.91%)' }}
//                 />
//                 <div className="relative">
//                   <svg ref={cloudDarkRef} viewBox="0 0 34 23" fill="none" className="w-[calc(34/16*1rem)] overflow-visible">
//                     <g filter="url(#social-cloud-filter0)">
//                       <path fill="#212126" d="M26.008 22.984a.008.008 0 0 0-.008.008.008.008 0 0 1-.008.008H8.008A.008.008 0 0 1 8 22.992a.008.008 0 0 0-.009-.008 7.5 7.5 0 1 1 0-14.968A.008.008 0 0 0 8 8.008C8 8.004 8.003 8 8.008 8h.02a.03.03 0 0 0 .03-.026 9.001 9.001 0 0 1 17.884 0 .029.029 0 0 0 .029.026h.02c.005 0 .009.004.009.008 0 .005.004.008.008.008a7.5 7.5 0 1 1 0 14.968Z" />
//                     </g>
//                   </svg>
//                   <svg ref={cloudLitRef} viewBox="0 0 34 23" fill="none" className="absolute inset-0 w-[calc(34/16*1rem)] overflow-visible">
//                     <g filter="url(#social-cloud-active-filter)">
//                       <path fill="#5DE3FF" d="M26.008 22.984a.008.008 0 0 0-.008.008.008.008 0 0 1-.008.008H8.008A.008.008 0 0 1 8 22.992a.008.008 0 0 0-.009-.008 7.5 7.5 0 1 1 0-14.968A.008.008 0 0 0 8 8.008C8 8.004 8.003 8 8.008 8h.02a.03.03 0 0 0 .03-.026 9.001 9.001 0 0 1 17.884 0 .029.029 0 0 0 .029.026h.02c.005 0 .009.004.009.008 0 .005.004.008.008.008a7.5 7.5 0 1 1 0 14.968Z" />
//                     </g>
//                   </svg>
//                 </div>
//                 <div className="absolute -inset-4 bg-gradient-to-br from-white/0 from-[35%] via-white/25 to-white/0 to-[65%] mix-blend-overlay" style={{ transform: 'translate(-4rem, -4rem)' }} />
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* SVG filter defs */}
//         <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
//           <defs>
//             <filter id="social-background-filter" width="219" height="216" x="-110" y="0" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
//               <feFlood floodOpacity="0" result="BackgroundImageFix" />
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
//               <feOffset /><feGaussianBlur stdDeviation="1" />
//               <feComposite in2="hardAlpha" operator="out" />
//               <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
//               <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1860_5760" />
//               <feBlend in="SourceGraphic" in2="effect1_dropShadow_1860_5760" result="shape" />
//             </filter>
//             <filter id="social-cloud-filter0" width="34" height="25" x="0" y="0" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
//               <feFlood floodOpacity="0" result="BackgroundImageFix" />
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
//               <feOffset dy="1" /><feComposite in2="hardAlpha" operator="out" />
//               <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.06 0" />
//               <feBlend in2="BackgroundImageFix" mode="color-dodge" result="effect1_dropShadow_228_61" />
//               <feBlend in="SourceGraphic" in2="effect1_dropShadow_228_61" result="shape" />
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
//               <feOffset dy="2" /><feGaussianBlur stdDeviation="2.5" />
//               <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
//               <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
//               <feBlend in2="shape" result="effect2_innerShadow_228_61" />
//             </filter>
//             <filter id="social-cloud-active-filter" width="52" height="41" x="-9" y="-9" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
//               <feFlood floodOpacity="0" result="BackgroundImageFix" />
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
//               <feMorphology in="SourceAlpha" operator="dilate" radius="1" result="effect1_dropShadow_228_63" />
//               <feOffset /><feGaussianBlur stdDeviation="4" />
//               <feComposite in2="hardAlpha" operator="out" />
//               <feColorMatrix values="0 0 0 0 0.419608 0 0 0 0 0.905882 0 0 0 0 1 0 0 0 0.4 0" />
//               <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_228_63" />
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
//               <feOffset /><feGaussianBlur stdDeviation="1" />
//               <feComposite in2="hardAlpha" operator="out" />
//               <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0" />
//               <feBlend in2="effect1_dropShadow_228_63" result="effect2_dropShadow_228_63" />
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
//               <feOffset /><feGaussianBlur stdDeviation=".5" />
//               <feComposite in2="hardAlpha" operator="out" />
//               <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0" />
//               <feBlend in2="effect2_dropShadow_228_63" result="effect3_dropShadow_228_63" />
//               <feBlend in="SourceGraphic" in2="effect3_dropShadow_228_63" result="shape" />
//               <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
//               <feOffset dy="1" />
//               <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
//               <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
//               <feBlend in2="shape" result="effect4_innerShadow_228_63" />
//             </filter>
//           </defs>
//         </svg>

//       </div>
//     </div>
//   );
// }

// export function RecreatedComponent() {
//   const [coords, setCoords] = useState({ x: 50, y: 50 });
//   const [opacity, setOpacity] = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!containerRef.current) return;
//     const rect = containerRef.current.getBoundingClientRect();
//     const x = ((e.clientX - rect.left) / rect.width) * 100;
//     const y = ((e.clientY - rect.top) / rect.height) * 100;
//     setCoords({ x, y });
//     setOpacity(1);
//   };

//   const handleMouseLeave = () => {
//     setOpacity(0);
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a] p-4 font-sans">
//       <div
//         ref={containerRef}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         className="relative h-[286px] w-[382px] overflow-hidden rounded-[16px] shadow-2xl transition-all duration-500 ease-out"
//         style={{
//           boxShadow: '0 0 40px -10px rgba(0,0,0,0.5)',
//         }}
//       >
//         {/* Base Background: Dark Forest Image */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: `linear-gradient(to bottom, rgba(5, 12, 28, 0.7), rgba(5, 12, 28, 0.9)), url('https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1000&auto=format&fit=crop')`,
//           }}
//         />

//         {/* Subtle Grid Overlay */}
//         <div 
//           className="absolute inset-0 opacity-20 pointer-events-none"
//           style={{
//             backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
//             backgroundSize: '40px 40px'
//           }}
//         />

//         {/* Content Layer (Always visible, slightly dimmed when not hovered) */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
//           <div className="mb-2 translate-y-2">
//             <svg width="60" height="60" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path 
//                 d="M2.99994 3.419C2.99994 3.419 21.6142 7.43646 22.7921 12.153C23.97 16.8695 3.41838 23.0306 3.41838 23.0306" 
//                 stroke="white" 
//                 strokeWidth="4" 
//                 strokeMiterlimit="3.86874" 
//                 strokeLinecap="round"
//                 className="opacity-40"
//               />
//             </svg>
//           </div>
//           <div className="text-[32px] font-bold tracking-tight text-white/50">
//             Hover over me
//           </div>
//         </div>

//         {/* Interactive Foil Layer (From Provided Code) */}
//         <div
//           className="will-change-background after:grid-area-[inherit] after:bg-repeat-[inherit] after:bg-attachment-[inherit] after:bg-origin-[inherit] after:bg-clip-[inherit] relative z-20 grid h-full w-full mix-blend-color-dodge transition-opacity duration-300 ease-in-out after:bg-[inherit] after:content-['']"
//           style={{
//             '--opacity': opacity,
//             '--m-x': `${coords.x}%`,
//             '--m-y': `${coords.y}%`,
//             '--bg-x': `${coords.x}%`,
//             '--bg-y': `${coords.y}%`,
//             '--step': '5%',
//             '--foil-svg': `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.99994 3.419C2.99994 3.419 21.6142 7.43646 22.7921 12.153C23.97 16.8695 3.41838 23.0306 3.41838 23.0306' stroke='white' stroke-width='5' stroke-miterlimit='3.86874' stroke-linecap='round' style='mix-blend-mode:darken'/%3E%3C/svg%3E")`,
//             '--pattern': 'var(--foil-svg) center/40% no-repeat',
//             '--rainbow': 'repeating-linear-gradient(0deg, rgb(255,119,115) calc(var(--step) * 1), rgba(255,237,95,1) calc(var(--step) * 2), rgba(168,255,95,1) calc(var(--step) * 3), rgba(131,255,247,1) calc(var(--step) * 4), rgba(120,148,255,1) calc(var(--step) * 5), rgb(216,117,255) calc(var(--step) * 6), rgb(255,119,115) calc(var(--step) * 7)) 0% var(--bg-y)/200% 700% no-repeat',
//             '--diagonal': 'repeating-linear-gradient(128deg, #0e152e 0%, hsl(180,10%,60%) 3.8%, hsl(180,10%,60%) 4.5%, hsl(180,10%,60%) 5.2%, #0e152e 10%, #0e152e 12%) var(--bg-x) var(--bg-y)/300% no-repeat',
//             '--shade': 'radial-gradient(farthest-corner circle at var(--m-x) var(--m-y), rgba(255,255,255,0.1) 12%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.25) 120%) var(--bg-x) var(--bg-y)/300% no-repeat',
//             '--radius': '16px',
//             opacity: 'var(--opacity)',
//             background: 'var(--pattern), var(--rainbow), var(--diagonal), var(--shade)',
//             backgroundBlendMode: 'hue, hue, hue, overlay',
//             clipPath: 'inset(0 0 1px 0 round var(--radius))',
//             gridArea: '1/1',
//           } as React.CSSProperties}
//         >
//           {/* Text inside the foil layer to ensure it gets the same holographic blend treatment on hover */}
//           <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
//              <div className="text-[32px] font-bold tracking-tight text-white mt-[68px]">
//                Hover over me
//              </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function PostgresDatabaseComponent() {
//   return (
//     <div className="w-full min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
//       <div className="relative w-full max-w-[894px] h-[398px] bg-[#171c23] border border-[#2e2e2e] rounded-lg overflow-hidden p-8 md:p-10 flex flex-col font-sans select-none">
        
//         {/* Header Section */}
//         <div className="flex items-center gap-3 text-white mb-6 z-10">
//           <svg 
//             width="20" 
//             height="20" 
//             viewBox="0 0 24 24" 
//             fill="none" 
//             stroke="currentColor" 
//             strokeWidth="2" 
//             strokeLinecap="round" 
//             strokeLinejoin="round"
//           >
//             <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
//             <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
//             <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
//           </svg>
//           <h2 className="text-[19px] font-normal tracking-tight">Postgres Database</h2>
//         </div>

//         {/* Description Section */}
//         <div className="max-w-[280px] z-10">
//           <p className="text-[#898989] text-[16px] leading-[24px]">
//             Every project is <span className="text-white font-medium">a full Postgres database</span>, the world's most trusted relational database.
//           </p>
//         </div>

//         {/* Feature List Section */}
//         <div className="mt-auto space-y-3 z-10">
//           {[
//             "100% portable",
//             "Built-in Auth with RLS",
//             "Easy to extend"
//           ].map((feature, idx) => (
//             <div key={idx} className="flex items-center gap-3 text-white group cursor-pointer">
//               <svg 
//                 className="w-4 h-4 text-white shrink-0" 
//                 viewBox="0 0 24 24" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 strokeWidth="2.5" 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round"
//               >
//                 <polyline points="20 6 9 17 4 12"></polyline>
//               </svg>
//               <span className="text-[15px] font-normal tracking-wide">{feature}</span>
//             </div>
//           ))}
//         </div>

//         {/* Visual Composition Section (Elephant Background) */}
//         <figure 
//           className="absolute inset-0 z-0 hidden sm:block pointer-events-none" 
//           role="img" 
//           aria-label="Supabase Postgres database visual composition"
//         >
//           <span className="absolute w-full md:w-auto h-full md:aspect-square flex items-end md:items-center justify-center md:justify-end right-0 left-0 md:left-auto xl:-right-12 2xl:right-0 top-12 md:top-0 md:bottom-0 my-auto">
//             {/* The Background Elephant SVG Structure */}
//             <div className="relative w-full h-full max-w-[450px] opacity-40">
//                 {/* Circular wireframes / background patterns */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="absolute w-[80%] h-[80%] border border-[#2e2e2e] rounded-[40px] rotate-12"></div>
//                     <div className="absolute w-[85%] h-[85%] border border-[#2e2e2e] rounded-[50px] rotate-6"></div>
//                     <div className="absolute w-[75%] h-[75%] border border-[#2e2e2e] rounded-[30px] -rotate-3"></div>
//                     <div className="absolute w-[90%] h-[90%] border border-[#2e2e2e] rounded-[60px] rotate-2"></div>
//                 </div>

//                 <svg 
//                     xmlns="http://www.w3.org/2000/svg" 
//                     fill="none" 
//                     viewBox="0 0 390 430" 
//                     className="absolute w-full h-full z-10 m-auto"
//                 >
//                     <g stroke="#ffffff20" strokeWidth="1.5">
//                         <path d="M192.144 125.816h-53.465c-8.506 0-16.159 5.17-19.334 13.061L99.0045 189.43c-3.0613 7.608-1.3448 16.306 4.3775 22.181l10.232 10.506c4.792 4.919 7.474 11.516 7.474 18.384l-.001 14.473c0 20.197 16.373 36.569 36.569 36.569 6.16 0 11.154-4.993 11.154-11.153l.001-86.241c0-18.629 7.441-36.486 20.668-49.602 2.746-2.723 7.178-2.704 9.9.041 2.722 2.745 2.703 7.178-.042 9.9-10.577 10.488-16.526 24.766-16.526 39.661l-.001 86.241c0 13.892-11.262 25.153-25.154 25.153-27.928 0-50.569-22.64-50.569-50.569l.001-14.474c0-3.218-1.257-6.309-3.503-8.615L93.353 221.38c-9.5904-9.847-12.4673-24.424-7.3366-37.176l20.3406-50.553c5.308-13.192 18.101-21.835 32.322-21.835h55.729v.084h10.339c49.104 0 88.91 39.806 88.91 88.91v50.842c0 3.866-3.134 7-7 7s-7-3.134-7-7V200.81c0-41.372-33.538-74.91-74.91-74.91H193.23c-.37 0-.732-.029-1.086-.084Z"></path>
//                         <path d="M210.03 283.94c0-3.866-3.134-7-7-7s-7 3.134-7 7v3.113c0 26.959 21.854 48.814 48.813 48.814 26.351 0 47.825-20.879 48.781-46.996h24.614c3.866 0 7-3.134 7-7s-3.134-7-7-7h-26.841c-30.744 0-60.256-12.083-82.173-33.643-2.756-2.711-7.188-2.675-9.899.081-2.711 2.756-2.675 7.188.081 9.9 21.725 21.371 50.116 34.423 80.228 37.134-.679 18.629-15.995 33.524-34.791 33.524-19.227 0-34.813-15.587-34.813-34.814v-3.113ZM238.03 202.145c0 4.792 3.885 8.677 8.677 8.677s8.676-3.885 8.676-8.677-3.884-8.676-8.676-8.676-8.677 3.884-8.677 8.676Z"></path>
//                     </g>
                    
//                     {/* The stroke with gradients when hovered (simulated with standard state or opacity here) */}
//                     <path stroke="url(#a)" strokeWidth="2.5" d="M192.144 125.816h-53.465c-8.506 0-16.159 5.17-19.334 13.061L99.0045 189.43c-3.0613 7.608-1.3448 16.306 4.3775 22.181l10.232 10.506c4.792 4.919 7.474 11.516 7.474 18.384l-.001 14.473c0 20.197 16.373 36.569 36.569 36.569 6.16 0 11.154-4.993 11.154-11.153l.001-86.241c0-18.629 7.441-36.486 20.668-49.602 2.746-2.723 7.178-2.704 9.9.041 2.722 2.745 2.703 7.178-.042 9.9-10.577 10.488-16.526 24.766-16.526 39.661l-.001 86.241c0 13.892-11.262 25.153-25.154 25.153-27.928 0-50.569-22.64-50.569-50.569l.001-14.474c0-3.218-1.257-6.309-3.503-8.615L93.353 221.38c-9.5904-9.847-12.4673-24.424-7.3366-37.176l20.3406-50.553c5.308-13.192 18.101-21.835 32.322-21.835h55.729v.084h10.339c49.104 0 88.91 39.806 88.91 88.91v50.842c0 3.866-3.134 7-7 7s-7-3.134-7-7V200.81c0-41.372-33.538-74.91-74.91-74.91H193.23c-.37 0-.732-.029-1.086-.084Z"></path>
//                     <path stroke="url(#b)" strokeWidth="2.5" d="M210.03 283.94c0-3.866-3.134-7-7-7s-7 3.134-7 7v3.113c0 26.959 21.854 48.814 48.813 48.814 26.351 0 47.825-20.879 48.781-46.996h24.614c3.866 0 7-3.134 7-7s-3.134-7-7-7h-26.841c-30.744 0-60.256-12.083-82.173-33.643-2.756-2.711-7.188-2.675-9.899.081-2.711 2.756-2.675 7.188.081 9.9 21.725 21.371 50.116 34.423 80.228 37.134-.679 18.629-15.995 33.524-34.791 33.524-19.227 0-34.813-15.587-34.813-34.814v-3.113Z"></path>
//                     <path stroke="url(#c)" strokeWidth="2.5" d="M238.03 202.145c0 4.792 3.885 8.677 8.677 8.677s8.676-3.885 8.676-8.677-3.884-8.676-8.676-8.676-8.677 3.884-8.677 8.676Z"></path>
//                     <defs>
//                         <radialGradient id="a" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-125.5 36) rotate(45) scale(166 180)">
//                             <stop stopColor="#3ecf8e"></stop>
//                             <stop offset="1" stopColor="#898989"></stop>
//                         </radialGradient>
//                         <radialGradient id="b" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-125.5 36) rotate(45) scale(166 180)">
//                             <stop stopColor="#3ecf8e"></stop>
//                             <stop offset="1" stopColor="#898989"></stop>
//                         </radialGradient>
//                         <radialGradient id="c" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-125.5 36) rotate(45) scale(166 180)">
//                             <stop stopColor="#3ecf8e"></stop>
//                             <stop offset="1" stopColor="#898989"></stop>
//                         </radialGradient>
//                     </defs>
//                 </svg>
//             </div>
//           </span>
//         </figure>
//       </div>
//     </div>
//   );
// }

// export function TrustedSection() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const columns = gsap.utils.toArray<HTMLUListElement>('.logo-column');

//       columns.forEach((col, i) => {
//         const tl = gsap.timeline({
//           repeat: -1,
//           delay: i * 0.15, // Staggered start for each column
//         });

//         // The sequence: 
//         // 1. Start at 0% (Item 0)
//         // 2. Move to -100% (Item 1)
//         // 3. Move to -200% (Item 2)
//         // 4. Move to -300% (Item 3 - the clone of Item 0)
//         // 5. Reset instantly to 0%
        
//         tl.to(col, {
//           yPercent: -100,
//           duration: 0.8,
//           ease: "power2.inOut",
//         }, "+=2") // Pause for 2 seconds
//         .to(col, {
//           yPercent: -200,
//           duration: 0.8,
//           ease: "power2.inOut",
//         }, "+=2")
//         .to(col, {
//           yPercent: -300,
//           duration: 0.8,
//           ease: "power2.inOut",
//         }, "+=2")
//         .set(col, { yPercent: 0 }); // Instant reset to start of loop
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={containerRef} className="w-full bg-[#f1f7ff] border-y border-blue-500/10">
//       <div className="sm:flex mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
//         <p className="flex-auto self-center text-balance py-8 text-center text-base/6 font-normal text-gray-950 sm:pr-10 sm:text-left xl:py-10">
//           Trusted by fast-growing companies around the world.
//         </p>
        
//         <ul role="list" className="-mx-6 grid flex-none grid-cols-2 sm:mx-0 sm:border-l sm:border-gray-950/5 lg:flex">
//           {/* Column 1 */}
//           <li className="relative isolate flex flex-none justify-center overflow-hidden border-t border-gray-950/5 sm:border-t-0 border-r w-full lg:w-40 xl:w-48">
//             <div 
//               className="flex items-center justify-center py-3 w-full" 
//               style={{
//                 WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 40%, black 60%, transparent)',
//                 maskImage: 'linear-gradient(to bottom, transparent, black 40%, black 60%, transparent)'
//               }}
//             >
//               <ul role="list" className="logo-column grid w-full">
//                 <li className="col-start-1 row-start-1 px-7 py-3 flex items-center justify-center gap-2" style={{ transform: 'translateY(0%)' }}>
//                   <BrowserbaseLogo />
//                 </li>
//                 <li className="col-start-1 row-start-1 px-7 py-3 flex items-center justify-center gap-2" style={{ transform: 'translateY(100%)' }}>
//                   <InngestLogo />
//                 </li>
//                 <li className="col-start-1 row-start-1 px-7 py-3 flex items-center justify-center gap-2" style={{ transform: 'translateY(200%)' }}>
//                   <ProfoundLogo />
//                 </li>
//                 <li className="col-start-1 row-start-1 px-7 py-3 flex items-center justify-center gap-2" style={{ transform: 'translateY(300%)' }}>
//                   <BrowserbaseLogo />
//                 </li>
//               </ul>
//             </div>
//           </li>

//           {/* Column 2 */}
//           <li className="relative isolate flex flex-none justify-center overflow-hidden border-t border-gray-950/5 sm:border-t-0 sm:border-r w-full lg:w-40 xl:w-48">
//             <div 
//               className="flex items-center justify-center py-3 w-full" 
//               style={{
//                 WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 40%, black 60%, transparent)',
//                 maskImage: 'linear-gradient(to bottom, transparent, black 40%, black 60%, transparent)'
//               }}
//             >
//               <ul role="list" className="logo-column grid w-full">
//                 <li className="col-start-1 row-start-1 px-7 py-3 flex items-center justify-center gap-2" style={{ transform: 'translateY(0%)' }}>
//                   <BraintrustLogo />
//                 </li>
//                 <li className="col-start-1 row-start-1 px-7 py-3 flex items-center justify-center gap-2" style={{ transform: 'translateY(100%)' }}>
//                   <DurableLogo />
//                 </li>
//                 <li className="col-start-1 row-start-1 px-7 py-3 flex items-center justify-center gap-2" style={{ transform: 'translateY(200%)' }}>
//                   <OpenRouterLogo />
//                 </li>
//                 <li className="col-start-1 row-start-1 px-7 py-3 flex items-center justify-center gap-2" style={{ transform: 'translateY(300%)' }}>
//                   <BraintrustLogo />
//                 </li>
//               </ul>
//             </div>
//           </li>

//           {/* Column 3 */}
//           <li className="relative isolate flex flex-none justify-center overflow-hidden border-t border-gray-950/5 lg:border-t-0 border-r w-full lg:w-40 xl:w-48">
//             <div 
//               className="flex items-center justify-center py-3 w-full" 
//               style={{
//                 WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 40%, black 60%, transparent)',
//                 maskImage: 'linear-gradient(to bottom, transparent, black 40%, black 60%, transparent)'
//               }}
//             >
//               <ul role="list" className="logo-column grid w-full">
//                 <li className="col-start-1 row-start-1 px-7 py-3 flex items-center justify-center gap-2" style={{ transform: 'translateY(0%)' }}>
//                   <HiggsfieldLogo />
//                 </li>
//                 <li className="col-start-1 row-start-1 px-7 py-3 flex items-center justify-center gap-2" style={{ transform: 'translateY(100%)' }}>
//                   <UpstashLogo />
//                 </li>
//                 <li className="col-start-1 row-start-1 px-7 py-3 flex items-center justify-center gap-2" style={{ transform: 'translateY(200%)' }}>
//                   <SamayaLogo />
//                 </li>
//                 <li className="col-start-1 row-start-1 px-7 py-3 flex items-center justify-center gap-2" style={{ transform: 'translateY(300%)' }}>
//                   <HiggsfieldLogo />
//                 </li>
//               </ul>
//             </div>
//           </li>

//           {/* Column 4 */}
//           <li className="relative isolate flex flex-none justify-center overflow-hidden border-t border-gray-950/5 lg:border-t-0 sm:border-r w-full lg:w-40 xl:w-48">
//             <div 
//               className="flex items-center justify-center py-3 w-full" 
//               style={{
//                 WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 40%, black 60%, transparent)',
//                 maskImage: 'linear-gradient(to bottom, transparent, black 40%, black 60%, transparent)'
//               }}
//             >
//               <ul role="list" className="logo-column grid w-full">
//                 <li className="col-start-1 row-start-1 px-7 py-3 flex items-center justify-center gap-2" style={{ transform: 'translateY(0%)' }}>
//                   <ConsensusLogo />
//                 </li>
//                 <li className="col-start-1 row-start-1 px-7 py-3 flex items-center justify-center gap-2" style={{ transform: 'translateY(100%)' }}>
//                   <CartesiaLogo />
//                 </li>
//                 <li className="col-start-1 row-start-1 px-7 py-3 flex items-center justify-center gap-2" style={{ transform: 'translateY(200%)' }}>
//                   <DavidAILogo />
//                 </li>
//                 <li className="col-start-1 row-start-1 px-7 py-3 flex items-center justify-center gap-2" style={{ transform: 'translateY(300%)' }}>
//                   <ConsensusLogo />
//                 </li>
//               </ul>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// function ProfoundLogo() {
//   return (
//     <div className="flex items-center gap-2">
//       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-950 flex-shrink-0">
//         <path d="M12 2L3.5 7V17L12 22L20.5 17V7L12 2ZM12 4.4L18.4 8.1V15.9L12 19.6L5.6 15.9V8.1L12 4.4ZM12 7L7.5 9.6V14.4L12 17L16.5 14.4V9.6L12 7Z" fill="currentColor"/>
//       </svg>
//       <span className="text-xl font-bold tracking-tight text-gray-950 whitespace-nowrap">Profound</span>
//     </div>
//   );
// }

// function OpenRouterLogo() {
//   return (
//     <div className="flex items-center gap-2">
//       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-950 flex-shrink-0">
//         <path d="M4 12C4 7.58172 7.58172 4 12 4M4 12C4 16.4183 7.58172 20 12 20M4 12H10M20 12C20 16.4183 16.4183 20 12 20M20 12C20 7.58172 16.4183 4 12 4M20 12H14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
//       </svg>
//       <span className="text-lg font-medium text-gray-950 whitespace-nowrap">OpenRouter</span>
//     </div>
//   );
// }

// function SamayaLogo() {
//   return (
//     <div className="flex items-center justify-center w-full">
//       <span className="text-2xl font-normal text-gray-950 whitespace-nowrap">ṣamaya</span>
//     </div>
//   );
// }

// function UpstashLogo() {
//   return (
//     <div className="flex items-center gap-2 opacity-80">
//       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
//         <path d="M12 2a10 10 0 1 0 10 10" strokeLinecap="round" />
//         <path d="M12 6a6 6 0 1 0 6 6" strokeLinecap="round" />
//       </svg>
//       <span className="text-lg font-semibold tracking-wide whitespace-nowrap">upstash</span>
//     </div>
//   );
// }

// function CartesiaLogo() {
//   return (
//     <div className="flex items-center gap-2">
//       <div className="grid grid-cols-3 gap-0.5 flex-shrink-0">
//         {[...Array(9)].map((_, i) => (
//           <div key={i} className={`w-1.5 h-1.5 ${[0,1,3,4,6].includes(i) ? 'bg-gray-950' : 'bg-gray-300'}`} />
//         ))}
//       </div>
//       <span className="text-xl font-serif text-gray-900 whitespace-nowrap">Cartesia</span>
//     </div>
//   );
// }

// function DavidAILogo() {
//   return (
//     <div className="flex items-center gap-1.5 opacity-60">
//       <div className="flex items-end gap-[1px] h-6 flex-shrink-0">
//         {[...Array(10)].map((_, i) => (
//           <div key={i} className="w-[1.5px] bg-gray-950" style={{ height: `${20 + Math.sin(i * 1.2) * 40}%` }} />
//         ))}
//       </div>
//       <span className="text-lg font-medium text-gray-700 whitespace-nowrap">David AI</span>
//     </div>
//   );
// }

// function BrowserbaseLogo() {
//   return <div className="text-gray-900 font-bold italic text-lg whitespace-nowrap">Browserbase</div>;
// }

// function InngestLogo() {
//   return <div className="text-gray-900 font-bold text-lg whitespace-nowrap underline decoration-indigo-500">Inngest</div>;
// }

// function BraintrustLogo() {
//   return <div className="text-gray-950 font-bold text-lg tracking-tighter whitespace-nowrap">braintrust</div>;
// }

// function DurableLogo() {
//   return (
//     <div className="flex items-center gap-1.5">
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-950">
//         <path d="M12 3l9 7-9 11-9-11 9-7z" />
//       </svg>
//       <span className="text-gray-950 font-bold text-lg whitespace-nowrap">durable</span>
//     </div>
//   );
// }

// function HiggsfieldLogo() {
//   return <div className="text-gray-900 font-bold text-lg tracking-widest whitespace-nowrap uppercase">Higgsfield</div>;
// }

// function ConsensusLogo() {
//   return <div className="text-gray-900 font-semibold text-lg whitespace-nowrap">Consensus</div>;
// }

// export function SessionManagement() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const laptopLidRef = useRef<HTMLDivElement>(null);
//   const screenGlowRef = useRef<HTMLDivElement>(null);
//   const logoRef = useRef<HTMLDivElement>(null);
//   const buttonRef = useRef<HTMLDivElement>(null);
//   const labelRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const valueRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const lightPathRef = useRef<SVGPathElement>(null);
//   const sidePanelsRef = useRef<SVGSVGElement[]>([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Initial states
//       gsap.set(valueRefs.current, { opacity: 0, x: 20, filter: 'blur(8px)' });
//       gsap.set(lightPathRef.current, { strokeDasharray: 1000, strokeDashoffset: 1000 });
//       gsap.set(logoRef.current, { scale: 0.5, opacity: 0 });

//       const tl = gsap.timeline({ paused: true });

//       tl.to(laptopLidRef.current, {
//         rotateX: 0,
//         backgroundColor: '#334155',
//         duration: 0.7,
//         ease: "power3.out"
//       }, 0)
//       .to(screenGlowRef.current, {
//         opacity: 1,
//         duration: 0.6
//       }, 0.1)
//       .to(logoRef.current, {
//         scale: 1,
//         opacity: 1,
//         duration: 0.5,
//         ease: "back.out(1.7)"
//       }, 0.2)
//       .to(labelRefs.current, {
//         x: -42,
//         duration: 0.5,
//         ease: "power2.out"
//       }, 0.1)
//       .to(valueRefs.current, {
//         x: 38,
//         opacity: 1,
//         filter: 'blur(0px)',
//         stagger: 0.05,
//         duration: 0.4,
//         ease: "power2.out"
//       }, 0.2)
//       .to(buttonRef.current, {
//         color: '#ffffff',
//         borderColor: 'rgba(255,255,255,0.2)',
//         duration: 0.4
//       }, 0.2)
//       .to(lightPathRef.current, {
//         strokeDashoffset: 0,
//         duration: 1.5,
//         ease: "power2.inOut"
//       }, 0)
//       .to(sidePanelsRef.current, {
//         opacity: 1,
//         filter: 'brightness(1.5)',
//         duration: 0.8
//       }, 0);

//       const container = containerRef.current;
//       const handleMouseEnter = () => tl.play();
//       const handleMouseLeave = () => tl.reverse();

//       container?.addEventListener('mouseenter', handleMouseEnter);
//       container?.addEventListener('mouseleave', handleMouseLeave);

//       return () => {
//         container?.removeEventListener('mouseenter', handleMouseEnter);
//         container?.removeEventListener('mouseleave', handleMouseLeave);
//       };
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-slate-950 p-4">
//       <div 
//         ref={containerRef}
//         className="group isolate flex flex-col rounded-2xl bg-[#212126] shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.025] overflow-hidden row-span-2 w-[476px] h-[528px] cursor-default"
//       >
//         <div className="relative z-10 flex-none px-6 pt-6 text-left">
//           <h3 className="text-sm font-medium text-white">Session Management</h3>
//           <p className="mt-2 text-pretty text-sm/5 text-gray-400">
//             Clerk manages the full session lifecycle, including critical security functionality like active device monitoring and session revocation.
//           </p>
//         </div>

//         <div className="pointer-events-none relative flex-auto select-none" style={{ minHeight: '10.25rem' }} aria-hidden="true">
//           <div className="relative flex h-full flex-col items-center justify-center">
//             <div className="relative">
              
//               {/* Card Glow Background */}
//               <div 
//                 ref={screenGlowRef}
//                 className="absolute inset-0 -top-20 bg-blue-500/10 blur-[60px] opacity-0 transition-opacity"
//               />

//               {/* Inner Card */}
//               <div className="relative z-10 mx-auto mt-12 w-64 rounded-lg bg-gray-500/5 bg-gradient-to-br from-white/5 to-65% px-6 pb-6 pt-14 text-[0.625rem]/[1.125rem] shadow-[0_1px_1px_rgba(255,255,255,0.05)_inset,0_2px_13px_rgba(0,0,0,0.2),0_1px_2px_rgba(0,0,0,0.2)] backdrop-blur-sm">
                
//                 {/* Laptop Graphic */}
//                 <div className="relative isolate z-20 mx-auto flex justify-center">
//                   <div className="relative isolate [perspective:1000px]">
//                     {/* Laptop Screen */}
//                     <div 
//                       ref={laptopLidRef}
//                       className="[--screen-off-color:theme(colors.gray.900)] absolute bottom-[calc(100%-0.0625rem)] left-1/2 flex h-[4.25rem] w-[6.5rem] origin-bottom items-center justify-center rounded-t border border-gray-600 shadow-[inset_0_0_0_2px_theme(colors.black/75%)] [transform-style:preserve-3d] after:absolute after:inset-x-[-1px] after:top-0 after:-z-10 after:h-[0.125rem] after:rounded-t-full after:bg-gray-500 after:[transform:rotateX(90deg)_translateY(-1px)] [perspective:60px]" 
//                       style={{ transform: 'rotateX(-75deg) translateX(-50%)', background: 'var(--screen-off-color)' }}
//                     >
//                       {/* Screen Shine */}
//                       <div className="absolute inset-0 z-30 overflow-hidden rounded-[inherit] opacity-20">
//                         <div className="absolute size-[125%] -translate-x-10 -translate-y-1/2 -rotate-45 bg-gradient-to-l from-white/[0.1]"></div>
//                       </div>
                      
//                       {/* Laptop Center Icon */}
//                       <div ref={logoRef} className="rounded-full bg-gray-950 p-2 shadow-[0_1px] shadow-white/5">
//                         <svg className="relative z-20 brightness-150 drop-shadow-[0_0_8px_rgba(125,211,252,0.8)]" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                           <path fillRule="evenodd" clipRule="evenodd" d="M10.9419 1.82065C11.128 1.63454 11.1093 1.32641 10.8906 1.17994C9.77796 0.434669 8.43972 0 6.99997 0C3.13399 0 0 3.13401 0 7C0 8.43976 0.434666 9.778 1.17993 10.8906C1.32641 11.1093 1.63453 11.128 1.82064 10.9419L3.41924 9.3433C3.56372 9.19882 3.58655 8.97468 3.49338 8.79283C3.21791 8.2551 3.06248 7.6457 3.06248 7C3.06248 4.82538 4.82535 3.0625 6.99997 3.0625C7.64566 3.0625 8.25506 3.21792 8.79278 3.4934C8.97463 3.58656 9.19877 3.56374 9.34325 3.41926L10.9419 1.82065ZM9.18748 7C9.18748 8.20812 8.20811 9.1875 6.99999 9.1875C5.79187 9.1875 4.8125 8.20812 4.8125 7C4.8125 5.79188 5.79187 4.8125 6.99999 4.8125C8.20811 4.8125 9.18748 5.79188 9.18748 7ZM10.9432 12.1792C11.1293 12.3653 11.1106 12.6734 10.8919 12.8199C9.77931 13.5652 8.44107 13.9998 7.00131 13.9998C5.56155 13.9998 4.22331 13.5652 3.11067 12.8199C2.89199 12.6734 2.8733 12.3653 3.05942 12.1792L4.65801 10.5806C4.80249 10.4361 5.02663 10.4133 5.20848 10.5064C5.74621 10.7819 6.35561 10.9373 7.00131 10.9373C7.64701 10.9373 8.25641 10.7819 8.79413 10.5064C8.97599 10.4133 9.20012 10.4361 9.34461 10.5806L10.9432 12.1792Z" fill="#5DE3FF"></path>
//                         </svg>
//                       </div>
//                     </div>

//                     {/* Laptop Base */}
//                     <div className="relative h-[0.375rem] w-[7.25rem] rounded-b-md rounded-t-sm bg-gradient-to-b from-gray-600 from-65% to-gray-700 shadow-[inset_0_1px_0px] shadow-white/10 before:absolute before:left-1/2 before:top-0 before:h-[0.125rem] before:w-[1.25rem] before:-translate-x-1/2 before:rounded-b-full before:bg-gray-700 before:shadow-[inset_2px_0_1px_-2px_rgba(0,0,0,0.5),inset_-2px_0_1px_-2px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.1)]"></div>
//                   </div>
//                 </div>

//                 {/* List Items */}
//                 <div className="mt-8 space-y-0.5">
//                   <div className="relative flex py-1.5 items-center justify-center">
//                     <div ref={el => labelRefs.current[0] = el} className="absolute text-gray-400">Device</div>
//                     <div ref={el => valueRefs.current[0] = el} className="absolute font-medium text-white whitespace-nowrap">MacBook Pro</div>
//                   </div>
//                   <div className="relative flex border-t border-white/5 py-1.5 items-center justify-center">
//                     <div ref={el => labelRefs.current[1] = el} className="absolute text-gray-400">Browser</div>
//                     <div ref={el => valueRefs.current[1] = el} className="absolute font-medium text-white whitespace-nowrap">Chrome</div>
//                   </div>
//                   <div className="relative flex border-t border-white/5 py-1.5 items-center justify-center">
//                     <div ref={el => labelRefs.current[2] = el} className="absolute text-gray-400">Location</div>
//                     <div ref={el => valueRefs.current[2] = el} className="absolute font-medium text-white whitespace-nowrap">San Francisco, CA</div>
//                   </div>
//                 </div>

//                 {/* Button */}
//                 <div 
//                   ref={buttonRef}
//                   className="mt-6 rounded-md p-1.5 text-center font-medium text-gray-500 ring-1 ring-inset ring-white/[0.05] transition-colors"
//                 >
//                   Sign out device
//                 </div>
//               </div>

//               {/* Connector SVG (Top) */}
//               <div className="absolute left-1/2 top-[calc(30/16*1rem)] ml-[calc(-600/2/16*1rem)] aspect-[600/87] w-[calc(600/16*1rem)]">
//                 <svg viewBox="0 0 600 87" fill="none" aria-hidden="true" className="absolute inset-0 size-full">
//                   <path d="M0 86h136.686a8 8 0 0 0 5.657-2.343l80.314-80.314A8 8 0 0 1 228.314 1h143.372a8 8 0 0 1 5.657 2.343l80.314 80.314A8 8 0 0 0 463.314 86H600" className="stroke-white/5" strokeWidth="1"></path>
//                   <path 
//                     ref={lightPathRef}
//                     d="M0 86h136.686a8 8 0 0 0 5.657-2.343l80.314-80.314A8 8 0 0 1 228.314 1h143.372a8 8 0 0 1 5.657 2.343l80.314 80.314A8 8 0 0 0 463.314 86H600" 
//                     className="stroke-blue-400/40" 
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                   ></path>
//                 </svg>
//               </div>

//               {/* Side Panels (Right) */}
//               <svg 
//                 ref={el => el && (sidePanelsRef.current[0] = el)}
//                 viewBox="0 0 208 248" fill="none" aria-hidden="true" className="absolute left-full top-[calc(122/16*1rem)] ml-1.5 w-52 opacity-40 transition-opacity"
//               >
//                 <g filter="url(#filter0_bd_29_5466)" shapeRendering="crispEdges">
//                   <path fill="#fff" fillOpacity=".04" d="M4.229 24.678 23.639 4.46A8 8 0 0 1 29.409 2H198a8 8 0 0 1 8 8v228a8 8 0 0 1-8 8H10a8 8 0 0 1-8-8V30.219a8 8 0 0 1 2.229-5.54Z"></path>
//                   <path stroke="#fff" strokeOpacity=".05" d="M24 4.806 4.59 25.024a7.5 7.5 0 0 0-2.09 5.194V238a7.5 7.5 0 0 0 7.5 7.5h188a7.5 7.5 0 0 0 7.5-7.5V10a7.5 7.5 0 0 0-7.5-7.5H29.41A7.5 7.5 0 0 0 24 4.806Z"></path>
//                 </g>
//                 <defs>
//                   <filter id="filter0_bd_29_5466" width="220" height="260" x="-6" y="-6" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
//                     <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//                     <feGaussianBlur in="BackgroundImageFix" stdDeviation="4"></feGaussianBlur>
//                     <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_29_5466"></feComposite>
//                     <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//                     <feOffset></feOffset>
//                     <feGaussianBlur stdDeviation="1"></feGaussianBlur>
//                     <feComposite in2="hardAlpha" operator="out"></feComposite>
//                     <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
//                     <feBlend in2="effect1_backgroundBlur_29_5466" result="effect2_dropShadow_29_5466"></feBlend>
//                     <feBlend in="SourceGraphic" in2="effect2_dropShadow_29_5466" result="shape"></feBlend>
//                   </filter>
//                 </defs>
//               </svg>

//               {/* Side Panels (Left) */}
//               <svg 
//                 ref={el => el && (sidePanelsRef.current[1] = el)}
//                 viewBox="0 0 208 248" fill="none" aria-hidden="true" className="absolute right-full top-[calc(122/16*1rem)] mr-1.5 w-52 -scale-x-100 opacity-40 transition-opacity"
//               >
//                 <g filter="url(#filter0_bd_29_5466)" shapeRendering="crispEdges">
//                   <path fill="#fff" fillOpacity=".04" d="M4.229 24.678 23.639 4.46A8 8 0 0 1 29.409 2H198a8 8 0 0 1 8 8v228a8 8 0 0 1-8 8H10a8 8 0 0 1-8-8V30.219a8 8 0 0 1 2.229-5.54Z"></path>
//                   <path stroke="#fff" strokeOpacity=".05" d="M24 4.806 4.59 25.024a7.5 7.5 0 0 0-2.09 5.194V238a7.5 7.5 0 0 0 7.5 7.5h188a7.5 7.5 0 0 0 7.5-7.5V10a7.5 7.5 0 0 0-7.5-7.5H29.41A7.5 7.5 0 0 0 24 4.806Z"></path>
//                 </g>
//               </svg>
//             </div>
//             {/* Bottom Fade Gradient */}
//             <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(97.14%_100%_at_top,rgba(33,33,38,0)_42.04%,#212126_89.82%)]"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function PasswordCard() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const keyholeRef = useRef<HTMLDivElement>(null);
//   const glowRef = useRef<HTMLDivElement>(null);
//   const barRef = useRef<HTMLDivElement>(null);
//   const dotsRef = useRef<HTMLDivElement[]>([]);

//   // Array to map out the 10 password dots
//   const dotsArray = Array.from({ length: 10 });

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Set initial states
//       gsap.set(dotsRef.current, { opacity: 0, scale: 0 });

//       // Create Timeline
//       const tl = gsap.timeline({ paused: true });

//       tl.to(keyholeRef.current, {
//         rotate: 90,
//         duration: 0.6,
//         ease: "power2.inOut"
//       }, 0)
//       .to(barRef.current, {
//         opacity: 1,
//         duration: 0.4,
//         ease: "power2.out"
//       }, 0)
//       .to(glowRef.current, {
//         opacity: 1,
//         duration: 0.3,
//         ease: "power2.out"
//       }, 0.1)
//       .to(dotsRef.current, {
//         opacity: 1,
//         scale: 1,
//         duration: 0.3,
//         stagger: 0.04,
//         ease: "back.out(2)"
//       }, 0.15);

//       // Hover handlers
//       const onMouseEnter = () => tl.play();
//       const onMouseLeave = () => tl.reverse();

//       const container = containerRef.current;
//       if (container) {
//         container.addEventListener("mouseenter", onMouseEnter);
//         container.addEventListener("mouseleave", onMouseLeave);
//       }
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black p-4">
//       <div 
//         ref={containerRef}
//         className="group isolate flex flex-col rounded-2xl bg-[#212126] shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.025] overflow-hidden w-[476px] h-[260px] cursor-default"
//       >
//         {/* Text Content */}
//         <div className="relative z-10 flex-none px-6 order-last pb-6">
//           <h3 className="text-sm font-medium text-white">Passwords</h3>
//           <p className="mt-2 text-pretty text-sm/5 text-gray-400">
//             Simple and secure password authentication, complete with breach detection and recovery options.
//           </p>
//         </div>

//         {/* Visual Graphic Section */}
//         <div className="pointer-events-none relative flex-auto select-none isolate" style={{ minHeight: '10.25rem' }} aria-hidden="true">
//           <div className="absolute inset-0 flex flex-col items-center gap-4" style={{ transform: 'translateY(0rem)' }}>
            
//             {/* Background Shield/Box Shape */}
//             <div className="absolute inset-0 top-[5.25rem] flex justify-center overflow-hidden [mask:linear-gradient(black,transparent)]">
//               <svg width="317" height="214" viewBox="0 0 317 214" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path 
//                   d="M21.6502 2.38322L2.30334 22.0051C0.827423 23.502 0 25.5197 0 27.6219L0 214L317 214L317 27.6219C317 25.5197 316.173 23.502 314.697 22.0051L295.35 2.38322C293.846 0.858434 291.794 0 289.653 0L27.3468 0C25.2055 0 23.1536 0.858435 21.6502 2.38322Z" 
//                   fill="#2B2B30" 
//                   stroke="white" 
//                   strokeOpacity="0.04"
//                 />
//               </svg>
//             </div>

//             {/* Central Icon */}
//             <div className="z-10 mt-[2.875rem] size-[4.5rem] rounded-full bg-[#030712] p-1 shadow-[0_1px_0_rgba(255,255,255,0.05)] [&_div]:rounded-full">
//               <div className="relative size-full overflow-hidden bg-gradient-to-b from-[#1f2937] to-[#1a1a1e] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
//                 {/* Inner Glow/Shadow */}
//                 <div className="absolute inset-4 bg-gradient-to-b from-[#1a1a1e] to-[rgba(31,41,55,0.5)] shadow-[0_1px_0_rgba(255,255,255,0.02),0_-1px_0_rgba(255,255,255,0.06),0_-2px_4px_rgba(255,255,255,0.02),inset_0_1px_1px_rgba(0,0,0,0.2)]"></div>
                
//                 {/* Radial Texture Overlay */}
//                 <div className="relative z-10 size-full bg-[repeating-radial-gradient(rgba(0,0,0,0.2)_0.125rem,transparent_0.25rem)]">
//                   <div className="flex size-full items-center justify-center drop-shadow-[0_1px_0_rgba(255,255,255,0.1)]">
//                     <div ref={keyholeRef}>
//                       <svg width="8" height="36" viewBox="0 0 8 36" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path 
//                           className="fill-[#030712]" 
//                           fillRule="evenodd" 
//                           clipRule="evenodd" 
//                           d="M3 0C1.34315 0 0 1.34315 0 3V19.5858C0 19.851 0.105357 20.1054 0.292893 20.2929L3.29289 23.2929C3.68342 23.6834 3.68342 24.3166 3.29289 24.7071L0.292893 27.7071C0.105357 27.8946 0 28.149 0 28.4142V33C0 34.6569 1.34315 36 3 36H5C6.65685 36 8 34.6569 8 33V16.4142C8 16.149 7.89464 15.8946 7.70711 15.7071L4.70711 12.7071C4.31658 12.3166 4.31658 11.6834 4.70711 11.2929L7.70711 8.29289C7.89464 8.10536 8 7.851 8 7.58579V3C8 1.34315 6.65685 0 5 0H3Z"
//                         />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Additional Lighting Effects */}
//                 <div className="absolute inset-0 shadow-[inset_2.5px_-2.5px_0_-2px_rgba(255,255,255,0.08)]" style={{ transform: 'rotate(90deg)', opacity: 0 }}></div>
//                 <div className="absolute inset-0 shadow-[inset_-2.5px_2.5px_0_-2px_rgba(255,255,255,0.08)]" style={{ transform: 'rotate(-90deg)', opacity: 0 }}></div>
//               </div>
//             </div>

//             {/* Horizontal Bar Element (Password Input) */}
//             <div 
//               ref={barRef}
//               className="relative h-7 w-56 rounded-md bg-[#1a1a1e] bg-gradient-to-b from-[#1f2937] to-[#1a1a1e] shadow-md shadow-black/10 ring-1 ring-black/20" 
//               style={{ transform: 'translateY(0rem)', opacity: 0.5 }}
//             >
//               {/* Active Blue Glow Overlay */}
//               <div 
//                 ref={glowRef}
//                 className="absolute inset-0 flex items-center gap-1.5 rounded-[inherit] border border-sky-400 bg-sky-400/5 px-3 shadow-[0_0_6px_3px] shadow-sky-400/10" 
//                 style={{ opacity: 0 }}
//               ></div>

//               {/* Password Dots Container */}
//               <div className="absolute inset-0 flex items-center gap-1.5 px-3">
//                 {dotsArray.map((_, i) => (
//                   <div
//                     key={i}
//                     ref={(el) => { if (el) dotsRef.current[i] = el; }}
//                     className="size-1 rounded-full bg-sky-400/90 shadow-[0_0_4px_rgba(56,189,248,0.5)]"
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// export function BotDetectionCard() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const targetGroupRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const dots = containerRef.current?.querySelectorAll('[data-dot]');
//       const spotlight = containerRef.current?.querySelector('[data-spotlight]');
//       const crosshair = containerRef.current?.querySelector('[data-crosshair]');
//       const pulse = containerRef.current?.querySelector('[data-pulse]');
//       const activeDot = containerRef.current?.querySelector('[data-active-dot]');

//       if (!dots || !targetGroupRef.current) return;

//       // 1. Continuous Rotation for Spotlight
//       gsap.to(spotlight, {
//         rotation: 360,
//         duration: 12,
//         repeat: -1,
//         ease: "linear",
//         transformOrigin: "50% -4.0625rem"
//       });

//       // 2. Continuous Rotation for Crosshair
//       gsap.to(crosshair, {
//         rotation: 360,
//         duration: 4,
//         repeat: -1,
//         ease: "linear"
//       });

//       // 3. Movement Sequence
//       // We extract positions from the dots themselves to ensure perfect alignment
//       const dotSequence = [1, 4, 0, 5, 2, 7, 3, 6]; // Custom order for visual variety
//       const tl = gsap.timeline({ repeat: -1 });

//       dotSequence.forEach((dotIndex) => {
//         const targetDot = dots[dotIndex] as HTMLElement;
//         const x = targetDot.offsetLeft + (targetDot.offsetWidth / 2);
//         const y = targetDot.offsetTop + (targetDot.offsetHeight / 2);

//         // Calculate translation relative to the initial "translate(2.4375rem, 7.625rem)" logic or center
//         // To simplify, we'll just set absolute position of the group
        
//         tl.to(targetGroupRef.current, {
//           x: x - (containerRef.current?.offsetWidth || 0) / 2,
//           y: y,
//           duration: 0.8,
//           ease: "expo.inOut"
//         })
//         // Pulse Effect when landing
//         .fromTo(pulse, 
//           { scale: 0.4, opacity: 0 },
//           { scale: 1.8, opacity: 0.8, duration: 0.2, ease: "power2.out" },
//           "-=0.1"
//         )
//         .to(pulse, { opacity: 0, duration: 0.4 })
//         // Dot Feedback
//         .to(targetDot, {
//           backgroundColor: "#5DE3FF",
//           scale: 1.5,
//           duration: 0.1,
//         }, "<")
//         .to(targetDot, {
//           backgroundColor: "rgba(107, 231, 255, 0.4)",
//           scale: 1,
//           duration: 0.6,
//         })
//         .to({}, { duration: 0.8 }); // Pause
//       });

//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black p-8">
//       <div 
//         ref={containerRef}
//         className="group isolate flex flex-col rounded-2xl shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.025] overflow-hidden"
//         style={{
//           width: '476px',
//           height: '260px',
//           backgroundColor: 'rgb(33, 33, 38)',
//         }}
//       >
//         <div className="relative z-10 flex-none px-6 order-last pb-6">
//           <h3 className="text-sm font-medium text-white">Bot Detection</h3>
//           <p className="mt-2 text-pretty text-sm/5 text-gray-400">
//             Dramatically reduce fraudulent sign-ups with built-in, continually updated machine learning.
//           </p>
//         </div>

//         <div className="pointer-events-none relative flex-auto select-none" style={{ minHeight: '10.25rem' }} aria-hidden="true">
//           <div 
//             className="absolute inset-x-0 top-0 overflow-hidden rounded-t-2xl" 
//             style={{ 
//               height: 'calc(10.75rem)', 
//               backgroundColor: 'rgb(33, 33, 38)',
//               '--color': '#5DE3FF', 
//               '--stroke-color': '#5DE3FF', 
//               '--pulse-color': '#5DE3FF' 
//             } as React.CSSProperties}
//           >
//             <div className="isolate">
//               {[8, 12, 16, 20].map((size, i) => (
//                 <div 
//                   key={i}
//                   data-radar="true" 
//                   className="absolute left-1/2 top-0 z-[i] -translate-x-1/2 -translate-y-1/2 rounded-full" 
//                   style={{ 
//                     width: `${size}rem`, 
//                     aspectRatio: '1/1',
//                     backgroundColor: `rgb(${49 - i * 4}, ${49 - i * 4}, ${54 - i * 4})`,
//                     opacity: 0.2 
//                   }}
//                 />
//               ))}
              
//               <svg viewBox="0 0 320 320" aria-hidden="true" className="absolute left-1/2 top-0 z-50 -ml-40 w-80" fill="none" stroke="white" strokeOpacity="0.08" strokeLinecap="round" strokeDasharray="0.25 4">
//                 <circle cx="160" cy="0" r="64"></circle>
//                 <circle cx="160" cy="0" r="96"></circle>
//                 <circle cx="160" cy="0" r="128"></circle>
//                 <circle cx="160" cy="0" r="160"></circle>
//               </svg>
//             </div>

//             {/* Inactive Dots - Now acting as anchor points for the animation */}
//             <div data-dot="0" className="absolute -ml-0.5 -mt-0.5 h-1 w-1 rounded-full bg-gray-500/40" style={{ top: '3rem', left: 'calc(50% - 2.625rem)', boxShadow: '0 1px 2px rgba(0,0,0,0.25)' }}></div>
//             <div data-dot="1" className="absolute -ml-0.5 -mt-0.5 h-1 w-1 rounded-full bg-gray-500/40" style={{ top: '3.5625rem', left: 'calc(50% + 1.875rem)', boxShadow: '0 1px 2px rgba(0,0,0,0.25)' }}></div>
//             <div data-dot="2" className="absolute -ml-0.5 -mt-0.5 h-1 w-1 rounded-full bg-gray-500/40" style={{ top: '4.125rem', left: 'calc(50% + 4.375rem)', boxShadow: '0 1px 2px rgba(0,0,0,0.25)' }}></div>
//             <div data-dot="3" className="absolute -ml-0.5 -mt-0.5 h-1 w-1 rounded-full bg-gray-500/40" style={{ top: '5.875rem', left: 'calc(50% - 1.3125rem)', boxShadow: '0 1px 2px rgba(0,0,0,0.25)' }}></div>
//             <div data-dot="4" className="absolute -ml-0.5 -mt-0.5 h-1 w-1 rounded-full bg-gray-500/40" style={{ top: '6.375rem', left: 'calc(50% - 4.875rem)', boxShadow: '0 1px 2px rgba(0,0,0,0.25)' }}></div>
//             <div data-dot="5" className="absolute -ml-0.5 -mt-0.5 h-1 w-1 rounded-full bg-gray-500/40" style={{ top: '6.6875rem', left: 'calc(50% + 4.4375rem)', boxShadow: '0 1px 2px rgba(0,0,0,0.25)' }}></div>
//             <div data-dot="6" className="absolute -ml-0.5 -mt-0.5 h-1 w-1 rounded-full bg-gray-500/40" style={{ top: '9.4375rem', left: 'calc(50% - 3.375rem)', boxShadow: '0 1px 2px rgba(0,0,0,0.25)' }}></div>
//             <div data-dot="7" className="absolute -ml-0.5 -mt-0.5 h-1 w-1 rounded-full bg-gray-500/40" style={{ top: '9.625rem', left: 'calc(50% + 2.6875rem)', boxShadow: '0 1px 2px rgba(0,0,0,0.25)' }}></div>

//             {/* Fade effect */}
//             <svg viewBox="0 0 500 250" aria-hidden="true" className="absolute -top-8 left-1/2 transform-gpu fill-[#212126] blur-lg" style={{ width: '31.25rem', marginLeft: '-15.625rem' }}>
//               <path d="M 250 0 H 500 V 250 Z"></path>
//               <path d="M 250 0 H 0 V 250 Z"></path>
//             </svg>

//             {/* Rotating Spotlight */}
//             <svg data-spotlight="true" viewBox="0 0 232 168" aria-hidden="true" className="absolute left-1/2 mix-blend-overlay blur-lg" style={{ top: '-0.6875rem', width: '14.5rem', marginLeft: '-7.25rem', transformOrigin: '50% -4.0625rem' }}>
//               <path fill="url(#spotlight-gradient)" d="M85-11h62l85 179H0L85-11Z"></path>
//               <defs>
//                 <linearGradient id="spotlight-gradient" x1="116" x2="116" y1="5" y2="168" gradientUnits="userSpaceOnUse">
//                   <stop stopColor="#fff"></stop>
//                   <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
//                 </linearGradient>
//               </defs>
//             </svg>

//             <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 50% 1.375rem, rgb(33 33 38 / 0), rgb(33 33 38))' }}></div>

//             {/* Unified Active Target Group (Controlled by GSAP) */}
//             <div ref={targetGroupRef} className="absolute left-1/2 top-0 z-50">
              
//               {/* Crosshair Ring */}
//               <div className="absolute -ml-3 -mt-3 h-6 w-6">
//                 <svg data-crosshair="true" viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
//                   <circle 
//                     cx="12" 
//                     cy="12" 
//                     r="10.5" 
//                     fill="none" 
//                     stroke="var(--color)"
//                     strokeWidth="1"
//                     strokeDasharray="16 8"
//                   ></circle>
//                 </svg>
//               </div>

//               {/* Pulse Element */}
//               <div className="absolute -ml-4 -mt-4 flex h-8 w-8 items-center justify-center">
//                 <div 
//                   data-pulse="true" 
//                   className="h-full w-full rounded-full opacity-0" 
//                   style={{ boxShadow: '0 0 0 1px var(--pulse-color) inset, 0 0 12px 2px var(--pulse-color)' }}
//                 ></div>
//               </div>

//               {/* Central Active Dot */}
//               <div 
//                 data-active-dot="true" 
//                 className="absolute ml-[-0.1875rem] mt-[-0.1875rem] h-1.5 w-1.5 rounded-sm" 
//                 style={{ 
//                   boxShadow: 'rgba(107, 231, 255, 0.6) 0px 0px 8px 1px, rgba(255, 255, 255, 0.4) 0px 1px inset', 
//                   backgroundColor: 'var(--color)', 
//                 }}
//               ></div>
//             </div>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function EmailSmsPasscodeComponent() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const notificationRef = useRef<HTMLDivElement>(null);
//   const lockIconRef = useRef<SVGSVGElement>(null);
//   const lockBgRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Set initial states
//       gsap.set(notificationRef.current, {
//         y: -40,
//         opacity: 0,
//         scale: 0.9,
//         filter: 'blur(4px)',
//         transformOrigin: 'top center'
//       });

//       // Timeline for hover animation
//       const tl = gsap.timeline({ paused: true });

//       tl.to(notificationRef.current, {
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         filter: 'blur(0px)',
//         duration: 0.6,
//         ease: 'back.out(1.7)',
//       }, 0)
//       .to(lockBgRef.current, {
//         backgroundColor: 'rgba(56, 189, 248, 0.15)',
//         boxShadow: '0 0 15px 2px rgba(56, 189, 248, 0.3), inset 0 1px rgba(255, 255, 255, 0.1)',
//         duration: 0.3,
//       }, 0)
//       .to(lockIconRef.current?.querySelectorAll('.lock-active'), {
//         opacity: 1,
//         duration: 0.3,
//       }, 0)
//       .to(lockIconRef.current?.querySelectorAll('.lock-idle'), {
//         opacity: 0,
//         duration: 0.3,
//       }, 0);

//       const handleMouseEnter = () => tl.play();
//       const handleMouseLeave = () => tl.reverse();

//       const container = containerRef.current;
//       if (container) {
//         container.addEventListener('mouseenter', handleMouseEnter);
//         container.addEventListener('mouseleave', handleMouseLeave);
//       }

//       return () => {
//         if (container) {
//           container.removeEventListener('mouseenter', handleMouseEnter);
//           container.removeEventListener('mouseleave', handleMouseLeave);
//         }
//       };
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-black p-4">
//       {/* Main Container */}
//       <div 
//         ref={containerRef}
//         className="group isolate flex flex-col rounded-2xl bg-[#212126] shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.025] overflow-visible cursor-default"
//         style={{
//           width: '476px',
//           height: '260px',
//         }}
//       >
//         {/* Text Content - Bottom Section */}
//         <div className="relative z-10 flex-none px-6 order-last pb-6">
//           <h3 className="text-sm font-medium text-white transition-colors duration-300 group-hover:text-white/90">Email and SMS one-time passcodes</h3>
//           <p className="mt-2 text-pretty text-sm/5 text-gray-400">
//             Fast and reliable one-time passcode delivery with built-in brute force prevention.
//           </p>
//         </div>

//         {/* Graphic Section - Top Section */}
//         <div className="pointer-events-none relative flex-auto select-none" style={{ minHeight: '10.25rem' }} aria-hidden="true">
//           <div 
//             className="absolute inset-x-0 top-0 isolate h-[12.875rem] overflow-hidden pt-6" 
//             style={{ transform: 'translateY(0rem) scale(0.98)' }}
//           >
//             {/* Phone Shell */}
//             <div 
//               className="mx-auto h-56 w-[16.5rem] rounded-[2.75rem] bg-gray-800 p-1.5" 
//               style={{
//                 boxShadow: '0 1px 0 0 rgb(255 255 255 / 0.05) inset, 0px 2px 5px 0 rgb(0 0 0 / 0.40)',
//                 backgroundImage: 'linear-gradient(180deg, rgb(255 255 255 / 0.05) 0%, rgb(255 255 255 / 0) 67.19%)'
//               }}
//             >
//               {/* Phone Screen Container */}
//               <div className="relative h-[12.5rem] overflow-hidden rounded-[2.375rem] bg-gray-950/50 px-5 pt-3 ring-1 ring-inset ring-black/5">
                
//                 {/* Lock Icon at top */}
//                 <div 
//                   ref={lockBgRef}
//                   className="relative z-30 mx-auto flex h-6 w-6 transform-gpu items-center justify-center rounded-full transition-all duration-300" 
//                   style={{ backgroundColor: 'rgb(19, 19, 22)', boxShadow: 'rgba(255, 255, 255, 0.05) 0px 1px' }}
//                 >
//                   <svg ref={lockIconRef} viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
//                     <path className="lock-active opacity-0 transition-opacity" fill="#fff" fillOpacity="1" d="M3 9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
//                     <path className="lock-active opacity-0 transition-opacity" fill="#fff" fillOpacity="1" fillRule="evenodd" d="M8 4a2.5 2.5 0 0 0-2.5 2.5V10h-1V6.5a3.5 3.5 0 1 1 7 0V10h-1V6.5A2.5 2.5 0 0 0 8 4Z" clipRule="evenodd"></path>
                    
//                     <path className="lock-idle" d="M3 8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z" fill="#747686"></path>
//                     <path className="lock-idle" fillRule="evenodd" d="M8 3a2.5 2.5 0 0 0-2.5 2.5V9h-1V5.5a3.5 3.5 0 1 1 7 0V9h-1V5.5A2.5 2.5 0 0 0 8 3Z" clipRule="evenodd" fill="#747686"></path>
//                   </svg>
//                 </div>

//                 {/* Perspective Security Alert Container */}
//                 <div className="relative z-40 [perspective:1000px]">
//                   <div 
//                     ref={notificationRef}
//                     className="absolute inset-x-0 top-1.5 flex flex-none items-center gap-x-3 rounded-2xl bg-[#2a2a30] p-2" 
//                     style={{ 
//                       boxShadow: 'rgba(0, 0, 0, 0.4) 0px 10px 30px, rgba(255, 255, 255, 0.05) 0px 1px inset',
//                     }}
//                   >
//                     <div 
//                       className="flex h-10 w-10 flex-none items-center justify-center rounded-[0.625rem] bg-gray-700" 
//                       style={{ boxShadow: '0 1px rgb(255 255 255 / 0.05) inset', backgroundImage: 'radial-gradient(circle at top, rgb(114 233 255 / 0.2), rgb(114 233 255 / 0))' }}
//                     >
//                       <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="size-10">
//                         <g filter="url(#security-alert-filter-animated)">
//                           <path fill="#5DE3FF" fillRule="evenodd" d="M20 32c6.627 0 12-5.373 12-12S26.627 8 20 8 8 13.373 8 20s5.373 12 12 12Zm6-12c0 2.761-2.686 5-6 5a7.2 7.2 0 0 1-1.163-.094 1.227 1.227 0 0 0-.79.14c-.613.34-1.308.571-1.983.72-.82.182-1.314-.759-.895-1.485.04-.07.08-.14.119-.212.21-.382.099-.846-.184-1.178C14.409 22.075 14 21.077 14 20c0-2.761 2.686-5 6-5s6 2.239 6 5Z" clipRule="evenodd"></path>
//                         </g>
//                         <defs>
//                           <filter id="security-alert-filter-animated" width="42" height="42" x="-1" y="-1" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
//                             <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//                             <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//                             <feMorphology in="SourceAlpha" operator="dilate" radius="1" result="effect1_dropShadow"></feMorphology>
//                             <feOffset></feOffset>
//                             <feGaussianBlur stdDeviation="4"></feGaussianBlur>
//                             <feComposite in2="hardAlpha" operator="out"></feComposite>
//                             <feColorMatrix values="0 0 0 0 0.419608 0 0 0 0 0.905882 0 0 0 0 1 0 0 0 0.3 0"></feColorMatrix>
//                             <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
//                             <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
//                           </filter>
//                         </defs>
//                       </svg>
//                     </div>
//                     <div className="min-w-0 text-left">
//                       <div className="text-[0.625rem]/4 font-medium text-[#5DE3FF]">Security alert</div>
//                       <div className="truncate text-[0.625rem]/4 text-gray-200">Your security passcode is <span className="text-white">764676</span></div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* App Grid */}
//                 <div className="mt-6 flex flex-wrap justify-between gap-x-2 gap-y-4 text-center opacity-40 group-hover:opacity-20 transition-opacity duration-500">
//                   {/* Phone App */}
//                   <div className="flex-none">
//                     <div className="relative size-10 rounded-[0.625rem] bg-gray-800" style={{ boxShadow: '0 1px rgb(255 255 255 / 0.05) inset' }}>
//                       <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="size-10">
//                         <g filter="url(#email-sms-icon-shadow)">
//                           <path fill="#5E5F6E" d="m31.661 28.642-1.576 2.465c-.126.197-.266.388-.465.509-1.796 1.084-7.63.18-14.523-6.713-7.302-7.303-7.883-13.416-6.5-14.799l2.761-1.765a2.152 2.152 0 0 1 2.68.291l2.119 2.118c.714.714.835 1.83.29 2.68l-1.18 1.847c-.387.607-.657 1.29-.451 1.98.373 1.253 1.406 3.24 3.047 4.882a12.282 12.282 0 0 0 3.656 2.515c1.425.633 2.997.214 4.311-.626l.742-.474a2.151 2.151 0 0 1 2.68.291l2.118 2.119c.714.714.835 1.829.291 2.68Z"></path>
//                         </g>
//                       </svg>
//                     </div>
//                     <div className="mt-1.5 text-[0.625rem]/4 font-medium text-gray-300">Phone</div>
//                   </div>

//                   {/* SMS App */}
//                   <div className="flex-none">
//                     <div className="relative size-10 rounded-[0.625rem] bg-gray-800" style={{ boxShadow: '0 1px rgb(255 255 255 / 0.05) inset' }}>
//                       <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="size-10">
//                         <path fill="#5E5F6E" d="M20 32c6.627 0 12-5.373 12-12S26.627 8 20 8 8 13.373 8 20s5.373 12 12 12Zm6-12c0 2.761-2.686 5-6 5a7.2 7.2 0 0 1-1.163-.094 1.227 1.227 0 0 0-.79.14c-.613.34-1.308.571-1.983.72-.82.182-1.314-.759-.895-1.485.04-.07.08-.14.119-.212.21-.382.099-.846-.184-1.178C14.409 22.075 14 21.077 14 20c0-2.761 2.686-5 6-5s6 2.239 6 5Z"></path>
//                       </svg>
//                       {/* Notification Badge */}
//                       <div 
//                         className="absolute -left-1.5 -top-1.5 z-10 flex h-5 w-5 items-center justify-center rounded-full text-[0.625rem]/none font-semibold text-gray-950 backdrop-blur" 
//                         style={{ transform: 'scale(0.75)', background: 'rgba(255, 255, 255, 0.45)' }}
//                       >
//                         1
//                       </div>
//                     </div>
//                     <div className="mt-1.5 text-[0.625rem]/4 font-medium text-gray-300">SMS</div>
//                   </div>

//                   {/* Books App */}
//                   <div className="flex-none">
//                     <div className="relative size-10 rounded-[0.625rem] bg-gray-800" style={{ boxShadow: '0 1px rgb(255 255 255 / 0.05) inset' }}>
//                       <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="size-10">
//                         <path fill="#5E5F6E" d="M19.083 13.241a.768.768 0 0 0-.179-.523c-.594-.657-2.828-2.545-8.984-2.718-.506-.014-.92.429-.92.973v16.746c0 .544.414.984.92.998 3.126.088 5.241.617 6.643 1.204.846.354 2.52-.54 2.52-1.515V13.24Z"></path>
//                         <path fill="#5E5F6E" d="M20.917 13.241c0-.194.053-.383.179-.523.594-.657 2.828-2.545 8.984-2.718.506-.014.92.429.92.973v16.746c0 .544-.414.984-.92.998-3.126.088-5.241.617-6.643 1.204-.846.354-2.52-.54-2.52-1.515V13.24Z"></path>
//                       </svg>
//                     </div>
//                     <div className="mt-1.5 text-[0.625rem]/4 font-medium text-gray-300">Books</div>
//                   </div>

//                   {/* TV App */}
//                   <div className="flex-none">
//                     <div className="relative size-10 rounded-[0.625rem] bg-gray-800" style={{ boxShadow: '0 1px rgb(255 255 255 / 0.05) inset' }}>
//                       <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="size-10">
//                         <path fill="#5E5F6E" fillRule="evenodd" d="M14 30a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1Z" clipRule="evenodd"></path>
//                         <path fill="#5E5F6E" d="M8 13a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V13Z"></path>
//                       </svg>
//                     </div>
//                     <div className="mt-1.5 text-[0.625rem]/4 font-medium text-gray-300">TV</div>
//                   </div>

//                   <div className="flex-none">
//                     <div className="relative size-10 rounded-[0.625rem] bg-gray-800" style={{ boxShadow: '0 1px rgb(255 255 255 / 0.05) inset' }}></div>
//                   </div>
//                   <div className="flex-none">
//                     <div className="relative size-10 rounded-[0.625rem] bg-gray-800" style={{ boxShadow: '0 1px rgb(255 255 255 / 0.05) inset' }}></div>
//                   </div>
//                   <div className="flex-none">
//                     <div className="relative size-10 rounded-[0.625rem] bg-gray-800" style={{ boxShadow: '0 1px rgb(255 255 255 / 0.05) inset' }}></div>
//                   </div>
//                   <div className="flex-none">
//                     <div className="relative size-10 rounded-[0.625rem] bg-gray-800" style={{ boxShadow: '0 1px rgb(255 255 255 / 0.05) inset' }}></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Fade effect at the bottom of the graphic section */}
//             <div className="absolute inset-0 bg-gradient-to-t from-[#212126] via-transparent" style={{ transform: 'translateY(0rem)' }}></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// const CHARS = "ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnpqrstuvwxyz0123456789";

// export function MagicLinksComponent() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const userSectionRef = useRef<HTMLDivElement>(null);
//   const codeBoxRef = useRef<HTMLDivElement>(null);
//   const checkmarkRef = useRef<HTMLDivElement>(null);
//   const bgTextRef = useRef<HTMLDivElement>(null);
  
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [displayCode, setDisplayCode] = useState(USERS[0].code);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         repeat: -1,
//         defaults: { ease: "power2.inOut" },
//       });

//       USERS.forEach((user, index) => {
//         const nextIndex = (index + 1) % USERS.length;
        
//         // 1. Initial State for the step
//         tl.set(checkmarkRef.current, { scale: 0, opacity: 0 });
//         tl.set(codeBoxRef.current, { 
//           backgroundColor: "rgba(156, 163, 175, 0.1)", 
//           color: "rgba(156, 163, 175, 1)",
//           boxShadow: "0 0 0px rgba(34, 211, 238, 0)"
//         });

//         // 2. Identity Entry
//         tl.fromTo(
//           userSectionRef.current,
//           { rotate: 12, opacity: 0, y: 10 },
//           { rotate: 0, opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.2)" }
//         );

//         // 3. Code Scrambling Effect
//         // We use a proxy object to handle the text cycling logic
//         const scrambleObj = { val: 0 };
//         tl.to(scrambleObj, {
//           val: 1,
//           duration: 1.4,
//           ease: "none",
//           onUpdate: () => {
//             const progress = scrambleObj.val;
//             const targetCode = USERS[index].code;
//             let result = "";
//             for (let i = 0; i < targetCode.length; i++) {
//               // As progress increases, characters "lock" into the target
//               if (progress > (i / targetCode.length) * 1.5) {
//                 result += targetCode[i];
//               } else {
//                 result += CHARS[Math.floor(Math.random() * CHARS.length)];
//               }
//             }
//             setDisplayCode(result);
//           },
//         }, "-=0.2");

//         // 4. Code Resolution & Success State
//         tl.to(codeBoxRef.current, {
//           backgroundColor: "rgba(34, 211, 238, 0.2)",
//           color: "rgba(165, 243, 252, 1)",
//           boxShadow: "0 0 12px rgba(34, 211, 238, 0.4)",
//           duration: 0.3,
//         });

//         tl.to(checkmarkRef.current, {
//           scale: 1,
//           opacity: 1,
//           duration: 0.4,
//           ease: "back.out(2)",
//         }, "-=0.1");

//         // 5. Background Text Movement
//         tl.to(bgTextRef.current, {
//           y: "-=20",
//           duration: 2.5,
//           ease: "linear",
//         }, "<");

//         // 6. Pause to let user see success
//         tl.to({}, { duration: 1.2 });

//         // 7. Identity Exit
//         tl.to(userSectionRef.current, {
//           rotate: -12,
//           opacity: 0,
//           y: 10,
//           duration: 0.6,
//           onComplete: () => {
//             setCurrentIndex(nextIndex);
//             setDisplayCode(USERS[nextIndex].code);
//           }
//         });
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   const currentUser = USERS[currentIndex];

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-950 p-8">
//       <div 
//         ref={containerRef}
//         className="group isolate flex flex-col rounded-2xl bg-[#212126] shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.025] overflow-hidden w-[476px] h-[528px]"
//       >
//         {/* Header Section */}
//         <div className="relative z-10 flex-none px-6 pt-6">
//           <h3 className="text-sm font-medium text-white">Magic Links</h3>
//           <p className="mt-2 text-pretty text-sm/5 text-gray-400">
//             Improve sign-up conversion rates and filter out spam/fraud with
//             Magic Links.
//           </p>
//         </div>

//         {/* Animation/Interactive Section */}
//         <div
//           className="pointer-events-none relative flex-auto select-none isolate"
//           style={{ minHeight: "10.25rem" }}
//           aria-hidden="true"
//         >
//           <div className="relative flex h-full flex-col items-center justify-center">
//             {/* Background Text and Glow Overlay */}
//             <div className="relative flex w-full justify-center break-all text-center font-mono text-[0.625rem]/[0.875rem] tracking-widest">
//               <div ref={bgTextRef} className="absolute inset-x-0 -top-12 flex flex-col text-[#37373C] transition-opacity duration-500">
//                 <div className="mb-[-0.875rem]">
//                   2tZo3dVF1xfEdQfJsKrGy3EklmbzxufQgtEox6NCXET4ik6t8wYWSSo7b5VhdtA9vQGGCcTdsEgMLfHwvdq0hLIvPzzUMIFUdis5nAxoNWi3c1krdxJtvpOChAgTL6JdztorbOqme0cEa00615KeiNm1fDSx4hlF1HU1ejsolibBXvHPDcR7S1PGDKUYYaHhVMepT0AP42wXqzKzHwJkYG4diD50jtIY586rYpXuElsPsrGF6nOuUZ6dB0goy4onIGfDjKYbEmtoXnaIvtTopkI0c2TCu2oXakFkEHUFhA1BXPoz13iXuvKoFu1t9h5akXlsvWstAsMFyJaA88feY3lCe3x6OXwyQFsW3RUAqw3PNDc7BFbgfLrVCFeuDaUujAkd8Kagey4rZEbdDNSD91GYVKfYFZteyzsCso64jNbja3TOgRvnCH2Fv9CKBh5ioGfMU6PjFRyafEbNNZ9KTLN7ZJFJkhfiDaAoWVWbMiK1LnerGjKe7w7fgx7GYglr4YfvZMJ9v7AqCCsIJufvn4PWtFvBpvHcSIg1UNqwnDWNBHTPohxB76RI4cX6p41RnqjU5jf5p6R8JirtY6ov6R0W
//                 </div>
//                 <div className="mt-[-0.875rem]">
//                   nCo1uQb7EehZKW4WUNeM3Wc70nCgkVkIm4zzbdQkTwlG7xsmYNIoFbpaSM3Dj4rJVJq1hbcicbNHqhRqNAUR7nE4ZEa7EjE7Gd3qYZaBLPM2E1yiskCJHAtoKTZQjYIbvwZXTwz2bnLwfq3u8QPEFhG7owGeQ3oONTyLHNXWESMsPyStL4hsMIwphtwCpnIC2tZo3dVF1xfEdQfJsKrGy3EklmbzxufQgtEox6NCXET4ik6t8wYWSSo7b5VhdtA9vQGGCcTdsEgMLfHwvdq0hLIvPzzUMIFUdis5nAxoNWi3c1krdxJtvpOChAgTL6JdztorbOqme0cEa00615KeiNm1fDSx4hlF1HU1ejsolibBXvHPDcR7S1PGDKUYYaHhVMepT0AP42wXqzKzHwJkYG4diD50jtIY586rYpXuElsPsrGF6nOuUZ6dB0goy4onIGfDjKYbEmtoXnaIvtTopkI0c2TCu2oXakFkEHUFhA1BXPoz13iXuvKoFu1t9h5akXlsvWstAsMFyJaA88feY3lCe3x6OXwyQFsW3RUAqw3PNDc7BFbgfLrVCFeuDaUujAkd8Kagey4rZEbdDNSD91GY
//                 </div>
//               </div>
              
//               {/* Radial gradient to fade out text */}
//               <div
//                 className="absolute left-1/2 top-1/2 z-20 ml-[calc(-600/2/16*1rem)] mt-[calc(-800/2/16*1rem+3.75rem)] h-[calc(800/16*1rem)] w-[calc(600/16*1rem)]"
//                 style={{
//                   backgroundImage:
//                     "radial-gradient(10.75rem 9.5rem, rgba(33, 33, 38, 0), rgb(33, 33, 38))",
//                 }}
//               ></div>
              
//               {/* Highlighted Magic Link Code */}
//               <div 
//                 ref={codeBoxRef}
//                 className="relative z-20 bg-gray-400/10 px-1.5 py-[0.125rem] text-gray-400 shadow-[0_0_1px_inset] shadow-white/15 backdrop-blur-[1px] rounded transition-colors duration-300"
//               >
//                 {displayCode}
//               </div>
//             </div>

//             {/* Profile/User Section */}
//             <div className="relative z-20 mt-9 flex w-full">
//               {/* Curved Background Glow */}
//               <div
//                 className="absolute inset-x-[-10%] top-8 aspect-[2/1] rounded-[50%] backdrop-blur-[3px]"
//                 style={{
//                   backgroundImage:
//                     "radial-gradient(98.23% 104.12% at 50% -4.12%, rgb(255 255 255 / 0.05) 6.12%, rgb(255 255 255 / 0) 55.4%)",
//                 }}
//               ></div>
//               <div className="absolute inset-x-[-10%] top-8 aspect-[2/1] rounded-[50%] border-t border-white/5 [mask-image:linear-gradient(to_right,transparent,white,transparent)]"></div>
              
//               {/* User Identity */}
//               <div
//                 ref={userSectionRef}
//                 className="flex w-full flex-none flex-col items-center"
//                 style={{ transformOrigin: "50% 400%" }}
//               >
//                 {/* Avatar Card */}
//                 <div
//                   className="relative h-24 w-20 rounded-sm bg-gray-800 bg-gradient-to-br from-white/5 to-[64%]"
//                   style={{
//                     boxShadow:
//                       "rgba(255, 255, 255, 0.05) 0px 1px 1px inset, rgba(0, 0, 0, 0.2) 0px 2px 13px, rgba(0, 0, 0, 0.2) 0px 1px 2px, rgba(19, 19, 22, 0.5) 0px 0px 0px 3px",
//                   }}
//                 >
//                   <svg
//                     viewBox="0 0 80 96"
//                     fill="none"
//                     aria-hidden="true"
//                     className="absolute inset-0 h-full w-full"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="1.5"
//                   >
//                     <path
//                       d="M26.22 78.25c2.679-3.522 1.485-17.776 1.485-17.776-1.084-2.098-1.918-4.288-2.123-5.619-3.573 0-3.7-8.05-3.827-9.937-.102-1.509 1.403-1.383 2.169-1.132-.298-1.3-.92-5.408-1.021-11.446C22.775 24.794 30.94 17.75 40 17.75h.005c9.059 0 17.225 7.044 17.097 14.59-.102 6.038-.723 10.147-1.021 11.446.765-.251 2.271-.377 2.169 1.132-.128 1.887-.254 9.937-3.827 9.937-.205 1.331-1.039 3.521-2.123 5.619 0 0-1.194 14.254 1.485 17.776"
//                       className="stroke-white/5"
//                       transform="translate(0 1)"
//                     ></path>
//                     <path
//                       d="M27.705 60.474a26.884 26.884 0 0 0 1.577 2.682c1.786 2.642 5.36 6.792 10.718 6.792h.005c5.358 0 8.932-4.15 10.718-6.792a26.884 26.884 0 0 0 1.577-2.682"
//                       className="stroke-white/5"
//                       transform="translate(0 1)"
//                     ></path>
//                     <path
//                       d="M26.22 78.25c2.679-3.522 1.485-17.776 1.485-17.776-1.084-2.098-1.918-4.288-2.123-5.619-3.573 0-3.7-8.05-3.827-9.937-.102-1.509 1.403-1.383 2.169-1.132-.298-1.3-.92-5.408-1.021-11.446C22.775 24.794 30.94 17.75 40 17.75h.005c9.059 0 17.225 7.044 17.097 14.59-.102 6.038-.723 10.147-1.021 11.446.765-.251 2.271-.377 2.169 1.132-.128 1.887-.254 9.937-3.827 9.937-.205 1.331-1.039 3.521-2.123 5.619 0 0-1.194 14.254 1.485 17.776"
//                       className="stroke-[#26262C]"
//                     ></path>
//                     <path
//                       d="M27.705 60.474a26.884 26.884 0 0 0 1.577 2.682c1.786 2.642 5.36 6.792 10.718 6.792h.005c5.358 0 8.932-4.15 10.718-6.792a26.884 26.884 0 0 0 1.577-2.682"
//                       className="stroke-[#26262C]"
//                     ></path>
//                   </svg>
//                 </div>
//                 {/* User Info */}
//                 <div className="relative mt-6 flex items-center text-[0.625rem]/[1.125rem] font-semibold text-white">
//                   <div>{currentUser.name}</div>
//                   <div ref={checkmarkRef} className="ml-1.5 opacity-0 scale-0">
//                     <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5 text-cyan-500">
//                       <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.707-9.293a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z" clipRule="evenodd" />
//                     </svg>
//                   </div>
//                 </div>
//                 <div className="relative mt-0.5 font-mono text-[0.625rem]/[1.125rem] text-white/50 tracking-normal">
//                   {currentUser.email}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function AutoJoinComponent() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const avatarRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const lineRefs = useRef<(SVGPathElement | null)[]>([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Index mapping based on visual order: 0=Left, 1=Middle, 2=Right
//       // The paths in the SVG are: 
//       // 1: Center (M64 0v25)
//       // 0: Left (M8 0v8...)
//       // 2: Right (M120 0v8...)
//       const orderMap = [0, 1, 2];
      
//       const tl = gsap.timeline({
//         repeat: -1,
//         defaults: { duration: 0.6, ease: "power2.inOut" }
//       });

//       // Animation sequence
//       orderMap.forEach((activeIdx, i) => {
//         const nextIdx = orderMap[(i + 1) % orderMap.length];

//         // Step transition: Fade current out, fade next in
//         tl.add(`step-${i}`);
        
//         // Avatars opacity
//         tl.to(avatarRefs.current, { opacity: 0.25 }, `step-${i}`);
//         tl.to(avatarRefs.current[activeIdx], { opacity: 1 }, `step-${i}`);

//         // Lines opacity/stroke
//         tl.to(lineRefs.current, { strokeOpacity: 0.1, stroke: "rgba(3, 7, 18, 1)" }, `step-${i}`);
//         tl.to(lineRefs.current[activeIdx], { strokeOpacity: 0.4, stroke: "rgba(3, 7, 18, 1)" }, `step-${i}`);
        
//         // Hold state
//         tl.to({}, { duration: 1.2 });
//       });

//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
//       <div 
//         ref={containerRef}
//         className="group isolate flex flex-col rounded-2xl bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden w-[476px] h-[260px]"
//       >
//         {/* Text Content - positioned at bottom via order-last */}
//         <div className="relative z-10 flex-none px-6 order-last pb-6">
//           <h3 className="text-sm font-medium text-gray-950">Auto-join</h3>
//           <p className="mt-2 text-pretty text-sm/5 text-gray-600">
//             Let your users discover and join organizations based on their email domain.
//           </p>
//         </div>

//         {/* Visual Illustration Area */}
//         <div className="pointer-events-none relative flex-auto select-none min-h-[10.25rem]" aria-hidden="true">
//           <div className="relative flex h-full flex-col items-center justify-center">
            
//             {/* Concentric Background Rings */}
//             <div className="absolute -z-10 mt-[calc(-108/16*1rem)] blur-[1px]">
//               <div 
//                 className="absolute left-1/2 top-1/2 ml-[calc(-216/2/16*1rem)] mt-[calc(-216/2/16*1rem)] size-[calc(216/16*1rem)] rounded-full border border-gray-400 opacity-[0.15]" 
//                 style={{ transform: 'scale(1.09867)' }}
//               ></div>
//               <div 
//                 className="absolute left-1/2 top-1/2 ml-[calc(-280/2/16*1rem)] mt-[calc(-280/2/16*1rem)] size-[calc(280/16*1rem)] rounded-full border border-gray-400 opacity-[0.125]" 
//                 style={{ transform: 'scale(1.09417)' }}
//               ></div>
//               <div 
//                 className="absolute left-1/2 top-1/2 ml-[calc(-344/2/16*1rem)] mt-[calc(-344/2/16*1rem)] size-[calc(344/16*1rem)] rounded-full border border-gray-400 opacity-[0.10]" 
//                 style={{ transform: 'scale(1.07441)' }}
//               ></div>
//               <div 
//                 className="absolute left-1/2 top-1/2 ml-[calc(-408/2/16*1rem)] mt-[calc(-408/2/16*1rem)] size-[calc(408/16*1rem)] rounded-full border border-gray-400 opacity-[0.075]" 
//                 style={{ transform: 'scale(1.02227)' }}
//               ></div>
//             </div>

//             {/* Avatars Row */}
//             <div className="flex gap-4">
//               {/* Avatar 1 (Left) */}
//               <div 
//                 ref={(el) => { avatarRefs.current[0] = el; }}
//                 className="opacity-100"
//               >
//                 <div className="size-10 rounded-full border-2 border-white bg-gray-50 shadow-[0_2px_3px_rgba(0,0,0,0.04),0_24px_68px_rgba(47,48,55,0.05),0_4px_6px_rgba(34,42,53,0.04),0_1px_1px_rgba(0,0,0,0.05)] ring-1 ring-gray-950/5 overflow-hidden">
//                   <img 
//                     alt="User 1" 
//                     width="36" 
//                     height="36" 
//                     className="rounded-full w-full h-full object-cover" 
//                     src="https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=96&h=96"
//                   />
//                 </div>
//               </div>
//               {/* Avatar 2 (Middle) */}
//               <div 
//                 ref={(el) => { avatarRefs.current[1] = el; }}
//                 className="opacity-25"
//               >
//                 <div className="size-10 rounded-full border-2 border-white bg-gray-50 shadow-[0_2px_3px_rgba(0,0,0,0.04),0_24px_68px_rgba(47,48,55,0.05),0_4px_6px_rgba(34,42,53,0.04),0_1px_1px_rgba(0,0,0,0.05)] ring-1 ring-gray-950/5 overflow-hidden">
//                   <img 
//                     alt="User 2" 
//                     width="36" 
//                     height="36" 
//                     className="rounded-full w-full h-full object-cover" 
//                     src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=96&h=96"
//                   />
//                 </div>
//               </div>
//               {/* Avatar 3 (Right) */}
//               <div 
//                 ref={(el) => { avatarRefs.current[2] = el; }}
//                 className="opacity-25"
//               >
//                 <div className="size-10 rounded-full border-2 border-white bg-gray-50 shadow-[0_2px_3px_rgba(0,0,0,0.04),0_24px_68px_rgba(47,48,55,0.05),0_4px_6px_rgba(34,42,53,0.04),0_1px_1px_rgba(0,0,0,0.05)] ring-1 ring-gray-950/5 overflow-hidden">
//                   <img 
//                     alt="User 3" 
//                     width="36" 
//                     height="36" 
//                     className="rounded-full w-full h-full object-cover" 
//                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=96&h=96"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Connecting Lines SVG */}
//             <div className="relative aspect-[128/55] w-32 -mt-0.5">
//               <svg viewBox="0 0 128 55" fill="none" aria-hidden="true" className="absolute inset-0 size-full">
//                 {/* Left Path */}
//                 <path 
//                   ref={(el) => { lineRefs.current[0] = el; }}
//                   d="M8 0v8c0 8.837 7.163 16 16 16h24c8.837 0 16 7.163 16 16v15" 
//                   stroke="rgba(3, 7, 18, 0.1)"
//                   strokeWidth="1.2"
//                 />
//                 {/* Center Path */}
//                 <path 
//                   ref={(el) => { lineRefs.current[1] = el; }}
//                   d="M64 0v25" 
//                   stroke="rgba(3, 7, 18, 0.1)"
//                   strokeWidth="1.2"
//                 />
//                 {/* Right Path */}
//                 <path 
//                   ref={(el) => { lineRefs.current[2] = el; }}
//                   d="M120 0v8c0 8.837-7.163 16-16 16H80c-5.922 0-11.093 3.218-13.86 8" 
//                   stroke="rgba(3, 7, 18, 0.1)"
//                   strokeWidth="1.2"
//                 />
//               </svg>
//             </div>

//             {/* Auto-join Action Tag */}
//             <div className="relative mt-px flex items-center gap-1.5 rounded-lg bg-white py-1 pl-1.5 pr-2 text-[10px] font-medium text-gray-950 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] ring-1 ring-gray-950/5">
//               <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-4">
//                 <g stroke="#9394A1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2">
//                   <circle cx="8" cy="8" r="6.25"></circle>
//                   <path d="M8 5v6m3-3H5"></path>
//                 </g>
//               </svg>
//               Auto-join
//               {/* Glow Effect */}
//               <div 
//                 className="absolute -bottom-1.5 left-1/2 -z-10 -ml-10 h-6 w-20 transform-gpu rounded-[50%] bg-gradient-to-r from-purple-500 from-25% to-sky-300 to-75% blur-sm" 
//                 style={{ opacity: 0.25 }}
//               ></div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function CustomRolesPermissions() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const roleTrackRef = useRef<HTMLDivElement>(null);
//   const personRefs = useRef<(HTMLDivElement | null)[]>([]);

//   // Roles in sequence for the animation loop
//   const roles = [
//     { label: "Engineer", personIndex: 0 },
//     { label: "Product Member", personIndex: 2 },
//     { label: "Marketing", personIndex: 3 },
//     { label: "Administrator", personIndex: 1 },
//   ];

//   // We duplicate the roles to create a seamless loop
//   const displayRoles = [...roles, ...roles, ...roles];

//   useEffect(() => {
//     if (!containerRef.current || !roleTrackRef.current) return;

//     const ctx = gsap.context(() => {
//       const track = roleTrackRef.current;
//       const personElements = personRefs.current;
      
//       // Each role takes up exactly 120px in our layout
//       const stepWidth = 120;
//       const totalRoles = roles.length;
      
//       const tl = gsap.timeline({
//         repeat: -1,
//         defaults: { ease: "power2.inOut", duration: 0.8 }
//       });

//       // Initial State: First role (Engineer) is active
//       gsap.set(track, { x: 0 });

//       roles.forEach((role, i) => {
//         const nextIndex = (i + 1) % totalRoles;
//         const currentPerson = personElements[role.personIndex];
//         const nextPerson = personElements[roles[nextIndex].personIndex];

//         // 1. Highlight current person
//         tl.to(currentPerson, {
//           scale: 1.05,
//           zIndex: 20,
//           boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
//           duration: 0.4
//         }, i * 2);

//         tl.to(currentPerson?.querySelector('.img-container'), {
//           opacity: 1,
//           filter: "grayscale(0%)",
//           duration: 0.4
//         }, i * 2);

//         // 2. Wait at current state
//         tl.to({}, { duration: 1 });

//         // 3. Transition to next: Move track and dim current person
//         tl.to(track, {
//           x: -(i + 1) * stepWidth,
//         }, (i * 2) + 1.4);

//         tl.to(currentPerson, {
//           scale: 1,
//           zIndex: 10,
//           boxShadow: "0 1px 1px rgba(0,0,0,0.05), 0 4px 6px rgba(34,42,53,0.04)",
//           duration: 0.4
//         }, (i * 2) + 1.4);

//         tl.to(currentPerson?.querySelector('.img-container'), {
//           opacity: 0.7,
//           filter: "grayscale(100%)",
//           duration: 0.4
//         }, (i * 2) + 1.4);
//       });

//       // Seamless Reset: The timeline ends at (totalRoles * 2), track at -totalRoles * stepWidth
//       // GSAP will loop back to 0 perfectly because the first frame of the loop mirrors the state
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4" ref={containerRef}>
//       <div 
//         className="group isolate flex flex-col rounded-2xl bg-white overflow-hidden shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
//         style={{ width: '476px', height: '528px' }}
//       >
//         {/* Header Section */}
//         <div className="relative z-10 flex-none px-6 pt-6">
//           <h3 className="text-sm font-medium text-gray-950">Custom roles and permissions</h3>
//           <p className="mt-2 text-pretty text-sm/[20px] text-gray-600">
//             Powerful primitives to fully customize your app&apos;s authorization story.
//           </p>
//         </div>

//         {/* Main Content Area */}
//         <div 
//           className="relative flex-auto flex flex-col items-center justify-center overflow-hidden" 
//           aria-hidden="true"
//         >
//           {/* Wave Pattern Definition */}
//           <svg width="0" height="0" className="absolute" aria-hidden="true">
//             <defs>
//               <pattern id="wave" width="12" height="3" patternUnits="userSpaceOnUse">
//                 <path 
//                   fill="none" 
//                   stroke="white" 
//                   strokeOpacity="0.2" 
//                   d="M-6 0c3 2 6 0 6 0s3-2 6 0 6 0 6 0 3-2 6 0M-6 3c3 2 6 0 6 0s3-2 6 0 6 0 6 0 3-2 6 0"
//                 />
//               </pattern>
//             </defs>
//           </svg>

//           {/* Profile Grid */}
//           <div className="flex h-full flex-col items-center justify-center pt-8">
//             <div className="grid w-max grid-cols-3 grid-rows-3 gap-3 relative">
//               {/* Row 1, Col 1 */}
//               <div className="w-[4.5rem] h-[5.25rem] rounded-lg ring-1 ring-gray-900/[0.05]"></div>
              
//               {/* Person 1: Administrator (Index 1) */}
//               <div 
//                 ref={el => (personRefs.current[1] = el)}
//                 className="relative rounded-lg p-1 ring-1 ring-gray-900/5 bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05)] transition-shadow duration-500"
//               >
//                 <div className="img-container relative overflow-hidden rounded bg-gray-50 opacity-70 grayscale"
//                   style={{ background: 'radial-gradient(241.22% 160.71% at 49.27% -9.52%, rgb(108 71 255 / 0.3), rgb(255 249 99 / 0.24) 41.24%, rgb(56 218 253 / 0.18) 62.34%, rgb(98 72 246 / 0) 91.89%)' }}
//                 >
//                   <img alt="" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop"
//                     className="h-[5.25rem] w-[4.5rem] object-cover mix-blend-multiply" />
//                   <svg className="absolute inset-0 size-full" aria-hidden="true">
//                     <rect width="100%" height="100%" fill="url(#wave)"></rect>
//                   </svg>
//                 </div>
//               </div>

//               {/* Row 1, Col 3 */}
//               <div className="w-[4.5rem] h-[5.25rem] rounded-lg bg-gray-800/[0.04] ring-1 ring-gray-900/[0.08]"></div>

//               {/* Row 2, Col 1: Engineer (Index 0) */}
//               <div 
//                 ref={el => (personRefs.current[0] = el)}
//                 className="relative rounded-lg p-1 ring-1 ring-gray-900/5 bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05)] transition-shadow duration-500"
//               >
//                 <div className="img-container relative overflow-hidden rounded bg-gray-50 opacity-70 grayscale"
//                   style={{ background: 'radial-gradient(241.22% 160.71% at 49.27% -9.52%, rgb(108 71 255 / 0.3), rgb(255 249 99 / 0.24) 41.24%, rgb(56 218 253 / 0.18) 62.34%, rgb(98 72 246 / 0) 91.89%)' }}
//                 >
//                   <img alt="" src="https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?q=80&w=256&h=256&auto=format&fit=crop"
//                     className="h-[5.25rem] w-[4.5rem] object-cover mix-blend-multiply" />
//                   <svg className="absolute inset-0 size-full" aria-hidden="true">
//                     <rect width="100%" height="100%" fill="url(#wave)"></rect>
//                   </svg>
//                 </div>
//               </div>

//               {/* Row 2, Col 2 */}
//               <div className="w-[4.5rem] h-[5.25rem] rounded-lg bg-gray-800/[0.02] ring-1 ring-gray-900/[0.05]"></div>

//               {/* Row 2, Col 3: Product Member (Index 2) */}
//               <div 
//                 ref={el => (personRefs.current[2] = el)}
//                 className="relative rounded-lg p-1 ring-1 ring-gray-900/5 bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05)] transition-shadow duration-500"
//               >
//                 <div className="img-container relative overflow-hidden rounded bg-gray-50 opacity-70 grayscale"
//                   style={{ background: 'radial-gradient(241.22% 160.71% at 49.27% -9.52%, rgb(108 71 255 / 0.3), rgb(255 249 99 / 0.24) 41.24%, rgb(56 218 253 / 0.18) 62.34%, rgb(98 72 246 / 0) 91.89%)' }}
//                 >
//                   <img alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop"
//                     className="h-[5.25rem] w-[4.5rem] object-cover mix-blend-multiply" />
//                   <svg className="absolute inset-0 size-full" aria-hidden="true">
//                     <rect width="100%" height="100%" fill="url(#wave)"></rect>
//                   </svg>
//                 </div>
//               </div>

//               {/* Row 3, Col 1 */}
//               <div className="w-[4.5rem] h-[5.25rem] rounded-lg ring-1 ring-gray-900/[0.05]"></div>

//               {/* Row 3, Col 2: Marketing (Index 3) */}
//               <div 
//                 ref={el => (personRefs.current[3] = el)}
//                 className="relative rounded-lg p-1 ring-1 ring-gray-900/5 bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05)] transition-shadow duration-500"
//               >
//                 <div className="img-container relative overflow-hidden rounded bg-gray-50 opacity-70 grayscale"
//                   style={{ background: 'radial-gradient(241.22% 160.71% at 49.27% -9.52%, rgb(108 71 255 / 0.3), rgb(255 249 99 / 0.24) 41.24%, rgb(56 218 253 / 0.18) 62.34%, rgb(98 72 246 / 0) 91.89%)' }}
//                 >
//                   <img alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&h=256&auto=format&fit=crop"
//                     className="h-[5.25rem] w-[4.5rem] object-cover mix-blend-multiply" />
//                   <svg className="absolute inset-0 size-full" aria-hidden="true">
//                     <rect width="100%" height="100%" fill="url(#wave)"></rect>
//                   </svg>
//                 </div>
//               </div>

//               {/* Row 3, Col 3 */}
//               <div className="w-[4.5rem] h-[5.25rem] rounded-lg ring-1 ring-gray-900/[0.05]"></div>
//             </div>

//             {/* Role Scroller */}
//             <div className="relative mt-12 w-full h-12 flex items-center justify-center">
//               {/* Static Center Active Pill Background */}
//               <div className="absolute left-1/2 -translate-x-1/2 w-[110px] h-9 bg-white rounded-full ring-1 ring-gray-950/10 shadow-sm z-0"></div>
              
//               {/* Sliding Track */}
//               <div className="w-full overflow-visible flex justify-center">
//                 <div 
//                   ref={roleTrackRef}
//                   className="flex items-center gap-0"
//                   style={{ width: 'auto' }}
//                 >
//                   {displayRoles.map((role, i) => (
//                     <div 
//                       key={i} 
//                       className="flex-none w-[120px] flex items-center justify-center"
//                     >
//                       <span className="text-[13px] font-medium text-gray-500 select-none">
//                         {role.label}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Gradient masks for smooth fade edges */}
//               <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
//               <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Styles for dynamic color/gray toggle if needed via CSS classes, though GSAP handles it inline above */}
//       <style jsx global>{`
//         .img-container {
//           transition: filter 0.5s ease, opacity 0.5s ease;
//         }
//       `}</style>
//     </div>
//   );
// }


// export function OrganizationUIComponent() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const cardRef = useRef<HTMLDivElement>(null);
//   const glowRef = useRef<HTMLDivElement>(null);
//   const placeholderRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Initial states are already set in Tailwind (opacity-0, scale-95, blur-8)
//       // but we ensure GSAP knows the starting point for smooth reversal
//       gsap.set(cardRef.current, {
//         opacity: 0,
//         scale: 0.95,
//         filter: "blur(8px)",
//         y: 10,
//       });
      
//       gsap.set(glowRef.current, {
//         opacity: 0,
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   const handleMouseEnter = () => {
//     gsap.to(cardRef.current, {
//       opacity: 1,
//       scale: 1,
//       filter: "blur(0px)",
//       y: 0,
//       duration: 0.5,
//       ease: "back.out(1.7)",
//       overwrite: "auto",
//     });
//     gsap.to(glowRef.current, {
//       opacity: 0.25,
//       duration: 0.4,
//       ease: "power2.out",
//     });
//     gsap.to(placeholderRef.current, {
//       opacity: 0,
//       duration: 0.3,
//       ease: "power2.out",
//     });
//   };

//   const handleMouseLeave = () => {
//     gsap.to(cardRef.current, {
//       opacity: 0,
//       scale: 0.95,
//       filter: "blur(8px)",
//       y: 10,
//       duration: 0.4,
//       ease: "power2.in",
//       overwrite: "auto",
//     });
//     gsap.to(glowRef.current, {
//       opacity: 0,
//       duration: 0.3,
//       ease: "power2.in",
//     });
//     gsap.to(placeholderRef.current, {
//       opacity: 0.05,
//       duration: 0.4,
//       ease: "power2.in",
//     });
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-50 p-8">
//       <div 
//         ref={containerRef}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         className="group isolate flex flex-col rounded-2xl bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden w-[476px] h-[528px] cursor-default"
//       >
//         {/* Header Section */}
//         <div className="relative z-10 flex-none px-6 pt-6">
//           <h3 className="text-sm font-medium text-gray-950">Organization UI Components</h3>
//           <p className="mt-2 text-pretty text-sm/5 text-gray-600">
//             Clerk's UI components add turn-key simplicity to complex Organization management tasks.
//           </p>
//         </div>

//         {/* Visual Preview Section */}
//         <div className="pointer-events-none relative flex-auto select-none min-h-[10.25rem]" aria-hidden="true">
//           <div className="flex h-full flex-col items-center justify-center px-12">
            
//             {/* Clerk Switcher Button Badge */}
//             <div className="flex items-center rounded-lg px-2 py-1 text-[10px] font-medium text-gray-950 bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] ring-1 ring-gray-900/5 transition-transform duration-300 group-hover:scale-[1.02]">
//               <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mr-1.5 size-4">
//                 <g filter="url(#filter0_d_5068_3324)">
//                   <path fill="#B7B8C2" d="M12.556 2.317a.405.405 0 0 1 .05.626l-1.562 1.561a.462.462 0 0 1-.537.073A3.846 3.846 0 0 0 5.33 9.753a.462.462 0 0 1-.073.538l-1.562 1.561a.405.405 0 0 1-.625-.05 6.838 6.838 0 0 1 9.485-9.485Z"></path>
//                   <path fill="url(#paint0_linear_5068_3324)" fillOpacity=".19" d="M12.556 2.317a.405.405 0 0 1 .05.626l-1.562 1.561a.462.462 0 0 1-.537.073A3.846 3.846 0 0 0 5.33 9.753a.462.462 0 0 1-.073.538l-1.562 1.561a.405.405 0 0 1-.625-.05 6.838 6.838 0 0 1 9.485-9.485Z"></path>
//                   <g filter="url(#filter1_i_5068_3324)">
//                     <path fill="#131316" d="M10.89 8.002a2.137 2.137 0 1 1-4.273 0 2.137 2.137 0 0 1 4.274 0Z"></path>
//                     <path fill="url(#paint1_linear_5068_3324)" fillOpacity=".11" d="M10.89 8.002a2.137 2.137 0 1 1-4.273 0 2.137 2.137 0 0 1 4.274 0Z"></path>
//                     <path fill="#131316" d="M12.604 13.06a.405.405 0 0 1-.05.627 6.806 6.806 0 0 1-3.8 1.152 6.806 6.806 0 0 1-3.8-1.152.405.405 0 0 1-.05-.626l1.561-1.562a.462.462 0 0 1 .538-.072 3.83 3.83 0 0 0 1.751.42 3.83 3.83 0 0 0 1.751-.42.462.462 0 0 1 .538.072l1.562 1.562Z"></path>
//                     <path fill="url(#paint2_linear_5068_3324)" fillOpacity=".11" d="M12.604 13.06a.405.405 0 0 1-.05.627 6.806 6.806 0 0 1-3.8 1.152 6.806 6.806 0 0 1-3.8-1.152.405.405 0 0 1-.05-.626l1.561-1.562a.462.462 0 0 1 .538-.072 3.83 3.83 0 0 0 1.751.42 3.83 3.83 0 0 0 1.751-.42.462.462 0 0 1 .538.072l1.562 1.562Z"></path>
//                   </g>
//                 </g>
//                 <defs>
//                   <linearGradient id="paint0_linear_5068_3324" x1="7.433" x2="7.433" y1="1.164" y2="12.195" gradientUnits="userSpaceOnUse"><stop stopOpacity="0"></stop><stop offset="1"></stop></linearGradient>
//                   <linearGradient id="paint1_linear_5068_3324" x1="8.754" x2="8.754" y1="5.865" y2="14.839" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"></stop><stop offset="1" stopColor="#fff" stopOpacity="0"></stop></linearGradient>
//                   <linearGradient id="paint2_linear_5068_3324" x1="8.754" x2="8.754" y1="5.865" y2="14.839" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"></stop><stop offset="1" stopColor="#fff" stopOpacity="0"></stop></linearGradient>
//                   <filter id="filter0_d_5068_3324" width="13.676" height="13.861" x="1.918" y="1.163" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy=".185"></feOffset><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5068_3324"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_5068_3324" result="shape"></feBlend></filter>
//                   <filter id="filter1_i_5068_3324" width="7.949" height="9.067" x="4.779" y="5.865" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy=".185"></feOffset><feGaussianBlur stdDeviation=".046"></feGaussianBlur><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.18 0"></feColorMatrix><feBlend in2="shape" result="effect1_innerShadow_5068_3324"></feBlend></filter>
//                 </defs>
//               </svg>
//               Clerk
//               <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-3 size-4"><path fill="#9394A1" fillRule="evenodd" d="M4.24 6.2a.75.75 0 0 1 1.06.04l2.698 2.906 2.45-2.655a.744.744 0 0 1 .022-.021l.25-.25a.75.75 0 1 1 1.06 1.06l-.24.24-2.989 3.239a.75.75 0 0 1-1.1.001L4.2 7.26A.75.75 0 0 1 4.24 6.2Z" clipRule="evenodd"></path></svg>
//             </div>

//             {/* Dash Border Preview Container */}
//             <div className="relative mt-4 w-full h-[320px]">
//               <div className="absolute inset-0 rounded-xl border border-dashed border-gray-150 bg-gray-25/50"></div>
              
//               {/* Animated content layer */}
//               <div ref={cardRef} className="relative w-full opacity-0 scale-[0.95] blur-[8px] z-20">
//                 <div ref={glowRef} className="absolute -bottom-1 left-[calc((304-264)/304*50%)] -z-10 h-6 w-[calc(264/304*100%)] rounded-[50%] bg-gradient-to-r from-purple-500 from-25% to-sky-300 to-75% opacity-0 blur-sm"></div>
                
//                 <div className="overflow-hidden rounded-xl bg-gray-50/80 shadow-[0_2px_13px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.12)] ring-1 ring-gray-950/5 backdrop-blur-[10px]">
//                   <div className="rounded-b-xl bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] ring-1 ring-gray-900/5">
                    
//                     {/* List Item 1: Bluth Company */}
//                     <div className="flex items-center gap-3 px-4 py-3 [&:not(:first-child)]:border-t [&:not(:first-child)]:border-gray-400/10 transition-colors duration-200 hover:bg-gray-50/50">
//                       <div className="flex-none rounded p-0.5 shadow-[0_2px_3px_rgba(0,0,0,0.04),0_24px_68px_rgba(47,48,55,0.05),0_4px_6px_rgba(34,42,53,0.04),0_1px_1px_rgba(0,0,0,0.05)] ring-1 ring-gray-900/5 bg-white">
//                         <svg viewBox="0 0 36 36" fill="none" aria-hidden="true" className="size-9"><path fill="#22C543" fillRule="evenodd" d="M18 28c5.523 0 10-4.477 10-10S23.523 8 18 8 8 12.477 8 18s4.477 10 10 10Zm-8-10a8 8 0 0 1 8-8v16a8 8 0 0 1-8-8Z" clipRule="evenodd"></path></svg>
//                       </div>
//                       <div className="flex-auto text-[10px]">
//                         <div className="font-book text-gray-950">Bluth Company</div>
//                         <div className="text-gray-400">Mr. Manager</div>
//                       </div>
//                       <div className="flex-none rounded-md shadow-[0_2px_3px_-1px_rgba(0,0,0,0.08),0_1px_rgba(25,28,33,0.02)] ring-1 ring-gray-950/7.5 bg-white p-0.5">
//                         <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5"><path fill="#5E5F6E" fillRule="evenodd" clipRule="evenodd" d="M10.56 6.536A.667.667 0 0 1 11.212 6h1.573a.667.667 0 0 1 .653.536l.221 1.101c.466.178.9.429 1.286.744l1.065-.36a.667.667 0 0 1 .791.298l.787 1.362a.667.667 0 0 1-.137.834l-.845.742c.08.492.08.994 0 1.486l.845.742a.666.666 0 0 1 .137.833l-.786 1.363a.666.666 0 0 1-.792.298l-1.065-.36c-.386.315-.82.566-1.286.744l-.22 1.101a.666.666 0 0 1-.653.536h-1.574a.666.666 0 0 1-.654-.536l-.22-1.101a4.664 4.664 0 0 1-1.286-.744l-1.066.36a.666.666 0 0 1-.79-.298L6.41 14.32a.667.667 0 0 1 .137-.834l.844-.743a4.7 4.7 0 0 1 0-1.485l-.844-.742a.667.667 0 0 1-.138-.833l.787-1.363a.667.667 0 0 1 .791-.298l1.066.36c.386-.315.82-.566 1.286-.744l.22-1.101ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path></svg>
//                       </div>
//                     </div>

//                     {/* List Item 2: Dunder Mifflin */}
//                     <div className="flex items-center gap-3 px-4 py-3 [&:not(:first-child)]:border-t [&:not(:first-child)]:border-gray-400/10 transition-colors duration-200 hover:bg-gray-50/50">
//                       <div className="flex-none rounded p-0.5 shadow-[0_2px_3px_rgba(0,0,0,0.04),0_24px_68px_rgba(47,48,55,0.05),0_4px_6px_rgba(34,42,53,0.04),0_1px_1px_rgba(0,0,0,0.05)] ring-1 ring-gray-900/5 bg-white">
//                         <svg viewBox="0 0 36 36" fill="none" aria-hidden="true" className="size-9"><path className="stroke-gray-600" strokeLinecap="square" strokeLinejoin="round" strokeWidth="4" d="M18 9s4.5 3.6 0 9 0 9 0 9"></path><path stroke="#fff" strokeLinecap="square" strokeLinejoin="round" strokeWidth="6" d="M18 9s4.5 3.6 0 9 0 9 0 9" transform="rotate(90 18 18)"></path><path className="stroke-gray-800" strokeLinecap="square" strokeLinejoin="round" strokeWidth="4" d="M18 9s4.5 3.6 0 9 0 9 0 9" transform="rotate(90 18 18)"></path></svg>
//                       </div>
//                       <div className="flex-auto text-[10px]">
//                         <div className="font-book text-gray-950">Dunder Mifflin</div>
//                         <div className="text-gray-400">Asst (to the) Regional Manager</div>
//                       </div>
//                     </div>

//                     {/* List Item 3: Personal Account */}
//                     <div className="flex items-center gap-3 px-4 py-3 [&:not(:first-child)]:border-t [&:not(:first-child)]:border-gray-400/10 transition-colors duration-200 hover:bg-gray-50/50">
//                       <div className="flex-none rounded p-0.5 shadow-[0_2px_3px_rgba(0,0,0,0.04),0_24px_68px_rgba(47,48,55,0.05),0_4px_6px_rgba(34,42,53,0.04),0_1px_1px_rgba(0,0,0,0.05)] ring-1 ring-gray-900/5 bg-white overflow-hidden">
//                         <div className="size-9 bg-[#D9D9DE]" />
//                       </div>
//                       <div className="flex-auto text-[10px]">
//                         <div className="font-book text-gray-950">Personal account</div>
//                       </div>
//                     </div>

//                     {/* List Item 4: Create Organization */}
//                     <div className="flex items-center gap-3 px-4 py-3 [&:not(:first-child)]:border-t [&:not(:first-child)]:border-gray-400/10 transition-colors duration-200 hover:bg-gray-50/50">
//                       <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="size-10 flex-none"><rect width="40" height="40" fill="#fff" rx="4"></rect><circle cx="20" cy="20" r="11" fill="#EEEEF0"></circle><path stroke="#9394A1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M20 16v8m4-4h-8"></path></svg>
//                       <div className="flex-auto text-[10px]">
//                         <div className="font-book text-gray-950">Create organization</div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Switcher Footer */}
//                   <div className="flex items-center justify-center gap-2 p-3 text-[10px] font-medium text-gray-400 bg-white/50">
//                     Secured by 
//                     <svg viewBox="0 0 43 12" fill="none" aria-hidden="true" className="h-3">
//                       <circle cx="6.834" cy="6" r="1.875" fill="#747686"></circle>
//                       <path fill="#747686" d="M10.212 10.44c.16.159.144.423-.044.548A5.972 5.972 0 0 1 6.834 12a5.972 5.972 0 0 1-3.335-1.012.356.356 0 0 1-.044-.549l1.37-1.37a.405.405 0 0 1 .472-.064c.46.236.983.37 1.537.37a3.36 3.36 0 0 0 1.536-.37.405.405 0 0 1 .472.064l1.37 1.37Z"></path>
//                       <path fill="#747686" d="M10.169 1.011c.187.126.203.39.044.55l-1.37 1.37a.405.405 0 0 1-.472.063 3.375 3.375 0 0 0-4.542 4.542c.08.157.06.349-.064.473l-1.37 1.37a.356.356 0 0 1-.55-.044 6 6 0 0 1 8.323-8.323Z" opacity=".5"></path>
//                       <path fill="#747686" fillRule="evenodd" d="M20.426 1.219c0-.052.042-.094.094-.094h1.406c.052 0 .094.042.094.094v9.562a.094.094 0 0 1-.094.094H20.52a.094.094 0 0 1-.094-.094V1.22ZM18.44 8.847a.096.096 0 0 0-.129.004 2.508 2.508 0 0 1-1.732.675 2.111 2.111 0 0 1-.827-.142 2.076 2.076 0 0 1-.7-.451c-.364-.37-.573-.9-.573-1.53 0-1.263.84-2.126 2.1-2.126.338-.005.673.063.98.2.28.124.53.3.738.52a.097.097 0 0 0 .133.009l.95-.822a.092.092 0 0 0 .009-.13c-.715-.798-1.833-1.21-2.897-1.21-2.142 0-3.661 1.445-3.661 3.57 0 1.052.377 1.937 1.014 2.562.637.625 1.544.993 2.59.993 1.312 0 2.368-.503 2.987-1.149a.091.091 0 0 0-.007-.132l-.975-.841Zm11.325-.977a.093.093 0 0 1-.092.082h-4.927a.09.09 0 0 0-.088.114c.245.908.975 1.458 1.973 1.458.336.007.67-.062.974-.202.284-.13.535-.32.738-.553a.069.069 0 0 1 .096-.009l.99.862c.038.033.044.09.011.129-.598.705-1.566 1.218-2.896 1.218-2.045 0-3.588-1.417-3.588-3.568 0-1.056.363-1.941.97-2.566.319-.322.702-.576 1.126-.746a3.4 3.4 0 0 1 1.334-.245c2.073 0 3.414 1.458 3.414 3.471a5.72 5.72 0 0 1-.035.555Zm-5.078-1.306a.09.09 0 0 0 .088.114h3.275a.09.09 0 0 0 .089-.115c-.223-.772-.79-1.288-1.67-1.288a1.826 1.826 0 0 0-1.382.572c-.184.208-.32.453-.4.717Zm9.987-2.72c.052 0 .095.042.095.095v1.574a.094.094 0 0 1-.101.094 6.153 6.153 0 0 0-.39-.021c-1.227 0-1.947.863-1.947 1.996v3.2a.094.094 0 0 1-.094.093h-1.406a.094.094 0 0 1-.094-.094V4.036c0-.052.042-.094.094-.094h1.406c.052 0 .094.042.094.094v.947a.01.01 0 0 0 .017.005c.55-.734 1.362-1.142 2.219-1.142l.107-.001Zm3.809 4.124a.03.03 0 0 1 .048.005l1.778 2.858a.094.094 0 0 0 .08.044h1.598c.074 0 .119-.08.08-.143l-2.44-3.936a.094.094 0 0 1 .01-.112L41.99 4.09a.094.094 0 0 0-.07-.156h-1.667a.094.094 0 0 0-.07.03l-2.718 2.964a.094.094 0 0 1-.163-.063V1.219a.094.094 0 0 0-.094-.094h-1.406a.094.094 0 0 0-.094.094v9.562c0 .052.042.094.094.094h1.406a.094.094 0 0 0 .094-.094V9.276c0-.023.009-.046.025-.063l1.158-1.245Z" clipRule="evenodd"></path>
//                     </svg>
//                   </div>
//                 </div>
//               </div>

//               {/* Ghost Placeholder content layer */}
//               <div ref={placeholderRef} className="absolute inset-0 flex items-center justify-center p-8 opacity-5 z-10">
//                  <div className="w-full h-full bg-gray-200 rounded-lg blur-[4px]"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function BillingSection() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const cursorRef = useRef<HTMLDivElement>(null);
//   const checkoutModalRef = useRef<HTMLDivElement>(null);
//   const checkoutFormRef = useRef<HTMLDivElement>(null);
//   const successRef = useRef<HTMLDivElement>(null);
//   const getStartedBtnRef = useRef<HTMLDivElement>(null);
//   const payBtnRef = useRef<HTMLDivElement>(null);
//   const closeBtnRef = useRef<SVGSVGElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

//       // Initial States
//       gsap.set(checkoutModalRef.current, { xPercent: 105 });
//       gsap.set(successRef.current, { opacity: 0, scale: 0.95, display: 'none' });
//       gsap.set(cursorRef.current, { x: 100, y: 150, opacity: 0 });

//       // 1. Cursor Appears and moves to "Get Started"
//       tl.to(cursorRef.current, { opacity: 1, duration: 0.3 })
//         .to(cursorRef.current, {
//           x: -180,
//           y: -120,
//           duration: 1.2,
//           ease: "power2.inOut"
//         })
        
//       // 2. Click "Get Started"
//       tl.to(getStartedBtnRef.current, { scale: 0.95, duration: 0.1 })
//         .to(getStartedBtnRef.current, { scale: 1, duration: 0.1 })
        
//       // 3. Slide in Checkout Modal
//       tl.to(checkoutModalRef.current, {
//         xPercent: 0,
//         duration: 0.6,
//         ease: "power3.out"
//       }, "-=0.1")

//       // 4. Move Cursor to "Pay" button
//       tl.to(cursorRef.current, {
//         x: 40,
//         y: 40,
//         duration: 1,
//         ease: "power2.inOut"
//       })

//       // 5. Click "Pay"
//       tl.to(payBtnRef.current, { scale: 0.97, duration: 0.1 })
//         .to(payBtnRef.current, { scale: 1, duration: 0.1 })

//       // 6. Transition to Success
//       tl.to(checkoutFormRef.current, { opacity: 0, y: -10, duration: 0.3 })
//         .set(checkoutFormRef.current, { display: 'none' })
//         .set(successRef.current, { display: 'flex' })
//         .to(successRef.current, { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)" })

//       // 7. Move Cursor to Close Button
//       tl.to(cursorRef.current, {
//         x: 80,
//         y: -175,
//         duration: 0.8,
//         ease: "power2.inOut"
//       })

//       // 8. Close Modal
//       tl.to(closeBtnRef.current, { scale: 0.8, duration: 0.1 })
//         .to(closeBtnRef.current, { scale: 1, duration: 0.1 })
//         .to(checkoutModalRef.current, {
//           xPercent: 105,
//           duration: 0.5,
//           ease: "power3.in"
//         })
//         .to(cursorRef.current, { opacity: 0, duration: 0.3 })

//       // 9. Reset for Loop
//       tl.set([checkoutFormRef.current, successRef.current], { display: 'none', opacity: 0 })
//         .set(checkoutFormRef.current, { display: 'block', opacity: 1 })
//         .set(successRef.current, { scale: 0.95 })
//         .set(cursorRef.current, { x: 100, y: 150 });

//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={containerRef} className="bg-white min-h-screen">
//       <div className="overflow-hidden pb-[calc(theme(padding.32)+theme(height.11))] pt-32">
//         <div className="mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
//           <div className="lg:flex lg:items-center lg:gap-x-20">
//             {/* Left Content */}
//             <div className="lg:w-96 lg:flex-none">
//               <h2 className="flex items-center gap-x-2 text-sm font-medium text-[#7c3aed]">
//                 Billing
//                 <span className="relative inline-flex bg-blue-50 px-[0.1875rem] text-[0.625rem]/[0.875rem] font-medium text-blue-500">
//                   Beta
//                   <span className="absolute inset-x-[-0.1875rem] -top-px block transform-gpu text-blue-200">
//                     <svg width="100%" height="1" stroke="currentColor" strokeDasharray="3.3 1" aria-hidden="true">
//                       <line x1="0" y1="0.5" x2="100%" y2="0.5"></line>
//                     </svg>
//                   </span>
//                   <span className="absolute inset-x-[-0.1875rem] -bottom-px block transform-gpu text-blue-200">
//                     <svg width="100%" height="1" stroke="currentColor" strokeDasharray="3.3 1" aria-hidden="true">
//                       <line x1="0" y1="0.5" x2="100%" y2="0.5"></line>
//                     </svg>
//                   </span>
//                   <span className="absolute inset-y-[-0.1875rem] -left-px block transform-gpu text-blue-200">
//                     <svg width="1" height="100%" stroke="currentColor" strokeDasharray="3.3 1" aria-hidden="true">
//                       <line x1="0.5" y1="0" x2="0.5" y2="100%"></line>
//                     </svg>
//                   </span>
//                   <span className="absolute inset-y-[-0.1875rem] -right-px block transform-gpu text-blue-200">
//                     <svg width="1" height="100%" stroke="currentColor" strokeDasharray="3.3 1" aria-hidden="true">
//                       <line x1="0.5" y1="0" x2="0.5" y2="100%"></line>
//                     </svg>
//                   </span>
//                 </span>
//               </h2>
//               <p className="mt-4 max-w-md text-balance text-3xl font-semibold tracking-[-0.015em] text-gray-950">
//                 Subscription billing, without the headache
//               </p>
//               <div className="mb-4 mt-4 max-w-md text-pretty text-base/6 text-gray-600">
//                 <p>
//                   Add subscriptions to your B2C or B2B application without having to write payment code, custom UI, or
//                   wrangle webhooks. Just drop in React components and start earning recurring revenue.
//                 </p>
//                 <p className="mt-4">Here’s what you can do out of the box:</p>
//                 <ul role="list">
//                   <li className="mt-2 flex gap-x-2">
//                     <svg viewBox="0 0 16 16" aria-hidden="true" className="mt-1 size-4 flex-none fill-gray-400">
//                       <path fillRule="evenodd" clipRule="evenodd" d="M8 3.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Zm8.136-2.393a.75.75 0 0 1 .257 1.029l-2.1 3.5a.75.75 0 0 1-1.173.144l-1.4-1.4a.75.75 0 0 1 1.06-1.06l.721.72 1.606-2.676a.75.75 0 0 1 1.029-.257Z"></path>
//                     </svg>
//                     Define and manage plans
//                   </li>
//                   <li className="mt-2 flex gap-x-2">
//                     <svg viewBox="0 0 16 16" aria-hidden="true" className="mt-1 size-4 flex-none fill-gray-400">
//                       <path fillRule="evenodd" clipRule="evenodd" d="M8 3.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Zm8.136-2.393a.75.75 0 0 1 .257 1.029l-2.1 3.5a.75.75 0 0 1-1.173.144l-1.4-1.4a.75.75 0 0 1 1.06-1.06l.721.72 1.606-2.676a.75.75 0 0 1 1.029-.257Z"></path>
//                     </svg>
//                     Unify user and subscription data
//                   </li>
//                   <li className="mt-2 flex gap-x-2">
//                     <svg viewBox="0 0 16 16" aria-hidden="true" className="mt-1 size-4 flex-none fill-gray-400">
//                       <path fillRule="evenodd" clipRule="evenodd" d="M8 3.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Zm8.136-2.393a.75.75 0 0 1 .257 1.029l-2.1 3.5a.75.75 0 0 1-1.173.144l-1.4-1.4a.75.75 0 0 1 1.06-1.06l.721.72 1.606-2.676a.75.75 0 0 1 1.029-.257Z"></path>
//                     </svg>
//                     Gate access to content
//                   </li>
//                 </ul>
//               </div>
//               <a
//                 className="group relative isolate inline-flex items-center justify-center overflow-hidden text-left font-semibold text-gray-950 text-sm"
//                 href="#"
//               >
//                 Explore Billing features
//                 <svg viewBox="0 0 10 10" aria-hidden="true" className="ml-2 h-2.5 w-2.5 flex-none opacity-60 group-hover:translate-x-6 group-hover:opacity-0 transition duration-300">
//                   <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7.25 5-3.5-2.25v4.5L7.25 5Z"></path>
//                 </svg>
//                 <svg viewBox="0 0 10 10" aria-hidden="true" className="-ml-2.5 h-2.5 w-2.5 flex-none -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-300">
//                   <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7.25 5-3.5-2.25v4.5L7.25 5Z"></path>
//                 </svg>
//               </a>
//             </div>

//             {/* Right Mockup */}
//             <div className="relative isolate mt-12 flex-auto xl:mt-0">
//               <div className="rounded-xl bg-white overflow-hidden" style={{ boxShadow: '0 2px 3px rgb(0 0 0 / 0.04), 0 24px 68px rgb(47 48 55 / 0.05), 0 4px 6px rgb(34 42 53 / 0.04), 0 0 0 1px rgb(34 42 53 / 0.05), 0 1px 1px rgb(0 0 0 / 0.05)' }}>
//                 {/* Browser Title Bar */}
//                 <div className="relative flex gap-x-1 border-b border-gray-950/5 px-2 py-1.5 z-20 bg-white">
//                   <div className="absolute inset-0 flex items-center justify-center text-[0.625rem] font-medium text-gray-950">Acme, Inc.</div>
//                   <div className="size-2 flex-none rounded-full bg-gray-600/10 ring-1 ring-inset ring-gray-600/10"></div>
//                   <div className="size-2 flex-none rounded-full bg-gray-600/10 ring-1 ring-inset ring-gray-600/10"></div>
//                   <div className="size-2 flex-none rounded-full bg-gray-600/10 ring-1 ring-inset ring-gray-600/10"></div>
//                 </div>

//                 {/* Inner Browser App */}
//                 <div className="relative">
//                   <div className="overflow-hidden">
//                     {/* Header Nav */}
//                     <div className="flex items-center bg-gray-50/50 px-4 py-2 sm:px-6">
//                       <svg viewBox="0 0 20 20" aria-hidden="true" className="size-5 flex-none fill-gray-950">
//                         <mask id="b" width="20" height="20" x="0" y="0" maskUnits="userSpaceOnUse" style={{ maskType: 'luminance' }}>
//                           <path fill="#D9D9D9" d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Z"></path>
//                         </mask>
//                         <g mask="url(#b)">
//                           <path d="M21.75 1.499a.25.25 0 0 0 0-.5v.5Zm0-.5h-23v.5h23v-.5Zm0 3a.25.25 0 0 0 0-.5v.5Zm0-.5h-23v.5h23v-.5Zm0 3a.25.25 0 0 0 0-.5v.5Zm0-.5h-23v.5h23v-.5Zm0 3a.25.25 0 0 0 0-.5v.5Zm0-.5h-23v.5h23v-.5Zm0 3a.25.25 0 1 0 0-.5v.5Zm0-.5h-23v.5h23v-.5Zm0 3a.25.25 0 1 0 0-.5v.5Zm0-.5h-23v.5h23v-.5Zm0 3a.25.25 0 1 0 0-.5v.5Zm0-.5h-23v.5h23v-.5Zm0 3a.25.25 0 1 0 0-.5v.5Zm0-.5h-23v.5h23v-.5Z"></path>
//                           <path d="M13.5 1.75a.5.5 0 0 0 0-1v1Zm0-1h-23v1h23v-1Zm-1 3.5a.5.5 0 0 0 0-1v1Zm0-1h-23v1h23v-1Zm-1 3.5a.5.5 0 0 0 0-1v1Zm0-1h-23v1h23v-1Zm-.75 3.5a.5.5 0 0 0 0-1v1Zm0-1h-23v1h23v-1Zm-.5 3.5a.5.5 0 0 0 0-1v1Zm0-1h-23v1h23v-1Zm1 3.5a.5.5 0 0 0 0-1v1Zm0-1h-23v1h23v-1Zm1.25 3.5a.5.5 0 0 0 0-1v1Zm0-1h-23v1h23v-1Zm1 3.5a.5.5 0 0 0 0-1v1Zm0-1h-23v1h23v-1Z"></path>
//                         </g>
//                       </svg>
//                       <div className="ml-5 text-[0.625rem] font-medium text-gray-600">Product</div>
//                       <div className="ml-5 text-[0.625rem] font-medium text-gray-600">Pricing</div>
//                       <div className="ml-5 hidden text-[0.625rem] font-medium text-gray-600 sm:block">Integrations</div>
//                       <div className="ml-5 hidden text-[0.625rem] font-medium text-gray-600 sm:block">Blog</div>
//                       <svg viewBox="0 0 16 16" aria-hidden="true" className="ml-auto size-4 flex-none fill-gray-400">
//                         <path fillRule="evenodd" clipRule="evenodd" d="M8 3.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Zm5.646-1.389c-.05.05-.145.187-.145.528A.75.75 0 0 1 6 7.14c0-.63.185-1.19.586-1.59C6.986 5.151 7.506 5 8 5c1.042 0 2 .789 2 1.896 0 .632-.324 1.174-.787 1.509a1.532 1.532 0 0 0-.303.302.75.75 0 0 1-1.194-.909c.18-.235.397-.45.618-.61a.364.364 0 0 0 .166-.292c0-.158-.16-.395-.5-.395-.197 0-.3.057-.354.11ZM8 10a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01A.75.75 0 0 1 8 10Z"></path>
//                       </svg>
//                       <div className="relative ml-3 flex-none">
//                         <div className="size-6 flex-none rounded-full bg-gray-200 border border-gray-950/5 overflow-hidden">
//                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" alt="" className="size-full object-cover" />
//                         </div>
//                       </div>
//                     </div>

//                     {/* App Hero */}
//                     <div className="mt-[3.25rem] text-balance px-4 text-center text-[1.375rem]/7 font-semibold text-gray-950">
//                       Tailor made pricing <br className="sm:hidden" />from Acme, Inc.
//                     </div>
//                     <div className="mt-1.5 px-4 text-center text-xs font-medium text-gray-600">
//                       Free 365-day trial, no credit-card required.
//                     </div>

//                     {/* Pricing Grid */}
//                     <div className="relative mx-auto mt-12 w-[15.875rem] pb-16 sm:w-[33.25rem] lg:w-[15.875rem] xl:w-[33.25rem]">
//                        {/* Background decoration */}
//                       <div className="absolute -top-5 bottom-0 left-1/2 -translate-x-1/2 blur-[60px]" style={{ width: '121%' }}>
//                         <div className="w-full -rotate-90 rounded-full bg-gradient-to-r from-[#FFF963] to-[#6248F6] opacity-30 aspect-square"></div>
//                       </div>
                      
//                       <div className="flex gap-x-4 md:gap-x-6">
//                         {/* Starter Card */}
//                         <div className="w-[15.875rem] flex-none overflow-hidden rounded-lg bg-white/70 relative z-10" style={{ boxShadow: '0 0 0 1px rgb(25 28 33 / 0.06), 0 16px 36px -6px rgb(25 28 33 / 0.1), 0 8px 16px -3px rgb(0 0 0 / 0.08)' }}>
//                           <div className="p-4">
//                             <div className="text-[0.625rem]/[0.875rem] font-bold text-gray-950">Starter Acme Plan</div>
//                             <div className="mt-2.5 flex items-center gap-x-1.5">
//                               <div className="text-lg/[1.375rem] font-bold text-gray-950">$9</div>
//                               <div className="text-[0.625rem] font-medium text-gray-500">/ month</div>
//                             </div>
//                             <div className="mt-1.5 flex items-center gap-x-2">
//                               <div className="rounded-full bg-gray-950/10 p-0.5 pr-2 ring-1 ring-inset ring-gray-950/[0.06]">
//                                 <div className="size-2.5 rounded-full bg-white shadow-sm border border-gray-100"></div>
//                               </div>
//                               <div className="text-[0.625rem] font-medium text-gray-500">Billed annually</div>
//                             </div>
//                           </div>
//                           <div className="border-y border-gray-950/5 px-4 py-3">
//                             <div ref={getStartedBtnRef} className="rounded bg-gray-800 py-0.5 text-center text-[10px] font-medium text-white shadow-inner">
//                               Get started
//                             </div>
//                           </div>
//                           <div className="bg-white p-4 text-[10px]/[1.125rem] text-gray-950">
//                             <div className="flex gap-x-1.5"><CheckIcon /> Custom branding</div>
//                             <div className="flex gap-x-1.5 mt-2.5"><CheckIcon /> Mobile app integration</div>
//                             <div className="flex gap-x-1.5 mt-2.5"><CheckIcon /> Daily backups</div>
//                           </div>
//                         </div>

//                         {/* Pro Card (Partial) */}
//                         <div className="w-[15.875rem] flex-none overflow-hidden rounded-lg bg-white/70 relative z-10 opacity-50 blur-[2px]" style={{ boxShadow: '0 0 0 1px rgb(25 28 33 / 0.06), 0 16px 36px -6px rgb(25 28 33 / 0.1), 0 8px 16px -3px rgb(0 0 0 / 0.08)' }}>
//                            <div className="p-4">
//                             <div className="text-[0.625rem]/[0.875rem] font-bold text-gray-950">Pro Acme Plan</div>
//                             <div className="mt-2.5 flex items-center gap-x-1.5">
//                               <div className="text-lg/[1.375rem] font-bold text-gray-950">$19</div>
//                               <div className="text-[0.625rem] font-medium text-gray-500">/ month</div>
//                             </div>
//                           </div>
//                           <div className="border-y border-gray-950/5 px-4 py-3">
//                             <div className="rounded bg-gray-800 py-0.5 text-center text-[10px] font-medium text-white">Get started</div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Checkout Overlay Modal */}
//                   <div ref={checkoutModalRef} className="absolute inset-0 z-50 flex justify-end bg-gradient-to-t from-gray-50/90 via-gray-50/50 to-transparent px-2 pb-7 pt-2 backdrop-blur-[2px]">
//                     <div className="flex w-[17.125rem] flex-col overflow-hidden rounded-lg bg-white" style={{ boxShadow: 'rgba(25, 28, 33, 0.06) 0px 0px 0px 1px, rgba(25, 28, 33, 0.1) 0px 16px 36px -6px, rgba(0, 0, 0, 0.08) 0px 8px 16px -3px' }}>
//                       {/* Checkout Header */}
//                       <div className="flex items-center justify-between border-b border-gray-950/5 bg-gray-50 px-3 py-2.5 text-[0.625rem] font-bold text-gray-950">
//                         Checkout
//                         <svg ref={closeBtnRef} viewBox="0 0 12 12" aria-hidden="true" className="size-3 flex-none fill-gray-500 cursor-pointer">
//                           <path d="M3.592 2.79a.567.567 0 0 0-.802.803L5.197 6 2.79 8.407a.567.567 0 1 0 .802.802L6 6.802 8.406 9.21a.567.567 0 1 0 .802-.802L6.801 6l2.407-2.407a.567.567 0 1 0-.802-.802L6 5.198 3.592 2.79Z"></path>
//                         </svg>
//                       </div>

//                       {/* Checkout Body (Form State) */}
//                       <div ref={checkoutFormRef} className="relative flex-auto">
//                         <div className="px-3.5 py-3">
//                           <div className="flex justify-between">
//                             <div className="text-[0.625rem]/4 font-medium text-gray-950">Starter Acme Plan</div>
//                             <div className="text-[0.625rem]/4 text-gray-950 font-semibold">$9.00</div>
//                           </div>
//                           <div className="text-right text-[0.5rem]/3 font-medium text-gray-500">per month</div>
//                           <hr className="my-1.5 border-gray-950/5" />
//                           <div className="flex items-center justify-between">
//                             <div className="text-[0.5rem]/3 font-medium text-gray-500">Tax</div>
//                             <div className="text-[0.625rem]/4 text-gray-500">$5.00</div>
//                           </div>
//                           <div className="mt-1.5 flex items-center">
//                             <div className="text-[0.625rem]/4 font-medium text-gray-950">Total Due Today</div>
//                             <div className="ml-auto text-[0.5rem]/3 font-medium text-gray-500">USD</div>
//                             <div className="ml-1 text-[0.625rem]/4 text-gray-950 font-semibold">$14.00</div>
//                           </div>
//                         </div>

//                         <div className="border-t border-gray-950/5 px-3.5 py-3">
//                           <div className="overflow-hidden rounded-md border border-gray-950/5">
//                             <div className="flex items-center px-2.5 py-1.5 text-[0.625rem]/4 font-medium text-gray-950">
//                               Account Funds
//                               <svg viewBox="0 0 18 18" aria-hidden="true" className="ml-auto size-[1.125rem] flex-none fill-gray-500 rotate-180">
//                                 <path fillRule="evenodd" clipRule="evenodd" d="M6.18 10.723a.562.562 0 0 1-.03-.794l2.438-2.625a.562.562 0 0 1 .824 0l2.437 2.625a.562.562 0 1 1-.824.765L9 8.514l-2.025 2.18a.562.562 0 0 1-.795.03Z" opacity=".6"></path>
//                               </svg>
//                             </div>
//                             <div className="rounded-md bg-gray-50 p-2.5 ring-1 ring-gray-950/5">
//                               <div className="flex h-6 items-center gap-x-1.5 rounded bg-white px-2 text-[0.625rem]/4 text-gray-950 shadow-[0_0_0_1px_rgba(0,0,0,0.05)]">
//                                 <svg viewBox="0 0 12 12" aria-hidden="true" className="size-3 flex-none fill-gray-400">
//                                   <path d="M1.125 3.749a1.5 1.5 0 0 1 1.5-1.5h6.75a1.5 1.5 0 0 1 1.5 1.5h-9.75Z"></path>
//                                   <path fillRule="evenodd" clipRule="evenodd" d="M1.125 4.874h9.75v3.375a1.5 1.5 0 0 1-1.5 1.5h-6.75a1.5 1.5 0 0 1-1.5-1.5V4.874Zm1.65 1.875a.15.15 0 0 0-.15.15v1.2c0 .083.067.15.15.15h1.95a.15.15 0 0 0 .15-.15v-1.2a.15.15 0 0 0-.15-.15h-1.95Z"></path>
//                                 </svg>
//                                 Visa ⋯ 4242
//                               </div>
//                               <div ref={payBtnRef} className="relative mt-2.5 overflow-hidden rounded bg-[#3b3c46] py-1.5 text-center text-[10px] font-semibold text-white shadow-md cursor-pointer">
//                                 Pay $14.00
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//                         <div className="mt-2.5 flex items-center gap-x-3 px-3.5">
//                           <div className="h-px flex-auto bg-gray-950/5"></div>
//                           <div className="flex-none text-[0.625rem] text-gray-500">or</div>
//                           <div className="h-px flex-auto bg-gray-950/5"></div>
//                         </div>

//                         <div className="mt-2.5 px-3.5">
//                           <div className="overflow-hidden rounded-md border border-gray-950/5">
//                             <div className="flex items-center px-2.5 py-1.5 text-[0.625rem]/4 font-medium text-gray-950">
//                               Add a New Payment Source
//                             </div>
//                             <div className="rounded-md bg-gray-50 p-2.5 ring-1 ring-gray-950/5">
//                               <div className="flex h-[1.875rem] items-center justify-center gap-x-1 rounded bg-black text-[0.625rem]/4 text-white font-medium">
//                                 Pay with <span className="font-bold"> Pay</span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Success State */}
//                       <div ref={successRef} className="hidden absolute inset-x-0 bottom-0 top-[37px] flex-col items-center justify-center p-6 text-center bg-white">
//                         <div className="size-12 rounded-full bg-green-50 flex items-center justify-center mb-4 ring-8 ring-green-50/50">
//                           <svg viewBox="0 0 24 24" className="size-6 text-green-600 fill-none stroke-current stroke-2">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//                           </svg>
//                         </div>
//                         <h3 className="text-sm font-bold text-gray-950">Payment was successful!</h3>
//                         <p className="mt-2 text-[0.625rem] text-gray-500 font-medium">Your new subscription is all set.</p>
                        
//                         <div className="mt-8 w-full space-y-2">
//                           <div className="flex justify-between text-[0.625rem] border-b border-gray-50 pb-2">
//                             <span className="text-gray-500">Total paid</span>
//                             <span className="text-gray-950 font-bold">$14.00</span>
//                           </div>
//                           <div className="flex justify-between text-[0.625rem] border-b border-gray-50 pb-2">
//                             <span className="text-gray-500">Payment method</span>
//                             <span className="text-gray-950 font-medium">Visa ⋯ 4242</span>
//                           </div>
//                         </div>

//                         <div className="mt-8 w-full rounded bg-gray-950 py-2 text-center text-[0.625rem] font-bold text-white shadow-lg">
//                           Go to app
//                         </div>
//                       </div>
//                     </div>

//                     {/* Cursor Mockup */}
//                     <div ref={cursorRef} className="absolute inset-0 z-[100] pointer-events-none flex items-center justify-center translate-x-[100px] translate-y-[150px]">
//                       <div className="relative">
//                         <svg viewBox="0 0 13 16" className="h-5 fill-gray-950 stroke-white drop-shadow-md">
//                           <path d="m3.045 14.726 2.68-2.602a.046.046 0 0 1 .02-.005h4.436c1.335 0 2.005-1.614 1.062-2.56l-8.181-8.2C2.118.412.5 1.081.5 2.419v11.23c0 1.327 1.594 2 2.545 1.077Z"></path>
//                         </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Floating Widget Mockup */}
//       <div className="fixed bottom-6 right-6 z-50">
//         <div className="size-10 rounded-full bg-[#1c1d24] flex items-center justify-center shadow-xl">
//            <svg viewBox="0 0 24 24" className="size-6 text-white fill-current">
//               <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
//            </svg>
//         </div>
//       </div>
//     </div>
//   );
// }

// function CheckIcon() {
//   return (
//     <svg viewBox="0 0 16 16" aria-hidden="true" className="mt-0.5 size-4 flex-none fill-gray-300">
//       <path fillRule="evenodd" clipRule="evenodd" d="M12.136 3.607a.75.75 0 0 1 .257 1.029l-4.5 7.5a.75.75 0 0 1-1.173.144l-3-3a.75.75 0 0 1 1.06-1.06l2.321 2.32 4.006-6.676a.75.75 0 0 1 1.029-.257Z"></path>
//     </svg>
//   );
// }

// const StorageIcon = () => (
//   <svg
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="w-6 h-6 text-[#EAEAEA]"
//   >
//     <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path>
//   </svg>
// );

// const ImageIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="lucide lucide-image w-6 h-6 md:w-6 md:h-6"
//   >
//     <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
//     <circle cx="9" cy="9" r="2"></circle>
//     <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
//   </svg>
// );

// const FileIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="lucide lucide-file w-6 h-6 md:w-6 md:h-6"
//   >
//     <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
//     <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
//   </svg>
// );

// const VideoIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="lucide lucide-video w-6 h-6 md:w-6 md:h-6"
//   >
//     <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
//     <rect x="2" y="6" width="14" height="12" rx="2"></rect>
//   </svg>
// );

// const MarqueeContent = () => {
//   const columns = Array(10).fill(0);
//   const icons = [<ImageIcon key="img"/>, <FileIcon key="file"/>, <VideoIcon key="vid"/>];

//   return (
//     <div className="relative flex h-full flex-shrink-0 items-end pb-4 animate-marquee [animation-play-state:paused] motion-safe:group-hover:[animation-play-state:running] will-change-transform">
//       {columns.map((_, i) => (
//         <div key={i} className="flex flex-col ml-2 gap-2 md:gap-2">
//           {icons.map((icon, j) => (
//             <div
//               key={j}
//               className="w-[60px] h-[60px] md:min-w-[62px] md:w-[62px] md:h-[62px] flex items-center justify-center rounded-lg border bg-[#1C1C1C] border-[#2D2D2D] text-[#898989] transition-colors hover:border-[#444444] hover:text-[#EAEAEA] hover:bg-[#242424]"
//             >
//               {icon}
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };


// export function StorageComponentPage() {
//   return (
//     <>
//       <style>
//         {`
//           @keyframes marquee {
//             from { transform: translateX(0%); }
//             to { transform: translateX(-100%); }
//           }
//           .animate-marquee {
//             animation: marquee 30s linear infinite;
//           }
//         `}
//       </style>
//       <main className="bg-[#111111] flex items-center justify-center min-h-screen font-sans">
//         <div className="w-full max-w-[438px] cursor-pointer group">
//           <div className="flex items-center gap-3">
//             <StorageIcon />
//             <h2 className="text-xl font-medium text-[#EAEAEA]">Storage</h2>
//           </div>
//           <p className="mt-2 text-base text-[#A1A1A1]">
//             Store, organize, and serve
//             <br />
//             large files, from videos to images.
//           </p>
//           <div className="relative mt-8 h-[224px]">
//             <figure className="absolute inset-0 hidden sm:flex flex-nowrap overflow-hidden">
//                 <MarqueeContent />
//                 <MarqueeContent />
//             </figure>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }


// export function PostgresDatabaseComponentNew() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black font-sans">
//       <div className="relative group w-full max-w-5xl bg-[#111111] border border-[#333] rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row gap-8 overflow-hidden">
//         {/* Left Content */}
//         <div className="relative z-10 md:w-1/2">
//           <div className="flex items-center gap-3">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="text-white"
//             >
//               <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
//               <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
//               <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
//             </svg>
//             <h2 className="text-white text-2xl font-medium">Postgres Database</h2>
//           </div>
//           <p className="mt-4 text-lg text-[#888888] leading-relaxed">
//             Every project is a{" "}
//             <span className="text-[#eeeeee]">full Postgres database</span>, the world's
//             most trusted relational database.
//           </p>
//           <ul className="mt-8 space-y-3">
//             <li className="flex items-center gap-3">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="text-white"
//               >
//                 <polyline points="20 6 9 17 4 12"></polyline>
//               </svg>
//               <span className="text-[#cccccc]">100% portable</span>
//             </li>
//             <li className="flex items-center gap-3">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="text-white"
//               >
//                 <polyline points="20 6 9 17 4 12"></polyline>
//               </svg>
//               <span className="text-[#cccccc]">Built-in Auth with RLS</span>
//             </li>
//             <li className="flex items-center gap-3">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="text-white"
//               >
//                 <polyline points="20 6 9 17 4 12"></polyline>
//               </svg>
//               <span className="text-[#cccccc]">Easy to extend</span>
//             </li>
//           </ul>
//         </div>

//         {/* Right Graphic - from HTML Source */}
//         <figure
//           className="absolute inset-0 z-0 hidden sm:block"
//           role="img"
//           aria-label="Supabase Postgres database visual composition"
//         >
//           <span className="absolute group w-full md:w-auto h-full md:aspect-square flex items-end md:items-center justify-center md:justify-end right-0 left-0 md:left-auto xl:-right-12 2xl:right-0 top-12 md:top-0 md:bottom-0 my-auto">
//             {/* The prompt's HTML included img tags for light/dark mode.
//                 Since the image files are not available, they are omitted.
//                 The visual representation is primarily the SVG which is visible on hover.
//                 A base opacity is added to a path to mimic the non-hover state from the screenshot.
//             */}
//              <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 390 430"
//               className="absolute w-full h-full z-10 m-auto will-change-transform opacity-0 transition-opacity group-hover:opacity-100"
//             >
//               <defs>
//                  {/* Replicating gradients with arbitrary colors to match the visual style */}
//                 <radialGradient
//                   id="a"
//                   cx="0"
//                   cy="0"
//                   r="1"
//                   gradientUnits="userSpaceOnUse"
//                   gradientTransform="translate(-37.5 15) rotate(45) scale(166 180)"
//                 >
//                   <stop stopColor="#3ecf8e"></stop>
//                   <stop offset="1" stopColor="#888888"></stop>
//                 </radialGradient>
//                 <radialGradient
//                   id="b"
//                   cx="0"
//                   cy="0"
//                   r="1"
//                   gradientUnits="userSpaceOnUse"
//                   gradientTransform="translate(-37.5 15) rotate(45) scale(166 180)"
//                 >
//                   <stop stopColor="#3ecf8e"></stop>
//                   <stop offset="1" stopColor="#888888"></stop>
//                 </radialGradient>
//                 <radialGradient
//                   id="c"
//                   cx="0"
//                   cy="0"
//                   r="1"
//                   gradientUnits="userSpaceOnUse"
//                   gradientTransform="translate(-37.5 15) rotate(45) scale(166 180)"
//                 >
//                   <stop stopColor="#3ecf8e"></stop>
//                   <stop offset="1" stopColor="#888888"></stop>
//                 </radialGradient>
//               </defs>
//               <g stroke="hsl(0, 0%, 30%)">
//                 <path d="M192.144 125.816h-53.465c-8.506 0-16.159 5.17-19.334 13.061L99.0045 189.43c-3.0613 7.608-1.3448 16.306 4.3775 22.181l10.232 10.506c4.792 4.919 7.474 11.516 7.474 18.384l-.001 14.473c0 20.197 16.373 36.569 36.569 36.569 6.16 0 11.154-4.993 11.154-11.153l.001-86.241c0-18.629 7.441-36.486 20.668-49.602 2.746-2.723 7.178-2.704 9.9.041 2.722 2.745 2.703 7.178-.042 9.9-10.577 10.488-16.526 24.766-16.526 39.661l-.001 86.241c0 13.892-11.262 25.153-25.154 25.153-27.928 0-50.569-22.64-50.569-50.569l.001-14.474c0-3.218-1.257-6.309-3.503-8.615L93.353 221.38c-9.5904-9.847-12.4673-24.424-7.3366-37.176l20.3406-50.553c5.308-13.192 18.101-21.835 32.322-21.835h55.729v.084h10.339c49.104 0 88.91 39.806 88.91 88.91v50.842c0 3.866-3.134 7-7 7s-7-3.134-7-7V200.81c0-41.372-33.538-74.91-74.91-74.91H193.23c-.37 0-.732-.029-1.086-.084Z"></path>
//                 <path d="M210.03 283.94c0-3.866-3.134-7-7-7s-7 3.134-7 7v3.113c0 26.959 21.854 48.814 48.813 48.814 26.351 0 47.825-20.879 48.781-46.996h24.614c3.866 0 7-3.134 7-7s-3.134-7-7-7h-26.841c-30.744 0-60.256-12.083-82.173-33.643-2.756-2.711-7.188-2.675-9.899.081-2.711 2.756-2.675 7.188.081 9.9 21.725 21.371 50.116 34.423 80.228 37.134-.679 18.629-15.995 33.524-34.791 33.524-19.227 0-34.813-15.587-34.813-34.814v-3.113ZM238.03 202.145c0 4.792 3.885 8.677 8.677 8.677s8.676-3.885 8.676-8.677-3.884-8.676-8.676-8.676-8.677 3.884-8.677 8.676Z"></path>
//               </g>
//               <path stroke="url(#a)" d="M192.144 125.816h-53.465c-8.506 0-16.159 5.17-19.334 13.061L99.0045 189.43c-3.0613 7.608-1.3448 16.306 4.3775 22.181l10.232 10.506c4.792 4.919 7.474 11.516 7.474 18.384l-.001 14.473c0 20.197 16.373 36.569 36.569 36.569 6.16 0 11.154-4.993 11.154-11.153l.001-86.241c0-18.629 7.441-36.486 20.668-49.602 2.746-2.723 7.178-2.704 9.9.041 2.722 2.745 2.703 7.178-.042 9.9-10.577 10.488-16.526 24.766-16.526 39.661l-.001 86.241c0 13.892-11.262 25.153-25.154 25.153-27.928 0-50.569-22.64-50.569-50.569l.001-14.474c0-3.218-1.257-6.309-3.503-8.615L93.353 221.38c-9.5904-9.847-12.4673-24.424-7.3366-37.176l20.3406-50.553c5.308-13.192 18.101-21.835 32.322-21.835h55.729v.084h10.339c49.104 0 88.91 39.806 88.91 88.91v50.842c0 3.866-3.134 7-7 7s-7-3.134-7-7V200.81c0-41.372-33.538-74.91-74.91-74.91H193.23c-.37 0-.732-.029-1.086-.084Z"></path>
//               <path stroke="url(#b)" d="M210.03 283.94c0-3.866-3.134-7-7-7s-7 3.134-7 7v3.113c0 26.959 21.854 48.814 48.813 48.814 26.351 0 47.825-20.879 48.781-46.996h24.614c3.866 0 7-3.134 7-7s-3.134-7-7-7h-26.841c-30.744 0-60.256-12.083-82.173-33.643-2.756-2.711-7.188-2.675-9.899.081-2.711 2.756-2.675 7.188.081 9.9 21.725 21.371 50.116 34.423 80.228 37.134-.679 18.629-15.995 33.524-34.791 33.524-19.227 0-34.813-15.587-34.813-34.814v-3.113Z"></path>
//               <path stroke="url(#c)" d="M238.03 202.145c0 4.792 3.885 8.677 8.677 8.677s8.676-3.885 8.676-8.677-3.884-8.676-8.676-8.676-8.677 3.884-8.677 8.676Z"></path>
//             </svg>
//             <div className="absolute inset-0 z-0 group-hover:opacity-0 transition-opacity antialiased">
//                 <img
//                     alt="Supabase Postgres database"
//                     draggable="false"
//                     decoding="async"
//                     className="absolute inset-0 object-contain object-center w-full h-full opacity-20"
//                     src="https://supabase.com/images/index/products/database-dark.png"
//                 />
//             </div>
//           </span>
//         </figure>
//       </div>
//     </div>
//   );
// }

// export function VectorComponent() {
//   return (
//     <div className="relative z-10 mx-auto flex h-[350px] w-[406px] flex-col items-start gap-2 p-0 text-left text-[#898989] sm:items-center sm:gap-4 sm:text-center lg:mx-0 lg:items-start lg:pl-2 lg:text-left">
//       <div className="flex items-center gap-2 text-[#FAFAFA]">
//         <svg
//           width="18"
//           height="18"
//           viewBox="0 0 25 25"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M11.9983 11.4482V21.7337M11.9983 11.4482L21.0732 6.17699M11.9983 11.4482L2.92383 6.17723M2.92383 6.17723V12.4849M2.92383 6.17723V6.1232L8.35978 2.9657M21.0736 12.54V6.1232L15.6376 2.9657M17.7247 18.6107L11.9987 21.9367L6.27265 18.6107"
//             stroke="currentColor"
//             strokeWidth="1.5"
//             strokeMiterlimit="10"
//             strokeLinejoin="round"
//             strokeLinecap="round"
//           ></path>
//         </svg>
//         <h2 className="">Vector</h2>
//       </div>
//       <div className="flex flex-1 flex-col justify-between gap-2">
//         <p className="text-sm">
//           Integrate your favorite ML-models to{" "}
//           <br className="hidden sm:inline-block md:hidden" />
//           <strong className="!text-[#FAFAFA]">
//             store, index and search vector embeddings
//           </strong>
//           .
//         </p>
//         <span className="hidden text-[#FAFAFA] lg:block">
//           <ul className="flex flex-col gap-1 text-sm">
//             <li className="flex items-center gap-2">
//               <svg
//                 role="img"
//                 width="24"
//                 height="25"
//                 viewBox="0 0 24 25"
//                 fill="currentColor"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <title>OpenAI logo</title>
//                 <path d="M19.7082 11.2701C20.1166 10.0449 19.9764 8.70392 19.3242 7.58845C18.3429 5.88172 16.3679 5.00397 14.4418 5.41237C13.5823 4.44928 12.351 3.90069 11.0588 3.90679C9.08995 3.90679 7.34055 5.17464 6.73101 7.04595C5.46315 7.30806 4.37206 8.10047 3.73204 9.22203C2.74458 10.9288 2.97011 13.0744 4.29282 14.5373C3.88443 15.7625 4.02462 17.1035 4.67684 18.2128C5.65821 19.9257 7.63314 20.8034 9.5654 20.395C10.4188 21.3581 11.65 21.9128 12.9423 21.9067C14.9111 21.9067 16.6605 20.6388 17.2701 18.7675C18.5379 18.5054 19.629 17.713 20.2629 16.5914C21.2565 14.8847 21.031 12.7391 19.7082 11.2762V11.2701ZM18.3063 8.17971C18.6964 8.8624 18.8427 9.6609 18.7086 10.435C18.6842 10.4167 18.6354 10.3924 18.605 10.3741L15.0208 8.30162C14.838 8.19799 14.6124 8.19799 14.4296 8.30162L10.2298 10.7276V8.94774L13.6981 6.94233C15.3134 6.00972 17.3737 6.56441 18.3063 8.17971ZM10.2298 11.8797L11.9975 10.8556L13.7652 11.8797V13.9216L11.9975 14.9457L10.2298 13.9216V11.8797ZM11.0527 5.08321C11.8451 5.08321 12.607 5.35751 13.2166 5.86343C13.1922 5.87562 13.1434 5.9061 13.1069 5.92439L9.52273 7.99075C9.33987 8.09437 9.23015 8.28943 9.23015 8.50277V13.3548L7.68799 12.4648V8.454C7.68799 6.58879 9.19357 5.08321 11.0588 5.07712L11.0527 5.08321ZM4.75608 9.81329C5.15228 9.1306 5.76792 8.60639 6.51157 8.33209V12.5928C6.51157 12.8062 6.62129 12.9951 6.80415 13.1048L10.9978 15.5247L9.44958 16.4208L5.98736 14.4215C4.37816 13.4889 3.82347 11.4286 4.75608 9.81329ZM5.70087 17.6338C5.30467 16.9572 5.16447 16.1526 5.29857 15.3784C5.32296 15.3967 5.37172 15.4211 5.4022 15.4394L8.98633 17.5119C9.16919 17.6155 9.39472 17.6155 9.57759 17.5119L13.7713 15.0859V16.8657L10.3029 18.8651C8.68765 19.7916 6.62738 19.243 5.69478 17.6338H5.70087ZM12.9484 20.7303C12.1621 20.7303 11.394 20.456 10.7906 19.95C10.815 19.9379 10.8698 19.9074 10.9003 19.8891L14.4844 17.8227C14.6673 17.7191 14.7831 17.524 14.777 17.3107V12.4648L16.3192 13.3548V17.3595C16.3192 19.2247 14.8075 20.7364 12.9484 20.7364V20.7303ZM19.2511 16.0002C18.8549 16.6829 18.2331 17.2071 17.4956 17.4753V13.2146C17.4956 13.0012 17.3859 12.8062 17.203 12.7025L13.0032 10.2765L14.5454 9.38661L18.0137 11.3859C19.629 12.3185 20.1776 14.3788 19.245 15.9941L19.2511 16.0002Z"></path>
//               </svg>
//               <span>OpenAI</span>
//             </li>
//             <li className="flex items-center gap-2">
//               <svg
//                 width="24"
//                 height="25"
//                 viewBox="0 0 24 25"
//                 fill="currentColor"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <title>Hugging Face logo</title>
//                 <path d="M14.5063 9.99415C14.6241 10.0358 14.7118 10.1627 14.7951 10.2834C14.9078 10.4466 15.0127 10.5984 15.1736 10.5128C15.7037 10.2309 15.905 9.57264 15.6231 9.04248C15.3412 8.51234 14.6829 8.31108 14.1527 8.59297C13.6226 8.87486 13.4213 9.53316 13.7032 10.0633C13.7778 10.2036 13.9432 10.1374 14.1179 10.0675C14.2548 10.0127 14.3974 9.95571 14.5063 9.99415Z"></path>
//                 <path d="M9.09514 10.2834C9.17851 10.1627 9.26617 10.0358 9.38402 9.99415C9.49288 9.95571 9.63547 10.0127 9.77241 10.0675C9.94706 10.1374 10.1125 10.2036 10.1871 10.0633C10.469 9.53316 10.2677 8.87486 9.73755 8.59297C9.20739 8.31108 8.54909 8.51234 8.2672 9.04248C7.98531 9.57264 8.18657 10.2309 8.71673 10.5128C8.87762 10.5984 8.98246 10.4466 9.09514 10.2834Z"></path>
//                 <path d="M17.161 11.018C17.5512 11.018 17.8676 10.7016 17.8676 10.3113C17.8676 9.92101 17.5512 9.60461 17.161 9.60461C16.7706 9.60461 16.4543 9.92101 16.4543 10.3113C16.4543 10.7016 16.7706 11.018 17.161 11.018Z"></path>
//                 <path d="M7.75666 10.3113C7.75666 10.7016 7.44026 11.018 7.04997 11.018C6.65967 11.018 6.34329 10.7016 6.34329 10.3113C6.34329 9.92101 6.65967 9.60461 7.04997 9.60461C7.44026 9.60461 7.75666 9.92101 7.75666 10.3113Z"></path>
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M10.2643 11.867C10.7827 12.123 11.3674 12.4118 11.9967 12.4118C12.6281 12.4118 13.2188 12.1198 13.7412 11.8612C13.8755 11.7946 14.0128 11.7271 14.1376 11.6754C14.2558 11.6264 14.4041 11.5735 14.555 11.5634C14.723 11.5521 14.9473 11.5939 15.1049 11.7968C15.2359 11.9654 15.2584 12.172 15.2584 12.3283C15.2584 12.9001 15.062 13.7136 14.5621 14.3945C14.0482 15.0944 13.2161 15.6471 11.9967 15.6471C10.7774 15.6471 9.94528 15.0944 9.43142 14.3945C8.93144 13.7136 8.73514 12.9001 8.73514 12.3283C8.73514 12.1765 8.75633 11.981 8.87358 11.8169C9.01568 11.618 9.22619 11.5584 9.40046 11.5617C9.5519 11.5646 9.69847 11.613 9.81184 11.6576C9.93225 11.7049 10.0627 11.7677 10.1901 11.8304L10.2643 11.867ZM9.6146 12.5191C9.65304 12.9157 9.80861 13.4387 10.1325 13.8798C10.259 14.052 10.4113 14.2126 10.5946 14.3489C10.8301 14.0628 11.1482 13.8473 11.5124 13.7389C11.5993 13.713 11.6889 13.8627 11.7805 14.0159C11.869 14.1637 11.9594 14.3149 12.0514 14.3149C12.1494 14.3149 12.2457 14.1659 12.3397 14.0204C12.4379 13.8684 12.5336 13.7204 12.6261 13.75C12.6531 13.7586 12.6799 13.7678 12.7063 13.7776C13.0007 13.8867 13.2605 14.0671 13.4646 14.2979C13.619 14.1732 13.7499 14.031 13.861 13.8798C14.1849 13.4386 14.3404 12.9156 14.3789 12.5191C14.3062 12.5523 14.2234 12.5929 14.1271 12.6406L14.0759 12.666C13.5846 12.9098 12.8353 13.2816 11.9967 13.2816C11.1555 13.2816 10.4002 12.9061 9.90763 12.6612L9.90682 12.6608C9.87181 12.6434 9.83812 12.6266 9.80583 12.6107C9.73404 12.5754 9.67084 12.5448 9.6146 12.5191ZM14.3845 12.2678C14.3845 12.2678 14.3845 12.2678 14.3846 12.2681L14.3848 12.2693C14.3846 12.2683 14.3845 12.2678 14.3845 12.2678Z"
//                 ></path>
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M13.4818 20.3557C13.0168 20.4352 12.5388 20.4766 12.0511 20.4766C11.5966 20.4766 11.1505 20.4406 10.7155 20.3714C10.1735 20.9859 9.32496 21.297 8.18783 21.297C7.49528 21.297 6.69532 21.1805 5.81077 20.9511L5.81039 20.951C5.79063 20.9455 5.18516 20.7768 4.52417 20.5147C3.44871 20.0883 2.89489 19.691 2.67202 19.1868C2.52503 18.8541 2.53568 18.4968 2.70224 18.1807C2.71768 18.1513 2.73421 18.1226 2.75182 18.095C2.4748 17.6719 2.52785 17.2611 2.57961 17.0639C2.64571 16.8123 2.78248 16.6031 2.96817 16.4529C2.88011 16.3066 2.82118 16.1485 2.79574 15.9721C2.74225 15.6018 2.8651 15.2318 3.14169 14.9306C3.35695 14.696 3.66137 14.5668 3.9984 14.5668L4.00736 14.5669C3.75908 13.7723 3.62529 12.9272 3.62529 12.0508C3.62529 7.39737 7.39765 3.625 12.0511 3.625C16.7046 3.625 20.4769 7.39737 20.4769 12.0508C20.4769 12.9294 20.3425 13.7766 20.093 14.5729C20.1336 14.5689 20.1735 14.5668 20.2126 14.5668C20.5496 14.5668 20.854 14.696 21.0693 14.9306C21.3459 15.2318 21.4687 15.6018 21.4153 15.9721C21.3898 16.1485 21.3309 16.3066 21.2428 16.4529C21.4285 16.6031 21.5653 16.8123 21.6314 17.0639C21.6831 17.2611 21.7362 17.6719 21.4592 18.095C21.4768 18.1226 21.4933 18.1513 21.5087 18.1807C21.6753 18.4968 21.686 18.8541 21.539 19.1868C21.3161 19.691 20.7623 20.0883 19.6868 20.5147C19.0256 20.7769 18.42 20.9456 18.4007 20.951L18.4002 20.9511C17.5157 21.1805 16.7157 21.297 16.0232 21.297C14.8764 21.297 14.0231 20.9806 13.4818 20.3557ZM12.0511 4.49476C16.2242 4.49476 19.6072 7.87772 19.6072 12.0508C19.6072 12.6276 19.5425 13.1893 19.4201 13.7291C19.2075 13.5224 18.9259 13.4098 18.6153 13.4098C18.3335 13.4098 18.0436 13.5031 17.7536 13.6871C17.5611 13.8093 17.3485 14.0258 17.1295 14.2981C16.9266 14.0167 16.6427 13.8297 16.3178 13.7786C16.2556 13.7688 16.1923 13.7638 16.1299 13.7638C15.3882 13.7638 14.942 14.4072 14.7733 14.986C14.6896 15.1815 14.2878 16.0722 13.6833 16.6762C12.7664 17.5926 12.5342 18.5377 12.9826 19.55C12.6774 19.5875 12.3665 19.6069 12.0511 19.6069C11.7713 19.6069 11.495 19.5917 11.223 19.562C11.6786 18.5452 11.4482 17.5962 10.5277 16.6762C9.92322 16.0722 9.52139 15.1815 9.43767 14.986C9.26894 14.4072 8.82275 13.7638 8.08106 13.7638C8.01866 13.7638 7.95538 13.7688 7.8932 13.7786C7.56834 13.8297 7.28436 14.0167 7.08149 14.2981C6.86253 14.0258 6.64987 13.8093 6.45744 13.6871C6.16737 13.5031 5.87752 13.4098 5.59572 13.4098C5.24368 13.4098 4.92905 13.5544 4.70965 13.8166L4.70412 13.8233C4.56745 13.2548 4.49506 12.6613 4.49506 12.0508C4.49506 7.87772 7.87802 4.49476 12.0511 4.49476ZM5.59572 14.2796C5.70662 14.2796 5.84208 14.3268 5.99146 14.4216C6.45526 14.7158 7.35025 16.2542 7.67793 16.8526C7.78774 17.053 7.97539 17.1378 8.14434 17.1378C8.47963 17.1378 8.74143 16.8045 8.175 16.3809C7.32328 15.7436 7.62205 14.7018 8.02866 14.6377C8.04649 14.6349 8.0641 14.6336 8.08106 14.6336C8.45071 14.6336 8.61379 15.2707 8.61379 15.2707C8.61379 15.2707 9.09173 16.4709 9.91278 17.2913C10.7338 18.112 10.7762 18.7706 10.1778 19.6482C9.76971 20.2466 8.98844 20.4273 8.18783 20.4273C7.35742 20.4273 6.50614 20.2329 6.02908 20.1092C6.0056 20.1031 3.10429 19.2835 3.47176 18.586C3.53352 18.4688 3.63528 18.4218 3.76335 18.4218C4.038 18.4218 4.43201 18.6387 4.80181 18.8423C5.12882 19.0224 5.43692 19.192 5.62681 19.192C5.71727 19.192 5.78098 19.1535 5.80707 19.0596C5.88544 18.7784 5.35099 18.5713 4.76671 18.3449C4.06546 18.0732 3.29243 17.7736 3.42088 17.2848C3.46241 17.1263 3.57505 17.0619 3.73334 17.0622C4.13901 17.0622 4.84392 17.4854 5.41743 17.8297C5.81072 18.0658 6.14222 18.2648 6.27305 18.2648C6.29762 18.2648 6.31523 18.2577 6.3248 18.2424C6.48592 17.9824 6.39764 17.8008 5.26195 17.1135C5.17294 17.0596 5.08601 17.0074 5.00159 16.9567C4.00899 16.3606 3.36466 15.9737 3.78249 15.5188C3.83467 15.4618 3.9086 15.4366 3.9984 15.4366C4.68791 15.4368 6.31697 16.9193 6.31697 16.9193C6.31697 16.9193 6.75664 17.3766 7.02256 17.3766C7.08367 17.3766 7.13563 17.3524 7.17086 17.2929C7.26579 17.1328 6.82107 16.6806 6.34216 16.1936C5.87006 15.7135 5.36473 15.1997 5.31044 14.8986C5.23629 14.4877 5.36241 14.2796 5.59572 14.2796ZM18.2195 14.4216C18.3689 14.3268 18.5044 14.2796 18.6153 14.2796C18.8486 14.2796 18.9747 14.4877 18.9006 14.8986C18.8463 15.1997 18.3409 15.7135 17.8688 16.1936C17.3899 16.6806 16.9452 17.1328 17.0401 17.2929C17.0754 17.3524 17.1273 17.3766 17.1884 17.3766C17.4544 17.3766 17.894 16.9193 17.894 16.9193C17.894 16.9193 19.5231 15.4368 20.2126 15.4366C20.3024 15.4366 20.3763 15.4618 20.4285 15.5188C20.8463 15.9737 20.202 16.3606 19.2094 16.9567C19.125 17.0074 19.038 17.0596 18.949 17.1135C17.8133 17.8008 17.7251 17.9824 17.8862 18.2424C17.8958 18.2577 17.9134 18.2648 17.9379 18.2648C18.0688 18.2648 18.4003 18.0658 18.7936 17.8297C19.3671 17.4854 20.072 17.0622 20.4776 17.0622C20.6359 17.0619 20.7486 17.1263 20.7901 17.2848C20.9186 17.7736 20.1455 18.0732 19.4443 18.3449C18.86 18.5713 18.3255 18.7784 18.4039 19.0596C18.43 19.1535 18.4937 19.192 18.5842 19.192C18.7741 19.192 19.0822 19.0224 19.4092 18.8423C19.779 18.6387 20.173 18.4218 20.4476 18.4218C20.5757 18.4218 20.6775 18.4688 20.7392 18.586C21.1067 19.2835 18.2054 20.1031 18.1819 20.1092C17.7048 20.2329 16.8536 20.4273 16.0232 20.4273C15.2225 20.4273 14.4413 20.2466 14.0331 19.6482C13.4348 18.7706 13.4772 18.112 14.2982 17.2913C15.1193 16.4709 15.5972 15.2707 15.5972 15.2707C15.5972 15.2707 15.7603 14.6336 16.1299 14.6336C16.1469 14.6336 16.1645 14.6349 16.1823 14.6377C16.5889 14.7018 16.8877 15.7436 16.036 16.3809C15.4696 16.8045 15.7314 17.1378 16.0667 17.1378C16.2356 17.1378 16.4233 17.053 16.5331 16.8526C16.8607 16.2542 17.7557 14.7158 18.2195 14.4216Z"
//                 ></path>
//               </svg>
//               <span>Hugging Face</span>
//             </li>
//           </ul>
//         </span>
//       </div>
//     </div>
//   );
// }



// export function SupabaseRealtimeCard() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const cursor1Ref = useRef<SVGSVGElement>(null);
//   const cursor2Ref = useRef<SVGSVGElement>(null);
//   const bubbleCenterRef = useRef<HTMLDivElement>(null);
//   const bubbleTopRef = useRef<HTMLDivElement>(null);
//   const bubbleBottomRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         repeat: -1,
//         defaults: { ease: "power2.inOut", duration: 1.5 },
//       });

//       // Initial States
//       gsap.set([cursor1Ref.current, cursor2Ref.current], { opacity: 0 });
//       gsap.set(cursor1Ref.current, { x: 100, y: 100 });
//       gsap.set(cursor2Ref.current, { x: -50, y: 50 });

//       tl.to(cursor1Ref.current, {
//         opacity: 1,
//         duration: 0.5,
//       })
//         // Cursor 1 moves to Top Bubble
//         .to(cursor1Ref.current, {
//           x: 20,
//           y: -100,
//           duration: 1.2,
//         })
//         // Activate Top Bubble
//         .to(
//           bubbleTopRef.current?.querySelectorAll(".dot"),
//           {
//             backgroundColor: "#3ECF8E",
//             boxShadow: "0 0 8px #3ECF8E",
//             stagger: 0.1,
//             duration: 0.3,
//           },
//           "-=0.4"
//         )
//         .to(
//           bubbleTopRef.current,
//           {
//             borderColor: "rgba(62, 207, 142, 0.4)",
//             duration: 0.3,
//           },
//           "<"
//         )
//         // Cursor 2 appears and moves to Bottom Bubble
//         .to(
//           cursor2Ref.current,
//           {
//             opacity: 1,
//             duration: 0.5,
//           },
//           "-=0.5"
//         )
//         .to(cursor2Ref.current, {
//           x: 40,
//           y: 60,
//           duration: 1.2,
//         })
//         // Activate Bottom Bubble
//         .to(
//           bubbleBottomRef.current?.querySelectorAll(".dot"),
//           {
//             backgroundColor: "#3ECF8E",
//             boxShadow: "0 0 8px #3ECF8E",
//             stagger: 0.1,
//             duration: 0.3,
//           },
//           "-=0.4"
//         )
//         .to(
//           bubbleBottomRef.current,
//           {
//             borderColor: "rgba(62, 207, 142, 0.4)",
//             duration: 0.3,
//           },
//           "<"
//         )
//         // Cursor 1 moves to Center
//         .to(cursor1Ref.current, {
//           x: -60,
//           y: -20,
//           duration: 1.2,
//         })
//         // Pulse Center Bubble
//         .to(
//           bubbleCenterRef.current,
//           {
//             scale: 1.05,
//             duration: 0.2,
//             yoyo: true,
//             repeat: 1,
//           },
//           "-=0.2"
//         )
//         // Wait then reset
//         .to({}, { duration: 1 })
//         .to(
//           [cursor1Ref.current, cursor2Ref.current],
//           {
//             opacity: 0,
//             duration: 0.5,
//           },
//           "<"
//         )
//         .to(
//           ".dot",
//           {
//             backgroundColor: "#555",
//             boxShadow: "none",
//             duration: 0.5,
//           },
//           "<"
//         )
//         .to(
//           [bubbleTopRef.current, bubbleBottomRef.current],
//           {
//             borderColor: "#555",
//             duration: 0.5,
//           },
//           "<"
//         );
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full max-w-[438px] h-[398px] bg-[#0E0E10] rounded-xl overflow-hidden border border-[#2E2E2E] font-sans group"
//     >
//       {/* Grid Background Pattern */}
//       <div
//         className="absolute inset-0 opacity-20 pointer-events-none"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, #333 1px, transparent 1px),
//             linear-gradient(to bottom, #333 1px, transparent 1px)
//           `,
//           backgroundSize: "40px 40px",
//         }}
//       />

//       {/* Interactive Graphic Layer */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//         {/* Center Chat Bubble */}
//         <div
//           ref={bubbleCenterRef}
//           className="relative z-10 w-[84px] h-[44px] border border-[#555] rounded-2xl flex items-center justify-center gap-1.5 bg-[#0E0E10]/80 backdrop-blur-sm shadow-lg transition-colors duration-300"
//         >
//           <div className="dot w-1.5 h-1.5 rounded-full bg-[#555]" />
//           <div className="dot w-1.5 h-1.5 rounded-full bg-[#555]" />
//           <div className="dot w-1.5 h-1.5 rounded-full bg-[#555]" />
//         </div>

//         {/* Top Right Chat Bubble (Hidden initially/Interactive) */}
//         <div
//           ref={bubbleTopRef}
//           className="absolute z-10 w-[70px] h-[36px] border border-[#555] rounded-2xl flex items-center justify-center gap-1.5 bg-[#0E0E10]/80 backdrop-blur-sm shadow-lg"
//           style={{ top: "35%", right: "20%" }}
//         >
//           <div className="dot w-1.25 h-1.25 rounded-full bg-[#555]" />
//           <div className="dot w-1.25 h-1.25 rounded-full bg-[#555]" />
//           <div className="dot w-1.25 h-1.25 rounded-full bg-[#555]" />
//         </div>

//         {/* Bottom Left Chat Bubble (Hidden initially/Interactive) */}
//         <div
//           ref={bubbleBottomRef}
//           className="absolute z-10 w-[70px] h-[36px] border border-[#555] rounded-2xl flex items-center justify-center gap-1.5 bg-[#0E0E10]/80 backdrop-blur-sm shadow-lg"
//           style={{ bottom: "30%", left: "25%" }}
//         >
//           <div className="dot w-1.25 h-1.25 rounded-full bg-[#555]" />
//           <div className="dot w-1.25 h-1.25 rounded-full bg-[#555]" />
//           <div className="dot w-1.25 h-1.25 rounded-full bg-[#555]" />
//         </div>

//         {/* Cursor 1 (Filled - Active) */}
//         <svg
//           ref={cursor1Ref}
//           className="absolute z-20 w-6 h-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="1.5"
//           style={{ transform: "rotate(-10deg)" }}
//         >
//           <path
//             d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
//             fill="white"
//             stroke="white"
//           />
//         </svg>

//         {/* Cursor 2 (Outline - Secondary) */}
//         <svg
//           ref={cursor2Ref}
//           className="absolute z-20 w-6 h-6 text-white/60 drop-shadow-md"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="1.5"
//           style={{ transform: "rotate(-15deg)" }}
//         >
//           <path
//             d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
//             fill="transparent"
//             stroke="currentColor"
//           />
//         </svg>
//       </div>

//       {/* Content Layer */}
//       <div className="relative z-30 p-8 flex flex-col h-full pointer-events-none">
//         {/* Header */}
//         <div className="flex items-center gap-3 mb-6">
//           <div className="relative">
//             <svg
//               className="w-6 h-6 text-white"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M12 19l7-7 3 3-7 7-3-3z" />
//               <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
//               <path d="M2 2l7.586 7.586" />
//               <circle cx="11" cy="11" r="2" />
//             </svg>
//             <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#3ECF8E] rounded-full animate-pulse shadow-[0_0_8px_#3ECF8E]" />
//           </div>
//           <h2 className="text-xl font-semibold text-white tracking-tight">
//             Realtime
//           </h2>
//         </div>

//         {/* Text Body */}
//         <div className="mt-auto max-w-[280px]">
//           <h3 className="text-[19px] font-medium text-white leading-tight">
//             Build multiplayer experiences
//           </h3>
//           <p className="text-[16px] text-[#888] leading-snug mt-1.5 font-normal">
//             with real-time data synchronization.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


// export function DashboardSection() {
//   return (
//     <div className="relative min-h-screen w-full bg-[#0f0f0f] text-[#fafafa] font-sans selection:bg-white/20">
//       <div className="container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 text-center">
        
//         {/* Headline */}
//         <h3 className="mb-8 text-2xl md:text-4xl max-w-[300px] sm:max-w-none mx-auto font-medium tracking-tight">
//           <span className="text-white">Stay productive and manage your app</span>
//           <br className="hidden sm:block" />
//           <span className="text-[#9ca3af]"> without leaving the dashboard</span>
//         </h3>

//         {/* Tabs */}
//         <div className="relative flex flex-col gap-8 lg:gap-12 items-center">
//           <div className="relative w-full col-span-full flex justify-center gap-2" role="tablist">
//             <button 
//               aria-selected="true" 
//               role="tab" 
//               className="py-1.5 px-3 lg:py-2 lg:px-8 border border-white rounded-full bg-transparent text-sm transition-all hover:border-[#9ca3af] hover:text-white text-white font-medium"
//             >
//               Table Editor
//             </button>
//             <button 
//               aria-selected="false" 
//               role="tab" 
//               className="py-1.5 px-3 lg:py-2 lg:px-8 border border-[#333] rounded-full bg-transparent text-sm transition-all hover:border-[#666] hover:text-white text-[#9ca3af] font-medium opacity-80"
//             >
//               SQL Editor
//             </button>
//             <button 
//               aria-selected="false" 
//               role="tab" 
//               className="py-1.5 px-3 lg:py-2 lg:px-8 border border-[#333] rounded-full bg-transparent text-sm transition-all hover:border-[#666] hover:text-white text-[#9ca3af] font-medium opacity-80"
//             >
//               RLS Policies
//             </button>
//           </div>

//           {/* Feature List */}
//           <ul className="w-full flex flex-wrap items-center gap-x-8 gap-y-4 lg:gap-8 justify-center text-center mx-auto z-30">
//             {[
//               "Full CRUD",
//               "Materialized Views",
//               "Foreign Tables",
//               "Partitioned Tables",
//               "Easy as a spreadsheet"
//             ].map((item) => (
//               <li key={item}>
//                 <a className="group cursor-pointer flex items-center gap-2 text-sm whitespace-nowrap text-[#9ca3af] hover:text-white transition-colors" href="#">
//                   <Check className="w-4 h-4 stroke-[2px]" />
//                   <span>{item}</span>
//                 </a>
//               </li>
//             ))}
//           </ul>

//           {/* Dashboard Image/Video Placeholder */}
//           <div className="relative rounded-2xl shadow-2xl p-2 h-full border border-[#2e2e2e] flex flex-col overflow-hidden bg-[#111] w-full max-w-6xl mx-auto mt-8 lg:mt-12">
//             {/* Window Header */}
//             <div className="w-full px-4 pt-3 pb-2 relative flex items-center gap-2 border-b border-[#222] bg-[#111] rounded-t-xl">
//               <div className="flex gap-1.5">
//                 <div className="w-3 h-3 rounded-full bg-[#333]"></div>
//                 <div className="w-3 h-3 rounded-full bg-[#333]"></div>
//                 <div className="w-3 h-3 rounded-full bg-[#333]"></div>
//               </div>
//             </div>

//             {/* Content Area */}
//             <div className="h-full w-full aspect-[16/9] md:aspect-[21/9] relative overflow-hidden rounded-b-xl bg-[#111]">
//               <img 
//                 alt="Supabase dashboard table editor" 
//                 loading="lazy" 
//                 className="w-full h-full object-cover opacity-90"
//                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
//                 // Note: Using a generic data table image as a placeholder for the specific Supabase screenshot to ensure reliability without external video dependencies.
//                 // In a real scenario, you would use the specific Supabase asset.
//                 style={{ objectPosition: 'center 30%' }}
//               />
              
//               {/* Overlay to simulate the specific UI look if the image isn't perfect */}
//               <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-60 pointer-events-none" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function SupabaseFooter() {
//   return (
//     <footer className="bg-[#0e0e0e] text-white font-sans">
//       <div className="container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20">
//         <div className="xl:grid xl:grid-cols-7 xl:gap-4">
//           {/* Left Column: Logo & Socials */}
//           <div className="space-y-8 xl:col-span-2">
//             <a className="w-40 block" href="/">
//               <img
//                 alt="Supabase Logo"
//                 width="160"
//                 height="30"
//                 decoding="async"
//                 className="hidden dark:block"
//                 style={{ color: "transparent" }}
//                 src="https://frontend-assets.supabase.com/www/614b2071e9fa/_next/static/media/supabase-logo-wordmark--dark.b36ebb5f.png"
//                 srcSet="https://frontend-assets.supabase.com/www/614b2071e9fa/_next/static/media/supabase-logo-wordmark--dark.b36ebb5f.png 1x, https://frontend-assets.supabase.com/www/614b2071e9fa/_next/static/media/supabase-logo-wordmark--dark.b36ebb5f.png 2x"
//               />
//               {/* Fallback for light mode if needed, though screenshot is dark */}
//               <img
//                 alt="Supabase Logo"
//                 width="160"
//                 height="30"
//                 decoding="async"
//                 className="dark:hidden"
//                 style={{ color: "transparent" }}
//                 src="https://frontend-assets.supabase.com/www/614b2071e9fa/_next/static/media/supabase-logo-wordmark--light.daaeffd3.png"
//                 srcSet="https://frontend-assets.supabase.com/www/614b2071e9fa/_next/static/media/supabase-logo-wordmark--light.daaeffd3.png 1x, https://frontend-assets.supabase.com/www/614b2071e9fa/_next/static/media/supabase-logo-wordmark--light.daaeffd3.png 2x"
//               />
//             </a>
            
//             <div className="flex space-x-5">
//               {/* Twitter / X */}
//               <a
//                 href="https://twitter.com/supabase"
//                 className="text-zinc-400 hover:text-white transition-colors"
//                 aria-label="Twitter"
//               >
//                 <div className="relative" style={{ width: "22px", height: "22px" }}>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 16 16"
//                     fill="none"
//                     stroke="none"
//                     className="sbui-icon"
//                     width="100%"
//                     height="100%"
//                   >
//                     <path
//                       fill="currentColor"
//                       d="M12.6009 0.903908H15.0544L9.69434 7.03008L16 15.3664H11.0627L7.19566 10.3105L2.77087 15.3664H0.31595L6.04904 8.81379L0 0.903908H5.06262L8.55811 5.52524L12.6009 0.903908ZM11.7399 13.8979H13.0993L4.32392 2.29528H2.86506L11.7399 13.8979Z"
//                     ></path>
//                   </svg>
//                 </div>
//               </a>

//               {/* GitHub */}
//               <a
//                 href="https://github.com/supabase"
//                 className="text-zinc-400 hover:text-white transition-colors"
//                 aria-label="GitHub"
//               >
//                 <div className="relative" style={{ width: "22px", height: "22px" }}>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 16 16"
//                     fill="none"
//                     stroke="none"
//                     className="sbui-icon"
//                     width="100%"
//                     height="100%"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       clipRule="evenodd"
//                       fill="currentColor"
//                       d="M8 0C3.5816 0 0 3.58719 0 8.01357C0 11.5535 2.292 14.5575 5.4712 15.6167C5.8712 15.6903 6.0168 15.4431 6.0168 15.2303C6.0168 15.0407 6.0104 14.5359 6.0064 13.8679C3.7808 14.3519 3.3112 12.7935 3.3112 12.7935C2.948 11.8671 2.4232 11.6207 2.4232 11.6207C1.6968 11.1247 2.4784 11.1343 2.4784 11.1343C3.2808 11.1903 3.7032 11.9599 3.7032 11.9599C4.4168 13.1839 5.576 12.8303 6.0312 12.6255C6.1048 12.1079 6.3112 11.7551 6.54 11.5551C4.764 11.3527 2.896 10.6647 2.896 7.59438C2.896 6.71998 3.208 6.00398 3.7192 5.44398C3.6368 5.24158 3.3624 4.42639 3.7976 3.32399C3.7976 3.32399 4.4696 3.10799 5.9976 4.14479C6.65022 3.9668 7.32355 3.87614 8 3.87519C8.68 3.87839 9.364 3.96719 10.0032 4.14479C11.5304 3.10799 12.2008 3.32319 12.2008 3.32319C12.6376 4.42639 12.3624 5.24158 12.2808 5.44398C12.7928 6.00398 13.1032 6.71998 13.1032 7.59438C13.1032 10.6727 11.232 11.3503 9.4504 11.5487C9.73762 11.7959 9.99282 12.2847 9.99282 13.0327C9.99282 14.1031 9.98322 14.9679 9.98322 15.2303C9.98322 15.4447 10.1272 15.6943 10.5336 15.6159C12.1266 15.0816 13.5115 14.0602 14.4924 12.696C15.4733 11.3318 16.0007 9.69382 16 8.01357C16 3.58719 12.4176 0 8 0Z"
//                     ></path>
//                   </svg>
//                 </div>
//               </a>

//               {/* Discord */}
//               <a
//                 href="https://discord.supabase.com/"
//                 className="text-zinc-400 hover:text-white transition-colors"
//                 aria-label="Discord"
//               >
//                 <div className="relative" style={{ width: "22px", height: "22px" }}>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 16 16"
//                     fill="none"
//                     stroke="none"
//                     className="sbui-icon"
//                     width="100%"
//                     height="100%"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       clipRule="evenodd"
//                       fill="currentColor"
//                       d="M13.5447 3.01094C12.5249 2.54302 11.4313 2.19828 10.2879 2.00083C10.2671 1.99702 10.2463 2.00654 10.2356 2.02559C10.0949 2.27573 9.93921 2.60206 9.83011 2.85856C8.60028 2.67444 7.3768 2.67444 6.17222 2.85856C6.06311 2.59636 5.90166 2.27573 5.76038 2.02559C5.74966 2.00717 5.72887 1.99765 5.70803 2.00083C4.56527 2.19764 3.47171 2.54239 2.45129 3.01094C2.44246 3.01475 2.43488 3.0211 2.42986 3.02935C0.355594 6.12826 -0.212633 9.151 0.06612 12.1362C0.067381 12.1508 0.0755799 12.1648 0.0869319 12.1737C1.45547 13.1787 2.78114 13.7889 4.08219 14.1933C4.10301 14.1996 4.12507 14.192 4.13832 14.1749C4.44608 13.7546 4.72043 13.3114 4.95565 12.8454C4.96953 12.8181 4.95628 12.7857 4.92791 12.7749C4.49275 12.6099 4.0784 12.4086 3.67982 12.18C3.64829 12.1616 3.64577 12.1165 3.67477 12.095C3.75865 12.0321 3.84255 11.9667 3.92264 11.9007C3.93713 11.8886 3.95732 11.8861 3.97435 11.8937C6.59287 13.0892 9.42771 13.0892 12.0153 11.8937C12.0323 11.8854 12.0525 11.888 12.0677 11.9C12.1478 11.9661 12.2316 12.0321 12.3161 12.095C12.3451 12.1165 12.3433 12.1616 12.3117 12.18C11.9131 12.413 11.4988 12.6099 11.063 12.7743C11.0346 12.7851 11.022 12.8181 11.0359 12.8454C11.2762 13.3108 11.5505 13.7539 11.8526 14.1742C11.8652 14.192 11.8879 14.1996 11.9087 14.1933C13.2161 13.7889 14.5417 13.1787 15.9103 12.1737C15.9223 12.1648 15.9298 12.1515 15.9311 12.1369C16.2647 8.6856 15.3723 5.68765 13.5655 3.02998C13.5611 3.0211 13.5535 3.01475 13.5447 3.01094ZM5.34668 10.3185C4.55833 10.3185 3.90876 9.59478 3.90876 8.70593C3.90876 7.81707 4.54574 7.09331 5.34668 7.09331C6.15393 7.09331 6.79722 7.82342 6.7846 8.70593C6.7846 9.59478 6.14762 10.3185 5.34668 10.3185ZM10.6632 10.3185C9.87481 10.3185 9.22527 9.59478 9.22527 8.70593C9.22527 7.81707 9.86221 7.09331 10.6632 7.09331C11.4704 7.09331 12.1137 7.82342 12.1011 8.70593C12.1011 9.59478 11.4704 10.3185 10.6632 10.3185Z"
//                     ></path>
//                   </svg>
//                 </div>
//               </a>

//               {/* Youtube */}
//               <a
//                 href="https://youtube.com/c/supabase"
//                 className="text-zinc-400 hover:text-white transition-colors"
//                 aria-label="Youtube"
//               >
//                 <div className="relative" style={{ width: "22px", height: "22px" }}>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 16 16"
//                     fill="none"
//                     stroke="none"
//                     className="sbui-icon"
//                     width="100%"
//                     height="100%"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       clipRule="evenodd"
//                       fill="currentColor"
//                       d="M15.6657 4.13526C15.4817 3.44239 14.9395 2.8967 14.2511 2.71152C13.0033 2.37502 8 2.37502 8 2.37502C8 2.37502 2.99669 2.37502 1.74891 2.71152C1.06052 2.89673 0.518351 3.44239 0.334337 4.13526C1.90735e-06 5.39112 1.90735e-06 8.01137 1.90735e-06 8.01137C1.90735e-06 8.01137 1.90735e-06 10.6316 0.334337 11.8875C0.518351 12.5804 1.06052 13.1033 1.74891 13.2885C2.99669 13.625 8 13.625 8 13.625C8 13.625 13.0033 13.625 14.2511 13.2885C14.9395 13.1033 15.4817 12.5804 15.6657 11.8875C16 10.6316 16 8.01137 16 8.01137C16 8.01137 16 5.39112 15.6657 4.13526ZM6.36363 10.3904V5.63238L10.5454 8.01143L6.36363 10.3904Z"
//                     ></path>
//                   </svg>
//                 </div>
//               </a>
//             </div>
//           </div>

//           {/* Right Grid: Links */}
//           <div className="mt-12 grid grid-cols-1 gap-8 xl:col-span-5 xl:mt-0">
//             <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
//               {/* Product */}
//               <div>
//                 <h6 className="text-white text-base font-medium">Product</h6>
//                 <ul className="mt-4 space-y-2">
//                   {[
//                     { name: "Database", href: "/database" },
//                     { name: "Auth", href: "/auth" },
//                     { name: "Functions", href: "/edge-functions" },
//                     { name: "Realtime", href: "/realtime" },
//                     { name: "Storage", href: "/storage" },
//                     { name: "Vector", href: "/modules/vector" },
//                     { name: "Cron", href: "/modules/cron" },
//                     { name: "Pricing", href: "/pricing" },
//                     { name: "Launch Week", href: "/launch-week" },
//                   ].map((item) => (
//                     <li key={item.name}>
//                       <a href={item.href}>
//                         <div className="text-sm text-zinc-400 hover:text-white transition-colors">
//                           {item.name}
//                         </div>
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Solutions */}
//               <div>
//                 <h6 className="text-white text-base font-medium">Solutions</h6>
//                 <ul className="mt-4 space-y-2">
//                   {[
//                     { name: "AI Builders", href: "/solutions/ai-builders" },
//                     { name: "No Code", href: "/solutions/no-code" },
//                     { name: "Beginners", href: "/solutions/beginners" },
//                     { name: "Developers", href: "/solutions/developers" },
//                     { name: "Postgres Devs", href: "/solutions/postgres-developers" },
//                     { name: "Vibe Coders", href: "/solutions/vibe-coders" },
//                     { name: "Hackathon Contestants", href: "/solutions/hackathon" },
//                     { name: "Startups", href: "/solutions/startups" },
//                     { name: "Agencies", href: "/solutions/agencies" },
//                     { name: "Enterprise", href: "/solutions/enterprise" },
//                     { name: "Innovation Teams", href: "/solutions/innovation-teams" },
//                   ].map((item) => (
//                     <li key={item.name}>
//                       <a href={item.href}>
//                         <div className="text-sm text-zinc-400 hover:text-white transition-colors">
//                           {item.name}
//                         </div>
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Resources */}
//               <div>
//                 <h6 className="text-white text-base font-medium">Resources</h6>
//                 <ul className="mt-4 space-y-2">
//                   {[
//                     { name: "Blog", href: "/blog" },
//                     { name: "Support", href: "/support" },
//                     { name: "System Status", href: "https://status.supabase.com/" },
//                     { name: "Become a Partner", href: "/partners" },
//                     { name: "Integrations", href: "/partners/integrations" },
//                     { name: "Brand Assets", href: "/brand-assets" },
//                     { name: "Security & Compliance", href: "/security" },
//                     { name: "DPA", href: "/legal/dpa" },
//                     { name: "SOC2", href: "/security" },
//                     { name: "HIPAA", href: "https://forms.supabase.com/hipaa2" },
//                   ].map((item) => (
//                     <li key={item.name}>
//                       <a href={item.href}>
//                         <div className="text-sm text-zinc-400 hover:text-white transition-colors">
//                           {item.name}
//                         </div>
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Developers */}
//               <div>
//                 <h6 className="text-white text-base font-medium">Developers</h6>
//                 <ul className="mt-4 space-y-2">
//                   {[
//                     { name: "Documentation", href: "/docs" },
//                     { name: "Supabase UI", href: "https://supabase.com/ui" },
//                     { name: "Changelog", href: "/changelog" },
//                     { name: "Careers", href: "/careers" },
//                     { name: "Contributing", href: "https://github.com/supabase/supabase/blob/master/CONTRIBUTING.md" },
//                     { name: "Open Source", href: "/open-source" },
//                     { name: "SupaSquad", href: "/supasquad" },
//                     { name: "DevTo", href: "https://dev.to/supabase" },
//                     { name: "RSS", href: "/rss.xml" },
//                   ].map((item) => (
//                     <li key={item.name}>
//                       <a href={item.href}>
//                         <div className="text-sm text-zinc-400 hover:text-white transition-colors">
//                           {item.name}
//                         </div>
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Company */}
//               <div>
//                 <h6 className="text-white text-base font-medium">Company</h6>
//                 <ul className="mt-4 space-y-2">
//                   {[
//                     { name: "Company", href: "/company" },
//                     { name: "General Availability", href: "/ga" },
//                     { name: "Terms of Service", href: "/terms" },
//                     { name: "Privacy Policy", href: "/privacy" },
//                     { name: "Privacy Settings", href: "#", isButton: true },
//                     { name: "Acceptable Use Policy", href: "/aup" },
//                     { name: "Support Policy", href: "/support-policy" },
//                     { name: "Service Level Agreement", href: "/sla" },
//                     { name: "Humans.txt", href: "/humans.txt" },
//                     { name: "Lawyers.txt", href: "/lawyers.txt" },
//                     { name: "Security.txt", href: "/.well-known/security.txt" },
//                     { name: "Contact Us", href: "/contact-us" },
//                   ].map((item) => (
//                     <li key={item.name}>
//                       {item.isButton ? (
//                         <button>
//                           <div className="text-sm text-zinc-400 hover:text-white transition-colors">
//                             {item.name}
//                           </div>
//                         </button>
//                       ) : (
//                         <a href={item.href}>
//                           <div className="text-sm text-zinc-400 hover:text-white transition-colors">
//                             {item.name}
//                           </div>
//                         </a>
//                       )}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-zinc-800 mt-32 flex justify-between pt-8">
//           <small className="text-sm text-zinc-400">© Supabase Inc</small>
//           <div className="">
//             <button
//               id="user-settings-dropdown"
//               className="flex items-center justify-center h-7 w-7 text-zinc-400 hover:text-white transition-colors"
//               type="button"
//               aria-haspopup="menu"
//               aria-expanded="false"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-moon h-[20px] w-[20px] rotate-90 transition-all dark:rotate-0"
//               >
//                 <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
//               </svg>
//               <span className="sr-only">Toggle theme</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export function AutoJoinComponentNee() {
//   return (
//     <div className="group isolate flex flex-col rounded-2xl bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden order-first xl:order-none w-[476px]">
//       {/* Content Section (Visually Bottom) */}
//       <div className="relative z-10 flex-none px-6 order-last pb-6 pt-0">
//         <h3 className="text-sm font-medium text-gray-950">Auto-join</h3>
//         <p className="mt-2 text-pretty text-sm/5 text-gray-600">
//           Let your users discover and join organizations based on their email domain.
//         </p>
//       </div>

//       {/* Visual Section (Visually Top) */}
//       <div
//         className="pointer-events-none relative flex-auto select-none"
//         style={{ minHeight: "10.25rem" }}
//         aria-hidden="true"
//       >
//         <div className="relative flex h-full flex-col items-center justify-center">
//           {/* Background Concentric Circles */}
//           <div className="absolute -z-10 mt-[-6.75rem] blur-[1px]">
//             <div className="absolute left-1/2 top-1/2 ml-[-6.75rem] mt-[-6.75rem] size-[13.5rem] rounded-full border border-gray-400 opacity-15" />
//             <div className="absolute left-1/2 top-1/2 ml-[-8.75rem] mt-[-8.75rem] size-[17.5rem] rounded-full border border-gray-400 opacity-[0.125]" />
//             <div className="absolute left-1/2 top-1/2 ml-[-10.75rem] mt-[-10.75rem] size-[21.5rem] rounded-full border border-gray-400 opacity-10" />
//             <div className="absolute left-1/2 top-1/2 ml-[-12.75rem] mt-[-12.75rem] size-[25.5rem] rounded-full border border-gray-400 opacity-[0.075]" />
//           </div>

//           {/* Avatars */}
//           <div className="flex gap-4">
//             <div className="transition duration-1000 opacity-100">
//               <div className="size-10 rounded-full border-2 border-white bg-gray-50 shadow-[0_2px_3px_rgba(0,0,0,0.04),0_24px_68px_rgba(47,48,55,0.05),0_4px_6px_rgba(34,42,53,0.04),0_1px_1px_rgba(0,0,0,0.05)] ring-1 ring-gray-950/5 overflow-hidden">
//                 <img
//                   alt=""
//                   loading="lazy"
//                   width="36"
//                   height="36"
//                   decoding="async"
//                   className="rounded-full object-cover"
//                   src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80"
//                 />
//               </div>
//             </div>
//             <div className="transition duration-1000 opacity-25">
//               <div className="size-10 rounded-full border-2 border-white bg-gray-50 shadow-[0_2px_3px_rgba(0,0,0,0.04),0_24px_68px_rgba(47,48,55,0.05),0_4px_6px_rgba(34,42,53,0.04),0_1px_1px_rgba(0,0,0,0.05)] ring-1 ring-gray-950/5 overflow-hidden">
//                 <img
//                   alt=""
//                   loading="lazy"
//                   width="36"
//                   height="36"
//                   decoding="async"
//                   className="rounded-full object-cover"
//                   src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&q=80"
//                 />
//               </div>
//             </div>
//             <div className="transition duration-1000 opacity-25">
//               <div className="size-10 rounded-full border-2 border-white bg-gray-50 shadow-[0_2px_3px_rgba(0,0,0,0.04),0_24px_68px_rgba(47,48,55,0.05),0_4px_6px_rgba(34,42,53,0.04),0_1px_1px_rgba(0,0,0,0.05)] ring-1 ring-gray-950/5 overflow-hidden">
//                 <img
//                   alt=""
//                   loading="lazy"
//                   width="36"
//                   height="36"
//                   decoding="async"
//                   className="rounded-full object-cover"
//                   src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=64&q=80"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Connector Lines */}
//           <div className="relative aspect-[128/55] w-32">
//             <svg
//               viewBox="0 0 128 55"
//               fill="none"
//               aria-hidden="true"
//               className="absolute inset-0 size-full stroke-gray-950/10"
//             >
//               <path d="M64 0v25M8 0v8c0 8.837 7.163 16 16 16h24c8.837 0 16 7.163 16 16v15M120 0v8c0 8.837-7.163 16-16 16H80c-5.922 0-11.093 3.218-13.86 8" />
//             </svg>
//             {/* Canvas placeholder for animation if needed, kept empty for static replica */}
//             <canvas
//               className="absolute inset-0 h-full w-full"
//               aria-hidden="true"
//               width="256"
//               height="110"
//             />
//           </div>

//           {/* Badge */}
//           <div className="relative mt-px flex items-center gap-1.5 rounded-lg bg-white py-1 pl-1.5 pr-2 text-[11px] font-medium text-gray-950 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] ring-1 ring-gray-950/5">
//             <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-4">
//               <g
//                 stroke="#9394A1"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="1.2"
//               >
//                 <circle cx="8" cy="8" r="6.25"></circle>
//                 <path d="M8 5v6m3-3H5"></path>
//               </g>
//             </svg>
//             Auto-join
//             <div
//               className="absolute -bottom-1.5 left-1/2 -z-10 -ml-10 h-6 w-20 transform-gpu rounded-[50%] bg-gradient-to-r from-purple-500 from-25% to-sky-300 to-75% blur-sm"
//               style={{ opacity: 0.25 }}
//             ></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function AutoJoinCard() {
//   return (
//     <div className="group isolate flex w-[476px] flex-col rounded-2xl bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden">
//       <div className="relative z-10 flex-none px-6 pb-6 order-last">
//         <h3 className="text-sm font-medium text-gray-950">Auto-join</h3>
//         <p className="mt-2 text-pretty text-sm leading-5 text-gray-600">
//           Let your users discover and join organizations based on their email domain.
//         </p>
//       </div>

//       <div
//         className="pointer-events-none relative flex-auto select-none"
//         style={{ minHeight: "10.25rem" }}
//         aria-hidden="true"
//       >
//         <div className="relative flex h-full flex-col items-center justify-center">
//           <div className="absolute -z-10 mt-[-6.75rem] blur-[1px]">
//             <div
//               className="absolute left-1/2 top-1/2 ml-[-6.75rem] mt-[-6.75rem] size-[13.5rem] rounded-full border border-gray-400 opacity-15"
//               style={{ transform: "scale(1)" }}
//             ></div>
//             <div
//               className="absolute left-1/2 top-1/2 ml-[-8.75rem] mt-[-8.75rem] size-[17.5rem] rounded-full border border-gray-400 opacity-12.5"
//               style={{ transform: "scale(1)" }}
//             ></div>
//             <div
//               className="absolute left-1/2 top-1/2 ml-[-10.75rem] mt-[-10.75rem] size-[21.5rem] rounded-full border border-gray-400 opacity-10"
//               style={{ transform: "scale(1)" }}
//             ></div>
//             <div
//               className="absolute left-1/2 top-1/2 ml-[-12.75rem] mt-[-12.75rem] size-[25.5rem] rounded-full border border-gray-400 opacity-7.5"
//               style={{ transform: "scale(1)" }}
//             ></div>
//           </div>


//           <div className="flex gap-4">
//             <div className="transition duration-1000 opacity-100">
//               <div className="size-10 rounded-full border-2 border-white bg-gray-50 shadow-[0_2px_3px_rgba(0,0,0,0.04),0_24px_68px_rgba(47,48,55,0.05),0_4px_6px_rgba(34,42,53,0.04),0_1px_1px_rgba(0,0,0,0.05)] ring-1 ring-gray-950/5 overflow-hidden">
//                 <Image
//                   alt=""
//                   src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64&q=80"
//                   width={36}
//                   height={36}
//                   className="rounded-full object-cover"
//                 />
//               </div>
//             </div>
//             <div className="transition duration-1000 opacity-25">
//               <div className="size-10 rounded-full border-2 border-white bg-gray-50 shadow-[0_2px_3px_rgba(0,0,0,0.04),0_24px_68px_rgba(47,48,55,0.05),0_4px_6px_rgba(34,42,53,0.04),0_1px_1px_rgba(0,0,0,0.05)] ring-1 ring-gray-950/5 overflow-hidden">
//                 <Image
//                   alt=""
//                   src="https//images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64&q=80"
//                   width={36}
//                   height={36}
//                   className="rounded-full object-cover"
//                 />
//               </div>
//             </div>
//             <div className="transition duration-1000 opacity-25">
//               <div className="size-10 rounded-full border-2 border-white bg-gray-50 shadow-[0_2px_3px_rgba(0,0,0,0.04),0_24px_68px_rgba(47,48,55,0.05),0_4px_6px_rgba(34,42,53,0.04),0_1px_1px_rgba(0,0,0,0.05)] ring-1 ring-gray-950/5 overflow-hidden">
//                 <Image
//                   alt=""
//                   src="https//images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=64&h=64&q=80"
//                   width={36}
//                   height={36}
//                   className="rounded-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="relative aspect-[128/55] w-32">
//             <svg
//               viewBox="0 0 128 55"
//               fill="none"
//               aria-hidden="true"
//               className="absolute inset-0 size-full stroke-gray-950/10"
//             >
//               <path d="M64 0v25M8 0v8c0 8.837 7.163 16 16 16h24c8.837 0 16 7.163 16 16v15M120 0v8c0 8.837-7.163 16-16 16H80c-5.922 0-11.093 3.218-13.86 8"></path>
//             </svg>
//           </div>


//           <div className="relative mt-px flex items-center gap-1.5 rounded-lg bg-white py-1 pl-1.5 pr-2 text-[10px] font-medium text-gray-950 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] ring-1 ring-gray-950/5">
//             <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-4">
//               <g stroke="#9394A1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2">
//                 <circle cx="8" cy="8" r="6.25"></circle>
//                 <path d="M8 5v6m3-3H5"></path>
//               </g>
//             </svg>
//             Auto-join
//             <div
//               className="absolute -bottom-1.5 left-1/2 -z-10 -ml-10 h-6 w-20 transform-gpu rounded-[50%] bg-gradient-to-r from-purple-500 from-25% to-sky-300 to-75% blur-sm"
//               style={{ opacity: 0.25 }}
//             ></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// export function AvatarsComponent() {
//   return (
//     <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between px-4 py-20 md:flex-row md:px-8 font-sans">
//       <div className="flex flex-col">
//         <h2 className="mx-auto max-w-xl text-center text-xl font-bold tracking-tight text-black md:mx-0 md:text-left md:text-3xl dark:text-white">
//           Get access to all <br />
//           Component Blocks and templates
//         </h2>
//         <p className="mx-auto mt-8 max-w-md text-center text-sm text-neutral-600 md:mx-0 md:text-left md:text-base dark:text-neutral-400">
//           Upgrade to Pro today and unlock our entire library of premium
//           components and templates. Build beautiful websites faster with
//           copy-paste simplicity.
//         </p>
//         <div className="mt-10 mb-10 flex flex-col items-center md:items-start">
//           <div className="mb-2 flex flex-col sm:flex-row items-center justify-start lg:justify-start">
//             <div className="mb-4 flex flex-row items-center sm:mb-0">
//               {/* Avatar 1 */}
//               <div className="group relative -mr-4">
//                 <div
//                   className="animation-container"
//                   style={{ transform: "none", opacity: 1 }}
//                 >
//                   <div
//                     className="relative overflow-hidden rounded-2xl border-2 border-neutral-200 bg-white"
//                     style={{
//                       opacity: 1,
//                       transform: "rotate(-2.75974deg)",
//                       zIndex: "auto",
//                     }}
//                   >
//                     <img
//                       height="100"
//                       width="100"
//                       src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100"
//                       alt="John Shahawy"
//                       className="h-14 w-14 object-cover object-top"
//                     />
//                   </div>
//                 </div>
//               </div>
//               {/* Avatar 2 */}
//               <div className="group relative -mr-4">
//                 <div
//                   className="animation-container"
//                   style={{ transform: "none", opacity: 1 }}
//                 >
//                   <div
//                     className="relative overflow-hidden rounded-2xl border-2 border-neutral-200 bg-white"
//                     style={{
//                       opacity: 1,
//                       transform: "rotate(4.44261deg)",
//                       zIndex: "auto",
//                     }}
//                   >
//                     <img
//                       height="100"
//                       width="100"
//                       src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=100&h=100"
//                       alt="Henrik Söderlund"
//                       className="h-14 w-14 object-cover object-top"
//                     />
//                   </div>
//                 </div>
//               </div>
//               {/* Avatar 3 */}
//               <div className="group relative -mr-4">
//                 <div
//                   className="animation-container"
//                   style={{ transform: "none", opacity: 1 }}
//                 >
//                   <div
//                     className="relative overflow-hidden rounded-2xl border-2 border-neutral-200 bg-white"
//                     style={{
//                       opacity: 1,
//                       transform: "rotate(-0.51773deg)",
//                       zIndex: "auto",
//                     }}
//                   >
//                     <img
//                       height="100"
//                       width="100"
//                       src="https://images.unsplash.com/photo-1560250097-0b93528c311a?fit=crop&w=100&h=100"
//                       alt="John Ferry"
//                       className="h-14 w-14 object-cover object-top"
//                     />
//                   </div>
//                 </div>
//               </div>
//               {/* Avatar 4 */}
//               <div className="group relative -mr-4">
//                 <div
//                   className="animation-container"
//                   style={{ transform: "none", opacity: 1 }}
//                 >
//                   <div
//                     className="relative overflow-hidden rounded-2xl border-2 border-neutral-200 bg-white"
//                     style={{
//                       opacity: 1,
//                       transform: "rotate(-1.8366deg)",
//                       zIndex: "auto",
//                     }}
//                   >
//                     <img
//                       height="100"
//                       width="100"
//                       src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fit=crop&w=100&h=100"
//                       alt="Meru Gokhale"
//                       className="h-14 w-14 object-cover object-top"
//                     />
//                   </div>
//                 </div>
//               </div>
//               {/* Avatar 5 */}
//               <div className="group relative -mr-4">
//                 <div
//                   className="animation-container"
//                   style={{ transform: "none", opacity: 1 }}
//                 >
//                   <div
//                     className="relative overflow-hidden rounded-2xl border-2 border-neutral-200 bg-white"
//                     style={{
//                       opacity: 1,
//                       transform: "rotate(-2.31385deg)",
//                       zIndex: "auto",
//                     }}
//                   >
//                     <img
//                       height="100"
//                       width="100"
//                       src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=100&h=100"
//                       alt="Georg Weingartner"
//                       className="h-14 w-14 object-cover object-top"
//                     />
//                   </div>
//                 </div>
//               </div>
//               {/* Avatar 6 */}
//               <div className="group relative -mr-4">
//                 <div
//                   className="animation-container"
//                   style={{ transform: "none", opacity: 1 }}
//                 >
//                   <div
//                     className="relative overflow-hidden rounded-2xl border-2 border-neutral-200 bg-white"
//                     style={{
//                       opacity: 1,
//                       transform: "rotate(8.51707deg)",
//                       zIndex: "auto",
//                     }}
//                   >
//                     <img
//                       height="100"
//                       width="100"
//                       src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=100&h=100"
//                       alt="Jonathan Barshop"
//                       className="h-14 w-14 object-cover object-top"
//                     />
//                   </div>
//                 </div>
//               </div>
//               {/* Avatar 7 */}
//               <div className="group relative -mr-4">
//                 <div
//                   className="animation-container"
//                   style={{ transform: "none", opacity: 1 }}
//                 >
//                   <div
//                     className="relative overflow-hidden rounded-2xl border-2 border-neutral-200 bg-white"
//                     style={{
//                       opacity: 1,
//                       transform: "rotate(9.91649deg)",
//                       zIndex: "auto",
//                     }}
//                   >
//                     <img
//                       height="100"
//                       width="100"
//                       src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?fit=crop&w=100&h=100"
//                       alt="Ray Thai"
//                       className="h-14 w-14 object-cover object-top"
//                     />
//                   </div>
//                 </div>
//               </div>
//               {/* Avatar 8 */}
//               <div className="group relative -mr-4">
//                 <div
//                   className="animation-container"
//                   style={{ transform: "none", opacity: 1 }}
//                 >
//                   <div
//                     className="relative overflow-hidden rounded-2xl border-2 border-neutral-200 bg-white"
//                     style={{
//                       opacity: 1,
//                       transform: "rotate(3.27029deg)",
//                       zIndex: "auto",
//                     }}
//                   >
//                     <img
//                       height="100"
//                       width="100"
//                       src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?fit=crop&w=100&h=100"
//                       alt="Tony Pujals"
//                       className="h-14 w-14 object-cover object-top"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="ml-6 flex justify-center">
//               <svg
//                 stroke="currentColor"
//                 fill="currentColor"
//                 strokeWidth="0"
//                 viewBox="0 0 16 16"
//                 className="mx-1 h-4 w-4 text-yellow-400"
//                 height="1em"
//                 width="1em"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
//               </svg>
//               <svg
//                 stroke="currentColor"
//                 fill="currentColor"
//                 strokeWidth="0"
//                 viewBox="0 0 16 16"
//                 className="mx-1 h-4 w-4 text-yellow-400"
//                 height="1em"
//                 width="1em"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
//               </svg>
//               <svg
//                 stroke="currentColor"
//                 fill="currentColor"
//                 strokeWidth="0"
//                 viewBox="0 0 16 16"
//                 className="mx-1 h-4 w-4 text-yellow-400"
//                 height="1em"
//                 width="1em"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
//               </svg>
//               <svg
//                 stroke="currentColor"
//                 fill="currentColor"
//                 strokeWidth="0"
//                 viewBox="0 0 16 16"
//                 className="mx-1 h-4 w-4 text-yellow-400"
//                 height="1em"
//                 width="1em"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
//               </svg>
//               <svg
//                 stroke="currentColor"
//                 fill="currentColor"
//                 strokeWidth="0"
//                 viewBox="0 0 16 16"
//                 className="mx-1 h-4 w-4 text-yellow-400"
//                 height="1em"
//                 width="1em"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
//               </svg>
//             </div>
//           </div>
//           <p className="relative z-40 text-sm text-neutral-400 lg:text-left text-center">
//             Trusted by founders and developers
//           </p>
//         </div>
//       </div>
//       <a
//         className="flex cursor-pointer bg-neutral-900 px-4 py-2 font-medium text-white shadow-[0px_0px_10px_0px_rgba(255,255,255,0.2)_inset] ring ring-white/20 ring-offset-2 ring-offset-neutral-900 transition-all duration-200 ring-inset hover:shadow-[0px_0px_20px_0px_rgba(255,255,255,0.4)_inset] hover:ring-white/40 active:scale-98 dark:bg-white dark:text-black dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)_inset] dark:ring-black/20 dark:ring-offset-white dark:hover:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.3)_inset] dark:hover:ring-black/50 relative z-20 h-10 w-full items-center justify-center rounded-lg text-center text-sm sm:w-52"
//         variant="primary"
//         href="/pricing"
//       >
//         Unlock Unlimited Access
//       </a>
//     </div>
//   );
// }


// const IconColumn = () => (
//   <div className="flex flex-col ml-2 gap-2 md:gap-2">
//     <div className="w-[60px] h-[60px] md:min-w-[62px] md:w-[62px] md:h-[62px] flex items-center justify-center rounded-lg border bg-[#161616] border-[#2A2A2A] hover:border-[#444] text-[#525252] hover:text-[#999] hover:bg-[#202020] transition-colors duration-200">
//       <ImageIcon className="w-6 h-6 md:w-6 md:h-6" />
//     </div>
//     <div className="w-[60px] h-[60px] md:min-w-[62px] md:w-[62px] md:h-[62px] flex items-center justify-center rounded-lg border bg-[#161616] border-[#2A2A2A] hover:border-[#444] text-[#525252] hover:text-[#999] hover:bg-[#202020] transition-colors duration-200">
//       <File className="w-6 h-6 md:w-6 md:h-6" />
//     </div>
//     <div className="w-[60px] h-[60px] md:min-w-[62px] md:w-[62px] md:h-[62px] flex items-center justify-center rounded-lg border bg-[#161616] border-[#2A2A2A] hover:border-[#444] text-[#525252] hover:text-[#999] hover:bg-[#202020] transition-colors duration-200">
//       <Video className="w-6 h-6 md:w-6 md:h-6" />
//     </div>
//   </div>
// );

// export function StorageMarquee() {
//   // Generate a sufficient number of columns to fill the screen and allow looping
//   // The HTML shows about 10 columns per track. We'll create 2 tracks of 10 columns each.
//   const columns = Array.from({ length: 10 }).map((_, i) => <IconColumn key={i} />);

//   return (
//     <>
//       <style>{`
//         @keyframes marquee {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-marquee {
//           animation: marquee 40s linear infinite;
//         }
//         .pause {
//           animation-play-state: paused;
//         }
//         .group:hover .motion-safe\\:group-hover\\:run {
//           animation-play-state: running;
//         }
//         /* Override pause when running class is active via hover */
//         .group:hover .animate-marquee {
//            animation-play-state: running;
//         }
//       `}</style>
//       <figure
//         className="group absolute inset-0 overflow-hidden nowrap hidden sm:block bg-[#0E0E0E]"
//         role="img"
//         aria-label="Supabase Storage supports images, documents and videos"
//       >
//         {/* Track 1 */}
//         <div className="relative h-full left-0 w-auto items-end pb-4 z-10 flex pause animate-marquee motion-safe:group-hover:run will-change-transform transition-transform">
//           {columns}
//           {columns}
//         </div>
//         {/* Track 2 (Duplicate for seamless loop visual if needed, though CSS translateX(-50%) handles one long track usually. 
//             The provided HTML has two separate divs with the same content, likely to ensure full width coverage or specific layout logic.
//             I will replicate the structure exactly as provided: two main flex containers.
//         */}
//         <div className="relative h-full left-0 w-auto items-end pb-4 z-10 flex pause animate-marquee motion-safe:group-hover:run will-change-transform transition-transform">
//           {columns}
//           {columns}
//         </div>
//       </figure>
//     </>
//   );
// }



// // Simple Icon Components to avoid external dependencies for this snippet
// const ChevronDown = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
// );
// const ArrowUpRight = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
// );
// const Bell = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
// );
// const Key = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>
// );
// const Settingss = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
// );
// const User = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
// );

// export function Sidebar() {
//   const navItems = [
//     { label: "API keys", active: true },
//     { label: "Projects", active: false },
//     { label: "Usage", active: false },
//     { label: "Rate Limit", active: false },
//     { label: "Spend", active: false },
//     { label: "Billing", active: false },
//     { label: "Logs and Datasets", active: false },
//     { label: "Changelog", active: false, external: true },
//   ];

//   const bottomItems = [
//     { label: "What's new", icon: <Bell /> },
//     { label: "Get API key", icon: <Key /> },
//     { label: "Settings", icon: <Settings /> },
//   ];

//   return (
//     <div className="flex flex-col h-full w-[220px] bg-[#fcfcfc] border-r border-[#e2e3e4] text-[#2b2d31] font-sans text-[14px] overflow-y-auto overflow-x-hidden p-2">
      
//       {/* Header / Logo Area */}
//       <div className="flex items-center justify-between px-3 py-4 mb-2 cursor-pointer hover:bg-[#f1f3f4] rounded-md transition-colors">
//         <span className="text-xl font-medium tracking-tight text-[#202124]">
//           Google AI Studio
//         </span>
//         <ChevronDown />
//       </div>

//       {/* Navigation List */}
//       <nav className="flex-1 flex flex-col gap-1">
//         {navItems.map((item) => (
//           <a
//             key={item.label}
//             href="#"
//             className={`
//               flex items-center justify-between px-3 py-2 rounded-md transition-colors
//               ${item.active 
//                 ? "bg-[#e8eaed] text-[#202124] font-medium" 
//                 : "text-[#5f6368] hover:bg-[#f1f3f4] hover:text-[#202124]"
//               }
//             `}
//           >
//             <span>{item.label}</span>
//             {item.external && (
//               <span className="text-[#5f6368]">
//                 <ArrowUpRight />
//               </span>
//             )}
//           </a>
//         ))}
//       </nav>

//       {/* Bottom Actions */}
//       <div className="mt-auto flex flex-col gap-1 pb-4">
//         {bottomItems.map((item) => (
//           <button
//             key={item.label}
//             className="flex items-center gap-3 px-3 py-2 text-[#5f6368] hover:bg-[#f1f3f4] hover:text-[#202124] rounded-md transition-colors w-full text-left"
//           >
//             <span className="w-5 h-5 flex items-center justify-center">
//               {item.icon}
//             </span>
//             <span>{item.label}</span>
//           </button>
//         ))}

//         {/* User Profile */}
//         <button className="flex items-center gap-3 px-3 py-2 mt-2 text-[#5f6368] hover:bg-[#f1f3f4] hover:text-[#202124] rounded-md transition-colors w-full text-left">
//           <div className="w-8 h-8 rounded-full bg-[#a8c7fa] text-[#1a73e8] flex items-center justify-center text-xs font-medium border border-[#1a73e8]/20">
//             G
//           </div>
//           <span className="truncate text-sm">kumargautamts.007...</span>
//         </button>
//       </div>
//     </div>
//   );
// }


// export function MyAnimation() {
//   const [chatbotAnimation, setChatbotAnimation] = useState(null);
//   const [circleAnimation, setCircleAnimation] = useState(null);

//   useEffect(() => {
//     fetch("/chatbot.json")
//       .then((res) => res.json())
//       .then((data) => setChatbotAnimation(data));

//     fetch("/circle_animation.json")
//       .then((res) => res.json())
//       .then((data) => setCircleAnimation(data));
//   }, []);

//   if (!chatbotAnimation || !circleAnimation) return <p>Loading...</p>;

//   return (
//     <div style={{ display: "flex", gap: "20px" }}>
//       <div style={{ width: 300, height: 300 }}>
//         <Lottie animationData={chatbotAnimation} loop />
//       </div>

//       <div style={{ width: 300, height: 300 }}>
//         <Lottie animationData={circleAnimation} loop />
//       </div>
//     </div>
//   );
// }

// export function AceternityLanding() {
//   return (
//     <div className="relative overflow-hidden bg-white pt-4 pb-40 md:pt-10 dark:bg-black font-sans">
//       <div className="relative z-20 mx-auto w-full max-w-[84rem] px-4">
        
//         {/* Changelog Badge */}
//         <div className="mt-4 flex flex-col items-start px-2 md:px-8 xl:px-0">
//           <div className="relative mb-4 flex items-center gap-2">
//             <a
//               href="/changelog"
//               className="group relative z-101 inline-flex cursor-pointer items-center gap-2 rounded-full bg-neutral-100 py-1 pr-4 pl-2 perspective-[1000px] transform-3d dark:bg-neutral-800/60"
//             >
//               <div className="relative" style={{ width: "24px", height: "18px", transformStyle: "preserve-3d" }}>
//                 <div className="absolute inset-0 rounded-[4px] bg-linear-to-b from-amber-400 to-amber-500 shadow-sm dark:from-amber-500 dark:to-amber-600">
//                   <div
//                     className="absolute left-0.5 rounded-t-[2px] bg-linear-to-b from-amber-300 to-amber-400 dark:from-amber-400 dark:to-amber-500"
//                     style={{ top: "-2.925px", width: "9px", height: "4.5px" }}
//                   ></div>
//                 </div>
//                 {/* Simplified folder icon stack for visual accuracy without external assets */}
//                 <div className="absolute top-0.5 left-1/2 origin-bottom overflow-hidden rounded-[3px] bg-white shadow-sm ring-1 shadow-black/10 ring-black/10 dark:bg-neutral-800 dark:shadow-white/10 dark:ring-white/10"
//                      style={{ zIndex: 10, transform: "translateX(calc(-50% + 0px)) translateY(-8px) rotate(-6deg)", width: "20px", height: "14px" }}>
//                    <div className="h-full w-full bg-neutral-200/50"></div>
//                 </div>
//                 <div className="absolute top-0.5 left-1/2 origin-bottom overflow-hidden rounded-[3px] bg-white shadow-sm ring-1 shadow-black/10 ring-black/10 dark:bg-neutral-800 dark:shadow-white/10 dark:ring-white/10"
//                      style={{ zIndex: 11, transform: "translateX(calc(-50% + 0px)) translateY(-7px) rotate(-3deg)", width: "20px", height: "14px" }}>
//                    <div className="h-full w-full bg-neutral-200/50"></div>
//                 </div>
//                 <div className="absolute top-0.5 left-1/2 origin-bottom overflow-hidden rounded-[3px] bg-white shadow-sm ring-1 shadow-black/10 ring-black/10 dark:bg-neutral-800 dark:shadow-white/10 dark:ring-white/10"
//                      style={{ zIndex: 12, transform: "translateX(calc(-50% + 0px)) translateY(-6px)", width: "20px", height: "14px" }}>
//                    <div className="h-full w-full bg-neutral-200/50"></div>
//                 </div>
//                  <div className="absolute top-0.5 left-1/2 origin-bottom overflow-hidden rounded-[3px] bg-white shadow-sm ring-1 shadow-black/10 ring-black/10 dark:bg-neutral-800 dark:shadow-white/10 dark:ring-white/10"
//                      style={{ zIndex: 13, transform: "translateX(calc(-50% + 0px)) translateY(-5px) rotate(3deg)", width: "20px", height: "14px" }}>
//                    <div className="h-full w-full bg-neutral-200/50"></div>
//                 </div>
//                  <div className="absolute top-0.5 left-1/2 origin-bottom overflow-hidden rounded-[3px] bg-white shadow-sm ring-1 shadow-black/10 ring-black/10 dark:bg-neutral-800 dark:shadow-white/10 dark:ring-white/10"
//                      style={{ zIndex: 14, transform: "translateX(calc(-50% + 0px)) translateY(-4px) rotate(6deg)", width: "20px", height: "14px" }}>
//                    <div className="h-full w-full bg-neutral-200/50"></div>
//                 </div>
//                 <div
//                   className="absolute inset-x-0 bottom-0 h-[85%] origin-bottom rounded-[4px] bg-linear-to-b from-amber-300 to-amber-400 shadow-sm dark:from-amber-400 dark:to-amber-500"
//                   style={{ transformStyle: "preserve-3d", zIndex: 20, transform: "rotateX(-25deg)" }}
//                 >
//                   <div className="absolute top-1 right-1 left-1 h-px bg-amber-200/50 dark:bg-amber-300/50"></div>
//                 </div>
//               </div>
//               <span className="text-xs font-medium text-neutral-700 dark:text-neutral-200">Changelog</span>
//               <span className="inline-block h-4 w-px bg-neutral-200 dark:bg-neutral-800"></span>
//               <span className="text-xs font-medium text-neutral-700 dark:text-neutral-200">80+ new blocks</span>
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="size-4 transition-transform duration-300 group-hover:translate-x-1"
//               >
//                 <path opacity="0.28" d="M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
//                 <path d="M15.1697 6C17.2731 7.55556 19.1622 9.37278 20.7906 11.4057C20.9302 11.5801 21.0001 11.79 21.0001 12C21.0001 12.21 20.9302 12.4199 20.7906 12.5943C19.1622 14.6272 17.2731 16.4444 15.1697 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
//               </svg>
//             </a>
//           </div>

//           {/* Hero Headline */}
//           <h1 className="relative mt-4 max-w-4xl text-left text-4xl font-bold tracking-tight text-balance text-neutral-900 sm:text-5xl md:text-6xl xl:text-6xl dark:text-neutral-50">
//             Ship landing pages at lightning speed.
//           </h1>

//           <div className="mt-4 flex w-full flex-col items-start justify-between gap-4 md:mt-4 md:flex-row md:items-end md:gap-10">
//             <div>
//               <p className="relative mb-8 max-w-2xl text-left text-sm tracking-wide text-neutral-600 antialiased sm:text-base md:text-base dark:text-neutral-400">
//                 200+ production-ready components, blocks and templates that make your site feel like you hired a design
//                 team. Copy, paste, customize, no wrestling with Framer Motion animations or Tailwind styling.
//               </p>
//               <div className="relative mb-4 flex w-full flex-col justify-center gap-y-2 sm:flex-row sm:justify-start sm:space-y-0 sm:space-x-4">
//                 <a
//                   className="flex cursor-pointer bg-neutral-900 px-4 py-2 font-medium text-white shadow-[0px_0px_10px_0px_rgba(255,255,255,0.2)_inset] ring ring-white/20 ring-offset-2 ring-offset-neutral-900 transition-all duration-200 ring-inset hover:shadow-[0px_0px_20px_0px_rgba(255,255,255,0.4)_inset] hover:ring-white/40 active:scale-98 dark:bg-white dark:text-black dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)_inset] dark:ring-black/20 dark:ring-offset-white dark:hover:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.3)_inset] dark:hover:ring-black/50 h-14 w-full items-center justify-center rounded-lg text-center text-base sm:w-52"
//                   href="/components"
//                 >
//                   Browse Components
//                 </a>
//                 <a
//                   className="flex h-14 w-full items-center justify-center rounded-lg border border-transparent bg-white text-base font-medium text-black shadow-sm ring-1 shadow-black/10 ring-black/10 transition duration-150 active:scale-98 sm:w-52 dark:border-neutral-600 dark:bg-black dark:text-white"
//                   href="/pricing"
//                 >
//                   Get All-Access
//                 </a>
//               </div>
//             </div>

//             {/* Social Proof */}
//             <div className="flex flex-col items-start justify-start">
//               <p className="mb-4 text-left text-sm text-neutral-500 md:text-xs lg:text-base dark:text-neutral-400">
//                 Trusted by 120,000+ founders<br className="hidden lg:block" /> developers and creators
//               </p>
//               <div className="mb-2 flex flex-row items-center justify-center md:flex-col lg:flex-row">
//                 <div className="flex flex-row items-center">
//                   {[
//                     "/images/testimonials/john.jpeg",
//                     "/images/testimonials/henrik.jpeg",
//                     "/images/testimonials/johnferry2.jpeg",
//                     "/images/testimonials/meru.webp",
//                     "/images/testimonials/georg.jpeg"
//                   ].map((src, i) => (
//                     <div key={i} className="group relative -mr-4 shrink-0">
//                       <div className="relative size-10 overflow-hidden rounded-full border-2 border-white lg:size-14 dark:border-black">
//                         <img
//                           height="100"
//                           width="100"
//                           src={src}
//                           alt="User"
//                           className="h-full w-full object-cover object-top"
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="ml-6 flex justify-center">
//                   {[...Array(5)].map((_, i) => (
//                     <svg
//                       key={i}
//                       width="12"
//                       height="12"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="mx-0.5 size-3 text-yellow-500"
//                     >
//                       <path
//                         d="M13.542 2.41641C12.5891 1.8612 11.4112 1.8612 10.4583 2.41641C9.94638 2.71465 9.59554 3.21145 9.30023 3.7204C9.00069 4.23665 8.67062 4.9284 8.26602 5.77633L8.24672 5.81677C7.97327 6.38983 7.90927 6.50492 7.83773 6.58824C7.72967 6.71411 7.59365 6.81294 7.44055 6.87681C7.33919 6.9191 7.20997 6.9444 6.58045 7.02739L6.53602 7.03324C5.60456 7.15601 4.84467 7.25617 4.26113 7.38152C3.68584 7.5051 3.10494 7.68525 2.66311 8.07993C1.84059 8.81467 1.47661 9.93489 1.71017 11.0128C1.83563 11.5918 2.1997 12.079 2.59249 12.5171C2.99089 12.9615 3.54676 13.4891 4.22814 14.1359L4.2607 14.1668C4.72121 14.604 4.81088 14.7004 4.86803 14.7942C4.95434 14.9359 5.0063 15.0958 5.01974 15.2611C5.02863 15.3706 5.01277 15.5013 4.89716 16.1257L4.88899 16.1697C4.71792 17.0935 4.57836 17.8472 4.51725 18.4409C4.45701 19.0262 4.44883 19.6344 4.68766 20.1765C5.13227 21.1858 6.08518 21.8782 7.18248 21.9891C7.77191 22.0487 8.34776 21.853 8.88582 21.6149C9.43159 21.3733 10.1052 21.0076 10.9309 20.5595L10.9703 20.5381C11.5284 20.2352 11.6478 20.1797 11.7547 20.1544C11.9161 20.116 12.0842 20.116 12.2456 20.1544C12.3525 20.1797 12.4719 20.2352 13.03 20.5381L13.0694 20.5595C13.895 21.0076 14.5687 21.3733 15.1145 21.6149C15.6526 21.853 16.2284 22.0487 16.8178 21.9891C17.9151 21.8782 18.868 21.1858 19.3127 20.1765C19.5515 19.6344 19.5433 19.0262 19.4831 18.4409C19.422 17.8472 19.2824 17.0936 19.1113 16.1698L19.1032 16.1257C18.9875 15.5013 18.9717 15.3706 18.9806 15.2611C18.994 15.0958 19.046 14.9359 19.1323 14.7942C19.1894 14.7004 19.2791 14.604 19.7396 14.1668L19.772 14.1361C20.4535 13.4892 21.0094 12.9615 21.4078 12.5171C21.8006 12.079 22.1647 11.5918 22.2901 11.0128C22.5237 9.93489 22.1597 8.81467 21.3372 8.07993C20.8954 7.68525 20.3145 7.5051 19.7392 7.38152C19.1556 7.25617 18.3958 7.15602 17.4643 7.03324L17.4199 7.02739C16.7903 6.9444 16.6611 6.9191 16.5598 6.87681C16.4067 6.81294 16.2706 6.71411 16.1626 6.58824C16.091 6.50492 16.027 6.38983 15.7536 5.81677L15.7343 5.77632C15.3297 4.9284 14.9996 4.23664 14.7001 3.7204C14.4048 3.21145 14.0539 2.71465 13.542 2.41641Z"
//                         fill="currentColor"
//                       ></path>
//                     </svg>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Browser Preview Window */}
//         <div className="relative my-4 w-full max-w-full overflow-hidden rounded-2xl shadow-2xl md:my-12">
//           <div className="flex items-center justify-start bg-gray-100 py-2 pl-4 dark:bg-neutral-800">
//             <div className="mr-6 flex items-center gap-2">
//               <div className="size-3 rounded-full bg-red-500"></div>
//               <div className="size-3 rounded-full bg-yellow-500"></div>
//               <div className="size-3 rounded-full bg-green-500"></div>
//             </div>
//             <div className="no-visible-scrollbar flex items-center gap-2 overflow-x-auto mask-r-from-90% mask-l-from-98% py-0.5 pr-20 pl-2 md:pl-4">
//               {/* Active Tab */}
//               <button className="flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-xs transition duration-150 hover:bg-white sm:text-sm dark:hover:bg-neutral-950 bg-white shadow ring-1 shadow-black/10 ring-black/10 dark:bg-neutral-900">
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4 text-neutral-700 dark:text-neutral-400">
//                   <path opacity="0.28" d="M21 9.21634V7C21 5.34315 19.6569 4 18 4H6C4.34315 4 3 5.34315 3 7V17C3 18.6569 4.34315 20 6 20H8.22023" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
//                   <path d="M18.6 13C19.4401 13 19.8601 13 20.181 13.1635C20.4632 13.3073 20.6927 13.5368 20.8365 13.819C21 14.1399 21 14.5599 21 15.4V17.6C21 18.4401 21 18.8601 20.8365 19.181C20.6927 19.4632 20.4632 19.6927 20.181 19.8365C19.8601 20 19.4401 20 18.6 20H14.4C13.5599 20 13.1399 20 12.819 19.8365C12.5368 19.6927 12.3073 19.4632 12.1635 19.181C12 18.8601 12 18.4401 12 17.6L12 15.4C12 14.5599 12 14.1399 12.1635 13.819C12.3073 13.5368 12.5368 13.3073 12.819 13.1635C13.1399 13 13.5599 13 14.4 13L18.6 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
//                 </svg>
//                 Hero Sections
//               </button>
//               <div className="h-4 w-px shrink-0 rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
              
//               {/* Inactive Tabs */}
//               {["Features", "Bento Grids", "Parallax Blocks", "Keyboard", "Glowing Effect", "Glare Card", "Canvas Card", "Text Reveal Card", "Globe"].map((tab) => (
//                 <React.Fragment key={tab}>
//                    <button className="flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-xs transition duration-150 hover:bg-white sm:text-sm dark:hover:bg-neutral-950">
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4 text-neutral-700 dark:text-neutral-400">
//                       <path opacity="0.28" d="M2 9.4C2 7.15979 2 6.03968 2.43597 5.18404C2.81947 4.43139 3.43139 3.81947 4.18404 3.43597C5.03968 3 6.15979 3 8.4 3H15.6C17.8402 3 18.9603 3 19.816 3.43597C20.5686 3.81947 21.1805 4.43139 21.564 5.18404C22 6.03968 22 7.15979 22 9.4V14.6C22 16.8402 22 17.9603 21.564 18.816C21.1805 19.5686 20.5686 20.1805 19.816 20.564C18.9603 21 17.8402 21 15.6 21H8.4C6.15979 21 5.03968 21 4.18404 20.564C3.43139 20.1805 2.81947 19.5686 2.43597 18.816C2 17.9603 2 16.8402 2 14.6V9.4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
//                       <path d="M4 13H12M20 13H12M12 13V19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"></path>
//                     </svg>
//                     {tab}
//                   </button>
//                   <div className="h-4 w-px shrink-0 rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
//                 </React.Fragment>
//               ))}
//             </div>
//           </div>
          
//           {/* Preview Content Area */}
//           <div className="w-full overflow-hidden bg-gray-100/50 mask-b-from-70% px-4 pt-4 perspective-distant dark:bg-neutral-900">
//             <div className="relative h-140 overflow-hidden rounded-tl-xl rounded-tr-xl bg-white shadow-sm ring-1 shadow-black/10 ring-black/10 will-change-transform md:h-200 dark:bg-neutral-950 [&>div]:bg-white dark:[&>div]:bg-neutral-950" style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}>
//               <div className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-neutral-950">
//                 {/* Leadgen Navbar */}
//                 <nav className="z-60 w-full backdrop-blur-md">
//                   <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 md:px-8">
//                     <a href="#" className="flex items-center space-x-2">
//                       <img alt="Logo" width="66" height="65" className="relative z-20 size-4 text-emerald-500" src="https://assets.aceternity.com/logo.png" />
//                       <span className="text-base font-semibold text-black sm:text-lg dark:text-white">Leadgen</span>
//                     </a>
//                     <div className="hidden items-center gap-6 lg:flex lg:gap-8">
//                       <a href="#" className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Product</a>
//                       <div className="group/hero-navbar relative">
//                         <button className="flex items-center gap-1 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
//                           Resources
//                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 transition-transform duration-200 group-hover/hero-navbar:rotate-180">
//                             <path d="m6 9 6 6 6-6"></path>
//                           </svg>
//                         </button>
//                       </div>
//                       <a href="#" className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Contact</a>
//                     </div>
//                     <div className="hidden items-center gap-3 lg:flex lg:gap-4">
//                       <a href="#" className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Login</a>
//                       <a href="#" className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-neutral-800 active:scale-98 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">Try for free</a>
//                     </div>
//                     <button className="flex size-10 items-center justify-center rounded-md lg:hidden" aria-label="Toggle menu">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 text-neutral-900 dark:text-white">
//                         <path d="M4 6h16"></path>
//                         <path d="M4 12h16"></path>
//                         <path d="M4 18h16"></path>
//                       </svg>
//                     </button>
//                   </div>
//                 </nav>
                
//                 {/* Leadgen Hero Content */}
//                 <div className="pointer-events-none overflow-hidden absolute inset-0 bg-transparent dark:bg-transparent">
//                    {/* Placeholder for canvas background */}
//                 </div>
//                 <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-32">
//                   <a href="#" className="flex w-fit items-center gap-2 rounded-full bg-white px-2 py-1 text-sm text-neutral-700 shadow-sm ring-1 shadow-black/10 ring-black/10 active:scale-98 dark:bg-neutral-800 dark:text-neutral-300 dark:ring-white/10">
//                     We've raised $69M seed funding 
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
//                       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//                       <path d="M5 12l14 0"></path>
//                       <path d="M15 16l4 -4"></path>
//                       <path d="M15 8l4 4"></path>
//                     </svg>
//                   </a>
//                   <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-tight text-neutral-700 md:text-7xl dark:text-neutral-300">
//                     Get warm leads for your business in minutes.
//                   </h1>
//                   <p className="mt-4 max-w-2xl text-base text-neutral-700 md:text-xl dark:text-neutral-300">
//                     Our AI-powered platform identifies and qualifies potential customers, so you can focus on closing deals instead of chasing cold leads.
//                   </p>
//                   <div className="mt-8 flex items-center gap-4">
//                     <button className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-neutral-800 active:scale-98 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100">
//                       <span className="flex items-center gap-2">Get Started <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l14 0"></path><path d="M15 16l4 -4"></path><path d="M15 8l4 4"></path></svg></span>
//                     </button>
//                     <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900 shadow-sm ring-1 ring-neutral-200 transition-all hover:bg-neutral-50 active:scale-98 dark:bg-neutral-800 dark:text-white dark:ring-neutral-700 dark:hover:bg-neutral-700">Learn More</button>
//                   </div>
//                   <div className="mt-16 md:mt-24">
//                     <div className="relative mx-auto max-w-full">
//                       <div className="overflow-hidden rounded-xl border border-neutral-300/50 backdrop-blur-sm dark:border-neutral-700/50">
//                         <div className="flex items-center gap-2 border-b border-neutral-200/50 px-4 py-3 dark:border-neutral-700/50">
//                           <div className="flex items-center gap-1.5">
//                             <div className="size-3 rounded-full bg-red-500"></div>
//                             <div className="size-3 rounded-full bg-yellow-500"></div>
//                             <div className="size-3 rounded-full bg-green-500"></div>
//                           </div>
//                           <div className="flex-1 text-center">
//                             <span className="text-xs text-neutral-500 dark:text-neutral-400">ui.aceternity.com</span>
//                           </div>
//                           <div className="w-12"></div>
//                         </div>
//                         <div className="relative aspect-[16/10] w-full">
//                           <img alt="Dashboard Preview" className="h-full w-full object-cover object-top" src="https://assets.aceternity.com/screenshots/3.jpg" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Data extracted from the provided HTML to populate the grid
// const reviewsData = [
//   {
//     name: "Peer Richelsen",
//     handle: "@peer_rich",
//     avatar: "https://pbs.twimg.com/profile_images/1816814706000080897/uSIidPHz_normal.png",
//     verified: true,
//     text: "amazing to see @calcom find its way into proper templates 🥳\n\nexcited to be powering the next thousands of startups and their demo calls!",
//   },
//   {
//     name: "Striver | Building takeUforward",
//     handle: "@striver_79",
//     avatar: "https://pbs.twimg.com/profile_images/1984249830525501440/94QR6rln_normal.jpg",
//     verified: false,
//     text: "Just checked out Aceternity (UX components), great work done by @mannupaaji \n\nLooks premium, top notch 🧨",
//   },
//   {
//     name: "Teddy Ni",
//     handle: "@Teddarific",
//     avatar: "https://pbs.twimg.com/profile_images/1777768083803037697/uGk8lU2y_normal.jpg",
//     verified: true,
//     text: "Wow, this site is an ABSOLUTE GOLDMINE for design engineers.\n\nIt's a huge collection of micro-interactions / animations, all with their respective source code for you to copy and paste.\n\nLove to see such an amazing display of my favorite package, framer-motion",
//   },
//   {
//     name: "Jerem",
//     handle: "@geekpreneur_",
//     avatar: "https://pbs.twimg.com/profile_images/1952566683916275712/DCs0O-aY_normal.jpg",
//     verified: false,
//     text: "Looking absolutely awesome ! 👏",
//   },
//   {
//     name: "metinn",
//     handle: "@mjakupiiii",
//     avatar: "https://pbs.twimg.com/profile_images/1665455114616700930/T8JjwdQy_normal.jpg",
//     verified: false,
//     text: "Amazing 🚀",
//   },
//   {
//     name: "Rayhan Hossain Rahat",
//     handle: "@rh_rahat_dev",
//     avatar: "https://pbs.twimg.com/profile_images/1751818631389065216/Bc-QBEsL_normal.jpg",
//     verified: false,
//     text: "Absolutely Awesome, Would really love to use some of these in my projects",
//   },
//   {
//     name: "Rexan Wong",
//     handle: "@rexan_wong",
//     avatar: "https://pbs.twimg.com/profile_images/2037272201272188930/ztIK09Pv_normal.jpg",
//     verified: false,
//     text: "🔖 Bookmarking it right away",
//   },
//   {
//     name: "sus646",
//     handle: "@sus6461",
//     avatar: "https://pbs.twimg.com/profile_images/1588546984977338368/-MkIqxOl_normal.jpg",
//     verified: false,
//     text: "is amazing ❤️‍🔥❤️‍🔥\nIt is open forever?",
//   },
//   {
//     name: "iOS/MacOS Developer | Swift | Xcode",
//     handle: "@InLessimore",
//     avatar: "https://pbs.twimg.com/profile_images/1689278735843799040/pZplvIad_normal.jpg",
//     verified: false,
//     text: "I really like it.I will try to use it my next app",
//   },
//   {
//     name: "Paarth Agarwal",
//     handle: "@PaarthAgarwal17",
//     avatar: "https://pbs.twimg.com/profile_images/1396375667529244676/o9VxEoTq_normal.jpg",
//     verified: false,
//     text: "I just tried it out this is crazy awesome",
//   },
// ];

// const reviewsData2 = [
//   {
//     name: "Yousef",
//     handle: "@Yousefcopy",
//     avatar: "https://pbs.twimg.com/profile_images/1932562415293538304/VqirCJVI_normal.jpg",
//     verified: false,
//     text: "Looks sick 👌🏼",
//   },
//   {
//     name: "Oamar",
//     handle: "@oamarkanji",
//     avatar: "https://pbs.twimg.com/profile_images/1606494029453328384/sUkvtpO__normal.jpg",
//     verified: true,
//     text: "Man this is awesome",
//   },
//   {
//     name: "Rajdeep Seth",
//     handle: "@rajdeepseth1",
//     avatar: "https://pbs.twimg.com/profile_images/1371347197313175554/mUp6R7_G_normal.jpg",
//     verified: false,
//     text: "Stumbled upon ui.aceternity.com today and my mind is blown 🤯 \nThe seamless integration of framer-motion, tailwind CSS, and shadcn showcases a masterclass in UI design. 🚀 Kudos to @mannupaaji for creating such an innovative and inspirational resource for devs! #UI #nextjs",
//   },
//   {
//     name: "Adrian | JavaScript Mastery",
//     handle: "@jsmasterypro",
//     avatar: "https://pbs.twimg.com/profile_images/2021307607957327872/qsS9-rAr_normal.jpg",
//     verified: true,
//     text: "Have you heard of Aceternity UI? \n\nIt's packed with various animated components that are ready to copy and paste! Mind-blowing stuff... 🤯\n\nClick here ➡️ ui.aceternity.com\n\n#framermotion #nextjs #tailwindcss #techinnovation",
//   },
//   {
//     name: "Rajesh David",
//     handle: "@rajeshdavidbabu",
//     avatar: "https://pbs.twimg.com/profile_images/1957737906837110784/14pXLrLa_normal.jpg",
//     verified: true,
//     text: "ui.aceternity.com\n\nSo well done. And its bloody free 🤯🤯\n\nPhenomenal work by  @mannupaaji",
//   },
//   {
//     name: "Cody De Arkland",
//     handle: "@Codydearkland",
//     avatar: "https://pbs.twimg.com/profile_images/1963713890048708608/PNJFIukN_normal.jpg",
//     verified: true,
//     text: "This library is so dope. Stoked to see more components drop.",
//   },
//   {
//     name: "Micky",
//     handle: "@Rasmic",
//     avatar: "https://pbs.twimg.com/profile_images/2025424976375869440/OgySAub0_normal.jpg",
//     verified: true,
//     text: "Yoo.... This has to be the most beautiful component library I've ever seen!!\n\nui.aceternity.com\n\nShoutout to @mannupaaji for releasing this for free!",
//   },
//   {
//     name: "shubh",
//     handle: "@PatniShubh",
//     avatar: "https://pbs.twimg.com/profile_images/1863955384408358912/yI-TiwSz_normal.jpg",
//     verified: true,
//     text: "bro just keeps dropping crazy alpha",
//   },
//   {
//     name: "Greg Bergé",
//     handle: "@gregberge_",
//     avatar: "https://pbs.twimg.com/profile_images/1722358890807861248/75S7CB3G_normal.jpg",
//     verified: false,
//     text: "It's awesome 👏",
//   },
// ];

// const reviewsData3 = [
//   {
//     name: "Ajay",
//     handle: "@ajayvignesh01",
//     avatar: "https://pbs.twimg.com/profile_images/1748597109924798464/olncJkoo_normal.jpg",
//     verified: true,
//     text: "Wow, this is awesome!",
//   },
//   {
//     name: "RD",
//     handle: "@rum_ovo_xo",
//     avatar: "https://pbs.twimg.com/profile_images/2029916844350709760/GjltGaED_normal.jpg",
//     verified: false,
//     text: "I like the interaction and animation. Beautiful!",
//   },
//   {
//     name: "Greg Bergé",
//     handle: "@gregberge_",
//     avatar: "https://pbs.twimg.com/profile_images/1722358890807861248/75S7CB3G_normal.jpg",
//     verified: false,
//     text: "✨ Aceternity UI is a complete collections of stunning effects ready to used for your website. It's shadcn/ui for magic effects. Can't believe it's free!\n\n👉 ui.aceternity.com",
//   },
//   {
//     name: "Nahuel Candia",
//     handle: "@dncandia",
//     avatar: "https://pbs.twimg.com/profile_images/1984763429148905472/6ntPfs3t_normal.jpg",
//     verified: true,
//     text: "This is absolutely mind blowing.\nAnimated UIs are the big leap forward on modern interfaces. Already thinking on how to build our website using these 💡",
//   },
//   {
//     name: "Hackmamba",
//     handle: "@hackmamba",
//     avatar: "https://pbs.twimg.com/profile_images/1986831169493651459/3c4Ps8Mw_normal.jpg",
//     verified: false,
//     text: "This is awesome 👏",
//   },
//   {
//     name: "Sean brydon",
//     handle: "@SeanBrydon13",
//     avatar: "https://pbs.twimg.com/profile_images/1828192492187009024/AAh_6um3_normal.jpg",
//     verified: true,
//     text: "Wow all for free! Setup a tip jar or buy me a coffee! I'd paid or this",
//   },
//   {
//     name: "Enis",
//     handle: "@enisdev",
//     avatar: "https://pbs.twimg.com/profile_images/1883875248099000320/IxUfmCOn_normal.jpg",
//     verified: false,
//     text: "Bro this is too beautiful, why is this even free??",
//   },
//   {
//     name: "Vinay",
//     handle: "@vinayisactive",
//     avatar: "https://pbs.twimg.com/profile_images/2037185783413825541/Fnn-iNZb_normal.jpg",
//     verified: false,
//     text: "Upon my return from a short break every time,  I consistently find innovative additions by you✨🤌",
//   },
//   {
//     name: "YOLO ツ",
//     handle: "@torytang025",
//     avatar: "https://pbs.twimg.com/profile_images/1748932533298077696/wtZXz7du_normal.jpg",
//     verified: false,
//     text: "Amazing, why are you so productive 🫡",
//   },
//   {
//     name: "Joe Mifsud",
//     handle: "@Joe_Mifsud",
//     avatar: "https://pbs.twimg.com/profile_images/1357549707279687681/uvgVa4bR_normal.jpg",
//     verified: true,
//     text: "These look awesome, nice work!",
//   },
// ];

// const reviewsData4 = [
//   {
//     name: "Mark Vassilevskiy",
//     handle: "@MarkKnd",
//     avatar: "https://pbs.twimg.com/profile_images/1923971076276502528/uw7iJX4A_normal.jpg",
//     verified: true,
//     text: "You can't imagine how much time I spent to find the flashlight effect. Super useful!",
//   },
//   {
//     name: "sreejith",
//     handle: "@Srejitk",
//     avatar: "https://pbs.twimg.com/profile_images/1716079605147373568/Uwj4eD_H_normal.jpg",
//     verified: false,
//     text: "So happy to see @mannupaaji work being recognised 🥹🏻♥️\n\nHis work is literally a treasure trove for devs 💎",
//   },
//   {
//     name: "Vlad",
//     handle: "@deifosv",
//     avatar: "https://pbs.twimg.com/profile_images/1835467796282499072/fY5hW09o_normal.jpg",
//     verified: true,
//     text: "This component are 🔥\ngreat work",
//   },
//   {
//     name: "Design Chief Priest",
//     handle: "@dnaijatechguy",
//     avatar: "https://pbs.twimg.com/profile_images/2015666493820739584/EIWOb2zJ_normal.jpg",
//     verified: true,
//     text: "Aceternity UI has some of the best components for designing landing pages I've ever seen. \n\nIf you're struggling with figuring out what animations to use. Check it out.\n\nThank me later 😉.\n\nui.aceternity.com",
//   },
//   {
//     name: "EseMonday.eth | Devrel 🥑",
//     handle: "@EseMonday1",
//     avatar: "https://pbs.twimg.com/profile_images/1688244239832915968/om91VUkg_normal.jpg",
//     verified: true,
//     text: "There are level to this things \n\nCongratulations @mannupaaji 👏🏾👏🏾",
//   },
//   {
//     name: "EseMonday.eth | Devrel 🥑",
//     handle: "@EseMonday1",
//     avatar: "https://pbs.twimg.com/profile_images/1688244239832915968/om91VUkg_normal.jpg",
//     verified: true,
//     text: "This is bc amazing 👏🏾👏👏🏾",
//   },
//   {
//     name: "Dhanush Vardhan Kalaiselvan",
//     handle: "@geeky_dan",
//     avatar: "https://pbs.twimg.com/profile_images/1830860950401888256/CnFx1wfg_normal.jpg",
//     verified: true,
//     text: "@aceternitylabs is just awesome, added some of its elements in my portfolio website",
//   },
//   {
//     name: "vish",
//     handle: "@indievish",
//     avatar: "https://pbs.twimg.com/profile_images/1620828954767626241/NQpxz0Fy_normal.jpg",
//     verified: true,
//     text: "Well done Manu\nYou rock 🚀",
//   },
//   {
//     name: "Sandeep",
//     handle: "@sandeep_indie",
//     avatar: "https://pbs.twimg.com/profile_images/1940830276734627840/DuLEcvXI_normal.jpg",
//     verified: true,
//     text: "I do highly recommend checking out ui.aceternity.com/components by @mannupaaji \n\nIt's greaaaat!",
//   },
// ];

// const TwitterIcon = () => (
//   <svg height="2500" viewBox="0 0 512 512" width="2500" className="h-4 w-4">
//     <path
//       d="m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z"
//       fill="#1da1f2"
//     ></path>
//   </svg>
// );

// const VerifiedBadge = () => (
//   <svg viewBox="0 0 24 24" aria-label="Verified account" className="h-4 w-4 text-[#1d9bf0] fill-current">
//     <g>
//       <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
//     </g>
//   </svg>
// );

// interface ReviewCardProps {
//   name: string;
//   handle: string;
//   avatar: string;
//   verified: boolean;
//   text: string;
//   href: string;
// }

// const ReviewCard: React.FC<ReviewCardProps> = ({ name, handle, avatar, verified, text, href }) => {
//   return (
//     <div className="group relative overflow-hidden rounded-xl border border-transparent bg-white p-4 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] transition-all duration-100 hover:shadow-[0_1px_1px_rgba(0,0,0,0.05),0_8px_12px_rgba(34,42,53,0.08),0_32px_80px_rgba(47,48,55,0.1),0_2px_3px_rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.30)] dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] dark:hover:border-[rgba(255,255,255,0.15)]">
//       <a target="_blank" className="w-full" href={href}>
//         <div className="flex space-x-1">
//           <img
//             alt="User avatar"
//             loading="lazy"
//             width="500"
//             height="500"
//             decoding="async"
//             className="size-10 rounded-full"
//             src={avatar}
//             style={{ color: "transparent" }}
//           />
//           <div className="w-full [transform-style:preserve-3d]">
//             <div className="flex w-full items-center space-x-1 truncate text-base font-bold text-neutral-700 dark:text-neutral-200">
//               <span className="max-w-[85%] truncate text-sm">{name} </span>
//               {verified && <VerifiedBadge />}
//             </div>
//             <div className="text-xs text-neutral-500 dark:text-neutral-300">{handle}</div>
//           </div>
//         </div>
//         <div>
//           <div className="mt-4 text-sm text-neutral-700 dark:text-white">
//             <p className="tweet-body_root__ChzUj" lang="en" dir="auto">
//               <span>{text}</span>
//             </p>
//           </div>
//         </div>
//       </a>
//     </div>
//   );
// };

// export function ReviewsSection() {
//   return (
//     <div className="mx-auto max-w-7xl">
//       <h2
//         id="reviews-title"
//         className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-center dark:text-white"
//       >
//         Loved by thousands of people
//       </h2>
//       <p className="mt-2 text-lg text-neutral-600 sm:text-center dark:text-neutral-200">
//         Here's what some of our users have to say about Aceternity UI.
//       </p>
//       <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 items-start gap-4 px-4 sm:mt-16 md:grid-cols-2 md:px-8 lg:grid-cols-4">
//         {/* Column 1 */}
//         <div className="grid items-start gap-4">
//           {reviewsData.map((review, index) => (
//             <ReviewCard
//               key={`col1-${index}`}
//               {...review}
//               href={`https://twitter.com/${review.handle.replace('@', '')}/status/123456789`}
//             />
//           ))}
//         </div>

//         {/* Column 2 */}
//         <div className="grid items-start gap-4">
//           {reviewsData2.map((review, index) => (
//             <ReviewCard
//               key={`col2-${index}`}
//               {...review}
//               href={`https://twitter.com/${review.handle.replace('@', '')}/status/123456789`}
//             />
//           ))}
//         </div>

//         {/* Column 3 */}
//         <div className="grid items-start gap-4">
//           {reviewsData3.map((review, index) => (
//             <ReviewCard
//               key={`col3-${index}`}
//               {...review}
//               href={`https://twitter.com/${review.handle.replace('@', '')}/status/123456789`}
//             />
//           ))}
//         </div>

//         {/* Column 4 */}
//         <div className="grid items-start gap-4">
//           {reviewsData4.map((review, index) => (
//             <ReviewCard
//               key={`col4-${index}`}
//               {...review}
//               href={`https://twitter.com/${review.handle.replace('@', '')}/status/123456789`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

export default function PasscodeCard() {
    return(
        <>
            {/* <Component />
            <MyComponent />
            <SocialSignOnComponent />
            <SocialSignOnComponentNew />
            <SessionManagementComponent />
            <MFAComponent />
            <MFAComponentAnimation />
            <FraudPreventionComponent />
            <FraudPreventionComponentAnimation />
            <SecurityComponent />
            <SecurityComponentAnimation />
            <SocialSignOnComponentAnimation />
            <SecurityComponentAni />
            <SocialSignOnComponentAni />
            <SocialSignOnComponentTesdt />
            <SocialSignOnComponentS />
            <RecreatedComponent />
            <PostgresDatabaseComponent />
            <TrustedSection />
            <SessionManagement />
            <PasswordCard />
            <BotDetectionCard />
            <EmailSmsPasscodeComponent />
            <MagicLinksComponent />
            <AutoJoinComponent />
            <CustomRolesPermissions />
            <OrganizationUIComponent />
            <BillingSection /> */}
            {/* <StorageComponentPage />
            <PostgresDatabaseComponentNew />
            <SupabaseRealtimeCard />
            <DashboardSection />
            <SupabaseFooter />
            <AutoJoinComponentNee />
            < AutoJoinCard/> */}
            {/* <AvatarsComponent /> */}
            {/* <ReviewsSection /> */}
        </>
    )
}