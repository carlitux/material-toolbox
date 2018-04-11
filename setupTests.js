// eslint-disable-next-line
const Enzyme = require('enzyme');
// eslint-disable-next-line
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });
