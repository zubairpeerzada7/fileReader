import JSZip from "jszip";
const parser = require("fast-xml-parser");
export const constructData = async (files, searchText) => {
  try {
    var data = [];
    console.log({ files });
    for (let i = 0; i < files.length; i++) {
      if (files[i].name.toLowerCase().includes(".docx")) {
        const file = files[i];
        const zip = new JSZip();
        await zip.loadAsync(file);

        const s = await zip.file("word/document.xml").async("string");

        const options = {
          attributeNamePrefix: "@_",
          attrNodeName: "attr", //default is 'false'
          textNodeName: "#text",
          ignoreAttributes: true,
          ignoreNameSpace: false,
          allowBooleanAttributes: false,
          parseNodeValue: true,
          parseAttributeValue: false,
          trimValues: true,
          cdataTagName: "__cdata", //default is 'false'
          cdataPositionChar: "\\c",
          localeRange: "", //To support non english character in tag/attribute values.
          parseTrueNumberOnly: false,
        };

        // Intermediate obj
        var tObj = parser.getTraversalObj(s, options);
        var jsonObj = parser.convertToJson(tObj, options);
        console.log({ tObj, jsonObj, s });
      }
    }
  } catch (e) {
    console.log(e);
    return [null, { error: e }];
  }
  console.log("aas");
  return [data, {}];
};
