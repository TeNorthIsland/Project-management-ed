import * as Pagination from 'mongoose-sex-page'
const _ = require('lodash')



/**
 * 描述
 * @date 2020-12-21
 * @param {any} request请求参数
 * @returns {any} 解构之后的对象
 */
const QueryPage = (req) => {
  let current = +req.query.current;
  let pageSize = +req.query.pageSize || null;  // 默认显示多少页
  if (!current || !_.isNumber(current)) current = 1;
  return {
    pageSize,
    current,
    ...req.query
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
