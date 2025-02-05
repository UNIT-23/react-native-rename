'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bundleIdentifiers = bundleIdentifiers;
// nS - No Space
// lC - Lowercase

function bundleIdentifiers(currentAppName, newName, projectName, currentBundleID, newBundleID, newBundlePath) {
  var nS_CurrentAppName = currentAppName.replace(/\s/g, '');
  var nS_NewName = newName.replace(/\s/g, '');
  var lC_Ns_CurrentBundleID = currentBundleID.toLowerCase();
  var lC_Ns_NewBundleID = newBundleID.toLowerCase();

  return [{
    regex: currentBundleID,
    replacement: newBundleID,
    paths: [
    'android/app/BUCK',
    'android/app/build.gradle',
    'android/app/src/main/AndroidManifest.xml',
    'android/app/bin/src/main/AndroidManifest.xml',
    'android/app/bin/build.gradle'
  ]
  }, {
    regex: currentBundleID,
    replacement: newBundleID,
    paths: ['ios/' + nS_NewName + '.xcodeproj/project.pbxproj', newBundlePath + '/MainActivity.java', newBundlePath + '/MainApplication.java', newBundlePath + '/SplashActivity.java']
  }, {
    regex: lC_Ns_CurrentBundleID,
    replacement: lC_Ns_NewBundleID,
    paths: [newBundlePath + '/MainApplication.java']
  }, {
    regex: nS_CurrentAppName,
    replacement: nS_NewName,
    paths: [newBundlePath + '/MainActivity.java']
  }, {
    regex: nS_CurrentAppName,
    replacement: nS_NewName,
    paths: [newBundlePath + '/SplashActivity.java']
  }];
}