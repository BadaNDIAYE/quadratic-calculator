function quadraticRoots(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
      return [
        (-b + Math.sqrt(discriminant)) / (2 * a),
        (-b - Math.sqrt(discriminant)) / (2 * a)
      ];
    } else if (discriminant === 0) {
      return [-b / (2 * a)];
    } else {
      return [];
    }
  }
  
  test('calculates roots correctly', () => {
    expect(quadraticRoots(1, -3, 2)).toEqual([2, 1]);
    expect(quadraticRoots(1, -2, 1)).toEqual([1]);
    expect(quadraticRoots(1, 0, 1)).toEqual([]);
  });
  