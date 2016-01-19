describe ('isTriangle', function(){
  it("determines if 3 sides create a valid triangle", function(){
    expect(isTriangle (2,3, 10)).to.equal(false)
  });

  it("determines if 3 sides create a valid triangle", function(){
    expect(isTriangle(2,2,2)).to.equal(true)
  });
});

describe('triangleType', function(){
  it("determine if the 3 sides make an equilateral triangle", function(){
    expect(triangleType (2,2,2)).to.equal("equilateral")
  });
});

describe('triangleType', function(){
  it("determine if the 3 sides make an isosceles triangle", function(){
    expect(triangleType (2,2,3)).to.equal("isosceles")
  });
});

describe('triangleType', function(){
  it("determine if the 3 sides make an scalene triangle", function(){
    expect(triangleType (2,3,4)).to.equal("scalene")
  });
});

describe('triangle', function(){
  it("determines if 3 sides make a scalene triangle", function(){
    expect(triangle(2,3,4)).to.equal("scalene")
  });
  it("determines if 3 sides create a valid triangle", function(){
    expect(triangle(2,2,8000)).to.equal("These sides do not a triangle make.")
  });
});
