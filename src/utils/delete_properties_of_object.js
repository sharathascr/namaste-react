import { file } from "./json_file.js";
import fs from "fs";

const outputPath = "./outputFile.js";

file.forEach((res) => {
  delete res.card["@type"];
  delete res.card.info.variants;
  delete res.card.info.variantsV2;
  delete res.card.info.addons;
  delete res.card.info.itemAttribute;
  delete res.card.info.ribbon;
  delete res.card.info.showImage;
  delete res.card.info.itemBadge;
  delete res.card.info.badgesV2;
  delete res.card.analytics;
  delete res.card.hideRestaurantDetails;
});

const fileContent = `const cakezone= ${JSON.stringify(file, null, 2)}\n\n`;
// console.log(file);
fs.writeFile(outputPath, fileContent, (err) => {
  if (err) {
    console.error("Error writing to file: ", err);
  } else {
    console.log("Updated data saved to outputfile");
  }
});
