function Trocar() {
	var real = 1;
	var pArg = 18.47;
	var fAntilhas = 0.34;
	var boliviano = 1.3;
	var pChile = 148.15;
	var pCol = 721.78;
	var dolar = 0.19;
	var dolGuianense = 39.23;
	var guarani = 1291.7;
	var soles = 0.77;
	var dolSuriname = 4;
	var pUruguaio = 7.99;
	var bolivar = 766146.97;

	var meuDinheiro = real;
	var meuDinheiro = parseFloat(document.getElementById("valor").value);

	var totalpArg = meuDinheiro * pArg;
	var totalfAntilhas = meuDinheiro * fAntilhas;
	var totalboliviano = meuDinheiro * boliviano;
	var totalpChile = meuDinheiro * pChile;
	var totalpCol = meuDinheiro * pCol;
	var totaldolar = meuDinheiro * dolar;
	var totaldolGuianense = meuDinheiro * dolGuianense;
	var totalguarani = meuDinheiro * guarani;
	var totalsoles = meuDinheiro * soles;
	var totaldolSuriname = meuDinheiro * dolSuriname;
	var totalpUruguaio = meuDinheiro * pUruguaio;
	var totalbolivar = meuDinheiro * bolivar;

	var meuDinheiroF = meuDinheiro.toFixed(2);
	var pArgF = totalpArg.toFixed(2);
	var fAntilhasF = totalfAntilhas.toFixed(2);
	var bolivianoF = totalboliviano.toFixed(2);
	var pChileF = totalpChile.toFixed(2);
	var pColF = totalpCol.toFixed(2);
	var dolarF = totaldolar.toFixed(2);
	var dolGuianenseF = totaldolGuianense.toFixed(2);
	var guaraniF = totalguarani.toFixed(2);
	var solesF = totalsoles.toFixed(2);
	var dolSurinameF = totaldolSuriname.toFixed(2);
	var pUruguaioF = totalpUruguaio.toFixed(2);
	var bolivarF = totalbolivar.toFixed(2);

	if (document.getElementById("pais").value == "Argentina") {
		document.getElementById(
			"valorConvertido"
		).innerText = `Você tem ${pArgF} Pesos Argentinos`;
	} else {
		if (document.getElementById("pais").value == "Aruba") {
			document.getElementById(
				"valorConvertido"
			).innerText = `Você tem ${fAntilhasF} Florins das Antilhas Neerlandesas`;
		} else {
			if (document.getElementById("pais").value == "Bolívia") {
				document.getElementById(
					"valorConvertido"
				).innerText = `Você tem ${bolivianoF} Boliviano da Bolívia`;
			} else {
				if (document.getElementById("pais").value == "Chile") {
					document.getElementById(
						"valorConvertido"
					).innerText = `Você tem ${pChileF} Pesos Chilenos`;
				} else {
					if (document.getElementById("pais").value == "Colômbia") {
						document.getElementById(
							"valorConvertido"
						).innerText = `Você tem ${pColF} Pesos Colombianos`;
					} else {
						if (document.getElementById("pais").value == "Curaçau") {
							document.getElementById(
								"valorConvertido"
							).innerText = `Você tem ${fAntilhasF} Florins das Antilhas Neerlandesas`;
						} else {
							if (document.getElementById("pais").value == "Equador") {
								document.getElementById(
									"valorConvertido"
								).innerText = `Você tem ${dolarF} Dólares`;
							} else {
								if (document.getElementById("pais").value == "Guiana") {
									document.getElementById(
										"valorConvertido"
									).innerText = `Você tem ${dolGuianenseF} Dólares Guianenses`;
								} else {
									if (document.getElementById("pais").value == "Paraguai") {
										document.getElementById(
											"valorConvertido"
										).innerText = `Você tem ${guaraniF} Guaranis`;
									} else {
										if (document.getElementById("pais").value == "Peru") {
											document.getElementById(
												"valorConvertido"
											).innerText = `Você tem ${solesF} Soles`;
										} else {
											if (document.getElementById("pais").value == "Suriname") {
												document.getElementById(
													"valorConvertido"
												).innerText = `Você tem ${dolSurinameF} Dólares Surinamêses`;
											} else {
												if (document.getElementById("pais").value == "Uruguai") {
													document.getElementById(
														"valorConvertido"
													).innerText = `Você tem ${pUruguaioF} Pesos Uruguaios`;
												} else {
													if (document.getElementById("pais").value == "Venezuela") {
														document.getElementById(
															"valorConvertido"
														).innerText = `Você tem ${bolivarF} Bolívar Venezuelanos`;
													} else {
														document.getElementById(
															"valorConvertido"
														).innerText = `Você tem que escolher um país`;
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
