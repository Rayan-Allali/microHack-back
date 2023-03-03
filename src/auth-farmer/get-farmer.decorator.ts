import { ExecutionContext, createParamDecorator } from "@nestjs/common";

export const GetFarmer=createParamDecorator((data:never,ctx:ExecutionContext)=>{
const req=ctx.switchToHttp().getRequest()
return req.farmer
})