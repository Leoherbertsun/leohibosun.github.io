import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const files = ['index.html', 'css/personal-home.css', 'js/personal-home.js', 'img/personal-home-art.png'];
const destinations = [path.join(root, 'docs')];
const sitesRoot = process.argv[2];
if (sitesRoot) {
  const manifest = JSON.parse(await readFile(path.join(sitesRoot, '.openai/hosting.json'), 'utf8'));
  if (manifest.project_id !== 'appgprj_6ac4b7a984c08191b59c1085812ea5cd' || manifest.static?.directory !== 'dist') {
    throw new Error('The selected Sites project does not match this homepage.');
  }
  destinations.push(path.join(sitesRoot, 'dist'));
}
for (const destination of destinations) {
  for (const file of files) {
    await mkdir(path.dirname(path.join(destination, file)), { recursive: true });
    await copyFile(path.join(root, file), path.join(destination, file));
  }
  await writeFile(path.join(destination, '.nojekyll'), '');
}
console.log(`Synchronized ${files.length} homepage files to ${destinations.length} destination(s).`);
