import { Controller, Get, Param, Patch, ParseIntPipe, UseGuards } from '@nestjs/common';
import { SolicitacoesService } from './solicitacoes.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('solicitacoes')
export class SolicitacoesController {
  constructor(private readonly solicitacoesService: SolicitacoesService) { }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('gestor', 'auditor')
  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.solicitacoesService.buscarPorId(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('gestor', 'auditor', 'solicitante')
  @Get('consultar-perfil/:id')
  consultarPerfil(@Param('id', ParseIntPipe) id: number) {
    return this.solicitacoesService.consultarPerfil(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('gestor')
  @Patch('aprovar/:id')
  aprovar(@Param('id', ParseIntPipe) id: number) {
    return this.solicitacoesService.aprovar(id);
  }

  @Get('relatorio')
  @Roles('gestor', 'auditor')
  obterRelatorio(@Param('id', ParseIntPipe) id: number) {
    return this.solicitacoesService.obterRelatorio(id);
  }


}