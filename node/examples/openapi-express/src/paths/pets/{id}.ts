export default (petService) => {

  const GET = (req, res, next) => {
    res.status(200).json(petService.getPet(Number(req.params.id)));
  }

  return {
    GET,
  }
}
