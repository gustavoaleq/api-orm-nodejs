await database.Pessoas
                .update({ ativo: false}, {where: {id: Number(estudanteId)}})
            await database.Matriculas
                .update({ status: 'cancelado'}, {where: { estudante_id: Number(estudanteId)}})
            return res.status(200).json({message: `matrículas ref. estudante ${estudanteId} canceladas.`})