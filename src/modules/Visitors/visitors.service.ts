import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { DocNotification } from 'src/model/Visitors/DocNotification';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { AccessMessages } from 'src/model/Visitors/AccessMessages';
import { NormativeStandards } from 'src/model/Visitors/NormativeStandards';
import { Pagination, QueryStructure, QueryPage } from 'src/utils/pageations';
import { Categories } from 'src/model/Visitors/Categories';
import { CollectionProcess } from 'src/model/Visitors/CollectionProcess';

@Injectable()
export class VisitorsService {
  constructor(
    @InjectModel(DocNotification) private readonly DocNotificationModel:ModelType<DocNotification>,
    @InjectModel(AccessMessages) private readonly AccessMessagesModel:ModelType<AccessMessages>,
    @InjectModel(NormativeStandards) private readonly NormativeStandardsModel:ModelType<NormativeStandards>,
    @InjectModel( Categories ) private readonly CategoriesModel:ModelType<Categories>,   
    @InjectModel( CollectionProcess ) private readonly CollectionProcessModel:ModelType<CollectionProcess>   
  ){}

  // @文件通知管理模块
  async getDocNotification(req:any):Promise<any>{
    const { pagasize,page }  = QueryPage(req)
    return  await Pagination(this.DocNotificationModel).page(page).size(pagasize).display(10)
    .find({})
    .exec()
  }

  async queryDocNotification(req:any):Promise<any>{
    const { keyword } = QueryStructure(req)
    const { pagasize,page }  =QueryPage(req)
    
    var sreacKeyRegExp = new RegExp(keyword); // 进行模糊查询

    return await Pagination(this.DocNotificationModel).page(page).size(pagasize).display(10)
    .find({
      'title':sreacKeyRegExp 
    })
    .exec()
  }
  
  async createDocNotification(body:DocNotification){
    return await this.DocNotificationModel.create(body)
  }
  
  async updateDocNotification(req:any,body:DocNotification){
    const {id} = QueryStructure(req)
    return this.DocNotificationModel.findByIdAndUpdate(id,body)
  }

  async deleteDocNotification(req:any) {
    const {id} = QueryStructure(req)
    return this.DocNotificationModel.findByIdAndDelete(id)
  }
  
  // @一级分类管理
  async getCategory(req:any):Promise<any>{
    const { pagasize,page }  = QueryPage(req)
    return  await Pagination(this.CategoriesModel).page(page).size(pagasize).display(10)
    .find({})
    .exec()
  }

  async queryCategory(req:any):Promise<any>{
    const { keyword } = QueryStructure(req)
    const { pagasize,page }  =QueryPage(req)
    
    var sreacKeyRegExp = new RegExp(keyword); // 进行模糊查询

    return await Pagination(this.CategoriesModel).page(page).size(pagasize).display(10)
    .find({
      'title':sreacKeyRegExp 
    })
    .exec()
  }
  
  async createCategory(body:Categories){
    return await this.CategoriesModel.create(body)
  }
  
  async updateCategory(req:any,body:Categories){
    const {id} = QueryStructure(req)
    return this.CategoriesModel.findByIdAndUpdate(id,body)
  }

  async deleteCategory(req:any) {
    const {id} = QueryStructure(req)
    return this.CategoriesModel.findByIdAndDelete(id)
  }

  // @业务交流===================================================
  async getAccessMessage(req:any):Promise<any>{
    const { pagasize,page }  = QueryPage(req)
    return  await Pagination(this.AccessMessagesModel).page(page).size(pagasize).display(10)
    .find({})
    .exec()
  }

  async queryAccessMessage(req:any):Promise<any>{
    const { keyword } = QueryStructure(req)
    const { pagasize,page }  =QueryPage(req)
    
    var sreacKeyRegExp = new RegExp(keyword); // 进行模糊查询

    return await Pagination(this.AccessMessagesModel).page(page).size(pagasize).display(10)
    .find({
      'content':sreacKeyRegExp 
    })
    .exec()
  }
  
  async createAccessMessage(body:AccessMessages){
    return await this.AccessMessagesModel.create(body)
  }
  
  async updateAccessMessage(req:any,body:AccessMessages){
    const {id} = QueryStructure(req)
    return this.AccessMessagesModel.findByIdAndUpdate(id,body)
  }

  async deleteAccessMessage(req:any) {
    const {id} = QueryStructure(req)
    return this.AccessMessagesModel.findByIdAndDelete(id)
  }

  // @文件规范===================================================
  async getNormativeStandards(req:any):Promise<any>{
    const { pagasize,page }  = QueryPage(req)
    return  await Pagination(this.NormativeStandardsModel).page(page).size(pagasize).display(10)
    .find({})
    .exec()
  }

  async queryNormativeStandards(req:any):Promise<any>{
    const { keyword } = QueryStructure(req)
    const { pagasize,page }  =QueryPage(req)
    
    var sreacKeyRegExp = new RegExp(keyword); // 进行模糊查询

    return await Pagination(this.NormativeStandardsModel).page(page).size(pagasize).display(10)
    .find({
      'title':sreacKeyRegExp 
    })
    .exec()
  }
  
  async createNormativeStandards(body:NormativeStandards){
    return await this.NormativeStandardsModel.create(body)
  }
  
  async updateNormativeStandards(req:any,body:NormativeStandards){
    const {id} = QueryStructure(req)
    return this.NormativeStandardsModel.findByIdAndUpdate(id,body)
  }

  async deleteNormativeStandards(req:any) {
    const {id} = QueryStructure(req)
    return this.NormativeStandardsModel.findByIdAndDelete(id)
  }

  
  // @领证流程===================================================
  async getCollectionProcess(req:any):Promise<any>{
    const { pagasize,page }  = QueryPage(req)
    return  await Pagination(this.CollectionProcessModel).page(page).size(pagasize).display(10)
    .find({})
    .exec()
  }

  async queryCollectionProcess(req:any):Promise<any>{
    const { keyword } = QueryStructure(req)
    const { pagasize,page }  =QueryPage(req)
    
    var sreacKeyRegExp = new RegExp(keyword); // 进行模糊查询

    return await Pagination(this.CollectionProcessModel).page(page).size(pagasize).display(10)
    .find({
      'title':sreacKeyRegExp 
    })
    .exec()
  }
  
  async createCollectionProcess(body:CollectionProcess){
    return await this.CollectionProcessModel.create(body)
  }
  
  async updateCollectionProcess(req:any,body:CollectionProcess){
    const {id} = QueryStructure(req)
    return this.CollectionProcessModel.findByIdAndUpdate(id,body)
  }

  async deleteCollectionProcess(req:any) {
    const {id} = QueryStructure(req)
    return this.CollectionProcessModel.findByIdAndDelete(id)
  }

}
