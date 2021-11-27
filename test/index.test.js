const getFile = require('../index');

const arrayMock = [
    {
        FileList: [ 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList' ]
    }
]

describe('getFile::', () => {
    it('must be function', () => {
        expect(typeof getFile).toBe('function');
    });

    it('must return array with results', async () => {
        const result = await getFile('/home/thiiagoms/Documents/nodepath/markdown-links-parse/test/files/example.md');
        expect(result).toEqual(arrayMock);
    });

    it('throw error for file not found', () => {
        async function error() {
            await getFile('/home/thiiagoms/Documents/nodepath/markdown-links-parse/test/files/');
            expect(error).toThrowError(/[*] File not found/)
        }
    });
});