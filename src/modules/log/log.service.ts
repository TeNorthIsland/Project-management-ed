import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { ProjectDynamicModel } from 'src/model/ProjectDetails/ProjectDynamic.model';
@Injectable()
export class LogService {

  private readonly OptionsEm = [
    {
      key: '',
      text: '',
    }
  ]

  constructor(
    @InjectModel(ProjectDynamicModel) private readonly ProjectDynamicModel: ModelType<ProjectDynamicModel>,
  ) { }


  // 日志的查询
  async getLog(log: any) {
    return {
      sucess: true,
      data: {
        total: 12,
        current: 1,
        pageSize: 3,
        totalPage: 4,
        data: [
          {
            createAtTime: '2020-12-15:15:55:26',
            userName: '李仕增',
            optionsString: '打开项目',
            MilestoneName: '里程碑1',
            changeMessage: '里程碑发生了变更变更！！！~~~',
            originProjectName: '项目233',
          },
          {
            createAtTime: '2020-12-15:15:55:26',
            userName: '李仕增',
            optionsString: '打开项目',
            MilestoneName: '里程碑1',
            changeMessage: '里程碑发生了变更变更！！！~~~',
            originProjectName: '项目233',
          },
          {
            createAtTime: '2020-12-15:15:55:26',
            userName: '李仕增',
            optionsString: '打开项目',
            MilestoneName: '里程碑1',
            changeMessage: '里程碑发生了变更变更！！！~~~',
            originProjectName: '项目233',
          }
        ]
      }
    }
  }

  // 日志的记录


}
