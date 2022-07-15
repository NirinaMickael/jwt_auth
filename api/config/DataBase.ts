import { MongoClient } from "mongodb";
const uri = "mongodb+srv://Mickael:55zDxhTbEZuPf6Hi@newcluster.aqemw.mongodb.net/?retryWrites=true&w=majority"
export class ConnnectDataBase {
   static client: MongoClient;
   constructor(){
      ConnnectDataBase.client = new MongoClient(uri);
   }
   static async open () {
      try {
         await ConnnectDataBase.client.connect();
         console.log("okey ")
         // client.db("client").collection();
     } catch (error) {
         console.log(error);
     }finally{
       setTimeout(() => {ConnnectDataBase.client.close()}, 1500)
     }
   }
   public getDb() : MongoClient{
      return ConnnectDataBase.client;
   }
};
// ConnnectDataBase.db = new MongoClient(uri);
// async _connectDataBase(client:MongoClient) {
//     // const uri = "mongodb+srv://Mickael:55zDxhTbEZuPf6Hi@newcluster.aqemw.mongodb.net/?retryWrites=true&w=majority";
//     // const client = new MongoClient(uri, {});
//     // this.listDataBase(client)
//     try {
//         await client._connect();
//         // client.db("client").collection()
//         this.listDataBase(client);
//     } catch (error) {
//         console.log(error);
//     }finally{
//       setTimeout(() => {client.close()}, 1500)
//     }
//   }
//   async listDataBase(client : MongoClient) {
//     console.log("Databases");
//     const dataBaseList = await client.db().admin().listDatabases();
//     // console.log(dataBaseList)
//     dataBaseList.databases.forEach(e=>console.log(e))
//   }