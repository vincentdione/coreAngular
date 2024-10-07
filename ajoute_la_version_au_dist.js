const fs = require("fs");
const pathFichierVersion = "./dist/videko-ihm/version.json";
if (fs.existsSync(pathFichierVersion)) {
  fs.unlinkSync(pathFichierVersion);
}

const packageJson = require("./package.json");
const json = {
  version: packageJson.version,
};

// On génère le fichier version.json avec la version du package
fs.writeFileSync(pathFichierVersion, JSON.stringify(json), "utf8");
console.log(`Version ${packageJson.version} ajoutée à ${pathFichierVersion}`);
