export default (...reducers) => (previous, current) =>
  reducers.reduce((p, r) => r(p, current), previous);
