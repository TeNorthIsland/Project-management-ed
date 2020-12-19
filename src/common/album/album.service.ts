/*
 * @Author: your name
 * @Date: 2020-07-27 18:16:03
 * @LastEditTime: 2020-12-16 23:15:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Node_NestJS\Noted\第五章，这商业项目\蓝图\MnogDB_blueprint\src\common\album\album.service.ts
 */
import { Injectable } from '@nestjs/common';
import { tar } from 'compressing';
import { ConfigService } from 'nestjs-config';
import { refCount } from 'rxjs/operators';

@Injectable()
export class AlbumService {
  constructor(private readonly configService: ConfigService) { }

  upload(file) {
    console.log(file);
    let pathArr = file.path.split('\\')
    let path = `http://localhost:3000/${pathArr[pathArr.length - 2]}/${pathArr[pathArr.length - 1]}`
    return { message: '上传成功', dir: path }
    // 重返回的 path可以直接拿到下载路径!贴到浏览器就能直接完成下载
  }

  // 下载全部文件。默认下载diss目录下的upload全部文件
  async downloadAll() {
    const uploadDir = this.configService.get('file').root;
    // console.log('您下载的文件是dit是：', uploadDir);
    const tarStream = new tar.Stream();
    await tarStream.addEntry(uploadDir);
    return { filename: 'hello-world.tar', tarStream };
  }
}
