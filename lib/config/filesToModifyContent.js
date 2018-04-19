'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filesToModifyContent = filesToModifyContent;
// nS - No Space
// lC - Lowercase

function filesToModifyContent(currentAppName, newName, currentDisplayName, newDisplayName) {
  var nS_CurrentAppName = currentAppName.replace(/\s/g, '');
  var nS_NewName = newName.replace(/\s/g, '');
  var escapedDisplayName = currentDisplayName.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

  return [{
    regex: '<string name="app_name">' + escapedDisplayName + '</string>',
    replacement: '<string name="app_name">' + newDisplayName + '</string>',
    paths: ['android/app/src/main/res/values/strings.xml']
  }, {
    regex: nS_CurrentAppName,
    replacement: nS_NewName,
    paths: ['index.js', 'index.android.js', 'index.ios.js', 'ios/' + nS_NewName + '.xcodeproj/project.pbxproj', 'ios/' + nS_NewName + '.xcworkspace/contents.xcworkspacedata', 'ios/' + nS_NewName + '.xcodeproj/xcshareddata/xcschemes/' + nS_NewName + '-tvOS.xcscheme', 'ios/' + nS_NewName + '.xcodeproj/xcshareddata/xcschemes/' + nS_NewName + '.xcscheme', 'ios/' + nS_NewName + '/AppDelegate.m', 'android/settings.gradle', 'ios/' + nS_NewName + 'Tests/' + nS_NewName + 'Tests.m', 'ios/' + nS_NewName + 'UITests/' + nS_NewName + 'UITests.m', 'ios/build/info.plist', 'ios/Podfile']
  }, {
    regex: 'text="' + currentAppName + '"',
    replacement: 'text="' + newName + '"',
    paths: ['ios/' + nS_NewName + '/Base.lproj/LaunchScreen.xib']
  }, {
    regex: escapedDisplayName,
    replacement: newDisplayName,
    paths: ['ios/' + nS_NewName + '/Info.plist']
  }, {
    regex: '"name": "' + nS_CurrentAppName + '"',
    replacement: '"name": "' + nS_NewName + '"',
    paths: ['package.json']
  }, {
    regex: '"name": "' + currentAppName + '"',
    replacement: '"name": "' + newName + '"',
    paths: ['app.json']
  }, {
    regex: '"displayName": "' + escapedDisplayName + '"',
    replacement: '"displayName": "' + newDisplayName + '"',
    paths: ['app.json']
  }];
}