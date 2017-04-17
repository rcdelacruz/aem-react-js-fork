// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/95eb7b2527a28281cdbf480c0560744bc5190465/assertion-error/assertion-error.d.ts
declare module 'assertion-error' {
	class AssertionError implements Error {
		constructor(message: string, props?: any, ssf?: Function);
		name: string;
		message: string;
		showDiff: boolean;
		stack: string;
	}
	export = AssertionError;
}