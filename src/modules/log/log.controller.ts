import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiHeader, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ProjectDynamicModel } from 'src/model/ProjectDetails/ProjectDynamic.model';
import { LogService } from './log.service';

@ApiHeader({ name: 'token' })  //如果直接丢这里就是全局的加
@ApiTags('项目日志')
@UseGuards(AuthGuard('jwt'))
@Controller('/api/log')
export class LogController {
  constructor(
    private readonly LogService: LogService
  ) { }

  // 获取到动态信息
  @ApiOperation({ summary: '获取到动态信息' })
  @ApiQuery({ name: 'current', required: false })
  @ApiQuery({ name: 'pageSize', required: false })
  @Get('getLog')
  getRoleList(@Request() req: any) {
    return this.LogService.getLog(req)
  }
}
