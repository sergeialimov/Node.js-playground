const exportConst1 = 1;
const exportConst2 = 2;

module.exports.exportConst1 = exportConst1;
module.exports = { exportConst2 };

// Possible fixes
module.exports = { exportConst1, exportConst2 };

// or
module.exports.exportConst1 = exportConst1;
module.exports.exportConst2 = exportConst2;
