"use strict"

export default class MessageUtils {
  
   static SuccessMsg(msg:string,code?:number) {
	code = code || 200;
	return {
	   code,
           msg
        };
   }
}
