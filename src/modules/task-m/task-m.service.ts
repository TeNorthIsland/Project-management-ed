import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { pid } from 'process';
import { Task } from 'src/model/TaskModel/Task.model';
import { TaskCategroy } from 'src/model/TaskModel/TaskCategroy.model';
import { Pagination, QueryPage, QueryStructure } from 'src/utils/pageations';

@Injectable()
export class TaskMService {

  // 通用分页方法
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
    @InjectModel(TaskCategroy) private readonly TaskCategroyModel: ModelType<TaskCategroy>,
    @InjectModel(Task) private readonly TaskModel: ModelType<Task>,
  ) { }


  // -----------------------------任务分类-----------------
  // 获取任务分类
  async getTaskCategroy(req: any) {
    // 查询
    let temp = await this.TaskCategroyModel.find().exec()


    let Res = []
    let isChildren = temp.filter((v) => v.pid)
    temp.forEach((c) => {
      let childrenList = []
      isChildren.forEach((v) => {
        if (v.pid == c._id) {
          childrenList.push({
            title: v.title,
            _id: v._id,
            pid: v.pid,
            description: v.description
          })
        }
      })
      if (c.pid) {
        return
      }
      Res.push({
        title: c.title,
        _id: c._id,
        pid: c.pid,
        description: c.description,
        childrenList: childrenList
      })
    })
    return Res
  }

  // 创建项目任务分类
  async createTaskCategroy(body: TaskCategroy) {
    return await this.TaskCategroyModel.create(body)
  }

  // 编辑项目任务分类
  async editeTaskCategroy(req: any, body: TaskCategroy) {
    let { _id } = QueryStructure(req)
    return await this.TaskCategroyModel.findByIdAndUpdate(_id, body)
  }

  // 删除项目任务分类 可以批量删除 ,注意，删除任务分类 会删除连带的任务( 未做 )
  async deleteTaskCategroy(req: any) {
    let { idList } = QueryStructure(req)
    let List = idList.split(',')

    await List.forEach(async (v) => {
      return await this.TaskCategroyModel.findByIdAndDelete(v)
    })
    return {
      sucess: true,
      message: '删除成功！'
    }
  }


  // -----------------------------任务-----------------
  // 任务基础信息
  async getTask(req: any) {
    let { current, pageSize, } = QueryPage(req)
    // 查询
    let res = await Pagination(this.TaskModel).page(current).size(pageSize).display(5).find({}).exec()
    return this.ParsingPage(res, () => res.records)
  }

  // 创建任务基础信息
  async createTask(body: Task) {
    return await this.TaskModel.create(body)
  }

  // 编辑任务基础信息
  async editeTask(req: any, body: Task) {
    let { _id } = QueryStructure(req)
    return await this.TaskModel.findByIdAndUpdate(_id, body)
  }

  // 删除任务基础信息 可以批量删除 ,注意，任务基础信息 会删除连带的任务( 未做 )
  async deleteTask(req: any) {
    let { idList } = QueryStructure(req)
    let List = idList.split(',')
    await List.forEach(async (v) => {
      return await this.TaskModel.findByIdAndDelete(v)
    })
    return {
      sucess: true,
      message: '删除成功！'
    }
  }
}
