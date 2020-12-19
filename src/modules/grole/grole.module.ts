import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { GroleController } from './grole.controller';
import { GroleService } from './grole.service';
import { GlobalRole } from '../../model/GlobalRole/globalRole.model'
@Module({
  imports: [
    TypegooseModule.forFeature([GlobalRole]),
  ],
  controllers: [GroleController],
  providers: [GroleService]
})
export class GroleModule { }
