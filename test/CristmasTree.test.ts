import { HelloWorld } from '../src/HelloWorld';

describe('The christmas tree function', () => {
    it('says Hello World', () => {
        const helloWorld = new HelloWorld();

        expect(helloWorld.helloWorld()).toEqual('Hello World');
    });
});
