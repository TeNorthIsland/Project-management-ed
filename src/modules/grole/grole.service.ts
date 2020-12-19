import { Body, Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { GlobalRole } from 'src/model/GlobalRole/globalRole.model';
import { Pagination, QueryPage, QueryStructure } from 'src/utils/pageations';

@Injectable()
export class GroleService {
  // 构造器
  constructor(
    @InjectModel(GlobalRole) private readonly GlobalRoleModel: ModelType<GlobalRole>,
  ) { }


  // 查询角色 默认分页。支持多字段查询
  async getGRoleList(req: any) {
    let { page, pagasize } = QueryPage(req)
    // 查询
    return await Pagination(this.GlobalRoleModel).page(page).size(pagasize).display(5)
      .find({})
      .exec()
  }

  // 创建角色
  async createGRole(body: GlobalRole) {
    return await this.GlobalRoleModel.create(body)
  }

  // 编辑角色
  async editeGRole(req: any, body: GlobalRole) {
    let { _id } = QueryStructure(req)
    return await this.GlobalRoleModel.findByIdAndUpdate(_id, body)
  }

  // 删除角色 可以批量删除
  async deleteRole(req: any) {
    let { idList } = QueryStructure(req)

    let List = idList.split(',')
    List.forEach(async (v) => {
      return await this.GlobalRoleModel.findByIdAndDelete(v)
    })


  }
}
