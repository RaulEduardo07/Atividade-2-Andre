function errorHandler(err, req, res, next) {
  console.error("Erro capturado:", err);

  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map(e => e.message);
    return res.status(400).json({
      message: "Erro de validação",
      errors
    });
  }

  if (err.name === "CastError" && err.kind === "ObjectId") {
    return res.status(400).json({
      message: "ID inválido"
    });
  }


  return res.status(500).json({
    message: "Erro interno no servidor"
  });
}

module.exports = errorHandler;
