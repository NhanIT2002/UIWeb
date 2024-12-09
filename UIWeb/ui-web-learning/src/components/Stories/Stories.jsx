import React from "react";

import avt1 from "../../assets/images/avt1.jpg";
import avt2 from "../../assets/images/avt2.jpg";
import avt3 from "../../assets/images/avt3.jpg";
import avt4 from "../../assets/images/avt4.jpg";

import './Stories.css';

const Stories = () => {
    const stories = [
        {
            avatar: avt1,
            story: "I first studied Japanese in college, and although I was pretty good at grammar, kanji was my weak point. I stayed up all night cramming before the final, and forgot all the kanji again right after I took it. WaniKani teaches kanji with mnemonics to help remember and make sense of them, and reinforces the lessons with periodic reviews to make sure they stick. And knowing kanji helped me to make the jump from reading textbooks to reading native material — the books, video games, and manga I’d always wanted to read.",
            fullname: "Andrew Eliot",
            role: "Self-learner",
            address: "Boston, MA USA"
        },
        {
            avatar: avt2,
            story: "My job requires me to work with a number of Japanese companies. Reports in English usually lag a day or so behind, whereas Japanese ones are available instantly. I once tried to read the Japanese reports and was put off by how many kanji I could not read. I didn’t think I could ever learn that much with my tight schedule. After using WaniKani for about a year, I tried to read those reports again. I was amazed by how much I could understand, and my boss is now very keen on sending me to the Tokyo office to further my career.",
            fullname: "Izzat Yuu",
            role: "Future Japanese Resident",
            address: "Kuala Lumpur, Malaysia"
        },
        {
            avatar: avt3,
            story: "I started learning Japanese about a year ago. I was learning kanji and vocabulary through my Japanese textbooks, but very little stuck. Memorizing the kanji felt like an impossible task and I was close to giving up. Then I started WaniKani, which made learning kanji simple and actually fun. The SRS and leveling structure made sure I never accidentally overwhelmed myself. The mnemonics ensured that every kanji and vocabulary would stick in my memory. After a year, I can now read over 1,000 kanji. I can navigate Japanese websites with comfort. I can read some of my favorite manga and actually enjoy it. Most importantly, at least in my opinion, I can put more focus into trying to learn Japanese grammar, knowing that WaniKani has me covered when it comes to kanji.",
            fullname: "Shagun Agrawal",
            role: "Self-learner",
            address: "California, USA"
        },
        {
            avatar: avt4,
            story: "I’ve lived in Japan for eight years and never managed to learn much Japanese. As a result, I’ve often felt embarrassed by my progress. Earlier this year I joined WaniKani and decided to get serious. I started on January 2nd and have studied every day since then, either reviewing or learning something new. The confidence I’ve gained has helped me to put myself out there and use Japanese in my everyday life. I would ask my wife before going somewhere that involved Japanese. Now I can just do it on my own.",
            fullname: "Brian Neale",
            role: "Japan Resident",
            address: "Japan"
        }
    ];
    return (
        <div className="stories-container">
            {stories.map((story, index) => (
                <div key={index} className="story">
                    <div className="story-avatar">
                        <img src={story.avatar} alt={`${story.fullname}'s avatar`} />
                    </div>
                    <div className="story-content">
                        <p className="story-detail">{story.story}</p>
                        <span className="fullname"><strong>{story.fullname}</strong></span>,<span> {story.role}</span> <br />
                        <div className="address">
                            <i class="fa-solid fa-earth-americas"></i><p>{story.address}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Stories;