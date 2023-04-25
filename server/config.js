export const host = process.env.HOST || '0.0.0.0';
export const port = process.env.PORT || 3000;
export const db = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'root',
  database: process.env.DB_NAME || 'tasks',
};

export const dbSql = `
  CREATE TABLE IF NOT EXISTS \`tasks\` (
    \`id\` int(11) NOT NULL AUTO_INCREMENT,
    \`title\` varchar(255) NOT NULL,
    \`completed\` tinyint(1) NOT NULL DEFAULT '0',
    PRIMARY KEY (\`id\`)
  ) CHARSET=utf8;
`;
