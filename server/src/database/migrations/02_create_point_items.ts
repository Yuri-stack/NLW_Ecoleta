import Knex from 'knex' //Knex com K maisc. refere ao tipo

export async function up(knex: Knex){   //serve para realizar as alterações no banco
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary()
        table.integer('point_id').notNullable().references('id').inTable('points')
        table.integer('item_id').notNullable().references('id').inTable('items')
    })
}

export async function down(knex: Knex){   //server para voltar desfazer as alterações feita da UP
    return knex.schema.dropTable('point_items')
}