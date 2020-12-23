import { Body, Controller, Delete, Get, Post, Put, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiHeader, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { GlobalRole } from 'src/model/GlobalRole/globalRole.model';
import { ProjectComment } from 'src/model/ProjectDetails/ProjectComment.model';
import { PmLable } from 'src/model/ProjectM/lable.model';
import { ProJectMService } from './pro-ject-m.service';

@ApiTags('项目标注')
@UseGuards(AuthGuard('jwt'))
@Controller('/proJectM')
export class ProJectMController {
  constructor(
    private readonly ProJectMService: ProJectMService
  ) { }


  // ------------------ 项目标注----------------
  // 创建标注
  @ApiOperation({ summary: '创建标注' })
  @Post('creaetRoule')
  creaetRoule(@Body() body: PmLable): any {
    return this.ProJectMService.createPmLable(body)
  }

  // 编辑标注
  @ApiOperation({ summary: '修改标注' })
  @ApiQuery({ name: '_id', description: '修改标注的id' })
  @Put('editRole')
  editRole(@Request() req: any, @Body() body: PmLable) {
    return this.ProJectMService.editePmLable(req, body)
  }

  // 查询标注
  @ApiOperation({ summary: '查询标注列表' })
  @ApiQuery({ name: 'current', required: false })
  @ApiQuery({ name: 'pageSize', required: false })
  @Get('getRoleList')
  getRoleList(@Request() req: any) {
    return this.ProJectMService.getPmLableList(req)
  }

  // 删除标注,允许批量操作
  @ApiOperation({ summary: '删除指定ID的标注' })
  @ApiQuery({ name: 'idList', required: false })
  @Delete('deleteRole')
  deleteRole(@Request() req: any) {
    return this.ProJectMService.deletePmLable(req)
  }

  // ------------------ 项目评论----------------
  // 创建标注
  @ApiOperation({ summary: '创建评论' })
  @Post('creaetProjectComment')
  creaetProjectComment(@Body() body: ProjectComment): any {
    return this.ProJectMService.createProjectComment(body)
  }


  // 查询评论
  @ApiOperation({ summary: '查询评论列表' })
  @ApiQuery({ name: 'current', required: false })
  @ApiQuery({ name: 'pageSize', required: false })
  @Get('getProjectComment')
  getProjectComment(@Request() req: any) {
    return this.ProJectMService.getProjectCommentList(req)
  }

  // 删除评论,允许批量操作
  @ApiOperation({ summary: '删除指定ID的评论' })
  @ApiQuery({ name: 'idList', required: false })
  @Delete('deleteProjectComment')
  deleteProjectComment(@Request() req: any) {
    return this.ProJectMService.deleteProjectComment(req)
  }
}
