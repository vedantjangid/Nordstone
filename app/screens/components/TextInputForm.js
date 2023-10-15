import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

const TextInputForm = ({ onTextSubmit }) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim() !== "") {
      onTextSubmit(text);
      setText("");
    }
  };

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={(newText) => setText(newText)}
        placeholder="Enter your text"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default TextInputForm;
