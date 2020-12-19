import * as Pagination from 'mongoose-sex-page'
const _ = require('lodash')


const QueryPage = (req) => {
  let page = +req.query.page;
  let pagasize = +req.query.pagasize || null;  // 默认显示多少页
  if (!page || !_.isNumber(page)) page = 1;
  return {
    page, pagasize
  }
}

// 结构所有的查询语句，
const QueryStructure = (req): any => {

  let obj = req.query
  let structure = {}
  for (let key in obj) {
    structure[key] = obj[key]
  }

  return {
    ...structure
  }
}

// antdProTable 结构化查询语句


export { QueryPage, QueryStructure, Pagination }
