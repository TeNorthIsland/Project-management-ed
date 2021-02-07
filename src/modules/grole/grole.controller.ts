import { Body, Controller, Get, Post, Put, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiHeader, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { GlobalRole } from 'src/model/GlobalRole/globalRole.model';
import { GroleService } from './grole.service'

// @ApiHeader({ name: 'token' })  //如果直接丢这里就是全局的加
@ApiTags('全局角色控制模块')
// @UseGuards(AuthGuard('jwt'))
@Controller('/api/grole')
export class GroleController {
  constructor(
    private readonly GroleService: GroleService
  ) { }


  // 创建角色
  @ApiOperation({ summary: '创建角色' })
  @Post('creaetRoule')
  creaetRoule(@Body() body: GlobalRole): any {
    return this.GroleService.createGRole(body)
  }

  // 编辑角色
  @ApiOperation({ summary: '修改角色' })
  @ApiQuery({ name: '_id', description: '修改角色的id' })
  @Put('editRole')
  editRole(@Request() req: any, @Body() body: GlobalRole) {
    return this.GroleService.editeGRole(req, body)
  }

  // 查询角色
  @ApiOperation({ summary: '查询角色列表' })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'size', required: false })
  @Get('getRoleList')
  getRoleList(@Request() req: any) {
    return this.GroleService.getGRoleList(req)
  }

  // 删除角色,允许批量操作
  @ApiOperation({ summary: '删除指定ID的角色' })
  @ApiQuery({ name: 'idList', required: false })
  @Get('deleteRole')
  deleteRole(@Request() req: any) {
    return this.GroleService.deleteRole(req)
  }

  // 角色选择器
  @ApiOperation({ summary: '角色选择器列表' })
  @Get('querySysRoleList')
  querySysRoleList() {
    return this.GroleService.querySysRoleList()
  }
}
