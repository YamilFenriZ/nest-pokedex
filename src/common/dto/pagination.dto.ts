import { IsOptional, IsPositive, Min, IsISO31661Alpha2, IsNumber } from "class-validator";

export class PaginationDto{

    @IsOptional()
    @IsPositive()
    @IsNumber()
    @Min(1)
    limit?: number;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    offset?: number;
}