"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import styles from "./TeamNetwork.module.css";

// Deduplicated clubMembers array
const clubMembers = [
    {
        name: "Alex Johnson",
        designation: "President",
        phone: "+1-555-1234",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        social: { linkedin: "https://linkedin.com/in/alexjohnson", twitter: "https://twitter.com/alexjohnson" },
    },
    {
        name: "Sarah Chen",
        designation: "Vice President",
        phone: "+1-555-5678",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        social: { linkedin: "https://linkedin.com/in/sarahchen", twitter: "https://twitter.com/sarahchen" },
    },
    {
        name: "Michael Rodriguez",
        designation: "Secretary",
        phone: "+1-555-8765",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        social: { linkedin: "https://linkedin.com/in/michaelrodriguez", twitter: "https://twitter.com/michaelrodriguez" },
    },
    {
        name: "Emily Davis",
        designation: "Treasurer",
        phone: "+1-555-4321",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
        social: { linkedin: "https://linkedin.com/in/emilydavis", twitter: "https://twitter.com/emilydavis" },
    },
    {
        name: "James Wilson",
        designation: "Event Coordinator",
        phone: "+1-555-9876",
        avatar: "https://images.unsplash.com/photo-1522529590739-8c2b49b4c6f2?w=150&h=150&fit=crop&crop=face",
        social: { linkedin: "https://linkedin.com/in/jameswilson", twitter: "https://twitter.com/jameswilson" },
    },
    {
        name: "Olivia Brown",
        designation: "Marketing Lead",
        phone: "+1-555-6543",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
        social: { linkedin: "https://linkedin.com/in/oliviabrown", twitter: "https://twitter.com/oliviabrown" },
    },
    {
        name: "Liam Smith",
        designation: "Tech Lead",
        phone: "+1-555-3210",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        social: { linkedin: "https://linkedin.com/in/liamsmith", twitter: "https://twitter.com/liamsmith" },
    },
    {
        name: "Alex Johnson",
        designation: "President",
        phone: "+1-555-1234",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        social: { linkedin: "https://linkedin.com/in/alexjohnson", twitter: "https://twitter.com/alexjohnson" },
    },
    {
        name: "Sarah Chen",
        designation: "Vice President",
        phone: "+1-555-5678",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        social: { linkedin: "https://linkedin.com/in/sarahchen", twitter: "https://twitter.com/sarahchen" },
    },
    {
        name: "Michael Rodriguez",
        designation: "Secretary",
        phone: "+1-555-8765",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        social: { linkedin: "https://linkedin.com/in/michaelrodriguez", twitter: "https://twitter.com/michaelrodriguez" },
    },
    {
        name: "Emily Davis",
        designation: "Treasurer",
        phone: "+1-555-4321",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
        social: { linkedin: "https://linkedin.com/in/emilydavis", twitter: "https://twitter.com/emilydavis" },
    },
    {
        name: "James Wilson",
        designation: "Event Coordinator",
        phone: "+1-555-9876",
        avatar: "https://images.unsplash.com/photo-1522529590739-8c2b49b4c6f2?w=150&h=150&fit=crop&crop=face",
        social: { linkedin: "https://linkedin.com/in/jameswilson", twitter: "https://twitter.com/jameswilson" },
    },
    {
        name: "Olivia Brown",
        designation: "Marketing Lead",
        phone: "+1-555-6543",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
        social: { linkedin: "https://linkedin.com/in/oliviabrown", twitter: "https://twitter.com/oliviabrown" },
    },
    {
        name: "Liam Smith",
        designation: "Tech Lead",
        phone: "+1-555-3210",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        social: { linkedin: "https://linkedin.com/in/liamsmith", twitter: "https://twitter.com/liamsmith" },
    },
    {
        name: "Alex Johnson",
        designation: "President",
        phone: "+1-555-1234",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        social: { linkedin: "https://linkedin.com/in/alexjohnson", twitter: "https://twitter.com/alexjohnson" },
    },
    {
        name: "Sarah Chen",
        designation: "Vice President",
        phone: "+1-555-5678",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        social: { linkedin: "https://linkedin.com/in/sarahchen", twitter: "https://twitter.com/sarahchen" },
    },
    {
        name: "Michael Rodriguez",
        designation: "Secretary",
        phone: "+1-555-8765",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        social: { linkedin: "https://linkedin.com/in/michaelrodriguez", twitter: "https://twitter.com/michaelrodriguez" },
    },
    {
        name: "Emily Davis",
        designation: "Treasurer",
        phone: "+1-555-4321",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
        social: { linkedin: "https://linkedin.com/in/emilydavis", twitter: "https://twitter.com/emilydavis" },
    },
    {
        name: "James Wilson",
        designation: "Event Coordinator",
        phone: "+1-555-9876",
        avatar: "https://images.unsplash.com/photo-1522529590739-8c2b49b4c6f2?w=150&h=150&fit=crop&crop=face",
        social: { linkedin: "https://linkedin.com/in/jameswilson", twitter: "https://twitter.com/jameswilson" },
    },
    {
        name: "Olivia Brown",
        designation: "Marketing Lead",
        phone: "+1-555-6543",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
        social: { linkedin: "https://linkedin.com/in/oliviabrown", twitter: "https://twitter.com/oliviabrown" },
    },
    {
        name: "Liam Smith",
        designation: "Tech Lead",
        phone: "+1-555-3210",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        social: { linkedin: "https://linkedin.com/in/liamsmith", twitter: "https://twitter.com/liamsmith" },
    },
];

export default function TeamNetwork() {
    const [focusedIndices, setFocusedIndices] = useState([]);
    const [lockedIndex, setLockedIndex] = useState(null);
    const [filterRole, setFilterRole] = useState("All");
    const svgRef = useRef(null);

    // Memoized function to update focused indices
    const updateFocused = useCallback(() => {
        if (lockedIndex !== null) return;
        const filteredMembers = filterRole === "All"
            ? clubMembers
            : clubMembers.filter(member => member.designation === filterRole);
        const maxPopups = Math.min(1, filteredMembers.length);
        const newIndices = new Set();
        while (newIndices.size < maxPopups) {
            const next = Math.floor(Math.random() * filteredMembers.length);
            newIndices.add(clubMembers.indexOf(filteredMembers[next]));
        }
        setFocusedIndices([...newIndices]);
    }, [lockedIndex, filterRole]);

    // Effect for updating focused indices
    useEffect(() => {
        updateFocused();
        const interval = setInterval(updateFocused, 3000);
        return () => clearInterval(interval);
    }, [updateFocused]);

    // Effect for drawing SVG connections
    useEffect(() => {
        const svg = svgRef.current;
        if (!svg) return;
        svg.innerHTML = "";

        const persons = document.querySelectorAll(`.${styles.personWrapper} `);
        if (persons.length < 2) return;

        const positions = Array.from(persons).map((el) => {
            const rect = el.getBoundingClientRect();
            return {
                x: rect.left + rect.width / 2 + window.scrollX,
                y: rect.top + rect.height / 2 + window.scrollY,
            };
        });

        const lines = new Set();
        const n = Math.floor(positions.length * 0.6);

        for (let i = 0; i < n; i++) {
            let a, b, key, attempts = 0;
            do {
                a = Math.floor(Math.random() * positions.length);
                b = Math.floor(Math.random() * positions.length);
                key = `${Math.min(a, b)} -${Math.max(a, b)} `;
                attempts++;
            } while ((a === b || lines.has(key)) && attempts < 50);

            if (!lines.has(key)) {
                lines.add(key);
                const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                line.setAttribute("x1", positions[a].x);
                line.setAttribute("y1", positions[a].y);
                line.setAttribute("x2", positions[b].x);
                line.setAttribute("y2", positions[b].y);
                line.setAttribute("class", styles.connectionLine);
                svg.appendChild(line);
            }
        }
    }, [focusedIndices, lockedIndex, filterRole]);

    const handleClick = (index) => {
        if (lockedIndex === index) {
            setLockedIndex(null);
            setFocusedIndices([]);
        } else {
            setLockedIndex(index);
            setFocusedIndices([index]);
        }
    };

    const roles = ["All", ...new Set(clubMembers.map(member => member.designation))];

    return (
        <section className={styles.teamSection} aria-label="Team Network Section">
            <div className={styles.statsContainer}>
                <div className={styles.statCard}>7+<br />Team Members</div>
                <div className={styles.statCard}>5+<br />Years of Service</div>
                <div className={styles.filterContainer}>
                    <label htmlFor="roleFilter">Filter by Role: </label>
                    <select
                        id="roleFilter"
                        value={filterRole}
                        onChange={(e) => setFilterRole(e.target.value)}
                        className={styles.filterSelect}
                        aria-label="Filter team members by role"
                    >
                        {roles.map(role => (
                            <option key={role} value={role}>{role}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="pb-5 mb-5">

            </div>
            <div className="pt-5">
                <div className={styles.networkContainer}>
                    <svg ref={svgRef} className={styles.svgConnections} aria-hidden="true"></svg>
                    <div className={styles.waveBackground}></div>
                    <div className={styles.gridContainer}>
                        {clubMembers
                            .filter(member => filterRole === "All" || member.designation === filterRole)
                            .map((member, index) => {
                                const isFocused = focusedIndices.includes(index) || lockedIndex === index;
                                const popupStyle = {};
                                if (isFocused) {
                                    const wrapper = document.querySelectorAll(`.${styles.personWrapper} `)[index];
                                    if (wrapper) {
                                        const rect = wrapper.getBoundingClientRect();
                                        const windowHeight = window.innerHeight;
                                        if (rect.bottom + 250 > windowHeight) {
                                            popupStyle.bottom = "auto";
                                            popupStyle.top = "-130%";
                                        }
                                        const popups = document.querySelectorAll(`.${styles.popupCard} `);
                                        popups.forEach((popup, i) => {
                                            if (i !== index && popup.style.display !== "none") {
                                                const popupRect = popup.getBoundingClientRect();
                                                if (Math.abs(popupRect.left - rect.left) < 250) {
                                                    popupStyle.left = rect.left > window.innerWidth / 2 ? "auto" : "100%";
                                                    popupStyle.right = rect.left > window.innerWidth / 2 ? "100%" : "auto";
                                                    popupStyle.transform = `translateX(${rect.left > window.innerWidth / 2 ? "-100%" : "0"})`;
                                                }
                                            }
                                        });
                                    }
                                }
                                return (
                                    <div
                                        key={`${member.name} -${member.designation} -${index} `}
                                        className={`${styles.personWrapper} ${isFocused ? styles.focused : ""} `}
                                        onMouseEnter={() => {
                                            if (lockedIndex !== null) return;
                                            if (!focusedIndices.includes(index)) {
                                                setFocusedIndices((prev) => {
                                                    const newIndices = [...prev, index].slice(-5);
                                                    return newIndices;
                                                });
                                            }
                                        }}
                                        onMouseLeave={() => {
                                            if (lockedIndex !== null) return;
                                            setFocusedIndices((prev) => prev.filter((i) => i !== index));
                                        }}
                                        onClick={() => handleClick(index)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" || e.key === " ") {
                                                handleClick(index);
                                            }
                                        }}
                                        aria-label={`View details for ${member.name}, ${member.designation}`}
                                    >
                                        <img
                                            src={member.avatar}
                                            alt={`${member.name}, ${member.designation} `}
                                            onError={(e) => {
                                                e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=E2E8F0&color=2D3748&size=150`;
                                            }}
                                            className={`${styles.person} ${isFocused ? styles.focused : ""}`}
                                        />
                                        {
                                            isFocused && (
                                                <div
                                                    className={styles.popupCard}
                                                    style={popupStyle}
                                                    onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
                                                    onMouseLeave={(e) => {
                                                        if (lockedIndex !== index) e.currentTarget.style.opacity = "0.95";
                                                    }}
                                                >
                                                    <div className={styles.popupArrow}></div>
                                                    <h4>{member.name}</h4>
                                                    <hr />
                                                    <p><strong>Designation:</strong> {member.designation}</p>
                                                    <p><strong>Phone:</strong> {member.phone}</p>
                                                    <div className={styles.socialLinks}>
                                                        <a
                                                            href={member.social.linkedin}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            aria-label={`Visit ${member.name}'s LinkedIn profile`}
                                                        >
                                                            <svg className={styles.socialIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" fill="#2C7A7B" />
                                                                <circle cx="4" cy="4" r="2" fill="#2C7A7B" />
                                                            </svg>
                                                        </a>
                                                        <a
                                                            href={member.social.twitter}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            aria-label={`Visit ${member.name}'s Twitter profile`}
                                                        >
                                                            <svg className={styles.socialIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.896 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.755 7.773 22 6.981 22 4.01z" fill="#2C7A7B" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div >
                                );
                            })}
                    </div >
                </div >
            </div >
            <div className={styles.seeMoreContainer}>
                <a href="/teams" className={styles.seeMoreButton} aria-label="View more team members">See More</a>
            </div>
        </section >
    );
}
