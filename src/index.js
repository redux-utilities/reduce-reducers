export default (...reducers) => (previous, current, ...args) =>
  reducers.reduce((p, r) => r(p, current, ...args), previous);
