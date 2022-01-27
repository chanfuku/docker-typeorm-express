// ./api-v1/paths/worlds.js
export default function(worldsService) {
  let operations = {
    GET
  };

  function GET(req, res, next) {
    res.status(200).json(worldsService.getWorlds(req.query.worldName));
  }


  return operations;
}
