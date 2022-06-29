import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger'; //this gets the apitags from the swagger (must install with npm first)

@ApiTags('status')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: 'Show status of operation',
  })
  getAppStatus(): string {
    return this.appService.getAppStatus();
  }
}
