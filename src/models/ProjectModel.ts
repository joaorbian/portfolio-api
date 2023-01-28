import db from '../config/db'

export async function createProjectTable() {
  db.query(`
    CREATE TABLE IF NOT EXISTS projects(
      project_id INT PRIMARY KEY AUTO_INCREMENT,
      created_at DATETIME NOT NULL,
      updated_at DATETIME NOT NULL,
      title varchar(255) NOT NULL,
      description longtext NOT NULL,
      website varchar(255) NOT NULL,
      git varchar(255) NOT NULL)
  `);
}
