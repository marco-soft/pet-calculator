const _ = require("lodash");
const dbObj = require("../store/db.json");

module.exports = {
  cachorro: {
    racionDiaria: (meses, peso) => {
      const cachorros = dbObj.Cachorros;
      console.log(meses, peso);
      return (
        _.find(cachorros, (c) => c.Meses === meses).Porcentaje * peso * 1000
      );
    },
    racionMensual: (meses, peso) => {
      const cachorros = dbObj.Cachorros;
      return (
        _.find(cachorros, (c) => c.Meses === meses).Porcentaje *
        peso *
        1000 *
        30
      );
    },
  },
  mediana: {
    racionDiaria: (nivel, peso) => {
      const medianas = dbObj["Razas medianas y grandes"];
      return (
        _.find(medianas, (c) => c["Nivel de Actividad Fisica"] === nivel)
          .Porcentaje *
        peso *
        1000
      );
    },
    racionMensual: (nivel, peso) => {
      const medianas = dbObj["Razas medianas y grandes"];
      return (
        _.find(medianas, (c) => c["Nivel de Actividad Fisica"] === nivel)
          .Porcentaje *
        peso *
        1000 *
        30
      );
    },
  },
  pequenia: {
    racionDiaria: (nivel, peso) => {
      const gatos = dbObj["Razas Pequenas"];
      return (
        _.find(gatos, (c) => c["Nivel de Actividad Fisica"] === nivel)
          .Porcentaje *
        peso *
        1000
      );
    },
    racionMensual: (nivel, peso) => {
      const gatos = dbObj["Razas Pequenas"];
      return (
        _.find(gatos, (c) => c["Nivel de Actividad Fisica"] === nivel)
          .Porcentaje *
        peso *
        1000 *
        30
      );
    },
  },
  gato: {
    racionDiaria: (nivel, peso) => {
      const gatos = dbObj.Gatos;
      console.log(nivel, peso);
      return (
        _.find(gatos, (c) => c["Nivel de actividad fisica"] === nivel)
          .Porcentaje *
        peso *
        1000
      );
    },
    racionMensual: (nivel, peso) => {
      const gatos = dbObj.Gatos;
      return (
        _.find(gatos, (c) => c["Nivel de actividad fisica"] === nivel)
          .Porcentaje *
        peso *
        1000 *
        30
      );
    },
  },
};
