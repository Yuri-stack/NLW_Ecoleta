import knex from 'knex'
import path from 'path'     //bbl ajuda a criar um caminho nas pastas (database, index;js == database\index.js)

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite' ) //__dirname retorna o caminho do diretorio do arquivo atual
    },
    useNullAsDefault: true
})

export default connection