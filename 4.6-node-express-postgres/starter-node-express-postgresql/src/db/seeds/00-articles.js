/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const articles = [
  { article_title: "Article 1", article_content: "This is some content." },
  { article_title: "Article 2", article_content: "This is some content." },
  { article_title: "Article 3", article_content: "This is some content." },
];

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE articles RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("articles").insert(articles);
    });
};