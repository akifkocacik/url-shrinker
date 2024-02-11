const fs = require('node:fs');
const { uuid } = require('uuidv4');

export const readFromDb = () => {
  try {
    let data = fs.readFileSync('./src/backend/db.txt', 'utf8');

    if (!data.length) data = '[]';

    return JSON.parse(data);
  } catch (err) {
    console.error(err);
  }
};

export const saveToDb = (content) => {
  const urlId = uuid().slice(0, 5);
  let data = readFromDb();
  const dataToPush = { id: urlId, content };
  data.push(dataToPush);

  try {
    fs.writeFileSync('./src/backend/db.txt', JSON.stringify(data));
    const result = urlId;

    return result;
  } catch (error) {
    throw new Error('File write went wrong');
  }
};

export const findById = (id) => {
  let data = readFromDb();
  const found = data.find((element) => element.id === id);
  if (!found) {
    return undefined;
  }
  return found.content;
};
