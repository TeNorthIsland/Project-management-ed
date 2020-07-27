import * as Pagination  from 'mongoose-sex-page'

let _ = require('lodash')

let QueryPage = (req) =>  {
  let page = +req.query.page;
  let pagasize = +req.query.size || null;  // 默认显示多少页
  if (!page || !_.isNumber(page)) page = 1;
  return {
    page, pagasize    
  }
}

// 结构所有的查询语句，
let QueryStructure  = (req):any =>{

  let obj = req.query
  let structure = {}
  for (let key in obj) {
    structure[key] = obj[key]
  }

  return {
    ...structure
  }
}

export { QueryPage,QueryStructure,Pagination}
