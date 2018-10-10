var fs = require("fs");
var path = require("path");

module.exports = function (context) {
  var Q = context.requireCordovaModule('q');
  var deferral = new Q.defer();

  if (context.opts.plugin.id === "cordova-plugin-telerik-imagepicker") {
    var content = fs.readFileSync(path.join(context.opts.plugin.dir, "plugin.xml"), {encoding: "UTF8"});
    content = content.replace(/<preference\s*name="PHOTO_LIBRARY_USAGE_DESCRIPTION"[\s\S]+?<\/config-file>/, "");
    fs.writeFileSync(path.join(context.opts.plugin.dir, "plugin.xml"), content, {encoding: "UTF8"});
  } else if (context.opts.plugin.id === "cordova-plugin-fingerprint-aio") {
    var content = fs.readFileSync(path.join(context.opts.plugin.dir, "plugin.xml"), {encoding: "UTF8"});
    content = content.replace(/<preference\s*name="FACEID_USAGE_DESCRIPTION"[\s\S]+?<\/config-file>/, "");
    fs.writeFileSync(path.join(context.opts.plugin.dir, "plugin.xml"), content, {encoding: "UTF8"});
  }


  var iosJsonPath = path.join(__dirname, "../platforms/ios/ios.json");
  var content = fs.readFileSync(iosJsonPath, {encoding: "UTF8"});
  content = content.replace(/,\s+?"\*-Info\.plist"[\s\S]+?}\s+?}/, "");
  fs.writeFileSync(iosJsonPath, content, {encoding: "UTF8"});

  deferral.resolve();
  return deferral.promise;
};