require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remind mixture harvest perfect flip tattoo'; 
let testAccounts = [
"0x1311098583bf24fec1e36828d0984f297b03484a8294aa92ec36c6f5fb62e2e7",
"0x88f9019f75deb0dba4bce4bcf57106e60f52f19b2b4f456cb2bc91ba96a3add7",
"0x34548e90215397f2c32d22ed24ef7752450a1123b50f0b51816970da09c3303a",
"0x059ede1e2f2f6d73758724ea77f4978a88416030d1948be0dfe628e001e8f4d5",
"0x43003623bebe3135fe9bc0815ece4761217b16873361488ad422b1e99a372adb",
"0xe4377b06b2b9d29951f7edfa56153ff20d1e4661d78800b7f16a496978637a25",
"0x871cf0d8c8fee53e2018f9b410b33fdc14f313d2859b288d1e1640c7dfaf9a68",
"0xbaf565beeb40dbe91c8aea670d0924d0bbe68f1daeea5b7bba024109ec92fd06",
"0xd4d3b1f1ea59998880bbf0c7649b5e75854508e5559e1ffdca654bd2e032806f",
"0xa5673495e1bcdf2dc9edda896d6ce82da9f4c7498fd31009e5719212af2b612c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

