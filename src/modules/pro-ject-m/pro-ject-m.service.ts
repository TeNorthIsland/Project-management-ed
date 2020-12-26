import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { Project } from 'src/model/ProjectDetails/Project.model';
import { ProjectCategory } from 'src/model/ProjectDetails/ProjectCategory.model';
import { ProjectComment } from 'src/model/ProjectDetails/ProjectComment.model';
import { ProjectMieage } from 'src/model/ProjectDetails/ProjectMileage.model';
import { ProjectRoles } from 'src/model/ProjectDetails/ProjectRoles.model';
import { PmLable } from 'src/model/ProjectM/lable.model';
import { TaskCategroy } from 'src/model/TaskModel/TaskCategroy.model';
import { User } from 'src/model/User/user.model';
import { Pagination, QueryPage, QueryStructure } from 'src/utils/pageations';

@Injectable()
export class ProJectMService {

  private ParsingPage(value, originMethod) {
    return {
      sucess: true,
      data: {
        total: value.total,
        current: value.page,
        pageSize: value.size,
        totalPage: value.pages,
        data: originMethod()
      }
    }
  }

  // 构造器
  constructor(
    // 测试用，删除即删
    @InjectModel(TaskCategroy) private readonly TaskCategroyModel: ModelType<TaskCategroy>,

    @InjectModel(PmLable) private readonly PmLableModel: ModelType<PmLable>,
    @InjectModel(ProjectComment) private readonly ProjectCommentModel: ModelType<ProjectComment>,
    @InjectModel(Project) private readonly ProjectModel: ModelType<Project>,
    @InjectModel(User) private readonly UserModel: ModelType<User>,
    @InjectModel(ProjectCategory) private readonly ProjectCategoryModel: ModelType<ProjectCategory>,
    @InjectModel(ProjectMieage) private readonly ProjectMieageModel: ModelType<ProjectMieage>,
    @InjectModel(ProjectRoles) private readonly ProjectRolesModel: ModelType<ProjectRoles>,

  ) { }


  // -----------------------------项目内角色-----------------
  // 获取项目内角色
  async getProjectRoles(req: any) {
    let { current, pageSize, } = QueryPage(req)
    // 查询
    let res = await Pagination(this.ProjectRolesModel).page(current).size(pageSize).display(5).find({}).exec()
    return this.ParsingPage(res, () => res.records)
  }

  // 创建项目项目内角色
  async createProjectRoles(body: ProjectRoles) {
    return await this.ProjectRolesModel.create(body)
  }

  // 编辑项目项目内角色
  async editeProjectRoles(req: any, body: ProjectRoles) {
    let { _id } = QueryStructure(req)
    return await this.ProjectRolesModel.findByIdAndUpdate(_id, body)
  }

  // 删除项目项目内角色 可以批量删除 ,注意，删除项目内角色 会删除连带的任务( 未做 )
  async deleteProjectRoles(req: any) {
    let { idList } = QueryStructure(req)
    let List = idList.split(',')
    await List.forEach(async (v) => {
      return await this.ProjectRolesModel.findByIdAndDelete(v)
    })
    return {
      sucess: true,
      message: '删除成功！'
    }
  }

  // -----------------------------项目里程碑逻辑-----------------
  // 获取里程碑
  async getProjectMieage(req: any) {
    let { current, pageSize, } = QueryPage(req)
    // 查询
    let res = await Pagination(this.ProjectMieageModel).page(current).size(pageSize).display(5).find({}).exec()
    return this.ParsingPage(res, () => res.records)
  }

  // 创建项目里程碑
  async createProjectMieage(body: ProjectMieage) {
    return await this.ProjectMieageModel.create(body)
  }

  // 编辑项目里程碑
  async editeProjectMieage(req: any, body: ProjectMieage) {
    let { _id } = QueryStructure(req)
    return await this.ProjectMieageModel.findByIdAndUpdate(_id, body)
  }

  // 删除项目里程碑 可以批量删除 ,注意，删除里程碑 会删除连带的任务( 未做 )
  async deleteProjectMieage(req: any) {
    let { idList } = QueryStructure(req)

    let List = idList.split(',')
    await List.forEach(async (v) => {
      return await this.ProjectMieageModel.findByIdAndDelete(v)
    })
    return {
      sucess: true,
      message: '删除成功！'
    }
  }

  // -----------------------------项目分类逻辑-----------------
  // 查询项目分类信息 默认分页。支持多字段查询
  async getProjectCategory(req: any) {
    let { current, pageSize, } = QueryPage(req)
    // 查询
    let res = await Pagination(this.ProjectCategoryModel).page(current).size(pageSize).display(5).find({}).exec()
    return this.ParsingPage(res, () => res.records)
  }

  // 创建项目分类
  async createProjectCategory(body: ProjectCategory) {
    return await this.ProjectCategoryModel.create(body)
  }

  // 编辑项目分类
  async editeProjectCategory(req: any, body: ProjectCategory) {
    let { _id } = QueryStructure(req)
    return await this.ProjectCategoryModel.findByIdAndUpdate(_id, body)
  }

  // 删除项目分类 可以批量删除
  async deleteProjectCategory(req: any) {
    let { idList } = QueryStructure(req)

    let List = idList.split(',')
    await List.forEach(async (v) => {
      return await this.ProjectCategoryModel.findByIdAndDelete(v)
    })
    return {
      sucess: true,
      message: '删除成功！'
    }
  }

  // -----------------------------项目基础属性逻辑-----------------
  // 查询项目基础信息 默认分页。支持多字段查询
  async getProject(req: any) {
    let { current, pageSize, } = QueryPage(req)
    // 查询
    let res = await Pagination(this.ProjectModel).page(current).size(pageSize).display(5).find({}).exec()
    return this.ParsingPage(res, () => res.records)
  }

  // 创建项目基础信息
  async createProject(body: Project) {
    return await this.ProjectModel.create(body)
  }

  // 编辑项目基础信息
  async editeProject(req: any, body: Project) {
    let { _id } = QueryStructure(req)
    return await this.ProjectModel.findByIdAndUpdate(_id, body)
  }

  // 删除项目基础信息 可以批量删除
  async deleteProject(req: any) {
    let { idList } = QueryStructure(req)

    let List = idList.split(',')
    await List.forEach(async (v) => {
      return await this.ProjectModel.findByIdAndDelete(v)
    })

    return {
      sucess: true,
      message: '删除成功！'
    }
  }

  // -----------------------------项目标注逻辑-----------------
  // 查询标注信息 默认分页。支持多字段查询
  async getPmLableList(req: any) {
    let { current, pageSize, } = QueryPage(req)
    // 查询
    let res = await Pagination(this.PmLableModel).page(current).size(pageSize).display(5).find({}).exec()
    return this.ParsingPage(res, () => res.records)
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

  // -----------------------------项目怕评论逻辑-----------------
  // 查询评论信息 默认分页。支持多字段查询
  async getProjectCommentList(req: any) {
    let { current, pageSize, } = QueryPage(req)
    // 查询
    let res = await Pagination(this.ProjectCommentModel).page(current).size(pageSize).display(5).find({}).exec()
    return this.ParsingPage(res, () => res.records)
  }

  // 创建评论
  async createProjectComment(body: ProjectComment) {
    return await this.ProjectCommentModel.create(body)
  }


  // 删除评论 可以批量删除
  async deleteProjectComment(req: any) {
    let { idList } = QueryStructure(req)
    let List = idList.split(',')
    await List.forEach(async (v) => {
      return await this.ProjectCommentModel.findByIdAndDelete(v)
    })
    return {
      sucess: true,
      message: '删除成功！'
    }
  }



}
