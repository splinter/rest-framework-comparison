/*export default function(router:any){
  return new Fruit(router);
}*/

import MessageUtils from '../modules/message-utils.js';

module.exports = function(router:any){
  return new Fruit(router);
}


class Fruit {
   constructor(app:any) {
	app.get('/fruit/:id',this.get);
        app.get('/fruit/:id/move-fruit', this.moveFruit);
   }

   private get(req:any,res:any){
	console.log('Fruit has been request');
	res.send(MessageUtils.SuccessMsg('Here is your fruit'));
   }

   private moveFruit(req:any,res:any){

   }
}
