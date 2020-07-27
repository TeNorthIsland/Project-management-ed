import { Controller, Get, Post, Put, Request, Body, UseGuards } from '@nestjs/common';
import { VisitorsService } from './visitors.service';
import { ApiTags, ApiOperation, ApiQuery, ApiHeader, ApiHeaders } from '@nestjs/swagger';
import { DocNotification } from 'src/model/Visitors/DocNotification';
import { Categories } from 'src/model/Visitors/Categories';
import { AuthGuard } from '@nestjs/passport';
import { AccessMessages } from 'src/model/Visitors/AccessMessages';
import { NormativeStandards } from 'src/model/Visitors/NormativeStandards';
import { CollectionProcess } from 'src/model/Visitors/CollectionProcess';

@UseGuards(AuthGuard('jwt'))
@ApiHeader({name:'token'})  //如果直接丢这里就是全局的加
@ApiTags('访客接口')
@Controller('visitors')
export class VisitorsController {
  constructor(
    private readonly visitorsService :VisitorsService
  ){}
    
  // @文件通知管理模块
  // 默认获取所有的数据，带分页功能
  @ApiOperation({summary:'默认的获取文件通，默认带有分页功能'})
  @ApiQuery({name:'pagasize'}) 
  @ApiQuery({name:'page'}) 
  @Get('getDocNotification')
  getDocNotification(@Request() req:any){
    return this.visitorsService.getDocNotification(req)
  }
  
  // 进行数据字段的查询，带分页功能
  @ApiOperation({summary:'默认的获取文件通，默认带有分页功能'})
  @ApiQuery({name:'pagasize'}) 
  @ApiQuery({name:'page'}) 
  @ApiQuery({name:'keyword',description:'标题关键字',required:true}) 
  @Get('queryDocNotification')
  queryDocNotification(@Request() req:any){
    return this.visitorsService.queryDocNotification(req)
  }

  // 增加字段
  @ApiOperation({summary:'增加一条文件/通知'})
  @Post('createDocNotification')
  createDocNotification(@Body() body:DocNotification){
    return  this.visitorsService.createDocNotification(body)
  }
  
  // 修改字段
  @ApiOperation({summary:"修改通知/文件的数据"})
  @ApiQuery({name:'id',description:'当前要修改的文章的id'}) 
  @Put('updateDocNotification')
  updateDocNotification( @Request() req:any,@Body() body:DocNotification ){
    return  this.visitorsService.updateDocNotification(req,body)
  }

  // 删除字段
  @ApiOperation({summary:"删除通知/文件的数据"})
  @ApiQuery({name:'id',description:'当前要删除的文章的id'}) 
  @Put('deleteDocNotification')
  deleteDocNotification( @Request() req:any){
    return  this.visitorsService.deleteDocNotification(req)
  }
  


  
  // @一级分类管理===================================================
  // 默认获取所有的数据，带分页功能
  @ApiOperation({summary:'默认的获取文件通知一级分类，默认带有分页功能'})
  @ApiQuery({name:'pagasize'}) 
  @ApiQuery({name:'page'}) 
  @Get('getCategory')
  getCategory(@Request() req:any){
    return this.visitorsService.getCategory(req)
  }
  
  // 进行数据字段的查询，带分页功能
  @ApiOperation({summary:'查询分类数据，默认带有分页功能'})
  @ApiQuery({name:'pagasize'}) 
  @ApiQuery({name:'page'}) 
  @ApiQuery({name:'keyword',description:'标题关键字',required:true}) 
  @Get('queryCategory')
  queryCategory(@Request() req:any){
    return this.visitorsService.queryCategory(req)
  }

  // 增加字段
  @ApiOperation({summary:'增加一条一级分类'})
  @Post('createCategory')
  createCategory(@Body() body:Categories){
    return  this.visitorsService.createCategory(body)
  }
  
  // 修改字段
  @ApiOperation({summary:"修改一级分类的数据"})
  @ApiQuery({name:'id',description:'当前要修改的分类项的id'}) 
  @Put('updateCategory')
  updateCategory( @Request() req:any,@Body() body:Categories ){
    return  this.visitorsService.updateCategory(req,body)
  }

  // 删除字段
  @ApiOperation({summary:"删除分类项的数据"})
  @ApiQuery({name:'id',description:'当前要删除的分类项的id'}) 
  @Put('deleteCategory')
  deleteCategory( @Request() req:any){
    return  this.visitorsService.deleteCategory(req)
  }


  // @留言信息管理模块===================================================
  // 默认获取所有的数据，带分页功能
  @ApiOperation({summary:'默认的获取文所有的留言信息，默认带有分页功能'})
  @ApiQuery({name:'pagasize'}) 
  @ApiQuery({name:'page'}) 
  @Get('getAccessMessage')
  getAccessMessage(@Request() req:any){
    return this.visitorsService.getAccessMessage(req)
  }
  
  // 进行数据字段的查询，带分页功能
  @ApiOperation({summary:'查询分类数据，默认带有分页功能'})
  @ApiQuery({name:'pagasize'}) 
  @ApiQuery({name:'page'}) 
  @ApiQuery({name:'keyword',description:'标题关键字',required:true}) 
  @Get('queryAccessMessage')
  queryAccessMessage(@Request() req:any){
    return this.visitorsService.queryAccessMessage(req)
  }

  // 增加字段
  @ApiOperation({summary:'增加一条留言'})
  @Post('createAccessMessage')
  createAccessMessage(@Body() body:AccessMessages){
    return  this.visitorsService.createAccessMessage(body)
  }
  
  // 修改字段
  @ApiOperation({summary:"修改留言的数据"})
  @ApiQuery({name:'id',description:'当前要修改的分类项的id'}) 
  @Put('updateAccessMessage')
  updateAccessMessage( @Request() req:any,@Body() body:AccessMessages ){
    return  this.visitorsService.updateAccessMessage(req,body)
  }

  // 删除字段
  @ApiOperation({summary:"删除留言的数据"})
  @ApiQuery({name:'id',description:'当前要删除的留言的id'}) 
  @Put('deleteAccessMessage')
  deleteAccessMessage( @Request() req:any){
    return  this.visitorsService.deleteAccessMessage(req)
  }


  
  // @文件规范===================================================
  // 默认获取所有的数据，带分页功能
  @ApiOperation({summary:'默认的获取所有的文件规范，默认带有分页功能'})
  @ApiQuery({name:'pagasize'}) 
  @ApiQuery({name:'page'}) 
  @Get('getNormativeStandards')
  getNormativeStandards(@Request() req:any){
    return this.visitorsService.getNormativeStandards(req)
  }

  // 进行数据字段的查询，带分页功能
  @ApiOperation({summary:'查询文件规范，默认带有分页功能'})
  @ApiQuery({name:'pagasize'}) 
  @ApiQuery({name:'page'}) 
  @ApiQuery({name:'keyword',description:'标题关键字',required:true}) 
  @Get('queryNormativeStandards')
  queryNormativeStandards(@Request() req:any){
    return this.visitorsService.queryNormativeStandards(req)
  }

  // 增加字段
  @ApiOperation({summary:'增加一条文件规范'})
  @Post('createNormativeStandards')
  createNormativeStandards(@Body() body:NormativeStandards){
    return  this.visitorsService.createNormativeStandards(body)
  }

  // 修改字段
  @ApiOperation({summary:"修改规范的数据"})
  @ApiQuery({name:'id',description:'当前要修改的规范的id'}) 
  @Put('updateNormativeStandards')
  updateNormativeStandards( @Request() req:any,@Body() body:NormativeStandards ){
    return  this.visitorsService.updateNormativeStandards(req,body)
  }

  // 删除字段
  @ApiOperation({summary:"删除分类规范的数据"})
  @ApiQuery({name:'id',description:'当前要删除的规范的id'}) 
  @Put('deleteNormativeStandards')
  deleteNormativeStandards( @Request() req:any){
    return  this.visitorsService.deleteNormativeStandards(req)
  }

  // @领证流程管理（重难点）===================================================
  // 默认获取所有的数据，带分页功能
  @ApiOperation({summary:'默认的获取所有的领证流程，默认带有分页功能'})
  @ApiQuery({name:'pagasize'}) 
  @ApiQuery({name:'page'}) 
  @Get('getCollectionProcess')
  getCollectionProcess(@Request() req:any){
    return this.visitorsService.getCollectionProcess(req)
  }

  // 进行数据字段的查询，带分页功能
  @ApiOperation({summary:'查询具体领证流程，默认带有分页功能'})
  @ApiQuery({name:'pagasize'}) 
  @ApiQuery({name:'page'}) 
  @ApiQuery({name:'keyword',description:'标题关键字',required:true}) 
  @Get('queryCollectionProcess')
  queryCollectionProcess(@Request() req:any){
    return this.visitorsService.queryCollectionProcess(req)
  }

  // 增加字段
  @ApiOperation({summary:'增加一条领证的流程'})
  @Post('createCollectionProcess')
  createCollectionProcess(@Body() body:CollectionProcess){
    return  this.visitorsService.createCollectionProcess(body)
  }

  // 修改字段
  @ApiOperation({summary:"修改领证流程的数据"})
  @ApiQuery({name:'id',description:'当前要修改的领证流程的id'}) 
  @Put('updateCollectionProcess')
  updateCollectionProcess( @Request() req:any,@Body() body:CollectionProcess ){
    return  this.visitorsService.updateCollectionProcess(req,body)
  }

  // 删除字段
  @ApiOperation({summary:"删除领证流程的数据"})
  @ApiQuery({name:'id',description:'当前要删除的领证流程的id'}) 
  @Put('deleteCollectionProcess')
  deleteCollectionProcess( @Request() req:any){
    return  this.visitorsService.deleteCollectionProcess(req)
  }

  // 领证流程管理（重难点）===================================================


}
