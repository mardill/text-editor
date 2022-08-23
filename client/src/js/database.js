import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('putDb not implemented')
  console.log('PUT to the database');

  const todosDb = await openDB('jate', 1);
  const tx = todosDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ content: content });
  const result = await request;
  console.log('🚀 - data saved to the database', result);
}

// gets all content from the database
export const getDb = async () => {
  console.error('getDb not implemented')
  console.log('GET from the database');

  const contactDb = await openDB('jate', 1);
  const tx = contactDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
