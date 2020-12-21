import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { PmLable } from 'src/model/ProjectM/lable.model';
import { Pagination, QueryPage, QueryStructure } from 'src/utils/pageations';

@Injectable()
export class ProJectMService {

  // 构造器
  constructor(
    @InjectModel(PmLable) private readonly PmLableModel: ModelType<PmLable>,
  ) { }


  // 查询标注信息 默认分页。支持多字段查询
  async getPmLableList(req: any) {
    let { page, pagasize } = QueryPage(req)
    // 查询
    return await Pagination(this.PmLableModel).page(page).size(pagasize).display(5)
      .find({})
      .exec()
  }

  // 创建标注
  async createPmLable(body: PmLable) {
    return await this.PmLableModel.create(body)
  }

  // 编辑标注
  async editePmLable(req: any, body: PmLable) {
    let { _id } = QueryStructure(req)
    return await this.PmLableModel.findByIdAndUpdate(_id, body)
  }

  // 删除标注 可以批量删除
  async deletePmLable(req: any) {
    let { idList } = QueryStructure(req)

    let List = idList.split(',')
    List.forEach(async (v) => {
      return await this.PmLableModel.findByIdAndDelete(v)
    })


  }
}
