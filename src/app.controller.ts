import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express'; //added for safety
import { ApiOperation, ApiTags } from '@nestjs/swagger'; //this gets the apitags from the swagger (must install with npm first)

@ApiTags('status')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: 'Show status of operation',
  })
  getAppStatus(@Req() req: Request) {
    const baseUrl = req.protocol + '://' + req.get('host'); //get the url by concatenating the req protocol with the host
    return this.appService.getAppStatus(baseUrl);
  }
}
