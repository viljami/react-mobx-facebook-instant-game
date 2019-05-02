
const {atan} = Math;

const nn = [ // completely random values (untrained network)
  [0.1, 0.2, 0.3, -0.1],
  [0.1, 0.2, 0.3, 0.01, -0.2],
  [0.1, 0.2, 0.3, 0.9, -0.1],
  [0.7]
];

export default (...inputs) => {
  const outputs = nn.reduce((a, b) =>
    b.map(c => a.reduce((d, e) => atan(d + c * e), 0))
  , inputs)

  return outputs.length === 1 ? outputs[0] : outputs;
};
