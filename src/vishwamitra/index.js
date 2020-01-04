import Brain, { likely } from "brain.js";
import trainingData from "./data";

const neuralNet = new Brain.NeuralNetwork();

neuralNet.train(trainingData);

export const guess = ({ r, g, b }) => {
  return likely(
    {
      r: Number((r / 255).toFixed(3)),
      g: Number((g / 255).toFixed(3)),
      b: Number((b / 255).toFixed(3))
    },
    neuralNet
  );
};

export default {
  guess
};
