export default (petService) => {

  const GET = (req, res, next) => {
    res.status(200).json(petService.getPets());
  }

  const POST = (req, res, next) => {
    res.status(200);
  }

  return {
    GET,
    POST,
  }
}
