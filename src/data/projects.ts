import { Project } from "@/types/project";

export const projects: Project[] = [
    {
        id: "havoc-the-new-reckoning",
        title: "HAVOC: The New Reckoning",
        description:
            "A free-to-play browser-based multiplayer RPG with strategic combat, deep progression, and a passionate community — solo-developed and actively played by hundreds of players.",
        fullDescription:
            "HAVOC: The New Reckoning is a fully released, independent browser-based multiplayer RPG built from the ground up as a solo developer. What started as a passion project has grown into an active community of dedicated players. The game features deep strategic combat with 10+ attack types, crit mechanics, elemental damage, and multiplayer co-op battles. Every system — from tower battles and the companion system to crafting and skill trees — is shaped by direct community feedback. There are no pay-to-win mechanics. No predatory monetization. Just a game built for players who appreciate depth, lovecraftian vibes, and fairness.",
        detailedFeatures: [
            "Strategic combat system with 10+ attack types, crit mechanics, and elemental damage",
            "Deep RPG progression with skill trees and character customization",
            "Multiplayer co-op battles against monsters and bosses",
            "Companion system with collectible and upgradeable allies",
            "Crafting system with resource gathering and item creation",
            "Tower battles with escalating difficulty and rewards",
            "Active Discord community with regular events and feedback loops",
            "Regular content updates driven by transparent development",
            "Fair free-to-play model with no pay-to-win mechanics",
        ],
        technicalChallenges:
            "Building a full-stack multiplayer RPG entirely in the browser with real-time combat, persistent player data, and a scalable backend architecture. Designing balanced progression systems that keep players engaged without resorting to predatory monetization. Managing a live service game as a solo developer — from server infrastructure and database optimization to community management and content updates.",
        myRole:
            "Solo Developer & Creator — Designed, developed, and launched the entire game independently. Responsible for all aspects: game design, frontend and backend development, database architecture, server infrastructure, community management, and ongoing live service updates.",
        tags: ["Web RPG", "Multiplayer", "Full-Stack", "Live Service", "Community"],
        image: "https://havocthenewreckoning.org/images/landing-hero.webp",
        video: "",
        videoType: "local",
        gradient: "from-cyan-500 to-teal-700",
        website: "https://havocthenewreckoning.org/",
        demo: "https://havocthenewreckoning.org/play",
        featured: true,
    },
    {
        id: "voidrift-survivors",
        title: "Vampire Survivors",
        description:
            "As the last survivor against the void, you must harness its own power to destroy the relentless swarms that pour from the rift",
        fullDescription:
            "Voidrift Survivors is an intense action roguelike where players face endless waves of void creatures. The game combines fast-paced combat with strategic power-up choices, creating a unique experience each playthrough. Built with Unity and C#, this project showcases advanced game mechanics, particle systems, and procedural enemy spawning.",
        detailedFeatures: [
            "Wave-based enemy spawning system with progressive difficulty",
            "Dynamic power-up system with synergies",
            "Particle effects and visual feedback systems",
            "Score and leaderboard tracking",
            "Multiple character abilities and upgrades",
        ],
        technicalChallenges:
            "Implementing an efficient object pooling system to handle hundreds of enemies simultaneously while maintaining 60 FPS. Designed a flexible ability system that allows for easy addition of new powers and synergies.",
        myRole:
            "Solo Developer - Designed and programmed all game systems. Implemented the core gameplay loop, the dynamic power-up system, and the object pooling architecture to ensure high performance.",
        tags: ["Unity", "C#", "Roguelike", "Game Design"],
        // FIXED: Changed single quotes to backticks below
        image: `${import.meta.env.BASE_URL}ProjectsImages/Voidrift_Cropped.png`,
        video: "",
        videoType: "local",
        gradient: "from-purple-500 to-pink-500",
        github: "https://github.com/RoGxGlory/Vampire-Survivors",
        demo: "",
        itchioUrl: "https://html-classic.itch.zone/html/12773046/VampireSurvivor1.1/index.html",
    },
    {
        id: "the-line",
        title: "The Line",
        description:
            "A Unity WebGL game challenging players with precision movement and timing-based mechanics.",
        fullDescription:
            "The Line is a Unity-built browser game that tests players' precision and timing. Developed as a focused gameplay experience, it emphasizes clean mechanics and responsive controls within a minimalist design framework.",
        detailedFeatures: [
            "Precision-based movement mechanics",
            "Timing-based gameplay challenges",
            "WebGL build for instant browser play",
            "Responsive controls optimized for web",
        ],
        technicalChallenges:
            "Building tight, responsive controls in a WebGL environment while maintaining consistent frame rates and input handling across different browsers.",
        myRole:
            "Solo Developer — Designed and developed the entire game, from concept to WebGL deployment on itch.io.",
        tags: ["Unity", "C#", "WebGL", "Game Design"],
        image: `${import.meta.env.BASE_URL}ProjectsImages/TheLine.jpg`,
        video: "",
        videoType: "local",
        github: "https://github.com/RoGxGlory/TheLine",
        gradient: "from-emerald-500 to-cyan-500",
        itchioUrl: "https://html-classic.itch.zone/html/12514488/WebGL/index.html",
    },
    {
        id: "flappy-bird",
        title: "Flappy Bird",
        description:
            "A fun student project recreating the classic Flappy Bird experience in Unity, playable directly in the browser.",
        fullDescription:
            "A playful recreation of the iconic Flappy Bird game, built in Unity as a student project. This browser-playable version captures the addictive one-tap gameplay loop while serving as a hands-on exercise in 2D physics, collision detection, and WebGL deployment.",
        detailedFeatures: [
            "Classic one-tap gameplay mechanics",
            "2D physics and collision system",
            "Score tracking",
            "WebGL build for instant browser play",
        ],
        technicalChallenges:
            "Recreating the precise feel of the original game's physics — getting the gravity, flap force, and pipe spacing just right to make the gameplay satisfying and challenging.",
        myRole:
            "Solo Developer — Built the entire game as a fun student project, handling all design, programming, and WebGL deployment.",
        tags: ["Unity", "C#", "WebGL", "2D"],
        image: `${import.meta.env.BASE_URL}ProjectsImages/FlappyBird.jpg`,
        video: "",
        videoType: "local",
        github: "https://github.com/RoGxGlory/FlappyBird",
        gradient: "from-yellow-500 to-green-500",
        itchioUrl: "https://html-classic.itch.zone/html/12514531/WebGL/index.html",
    },
    {
        id: "vault-of-shadows",
        title: "Vault of Shadows",
        description:
            "A Unity-based dungeon exploration game with multi-account support, encrypted save management, and interactive menus for exploration, combat, and leaderboard tracking.",
        fullDescription:
            "Vault of Shadows is a Unity-based dungeon crawler featuring a robust account system, procedural dungeon generation, and turn-based combat. The game emphasizes player progression, strategic decision-making, and competitive leaderboards. Developed in C# with a focus on modular architecture and secure data persistence.",
        detailedFeatures: [
            "Multi-account system with encrypted save files",
            "Procedural dungeon generation algorithm",
            "Turn-based combat with multiple enemy types",
            "Character progression and equipment system",
            "Global leaderboard tracking",
            "Interactive console-based UI with colored text",
        ],
        technicalChallenges:
            "Implementing secure save file encryption to prevent cheating while maintaining cross-platform compatibility. Designed a modular system architecture that separates game logic, data persistence, and UI rendering.",
        myRole:
            "Solo Developer - Designed and programmed all game systems. Architected the entire codebase and implemented all core systems, including the encrypted save management, procedural dungeon generation, turn-based combat, and character progression.",
        tags: ["Unity", "C#", "Multiplayer"],
        // FIXED: Changed single quotes to backticks below
        image: `${import.meta.env.BASE_URL}ProjectsImages/VaultOfShadows_Cropped3.png`,
        video: "",
        videoType: "local",
        gradient: "from-blue-500 to-purple-500",
        github: "https://github.com/RoGxGlory/VaultOfShadows",
        demo: "",
    },
    {
        id: "the-iron-curtain",
        title: "The Iron Curtain",
        description:
            "A co-op survival horror game, where you play as an agent in a team of up to four players tasked with investigating paranormal events to track and capture the supernatural entities responsible",
        fullDescription:
            "The Iron Curtain is a multiplayer survival horror experience built in Unreal Engine. Players work together to investigate paranormal activities, using various tools to detect and capture supernatural entities. The game features atmospheric environments, advanced networking for 4-player co-op, and dynamic AI behaviors that adapt to player actions.",
        detailedFeatures: [
            "4-player online co-op with dedicated server architecture",
            "Advanced AI system with dynamic behavior trees",
            "Environmental storytelling through interactive objects",
            "Voice proximity chat integration",
            "Equipment system with specialized ghost-hunting tools",
            "Procedural mission generation with varying objectives",
        ],
        technicalChallenges:
            "Implementing robust networked gameplay with client-side prediction and server reconciliation for smooth multiplayer experience. Created an AI director system that dynamically adjusts difficulty based on player performance and team coordination.",
        myRole:
            "Lead Programmer - Architected the core technical systems, including the 4-player co-op networking and the dynamic AI director. Led the implementation of all major gameplay mechanics, from the AI behavior trees to the procedural mission generation, and collaborated with design to ensure technical execution.",
        tags: ["Unreal Engine", "Networking", "Gameplay Programming"],
        // FIXED: Changed single quotes to backticks below
        image: `${import.meta.env.BASE_URL}ProjectsImages/TheIronCurtain.png`,
        video: "",
        videoType: "local",
        gradient: "from-pink-500 to-red-500",
        github: "https://github.com/RoGxGlory/TheIronCurtain",
        demo: "",
    },
    {
        id: "mangademon",
        title: "MangaDemon",
        description:
            "The MangaDemon team builds its community by operating as a manga scanlation group and developing the web game Veyra, where players defend a realm from monster waves through a stamina-based combat and crafting system",
        fullDescription:
            "MangaDemon is a multifaceted community project that combines manga scanlation with web game development. As community manager and developer, I oversee both the content creation pipeline and the development of Veyra, a browser-based RPG. The project emphasizes community engagement, regular content updates, and cross-platform accessibility.",
        detailedFeatures: [
            "Active manga scanlation group with weekly releases",
            "Web-based RPG with stamina system and crafting",
            "Community events and social media presence",
            "Discord integration for community management",
            "Regular content updates and player engagement systems",
        ],
        technicalChallenges:
            "Building a web game that runs smoothly across different browsers and devices while maintaining engaging gameplay. Balancing community management responsibilities with technical development work.",
        myRole:
            "Community Manager & Developer - Lead the scanlation team, manage social media presence, and develop the Veyra web game. Organize community events and maintain engagement across multiple platforms.",
        tags: ["Community", "Social Media", "Events"],
        // FIXED: Changed single quotes to backticks below
        image: `${import.meta.env.BASE_URL}ProjectsImages/MangaDemon.png`,
        video: "",
        videoType: "local",
        gradient: "from-orange-500 to-pink-500",
        website: "https://demonicscans.org/index.php",
        demo: "",
    },
];