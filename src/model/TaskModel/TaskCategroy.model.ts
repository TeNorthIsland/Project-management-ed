import { ApiPropertyOptional } from "@nestjs/swagger"
import { prop, Ref } from "@typegoose/typegoose"
import { IsNotEmpty } from "class-validator"


export class TaskCategroy {

  @ApiPropertyOptional({ description: '节点名称', example: '需求类型' })
  @IsNotEmpty({ message: '子节点名称不能为空' })
  @prop({})
  title: string

  @ApiPropertyOptional({ description: '父节点id', example: '' })
  @prop({})
  pid: string

  @ApiPropertyOptional({ description: '节点描述', example: '需求类型' })
  @prop({})
  description: string

  // @ApiPropertyOptional({ description: '子节点', example: [''] })
  // @prop({ ref: () => TaskCategroy })
  // children: Ref<TaskCategroy>[]
}


// {
//   "data":[
//       {
//           "name":"需求类型",
//           "id":1,
//           "list":[
//               {
//                   "doc":"需求设计",
//                   "needUpload":1,
//                   "id":"10",

//               },
//               {
//                   "doc":"产品设计评审",
//                   "needUpload":0,
//                   "id":"12",
//                   "text":"产品设计评审"
//               },
//               {
//                   "doc":"产品设计",
//                   "needUpload":0,
//                   "id":"15",
//                   "text":"产品设计"
//               },
//               {
//                   "doc":"需求调研",
//                   "needUpload":1,
//                   "id":"2",
//                   "text":"需求调研"
//               },
//               {
//                   "doc":"需求评审",
//                   "needUpload":1,
//                   "id":"6",
//                   "text":"需求评审"
//               }
//           ]
//       },
//       {
//           "name":"研发类型",
//           "id":2,
//           "list":[
//               {
//                   "doc":"详细设计",
//                   "needUpload":1,
//                   "id":"16",
//                   "text":"详细设计"
//               },
//               {
//                   "doc":"详细设计评审",
//                   "needUpload":1,
//                   "id":"19",
//                   "text":"详细设计评审"
//               },
//               {
//                   "doc":"开发自验证",
//                   "needUpload":0,
//                   "id":"20",
//                   "text":"开发自验证"
//               },
//               {
//                   "doc":"开发任务",
//                   "needUpload":0,
//                   "id":"35",
//                   "text":"开发任务"
//               }
//           ]
//       },
//       {
//           "name":"测试类型",
//           "id":3,
//           "list":[
//               {
//                   "doc":"测试设计",
//                   "needUpload":0,
//                   "id":"17",
//                   "text":"测试设计"
//               },
//               {
//                   "doc":"测试任务",
//                   "needUpload":0,
//                   "id":"18",
//                   "text":"测试任务"
//               },
//               {
//                   "doc":"BUG",
//                   "needUpload":0,
//                   "id":"21",
//                   "text":"BUG"
//               },
//               {
//                   "doc":"测试设计评审",
//                   "needUpload":1,
//                   "id":"22",
//                   "text":"测试设计评审"
//               },
//               {
//                   "doc":"版本发布",
//                   "needUpload":1,
//                   "id":"26",
//                   "text":"版本发布"
//               },
//               {
//                   "doc":"优化",
//                   "needUpload":0,
//                   "id":"41",
//                   "text":"优化"
//               }
//           ]
//       },
//       {
//           "name":"其他类型",
//           "id":4,
//           "list":[
//               {
//                   "doc":"通用",
//                   "needUpload":0,
//                   "id":"1",
//                   "text":"通用"
//               },
//               {
//                   "doc":"现网优化",
//                   "needUpload":0,
//                   "id":"23",
//                   "text":"现网优化"
//               },
//               {
//                   "doc":"设计缺陷",
//                   "needUpload":0,
//                   "id":"4",
//                   "text":"设计缺陷"
//               },
//               {
//                   "doc":"设计优化",
//                   "needUpload":0,
//                   "id":"8",
//                   "text":"设计优化"
//               },
//               {
//                   "doc":"现网BUG",
//                   "needUpload":0,
//                   "id":"9",
//                   "text":"现网BUG"
//               }
//           ]
//       }
//   ]
// }