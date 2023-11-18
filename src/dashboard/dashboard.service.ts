import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from 'src/schema/user.schema';

@Injectable()
export class DashboardService {

    constructor(@InjectModel('User') private readonly userModel: Model<UserDocument>){}

    async getProfile(userId: string){
     const profile = await this.userModel.findById(userId);
     return {
        status:200,
        message:'This is User Profile',
        data: profile
     }
    }
}
