document.getElementById('quadratic-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    const discriminant = b * b - 4 * a * c;
    let result;

    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        result = `The roots are ${root1.toFixed(2)} and ${root2.toFixed(2)}`;
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        result = `The root is ${root.toFixed(2)}`;
    } else {
        result = 'No real roots';
    }

    document.getElementById('result').textContent = result;
});
