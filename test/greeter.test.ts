/// <refrence path="../source/interfaces/interfaces.d.ts" />

import {expect} from "chai";
import Greeter from "../source/entities/greeter";

describe("Greeter Class", () => {
    it("Should set msg when an instance is created", () => {
        let expected = "world!";
        let greeter = new Greeter(expected);
        expect(greeter.greeting).eql(expected);
    });

    it("Should greet", () => {
        let greet = "world!";
        let greeter = new Greeter(greet);
        let actual = greeter.greet();
        let expected = `Hello, ${greet}`;
        expect(actual).eql(expected);
    });
});
