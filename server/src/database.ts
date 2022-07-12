import md5 from 'md5'
import sqlite3 from 'sqlite3'

const DB_SOURCE = 'db.sqlite'

const createDatabase = `
    CREATE TABLE user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name text, 
        email text UNIQUE, 
        password text, 
        CONSTRAINT email_unique UNIQUE (email)
    )
`

const db = new sqlite3.Database(DB_SOURCE, (err: Error | null) => {
    if(err)
        throw err

    db.run(createDatabase, (err: Error | null) => {
        if(err)
            throw err
    })
})

export default db
