import swellNode from "swell-node"
export default async function Handler(req, res){
    const swell = swellNode.init(process.env.swell_id, process.env.swell_key);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    //return res.json();
    try {
        const products = await swell.get('/products', {
          active: true
        });
        res.send(products);
      } catch (err) {
        console.error(err);
      }
    
}