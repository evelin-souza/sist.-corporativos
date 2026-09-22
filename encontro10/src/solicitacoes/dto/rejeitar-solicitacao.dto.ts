import { IsInt, IsNotEmpty, IsString, MinLength, MaxLength, Min } from 'class-validator';

export class RejeitarSolicitacaoDto {
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  versao: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(200)
  justificativa: string;
}