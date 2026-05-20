import json
import pathlib
import unicodedata

app_path = pathlib.Path('app.js')
text = app_path.read_text(encoding='utf-8')
text = unicodedata.normalize('NFC', text)

user_questions = [
    "¿Qué es TestNet?",
    "¿Qué significaría, si así fuese, que una moneda digital tiene más eficiencia que una que no sea digital?",
    "Las billeteras criptográficas, ¿almacenan su criptografía?",
    "¿Cuáles son tipos de monedas digitales?",
    "¿Qué tipo de carteras criptográficas existen?",
    "¿Cuál es una característica de las monedas digitales de un banco central?",
    "¿Qué es la minería de bitcoin?",
    "¿Qué es blockchain?",
    "¿Qué es view?",
    "¿Qué es Ethereum?",
    "¿Cuál es la afirmación correcta?",
    "¿Cuál es la afirmación correcta?",
    "¿Qué significa la inmutabilidad en los contratos inteligentes?",
    "¿Cuántos lugares define Solidity para guardar datos?",
    "¿Qué hace la declaración if-else?",
    "¿Qué debe incluir un documento de especificación de software?",
    "¿Qué proyecto anunció Hyperledger a finales de 2018?:",
    "¿Qué es la puerta de entrada en Hyperledger Burrow?:",
    "¿Cuáles son las características de Hyperledger Indy?:",
    "¿En qué año nació el proyecto Hyperledger?:",
    "¿Cuál es el objetivo real de Hyperledger?:",
    "¿Cuál es la afirmación correcta?:",
    "¿Qué es el motor de consenso en Hyperledger Burrow?:",
    "¿Cuál es la afirmación incorrecta?:",
    "¿Qué es el consumo de recuros?:",
    "¿Qué es Cello?:",
    "¿Qué es Caliper?:",
    "¿Cuál es la afirmación correcta?:",
    "¿Qué proporciona Cello?:",
    "¿Quién proporcionó una visión general de Caliper en la conferencia Consensus en mayo de 2019?:",
    "¿Cuál es la afirmación incorrecta?:",
    "¿Cuál es una característica de Hyperledger Composer?:",
    "¿Cuál es la afirmación correcta?:",
    "¿Qué es el crowdfunding descentralizado?:",
    "¿Cómo pueden ser divididos los activos digitales?:",
    "¿Qué establece el artículo 20 del Reglamento General de Protección de Datos de la Unión Europea?:",
    "¿Cuáles son características de los datos generados en línea?:",
    "¿Las siglas para el concepto Conozca a su Cliente son?:",
    "¿Cuál es la afirmación correcta?:",
    "¿A qué se refieren las ventas y el comercio?:"
]

missing = []
for q in user_questions:
    normalized_q = unicodedata.normalize('NFC', q)
    if normalized_q not in text:
        missing.append(q)

print(json.dumps({'missing_count': len(missing), 'missing': missing}, ensure_ascii=False, indent=2))
