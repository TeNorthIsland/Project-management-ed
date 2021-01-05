import { Body, Controller, Delete, Get, Post, Put, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Task } from 'src/model/TaskModel/Task.model';
import { TaskCategroy } from 'src/model/TaskModel/TaskCategroy.model';
import { TaskComment } from 'src/model/TaskModel/TaskComment.model';
import { TaskMService } from './task-m.service'

@ApiTags('任务管理模块')
@UseGuards(AuthGuard('jwt'))
@Controller('/api/task-m')
export class TaskMController {
  constructor(
    private readonly TaskMService: TaskMService
  ) { }

  // ------------------任务评论----------------
  // 创任务评论 
  @ApiOperation({ summary: '创任务评论' })
  @Post('createTaskComment')
  createTaskComment(@Body() body: TaskComment): any {
    return this.TaskMService.createTaskComment(body)
  }

  // 编任务评论
  @ApiOperation({ summary: '修改任务评论' })
  @ApiQuery({ name: '_id', description: '修改任务评论的id' })
  @Put('editeTaskComment')
  editeTaskComment(@Request() req: any, @Body() body: TaskComment) {
    return this.TaskMService.editeTaskComment(req, body)
  }

  // 查任务评论
  @ApiOperation({ summary: '查任务评论列表' })
  @ApiQuery({ name: 'current', required: false })
  @ApiQuery({ name: 'pageSize', required: false })
  @Get('getTaskCommentList')
  getTaskComment(@Request() req: any) {
    return this.TaskMService.getTaskComment(req)
  }

  // 删任务评论,允许批量操作
  @ApiOperation({ summary: '删除指定ID任务评论' })
  @ApiQuery({ name: 'idList', required: false })
  @Delete('deleteTaskComment')
  deleteTaskComment(@Request() req: any) {
    return this.TaskMService.deleteTaskComment(req)
  }

  // ------------------任务分类----------------
  // 创任务分类 
  @ApiOperation({ summary: '创任务分类' })
  @Post('createTaskCategroy')
  createTaskCategroy(@Body() body: TaskCategroy): any {
    return this.TaskMService.createTaskCategroy(body)
  }

  // 编任务分类
  @ApiOperation({ summary: '修改任务分类' })
  @ApiQuery({ name: '_id', description: '修改任务分类的id' })
  @Put('editeTaskCategroy')
  editeTaskCategroy(@Request() req: any, @Body() body: TaskCategroy) {
    return this.TaskMService.editeTaskCategroy(req, body)
  }

  // 查任务分类
  @ApiOperation({ summary: '查任务分类列表' })
  @ApiQuery({ name: 'current', required: false })
  @ApiQuery({ name: 'pageSize', required: false })
  @Get('getTaskCategroyList')
  getTaskCategroy(@Request() req: any) {
    return this.TaskMService.getTaskCategroy(req)
  }

  // 删任务分类,允许批量操作
  @ApiOperation({ summary: '删除指定ID任务分类' })
  @ApiQuery({ name: 'idList', required: false })
  @Delete('deleteTaskCategroy')
  deleteTaskCategroy(@Request() req: any) {
    return this.TaskMService.deleteTaskCategroy(req)
  }


  // ------------------任务基础信息----------------
  // 创任务基础信息 
  @ApiOperation({ summary: '创任务基础信息' })
  @Post('createTask')
  createTask(@Body() body: Task): any {
    return this.TaskMService.createTask(body)
  }

  // 编任务基础信息
  @ApiOperation({ summary: '修改任务基础信息' })
  @ApiQuery({ name: '_id', description: '修改任务基础信息的id' })
  @Put('editeTask')
  editeTask(@Request() req: any, @Body() body: Task) {
    return this.TaskMService.editeTask(req, body)
  }

  // 查任务基础信息
  @ApiOperation({ summary: '查任务基础信息列表' })
  @ApiQuery({ name: 'current', required: false })
  @ApiQuery({ name: 'pageSize', required: false })
  @Get('getTaskList')
  getTask(@Request() req: any) {
    return this.TaskMService.getTask(req)
  }

  // 删任务基础信息,允许批量操作
  @ApiOperation({ summary: '删除指定ID任务基础信息' })
  @ApiQuery({ name: 'idList', required: false })
  @Delete('deleteTask')
  deleteTask(@Request() req: any) {
    return this.TaskMService.deleteTask(req)
  }

}
