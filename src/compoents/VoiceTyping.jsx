import React, { useState, useEffect } from 'react';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const VoiceTypingSection = () => {
  const [transcription, setTranscription] = useState('');
  const [status, setStatus] = useState('');
  const [listening, setListening] = useState(false);
  const [language, setLanguage] = useState('en-US');

  useEffect(() => {
    recognition.lang = language;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');
      setTranscription(transcript);
    };

    recognition.onend = () => {
      setListening(false);
      setStatus('Speech recognition stopped.');
    };

    recognition.onerror = (event) => {
      setStatus(`Error occurred: ${event.error}`);
    };
  }, [language]);

  const startRecognition = () => {
    recognition.start();
    setListening(true);
    setStatus('Listening...');
  };

  const stopRecognition = () => {
    recognition.stop();
    setListening(false);
    setStatus('Click "Start" to begin speech recognition');
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    setStatus(`Language set to ${e.target.selectedOptions[0].textContent}`);
  };

  const sectionStyle = {
    textAlign: 'center',
    height:'88vh'
  };

  const textAreaStyle = {
    width: '100%',
    height: '200px',
    padding: '0.5rem',
    fontSize: '1rem',
    marginBottom: '1rem',
  };

  const statusStyle = {
    marginBottom: '1rem',
  };

  return (
    <section id="voiceTypingSection" style={sectionStyle}>
      <h2>Start Speaking</h2>
      <textarea
        id="transcription"
        value={transcription}
        placeholder="Speak here..."
        readOnly
        style={textAreaStyle}
      />
      <div id="status" style={statusStyle}>{status}</div>
      <button onClick={listening ? stopRecognition : startRecognition} style={{marginRight:'5px',background:'blanchedalmond'}}>
        {listening ? 'Stop' : 'Start'}
      </button>
      <select id="languageSelect" value={language} onChange={handleLanguageChange}>
        <option value="en-US">English (US)</option>
        <option value="en-GB">English (UK)</option>
        <option value="bn">Bengali</option>
        {/* Add more language options here */}
      </select>
    </section>
  );
};

export default VoiceTypingSection;
