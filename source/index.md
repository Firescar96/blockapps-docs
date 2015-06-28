---
title: Blockapps Documentation

language_tabs:
  - javascript
  - shell

toc_footers:
  - Copyright © 2015 by <a href="http://www.consensys.net">ConsenSys, LLC</a>

includes:

search: true
---

# Introduction


Blockchain-based applications need to pull information from the blockchain. BlockApps makes that process simple with an intuitive RESTful API for querying the Ethereum Blockchain.


## dApps

### What is a dApp?

A dApp is a **decentralized App**.

dApps on Ethereum can be entirely decentralized, meaning that they can run entirely peer-to-peer, like BitTorrent.

Entirely P2P dApps require downloading a stack of desktop software tools so your computer can be an Ethereum node that talks to the Ethereum network.

BlockApps helps you develop webapps more quickly by being that stack for you. Just use the BlockApps API to build and prototype webapps that interact with the Ethereum Blockhain in any web browser.

### How are dApps created?

A basic dApp consists of a frontend user interface in a web browser and a smart contract on the blockchain. They can be comprised of an unlimited number of parts and features on top of this. dApps can also call other dApps.

### What are the basic components of dApps on Ethereum?

Check out our <a href="#background">introductory tutorial</a> for a quick overview of basic dApp concepts.


## BlockApps

### How does BlockApps work?

Our Haskell-based Ethereum network peer (client) is compliant with the PoC9 Ethereum testnet and can also be used as a web server. But you don't have to install the peer, just use the API.

We have static GET routes for transactions, blocks and account states. More generally, we support query strings.

### Is there a demo or tutorial?

Yes! Visit the links at left for a demo and tutorial of how to parse and visualize blockchain records requested using the BlockApps API.


**Coming Soon:**

 * **Push Notifications** - be notified of new blocks, transaction confirmations, as they happen.

 * **Transaction Signing** - sign transactions in the browser, and push them to the network - without running a client locally.

 * **Network Statistics** - view the health of the network, in real time.


#Sample Queries

Check out some sample queries made using the BlockApps API...

Resources are located via GET routes. Requests are routed by the return type - blocks, accounts or transactions.

We have a few pre-built simple routes shown below, and the API supports a general querystring syntax. Routes are meant to be invoked via HTTP requests and return raw JSON.

##By Block

**Blocks are fetchable by a variety of queries**

* Grab the genesis block by <a href="http://stablenet.blockapps.net/query/block/number/0">number</a> or by <a href="http://stablenet.blockapps.net/query/block/hash/fd4af92a79c7fc2fd8bf0d342f2e832e1d4f485c85b9152d2039e03bc604fdca">hash</a>.

* Find blocks with a fair amount of <a href="http://stablenet.blockapps.net/query/block/gasrange/lower/100000/upper/150000">gas usage</a>.

* Or even, get the last 42 blocks - in <a href="http://stablenet.blockapps.net/query/block/last/42">real time</a>.


##By Account

**Accounts, too, are easily queried.**


* What's going on at address <a href="http://stablenet.blockapps.net/query/account/address/af8b2d3fe28201476fc0a3961f8f9690693f3ef4">af8b2d3fe28201476fc0a3961f8f9690693f3ef4</a>?

* Which accounts have nonce equal to <a href="http://stablenet.blockapps.net/query/account/nonce/2">two</a>?

* Does anyone have balance <a href="http://stablenet.blockapps.net/query/account/balance/33000000000000000000">33000000000000000000</a>?

##By Address

**See the transations to and from addresses:**

* A popular <a href="http://stablenet.blockapps.net/query/transaction/address/e1fd0d4a52b75a694de8b55528ad48e2e2cf7859">address</a>.

##By Transaction
**Get information about pushed transactions**

* The result of a contract creation <a
href="http://stablenet.blockapps.net/transactionResult/02237887f5a4104e205835f9e94c84435913435a6c34b0b582c5f706571cd40c">transaction</a>

#Endpoints

<aside class="notice">
  Our JavaScript examples use the jQuery library.
</aside>

There are multiple RESTful endpoints, corrensponding to:

  * operations on **blocks**,
  * operations on **addresses** and
  * opreations on **transactions**.

All requests are to *http://stablenet.blockapps.net*


##GET Block

```javascript
$.get( "http://stablenet.blockapps.net/query/block") {number: 42})
  .done(function( data ) {
    //operations on the returned json block
  });
```

```shell
curl "http://stablenet.blockapps.net/query/block?number=42"
```

>The command at right returns JSON structured like this:

```json
[
  {
    "next":"/query/block?index=43&number=42",
    "kind":"Block",
    "blockUncles":[],
    "receiptTransactions":
      [
        {
          "transactionType":"FunctionCall",
          "gasLimit":30000,
          "kind":"Transaction",
          "data":"00",
          "gasPrice":10000000000000,
          "to":
          {
            "address":"fd888462ba01400a37768e53791df4617c77cd08"
          },
          "value":16,
          "r":"244fd84898d7c25537dc9a19b03f7ebf2796de804eb886e40a5ba2b4ff994788",
          "s":"46ed2a17765fb10f46f9a70c2e5a8e3635113e03b5785b32b0f77c942e7188d1",
          "v":"1c",
          "nonce":0
        }
      ],
      "blockData":
        {
          "extraData":0,
          "gasUsed":0,
          "gasLimit":3141592,
          "kind":"BlockData",
          "unclesHash":"1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
          "mixHash":"0000000000000000000000000000000000000000000000000000000000000000",
          "receiptsRoot":"56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
          "number":42,
          "difficulty":132480,
          "timestamp":"2015-06-24T17:41:27.442848000000Z",
          "coinbase":"5b42bd01ff7b368cd80a477cb1cf0d407e2b1cbe",
          "parentHash":"6297f5531e118e73a204d5e2a1e1abef6650f3463375b9ce5439869b5271e95d",
          "nonce":18446744073709551615,
          "stateRoot":"9eb06ef32021054a4043cb65381910414d572e3ea5a1751036987cdc44c8e943",
          "transactionsRoot":"56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"
        }
  }
]
```

`GET /query/block?`

Note that blocks come with a next field that contains the index for the next 100 results.

Parameter |	Description
--------- | -----------
**number** |	Returns blocks that match a specific number
**blockid** | Returns blocks that match a specific blockid
**maxnumber** |	Returns blocks with a number less than a maximum
**minnumber** |	Returns blocks with a number greater than a minimum
**gaslim** |	Returns blocks that match the specified gas limit
**maxgaslim** |	Returns blocks with agas limit less than a maximum gas limit
**mingaslim** |	Returns blocks with a gas limit greater than a minimum
**gasused** |	Returns blocks that match the specified gas used
**maxgasused** |	Returns blocks with gas used less than a maximum
**mingasused** |	Returns blocks with gas used greater than a minimum
**diff** |	Returns blocks with a specific difficulty
**maxdiff** |	Returns blocks with a difficulty less than a maximum
**mindiff** |	Returns blocks with a difficulty greater than a minimum
**txaddress** |	Queries blocks by their contained transaction addresses
**coinbase** |	Queries blocks by the coinbase of contained transactions
**address** |	Queres blocks by the address of contained transactions
**hash** |	Queries blocks by their hash



## GET Account

```javascript
$.get( "http://stablenet.blockapps.net/query/account"), {address: "af8b2d3fe28201476fc0a3961f8f9690693f3ef4"})
  .done(function( data ) {
    //operations on the returned json block
  });
```

```shell
curl "http://stablenet.blockapps.net/query/account?address=af8b2d3fe28201476fc0a3961f8f9690693f3ef4"
```

>The above command returns JSON structured like this:

```json
[
  {
    "contractRoot":"56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "kind":"AddressStateRef",
    "balance":"1809251394333065553493296640760748560207343510400633812824226722060731360952",
    "address":"af8b2d3fe28201476fc0a3961f8f9690693f3ef4",
    "code":"",
    "nonce":864
  }
]
```

`GET /query/account?`

Parameter |	Description
--------- | -----------
**balance** |	Returns accounts that match a specific balance
**maxbalance** |	Returns accounts with a balance less than a maximum
**minbalance** |	Returns accounts with a balance greater than a minimum
**nonce** |	Returns accounts that match a specific nonce
**maxnonce** |	Returns accounts with a nonce less than a maximum
**minnonce** |	Returns accounts with a nonce greater than a minimum
**address** |	Returns accounts with the specified address

## GET Transaction

```javascript
$.get( "http://stablenet.blockapps.net/query/transaction"),{value:0})
  .done(function( data ) {
    //operations on the returned json block
  });
```

```shell
curl "http://stablenet.blockapps.net/query/transaction?value=0"
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
**from** |	Returns transactions from the specified address
**to** |	Returns transactions to the specified address
**address** |	Returns transactions involving the specified address
**value** |	Returns transactions of a specific value
**maxvalue** | Returns transactions with a value less than a maximum
**minvalue** | Returns transactions with a value greater than a minimum
**gasprice** | Returns transactions with the specified gas price
**maxgasprice** |	Returns transactions with a gas price less than a maximum
**mingasprice** |	Returns transactions with a gas price greater than a minimum
**gaslimit** | Returns transactions with the specified gas limit
**maxgaslimit** |	Returns transactions with a gas limit less than a maximum
**mingaslimit** |	Returns transactions with a gas limit greater than a minimum
**blocknumber** |	Returns Transactions with a blocknumber

```javascript
$.get( "http://stablenet.blockapps.net/transactionResult/4ee3298d059e3664673880db272aebd5215f23554265e3e1e9de6dbf02f9f9c2"))
  .done(function( data ) {
    //operations on the returned json block
  });
```

```shell
curl "http://stablenet.blockapps.net/transactionResult/4ee3298d059e3664673880db272aebd5215f23554265e3e1e9de6dbf02f9f9c2"
```

>The above command returns JSON structured like this:

```json
[
  {
    "contractRoot":"56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "kind":"AddressStateRef",
    "balance":"1809251394333065553493296640760748560207343510400633812824226722060731360952",
    "address":"af8b2d3fe28201476fc0a3961f8f9690693f3ef4",
    "code":"",
    "nonce":864
  }
]
```

`GET /transactionResult/#hash`

This route returns information about the the transaction passed to it as `#hash`


###Types of transactions

Transaction	| Format
----------- | ------
**Contract** | If `toAddress != Null` and `len(code)>=0` then we have a Contract.
**FunctionCall** | If `toAddress == Null` and `len(code)>0` then we have a FunctionCall.
**Transfer** |	If `toAddress != Null` and `len(code)==0` we have a Transfer.

##Extra parameters

Parameter |	Description
--------- | -----------
**raw** |	passes the pre-processor and gives you the raw result (default: raw=0).
**index** |	a cursor for querying the next 100 items correctly. Also see page.
**page** | append page=n to page any query with many results (default: page=0).*

**Paging**

Paging begins at 0 so `/query?block=xxxx` is equivalent to `/query?block=xxxx&page=0`.


**Indexing**

For blocks we support indexing. If you want to query a large range, supply index=n where n-1 is the last block that you queried. This will supersede paging once we include indexing for accounts.

#Demo

We have a demo application using the BlockApps API to create a block and address explorer. Try the demo below then follow the tutorial to see how it's built.

<aside class="">
 <a href="http://blockapps.net/demo/">DEMO</a>
</aside>


To learn how to build the demo, continue to the next section.


#Tutorial

##Building Your Own Address Explorer

Building an Address Explorer on top of BlockApps is easy. In fact, BlockApps does most of the work for you, providing all the information you need to query and display information about an account.

## Background

In order to build an address explorer, you must first know a bit about Ethereum. If you're completely new to Ethereum and we suggest you check out [ethereum101.org](http://ethereum101.org/).

Let's start with a basic understanding of blocks, blockchains, Ethereum, accounts, addresses, transactions, contracts, and gas.

* An **account** is an ethereum address that holds a specific amount of Ether, Ethereum's currency. Like Bitcoin, accounts can transfer Ether to other accounts (interchangeably, "account addresses"), as well as make more complex transactions listed below.

* A **transaction** is an interaction with the Ethereum blockchain. Transactions can be transfers of Ether between accounts; they can also add contracts onto the Ethereum blockchain, or call a function listed in one of those contracts.

* A **contract** is a piece of code that has been added to the blockchain that contains data and functions that can be called from transactions. Calling a function on a contract or adding a contract to the blockchain takes **gas**; gas is another word for the Ether in an Ethereum account, however in this case it's used to pay for the processing of that contract on the Ethereum network.

* A **block** is a chunk of data that contains a list of transactions. Transactions are processed by the Ethereum network in blocks, so when building an address explorer, we'll have to interact with those blocks as we go along. More on that later.


## Getting Started

Let's first get our basic code set up. (You can find the full code for this tutorial [here](https://github.com/tcoulter/address-explorer/tree/master/tutorial).)

The following is a slimmed down version of what's available in the repository. The version we'll create here won't contain an input box to enter your Ethereum address (we'll leave that as an experiment for the reader), and instead your Ethereum address will be pulled from the browser's query string. There are also many features that have been left out, but the good news is you'll see just how easy is it to get the bulk of an address explorer up and running.



```javascript
/* address-explorer.js */

$(document).on("ready", function() {
  console.log("Address Explorer JS up and running.");
});
```

#### address-explorer.js
(code at right)


```html
<!-- index.html -->

<!DOCTYPE html>
<html>
<head>
  <title>My Address Explorer</title>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" rel="stylesheet">
  <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
  <script type="text/javascript" src="./address-explorer.js"></script>
</head>
<body>
  <div class="container">
    <h1 class="twelve columns">
      Your Account
    </h1>
    <div class="five columns">
      <span id="displayed_balance" class="value">&nbsp;</span>
      <br><span class="label">Total Balance</span>
    </div>
    <div class="four columns">
      <span id="transaction_count" class="value">&nbsp;</span>
      <br><span class="label">Transactions</span>
    </div>
    <div class="two columns">
      <span id="blocks_mined_count" class="value">&nbsp;</span>
      <br><span class="label">Blocks Mined</span>
    </div>
    <h4 class="twelve columns">Activity</h4>
  </div>
</body>
</html>
```

#### index.html  
(code at right)


After saving the above two files, you should be able to open `index.html` in your browser. You should see a very basic HTML structure with no data, an if you open up your developer console you should see "Address Explorer JS up and running." printed there.

This means were good to move onto the next step!

## Getting the Address

For the purposes of this tutorial, we're not going to build a fancy interface that asks for the users address, mostly because it distracts from simplicity of the tutorial. Instead, we're going to get the address from the query string. To make it even easier, we're going to assume the *whole* query string is the address. Pulling the query string is easy, so you should be able to edit `address-explorer.js` to look like this:

#### address-explorer.js

```javascript
/* address-explorer.js */

$(document).on("ready", function() {
  console.log("Address Explorer JS up and running.");
  var address = window.location.search.substring(1);
  console.log("Address: " + address);
});
```

Now, if we navigate to `/index.html?6a56cf7a57405800b18e3e0940628c190cfa73bc`, we should see the address `6a56cf7a57405800b18e3e0940628c190cfa73bc` printed in the console logs.

![](http://i.imgur.com/NRqEaT7.png)

Once we have the address, we can begin requesting data from BlockApps.

## Getting the Account Balance

Perhaps the most important piece of information to request is the account balance. BlockApps provides an API endpoint that will give you the balance of an address over time, where the most recent entry is the current account balance. Here's an example using address on the network as of this writing:

[http://api.blockapps.net/query/account/address/6a56cf7a57405800b18e3e0940628c190cfa73bc](http://api.blockapps.net/query/account/address/6a56cf7a57405800b18e3e0940628c190cfa73bc)

**Note:** Ethereum is churning through multiple test networks at the time of this writing, so the address listed above might not exist at the time you read this. Make sure to use as address you know exists!

You can see that that endpoint provides multiple objects in an array. We'll use jQuery to make the request and parse the result, and then add the balance onto the page:

#### address-explorer.js

```javascript
/* address-explorer.js */

$(document).on("ready", function() {
  console.log("Address Explorer JS up and running.");
  var address = window.location.search.substring(1);
  console.log("Address: " + address);

  $.getJSON("http://api.blockapps.net/query/account/address/" + address, function(balances, textStatus, jqXHR) {
    $("#displayed_balance").html(balances[0].balance);
  });
});
```

**Note:** We're not checking for errors here. This is to make the tutorial easy, but for your own application you should handle the case where the request fails.

You should now see something like this!

![](http://i.imgur.com/iilKmj5.png)

From here, we can now move onto getting a list of this accounts transactions.


## Getting Account Transactions

For an account explorer to be useful, we want to see all the transactions that were made *from* this account as well as all transactions sent *to* this account. Fortunately, BlockApps helps us with this significantly by providing an endpoint that does exactly that.

Here's an example for the same account used above:

[http://api.blockapps.net/query/transaction/address/6a56cf7a57405800b18e3e0940628c190cfa73bc](http://api.blockapps.net/query/transaction/address/6a56cf7a57405800b18e3e0940628c190cfa73bc)

Like requesting an account balance, BlockApps provides us with an array of objects as a response. Each of these objects represent a transaction that involved the address requested, and as mentioned, transactions can be of many types. BlockApps makes it easy for you to distinguish between the types of transactions by adding a `transactionType` key to each transaction. The values are as follows:

* `Transfer`: Either a user transferred Ether to our account, or we transferred Ether from our account to another user. If the transaction is of type `Transfer`, then a `to` and `from` keys will be provided letting you know the direction of the transfer (one of them will be our account). The `value` key, then, tells you the amount of the transfer, which will be important to display to the user.

* `Contract`: This means our account placed a contract on the network. Adding a contract onto the network costs gas, and for the purposes of an address explorer we'll want to display how much that was. This information is stored on the block.

* `FunctionCall`: This means our account called a function on an existing contract. Like adding a contract to the network, calling a function requires gas, so we'll need information about the block here as well.


Notice that for all of the transactions, none of them contain a timestamp. This is because that information is stored on the block, and so regardless of type, we'll need to request the block so we can display that as well.

Before adding the above request into our address explorer, lets first cover getting the blocks associated with each transaction.



## Getting a Transaction's Block

Each transaction object shown above has an associated block id (the `blockId` key). We'll use this id to request the associated block.

Here's an example:

[http://api.blockapps.net/query/block/blockid/225955](http://api.blockapps.net/query/block/blockid/225955)

Notice that with this request, we're given an array containing a single object. This object has multiple useful pieces of information, but we'll only cover what's important to us right now. Here's what we'll need:

* `gasUsed`: Because contracts and function calls have associated gas usage.

* `timestamp`: Because we want to know when transactions occurred.

From here we can take both the transaction request and the block requests and put them into our app:

```javascript
/* address-explorer.js */

$(document).on("ready", function() {
  console.log("Address Explorer JS up and running.");
  var address = window.location.search.substring(1);
  console.log("Address: " + address);

  // Get the account balance.
  $.getJSON("http://api.blockapps.net/query/account/address/" + address, function(balances, textStatus, jqXHR) {
    $("#displayed_balance").html(balances[0].balance);
  });

  // Function for getting individual blocks.
  var createTransactionHandler = function(transaction) {
    return function(result, textStatus, jqXHR) {
      block = result[0];
      console.log(transaction, block.number);
    };
  };

  // Get each transaction, and get each block associated with the transaction.
  $.getJSON("http://api.blockapps.net/query/transaction/address/" + address, function(transactions, textStatus, jqXHR) {
      $("#transaction_count").text(transactions.length);

      for (var i = 0; i < transactions.length; i++) {
        var transaction = transactions[i];
        $.getJSON("http://api.blockapps.net/query/block/blockid/" + transaction.blockId, createTransactionHandler(transaction));
      }
  });
});
```

#### address-explorer.js

You'll notice that the last block of code at right requests the transactions, and then we request each transaction's block within a `for` loop. Because we're in that loop, we have to create a new handler for each block or else we'll have issues with Javascript closures. This makes `createTransactionHandler` the primary method where we handle transactions and their blocks. You'll notice that currently, it's just outputting transactions and their block number to the console.

## Displaying Transactions

As mentioned, perhaps the hardest part about creating an address explorer is simply displaying all the information. What we'll want to do is display the transactions with any associated information based on the transaction type (for instance, for a Transfer, we'll want to display who it's from and who its to). We'll also want to make sure these transactions are ordered by date, newest first, as that's important to the user. I've provided the associated code below. Note that this is simply one way to output this information, and for the purposes of this tutorial I've kept it very simple.

#### address-explorer.js

```javascript
/* address-explorer.js */

$(document).on("ready", function() {
  console.log("Address Explorer JS up and running.");
  var address = window.location.search.substring(1);
  console.log("Address: " + address);

  // Get the account balance.
  $.getJSON("http://api.blockapps.net/query/account/address/" + address, function(balances, textStatus, jqXHR) {
    $("#displayed_balance").html(balances[0].balance);
  });

  var addActivity = function(timestamp, message) {
    var date = new Date(timestamp);
    var element = $(document.createElement("div"));
    element.addClass("transaction twelve columns");
    element.html(date.toISOString() + " &mdash;  " + message);
    element.data("date", date.getTime());

    // Keep DOM elements ordered by date.
    var elements = $(".transaction").detach().get();
    elements.push(element);
    elements = elements.sort(function(a,b) {
      a = parseInt($(a).data("date"));
      b = parseInt($(b).data("date"));
      return b - a;
    });
    $(".container").append(elements);
  };

  // Function for getting individual blocks.
  var createTransactionHandler = function(transaction) {
    return function (result, textStatus, jqXHR) {
      block = result[0];

      switch (transaction.transactionType) {
        case "Contract":
          addActivity(block.timestamp, "New contract added to the network at cost of " + block.gasUsed + " wei.");
          break;
        case "FunctionCall":
          addActivity("Function call to contract at cost of " + block.gasUsed + " wei.");
          break;
        case "Transfer":
          if (transaction.to == address) {
            addActivity(block.timestamp, "Credit of " + transaction.value + " wei sent from " + transaction.from + ".");
          } else {
            addActivity(block.timestamp, "Debit of " + transaction.value + " wei sent to " + transaction.to + ".");
          }
          break;
        default:
          return;
      }
    };
  };

  // Get each transaction, and get each block associated with the transaction.
  $.getJSON("http://api.blockapps.net/query/transaction/address/" + address, function(transactions, textStatus, jqXHR) {
      $("#transaction_count").text(transactions.length);

      for (var i = 0; i < transactions.length; i++) {
        var transaction = transactions[i];
        $.getJSON("http://api.blockapps.net/query/block/blockid/" + transaction.blockId, createTransactionHandler(transaction));
      }
  });
});
```

You should now have something that looks like this:

![](http://i.imgur.com/A33MnY7.png)

From here, we can now perform our last step of the process, which is getting the amount of blocks mined by an address.

## Getting Blocks Mined by an Address

So far, we've shown everything related to an address that affects balance, but we're missing one thing. We still haven't shown blocks mined directly by the address, which is the last piece needed to show all the activity that's happened on an address. Mining will increase the amount of either in your account, so it's especially important for an address explorer.

Luckily, BlockApps makes this easy. Requesting blocks mined by an address is as easy as requesting an address's transactions. Here's an example:

[http://api.blockapps.net/query/block/coinbase/6a56cf7a57405800b18e3e0940628c190cfa73bc](http://api.blockapps.net/query/block/coinbase/6a56cf7a57405800b18e3e0940628c190cfa73bc)

You'll notice that the output of this request differs slightly from the output when we request blocks by id. This will likely change in the future, however, the request still returns an array of blocks, and the relevant data we're interested can be found in the `blockData` key.

Now that we have each block mined by this address, we can go ahead and add it to our activity list. To do this, you'll just need to add this block of code at the bottom of `address-explorer.js`'s main function:

```javascript
// Get blocks mined by the address.
$.getJSON("http://api.blockapps.net/query/block/coinbase/" + address, function(blocks, textStatus, jqXHR) {
    $("#blocks_mined_count").html(blocks.length)

    for (var i = 0; i < blocks.length; i++) {
      var block = blocks[i];
      addActivity(block.blockData.timestamp, "Mined block #" + block.blockData.number + " with a block reward of 1500000000000000000 wei.");
    }
});
```

And that's it! Mined blocks are now included in the list as activities like transactions; they're also sorted, and the number of blocks mined is displayed up top as well. You should now have an explorer that includes minded blocks, like this!

![](http://i.imgur.com/uFUjF8O.png)



## Wrapping Up and Further Study

From this tutorial, you should have learned how to request enough information from BlockApps to create your own address explorer. The explorer you created was basic, and there are a few things you can do to make your explorer more usable and fully featured:

* **Show Ether denominations other than wei.** If you're not familiar, wei is the smallest denomination of Ether on the Ethereum network, and all values provided by BlockApps are in wei. Wei so small, in fact, that in order to have 1 Ether's worth of wei, you'd have to have a "1" with nineteen 0's behind it. There are other denominations like `finney` and `szabo` that can be used to more easily describe Ether value, and you should look into displaying values in those denominations when possible. You can use [this converter](http://ether.fund/tool/converter) to help you figure out the relationship between the denominations.

* **Use a BigNumber library.** As you may have noticed, all values of Ether provided by BlockApps were sent as Strings. This is because many programming languages, like Javascript, can't hold large numbers with arbitrary amounts of precision -- data will inevitably be lost. If you plan on converting your values of wei to different denominations, or you plan to perform arithmetic on Ether values, you'll want to [use this bignumber library](https://github.com/MikeMcl/bignumber.js/) instead of using `parseInt()`.

* **Link addresses displayed on screen!** Your address explorer becomes more powerful when you can click into other addresses and see the activity going on with that account. You should turn all addresses displayed on screen -- such as addresses of accounts that sent Ether to your account -- into links so your users can click between them.

* **Provide a nicer looking interface.** Spruce up the place! As stated multiple times, the hardest part about creating an address explorer with BlockApps is making things look nice. Change the font, add some color. Perhaps, even, change the way activities are displayed.

There's a lot you can do, and this is just of taste of what BlockApps can do to help you build apps on Ethereum. I hope you enjoyed it, and don't hesitate to ask us any questions. Thanks!

## Source Code

You can find the full code for this tutorial [here](https://github.com/tcoulter/address-explorer/tree/master/tutorial).


## Further Resources

Want to learn more about dApps?  

Check out [dApps for Beginners](https://dappsforbeginners.wordpress.com/) which will teach you how to use Ethereum using a full stack.

Also <a href="http://eepurl.com/brjkJX" target="blank">sign up</a> for our newsletter to hear more about future BlockApps tutorials.
