import { useState } from "react";

export default function EmojiPicker (): JSX.Element {
const [currentEmoji, queueNewEmoji] = useState("😀");
const [recentEmoji, queueRecentEmoji] = useState("😀");

const handleEmojiChangeToHappy = () => {
    queueNewEmoji("😀");
    queueRecentEmoji(currentEmoji);
  };
  const handleEmojiChangeToClown = () => {
    queueNewEmoji("🤡");
    queueRecentEmoji(currentEmoji);
  };
  const handleEmojiChangeToCat = () => {
    queueNewEmoji("😺");
    queueRecentEmoji(currentEmoji);
  };
  const handleEmojiChangeToAlien = () => {
    queueNewEmoji("👽");
    queueRecentEmoji(currentEmoji);
  };
  const handleEmojiChangeToCowboy = () => {
    queueNewEmoji("🤠");
    queueRecentEmoji(currentEmoji);
  };
return <>
      <h1>Emoji picker</h1>
      <p>Your last emoji: {recentEmoji}</p>
      <p>Current emoji: {currentEmoji}</p>
      <button onClick={handleEmojiChangeToHappy}>😀</button>
      <button onClick={handleEmojiChangeToClown}>🤡</button>
      <button onClick={handleEmojiChangeToCat}>😺</button>
      <button onClick={handleEmojiChangeToAlien}>👽</button>
      <button onClick={handleEmojiChangeToCowboy}>🤠</button>

</>
}

