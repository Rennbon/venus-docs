(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{362:function(e,t,n){e.exports=n.p+"assets/img/getting-started-node-diagram.334bc69d.png"},380:function(e,t,n){"use strict";n.r(t);var a=n(25),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting started")]),e._v(" "),a("p",[e._v("This is a step-by-step guide for installing and running a Filecoin node connected to the testnet on your local machine. Subsequent tutorials explain how to "),a("a",{attrs:{href:"Mining-Filecoin"}},[e._v("mine Filecoin")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"table-of-contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[e._v("#")]),e._v(" Table of contents")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#getting-started"}},[e._v("Getting started")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#table-of-contents"}},[e._v("Table of contents")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#system-requirements"}},[e._v("System requirements")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#installing-dependencies-and-system-configuration"}},[e._v("Installing dependencies and system configuration")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#installing-go"}},[e._v("Installing Go")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#installing-dependencies"}},[e._v("Installing dependencies")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#building-filecoin-and-running-tests"}},[e._v("Building Filecoin and running tests")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#start-running-filecoin"}},[e._v("Start running Filecoin")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#get-fil-from-the-filecoin-faucet"}},[e._v("Get FIL from the Filecoin faucet")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#wait-for-chain-sync"}},[e._v("Wait for chain sync")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#viewing-network-information"}},[e._v("Viewing network information")])])])])]),e._v(" "),a("h3",{attrs:{id:"system-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-requirements"}},[e._v("#")]),e._v(" System requirements")]),e._v(" "),a("p",[e._v("Venus can build and run on most GNU/Linux and MacOS systems. Windows is not yet supported.")]),e._v(" "),a("p",[e._v("A validating node can run on most systems with "),a("strong",[e._v("at least 8GB of RAM")]),e._v(". Mining nodes in particular require significant RAM and GPU resources, depending on the sector configuration being implemented.")]),e._v(" "),a("h3",{attrs:{id:"installing-dependencies-and-system-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-dependencies-and-system-configuration"}},[e._v("#")]),e._v(" Installing dependencies and system configuration")]),e._v(" "),a("p",[e._v("Clone the "),a("code",[e._v("venus")]),e._v(" git repository and enter it:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" -p /path/to/filecoin-project\n "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/filecoin-project/venus.git /path/to/filecoin-project/venus\n")])])]),a("h4",{attrs:{id:"installing-go"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-go"}},[e._v("#")]),e._v(" Installing Go")]),e._v(" "),a("p",[e._v("The build process for "),a("code",[e._v("venus")]),e._v(" requires "),a("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("Go"),a("OutboundLink")],1),e._v(" >= v1.13.")]),e._v(" "),a("blockquote",[a("p",[e._v("Installing Go for the first time? We recommend "),a("a",{attrs:{href:"https://www.ardanlabs.com/blog/2016/05/installing-go-and-your-workspace.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("this tutorial"),a("OutboundLink")],1),e._v(" which includes environment setup.")])]),e._v(" "),a("p",[e._v("Due to the use of "),a("code",[e._v("cgo")]),e._v(" in "),a("code",[e._v("venus")]),e._v(", a C compiler is required to build it whether a prebuilt library is being used or it is compiled from source. To use "),a("code",[e._v("gcc")]),e._v(" (e.g. "),a("code",[e._v("export CC=gcc")]),e._v("), v7.4.0 or higher is required.")]),e._v(" "),a("p",[e._v("The build process will download a static library containing the "),a("a",{attrs:{href:"https://github.com/filecoin-project/rust-fil-proofs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Filecoin proofs implementation"),a("OutboundLink")],1),e._v(" (which is written in Rust).")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("NOTICE:")]),e._v(" To build proofs from source, (1) a Rust development environment must be installed and (2) the environment variable "),a("code",[e._v("FFI_BUILD_FROM_SOURCE=1")]),e._v(" must be set. More information can be found in "),a("a",{attrs:{href:"https://github.com/filecoin-project/filecoin-ffi",target:"_blank",rel:"noopener noreferrer"}},[e._v("filecoin-ffi"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"installing-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-dependencies"}},[e._v("#")]),e._v(" Installing dependencies")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Load all the Git submodules:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" submodule update --init --recursive\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Initialize the build dependencies:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" deps\n")])])])])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("NOTICE:")]),e._v(" The first "),a("code",[e._v("deps")]),e._v(" start up can be "),a("strong",[e._v("slow")]),e._v(", as very large parameter files are either downloaded or generated locally in "),a("code",[e._v("/var/tmp/filecoin-proof-parameters")]),e._v(". Have patience; future runs will be faster.")])]),e._v(" "),a("h3",{attrs:{id:"building-filecoin-and-running-tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-filecoin-and-running-tests"}},[e._v("#")]),e._v(" Building Filecoin and running tests")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Build the binary:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v("\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Run the unit tests:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("go run ./build "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v("\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Optionally, building and tests can be combined:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("go run ./build best\n")])])])])]),e._v(" "),a("p",[e._v("Other handy build commands include:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Check the code for style and correctness issues")]),e._v("\ngo run ./build lint\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Run different categories of tests by toggling their flags")]),e._v("\ngo run ./build "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v(" -unit"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("false -integration"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true -functional"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Test with a coverage report")]),e._v("\ngo run ./build "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v(" -cover\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Test with Go's race-condition instrumentation and warnings (see https://blog.golang.org/race-detector)")]),e._v("\ngo run ./build "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v(" -race\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Deps, Lint, Build, Test (any args will be passed to `test`)")]),e._v("\ngo run ./build all\n")])])]),a("blockquote",[a("p",[a("strong",[e._v("NOTICE:")]),e._v(" Any flag passed to "),a("code",[e._v("go run ./build test")]),e._v(" (e.g. "),a("code",[e._v("-cover")]),e._v(") will be passed on to "),a("code",[e._v("go test")]),e._v(".")])]),e._v(" "),a("p",[a("strong",[e._v("For all problems with the build")]),e._v(", please consult the "),a("a",{attrs:{href:"https://go.filecoin.io/venus-tutorial/Troubleshooting-&-FAQ.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Troubleshooting"),a("OutboundLink")],1),e._v(" section of this documentation.")]),e._v(" "),a("h2",{attrs:{id:"start-running-filecoin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-running-filecoin"}},[e._v("#")]),e._v(" Start running Filecoin")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("If "),a("code",[e._v("venus")]),e._v(" has been run on the system before, remove existing Filecoin repo ("),a("strong",[e._v("this will delete all previous filecoin data")]),e._v("):")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" -rf ~/.venus\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Start the venus daemon:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("venus daemon\n")])])])])]),e._v(" "),a("p",[e._v('This should return "My peer ID is '),a("code",[e._v("<peerID>")]),e._v('", where '),a("code",[e._v("<peerID>")]),e._v(" is a long "),a("a",{attrs:{href:"https://github.com/filecoin-project/specs/blob/master/definitions.md#cid",target:"_blank",rel:"noopener noreferrer"}},[e._v("CID"),a("OutboundLink")],1),e._v(' string starting with "Qm".')]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Print a list of bootstrap node addresses:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("venus config bootstrap.addresses\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Choose any address from the list you just printed, and connect to it (Automatic peer discovery and connection coming soon.):")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("venus swarm connect "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("any-filecoin-node-mulitaddr"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("NOTICE:")]),e._v(" This can be "),a("strong",[e._v("slow")]),e._v(" the first time. The filecoin node needs a large parameter file for proofs, stored in "),a("code",[e._v("/tmp/filecoin-proof-parameters")]),e._v(". It is usually generated by the "),a("code",[e._v("deps")]),e._v(" build step. If these files are missing they will be regenerated, which can take up to an hour. We are working on a better solution.")])]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Check the node's connectivity:"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("venus swarm peers                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# list addresses of peers to which you're connected")]),e._v("\n")])])])])]),e._v(" "),a("p",[e._v("The node should now be connected to some peers and will begin downloading and validating the blockchain.")]),e._v(" "),a("p",[e._v("🎉 Woohoo! You are now running a Filecoin node and connected to the network. This is the anatomy of a basic node:\n"),a("img",{attrs:{src:n(362),alt:"Diagram of a single node and its components"}})]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("NOTICE:")]),e._v(" The daemon is now running indefinitely in its own Terminal ("),a("code",[e._v("Ctrl + C")]),e._v(" to quit). To run other "),a("code",[e._v("venus")]),e._v(" commands, open a second Terminal tab or window ("),a("code",[e._v("Cmd + T")]),e._v(" on Mac)._")])]),e._v(" "),a("p",[a("em",[e._v("Need help? See "),a("a",{attrs:{href:"Troubleshooting-&-FAQ"}},[e._v("Troubleshooting & FAQ")]),e._v(" or "),a("a",{attrs:{href:"https://riot.im/app/#/room/#fil-dev:matrix.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("#fil-dev on Matrix chat"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"get-fil-from-the-filecoin-faucet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-fil-from-the-filecoin-faucet"}},[e._v("#")]),e._v(" Get FIL from the Filecoin faucet")]),e._v(" "),a("p",[a("strong",[e._v("Once your chain has finished syncing")]),e._v(", you will be able to use the faucet to get filecoin tokens (FIL). Before Filecoin nodes can participate in the marketplace, they will need some start-up FIL. Clients need FIL in their accounts to make storage deals with miners. Miners use FIL for collateral when initially pledging storage to the network.")]),e._v(" "),a("p",[e._v('During early testing, mock FIL can be obtained from the Filecoin faucet. The "faucet" is thusly named because it drips (or pours) FIL into those who stick their wallets under it. Using mock FIL allows for preliminary testing of market dynamics without the requirement for any money to actually change hands.')]),e._v(" "),a("p",[e._v("All balances of FIL are stored in wallets. When a node is newly created, it will have a Filecoin wallet with a balance of 0 FIL.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Retrieve your wallet address:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("venus wallet "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v("\n")])])])]),e._v(" "),a("li",[a("p",[e._v("The output should be a long alphanumeric string. Go to the testnet faucet at [https://faucet.testnet.filecoin.io] and submit that wallet address. It will take a minute for the FIL to arrive in the wallet.")]),e._v(" "),a("ul",[a("li",[e._v("Alternatively, you can tap the faucet from the command line:"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("WALLET_ADDR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("venus wallet "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# fetch your wallet address into a handy variable")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("MESSAGE_CID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -X POST -F "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"address='),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${WALLET_ADDR}")]),e._v('"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://faucet.testnet.filecoin.io/send"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v("\n")])])])])])]),e._v(" "),a("li",[a("p",[e._v("The faucet will provide a message CID. If thr chain is already synced with the network, this message should be processed in about 30 seconds. The following command can be run in order to wait for confirmation:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("venus state wait-msg "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${MESSAGE_CID}")]),e._v("\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Verify that the FIL has landed in the wallet by checking the wallet balance:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("venus wallet balance "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${WALLET_ADDR}")]),e._v("\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"wait-for-chain-sync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wait-for-chain-sync"}},[e._v("#")]),e._v(" Wait for chain sync")]),e._v(" "),a("p",[e._v("🎉 Congratulations, you're now connected to Filecoin! The daemon is now busy syncing and validating the existing blockchain, which can take awhile -- hours or even days depending on network age and activity.")]),e._v(" "),a("p",[e._v("During this initial sync time ther will be intense activity on one CPU core. Find out what the current block height is first by visiting the "),a("a",{attrs:{href:"https://stats.testnet.filecoin.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("network stats page"),a("OutboundLink")],1),e._v(" then observe the nodes syncing progress:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("lotus "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sync")]),e._v(" status\n")])])]),a("h2",{attrs:{id:"viewing-network-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#viewing-network-information"}},[e._v("#")]),e._v(" Viewing network information")]),e._v(" "),a("p",[e._v("There are a few visualisation tools to help users understand what is happening within the Filecoin network, such as the official "),a("a",{attrs:{href:"http://stats.testnet.filecoin.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("network stats"),a("OutboundLink")],1),e._v(" page as well as the community-managed block explorers "),a("a",{attrs:{href:"https://filscan.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("filscan.io"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://filscout.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("filscout.io"),a("OutboundLink")],1),e._v(", and "),a("a",{attrs:{href:"https://filfox.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("filfox.io"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);