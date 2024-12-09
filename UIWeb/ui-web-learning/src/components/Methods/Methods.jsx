import React from "react";

import './Methods.css';

import img1 from "../../assets/images/methods-mnemonics.jpg";
import img2 from "../../assets/images/methods-radicals.jpg";
import img3 from "../../assets/images/methods-kanji.png";
import img4 from "../../assets/images/methods-vocabulary.png";
import img5 from "../../assets/images/methods-lesson-review.png";
import img6 from "../../assets/images/methods-space.png";

const Methods = () => {
    const arrMethods = [
        {
            image: img1,
            name: "Mnemomics",
            description: "WaniKani has mnemonics to teach you every single radical, kanji, and vocabulary word on the site. Waste less time, memorize and recall way more."
        },
        {
            image: img2,
            name: "Radicals",
            description: "Radicals are building blocks for learning kanji. You’ll use them to create kanji (forget about individual strokes) and make mnemonics that allow you to memorize a kanji in seconds, not days or weeks."
        },
        {
            image: img3,
            name: "Kanji",
            description: "Learn over 2,000 kanji, hand-picked and cleverly ordered, so you can learn the kanji meanings and readings more efficiently. A Japanese schoolchild will spend eight years doing what you can do in a year and a half."
        },
        {
            image: img4,
            name: "Vocabulary",
            description: "Kanji is great, but it’s not very useful without vocabulary. Learn over 6,000 Japanese words, all carefully validated by a human to be common or useful."
        },
        {
            image: img5,
            name: "Lessons & Reviews",
            description: "Radicals, kanji, and vocabulary are taught to you through lessons using mnemonics. Practice learned items via reviews until recalling them is second nature."
        },
        {
            image: img6,
            name: "Spaced Repetition System",
            description: "WaniKani is more than just flashcards. Our SRS algorithm adjusts time between reviews for each individual item, calculated by your last session. You will see a radical, kanji, or vocabulary in your reviews at the optimal time for you, not anybody else."
        }
    ];
    return (
        <div id="methods" className="methods-container">
            {arrMethods.map((method, index) => (
                <div key={index} className="method">
                    <img className="method-image" src={method.image} alt={method.name} />
                    <div className="method-name">{method.name}</div>
                    <div className="method-description">{method.description}</div>
                </div>
            ))}
        </div>
    )
}

export default Methods;