import { Rental } from "./rental";
import { ResponseModel } from "./responseModel";

export interface RenralResponseModel extends ResponseModel{
    data:Rental[]
}