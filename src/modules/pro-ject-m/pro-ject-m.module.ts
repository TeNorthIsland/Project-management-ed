import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { PmLable } from 'src/model/ProjectM/lable.model';
import { ProJectMController } from './pro-ject-m.controller';
import { ProJectMService } from './pro-ject-m.service';

@Module({
  imports: [
    TypegooseModule.forFeature([PmLable]),
  ],
  controllers: [ProJectMController],
  providers: [ProJectMService]
})
export class ProJectMModule { }
