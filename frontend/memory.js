const path = require('path');
const Database = require('better-sqlite3');
const config = require('./config');

const dbFile = config.MEM_DB || path.join(__dirname, 'memory.sqlite');
let db;
 codex/adapt-lowe’s-deck-designer-features-to-deckchatbot

 codex/clean-up-project-and-verify-routing
try {
  db = new Database(dbFile);
} catch (err) {
  if (err.code === 'SQLITE_CANTOPEN') {
    console.error(`Failed to open or create the database file at "${dbFile}". Please check file permissions or the path exists.`);
  } else {
    console.error('Failed to initialize the database:', err.message);
  }
  process.exit(1);

 main
let inMemoryMessages = [];
let inMemoryMeasurements = [];
try {
  db = new Database(dbFile);
} catch (err) {
  console.error('Failed to initialize the database, falling back to in-memory storage:', err.message);
  db = null;
 codex/adapt-lowe’s-deck-designer-features-to-deckchatbot

 main
 main
}

db.exec(`
CREATE TABLE IF NOT EXISTS messages (
 codex/adapt-lowe’s-deck-designer-features-to-deckchatbot
  id INTEGER PRIMARY KEY AUTOINCREMENT,

 codex/clean-up-project-and-verify-routing
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  id INTEGER PRIMARY KEY,
 main
 main
  role TEXT NOT NULL,
  content TEXT NOT NULL,
  timestamp INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS measurements (
 codex/adapt-lowe’s-deck-designer-features-to-deckchatbot

 codex/clean-up-project-and-verify-routing
 main
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  data TEXT NOT NULL,
  timestamp INTEGER NOT NULL
);`);

 codex/adapt-lowe’s-deck-designer-features-to-deckchatbot

  id INTEGER PRIMARY KEY,
  data TEXT NOT NULL,
  timestamp INTEGER NOT NULL
);`);

 main
/**
 * Adds a chat message to the database.
 * @param {'user'|'assistant'} role
 * @param {string} content
 */
function addMessage(role, content) {
 codex/adapt-lowe’s-deck-designer-features-to-deckchatbot
  const entry = { role, content, timestamp: Date.now() };
  if (db) {

const entry = { role, content, timestamp: Date.now() };
if (db) {
 main
    try {
      const stmt = db.prepare(
        'INSERT INTO messages (role, content, timestamp) VALUES (?, ?, ?)'
      );
      stmt.run(role, content, entry.timestamp);
    } catch (err) {
      console.error('Error adding message to database:', err);
    }
 codex/adapt-lowe’s-deck-designer-features-to-deckchatbot
  } else {
    inMemoryMessages.push(entry);
  }
}

} else {
  inMemoryMessages.push(entry);
}
}
 main
 main
/**
 * Adds a measurement to the database.
 * @param {any} data - The measurement data to store (will be stringified as JSON).
 */
function addMeasurement(data) {
 codex/adapt-lowe’s-deck-designer-features-to-deckchatbot
  const entry = { id: Date.now(), data, timestamp: Date.now() };
  if (db) {

 codex/clean-up-project-and-verify-routing
  try {
    const stmt = db.prepare('INSERT INTO measurements (data, timestamp) VALUES (?, ?)');
    stmt.run(JSON.stringify(data), Date.now());
  } catch (err) {
    console.error('Error adding measurement to database:', err);
    throw err;
  }

  const entry = { data, timestamp: Date.now() };
 main
    try {
      const stmt = db.prepare('INSERT INTO measurements (data, timestamp) VALUES (?, ?)');
      stmt.run(JSON.stringify(data), entry.timestamp);
    } catch (err) {
      console.error('Error adding measurement to database:', err);
      throw err;
    }
 codex/adapt-lowe’s-deck-designer-features-to-deckchatbot
  } else {
    inMemoryMeasurements.push(entry);
  }

  inMemoryMeasurements.push(entry);
 main
 main
}

/**
 * Retrieves all measurements from the database.
 * @returns {({id: number, data: any, timestamp: number})[]}
 */
function getAllMeasurements() {
 codex/adapt-lowe’s-deck-designer-features-to-deckchatbot

 codex/clean-up-project-and-verify-routing
  try {
    const stmt = db.prepare('SELECT * FROM measurements ORDER BY timestamp DESC');
    const rows = stmt.all();
    return rows.map(row => ({
      ...row,
      data: JSON.parse(row.data)
    }));
  } catch (err) {
    console.error('Error retrieving measurements:', err);
    return [];
  }

 main
  if (db) {
    try {
      const stmt = db.prepare('SELECT * FROM measurements ORDER BY timestamp DESC');
      const rows = stmt.all();
      return rows.map(row => ({
        ...row,
        data: JSON.parse(row.data)
      }));
    } catch (err) {
      console.error('Error retrieving measurements:', err);
      return [];
    }
  }
  return [...inMemoryMeasurements];
 codex/adapt-lowe’s-deck-designer-features-to-deckchatbot
=======
 main
 main
}

/**
 * Clears all messages and measurements from the database.
 */
function clearMemory() {
 codex/adapt-lowe’s-deck-designer-features-to-deckchatbot

 codex/clean-up-project-and-verify-routing
  try {
    db.prepare('DELETE FROM messages').run();
    db.prepare('DELETE FROM measurements').run();
  } catch (err) {
    console.error('Error clearing memory:', err);
    throw err;

 main
  if (db) {
    try {
      db.prepare('DELETE FROM messages').run();
      db.prepare('DELETE FROM measurements').run();
    } catch (err) {
      console.error('Error clearing memory:', err);
      throw err;
    }
  } else {
    inMemoryMessages = [];
    inMemoryMeasurements = [];
 codex/adapt-lowe’s-deck-designer-features-to-deckchatbot

 main
 main
  }
}

/**
 * Retrieves the most recent messages from the database.
 * @param {number} [limit=10] - The maximum number of messages to retrieve.
 * @returns {Array<{id: number, role: string, content: string, timestamp: number}>}
 */
function getRecentMessages(limit = 10) {
 codex/adapt-lowe’s-deck-designer-features-to-deckchatbot

 codex/clean-up-project-and-verify-routing
  try {
    const stmt = db.prepare('SELECT * FROM messages ORDER BY timestamp DESC LIMIT ?');
    return stmt.all(limit);
  } catch (err) {
    console.error('Error retrieving recent messages:', err);
    return [];
  }

 main
  if (db) {
    try {
      const stmt = db.prepare('SELECT * FROM messages ORDER BY timestamp DESC LIMIT ?');
      return stmt.all(limit);
    } catch (err) {
      console.error('Error retrieving recent messages:', err);
      return [];
    }
  }
  return inMemoryMessages.slice(-limit).reverse();
 codex/adapt-lowe’s-deck-designer-features-to-deckchatbot

 main
 main
}

/**
 * Cleans up temporary files created during processing.
 * @param {string} filePath - The path to the temporary file to delete.
 */
function cleanTempFile(filePath) {
  try {
    const fs = require('fs');
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  } catch (err) {
    console.error('Error cleaning temp file:', err);
  }
}

module.exports = {
 codex/adapt-lowe’s-deck-designer-features-to-deckchatbot

 codex/clean-up-project-and-verify-routing
 main
  addMessage,
  addMeasurement,
  getAllMeasurements,
  clearMemory,
  getRecentMessages,
  cleanTempFile
 codex/adapt-lowe’s-deck-designer-features-to-deckchatbot


  addMeasurement,
  addMessage,
  cleanTempFile,
  clearMemory,
  getAllMeasurements,
  getRecentMessages
 main
 main
};
