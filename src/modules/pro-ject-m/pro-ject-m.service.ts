import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { ProjectComment } from 'src/model/ProjectDetails/ProjectComment.model';
import { PmLable } from 'src/model/ProjectM/lable.model';
import { Pagination, QueryPage, QueryStructure } from 'src/utils/pageations';

@Injectable()
export class ProJectMService {

  // 构造器
  constructor(
    @InjectModel(PmLable) private readonly PmLableModel: ModelType<PmLable>,
    @InjectModel(ProjectComment) private readonly ProjectCommentModel: ModelType<ProjectComment>,
  ) { }


  // -----------------------------项目标注接口i-----------------
  // 查询标注信息 默认分页。支持多字段查询
  async getPmLableList(req: any) {
    let { current, pageSize, } = QueryPage(req)
    // 查询
    let res = await Pagination(this.PmLableModel).page(current).size(pageSize).display(5).find({}).exec()
    return {
      sucess: true,
      data: {
        total: res.total,
        current: res.page,
        pageSize: res.size,
        totalPage: res.pages,
        data: res.records
      }
    }
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
    return {
      sucess: true,
      message: '删除成功！'
    }


  }

  // -----------------------------项目怕评论接口-----------------
  // 查询评论信息 默认分页。支持多字段查询
  async getProjectCommentList(req: any) {
    let { current, pageSize, } = QueryPage(req)
    // 查询
    let res = await Pagination(this.ProjectCommentModel).page(current).size(pageSize).display(5).find({}).exec()
    return {
      sucess: true,
      data: {
        total: res.total,
        current: res.page,
        pageSize: res.size,
        totalPage: res.pages,
        data: res.records
      }
    }
  }

  // 创建评论
  async createProjectComment(body: ProjectComment) {
    return await this.ProjectCommentModel.create(body)
  }


  // 删除评论 可以批量删除
  async deleteProjectComment(req: any) {
    let { idList } = QueryStructure(req)
    let List = idList.split(',')
    List.forEach(async (v) => {
      return await this.ProjectCommentModel.findByIdAndDelete(v)
    })
    return {
      sucess: true,
      message: '删除成功！'
    }
  }
}
