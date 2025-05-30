"use client"
import { useEffect, useRef, useState } from "react";

const Teammap = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const isHoverRef = useRef(false);
    const members = [
        {
            name: "Javier Bates",
            role: "Software Developer",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate exercitationem, consequatur dolores excepturi esse.",
            img: "https://randomuser.me/api/portraits/men/28.jpg",
        },
        {
            name: "Stacey Cooper",
            role: "Software Developer",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate exercitationem, consequatur dolores excepturi esse.",
            img: "https://randomuser.me/api/portraits/women/45.jpg",
        },
        {
            name: "Stacey Cooper",
            role: "Software Developer",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate exercitationem, consequatur dolores excepturi esse.",
            img: "https://randomuser.me/api/portraits/women/45.jpg",
        },
        {
            name: "Stacey Cooper",
            role: "Software Developer",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate exercitationem, consequatur dolores excepturi esse.",
            img: "https://randomuser.me/api/portraits/women/45.jpg",
        },
        {
            name: "Stacey Cooper",
            role: "Software Developer",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate exercitationem, consequatur dolores excepturi esse.",
            img: "https://randomuser.me/api/portraits/women/45.jpg",
        },
        {
            name: "Stacey Cooper",
            role: "Software Developer",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate exercitationem, consequatur dolores excepturi esse.",
            img: "https://randomuser.me/api/portraits/women/45.jpg",
        },
        {
            name: "Stacey Cooper",
            role: "Software Developer",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate exercitationem, consequatur dolores excepturi esse.",
            img: "https://randomuser.me/api/portraits/women/45.jpg",
        },
        {
            name: "Stacey Cooper",
            role: "Software Developer",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate exercitationem, consequatur dolores excepturi esse.",
            img: "https://randomuser.me/api/portraits/women/45.jpg",
        },
        {
            name: "Stacey Cooper",
            role: "Software Developer",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate exercitationem, consequatur dolores excepturi esse.",
            img: "https://randomuser.me/api/portraits/women/45.jpg",
        },
        {
            name: "Stacey Cooper",
            role: "Software Developer",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate exercitationem, consequatur dolores excepturi esse.",
            img: "https://randomuser.me/api/portraits/women/45.jpg",
        },
        {
            name: "Stacey Cooper",
            role: "Software Developer",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate exercitationem, consequatur dolores excepturi esse.",
            img: "https://randomuser.me/api/portraits/women/45.jpg",
        },
        {
            name: "Stacey Cooper",
            role: "Software Developer",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate exercitationem, consequatur dolores excepturi esse.",
            img: "https://randomuser.me/api/portraits/women/45.jpg",
        },
        {
            name: "Stacey Cooper",
            role: "Software Developer",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate exercitationem, consequatur dolores excepturi esse.",
            img: "https://randomuser.me/api/portraits/women/45.jpg",
        },
        // …add the rest (same order as your original HTML)
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHoverRef.current) {
                const random = Math.floor(Math.random() * members.length);
                setActiveIndex(random);
            }
        }, 3000);

        const handleResize = () => {
            setupHoverEvents();
        };

        window.addEventListener("resize", handleResize);
        setupHoverEvents();

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", handleResize);
        };
    }, [members]);

    const setupHoverEvents = () => {
        // No specific DOM listener needed, React handles hover via props
    };

    return (
        <ul className="team">
            {members.map((member, index) => (
                <li
                    className={`team__members ${activeIndex === index ? "team__members--show" : ""
                        }`}
                    key={index}
                    onMouseEnter={() => {
                        if (window.matchMedia("(min-width: 480px)").matches) {
                            setActiveIndex(null);
                            isHoverRef.current = true;
                        }
                    }}
                    onMouseLeave={() => {
                        if (window.matchMedia("(min-width: 480px)").matches) {
                            isHoverRef.current = false;
                        }
                    }}
                >
                    <div className="userProfile">
                        <div className="userProfile__thumbnail">
                            <img
                                className="userProfile__image"
                                src={member.image}
                                alt={member.name}
                            />
                        </div>
                    </div>
                    <div className="team__details">
                        <div className="team__meta">
                            <h3 className="team__meta__title">{member.name}</h3>
                            <p className="team__meta__designation">{member.designation}</p>
                        </div>
                        <div className="team__details__summery">{member.summary}</div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Teammap;
