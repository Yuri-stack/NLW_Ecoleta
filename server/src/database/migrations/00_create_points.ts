import Knex from 'knex' //Knex com K maisc. refere ao tipo

export async function up(knex: Knex){   //serve para realizar as alterações no banco
    return knex.schema.createTable('points', table => {
        table.increments('id').primary()
        table.string('image').notNullable()
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('whatsapp').notNullable()
        table.decimal('latitude').notNullable()
        table.decimal('longitude').notNullable()
        table.string('city').notNullable()
        table.string('uf', 2).notNullable()
        })
}

export async function down(knex: Knex){   //server para voltar desfazer as alterações feita da UP
    return knex.schema.dropTable('point')
}