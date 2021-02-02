'use strict';

const { defineFeature, loadFeature } = require("jest-cucumber");

const feature = loadFeature("./test/features/foobar.feature");
console.log(JSON.stringify(feature, null, 2))

defineFeature(feature, (test) => {
  let todoList;

  beforeEach(() => {
    todoList = {
      items: []
    };
  });

  test("Adding an item to my todo list", ({ given, when, then }) => {
    given("my todo list currently looks as follows:", (table) => {
      console.log('given...', table)
      // table.forEach((row) => {
      //   todoList.items.push({
      //     name: row.TaskName,
      //     priority: row.Priority,
      //   });
      // });
    });

    when("I add the following task:", (table) => {
      console.log('when...', table)
      // todoList.items.push({
      //   name: table[0].TaskName,
      //   priority: table[0].Priority,
      // });
    });

    then("I should see the following todo list:", (table) => {
      console.log('then...', table)
      // expect(todoList.items.length).toBe(table.length);

      // table.forEach((row, index) => {
      //   expect(todoList.items[index].name).toBe(table[index].TaskName);
      //   expect(todoList.items[index].priority).toBe(table[index].Priority);
      // });
    });
  });
});
