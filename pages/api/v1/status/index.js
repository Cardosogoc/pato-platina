function status(request, response) {
  response.status(200).json({ jogo: "Dark Souls" });
}

export default status;
