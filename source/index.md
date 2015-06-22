---
title: Blockapps Documentation

language_tabs:
  - javascript
  - shell

toc_footers:
  - <a href='http://github.com/tripit/slate'>Documentation Powered by Slate</a>

includes:

search: true
---

# Introduction
All blockchain based applications will need to pull information from the blockchain. We’ve made that process simple. We’ve created an intuitive RESTful API for querying the Ethereum Blockchain. Our Haskell based Ethereum network peer (client) is compliant with PoC9 and can also be used as a web server. But you don’t have to install the peer - simply follow the links below to try the API.

We have static GET routes for transactions, blocks and account states. More generally, we support query strings. See the descriptions within, including examples. Also, check out a demo of how to parse and visualize the records you’ve requested.

Take a look at our build test results.

Coming Soon:

Push Notifications - be notified of new blocks, transaction confirmations, as they happen. Transaction Signing - sign transactions in the browser, and push them to the network - without running a client locally. Network Statistics - view the health of the network, in real time.

#Endpoints

>Our javascript examples use the jQuery library

There are three REST endpoints, corrensponding to the query of a block, address and a transaction, respectively.

All of these queries can be appended with page=n for pageing. Pageing starts at 0 so /query?block=xxxx is equivalent to /query?block=xxxx&page=0. For blocks we support indexing. If you want to query a large range, supply index=n where n-1 is the last block that you queried. This will supersede paging once we include indexing for accounts.

All requests are to stablenet.blockapps.net

###Block

```javascript
$.get( "stablenet.blockapps.net/query/block"))
  .done(function( data ) {
    //operations on the returned json block
  });
```

```shell
curl "http://stablenet.blockapps.net/query/block"
```

>The above command returns JSON structured like this:

```json
[
  {
    "next":"/query/block?index=82",
    "kind":"Block",
    "blockUncles":[],
    "receiptTransactions":[],
    "blockData":{
      "extraData":0,
      "gasUsed":0,
      "gasLimit":3141592,
      "kind":"BlockData",
      "unclesHash":"1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
      "mixHash":"0000000000000000000000000000000000000000000000000000000000000000",
      "receiptsRoot":"56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
      "number":0,
      "difficulty":131072,
      "timestamp":"1970-01-01T00:00:00.000000000000Z",
      "coinbase":"0",
      "parentHash":"0000000000000000000000000000000000000000000000000000000000000000",
      "nonce":42,
      "stateRoot":"9178d0f23c965d81f0834a4c72c6253ce6830f4022b1359aaebfc1ecba442d4e",
      "transactionsRoot":"56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"
    }
  }
]
```

`GET /query/block?`

Note that blocks come with a next field that contains the index for the next 100 results.

Parameter |	Description
--------- | -----------
number |	Returns blocks that match a specific number
maxnumber |	Returns blocks with a number less than a maximum
minnumber |	Returns blocks with a number greater than a minimum
gaslim |	Returns blocks that match the specified gas limit
maxgaslim |	Returns blocks with agas limit less than a maximum gas limit
mingaslim |	Returns blocks with a gas limit greater than a minimum
gasused |	Returns blocks that match the specified gas used
maxgasused |	Returns blocks with gas used less than a maximum
mingasused |	Returns blocks with gas used greater than a minimum
diff |	Returns blocks with a specific difficulty
maxdiff |	Returns blocks with a difficulty less than a maximum
mindiff |	Returns blocks with a difficulty greater than a minimum
txaddress |	Queries blocks by their contained transaction addresses
coinbase |	Queries blocks by the coinbase of contained transactions
address |	Queres blocks by the address of contained transactions
hash |	Queries blocks by their hash

### Account

```javascript
$.get( "stablenet.blockapps.net/query/account"))
  .done(function( data ) {
    //operations on the returned json block
  });
```

```shell
curl "http://stablenet.blockapps.net/query/account"
```

>The above command returns JSON structured like this:

```json
[
  {
    "contractRoot":"56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "next":"/query/account?index=b09a536c0aedf2b61dee9b8e0137bf5cb519bf340",
    "kind":"AddressStateRef",
    "balance":"1",
    "address":"1",
    "codeHash":"c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
    "nonce":0
  }
]
```

`GET /query/account?`

Parameter |	Description
--------- | -----------
balance |	Returns accounts that match a specific balance
maxbalance |	Returns accounts with a balance less than a maximum
minbalance |	Returns accounts with a balance greater than a minimum
nonce |	Returns accounts that match a specific nonce
maxnonce |	Returns accounts with a nonce less than a maximum
minnonce |	Returns accounts with a nonce greater than a minimum
address |	Returns accounts with the specified address


###Transaction

```javascript
$.get( "stablenet.blockapps.net/query/transaction"))
  .done(function( data ) {
    //operations on the returned json block
  });
```

```shell
curl "http://stablenet.blockapps.net/query/transaction"
```

>The above command returns JSON structured like this:

```json
[
  {
    "transactionType":"FunctionCall",
    "next":"/query/transaction?index=39780",
    "hash":"831716403cf9919e96ef122234b632e3be34c69c475d4f576b86a14b4b47eddc",
    "gasLimit":90000,
    "codeOrData":"de5f72fd",
    "gasPrice":10000000000000,
    "to":"b8cd5067227fdec355c5531accbcdf734a0869e8",
    "value":"0",
    "from":"1c11aa45c792e202e9ffdc2f12f99d0d209bef70",
    "blockNumber":32308,
    "r":"6acd4884c360d5906fc1434313c4325e6a1ff90a8dccffdc2879abab03385431",
    "s":"2ba4e89ebc46a0800ef71876f6501f34caf8d098b57cbb73c64739e04894aaf4",
    "v":"1b",
    "nonce":0
  }
]
```

`GET /query/transaction?`

Parameter |	Description
--------- | -----------
from |	Returns transactions from the specified address
to |	Returns transactions to the specified address
address |	Returns transactions involving the specified address
value |	Returns transactions of a specific value
maxvalue | Returns transactions with a value less than a maximum
minvalue | Returns transactions with a value greater than a minimum
gasprice | Returns transactions with the specified gas price
maxgasprice |	Returns transactions with a gas price less than a maximum
mingasprice |	Returns transactions with a gas price greater than a minimum
gaslimit | Returns transactions with the specified gas limit
maxgaslimit |	Returns transactions with a gas limit less than a maximum
mingaslimit |	Returns transactions with a gas limit greater than a minimum
blocknumber |	Returns Transactions with a blocknumber

##Extra parameters

Parameter |	Description
--------- | -----------
raw=1 |	passes the pre-processor and gives you the raw result (default: raw=0)
index= |	a cursor for querying the next 100 items correctly. Also see the next field.


##Type of transactions

Transaction	| Format
----------- | ------
FunctionCall |	toAddress == Null and len(code) > 0
Contract | toAddress == Null and len(code) >= 0
Transaction |f	toAddress != Null and len(code) == 0
