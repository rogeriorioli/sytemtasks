
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('tasks').del()
      .then(function () {
        // Inserts seed entries
        return knex('tasks').insert(
          { title:'hhgshdgshd', description:'fazer coco', deadline:'12/11/20', user_id:'0f4a3e1f9f1736548503' });
      });
  };
  