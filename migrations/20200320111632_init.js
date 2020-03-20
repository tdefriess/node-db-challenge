
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();

        tbl.string('project_name', 128)
            .notNullable();
        
        tbl.text('project_description');

        tbl.boolean('completed')
            .defaultTo(false)
            .notNullable();
    })
    .createTable('resources', tbl => {
        tbl.increments();

        tbl.string('resource_name', 128)
            .notNullable()
            .unique();

        tbl.text('resource_description');
    })
    .createTable('tasks', tbl => {
        tbl.increments();

        tbl.text('task_description')
            .notNullable();

        tbl.text('notes');

        tbl.boolean('completed')
            .defaultTo(false)

        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
    })
    .createTable('project_resources', tbl => {
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT');
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT');
        tbl.primary(['project_id', 'resource_id']);
    })
};

exports.down = function(knex) {
    knex.schema.dropTable('project_resources')
        .dropTable('tasks')
        .dropTable('resources')
        .dropTable('projects')
};
