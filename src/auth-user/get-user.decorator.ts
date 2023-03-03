import { ExecutionContext, createParamDecorator } from "@nestjs/common";

export const GetUser=createParamDecorator((data:never,ctx:ExecutionContext)=>{
const req=ctx.switchToHttp().getRequest()
return req.user
})