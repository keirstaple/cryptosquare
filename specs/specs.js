describe ('alphaNumeric', function(){
  it("removes spaces and punctuations", function(){
    expect(alphaNumeric("Life is Cool.")).to.equal("LifeisCool")
  });
});

describe ('downCase', function(){
  it("converts string to lowercase", function(){
    expect(downCase("LifeisCool")).to.equal("lifeiscool")
  });
});

describe ('countChars', function(){
  it("counts the character number in the string", function(){
    expect(countChars("lifeiscool")).to.equal("10")
  });
});

describe ('squareRoot', function(){
  it("takes the square root of the number of characters", function(){
    expect(squareRoot("10")).to.equal("3.16")
  });
});

describe ('roundInteger', function(){
  it("takes the square root of the number of characters and rounds to the nearest whole integer", function(){
    expect(roundInteger("3.16")).to.equal("3")
  });
});

describe ('lineLength', function(){
  it("makes all line lengths= roundInteger", function(){
    expect(lineLength("3.16")).to.equal("3")
  });
});
