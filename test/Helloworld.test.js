import { HelloWorld } from "../src/HelloWorld";

describe("The Hello World project", () => {
    it('says Hello World', () => {
        const helloWorld = new HelloWorld();

        expect(helloWorld.helloWorld()).toEqual('Hello World');
    });
});
