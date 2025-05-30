"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./TeamNetwork.module.css";

const clubMembers = [
    { name: "Alex Johnson", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" },
    { name: "Sarah Chen", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" },
    { name: "Michael Rodriguez", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" },
    { name: "Emily Davis", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" },
    { name: "James Wilson", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" },
    { name: "Lisa Thompson", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face" },
    { name: "David Kim", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face" },
    { name: "Rachel Green", avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face" },
    { name: "Tom Anderson", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face" },
    { name: "Nina Patel", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face" },
    { name: "Chris Martinez", avatar: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=150&h=150&fit=crop&crop=face" },
    { name: "Amanda Foster", avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face" },
    { name: "Kevin Zhang", avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face" },
    { name: "Sophie Williams", avatar: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=150&h=150&fit=crop&crop=face" },
    { name: "Ryan Cooper", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face" },
    { name: "Jessica Taylor", avatar: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=150&h=150&fit=crop&crop=face" },
    { name: "Daniel Brown", avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face" },
    { name: "Maria Gonzalez", avatar: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=150&h=150&fit=crop&crop=face" },
    { name: "Andrew Lee", avatar: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?w=150&h=150&fit=crop&crop=face" },
    { name: "Olivia White", avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face" },
    { name: "Brandon Clark", avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face" },
    { name: "Taylor Swift", avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face" },
    { name: "Jordan Phillips", avatar: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=150&h=150&fit=crop&crop=face" },
    { name: "Ashley Moore", avatar: "https://images.unsplash.com/photo-1512310604669-443f26c35f52?w=150&h=150&fit=crop&crop=face" },
    { name: "Tyler Garcia", avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop&crop=face" },
    { name: "Hannah Miller", avatar: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=150&h=150&fit=crop&crop=face" },
    { name: "Justin Adams", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face" },
    { name: "Samantha Jones", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face" },
    { name: "Mason Wright", avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&crop=face" },
    { name: "Grace Hill", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=face" },
    { name: "Lucas Green", avatar: "https://images.unsplash.com/photo-1558203728-00f45181dd84?w=150&h=150&fit=crop&crop=face" },
    { name: "Zoe Baker", avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&h=150&fit=crop&crop=face" },
    { name: "Ethan Scott", avatar: "https://images.unsplash.com/photo-1546820389-44d77e1f3b31?w=150&h=150&fit=crop&crop=face" },
    { name: "Chloe Evans", avatar: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=150&h=150&fit=crop&crop=face" },
    { name: "Noah Turner", avatar: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=150&h=150&fit=crop&crop=face" },
    { name: "Lily Parker", avatar: "https://images.unsplash.com/photo-1553514029-1318c9127859?w=150&h=150&fit=crop&crop=face" },
    { name: "Owen Roberts", avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=150&h=150&fit=crop&crop=face" },
    { name: "Ruby Collins", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face" },
    { name: "Ian Mitchell", avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face" },
    { name: "Mia Stewart", avatar: "https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?w=150&h=150&fit=crop&crop=face" },
    { name: "Caleb Murphy", avatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=150&h=150&fit=crop&crop=face" },
    { name: "Aurora Reed", avatar: "https://images.unsplash.com/photo-1611695434369-a8f5d76cdb5b?w=150&h=150&fit=crop&crop=face" },
    { name: "Felix Rivera", avatar: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=150&h=150&fit=crop&crop=face" },
    { name: "Hazel Cox", avatar: "https://images.unsplash.com/photo-1621784563330-caee0b138a00?w=150&h=150&fit=crop&crop=face" },
    { name: "Leo Ward", avatar: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=150&h=150&fit=crop&crop=face" },
    { name: "Ivy Torres", avatar: "https://images.unsplash.com/photo-1630208232767-2d24c97f5de2?w=150&h=150&fit=crop&crop=face" },
    { name: "Max Powell", avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&fit=crop&crop=face" },
    { name: "Luna Flores", avatar: "https://images.unsplash.com/photo-1638913662515-793ac2fafc65?w=150&h=150&fit=crop&crop=face" },
    { name: "Finn Hughes", avatar: "https://images.unsplash.com/photo-1641222130078-4ac4f76477f9?w=150&h=150&fit=crop&crop=face" },
    { name: "Sage Kelly", avatar: "https://images.unsplash.com/photo-1643297654842-0a99d4c4e799?w=150&h=150&fit=crop&crop=face" },
    { name: "River Price", avatar: "https://images.unsplash.com/photo-1645830166230-187caf791b90?w=150&h=150&fit=crop&crop=face" },
    { name: "Nova Bell", avatar: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?w=150&h=150&fit=crop&crop=face" },
    { name: "Atlas Gray", avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=150&h=150&fit=crop&crop=face" }
];

export default function TeamNetwork() {
    const [displayedMembers, setDisplayedMembers] = useState([]);
    const [fadeOut, setFadeOut] = useState(false);
    const containerRef = useRef(null);
    const svgRef = useRef(null);

    // Pick 20 random members
    function pickRandomMembers() {
        const shuffled = [...clubMembers].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 20);
    }

    // Cycle members every 4 seconds with fade effect
    useEffect(() => {
        function cycleMembers() {
            setFadeOut(true); // Start fade out
            setTimeout(() => {
                setDisplayedMembers(pickRandomMembers());
                setFadeOut(false); // Fade in
            }, 800); // Match CSS fade duration
        }

        // Initialize
        setDisplayedMembers(pickRandomMembers());

        const interval = setInterval(cycleMembers, 4000);

        return () => clearInterval(interval);
    }, []);

    // Draw connection lines between displayed members
    useEffect(() => {
        const svg = svgRef.current;
        if (!svg || displayedMembers.length < 2) return;
        svg.innerHTML = "";

        const positions = Array.from(
            document.querySelectorAll(`.${styles.person}`)
        ).map((el) => ({
            x: el.offsetLeft + el.offsetWidth / 2,
            y: el.offsetTop + el.offsetHeight / 2,
        }));

        const lines = new Set();
        const n = Math.floor(positions.length * 0.8);

        for (let i = 0; i < n; i++) {
            let a, b, key, attempts = 0;
            do {
                a = Math.floor(Math.random() * positions.length);
                b = Math.floor(Math.random() * positions.length);
                key = `${Math.min(a, b)}-${Math.max(a, b)}`;
                attempts++;
            } while ((a === b || lines.has(key)) && attempts < 50);

            if (!lines.has(key)) {
                lines.add(key);
                const line = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "line"
                );
                line.setAttribute("x1", positions[a].x);
                line.setAttribute("y1", positions[a].y);
                line.setAttribute("x2", positions[b].x);
                line.setAttribute("y2", positions[b].y);
                line.setAttribute("class", styles.connectionLine);
                svg.appendChild(line);
            }
        }
    }, [displayedMembers]);

    // Calculate grid position for member index (4 columns x 5 rows)
    function getGridPosition(index) {
        const cols = 4;
        const row = Math.floor(index / cols);
        const col = index % cols;
        const left = 60 + col * 100; // 60px left margin + 100px gap
        const top = 80 + row * 110;  // 80px top margin + 110px gap
        return { left, top };
    }

    return (
        <div
            ref={containerRef}
            className={styles.networkContainer}
            style={{
                position: "relative",
                height: "100vh",
                width: "100vw",
                overflow: "hidden",
            }}
        >
            <div className={styles.backgroundDots}></div>
            <svg
                ref={svgRef}
                className={styles.svgConnections}
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}
            ></svg>

            <div className="w-100"
                style={{
                    opacity: fadeOut ? 0 : 1,
                    transition: "opacity 0.8s ease",
                    position: "relative",
                    zIndex: 2,
                }}
            >
                {displayedMembers.map((member, index) => {
                    const pos = getGridPosition(index);
                    return (
                        <div
                            key={member.name + index}
                            className={`${styles.person} ${styles.active}`}
                            style={{
                                position: "absolute",
                                left: pos.left,
                                top: pos.top,
                                width: 80,
                                height: 80,
                            }}
                            title={member.name}
                        >
                            <img
                                src={member.avatar}
                                alt={member.name}
                                onError={(e) => {
                                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                                        member.name
                                    )}&background=667eea&color=fff&size=150`;
                                }}
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
