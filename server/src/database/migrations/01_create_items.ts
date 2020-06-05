import Knex from 'knex' //Knex com K maisc. refere ao tipo

export async function up(knex: Knex){   //serve para realizar as alterações no banco
    return knex.schema.createTable('items', table => {
        table.increments('id').primary()
        table.string('image').notNullable()
        table.string('title').notNullable()
    })
}

export async function down(knex: Knex){   //server para voltar desfazer as alterações feita da UP
    return knex.schema.dropTable('items')
}