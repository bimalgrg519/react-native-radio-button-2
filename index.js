import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const RadioForm = ({ values, selectedValue, onPress, buttonColor }) => (
  <View style={{ flexDirection: "row" }}>
    {values.map(({ label, value }) => (
      <TouchableOpacity
        key={label}
        style={{ flexDirection: "row", marginRight: 10 }}
        onPress={() => onPress(value)}
      >
        <View
          style={{
            width: 18,
            height: 18,
            borderRadius: 9,
            borderWidth: 2,
            borderColor: buttonColor,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 5
          }}
        >
          {selectedValue === value && (
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: buttonColor
              }}
            />
          )}
        </View>
        <Text style={{ color: "#ffffff", fontSize: 12 }}>{label}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default RadioForm;
