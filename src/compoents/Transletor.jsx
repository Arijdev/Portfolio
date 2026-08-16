import React,{ useState } from 'react'
// import { GoogleTranslate } from 'react-google-translate';
import axios from 'axios';

export default function Transletor() {
    const [text, setText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [sourceLang, setSourceLang] = useState('en');
    const [targetLang, setTargetLang] = useState('hi');

    const API_KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

    const handleTranslate = async () => {
        const url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
        
        try {
            const response = await axios.post(url, {
                q: text,
                source: sourceLang,
                target: targetLang,
                format: 'text'
            });
            setTranslatedText(response.data.data.translations[0].translatedText);
        } catch (error) {
            console.error("Error translating text:", error);
        }
    };

    return (
        <div className="translate-container">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text"
            />
            <select onChange={(e) => setSourceLang(e.target.value)} value={sourceLang}>
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                {/* Add more languages as needed */}
            </select>
            <select onChange={(e) => setTargetLang(e.target.value)} value={targetLang}>
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                {/* Add more languages as needed */}
            </select>
            <button onClick={handleTranslate}>Translate</button>
            <p>Translated Text: {translatedText}</p>
        </div>
    );
}
