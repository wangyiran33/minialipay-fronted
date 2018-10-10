const fs = require("fs");
const path = require("path");
const args = process.argv.slice(2);
if (!args[0]) {
  console.log("请在参数中指明要创建的Page名（如 LoginPage）");
  process.exit(-1);
}

if (!args[0].endsWith("Page")) {
  console.log("为统一，Page名请统一以Page结尾（大小写区分，如 LoginPage）");
  process.exit(-1);
}

let pageName = args[0];

pageName = pageName[0].toUpperCase() + pageName.substr(1);

const template = `import React, { Component } from 'react';
import { Button } from "antd-mobile";
import createPage from "../basePage";
import styles from "./index.module.scss"

export default class ${pageName} extends Component {

  pageTitle = "${pageName}";

  render() {
    return createPage.call(this, <div className={styles.root}>
        <Button onClick={() => this.close("pageResult")}>${pageName}</Button>
    </div>);
  }
}
`;

const scssTemplate = `.root{
}`;

fs.mkdirSync(path.join(__dirname, `../src/pages/${pageName}`));
fs.writeFileSync(path.join(__dirname, `../src/pages/${pageName}/index.js`), template, {encoding: "UTF8"});
fs.writeFileSync(path.join(__dirname, `../src/pages/${pageName}/index.module.scss`), scssTemplate, {encoding: "UTF8"});


console.log(`创建成功： src/pages/${pageName}`);
console.log(`使用方法： showPage(${pageName}, {...props}, {...options}).then(result => console.log("Page result:", result));`);
