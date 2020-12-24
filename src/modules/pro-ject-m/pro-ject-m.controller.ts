import { Body, Controller, Delete, Get, Post, Put, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiHeader, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { GlobalRole } from 'src/model/GlobalRole/globalRole.model';
import { Project } from 'src/model/ProjectDetails/Project.model';
import { ProjectCategory } from 'src/model/ProjectDetails/ProjectCategory.model';
import { ProjectComment } from 'src/model/ProjectDetails/ProjectComment.model';
import { ProjectMieage } from 'src/model/ProjectDetails/ProjectMileage.model';
import { PmLable } from 'src/model/ProjectM/lable.model';
import { ProJectMService } from './pro-ject-m.service';

@ApiTags('项目管理模块')
// @UseGuards(AuthGuard('jwt'))
@Controller('/proJectM')
export class ProJectMController {
  constructor(
    private readonly ProJectMService: ProJectMService
  ) { }


  // ------------------项目里程碑----------------
  // 创项目里程碑 
  @ApiOperation({ summary: '创项目里程碑' })
  @Post('createProjectMieage')
  createProjectMieage(@Body() body: ProjectMieage): any {
    return this.ProJectMService.createProjectMieage(body)
  }

  // 编项目里程碑
  @ApiOperation({ summary: '修改项目里程碑' })
  @ApiQuery({ name: '_id', description: '修改项目里程碑的id' })
  @Put('editeProjectMieage')
  editeProjectMieage(@Request() req: any, @Body() body: ProjectMieage) {
    return this.ProJectMService.editeProjectMieage(req, body)
  }

  // 查项目里程碑
  @ApiOperation({ summary: '查项目里程碑列表' })
  @ApiQuery({ name: 'current', required: false })
  @ApiQuery({ name: 'pageSize', required: false })
  @Get('getProjectMieageList')
  getProjectMieage(@Request() req: any) {
    return this.ProJectMService.getProjectMieage(req)
  }

  // 删项目里程碑,允许批量操作
  @ApiOperation({ summary: '删除指定ID项目里程碑' })
  @ApiQuery({ name: 'idList', required: false })
  @Delete('deleteProjectMieage')
  deleteProjectMieage(@Request() req: any) {
    return this.ProJectMService.deleteProjectMieage(req)
  }



  // ------------------ 项目分类----------------
  // 创建项目分类 
  @ApiOperation({ summary: '创建项目分类' })
  @Post('createProjectCategory')
  createProjectCategory(@Body() body: ProjectCategory): any {
    return this.ProJectMService.createProjectCategory(body)
  }

  // 编辑项目分类
  @ApiOperation({ summary: '修改改项目分类' })
  @ApiQuery({ name: '_id', description: '修改改项目分类的id' })
  @Put('editeProjectCategory')
  editeProjectCategory(@Request() req: any, @Body() body: ProjectCategory) {
    return this.ProJectMService.editeProjectCategory(req, body)
  }

  // 查询项目分类
  @ApiOperation({ summary: '查询项目分类列表' })
  @ApiQuery({ name: 'current', required: false })
  @ApiQuery({ name: 'pageSize', required: false })
  @Get('getProjectCategoryList')
  getProjectCategory(@Request() req: any) {
    return this.ProJectMService.getProjectCategory(req)
  }

  // 删除项目分类,允许批量操作
  @ApiOperation({ summary: '删除指定ID的项目分类' })
  @ApiQuery({ name: 'idList', required: false })
  @Delete('deleteProjectCategory')
  deleteProjectCategory(@Request() req: any) {
    return this.ProJectMService.deleteProjectCategory(req)
  }


  // ------------------ 项目基础信息----------------
  // 创建项目基础信息
  @ApiOperation({ summary: '创建项目基础信息' })
  @Post('createProject')
  createProject(@Body() body: Project): any {
    return this.ProJectMService.createProject(body)
  }

  // 编辑项目基础信息
  @ApiOperation({ summary: '修改改项目基础信息' })
  @ApiQuery({ name: '_id', description: '修改改项目基础信息的id' })
  @Put('editeProject')
  editeProject(@Request() req: any, @Body() body: Project) {
    return this.ProJectMService.editeProject(req, body)
  }

  // 查询项目基础信息
  @ApiOperation({ summary: '查询项目基础信息列表' })
  @ApiQuery({ name: 'current', required: false })
  @ApiQuery({ name: 'pageSize', required: false })
  @Get('getProjectList')
  getProject(@Request() req: any) {
    return this.ProJectMService.getProject(req)
  }

  // 删除项目基础信息,允许批量操作
  @ApiOperation({ summary: '删除指定ID的项目基础信息' })
  @ApiQuery({ name: 'idList', required: false })
  @Delete('deleteProject')
  deleteProject(@Request() req: any) {
    return this.ProJectMService.deleteProject(req)
  }


  // ------------------ 项目标注----------------
  // 创建标注
  @ApiOperation({ summary: '创建标注' })
  @Post('creaetRoule')
  creaetRoule(@Body() body: PmLable): any {
    return this.ProJectMService.createPmLable(body)
  }

  // 编辑标注
  @ApiOperation({ summary: '修改改标注' })
  @ApiQuery({ name: '_id', description: '修改改标注的id' })
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

