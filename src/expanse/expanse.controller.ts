import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
  InternalServerErrorException,
  Query,
} from '@nestjs/common';
import { ExpanseService } from './expanse.service';
import { ExpanseDto, UpdateExpanseDto } from './dto/expanse.dto';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('expanse')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@ApiTags('Exapnse')
export class ExpanseController {
  constructor(private readonly expanseService: ExpanseService) {}

  @Post()
  create(@Body() expanseDto: ExpanseDto, @Req() req: Request) {
    const user: any = req.body;
    const userId = user.userId;
    try {
      return this.expanseService.create(expanseDto, userId);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @Get()
  @ApiQuery({ name: 'Food', required: false, type: String })
  @ApiQuery({ name: 'Transportation', required: false, type: String })
  @ApiQuery({ name: 'Entertainment', required: false, type: String })
  findAll(@Req() req: Request,@Query('Food') Food: string, @Query('Transportation') Transportation: string,@Query('Entertainment') Entertainment: string,) {
    const user: any = req.body;
    const userId = user.userId;
    try {
      return this.expanseService.findAll(userId,Food,Transportation,Entertainment);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @Get("/:id")
  findOne(@Param('id') id : string ,@Req() req: Request) {
    const user: any = req.body;
    const userId = user.userId;
    try {
      return this.expanseService.findOne(id,userId);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @Patch("/:id")
  update(@Param('id') id : string,@Req() req: Request, @Body() updateExpanseDto: UpdateExpanseDto) {
    const user: any = req.body;
    const userId = user.userId;
    try {
      return this.expanseService.update(id,userId,updateExpanseDto);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @Delete('/:id')
  remove(@Param('id') id : string,@Req() req: Request) {
    const user: any = req.body;
    const userId = user.userId;
    return this.expanseService.remove(id,userId);
  }
}
