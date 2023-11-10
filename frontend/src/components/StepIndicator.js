// StepIndicator.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StepIndicator = ({ steps, currentStep }) => {
  return (
    <View style={styles.container}>
      {steps.map((step, index) => (
        <View
          key={index}
          style={[
            styles.step,
            index === currentStep && styles.activeStep,
          ]}
        >
          <Text style={styles.stepText}>{step}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    gap: 10,
  },
  step: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
  },
  activeStep: {
    backgroundColor: "#ACC26F",
  },
  stepText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default StepIndicator;
