function assignGrade(score) {
  let result = "F"; //y

  if (score > 0.9) { //y
    result = "A"; //NO
  } else if (score > 0.8) { //y
    result = "B"; //NO
  } else if (score > 0.7) { //y
    result = "C"; //y
  }

  return result;//y
}

module.exports = assignGrade
