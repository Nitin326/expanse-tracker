import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@ApiTags('Dashboard')
export class DashboardController {

    constructor(private readonly dashboadService: DashboardService){}

    @Get('/profile')
    getProfile(@Req() req: Request){
    const user: any = req.body;
    const userId = user.userId;
    return this.dashboadService.getProfile(userId);
    }
}

