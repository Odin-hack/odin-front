self.onmessage = async function (event) {
    const data = JSON.parse(event.data);

    newBlock = data?.newBlock || false;

    if (data.startNonce !== undefined && data.endNonce !== undefined) {
        await processNonceRange(data.block, data.startNonce, data.endNonce);
    }
};

let newBlock = false;

async function processNonceRange(block, startNonce, endNonce) {
    let nonce = startNonce;
    let hashes = 0;

    while (nonce < endNonce) {
        hashes += 1;
        if (newBlock) {
            postMessage(`${'_'} ${'_'} ${'_'} ${'_'} ${'_'} ${hashes}`);
            return;
        } //TODO остановить, если пришел новый блок

        const timestamp = Date.now();
        const hash = await calculateHash(block.index, block.previousHash, block.data, nonce, timestamp, block.minerId);

        let validState = isValidBlock(hash, block.mainFactor, block.shareFactor);

        if (validState === 'valid') {
            postMessage(`valid ${hash} ${nonce} ${timestamp} ${block.minerId} ${hashes}`);
            hashes = 0;
        } else if (validState === 'share') {
            postMessage(`share ${hash} ${nonce} ${timestamp} ${block.minerId} ${hashes}`);
            hashes = 0;
        }

        postMessage(`${'_'} ${'_'} ${'_'} ${'_'} ${'_'} ${hashes}`);

        nonce += 1;
    }

    postMessage(`${'_'} ${'_'} ${'_'} ${'_'} ${'_'} ${hashes}`);
}

async function calculateHash(index, previousHash, data, nonce, timestamp, minerId) {
    const input = `${index}-${previousHash}-${data}-${nonce}-${timestamp}-${minerId}`;
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(input);

    const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

function isValidBlock(hash, mainFactor, shareFactor) {
    if (typeof hash !== 'string' || !/^[0-9a-fA-F]+$/.test(hash)) {
        return 'notValid';
    }

    const value = BigInt('0x' + hash);
    const mainFactorBigInt = BigInt(mainFactor);
    const shareFactorBigInt = BigInt(shareFactor);

    if (value < mainFactorBigInt) {
        return 'valid';
    } else if (value < shareFactorBigInt) {
        return 'share';
    } else {
        return 'notValid';
    }
}
