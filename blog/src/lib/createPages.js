// import { CreatePagesArgs } from 'gatsby';
const path = require('path'); //import 대신 const, require을 사용!
const {CreatePagesArgs} = require('gatsby');

const pages = [
    {id:1, content:'Gatsby 로 블로그 만들기'},
    {id:2, content:'하나하나 따라해보기'},
    {id:3, content:'조금씩 나아가기!'},
];

async function createPages({actions,CreatePagesArgs}) {
    const { createPage } = actions;
    pages.forEach(page => {
        createPage({
            path: page.id.toString(),
            context: page,
            component:path.resolve(__dirname, '../templates/PostTemplate.js'),
        });
    });
    console.log("that's work!!");
}

exports.createPages = createPages;