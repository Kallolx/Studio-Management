import type { Service } from "@/types";

export const services: Service[] = [
  {
    title: "Podcast Production",
    description: "End-to-end recording, editing, and publishing support.",
    slug: "podcast-production",
    icon: "/service/1.webp",
    longDescription:
      "Get professional, broadcast-quality podcasts without the technical headache. We handle every stage of your podcast creation, from recording in a soundproof environment to distribution across all major networks.",
    includes: [
      {
        title: "Podcast Recording",
        description: "Multi-track audio capture with professional Rode microphones.",
        iconName: "Mic",
      },
      {
        title: "Multi-Camera Setup",
        description: "Cinematic multi-angle 4K camera setups capturing every reaction.",
        iconName: "Video",
      },
      {
        title: "Professional Audio Recording",
        description: "Pristine sound quality with isolation and real-time monitoring.",
        iconName: "Volume2",
      },
      {
        title: "Podcast Editing",
        description: "Comprehensive cut editing, audio balancing, and pacing fixes.",
        iconName: "Sliders",
      },
      {
        title: "Social Media Clips",
        description: "High-performing vertical video highlights for TikTok, Reels, & Shorts.",
        iconName: "Clapperboard",
      },
      {
        title: "Publishing Support",
        description: "RSS feed setup, metadata optimization, and distribution assistance.",
        iconName: "Share2",
      },
    ],
  },
  {
    title: "Promotional Video",
    description: "High-impact short-form videos for brands and creators.",
    slug: "promotional-video",
    icon: "/service/2.webp",
    longDescription:
      "Capture attention and drive conversions with high-impact promotional videos. Perfect for product launches, brand campaigns, and social media announcements.",
    includes: [
      {
        title: "Script & Concept",
        description: "Creative development, scriptwriting, and visual storyboarding.",
        iconName: "FileText",
      },
      {
        title: "Cinematography",
        description: "High-definition shooting using state-of-the-art camera systems.",
        iconName: "Camera",
      },
      {
        title: "Studio Location",
        description: "Access to our fully optimized indoor stage and setups.",
        iconName: "MapPin",
      },
      {
        title: "Color Grading",
        description: "Cinematic color rendering tailored to match your brand style.",
        iconName: "Paintbrush",
      },
      {
        title: "Sound Design",
        description: "Custom soundscapes, clear voiceovers, and licensed background tracks.",
        iconName: "Music",
      },
      {
        title: "Format Delivery",
        description: "Optimized formats for web, social feeds, and widescreen media.",
        iconName: "Maximize",
      },
    ],
  },
  {
    title: "Video Recording",
    description: "Multi-camera studio shoots in a controlled space.",
    slug: "video-recording",
    icon: "/service/3.webp",
    longDescription:
      "Record your content, presentations, or courses in a soundproof, acoustically treated studio environment with top-tier recording setups.",
    includes: [
      {
        title: "Multi-Camera Shoot",
        description: "Simultaneous recording using multiple matching camera angles.",
        iconName: "Video",
      },
      {
        title: "Pro Studio Lights",
        description: "Professional softbox, key-light, and background LED arrays.",
        iconName: "Lightbulb",
      },
      {
        title: "Soundproof Acoustics",
        description: "Acoustically isolated rooms designed to block external noise.",
        iconName: "ShieldAlert",
      },
      {
        title: "Teleprompter Support",
        description: "High-contrast script reader for natural delivery during shoots.",
        iconName: "Tv",
      },
      {
        title: "Director Monitor",
        description: "Real-time feed monitoring for framing, posture, and quality checks.",
        iconName: "Monitor",
      },
      {
        title: "Raw Footages",
        description: "Immediate access to all raw source files in high quality.",
        iconName: "HardDrive",
      },
    ],
  },
  {
    title: "Video & Photography",
    description: "Combined video and photo shoots for campaigns.",
    slug: "video-photography",
    icon: "/service/4.webp",
    longDescription:
      "Maximize your shoot session by capturing high-end video footage and professional photography campaigns simultaneously in one booking.",
    includes: [
      {
        title: "Shoot Coordination",
        description: "Coordinated session plan covering both photo and video requirements.",
        iconName: "Calendar",
      },
      {
        title: "Digital Portraits",
        description: "High-resolution professional headshots and catalog photos.",
        iconName: "Camera",
      },
      {
        title: "Multi-Angle Video",
        description: "Interactive video content shot alongside the photo sessions.",
        iconName: "Video",
      },
      {
        title: "Commercial Photo Editing",
        description: "Full retouching, blemish removal, and color balancing.",
        iconName: "Sliders",
      },
      {
        title: "Creative Direction",
        description: "Posing guidance, composition styling, and visual theme planning.",
        iconName: "Sparkles",
      },
      {
        title: "Social Ready Assets",
        description: "Pre-cropped and optimized imagery packages for social platforms.",
        iconName: "Share2",
      },
    ],
  },
  {
    title: "Video Editing",
    description: "Professional coloring, editing, and post-production.",
    slug: "video-editing",
    icon: "/service/5.webp",
    longDescription:
      "Transform raw footage into polished, engaging visual narratives. Our professional editors handle cutting, color, audio, and visual enhancements.",
    includes: [
      {
        title: "Cuts & Pacing",
        description: "Tight editing, removing filler words, and optimizing audience retention.",
        iconName: "Scissors",
      },
      {
        title: "Color Correction",
        description: "Accurate color correction, matching angles, and custom LUT filters.",
        iconName: "Paintbrush",
      },
      {
        title: "Motion Graphics",
        description: "Custom titles, lower thirds, callouts, and clean transitions.",
        iconName: "Sparkles",
      },
      {
        title: "Audio Enhancements",
        description: "Background noise removal, vocal compression, and audio mixing.",
        iconName: "Volume2",
      },
      {
        title: "Visual Effects",
        description: "Subtle visual effects, overlays, green-screen masking, and zoom cuts.",
        iconName: "Layers",
      },
      {
        title: "Multi-Format Export",
        description: "Output versions formatted for horizontal widescreen and vertical feeds.",
        iconName: "Smartphone",
      },
    ],
  },
  {
    title: "Studio Rent",
    description: "Rent our fully equipped studio for shoots.",
    slug: "studio-rent",
    icon: "/service/6.webp",
    longDescription:
      "Bring your own crew and rent our premium studio space. The rental includes access to professional backgrounds, soundproofing, and support rooms.",
    includes: [
      {
        title: "Studio Space Access",
        description: "Access to our clean, premium, soundproof studio rooms.",
        iconName: "Home",
      },
      {
        title: "Custom Backgrounds",
        description: "Interchangeable paper backdrops and set styles.",
        iconName: "Palette",
      },
      {
        title: "Lighting Included",
        description: "Access to a full array of softboxes and variable LEDs.",
        iconName: "Lightbulb",
      },
      {
        title: "High-Speed AC & WiFi",
        description: "Dedicated gigabit internet and central climate control.",
        iconName: "Wifi",
      },
      {
        title: "Makeup Room",
        description: "Private vanity space for hair, makeup, and dress changes.",
        iconName: "Scissors",
      },
      {
        title: "Tech Assistance",
        description: "On-site studio manager to help set up gear and configurations.",
        iconName: "UserCheck",
      },
    ],
  },
  {
    title: "Film Production",
    description: "Full-scale cinematic production and film development.",
    slug: "film-production",
    icon: "/service/7.webp",
    longDescription:
      "Turn your script or concept into a cinematic masterpiece. We offer full film production services including pre-production, filming, and post-production.",
    includes: [
      {
        title: "Screenplay Prep",
        description: "Creative development, script reviews, and scene planning.",
        iconName: "FileText",
      },
      {
        title: "Cinema Cameras",
        description: "Filming using high-end cinema-grade cameras and lenses.",
        iconName: "Video",
      },
      {
        title: "Scouting & Casting",
        description: "Location scouting and assistance with local casting calls.",
        iconName: "Users",
      },
      {
        title: "Film Scoring",
        description: "Custom soundtrack composition and cinematic sound design.",
        iconName: "Music",
      },
      {
        title: "Narrative Grading",
        description: "Advanced cinema color grading to build mood and atmosphere.",
        iconName: "Paintbrush",
      },
      {
        title: "DCP Export",
        description: "Theater-ready Digital Cinema Package output creation.",
        iconName: "HardDrive",
      },
    ],
  },
  {
    title: "Background Music",
    description: "Custom scores and background tracks for your media.",
    slug: "background-music",
    icon: "/service/8.webp",
    longDescription:
      "Enhance your video, film, or podcast with unique, custom-produced background tracks and scores tailored to fit your story's emotional beats.",
    includes: [
      {
        title: "Custom Scoring",
        description: "Tailored musical compositions matching your scene's pacing.",
        iconName: "Music",
      },
      {
        title: "Royalty-Free License",
        description: "Full rights ownership for worry-free digital distribution.",
        iconName: "ShieldCheck",
      },
      {
        title: "Genre Versatility",
        description: "Tracks crafted in Lo-Fi, Cinematic, Corporate, or Electronic styles.",
        iconName: "Sliders",
      },
      {
        title: "Mix & Mastering",
        description: "Professional audio engineering to ensure balanced playback.",
        iconName: "Volume2",
      },
      {
        title: "Custom Sound FX",
        description: "Atmospheric textures, ambient sounds, and specific audio cues.",
        iconName: "Sparkles",
      },
      {
        title: "License Agreement",
        description: "Digital license documentation for copyright clearance.",
        iconName: "FileText",
      },
    ],
  },
  {
    title: "Post Production",
    description: "Professional coloring, editing, and post-production.",
    slug: "post-production",
    icon: "/service/9.webp",
    longDescription:
      "Elevate your recorded media to industry standards. We handle advanced video assembly, color matching, vocal cleanups, and subtitle animations.",
    includes: [
      {
        title: "Asset Preparation",
        description: "Ingesting, organizing, and transcoding multi-camera footages.",
        iconName: "Folder",
      },
      {
        title: "Sound Mixing",
        description: "Surround sound balancing, level matching, and noise gating.",
        iconName: "Sliders",
      },
      {
        title: "Dynamic Transitions",
        description: "Fluid graphical animations and seamless scene transitions.",
        iconName: "Layers",
      },
      {
        title: "Animated Subtitles",
        description: "Trendy, reader-friendly automated and stylized video captions.",
        iconName: "Tv",
      },
      {
        title: "Output Optimizing",
        description: "Formatting for various screens and digital display specs.",
        iconName: "Maximize",
      },
      {
        title: "Batch Processing",
        description: "Rapid exporting of multiple variations and social clips.",
        iconName: "HardDrive",
      },
    ],
  },
];
