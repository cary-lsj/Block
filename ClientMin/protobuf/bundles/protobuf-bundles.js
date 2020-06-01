var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.gameMsg = (function() {

    /**
     * Namespace gameMsg.
     * @exports gameMsg
     * @namespace
     */
    var gameMsg = {};

    gameMsg.AssetUpdate = (function() {

        /**
         * Properties of an AssetUpdate.
         * @memberof gameMsg
         * @interface IAssetUpdate
         * @property {string} nUserID AssetUpdate nUserID
         * @property {number|null} [nGold] AssetUpdate nGold
         * @property {number|null} [nMoney] AssetUpdate nMoney
         * @property {string|null} [sAssets] AssetUpdate sAssets
         */

        /**
         * Constructs a new AssetUpdate.
         * @memberof gameMsg
         * @classdesc Represents an AssetUpdate.
         * @implements IAssetUpdate
         * @constructor
         * @param {gameMsg.IAssetUpdate=} [properties] Properties to set
         */
        function AssetUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AssetUpdate nUserID.
         * @member {string} nUserID
         * @memberof gameMsg.AssetUpdate
         * @instance
         */
        AssetUpdate.prototype.nUserID = "";

        /**
         * AssetUpdate nGold.
         * @member {number} nGold
         * @memberof gameMsg.AssetUpdate
         * @instance
         */
        AssetUpdate.prototype.nGold = 0;

        /**
         * AssetUpdate nMoney.
         * @member {number} nMoney
         * @memberof gameMsg.AssetUpdate
         * @instance
         */
        AssetUpdate.prototype.nMoney = 0;

        /**
         * AssetUpdate sAssets.
         * @member {string} sAssets
         * @memberof gameMsg.AssetUpdate
         * @instance
         */
        AssetUpdate.prototype.sAssets = "";

        /**
         * Creates a new AssetUpdate instance using the specified properties.
         * @function create
         * @memberof gameMsg.AssetUpdate
         * @static
         * @param {gameMsg.IAssetUpdate=} [properties] Properties to set
         * @returns {gameMsg.AssetUpdate} AssetUpdate instance
         */
        AssetUpdate.create = function create(properties) {
            return new AssetUpdate(properties);
        };

        /**
         * Encodes the specified AssetUpdate message. Does not implicitly {@link gameMsg.AssetUpdate.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.AssetUpdate
         * @static
         * @param {gameMsg.IAssetUpdate} message AssetUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.nUserID);
            if (message.nGold != null && message.hasOwnProperty("nGold"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nGold);
            if (message.nMoney != null && message.hasOwnProperty("nMoney"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nMoney);
            if (message.sAssets != null && message.hasOwnProperty("sAssets"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.sAssets);
            return writer;
        };

        /**
         * Encodes the specified AssetUpdate message, length delimited. Does not implicitly {@link gameMsg.AssetUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.AssetUpdate
         * @static
         * @param {gameMsg.IAssetUpdate} message AssetUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AssetUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.AssetUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.AssetUpdate} AssetUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.AssetUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nUserID = reader.string();
                    break;
                case 2:
                    message.nGold = reader.int32();
                    break;
                case 3:
                    message.nMoney = reader.int32();
                    break;
                case 4:
                    message.sAssets = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("nUserID"))
                throw $util.ProtocolError("missing required 'nUserID'", { instance: message });
            return message;
        };

        /**
         * Decodes an AssetUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.AssetUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.AssetUpdate} AssetUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AssetUpdate message.
         * @function verify
         * @memberof gameMsg.AssetUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AssetUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.nUserID))
                return "nUserID: string expected";
            if (message.nGold != null && message.hasOwnProperty("nGold"))
                if (!$util.isInteger(message.nGold))
                    return "nGold: integer expected";
            if (message.nMoney != null && message.hasOwnProperty("nMoney"))
                if (!$util.isInteger(message.nMoney))
                    return "nMoney: integer expected";
            if (message.sAssets != null && message.hasOwnProperty("sAssets"))
                if (!$util.isString(message.sAssets))
                    return "sAssets: string expected";
            return null;
        };

        return AssetUpdate;
    })();

    gameMsg.Good = (function() {

        /**
         * Properties of a Good.
         * @memberof gameMsg
         * @interface IGood
         * @property {number} nID Good nID
         * @property {number} nCount Good nCount
         */

        /**
         * Constructs a new Good.
         * @memberof gameMsg
         * @classdesc Represents a Good.
         * @implements IGood
         * @constructor
         * @param {gameMsg.IGood=} [properties] Properties to set
         */
        function Good(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Good nID.
         * @member {number} nID
         * @memberof gameMsg.Good
         * @instance
         */
        Good.prototype.nID = 0;

        /**
         * Good nCount.
         * @member {number} nCount
         * @memberof gameMsg.Good
         * @instance
         */
        Good.prototype.nCount = 0;

        /**
         * Creates a new Good instance using the specified properties.
         * @function create
         * @memberof gameMsg.Good
         * @static
         * @param {gameMsg.IGood=} [properties] Properties to set
         * @returns {gameMsg.Good} Good instance
         */
        Good.create = function create(properties) {
            return new Good(properties);
        };

        /**
         * Encodes the specified Good message. Does not implicitly {@link gameMsg.Good.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.Good
         * @static
         * @param {gameMsg.IGood} message Good message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Good.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nCount);
            return writer;
        };

        /**
         * Encodes the specified Good message, length delimited. Does not implicitly {@link gameMsg.Good.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.Good
         * @static
         * @param {gameMsg.IGood} message Good message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Good.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Good message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.Good
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.Good} Good
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Good.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.Good();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nID = reader.int32();
                    break;
                case 2:
                    message.nCount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("nID"))
                throw $util.ProtocolError("missing required 'nID'", { instance: message });
            if (!message.hasOwnProperty("nCount"))
                throw $util.ProtocolError("missing required 'nCount'", { instance: message });
            return message;
        };

        /**
         * Decodes a Good message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.Good
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.Good} Good
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Good.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Good message.
         * @function verify
         * @memberof gameMsg.Good
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Good.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.nID))
                return "nID: integer expected";
            if (!$util.isInteger(message.nCount))
                return "nCount: integer expected";
            return null;
        };

        return Good;
    })();

    gameMsg.BuyRequest = (function() {

        /**
         * Properties of a BuyRequest.
         * @memberof gameMsg
         * @interface IBuyRequest
         * @property {string} nUserID BuyRequest nUserID
         * @property {Array.<gameMsg.IGood>|null} [goods] BuyRequest goods
         */

        /**
         * Constructs a new BuyRequest.
         * @memberof gameMsg
         * @classdesc Represents a BuyRequest.
         * @implements IBuyRequest
         * @constructor
         * @param {gameMsg.IBuyRequest=} [properties] Properties to set
         */
        function BuyRequest(properties) {
            this.goods = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BuyRequest nUserID.
         * @member {string} nUserID
         * @memberof gameMsg.BuyRequest
         * @instance
         */
        BuyRequest.prototype.nUserID = "";

        /**
         * BuyRequest goods.
         * @member {Array.<gameMsg.IGood>} goods
         * @memberof gameMsg.BuyRequest
         * @instance
         */
        BuyRequest.prototype.goods = $util.emptyArray;

        /**
         * Creates a new BuyRequest instance using the specified properties.
         * @function create
         * @memberof gameMsg.BuyRequest
         * @static
         * @param {gameMsg.IBuyRequest=} [properties] Properties to set
         * @returns {gameMsg.BuyRequest} BuyRequest instance
         */
        BuyRequest.create = function create(properties) {
            return new BuyRequest(properties);
        };

        /**
         * Encodes the specified BuyRequest message. Does not implicitly {@link gameMsg.BuyRequest.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.BuyRequest
         * @static
         * @param {gameMsg.IBuyRequest} message BuyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuyRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.nUserID);
            if (message.goods != null && message.goods.length)
                for (var i = 0; i < message.goods.length; ++i)
                    $root.gameMsg.Good.encode(message.goods[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BuyRequest message, length delimited. Does not implicitly {@link gameMsg.BuyRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.BuyRequest
         * @static
         * @param {gameMsg.IBuyRequest} message BuyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuyRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BuyRequest message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.BuyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.BuyRequest} BuyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuyRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.BuyRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nUserID = reader.string();
                    break;
                case 2:
                    if (!(message.goods && message.goods.length))
                        message.goods = [];
                    message.goods.push($root.gameMsg.Good.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("nUserID"))
                throw $util.ProtocolError("missing required 'nUserID'", { instance: message });
            return message;
        };

        /**
         * Decodes a BuyRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.BuyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.BuyRequest} BuyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuyRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BuyRequest message.
         * @function verify
         * @memberof gameMsg.BuyRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BuyRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.nUserID))
                return "nUserID: string expected";
            if (message.goods != null && message.hasOwnProperty("goods")) {
                if (!Array.isArray(message.goods))
                    return "goods: array expected";
                for (var i = 0; i < message.goods.length; ++i) {
                    var error = $root.gameMsg.Good.verify(message.goods[i]);
                    if (error)
                        return "goods." + error;
                }
            }
            return null;
        };

        return BuyRequest;
    })();

    gameMsg.BuyResponse = (function() {

        /**
         * Properties of a BuyResponse.
         * @memberof gameMsg
         * @interface IBuyResponse
         * @property {gameMsg.IAssetUpdate|null} [newAssets] BuyResponse newAssets
         */

        /**
         * Constructs a new BuyResponse.
         * @memberof gameMsg
         * @classdesc Represents a BuyResponse.
         * @implements IBuyResponse
         * @constructor
         * @param {gameMsg.IBuyResponse=} [properties] Properties to set
         */
        function BuyResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BuyResponse newAssets.
         * @member {gameMsg.IAssetUpdate|null|undefined} newAssets
         * @memberof gameMsg.BuyResponse
         * @instance
         */
        BuyResponse.prototype.newAssets = null;

        /**
         * Creates a new BuyResponse instance using the specified properties.
         * @function create
         * @memberof gameMsg.BuyResponse
         * @static
         * @param {gameMsg.IBuyResponse=} [properties] Properties to set
         * @returns {gameMsg.BuyResponse} BuyResponse instance
         */
        BuyResponse.create = function create(properties) {
            return new BuyResponse(properties);
        };

        /**
         * Encodes the specified BuyResponse message. Does not implicitly {@link gameMsg.BuyResponse.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.BuyResponse
         * @static
         * @param {gameMsg.IBuyResponse} message BuyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuyResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.newAssets != null && message.hasOwnProperty("newAssets"))
                $root.gameMsg.AssetUpdate.encode(message.newAssets, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BuyResponse message, length delimited. Does not implicitly {@link gameMsg.BuyResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.BuyResponse
         * @static
         * @param {gameMsg.IBuyResponse} message BuyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuyResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BuyResponse message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.BuyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.BuyResponse} BuyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuyResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.BuyResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.newAssets = $root.gameMsg.AssetUpdate.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BuyResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.BuyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.BuyResponse} BuyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuyResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BuyResponse message.
         * @function verify
         * @memberof gameMsg.BuyResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BuyResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.newAssets != null && message.hasOwnProperty("newAssets")) {
                var error = $root.gameMsg.AssetUpdate.verify(message.newAssets);
                if (error)
                    return "newAssets." + error;
            }
            return null;
        };

        return BuyResponse;
    })();

    gameMsg.CreateRoomRequest = (function() {

        /**
         * Properties of a CreateRoomRequest.
         * @memberof gameMsg
         * @interface ICreateRoomRequest
         * @property {string} sID CreateRoomRequest sID
         */

        /**
         * Constructs a new CreateRoomRequest.
         * @memberof gameMsg
         * @classdesc Represents a CreateRoomRequest.
         * @implements ICreateRoomRequest
         * @constructor
         * @param {gameMsg.ICreateRoomRequest=} [properties] Properties to set
         */
        function CreateRoomRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRoomRequest sID.
         * @member {string} sID
         * @memberof gameMsg.CreateRoomRequest
         * @instance
         */
        CreateRoomRequest.prototype.sID = "";

        /**
         * Creates a new CreateRoomRequest instance using the specified properties.
         * @function create
         * @memberof gameMsg.CreateRoomRequest
         * @static
         * @param {gameMsg.ICreateRoomRequest=} [properties] Properties to set
         * @returns {gameMsg.CreateRoomRequest} CreateRoomRequest instance
         */
        CreateRoomRequest.create = function create(properties) {
            return new CreateRoomRequest(properties);
        };

        /**
         * Encodes the specified CreateRoomRequest message. Does not implicitly {@link gameMsg.CreateRoomRequest.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.CreateRoomRequest
         * @static
         * @param {gameMsg.ICreateRoomRequest} message CreateRoomRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sID);
            return writer;
        };

        /**
         * Encodes the specified CreateRoomRequest message, length delimited. Does not implicitly {@link gameMsg.CreateRoomRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.CreateRoomRequest
         * @static
         * @param {gameMsg.ICreateRoomRequest} message CreateRoomRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateRoomRequest message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.CreateRoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.CreateRoomRequest} CreateRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.CreateRoomRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sID"))
                throw $util.ProtocolError("missing required 'sID'", { instance: message });
            return message;
        };

        /**
         * Decodes a CreateRoomRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.CreateRoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.CreateRoomRequest} CreateRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateRoomRequest message.
         * @function verify
         * @memberof gameMsg.CreateRoomRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateRoomRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.sID))
                return "sID: string expected";
            return null;
        };

        return CreateRoomRequest;
    })();

    gameMsg.CreateRoomResponse = (function() {

        /**
         * Properties of a CreateRoomResponse.
         * @memberof gameMsg
         * @interface ICreateRoomResponse
         * @property {string} sRoomID CreateRoomResponse sRoomID
         */

        /**
         * Constructs a new CreateRoomResponse.
         * @memberof gameMsg
         * @classdesc Represents a CreateRoomResponse.
         * @implements ICreateRoomResponse
         * @constructor
         * @param {gameMsg.ICreateRoomResponse=} [properties] Properties to set
         */
        function CreateRoomResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRoomResponse sRoomID.
         * @member {string} sRoomID
         * @memberof gameMsg.CreateRoomResponse
         * @instance
         */
        CreateRoomResponse.prototype.sRoomID = "";

        /**
         * Creates a new CreateRoomResponse instance using the specified properties.
         * @function create
         * @memberof gameMsg.CreateRoomResponse
         * @static
         * @param {gameMsg.ICreateRoomResponse=} [properties] Properties to set
         * @returns {gameMsg.CreateRoomResponse} CreateRoomResponse instance
         */
        CreateRoomResponse.create = function create(properties) {
            return new CreateRoomResponse(properties);
        };

        /**
         * Encodes the specified CreateRoomResponse message. Does not implicitly {@link gameMsg.CreateRoomResponse.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.CreateRoomResponse
         * @static
         * @param {gameMsg.ICreateRoomResponse} message CreateRoomResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sRoomID);
            return writer;
        };

        /**
         * Encodes the specified CreateRoomResponse message, length delimited. Does not implicitly {@link gameMsg.CreateRoomResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.CreateRoomResponse
         * @static
         * @param {gameMsg.ICreateRoomResponse} message CreateRoomResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateRoomResponse message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.CreateRoomResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.CreateRoomResponse} CreateRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.CreateRoomResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sRoomID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sRoomID"))
                throw $util.ProtocolError("missing required 'sRoomID'", { instance: message });
            return message;
        };

        /**
         * Decodes a CreateRoomResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.CreateRoomResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.CreateRoomResponse} CreateRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateRoomResponse message.
         * @function verify
         * @memberof gameMsg.CreateRoomResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateRoomResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.sRoomID))
                return "sRoomID: string expected";
            return null;
        };

        return CreateRoomResponse;
    })();

    gameMsg.RankEndGameData = (function() {

        /**
         * Properties of a RankEndGameData.
         * @memberof gameMsg
         * @interface IRankEndGameData
         * @property {string} sGamerID RankEndGameData sGamerID
         * @property {number} nRank RankEndGameData nRank
         * @property {number} nTime RankEndGameData nTime
         * @property {number} nGold RankEndGameData nGold
         * @property {number} nLevel RankEndGameData nLevel
         */

        /**
         * Constructs a new RankEndGameData.
         * @memberof gameMsg
         * @classdesc Represents a RankEndGameData.
         * @implements IRankEndGameData
         * @constructor
         * @param {gameMsg.IRankEndGameData=} [properties] Properties to set
         */
        function RankEndGameData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RankEndGameData sGamerID.
         * @member {string} sGamerID
         * @memberof gameMsg.RankEndGameData
         * @instance
         */
        RankEndGameData.prototype.sGamerID = "";

        /**
         * RankEndGameData nRank.
         * @member {number} nRank
         * @memberof gameMsg.RankEndGameData
         * @instance
         */
        RankEndGameData.prototype.nRank = 0;

        /**
         * RankEndGameData nTime.
         * @member {number} nTime
         * @memberof gameMsg.RankEndGameData
         * @instance
         */
        RankEndGameData.prototype.nTime = 0;

        /**
         * RankEndGameData nGold.
         * @member {number} nGold
         * @memberof gameMsg.RankEndGameData
         * @instance
         */
        RankEndGameData.prototype.nGold = 0;

        /**
         * RankEndGameData nLevel.
         * @member {number} nLevel
         * @memberof gameMsg.RankEndGameData
         * @instance
         */
        RankEndGameData.prototype.nLevel = 0;

        /**
         * Creates a new RankEndGameData instance using the specified properties.
         * @function create
         * @memberof gameMsg.RankEndGameData
         * @static
         * @param {gameMsg.IRankEndGameData=} [properties] Properties to set
         * @returns {gameMsg.RankEndGameData} RankEndGameData instance
         */
        RankEndGameData.create = function create(properties) {
            return new RankEndGameData(properties);
        };

        /**
         * Encodes the specified RankEndGameData message. Does not implicitly {@link gameMsg.RankEndGameData.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.RankEndGameData
         * @static
         * @param {gameMsg.IRankEndGameData} message RankEndGameData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankEndGameData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sGamerID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nRank);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nTime);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nGold);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.nLevel);
            return writer;
        };

        /**
         * Encodes the specified RankEndGameData message, length delimited. Does not implicitly {@link gameMsg.RankEndGameData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.RankEndGameData
         * @static
         * @param {gameMsg.IRankEndGameData} message RankEndGameData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankEndGameData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RankEndGameData message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.RankEndGameData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.RankEndGameData} RankEndGameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankEndGameData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.RankEndGameData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sGamerID = reader.string();
                    break;
                case 2:
                    message.nRank = reader.int32();
                    break;
                case 3:
                    message.nTime = reader.int32();
                    break;
                case 4:
                    message.nGold = reader.int32();
                    break;
                case 5:
                    message.nLevel = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sGamerID"))
                throw $util.ProtocolError("missing required 'sGamerID'", { instance: message });
            if (!message.hasOwnProperty("nRank"))
                throw $util.ProtocolError("missing required 'nRank'", { instance: message });
            if (!message.hasOwnProperty("nTime"))
                throw $util.ProtocolError("missing required 'nTime'", { instance: message });
            if (!message.hasOwnProperty("nGold"))
                throw $util.ProtocolError("missing required 'nGold'", { instance: message });
            if (!message.hasOwnProperty("nLevel"))
                throw $util.ProtocolError("missing required 'nLevel'", { instance: message });
            return message;
        };

        /**
         * Decodes a RankEndGameData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.RankEndGameData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.RankEndGameData} RankEndGameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankEndGameData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RankEndGameData message.
         * @function verify
         * @memberof gameMsg.RankEndGameData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RankEndGameData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.sGamerID))
                return "sGamerID: string expected";
            if (!$util.isInteger(message.nRank))
                return "nRank: integer expected";
            if (!$util.isInteger(message.nTime))
                return "nTime: integer expected";
            if (!$util.isInteger(message.nGold))
                return "nGold: integer expected";
            if (!$util.isInteger(message.nLevel))
                return "nLevel: integer expected";
            return null;
        };

        return RankEndGameData;
    })();

    gameMsg.EndGameRequest = (function() {

        /**
         * Properties of an EndGameRequest.
         * @memberof gameMsg
         * @interface IEndGameRequest
         * @property {string} sID EndGameRequest sID
         * @property {string} sRoomID EndGameRequest sRoomID
         */

        /**
         * Constructs a new EndGameRequest.
         * @memberof gameMsg
         * @classdesc Represents an EndGameRequest.
         * @implements IEndGameRequest
         * @constructor
         * @param {gameMsg.IEndGameRequest=} [properties] Properties to set
         */
        function EndGameRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EndGameRequest sID.
         * @member {string} sID
         * @memberof gameMsg.EndGameRequest
         * @instance
         */
        EndGameRequest.prototype.sID = "";

        /**
         * EndGameRequest sRoomID.
         * @member {string} sRoomID
         * @memberof gameMsg.EndGameRequest
         * @instance
         */
        EndGameRequest.prototype.sRoomID = "";

        /**
         * Creates a new EndGameRequest instance using the specified properties.
         * @function create
         * @memberof gameMsg.EndGameRequest
         * @static
         * @param {gameMsg.IEndGameRequest=} [properties] Properties to set
         * @returns {gameMsg.EndGameRequest} EndGameRequest instance
         */
        EndGameRequest.create = function create(properties) {
            return new EndGameRequest(properties);
        };

        /**
         * Encodes the specified EndGameRequest message. Does not implicitly {@link gameMsg.EndGameRequest.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.EndGameRequest
         * @static
         * @param {gameMsg.IEndGameRequest} message EndGameRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EndGameRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sID);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sRoomID);
            return writer;
        };

        /**
         * Encodes the specified EndGameRequest message, length delimited. Does not implicitly {@link gameMsg.EndGameRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.EndGameRequest
         * @static
         * @param {gameMsg.IEndGameRequest} message EndGameRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EndGameRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EndGameRequest message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.EndGameRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.EndGameRequest} EndGameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EndGameRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.EndGameRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sID = reader.string();
                    break;
                case 2:
                    message.sRoomID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sID"))
                throw $util.ProtocolError("missing required 'sID'", { instance: message });
            if (!message.hasOwnProperty("sRoomID"))
                throw $util.ProtocolError("missing required 'sRoomID'", { instance: message });
            return message;
        };

        /**
         * Decodes an EndGameRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.EndGameRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.EndGameRequest} EndGameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EndGameRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EndGameRequest message.
         * @function verify
         * @memberof gameMsg.EndGameRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EndGameRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.sID))
                return "sID: string expected";
            if (!$util.isString(message.sRoomID))
                return "sRoomID: string expected";
            return null;
        };

        return EndGameRequest;
    })();

    gameMsg.EndGameResponse = (function() {

        /**
         * Properties of an EndGameResponse.
         * @memberof gameMsg
         * @interface IEndGameResponse
         * @property {string} sGamerID EndGameResponse sGamerID
         * @property {number} nRank EndGameResponse nRank
         */

        /**
         * Constructs a new EndGameResponse.
         * @memberof gameMsg
         * @classdesc Represents an EndGameResponse.
         * @implements IEndGameResponse
         * @constructor
         * @param {gameMsg.IEndGameResponse=} [properties] Properties to set
         */
        function EndGameResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EndGameResponse sGamerID.
         * @member {string} sGamerID
         * @memberof gameMsg.EndGameResponse
         * @instance
         */
        EndGameResponse.prototype.sGamerID = "";

        /**
         * EndGameResponse nRank.
         * @member {number} nRank
         * @memberof gameMsg.EndGameResponse
         * @instance
         */
        EndGameResponse.prototype.nRank = 0;

        /**
         * Creates a new EndGameResponse instance using the specified properties.
         * @function create
         * @memberof gameMsg.EndGameResponse
         * @static
         * @param {gameMsg.IEndGameResponse=} [properties] Properties to set
         * @returns {gameMsg.EndGameResponse} EndGameResponse instance
         */
        EndGameResponse.create = function create(properties) {
            return new EndGameResponse(properties);
        };

        /**
         * Encodes the specified EndGameResponse message. Does not implicitly {@link gameMsg.EndGameResponse.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.EndGameResponse
         * @static
         * @param {gameMsg.IEndGameResponse} message EndGameResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EndGameResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sGamerID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nRank);
            return writer;
        };

        /**
         * Encodes the specified EndGameResponse message, length delimited. Does not implicitly {@link gameMsg.EndGameResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.EndGameResponse
         * @static
         * @param {gameMsg.IEndGameResponse} message EndGameResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EndGameResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EndGameResponse message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.EndGameResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.EndGameResponse} EndGameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EndGameResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.EndGameResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sGamerID = reader.string();
                    break;
                case 2:
                    message.nRank = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sGamerID"))
                throw $util.ProtocolError("missing required 'sGamerID'", { instance: message });
            if (!message.hasOwnProperty("nRank"))
                throw $util.ProtocolError("missing required 'nRank'", { instance: message });
            return message;
        };

        /**
         * Decodes an EndGameResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.EndGameResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.EndGameResponse} EndGameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EndGameResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EndGameResponse message.
         * @function verify
         * @memberof gameMsg.EndGameResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EndGameResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.sGamerID))
                return "sGamerID: string expected";
            if (!$util.isInteger(message.nRank))
                return "nRank: integer expected";
            return null;
        };

        return EndGameResponse;
    })();

    gameMsg.EndGameNotify = (function() {

        /**
         * Properties of an EndGameNotify.
         * @memberof gameMsg
         * @interface IEndGameNotify
         * @property {string} sRoomID EndGameNotify sRoomID
         * @property {Array.<gameMsg.IRankEndGameData>|null} [rankEndGameDatas] EndGameNotify rankEndGameDatas
         */

        /**
         * Constructs a new EndGameNotify.
         * @memberof gameMsg
         * @classdesc Represents an EndGameNotify.
         * @implements IEndGameNotify
         * @constructor
         * @param {gameMsg.IEndGameNotify=} [properties] Properties to set
         */
        function EndGameNotify(properties) {
            this.rankEndGameDatas = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EndGameNotify sRoomID.
         * @member {string} sRoomID
         * @memberof gameMsg.EndGameNotify
         * @instance
         */
        EndGameNotify.prototype.sRoomID = "";

        /**
         * EndGameNotify rankEndGameDatas.
         * @member {Array.<gameMsg.IRankEndGameData>} rankEndGameDatas
         * @memberof gameMsg.EndGameNotify
         * @instance
         */
        EndGameNotify.prototype.rankEndGameDatas = $util.emptyArray;

        /**
         * Creates a new EndGameNotify instance using the specified properties.
         * @function create
         * @memberof gameMsg.EndGameNotify
         * @static
         * @param {gameMsg.IEndGameNotify=} [properties] Properties to set
         * @returns {gameMsg.EndGameNotify} EndGameNotify instance
         */
        EndGameNotify.create = function create(properties) {
            return new EndGameNotify(properties);
        };

        /**
         * Encodes the specified EndGameNotify message. Does not implicitly {@link gameMsg.EndGameNotify.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.EndGameNotify
         * @static
         * @param {gameMsg.IEndGameNotify} message EndGameNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EndGameNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sRoomID);
            if (message.rankEndGameDatas != null && message.rankEndGameDatas.length)
                for (var i = 0; i < message.rankEndGameDatas.length; ++i)
                    $root.gameMsg.RankEndGameData.encode(message.rankEndGameDatas[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EndGameNotify message, length delimited. Does not implicitly {@link gameMsg.EndGameNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.EndGameNotify
         * @static
         * @param {gameMsg.IEndGameNotify} message EndGameNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EndGameNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EndGameNotify message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.EndGameNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.EndGameNotify} EndGameNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EndGameNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.EndGameNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sRoomID = reader.string();
                    break;
                case 2:
                    if (!(message.rankEndGameDatas && message.rankEndGameDatas.length))
                        message.rankEndGameDatas = [];
                    message.rankEndGameDatas.push($root.gameMsg.RankEndGameData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sRoomID"))
                throw $util.ProtocolError("missing required 'sRoomID'", { instance: message });
            return message;
        };

        /**
         * Decodes an EndGameNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.EndGameNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.EndGameNotify} EndGameNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EndGameNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EndGameNotify message.
         * @function verify
         * @memberof gameMsg.EndGameNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EndGameNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.sRoomID))
                return "sRoomID: string expected";
            if (message.rankEndGameDatas != null && message.hasOwnProperty("rankEndGameDatas")) {
                if (!Array.isArray(message.rankEndGameDatas))
                    return "rankEndGameDatas: array expected";
                for (var i = 0; i < message.rankEndGameDatas.length; ++i) {
                    var error = $root.gameMsg.RankEndGameData.verify(message.rankEndGameDatas[i]);
                    if (error)
                        return "rankEndGameDatas." + error;
                }
            }
            return null;
        };

        return EndGameNotify;
    })();

    gameMsg.OverTimeNotify = (function() {

        /**
         * Properties of an OverTimeNotify.
         * @memberof gameMsg
         * @interface IOverTimeNotify
         * @property {string} sGamerID OverTimeNotify sGamerID
         * @property {number} nRank OverTimeNotify nRank
         */

        /**
         * Constructs a new OverTimeNotify.
         * @memberof gameMsg
         * @classdesc Represents an OverTimeNotify.
         * @implements IOverTimeNotify
         * @constructor
         * @param {gameMsg.IOverTimeNotify=} [properties] Properties to set
         */
        function OverTimeNotify(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OverTimeNotify sGamerID.
         * @member {string} sGamerID
         * @memberof gameMsg.OverTimeNotify
         * @instance
         */
        OverTimeNotify.prototype.sGamerID = "";

        /**
         * OverTimeNotify nRank.
         * @member {number} nRank
         * @memberof gameMsg.OverTimeNotify
         * @instance
         */
        OverTimeNotify.prototype.nRank = 0;

        /**
         * Creates a new OverTimeNotify instance using the specified properties.
         * @function create
         * @memberof gameMsg.OverTimeNotify
         * @static
         * @param {gameMsg.IOverTimeNotify=} [properties] Properties to set
         * @returns {gameMsg.OverTimeNotify} OverTimeNotify instance
         */
        OverTimeNotify.create = function create(properties) {
            return new OverTimeNotify(properties);
        };

        /**
         * Encodes the specified OverTimeNotify message. Does not implicitly {@link gameMsg.OverTimeNotify.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.OverTimeNotify
         * @static
         * @param {gameMsg.IOverTimeNotify} message OverTimeNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OverTimeNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sGamerID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nRank);
            return writer;
        };

        /**
         * Encodes the specified OverTimeNotify message, length delimited. Does not implicitly {@link gameMsg.OverTimeNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.OverTimeNotify
         * @static
         * @param {gameMsg.IOverTimeNotify} message OverTimeNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OverTimeNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OverTimeNotify message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.OverTimeNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.OverTimeNotify} OverTimeNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OverTimeNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.OverTimeNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sGamerID = reader.string();
                    break;
                case 2:
                    message.nRank = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sGamerID"))
                throw $util.ProtocolError("missing required 'sGamerID'", { instance: message });
            if (!message.hasOwnProperty("nRank"))
                throw $util.ProtocolError("missing required 'nRank'", { instance: message });
            return message;
        };

        /**
         * Decodes an OverTimeNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.OverTimeNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.OverTimeNotify} OverTimeNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OverTimeNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OverTimeNotify message.
         * @function verify
         * @memberof gameMsg.OverTimeNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OverTimeNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.sGamerID))
                return "sGamerID: string expected";
            if (!$util.isInteger(message.nRank))
                return "nRank: integer expected";
            return null;
        };

        return OverTimeNotify;
    })();

    /**
     * ErrorCode enum.
     * @name gameMsg.ErrorCode
     * @enum {string}
     * @property {number} success=1 success value
     * @property {number} userinvaild=2 userinvaild value
     * @property {number} pwderror=3 pwderror value
     * @property {number} moneyerror=4 moneyerror value
     * @property {number} gateunlock=5 gateunlock value
     * @property {number} ptomptnone=6 ptomptnone value
     * @property {number} maxgates=7 maxgates value
     */
    gameMsg.ErrorCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "success"] = 1;
        values[valuesById[2] = "userinvaild"] = 2;
        values[valuesById[3] = "pwderror"] = 3;
        values[valuesById[4] = "moneyerror"] = 4;
        values[valuesById[5] = "gateunlock"] = 5;
        values[valuesById[6] = "ptomptnone"] = 6;
        values[valuesById[7] = "maxgates"] = 7;
        return values;
    })();

    gameMsg.GameTimeTickNotify = (function() {

        /**
         * Properties of a GameTimeTickNotify.
         * @memberof gameMsg
         * @interface IGameTimeTickNotify
         * @property {number} nLeft GameTimeTickNotify nLeft
         */

        /**
         * Constructs a new GameTimeTickNotify.
         * @memberof gameMsg
         * @classdesc Represents a GameTimeTickNotify.
         * @implements IGameTimeTickNotify
         * @constructor
         * @param {gameMsg.IGameTimeTickNotify=} [properties] Properties to set
         */
        function GameTimeTickNotify(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameTimeTickNotify nLeft.
         * @member {number} nLeft
         * @memberof gameMsg.GameTimeTickNotify
         * @instance
         */
        GameTimeTickNotify.prototype.nLeft = 0;

        /**
         * Creates a new GameTimeTickNotify instance using the specified properties.
         * @function create
         * @memberof gameMsg.GameTimeTickNotify
         * @static
         * @param {gameMsg.IGameTimeTickNotify=} [properties] Properties to set
         * @returns {gameMsg.GameTimeTickNotify} GameTimeTickNotify instance
         */
        GameTimeTickNotify.create = function create(properties) {
            return new GameTimeTickNotify(properties);
        };

        /**
         * Encodes the specified GameTimeTickNotify message. Does not implicitly {@link gameMsg.GameTimeTickNotify.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.GameTimeTickNotify
         * @static
         * @param {gameMsg.IGameTimeTickNotify} message GameTimeTickNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameTimeTickNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nLeft);
            return writer;
        };

        /**
         * Encodes the specified GameTimeTickNotify message, length delimited. Does not implicitly {@link gameMsg.GameTimeTickNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.GameTimeTickNotify
         * @static
         * @param {gameMsg.IGameTimeTickNotify} message GameTimeTickNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameTimeTickNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameTimeTickNotify message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.GameTimeTickNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.GameTimeTickNotify} GameTimeTickNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameTimeTickNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.GameTimeTickNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nLeft = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("nLeft"))
                throw $util.ProtocolError("missing required 'nLeft'", { instance: message });
            return message;
        };

        /**
         * Decodes a GameTimeTickNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.GameTimeTickNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.GameTimeTickNotify} GameTimeTickNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameTimeTickNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameTimeTickNotify message.
         * @function verify
         * @memberof gameMsg.GameTimeTickNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameTimeTickNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.nLeft))
                return "nLeft: integer expected";
            return null;
        };

        return GameTimeTickNotify;
    })();

    gameMsg.Gamer = (function() {

        /**
         * Properties of a Gamer.
         * @memberof gameMsg
         * @interface IGamer
         * @property {string} sID Gamer sID
         * @property {string|null} [sHeadImg] Gamer sHeadImg
         * @property {string|null} [sNick] Gamer sNick
         * @property {number|null} [nRankLevel] Gamer nRankLevel
         */

        /**
         * Constructs a new Gamer.
         * @memberof gameMsg
         * @classdesc Represents a Gamer.
         * @implements IGamer
         * @constructor
         * @param {gameMsg.IGamer=} [properties] Properties to set
         */
        function Gamer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Gamer sID.
         * @member {string} sID
         * @memberof gameMsg.Gamer
         * @instance
         */
        Gamer.prototype.sID = "";

        /**
         * Gamer sHeadImg.
         * @member {string} sHeadImg
         * @memberof gameMsg.Gamer
         * @instance
         */
        Gamer.prototype.sHeadImg = "";

        /**
         * Gamer sNick.
         * @member {string} sNick
         * @memberof gameMsg.Gamer
         * @instance
         */
        Gamer.prototype.sNick = "";

        /**
         * Gamer nRankLevel.
         * @member {number} nRankLevel
         * @memberof gameMsg.Gamer
         * @instance
         */
        Gamer.prototype.nRankLevel = 0;

        /**
         * Creates a new Gamer instance using the specified properties.
         * @function create
         * @memberof gameMsg.Gamer
         * @static
         * @param {gameMsg.IGamer=} [properties] Properties to set
         * @returns {gameMsg.Gamer} Gamer instance
         */
        Gamer.create = function create(properties) {
            return new Gamer(properties);
        };

        /**
         * Encodes the specified Gamer message. Does not implicitly {@link gameMsg.Gamer.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.Gamer
         * @static
         * @param {gameMsg.IGamer} message Gamer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Gamer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sID);
            if (message.sHeadImg != null && message.hasOwnProperty("sHeadImg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.sHeadImg);
            if (message.sNick != null && message.hasOwnProperty("sNick"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.sNick);
            if (message.nRankLevel != null && message.hasOwnProperty("nRankLevel"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nRankLevel);
            return writer;
        };

        /**
         * Encodes the specified Gamer message, length delimited. Does not implicitly {@link gameMsg.Gamer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.Gamer
         * @static
         * @param {gameMsg.IGamer} message Gamer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Gamer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Gamer message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.Gamer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.Gamer} Gamer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Gamer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.Gamer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sID = reader.string();
                    break;
                case 2:
                    message.sHeadImg = reader.string();
                    break;
                case 3:
                    message.sNick = reader.string();
                    break;
                case 4:
                    message.nRankLevel = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sID"))
                throw $util.ProtocolError("missing required 'sID'", { instance: message });
            return message;
        };

        /**
         * Decodes a Gamer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.Gamer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.Gamer} Gamer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Gamer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Gamer message.
         * @function verify
         * @memberof gameMsg.Gamer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Gamer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.sID))
                return "sID: string expected";
            if (message.sHeadImg != null && message.hasOwnProperty("sHeadImg"))
                if (!$util.isString(message.sHeadImg))
                    return "sHeadImg: string expected";
            if (message.sNick != null && message.hasOwnProperty("sNick"))
                if (!$util.isString(message.sNick))
                    return "sNick: string expected";
            if (message.nRankLevel != null && message.hasOwnProperty("nRankLevel"))
                if (!$util.isInteger(message.nRankLevel))
                    return "nRankLevel: integer expected";
            return null;
        };

        return Gamer;
    })();

    gameMsg.Room = (function() {

        /**
         * Properties of a Room.
         * @memberof gameMsg
         * @interface IRoom
         * @property {Array.<gameMsg.IGamer>|null} [gamers] Room gamers
         * @property {string} sRoomID Room sRoomID
         * @property {string} sBossID Room sBossID
         */

        /**
         * Constructs a new Room.
         * @memberof gameMsg
         * @classdesc Represents a Room.
         * @implements IRoom
         * @constructor
         * @param {gameMsg.IRoom=} [properties] Properties to set
         */
        function Room(properties) {
            this.gamers = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Room gamers.
         * @member {Array.<gameMsg.IGamer>} gamers
         * @memberof gameMsg.Room
         * @instance
         */
        Room.prototype.gamers = $util.emptyArray;

        /**
         * Room sRoomID.
         * @member {string} sRoomID
         * @memberof gameMsg.Room
         * @instance
         */
        Room.prototype.sRoomID = "";

        /**
         * Room sBossID.
         * @member {string} sBossID
         * @memberof gameMsg.Room
         * @instance
         */
        Room.prototype.sBossID = "";

        /**
         * Creates a new Room instance using the specified properties.
         * @function create
         * @memberof gameMsg.Room
         * @static
         * @param {gameMsg.IRoom=} [properties] Properties to set
         * @returns {gameMsg.Room} Room instance
         */
        Room.create = function create(properties) {
            return new Room(properties);
        };

        /**
         * Encodes the specified Room message. Does not implicitly {@link gameMsg.Room.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.Room
         * @static
         * @param {gameMsg.IRoom} message Room message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Room.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gamers != null && message.gamers.length)
                for (var i = 0; i < message.gamers.length; ++i)
                    $root.gameMsg.Gamer.encode(message.gamers[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sRoomID);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.sBossID);
            return writer;
        };

        /**
         * Encodes the specified Room message, length delimited. Does not implicitly {@link gameMsg.Room.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.Room
         * @static
         * @param {gameMsg.IRoom} message Room message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Room.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Room message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.Room
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.Room} Room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Room.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.Room();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.gamers && message.gamers.length))
                        message.gamers = [];
                    message.gamers.push($root.gameMsg.Gamer.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.sRoomID = reader.string();
                    break;
                case 3:
                    message.sBossID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sRoomID"))
                throw $util.ProtocolError("missing required 'sRoomID'", { instance: message });
            if (!message.hasOwnProperty("sBossID"))
                throw $util.ProtocolError("missing required 'sBossID'", { instance: message });
            return message;
        };

        /**
         * Decodes a Room message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.Room
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.Room} Room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Room.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Room message.
         * @function verify
         * @memberof gameMsg.Room
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Room.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gamers != null && message.hasOwnProperty("gamers")) {
                if (!Array.isArray(message.gamers))
                    return "gamers: array expected";
                for (var i = 0; i < message.gamers.length; ++i) {
                    var error = $root.gameMsg.Gamer.verify(message.gamers[i]);
                    if (error)
                        return "gamers." + error;
                }
            }
            if (!$util.isString(message.sRoomID))
                return "sRoomID: string expected";
            if (!$util.isString(message.sBossID))
                return "sBossID: string expected";
            return null;
        };

        return Room;
    })();

    gameMsg.JoinRoomRequest = (function() {

        /**
         * Properties of a JoinRoomRequest.
         * @memberof gameMsg
         * @interface IJoinRoomRequest
         * @property {string} sID JoinRoomRequest sID
         * @property {string} sRoomID JoinRoomRequest sRoomID
         */

        /**
         * Constructs a new JoinRoomRequest.
         * @memberof gameMsg
         * @classdesc Represents a JoinRoomRequest.
         * @implements IJoinRoomRequest
         * @constructor
         * @param {gameMsg.IJoinRoomRequest=} [properties] Properties to set
         */
        function JoinRoomRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinRoomRequest sID.
         * @member {string} sID
         * @memberof gameMsg.JoinRoomRequest
         * @instance
         */
        JoinRoomRequest.prototype.sID = "";

        /**
         * JoinRoomRequest sRoomID.
         * @member {string} sRoomID
         * @memberof gameMsg.JoinRoomRequest
         * @instance
         */
        JoinRoomRequest.prototype.sRoomID = "";

        /**
         * Creates a new JoinRoomRequest instance using the specified properties.
         * @function create
         * @memberof gameMsg.JoinRoomRequest
         * @static
         * @param {gameMsg.IJoinRoomRequest=} [properties] Properties to set
         * @returns {gameMsg.JoinRoomRequest} JoinRoomRequest instance
         */
        JoinRoomRequest.create = function create(properties) {
            return new JoinRoomRequest(properties);
        };

        /**
         * Encodes the specified JoinRoomRequest message. Does not implicitly {@link gameMsg.JoinRoomRequest.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.JoinRoomRequest
         * @static
         * @param {gameMsg.IJoinRoomRequest} message JoinRoomRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sID);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sRoomID);
            return writer;
        };

        /**
         * Encodes the specified JoinRoomRequest message, length delimited. Does not implicitly {@link gameMsg.JoinRoomRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.JoinRoomRequest
         * @static
         * @param {gameMsg.IJoinRoomRequest} message JoinRoomRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinRoomRequest message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.JoinRoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.JoinRoomRequest} JoinRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.JoinRoomRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sID = reader.string();
                    break;
                case 2:
                    message.sRoomID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sID"))
                throw $util.ProtocolError("missing required 'sID'", { instance: message });
            if (!message.hasOwnProperty("sRoomID"))
                throw $util.ProtocolError("missing required 'sRoomID'", { instance: message });
            return message;
        };

        /**
         * Decodes a JoinRoomRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.JoinRoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.JoinRoomRequest} JoinRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinRoomRequest message.
         * @function verify
         * @memberof gameMsg.JoinRoomRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinRoomRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.sID))
                return "sID: string expected";
            if (!$util.isString(message.sRoomID))
                return "sRoomID: string expected";
            return null;
        };

        return JoinRoomRequest;
    })();

    gameMsg.JoinRoomResponse = (function() {

        /**
         * Properties of a JoinRoomResponse.
         * @memberof gameMsg
         * @interface IJoinRoomResponse
         * @property {gameMsg.IRoom} joinRoom JoinRoomResponse joinRoom
         */

        /**
         * Constructs a new JoinRoomResponse.
         * @memberof gameMsg
         * @classdesc Represents a JoinRoomResponse.
         * @implements IJoinRoomResponse
         * @constructor
         * @param {gameMsg.IJoinRoomResponse=} [properties] Properties to set
         */
        function JoinRoomResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinRoomResponse joinRoom.
         * @member {gameMsg.IRoom} joinRoom
         * @memberof gameMsg.JoinRoomResponse
         * @instance
         */
        JoinRoomResponse.prototype.joinRoom = null;

        /**
         * Creates a new JoinRoomResponse instance using the specified properties.
         * @function create
         * @memberof gameMsg.JoinRoomResponse
         * @static
         * @param {gameMsg.IJoinRoomResponse=} [properties] Properties to set
         * @returns {gameMsg.JoinRoomResponse} JoinRoomResponse instance
         */
        JoinRoomResponse.create = function create(properties) {
            return new JoinRoomResponse(properties);
        };

        /**
         * Encodes the specified JoinRoomResponse message. Does not implicitly {@link gameMsg.JoinRoomResponse.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.JoinRoomResponse
         * @static
         * @param {gameMsg.IJoinRoomResponse} message JoinRoomResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.gameMsg.Room.encode(message.joinRoom, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JoinRoomResponse message, length delimited. Does not implicitly {@link gameMsg.JoinRoomResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.JoinRoomResponse
         * @static
         * @param {gameMsg.IJoinRoomResponse} message JoinRoomResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinRoomResponse message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.JoinRoomResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.JoinRoomResponse} JoinRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.JoinRoomResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.joinRoom = $root.gameMsg.Room.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("joinRoom"))
                throw $util.ProtocolError("missing required 'joinRoom'", { instance: message });
            return message;
        };

        /**
         * Decodes a JoinRoomResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.JoinRoomResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.JoinRoomResponse} JoinRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinRoomResponse message.
         * @function verify
         * @memberof gameMsg.JoinRoomResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinRoomResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.gameMsg.Room.verify(message.joinRoom);
                if (error)
                    return "joinRoom." + error;
            }
            return null;
        };

        return JoinRoomResponse;
    })();

    gameMsg.JoinRoomNotify = (function() {

        /**
         * Properties of a JoinRoomNotify.
         * @memberof gameMsg
         * @interface IJoinRoomNotify
         * @property {gameMsg.IGamer} joinGamer JoinRoomNotify joinGamer
         */

        /**
         * Constructs a new JoinRoomNotify.
         * @memberof gameMsg
         * @classdesc Represents a JoinRoomNotify.
         * @implements IJoinRoomNotify
         * @constructor
         * @param {gameMsg.IJoinRoomNotify=} [properties] Properties to set
         */
        function JoinRoomNotify(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinRoomNotify joinGamer.
         * @member {gameMsg.IGamer} joinGamer
         * @memberof gameMsg.JoinRoomNotify
         * @instance
         */
        JoinRoomNotify.prototype.joinGamer = null;

        /**
         * Creates a new JoinRoomNotify instance using the specified properties.
         * @function create
         * @memberof gameMsg.JoinRoomNotify
         * @static
         * @param {gameMsg.IJoinRoomNotify=} [properties] Properties to set
         * @returns {gameMsg.JoinRoomNotify} JoinRoomNotify instance
         */
        JoinRoomNotify.create = function create(properties) {
            return new JoinRoomNotify(properties);
        };

        /**
         * Encodes the specified JoinRoomNotify message. Does not implicitly {@link gameMsg.JoinRoomNotify.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.JoinRoomNotify
         * @static
         * @param {gameMsg.IJoinRoomNotify} message JoinRoomNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.gameMsg.Gamer.encode(message.joinGamer, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JoinRoomNotify message, length delimited. Does not implicitly {@link gameMsg.JoinRoomNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.JoinRoomNotify
         * @static
         * @param {gameMsg.IJoinRoomNotify} message JoinRoomNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinRoomNotify message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.JoinRoomNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.JoinRoomNotify} JoinRoomNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.JoinRoomNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.joinGamer = $root.gameMsg.Gamer.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("joinGamer"))
                throw $util.ProtocolError("missing required 'joinGamer'", { instance: message });
            return message;
        };

        /**
         * Decodes a JoinRoomNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.JoinRoomNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.JoinRoomNotify} JoinRoomNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinRoomNotify message.
         * @function verify
         * @memberof gameMsg.JoinRoomNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinRoomNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.gameMsg.Gamer.verify(message.joinGamer);
                if (error)
                    return "joinGamer." + error;
            }
            return null;
        };

        return JoinRoomNotify;
    })();

    gameMsg.LeaveRoomRequest = (function() {

        /**
         * Properties of a LeaveRoomRequest.
         * @memberof gameMsg
         * @interface ILeaveRoomRequest
         * @property {string} sID LeaveRoomRequest sID
         * @property {string} sRoomID LeaveRoomRequest sRoomID
         */

        /**
         * Constructs a new LeaveRoomRequest.
         * @memberof gameMsg
         * @classdesc Represents a LeaveRoomRequest.
         * @implements ILeaveRoomRequest
         * @constructor
         * @param {gameMsg.ILeaveRoomRequest=} [properties] Properties to set
         */
        function LeaveRoomRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LeaveRoomRequest sID.
         * @member {string} sID
         * @memberof gameMsg.LeaveRoomRequest
         * @instance
         */
        LeaveRoomRequest.prototype.sID = "";

        /**
         * LeaveRoomRequest sRoomID.
         * @member {string} sRoomID
         * @memberof gameMsg.LeaveRoomRequest
         * @instance
         */
        LeaveRoomRequest.prototype.sRoomID = "";

        /**
         * Creates a new LeaveRoomRequest instance using the specified properties.
         * @function create
         * @memberof gameMsg.LeaveRoomRequest
         * @static
         * @param {gameMsg.ILeaveRoomRequest=} [properties] Properties to set
         * @returns {gameMsg.LeaveRoomRequest} LeaveRoomRequest instance
         */
        LeaveRoomRequest.create = function create(properties) {
            return new LeaveRoomRequest(properties);
        };

        /**
         * Encodes the specified LeaveRoomRequest message. Does not implicitly {@link gameMsg.LeaveRoomRequest.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.LeaveRoomRequest
         * @static
         * @param {gameMsg.ILeaveRoomRequest} message LeaveRoomRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveRoomRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sID);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sRoomID);
            return writer;
        };

        /**
         * Encodes the specified LeaveRoomRequest message, length delimited. Does not implicitly {@link gameMsg.LeaveRoomRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.LeaveRoomRequest
         * @static
         * @param {gameMsg.ILeaveRoomRequest} message LeaveRoomRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveRoomRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LeaveRoomRequest message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.LeaveRoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.LeaveRoomRequest} LeaveRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveRoomRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.LeaveRoomRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sID = reader.string();
                    break;
                case 2:
                    message.sRoomID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sID"))
                throw $util.ProtocolError("missing required 'sID'", { instance: message });
            if (!message.hasOwnProperty("sRoomID"))
                throw $util.ProtocolError("missing required 'sRoomID'", { instance: message });
            return message;
        };

        /**
         * Decodes a LeaveRoomRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.LeaveRoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.LeaveRoomRequest} LeaveRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveRoomRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LeaveRoomRequest message.
         * @function verify
         * @memberof gameMsg.LeaveRoomRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LeaveRoomRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.sID))
                return "sID: string expected";
            if (!$util.isString(message.sRoomID))
                return "sRoomID: string expected";
            return null;
        };

        return LeaveRoomRequest;
    })();

    gameMsg.LeaveRoomResponse = (function() {

        /**
         * Properties of a LeaveRoomResponse.
         * @memberof gameMsg
         * @interface ILeaveRoomResponse
         * @property {number} nErrorCode LeaveRoomResponse nErrorCode
         */

        /**
         * Constructs a new LeaveRoomResponse.
         * @memberof gameMsg
         * @classdesc Represents a LeaveRoomResponse.
         * @implements ILeaveRoomResponse
         * @constructor
         * @param {gameMsg.ILeaveRoomResponse=} [properties] Properties to set
         */
        function LeaveRoomResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LeaveRoomResponse nErrorCode.
         * @member {number} nErrorCode
         * @memberof gameMsg.LeaveRoomResponse
         * @instance
         */
        LeaveRoomResponse.prototype.nErrorCode = 0;

        /**
         * Creates a new LeaveRoomResponse instance using the specified properties.
         * @function create
         * @memberof gameMsg.LeaveRoomResponse
         * @static
         * @param {gameMsg.ILeaveRoomResponse=} [properties] Properties to set
         * @returns {gameMsg.LeaveRoomResponse} LeaveRoomResponse instance
         */
        LeaveRoomResponse.create = function create(properties) {
            return new LeaveRoomResponse(properties);
        };

        /**
         * Encodes the specified LeaveRoomResponse message. Does not implicitly {@link gameMsg.LeaveRoomResponse.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.LeaveRoomResponse
         * @static
         * @param {gameMsg.ILeaveRoomResponse} message LeaveRoomResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveRoomResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nErrorCode);
            return writer;
        };

        /**
         * Encodes the specified LeaveRoomResponse message, length delimited. Does not implicitly {@link gameMsg.LeaveRoomResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.LeaveRoomResponse
         * @static
         * @param {gameMsg.ILeaveRoomResponse} message LeaveRoomResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveRoomResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LeaveRoomResponse message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.LeaveRoomResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.LeaveRoomResponse} LeaveRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveRoomResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.LeaveRoomResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nErrorCode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("nErrorCode"))
                throw $util.ProtocolError("missing required 'nErrorCode'", { instance: message });
            return message;
        };

        /**
         * Decodes a LeaveRoomResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.LeaveRoomResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.LeaveRoomResponse} LeaveRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveRoomResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LeaveRoomResponse message.
         * @function verify
         * @memberof gameMsg.LeaveRoomResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LeaveRoomResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.nErrorCode))
                return "nErrorCode: integer expected";
            return null;
        };

        return LeaveRoomResponse;
    })();

    gameMsg.LeaveRoomNotify = (function() {

        /**
         * Properties of a LeaveRoomNotify.
         * @memberof gameMsg
         * @interface ILeaveRoomNotify
         * @property {string} sID LeaveRoomNotify sID
         * @property {string} sRoomID LeaveRoomNotify sRoomID
         */

        /**
         * Constructs a new LeaveRoomNotify.
         * @memberof gameMsg
         * @classdesc Represents a LeaveRoomNotify.
         * @implements ILeaveRoomNotify
         * @constructor
         * @param {gameMsg.ILeaveRoomNotify=} [properties] Properties to set
         */
        function LeaveRoomNotify(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LeaveRoomNotify sID.
         * @member {string} sID
         * @memberof gameMsg.LeaveRoomNotify
         * @instance
         */
        LeaveRoomNotify.prototype.sID = "";

        /**
         * LeaveRoomNotify sRoomID.
         * @member {string} sRoomID
         * @memberof gameMsg.LeaveRoomNotify
         * @instance
         */
        LeaveRoomNotify.prototype.sRoomID = "";

        /**
         * Creates a new LeaveRoomNotify instance using the specified properties.
         * @function create
         * @memberof gameMsg.LeaveRoomNotify
         * @static
         * @param {gameMsg.ILeaveRoomNotify=} [properties] Properties to set
         * @returns {gameMsg.LeaveRoomNotify} LeaveRoomNotify instance
         */
        LeaveRoomNotify.create = function create(properties) {
            return new LeaveRoomNotify(properties);
        };

        /**
         * Encodes the specified LeaveRoomNotify message. Does not implicitly {@link gameMsg.LeaveRoomNotify.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.LeaveRoomNotify
         * @static
         * @param {gameMsg.ILeaveRoomNotify} message LeaveRoomNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveRoomNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sID);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sRoomID);
            return writer;
        };

        /**
         * Encodes the specified LeaveRoomNotify message, length delimited. Does not implicitly {@link gameMsg.LeaveRoomNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.LeaveRoomNotify
         * @static
         * @param {gameMsg.ILeaveRoomNotify} message LeaveRoomNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveRoomNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LeaveRoomNotify message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.LeaveRoomNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.LeaveRoomNotify} LeaveRoomNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveRoomNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.LeaveRoomNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sID = reader.string();
                    break;
                case 2:
                    message.sRoomID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sID"))
                throw $util.ProtocolError("missing required 'sID'", { instance: message });
            if (!message.hasOwnProperty("sRoomID"))
                throw $util.ProtocolError("missing required 'sRoomID'", { instance: message });
            return message;
        };

        /**
         * Decodes a LeaveRoomNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.LeaveRoomNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.LeaveRoomNotify} LeaveRoomNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveRoomNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LeaveRoomNotify message.
         * @function verify
         * @memberof gameMsg.LeaveRoomNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LeaveRoomNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.sID))
                return "sID: string expected";
            if (!$util.isString(message.sRoomID))
                return "sRoomID: string expected";
            return null;
        };

        return LeaveRoomNotify;
    })();

    gameMsg.User = (function() {

        /**
         * Properties of a User.
         * @memberof gameMsg
         * @interface IUser
         * @property {string} nUserID User nUserID
         * @property {string|null} [sNick] User sNick
         * @property {number|null} [nExp] User nExp
         * @property {number|null} [nGold] User nGold
         * @property {string|null} [sHeadimg] User sHeadimg
         * @property {number|null} [starNum] User starNum
         */

        /**
         * Constructs a new User.
         * @memberof gameMsg
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {gameMsg.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User nUserID.
         * @member {string} nUserID
         * @memberof gameMsg.User
         * @instance
         */
        User.prototype.nUserID = "";

        /**
         * User sNick.
         * @member {string} sNick
         * @memberof gameMsg.User
         * @instance
         */
        User.prototype.sNick = "";

        /**
         * User nExp.
         * @member {number} nExp
         * @memberof gameMsg.User
         * @instance
         */
        User.prototype.nExp = 0;

        /**
         * User nGold.
         * @member {number} nGold
         * @memberof gameMsg.User
         * @instance
         */
        User.prototype.nGold = 0;

        /**
         * User sHeadimg.
         * @member {string} sHeadimg
         * @memberof gameMsg.User
         * @instance
         */
        User.prototype.sHeadimg = "";

        /**
         * User starNum.
         * @member {number} starNum
         * @memberof gameMsg.User
         * @instance
         */
        User.prototype.starNum = 0;

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof gameMsg.User
         * @static
         * @param {gameMsg.IUser=} [properties] Properties to set
         * @returns {gameMsg.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link gameMsg.User.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.User
         * @static
         * @param {gameMsg.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.nUserID);
            if (message.sNick != null && message.hasOwnProperty("sNick"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.sNick);
            if (message.nExp != null && message.hasOwnProperty("nExp"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nExp);
            if (message.nGold != null && message.hasOwnProperty("nGold"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nGold);
            if (message.sHeadimg != null && message.hasOwnProperty("sHeadimg"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.sHeadimg);
            if (message.starNum != null && message.hasOwnProperty("starNum"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.starNum);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link gameMsg.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.User
         * @static
         * @param {gameMsg.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.User();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nUserID = reader.string();
                    break;
                case 2:
                    message.sNick = reader.string();
                    break;
                case 3:
                    message.nExp = reader.int32();
                    break;
                case 4:
                    message.nGold = reader.int32();
                    break;
                case 5:
                    message.sHeadimg = reader.string();
                    break;
                case 6:
                    message.starNum = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("nUserID"))
                throw $util.ProtocolError("missing required 'nUserID'", { instance: message });
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof gameMsg.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.nUserID))
                return "nUserID: string expected";
            if (message.sNick != null && message.hasOwnProperty("sNick"))
                if (!$util.isString(message.sNick))
                    return "sNick: string expected";
            if (message.nExp != null && message.hasOwnProperty("nExp"))
                if (!$util.isInteger(message.nExp))
                    return "nExp: integer expected";
            if (message.nGold != null && message.hasOwnProperty("nGold"))
                if (!$util.isInteger(message.nGold))
                    return "nGold: integer expected";
            if (message.sHeadimg != null && message.hasOwnProperty("sHeadimg"))
                if (!$util.isString(message.sHeadimg))
                    return "sHeadimg: string expected";
            if (message.starNum != null && message.hasOwnProperty("starNum"))
                if (!$util.isInteger(message.starNum))
                    return "starNum: integer expected";
            return null;
        };

        return User;
    })();

    gameMsg.Gate = (function() {

        /**
         * Properties of a Gate.
         * @memberof gameMsg
         * @interface IGate
         * @property {number} id Gate id
         * @property {number} starNum Gate starNum
         */

        /**
         * Constructs a new Gate.
         * @memberof gameMsg
         * @classdesc Represents a Gate.
         * @implements IGate
         * @constructor
         * @param {gameMsg.IGate=} [properties] Properties to set
         */
        function Gate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Gate id.
         * @member {number} id
         * @memberof gameMsg.Gate
         * @instance
         */
        Gate.prototype.id = 0;

        /**
         * Gate starNum.
         * @member {number} starNum
         * @memberof gameMsg.Gate
         * @instance
         */
        Gate.prototype.starNum = 0;

        /**
         * Creates a new Gate instance using the specified properties.
         * @function create
         * @memberof gameMsg.Gate
         * @static
         * @param {gameMsg.IGate=} [properties] Properties to set
         * @returns {gameMsg.Gate} Gate instance
         */
        Gate.create = function create(properties) {
            return new Gate(properties);
        };

        /**
         * Encodes the specified Gate message. Does not implicitly {@link gameMsg.Gate.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.Gate
         * @static
         * @param {gameMsg.IGate} message Gate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Gate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.starNum);
            return writer;
        };

        /**
         * Encodes the specified Gate message, length delimited. Does not implicitly {@link gameMsg.Gate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.Gate
         * @static
         * @param {gameMsg.IGate} message Gate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Gate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Gate message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.Gate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.Gate} Gate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Gate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.Gate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.starNum = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("starNum"))
                throw $util.ProtocolError("missing required 'starNum'", { instance: message });
            return message;
        };

        /**
         * Decodes a Gate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.Gate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.Gate} Gate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Gate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Gate message.
         * @function verify
         * @memberof gameMsg.Gate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Gate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isInteger(message.starNum))
                return "starNum: integer expected";
            return null;
        };

        return Gate;
    })();

    gameMsg.LoginRequest = (function() {

        /**
         * Properties of a LoginRequest.
         * @memberof gameMsg
         * @interface ILoginRequest
         * @property {string} sID LoginRequest sID
         * @property {string|null} [sNick] LoginRequest sNick
         * @property {string|null} [sHeadimg] LoginRequest sHeadimg
         */

        /**
         * Constructs a new LoginRequest.
         * @memberof gameMsg
         * @classdesc Represents a LoginRequest.
         * @implements ILoginRequest
         * @constructor
         * @param {gameMsg.ILoginRequest=} [properties] Properties to set
         */
        function LoginRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRequest sID.
         * @member {string} sID
         * @memberof gameMsg.LoginRequest
         * @instance
         */
        LoginRequest.prototype.sID = "";

        /**
         * LoginRequest sNick.
         * @member {string} sNick
         * @memberof gameMsg.LoginRequest
         * @instance
         */
        LoginRequest.prototype.sNick = "";

        /**
         * LoginRequest sHeadimg.
         * @member {string} sHeadimg
         * @memberof gameMsg.LoginRequest
         * @instance
         */
        LoginRequest.prototype.sHeadimg = "";

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @function create
         * @memberof gameMsg.LoginRequest
         * @static
         * @param {gameMsg.ILoginRequest=} [properties] Properties to set
         * @returns {gameMsg.LoginRequest} LoginRequest instance
         */
        LoginRequest.create = function create(properties) {
            return new LoginRequest(properties);
        };

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link gameMsg.LoginRequest.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.LoginRequest
         * @static
         * @param {gameMsg.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sID);
            if (message.sNick != null && message.hasOwnProperty("sNick"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.sNick);
            if (message.sHeadimg != null && message.hasOwnProperty("sHeadimg"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.sHeadimg);
            return writer;
        };

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link gameMsg.LoginRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.LoginRequest
         * @static
         * @param {gameMsg.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.LoginRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sID = reader.string();
                    break;
                case 2:
                    message.sNick = reader.string();
                    break;
                case 3:
                    message.sHeadimg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sID"))
                throw $util.ProtocolError("missing required 'sID'", { instance: message });
            return message;
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRequest message.
         * @function verify
         * @memberof gameMsg.LoginRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.sID))
                return "sID: string expected";
            if (message.sNick != null && message.hasOwnProperty("sNick"))
                if (!$util.isString(message.sNick))
                    return "sNick: string expected";
            if (message.sHeadimg != null && message.hasOwnProperty("sHeadimg"))
                if (!$util.isString(message.sHeadimg))
                    return "sHeadimg: string expected";
            return null;
        };

        return LoginRequest;
    })();

    gameMsg.LoginResponse = (function() {

        /**
         * Properties of a LoginResponse.
         * @memberof gameMsg
         * @interface ILoginResponse
         * @property {gameMsg.IUser|null} [requester] LoginResponse requester
         * @property {Array.<gameMsg.IGate>|null} [gates] LoginResponse gates
         * @property {number|null} [nExp] LoginResponse nExp
         * @property {number|null} [nGold] LoginResponse nGold
         * @property {number|null} [nTotalStar] LoginResponse nTotalStar
         * @property {number|null} [nTotalGate] LoginResponse nTotalGate
         */

        /**
         * Constructs a new LoginResponse.
         * @memberof gameMsg
         * @classdesc Represents a LoginResponse.
         * @implements ILoginResponse
         * @constructor
         * @param {gameMsg.ILoginResponse=} [properties] Properties to set
         */
        function LoginResponse(properties) {
            this.gates = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginResponse requester.
         * @member {gameMsg.IUser|null|undefined} requester
         * @memberof gameMsg.LoginResponse
         * @instance
         */
        LoginResponse.prototype.requester = null;

        /**
         * LoginResponse gates.
         * @member {Array.<gameMsg.IGate>} gates
         * @memberof gameMsg.LoginResponse
         * @instance
         */
        LoginResponse.prototype.gates = $util.emptyArray;

        /**
         * LoginResponse nExp.
         * @member {number} nExp
         * @memberof gameMsg.LoginResponse
         * @instance
         */
        LoginResponse.prototype.nExp = 0;

        /**
         * LoginResponse nGold.
         * @member {number} nGold
         * @memberof gameMsg.LoginResponse
         * @instance
         */
        LoginResponse.prototype.nGold = 0;

        /**
         * LoginResponse nTotalStar.
         * @member {number} nTotalStar
         * @memberof gameMsg.LoginResponse
         * @instance
         */
        LoginResponse.prototype.nTotalStar = 0;

        /**
         * LoginResponse nTotalGate.
         * @member {number} nTotalGate
         * @memberof gameMsg.LoginResponse
         * @instance
         */
        LoginResponse.prototype.nTotalGate = 0;

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @function create
         * @memberof gameMsg.LoginResponse
         * @static
         * @param {gameMsg.ILoginResponse=} [properties] Properties to set
         * @returns {gameMsg.LoginResponse} LoginResponse instance
         */
        LoginResponse.create = function create(properties) {
            return new LoginResponse(properties);
        };

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link gameMsg.LoginResponse.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.LoginResponse
         * @static
         * @param {gameMsg.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.requester != null && message.hasOwnProperty("requester"))
                $root.gameMsg.User.encode(message.requester, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.gates != null && message.gates.length)
                for (var i = 0; i < message.gates.length; ++i)
                    $root.gameMsg.Gate.encode(message.gates[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.nExp != null && message.hasOwnProperty("nExp"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nExp);
            if (message.nGold != null && message.hasOwnProperty("nGold"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nGold);
            if (message.nTotalStar != null && message.hasOwnProperty("nTotalStar"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.nTotalStar);
            if (message.nTotalGate != null && message.hasOwnProperty("nTotalGate"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.nTotalGate);
            return writer;
        };

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link gameMsg.LoginResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.LoginResponse
         * @static
         * @param {gameMsg.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.LoginResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.requester = $root.gameMsg.User.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.gates && message.gates.length))
                        message.gates = [];
                    message.gates.push($root.gameMsg.Gate.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.nExp = reader.int32();
                    break;
                case 4:
                    message.nGold = reader.int32();
                    break;
                case 5:
                    message.nTotalStar = reader.int32();
                    break;
                case 6:
                    message.nTotalGate = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginResponse message.
         * @function verify
         * @memberof gameMsg.LoginResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.requester != null && message.hasOwnProperty("requester")) {
                var error = $root.gameMsg.User.verify(message.requester);
                if (error)
                    return "requester." + error;
            }
            if (message.gates != null && message.hasOwnProperty("gates")) {
                if (!Array.isArray(message.gates))
                    return "gates: array expected";
                for (var i = 0; i < message.gates.length; ++i) {
                    var error = $root.gameMsg.Gate.verify(message.gates[i]);
                    if (error)
                        return "gates." + error;
                }
            }
            if (message.nExp != null && message.hasOwnProperty("nExp"))
                if (!$util.isInteger(message.nExp))
                    return "nExp: integer expected";
            if (message.nGold != null && message.hasOwnProperty("nGold"))
                if (!$util.isInteger(message.nGold))
                    return "nGold: integer expected";
            if (message.nTotalStar != null && message.hasOwnProperty("nTotalStar"))
                if (!$util.isInteger(message.nTotalStar))
                    return "nTotalStar: integer expected";
            if (message.nTotalGate != null && message.hasOwnProperty("nTotalGate"))
                if (!$util.isInteger(message.nTotalGate))
                    return "nTotalGate: integer expected";
            return null;
        };

        return LoginResponse;
    })();

    /**
     * EnumMsg enum.
     * @name gameMsg.EnumMsg
     * @enum {string}
     * @property {number} loginrequest=1 loginrequest value
     * @property {number} loginresponse=2 loginresponse value
     * @property {number} playbeginrequest=3 playbeginrequest value
     * @property {number} playbeginresponse=4 playbeginresponse value
     * @property {number} playendrequest=5 playendrequest value
     * @property {number} playendresponse=6 playendresponse value
     * @property {number} seeadrequest=7 seeadrequest value
     * @property {number} seeadresponse=8 seeadresponse value
     * @property {number} usepromptrequest=9 usepromptrequest value
     * @property {number} usepromptresponse=10 usepromptresponse value
     * @property {number} rankrequest=11 rankrequest value
     * @property {number} rankresponse=12 rankresponse value
     * @property {number} createroomrequest=13 createroomrequest value
     * @property {number} createroomresponse=14 createroomresponse value
     * @property {number} joinroomrequest=15 joinroomrequest value
     * @property {number} joinroomresponse=16 joinroomresponse value
     * @property {number} joinroomnotify=17 joinroomnotify value
     * @property {number} leaveroomrequest=18 leaveroomrequest value
     * @property {number} leaveroomresponse=19 leaveroomresponse value
     * @property {number} leaveroomnotify=20 leaveroomnotify value
     * @property {number} startgamenotify=21 startgamenotify value
     * @property {number} endgamerequest=22 endgamerequest value
     * @property {number} endgameresponse=23 endgameresponse value
     * @property {number} endgamenotify=24 endgamenotify value
     * @property {number} gametimeticknotify=25 gametimeticknotify value
     * @property {number} startgamerequest=26 startgamerequest value
     * @property {number} startgameresponse=27 startgameresponse value
     * @property {number} matchgamerequest=28 matchgamerequest value
     * @property {number} matchgameresponse=29 matchgameresponse value
     * @property {number} usetoolrequest=30 usetoolrequest value
     * @property {number} usetoolresponse=31 usetoolresponse value
     * @property {number} usetoolnotify=32 usetoolnotify value
     * @property {number} overtimenotify=33 overtimenotify value
     * @property {number} buyrequest=34 buyrequest value
     * @property {number} buyresponse=35 buyresponse value
     * @property {number} playblockaddrequest=36 playblockaddrequest value
     * @property {number} playblockaddresponse=37 playblockaddresponse value
     * @property {number} playblockdeleterequest=38 playblockdeleterequest value
     * @property {number} playblockdeleteresponse=39 playblockdeleteresponse value
     * @property {number} playblocknotify=40 playblocknotify value
     */
    gameMsg.EnumMsg = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "loginrequest"] = 1;
        values[valuesById[2] = "loginresponse"] = 2;
        values[valuesById[3] = "playbeginrequest"] = 3;
        values[valuesById[4] = "playbeginresponse"] = 4;
        values[valuesById[5] = "playendrequest"] = 5;
        values[valuesById[6] = "playendresponse"] = 6;
        values[valuesById[7] = "seeadrequest"] = 7;
        values[valuesById[8] = "seeadresponse"] = 8;
        values[valuesById[9] = "usepromptrequest"] = 9;
        values[valuesById[10] = "usepromptresponse"] = 10;
        values[valuesById[11] = "rankrequest"] = 11;
        values[valuesById[12] = "rankresponse"] = 12;
        values[valuesById[13] = "createroomrequest"] = 13;
        values[valuesById[14] = "createroomresponse"] = 14;
        values[valuesById[15] = "joinroomrequest"] = 15;
        values[valuesById[16] = "joinroomresponse"] = 16;
        values[valuesById[17] = "joinroomnotify"] = 17;
        values[valuesById[18] = "leaveroomrequest"] = 18;
        values[valuesById[19] = "leaveroomresponse"] = 19;
        values[valuesById[20] = "leaveroomnotify"] = 20;
        values[valuesById[21] = "startgamenotify"] = 21;
        values[valuesById[22] = "endgamerequest"] = 22;
        values[valuesById[23] = "endgameresponse"] = 23;
        values[valuesById[24] = "endgamenotify"] = 24;
        values[valuesById[25] = "gametimeticknotify"] = 25;
        values[valuesById[26] = "startgamerequest"] = 26;
        values[valuesById[27] = "startgameresponse"] = 27;
        values[valuesById[28] = "matchgamerequest"] = 28;
        values[valuesById[29] = "matchgameresponse"] = 29;
        values[valuesById[30] = "usetoolrequest"] = 30;
        values[valuesById[31] = "usetoolresponse"] = 31;
        values[valuesById[32] = "usetoolnotify"] = 32;
        values[valuesById[33] = "overtimenotify"] = 33;
        values[valuesById[34] = "buyrequest"] = 34;
        values[valuesById[35] = "buyresponse"] = 35;
        values[valuesById[36] = "playblockaddrequest"] = 36;
        values[valuesById[37] = "playblockaddresponse"] = 37;
        values[valuesById[38] = "playblockdeleterequest"] = 38;
        values[valuesById[39] = "playblockdeleteresponse"] = 39;
        values[valuesById[40] = "playblocknotify"] = 40;
        return values;
    })();

    gameMsg.Request = (function() {

        /**
         * Properties of a Request.
         * @memberof gameMsg
         * @interface IRequest
         * @property {gameMsg.ILoginRequest|null} [loginRequest] Request loginRequest
         * @property {gameMsg.IPlayBeginRequest|null} [playBeginRequest] Request playBeginRequest
         * @property {gameMsg.IPlayEndRequest|null} [playEndRequest] Request playEndRequest
         * @property {gameMsg.ISeeAdRequest|null} [seeAdRequest] Request seeAdRequest
         * @property {gameMsg.IUsePromptRequest|null} [usePromptRequest] Request usePromptRequest
         * @property {gameMsg.IRankRequest|null} [rankRequest] Request rankRequest
         * @property {gameMsg.ICreateRoomRequest|null} [createRoomRequest] Request createRoomRequest
         * @property {gameMsg.IJoinRoomRequest|null} [joinRoomRequest] Request joinRoomRequest
         * @property {gameMsg.ILeaveRoomRequest|null} [leaveRoomRequest] Request leaveRoomRequest
         * @property {gameMsg.IEndGameRequest|null} [endGameRequest] Request endGameRequest
         * @property {gameMsg.IStartGameRequest|null} [startGameRequest] Request startGameRequest
         * @property {gameMsg.IMatchGameRequest|null} [matchGameRequest] Request matchGameRequest
         * @property {gameMsg.IUseToolRequest|null} [useToolRequest] Request useToolRequest
         * @property {gameMsg.IBuyRequest|null} [buyRequest] Request buyRequest
         * @property {gameMsg.IPlayBlockAddRequest|null} [playBlockAddRequest] Request playBlockAddRequest
         * @property {gameMsg.IPlayBlockDeleteRequest|null} [playBlockDeleteRequest] Request playBlockDeleteRequest
         */

        /**
         * Constructs a new Request.
         * @memberof gameMsg
         * @classdesc Represents a Request.
         * @implements IRequest
         * @constructor
         * @param {gameMsg.IRequest=} [properties] Properties to set
         */
        function Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Request loginRequest.
         * @member {gameMsg.ILoginRequest|null|undefined} loginRequest
         * @memberof gameMsg.Request
         * @instance
         */
        Request.prototype.loginRequest = null;

        /**
         * Request playBeginRequest.
         * @member {gameMsg.IPlayBeginRequest|null|undefined} playBeginRequest
         * @memberof gameMsg.Request
         * @instance
         */
        Request.prototype.playBeginRequest = null;

        /**
         * Request playEndRequest.
         * @member {gameMsg.IPlayEndRequest|null|undefined} playEndRequest
         * @memberof gameMsg.Request
         * @instance
         */
        Request.prototype.playEndRequest = null;

        /**
         * Request seeAdRequest.
         * @member {gameMsg.ISeeAdRequest|null|undefined} seeAdRequest
         * @memberof gameMsg.Request
         * @instance
         */
        Request.prototype.seeAdRequest = null;

        /**
         * Request usePromptRequest.
         * @member {gameMsg.IUsePromptRequest|null|undefined} usePromptRequest
         * @memberof gameMsg.Request
         * @instance
         */
        Request.prototype.usePromptRequest = null;

        /**
         * Request rankRequest.
         * @member {gameMsg.IRankRequest|null|undefined} rankRequest
         * @memberof gameMsg.Request
         * @instance
         */
        Request.prototype.rankRequest = null;

        /**
         * Request createRoomRequest.
         * @member {gameMsg.ICreateRoomRequest|null|undefined} createRoomRequest
         * @memberof gameMsg.Request
         * @instance
         */
        Request.prototype.createRoomRequest = null;

        /**
         * Request joinRoomRequest.
         * @member {gameMsg.IJoinRoomRequest|null|undefined} joinRoomRequest
         * @memberof gameMsg.Request
         * @instance
         */
        Request.prototype.joinRoomRequest = null;

        /**
         * Request leaveRoomRequest.
         * @member {gameMsg.ILeaveRoomRequest|null|undefined} leaveRoomRequest
         * @memberof gameMsg.Request
         * @instance
         */
        Request.prototype.leaveRoomRequest = null;

        /**
         * Request endGameRequest.
         * @member {gameMsg.IEndGameRequest|null|undefined} endGameRequest
         * @memberof gameMsg.Request
         * @instance
         */
        Request.prototype.endGameRequest = null;

        /**
         * Request startGameRequest.
         * @member {gameMsg.IStartGameRequest|null|undefined} startGameRequest
         * @memberof gameMsg.Request
         * @instance
         */
        Request.prototype.startGameRequest = null;

        /**
         * Request matchGameRequest.
         * @member {gameMsg.IMatchGameRequest|null|undefined} matchGameRequest
         * @memberof gameMsg.Request
         * @instance
         */
        Request.prototype.matchGameRequest = null;

        /**
         * Request useToolRequest.
         * @member {gameMsg.IUseToolRequest|null|undefined} useToolRequest
         * @memberof gameMsg.Request
         * @instance
         */
        Request.prototype.useToolRequest = null;

        /**
         * Request buyRequest.
         * @member {gameMsg.IBuyRequest|null|undefined} buyRequest
         * @memberof gameMsg.Request
         * @instance
         */
        Request.prototype.buyRequest = null;

        /**
         * Request playBlockAddRequest.
         * @member {gameMsg.IPlayBlockAddRequest|null|undefined} playBlockAddRequest
         * @memberof gameMsg.Request
         * @instance
         */
        Request.prototype.playBlockAddRequest = null;

        /**
         * Request playBlockDeleteRequest.
         * @member {gameMsg.IPlayBlockDeleteRequest|null|undefined} playBlockDeleteRequest
         * @memberof gameMsg.Request
         * @instance
         */
        Request.prototype.playBlockDeleteRequest = null;

        /**
         * Creates a new Request instance using the specified properties.
         * @function create
         * @memberof gameMsg.Request
         * @static
         * @param {gameMsg.IRequest=} [properties] Properties to set
         * @returns {gameMsg.Request} Request instance
         */
        Request.create = function create(properties) {
            return new Request(properties);
        };

        /**
         * Encodes the specified Request message. Does not implicitly {@link gameMsg.Request.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.Request
         * @static
         * @param {gameMsg.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.loginRequest != null && message.hasOwnProperty("loginRequest"))
                $root.gameMsg.LoginRequest.encode(message.loginRequest, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.playBeginRequest != null && message.hasOwnProperty("playBeginRequest"))
                $root.gameMsg.PlayBeginRequest.encode(message.playBeginRequest, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.playEndRequest != null && message.hasOwnProperty("playEndRequest"))
                $root.gameMsg.PlayEndRequest.encode(message.playEndRequest, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.seeAdRequest != null && message.hasOwnProperty("seeAdRequest"))
                $root.gameMsg.SeeAdRequest.encode(message.seeAdRequest, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.usePromptRequest != null && message.hasOwnProperty("usePromptRequest"))
                $root.gameMsg.UsePromptRequest.encode(message.usePromptRequest, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.rankRequest != null && message.hasOwnProperty("rankRequest"))
                $root.gameMsg.RankRequest.encode(message.rankRequest, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.createRoomRequest != null && message.hasOwnProperty("createRoomRequest"))
                $root.gameMsg.CreateRoomRequest.encode(message.createRoomRequest, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.joinRoomRequest != null && message.hasOwnProperty("joinRoomRequest"))
                $root.gameMsg.JoinRoomRequest.encode(message.joinRoomRequest, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.leaveRoomRequest != null && message.hasOwnProperty("leaveRoomRequest"))
                $root.gameMsg.LeaveRoomRequest.encode(message.leaveRoomRequest, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.endGameRequest != null && message.hasOwnProperty("endGameRequest"))
                $root.gameMsg.EndGameRequest.encode(message.endGameRequest, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.startGameRequest != null && message.hasOwnProperty("startGameRequest"))
                $root.gameMsg.StartGameRequest.encode(message.startGameRequest, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.matchGameRequest != null && message.hasOwnProperty("matchGameRequest"))
                $root.gameMsg.MatchGameRequest.encode(message.matchGameRequest, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.useToolRequest != null && message.hasOwnProperty("useToolRequest"))
                $root.gameMsg.UseToolRequest.encode(message.useToolRequest, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.buyRequest != null && message.hasOwnProperty("buyRequest"))
                $root.gameMsg.BuyRequest.encode(message.buyRequest, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.playBlockAddRequest != null && message.hasOwnProperty("playBlockAddRequest"))
                $root.gameMsg.PlayBlockAddRequest.encode(message.playBlockAddRequest, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.playBlockDeleteRequest != null && message.hasOwnProperty("playBlockDeleteRequest"))
                $root.gameMsg.PlayBlockDeleteRequest.encode(message.playBlockDeleteRequest, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link gameMsg.Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.Request
         * @static
         * @param {gameMsg.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.loginRequest = $root.gameMsg.LoginRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.playBeginRequest = $root.gameMsg.PlayBeginRequest.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.playEndRequest = $root.gameMsg.PlayEndRequest.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.seeAdRequest = $root.gameMsg.SeeAdRequest.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.usePromptRequest = $root.gameMsg.UsePromptRequest.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.rankRequest = $root.gameMsg.RankRequest.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.createRoomRequest = $root.gameMsg.CreateRoomRequest.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.joinRoomRequest = $root.gameMsg.JoinRoomRequest.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.leaveRoomRequest = $root.gameMsg.LeaveRoomRequest.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.endGameRequest = $root.gameMsg.EndGameRequest.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.startGameRequest = $root.gameMsg.StartGameRequest.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.matchGameRequest = $root.gameMsg.MatchGameRequest.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.useToolRequest = $root.gameMsg.UseToolRequest.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.buyRequest = $root.gameMsg.BuyRequest.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.playBlockAddRequest = $root.gameMsg.PlayBlockAddRequest.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.playBlockDeleteRequest = $root.gameMsg.PlayBlockDeleteRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Request message.
         * @function verify
         * @memberof gameMsg.Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.loginRequest != null && message.hasOwnProperty("loginRequest")) {
                var error = $root.gameMsg.LoginRequest.verify(message.loginRequest);
                if (error)
                    return "loginRequest." + error;
            }
            if (message.playBeginRequest != null && message.hasOwnProperty("playBeginRequest")) {
                var error = $root.gameMsg.PlayBeginRequest.verify(message.playBeginRequest);
                if (error)
                    return "playBeginRequest." + error;
            }
            if (message.playEndRequest != null && message.hasOwnProperty("playEndRequest")) {
                var error = $root.gameMsg.PlayEndRequest.verify(message.playEndRequest);
                if (error)
                    return "playEndRequest." + error;
            }
            if (message.seeAdRequest != null && message.hasOwnProperty("seeAdRequest")) {
                var error = $root.gameMsg.SeeAdRequest.verify(message.seeAdRequest);
                if (error)
                    return "seeAdRequest." + error;
            }
            if (message.usePromptRequest != null && message.hasOwnProperty("usePromptRequest")) {
                var error = $root.gameMsg.UsePromptRequest.verify(message.usePromptRequest);
                if (error)
                    return "usePromptRequest." + error;
            }
            if (message.rankRequest != null && message.hasOwnProperty("rankRequest")) {
                var error = $root.gameMsg.RankRequest.verify(message.rankRequest);
                if (error)
                    return "rankRequest." + error;
            }
            if (message.createRoomRequest != null && message.hasOwnProperty("createRoomRequest")) {
                var error = $root.gameMsg.CreateRoomRequest.verify(message.createRoomRequest);
                if (error)
                    return "createRoomRequest." + error;
            }
            if (message.joinRoomRequest != null && message.hasOwnProperty("joinRoomRequest")) {
                var error = $root.gameMsg.JoinRoomRequest.verify(message.joinRoomRequest);
                if (error)
                    return "joinRoomRequest." + error;
            }
            if (message.leaveRoomRequest != null && message.hasOwnProperty("leaveRoomRequest")) {
                var error = $root.gameMsg.LeaveRoomRequest.verify(message.leaveRoomRequest);
                if (error)
                    return "leaveRoomRequest." + error;
            }
            if (message.endGameRequest != null && message.hasOwnProperty("endGameRequest")) {
                var error = $root.gameMsg.EndGameRequest.verify(message.endGameRequest);
                if (error)
                    return "endGameRequest." + error;
            }
            if (message.startGameRequest != null && message.hasOwnProperty("startGameRequest")) {
                var error = $root.gameMsg.StartGameRequest.verify(message.startGameRequest);
                if (error)
                    return "startGameRequest." + error;
            }
            if (message.matchGameRequest != null && message.hasOwnProperty("matchGameRequest")) {
                var error = $root.gameMsg.MatchGameRequest.verify(message.matchGameRequest);
                if (error)
                    return "matchGameRequest." + error;
            }
            if (message.useToolRequest != null && message.hasOwnProperty("useToolRequest")) {
                var error = $root.gameMsg.UseToolRequest.verify(message.useToolRequest);
                if (error)
                    return "useToolRequest." + error;
            }
            if (message.buyRequest != null && message.hasOwnProperty("buyRequest")) {
                var error = $root.gameMsg.BuyRequest.verify(message.buyRequest);
                if (error)
                    return "buyRequest." + error;
            }
            if (message.playBlockAddRequest != null && message.hasOwnProperty("playBlockAddRequest")) {
                var error = $root.gameMsg.PlayBlockAddRequest.verify(message.playBlockAddRequest);
                if (error)
                    return "playBlockAddRequest." + error;
            }
            if (message.playBlockDeleteRequest != null && message.hasOwnProperty("playBlockDeleteRequest")) {
                var error = $root.gameMsg.PlayBlockDeleteRequest.verify(message.playBlockDeleteRequest);
                if (error)
                    return "playBlockDeleteRequest." + error;
            }
            return null;
        };

        return Request;
    })();

    gameMsg.Response = (function() {

        /**
         * Properties of a Response.
         * @memberof gameMsg
         * @interface IResponse
         * @property {gameMsg.ErrorCode} nErrorCode Response nErrorCode
         * @property {gameMsg.ILoginResponse|null} [loginResponse] Response loginResponse
         * @property {gameMsg.IPlayBeginResponse|null} [playBeginResponse] Response playBeginResponse
         * @property {gameMsg.IPlayEndResponse|null} [playEndResponse] Response playEndResponse
         * @property {gameMsg.ISeeAdResponse|null} [seeAdResponse] Response seeAdResponse
         * @property {gameMsg.IUsePromptResponse|null} [usePromptResponse] Response usePromptResponse
         * @property {gameMsg.IRankResponse|null} [rankResponse] Response rankResponse
         * @property {gameMsg.ICreateRoomResponse|null} [createRoomResponse] Response createRoomResponse
         * @property {gameMsg.IJoinRoomResponse|null} [joinRoomResponse] Response joinRoomResponse
         * @property {gameMsg.ILeaveRoomResponse|null} [leaveRoomResponse] Response leaveRoomResponse
         * @property {gameMsg.IEndGameResponse|null} [endGameResponse] Response endGameResponse
         * @property {gameMsg.IStartGameResponse|null} [startGameResponse] Response startGameResponse
         * @property {gameMsg.IMatchGameResponse|null} [matchGameResponse] Response matchGameResponse
         * @property {gameMsg.IUseToolResponse|null} [useToolResponse] Response useToolResponse
         * @property {gameMsg.IBuyResponse|null} [buyResponse] Response buyResponse
         * @property {gameMsg.IPlayBlockAddResponse|null} [playBlockAddResponse] Response playBlockAddResponse
         * @property {gameMsg.IPlayBlockDeleteResponse|null} [playBlockDeleteResponse] Response playBlockDeleteResponse
         */

        /**
         * Constructs a new Response.
         * @memberof gameMsg
         * @classdesc Represents a Response.
         * @implements IResponse
         * @constructor
         * @param {gameMsg.IResponse=} [properties] Properties to set
         */
        function Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Response nErrorCode.
         * @member {gameMsg.ErrorCode} nErrorCode
         * @memberof gameMsg.Response
         * @instance
         */
        Response.prototype.nErrorCode = 1;

        /**
         * Response loginResponse.
         * @member {gameMsg.ILoginResponse|null|undefined} loginResponse
         * @memberof gameMsg.Response
         * @instance
         */
        Response.prototype.loginResponse = null;

        /**
         * Response playBeginResponse.
         * @member {gameMsg.IPlayBeginResponse|null|undefined} playBeginResponse
         * @memberof gameMsg.Response
         * @instance
         */
        Response.prototype.playBeginResponse = null;

        /**
         * Response playEndResponse.
         * @member {gameMsg.IPlayEndResponse|null|undefined} playEndResponse
         * @memberof gameMsg.Response
         * @instance
         */
        Response.prototype.playEndResponse = null;

        /**
         * Response seeAdResponse.
         * @member {gameMsg.ISeeAdResponse|null|undefined} seeAdResponse
         * @memberof gameMsg.Response
         * @instance
         */
        Response.prototype.seeAdResponse = null;

        /**
         * Response usePromptResponse.
         * @member {gameMsg.IUsePromptResponse|null|undefined} usePromptResponse
         * @memberof gameMsg.Response
         * @instance
         */
        Response.prototype.usePromptResponse = null;

        /**
         * Response rankResponse.
         * @member {gameMsg.IRankResponse|null|undefined} rankResponse
         * @memberof gameMsg.Response
         * @instance
         */
        Response.prototype.rankResponse = null;

        /**
         * Response createRoomResponse.
         * @member {gameMsg.ICreateRoomResponse|null|undefined} createRoomResponse
         * @memberof gameMsg.Response
         * @instance
         */
        Response.prototype.createRoomResponse = null;

        /**
         * Response joinRoomResponse.
         * @member {gameMsg.IJoinRoomResponse|null|undefined} joinRoomResponse
         * @memberof gameMsg.Response
         * @instance
         */
        Response.prototype.joinRoomResponse = null;

        /**
         * Response leaveRoomResponse.
         * @member {gameMsg.ILeaveRoomResponse|null|undefined} leaveRoomResponse
         * @memberof gameMsg.Response
         * @instance
         */
        Response.prototype.leaveRoomResponse = null;

        /**
         * Response endGameResponse.
         * @member {gameMsg.IEndGameResponse|null|undefined} endGameResponse
         * @memberof gameMsg.Response
         * @instance
         */
        Response.prototype.endGameResponse = null;

        /**
         * Response startGameResponse.
         * @member {gameMsg.IStartGameResponse|null|undefined} startGameResponse
         * @memberof gameMsg.Response
         * @instance
         */
        Response.prototype.startGameResponse = null;

        /**
         * Response matchGameResponse.
         * @member {gameMsg.IMatchGameResponse|null|undefined} matchGameResponse
         * @memberof gameMsg.Response
         * @instance
         */
        Response.prototype.matchGameResponse = null;

        /**
         * Response useToolResponse.
         * @member {gameMsg.IUseToolResponse|null|undefined} useToolResponse
         * @memberof gameMsg.Response
         * @instance
         */
        Response.prototype.useToolResponse = null;

        /**
         * Response buyResponse.
         * @member {gameMsg.IBuyResponse|null|undefined} buyResponse
         * @memberof gameMsg.Response
         * @instance
         */
        Response.prototype.buyResponse = null;

        /**
         * Response playBlockAddResponse.
         * @member {gameMsg.IPlayBlockAddResponse|null|undefined} playBlockAddResponse
         * @memberof gameMsg.Response
         * @instance
         */
        Response.prototype.playBlockAddResponse = null;

        /**
         * Response playBlockDeleteResponse.
         * @member {gameMsg.IPlayBlockDeleteResponse|null|undefined} playBlockDeleteResponse
         * @memberof gameMsg.Response
         * @instance
         */
        Response.prototype.playBlockDeleteResponse = null;

        /**
         * Creates a new Response instance using the specified properties.
         * @function create
         * @memberof gameMsg.Response
         * @static
         * @param {gameMsg.IResponse=} [properties] Properties to set
         * @returns {gameMsg.Response} Response instance
         */
        Response.create = function create(properties) {
            return new Response(properties);
        };

        /**
         * Encodes the specified Response message. Does not implicitly {@link gameMsg.Response.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.Response
         * @static
         * @param {gameMsg.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nErrorCode);
            if (message.loginResponse != null && message.hasOwnProperty("loginResponse"))
                $root.gameMsg.LoginResponse.encode(message.loginResponse, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.playBeginResponse != null && message.hasOwnProperty("playBeginResponse"))
                $root.gameMsg.PlayBeginResponse.encode(message.playBeginResponse, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.playEndResponse != null && message.hasOwnProperty("playEndResponse"))
                $root.gameMsg.PlayEndResponse.encode(message.playEndResponse, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.seeAdResponse != null && message.hasOwnProperty("seeAdResponse"))
                $root.gameMsg.SeeAdResponse.encode(message.seeAdResponse, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.usePromptResponse != null && message.hasOwnProperty("usePromptResponse"))
                $root.gameMsg.UsePromptResponse.encode(message.usePromptResponse, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.rankResponse != null && message.hasOwnProperty("rankResponse"))
                $root.gameMsg.RankResponse.encode(message.rankResponse, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.createRoomResponse != null && message.hasOwnProperty("createRoomResponse"))
                $root.gameMsg.CreateRoomResponse.encode(message.createRoomResponse, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.joinRoomResponse != null && message.hasOwnProperty("joinRoomResponse"))
                $root.gameMsg.JoinRoomResponse.encode(message.joinRoomResponse, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.leaveRoomResponse != null && message.hasOwnProperty("leaveRoomResponse"))
                $root.gameMsg.LeaveRoomResponse.encode(message.leaveRoomResponse, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.endGameResponse != null && message.hasOwnProperty("endGameResponse"))
                $root.gameMsg.EndGameResponse.encode(message.endGameResponse, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.startGameResponse != null && message.hasOwnProperty("startGameResponse"))
                $root.gameMsg.StartGameResponse.encode(message.startGameResponse, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.matchGameResponse != null && message.hasOwnProperty("matchGameResponse"))
                $root.gameMsg.MatchGameResponse.encode(message.matchGameResponse, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.useToolResponse != null && message.hasOwnProperty("useToolResponse"))
                $root.gameMsg.UseToolResponse.encode(message.useToolResponse, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.buyResponse != null && message.hasOwnProperty("buyResponse"))
                $root.gameMsg.BuyResponse.encode(message.buyResponse, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.playBlockAddResponse != null && message.hasOwnProperty("playBlockAddResponse"))
                $root.gameMsg.PlayBlockAddResponse.encode(message.playBlockAddResponse, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.playBlockDeleteResponse != null && message.hasOwnProperty("playBlockDeleteResponse"))
                $root.gameMsg.PlayBlockDeleteResponse.encode(message.playBlockDeleteResponse, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link gameMsg.Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.Response
         * @static
         * @param {gameMsg.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nErrorCode = reader.int32();
                    break;
                case 2:
                    message.loginResponse = $root.gameMsg.LoginResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.playBeginResponse = $root.gameMsg.PlayBeginResponse.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.playEndResponse = $root.gameMsg.PlayEndResponse.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.seeAdResponse = $root.gameMsg.SeeAdResponse.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.usePromptResponse = $root.gameMsg.UsePromptResponse.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.rankResponse = $root.gameMsg.RankResponse.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.createRoomResponse = $root.gameMsg.CreateRoomResponse.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.joinRoomResponse = $root.gameMsg.JoinRoomResponse.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.leaveRoomResponse = $root.gameMsg.LeaveRoomResponse.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.endGameResponse = $root.gameMsg.EndGameResponse.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.startGameResponse = $root.gameMsg.StartGameResponse.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.matchGameResponse = $root.gameMsg.MatchGameResponse.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.useToolResponse = $root.gameMsg.UseToolResponse.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.buyResponse = $root.gameMsg.BuyResponse.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.playBlockAddResponse = $root.gameMsg.PlayBlockAddResponse.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.playBlockDeleteResponse = $root.gameMsg.PlayBlockDeleteResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("nErrorCode"))
                throw $util.ProtocolError("missing required 'nErrorCode'", { instance: message });
            return message;
        };

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Response message.
         * @function verify
         * @memberof gameMsg.Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.nErrorCode) {
            default:
                return "nErrorCode: enum value expected";
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                break;
            }
            if (message.loginResponse != null && message.hasOwnProperty("loginResponse")) {
                var error = $root.gameMsg.LoginResponse.verify(message.loginResponse);
                if (error)
                    return "loginResponse." + error;
            }
            if (message.playBeginResponse != null && message.hasOwnProperty("playBeginResponse")) {
                var error = $root.gameMsg.PlayBeginResponse.verify(message.playBeginResponse);
                if (error)
                    return "playBeginResponse." + error;
            }
            if (message.playEndResponse != null && message.hasOwnProperty("playEndResponse")) {
                var error = $root.gameMsg.PlayEndResponse.verify(message.playEndResponse);
                if (error)
                    return "playEndResponse." + error;
            }
            if (message.seeAdResponse != null && message.hasOwnProperty("seeAdResponse")) {
                var error = $root.gameMsg.SeeAdResponse.verify(message.seeAdResponse);
                if (error)
                    return "seeAdResponse." + error;
            }
            if (message.usePromptResponse != null && message.hasOwnProperty("usePromptResponse")) {
                var error = $root.gameMsg.UsePromptResponse.verify(message.usePromptResponse);
                if (error)
                    return "usePromptResponse." + error;
            }
            if (message.rankResponse != null && message.hasOwnProperty("rankResponse")) {
                var error = $root.gameMsg.RankResponse.verify(message.rankResponse);
                if (error)
                    return "rankResponse." + error;
            }
            if (message.createRoomResponse != null && message.hasOwnProperty("createRoomResponse")) {
                var error = $root.gameMsg.CreateRoomResponse.verify(message.createRoomResponse);
                if (error)
                    return "createRoomResponse." + error;
            }
            if (message.joinRoomResponse != null && message.hasOwnProperty("joinRoomResponse")) {
                var error = $root.gameMsg.JoinRoomResponse.verify(message.joinRoomResponse);
                if (error)
                    return "joinRoomResponse." + error;
            }
            if (message.leaveRoomResponse != null && message.hasOwnProperty("leaveRoomResponse")) {
                var error = $root.gameMsg.LeaveRoomResponse.verify(message.leaveRoomResponse);
                if (error)
                    return "leaveRoomResponse." + error;
            }
            if (message.endGameResponse != null && message.hasOwnProperty("endGameResponse")) {
                var error = $root.gameMsg.EndGameResponse.verify(message.endGameResponse);
                if (error)
                    return "endGameResponse." + error;
            }
            if (message.startGameResponse != null && message.hasOwnProperty("startGameResponse")) {
                var error = $root.gameMsg.StartGameResponse.verify(message.startGameResponse);
                if (error)
                    return "startGameResponse." + error;
            }
            if (message.matchGameResponse != null && message.hasOwnProperty("matchGameResponse")) {
                var error = $root.gameMsg.MatchGameResponse.verify(message.matchGameResponse);
                if (error)
                    return "matchGameResponse." + error;
            }
            if (message.useToolResponse != null && message.hasOwnProperty("useToolResponse")) {
                var error = $root.gameMsg.UseToolResponse.verify(message.useToolResponse);
                if (error)
                    return "useToolResponse." + error;
            }
            if (message.buyResponse != null && message.hasOwnProperty("buyResponse")) {
                var error = $root.gameMsg.BuyResponse.verify(message.buyResponse);
                if (error)
                    return "buyResponse." + error;
            }
            if (message.playBlockAddResponse != null && message.hasOwnProperty("playBlockAddResponse")) {
                var error = $root.gameMsg.PlayBlockAddResponse.verify(message.playBlockAddResponse);
                if (error)
                    return "playBlockAddResponse." + error;
            }
            if (message.playBlockDeleteResponse != null && message.hasOwnProperty("playBlockDeleteResponse")) {
                var error = $root.gameMsg.PlayBlockDeleteResponse.verify(message.playBlockDeleteResponse);
                if (error)
                    return "playBlockDeleteResponse." + error;
            }
            return null;
        };

        return Response;
    })();

    gameMsg.Notify = (function() {

        /**
         * Properties of a Notify.
         * @memberof gameMsg
         * @interface INotify
         * @property {gameMsg.IJoinRoomNotify|null} [joinRoomNotify] Notify joinRoomNotify
         * @property {gameMsg.ILeaveRoomNotify|null} [leaveRoomNotify] Notify leaveRoomNotify
         * @property {gameMsg.IStartGameNotify|null} [startGameNotify] Notify startGameNotify
         * @property {gameMsg.IEndGameNotify|null} [endGameNotify] Notify endGameNotify
         * @property {gameMsg.IGameTimeTickNotify|null} [gameTimeTickNotify] Notify gameTimeTickNotify
         * @property {gameMsg.IUseToolNotify|null} [useToolNotify] Notify useToolNotify
         * @property {gameMsg.IOverTimeNotify|null} [overTimeNotify] Notify overTimeNotify
         * @property {gameMsg.IPlayBlockNotify|null} [playBlockNotify] Notify playBlockNotify
         */

        /**
         * Constructs a new Notify.
         * @memberof gameMsg
         * @classdesc Represents a Notify.
         * @implements INotify
         * @constructor
         * @param {gameMsg.INotify=} [properties] Properties to set
         */
        function Notify(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Notify joinRoomNotify.
         * @member {gameMsg.IJoinRoomNotify|null|undefined} joinRoomNotify
         * @memberof gameMsg.Notify
         * @instance
         */
        Notify.prototype.joinRoomNotify = null;

        /**
         * Notify leaveRoomNotify.
         * @member {gameMsg.ILeaveRoomNotify|null|undefined} leaveRoomNotify
         * @memberof gameMsg.Notify
         * @instance
         */
        Notify.prototype.leaveRoomNotify = null;

        /**
         * Notify startGameNotify.
         * @member {gameMsg.IStartGameNotify|null|undefined} startGameNotify
         * @memberof gameMsg.Notify
         * @instance
         */
        Notify.prototype.startGameNotify = null;

        /**
         * Notify endGameNotify.
         * @member {gameMsg.IEndGameNotify|null|undefined} endGameNotify
         * @memberof gameMsg.Notify
         * @instance
         */
        Notify.prototype.endGameNotify = null;

        /**
         * Notify gameTimeTickNotify.
         * @member {gameMsg.IGameTimeTickNotify|null|undefined} gameTimeTickNotify
         * @memberof gameMsg.Notify
         * @instance
         */
        Notify.prototype.gameTimeTickNotify = null;

        /**
         * Notify useToolNotify.
         * @member {gameMsg.IUseToolNotify|null|undefined} useToolNotify
         * @memberof gameMsg.Notify
         * @instance
         */
        Notify.prototype.useToolNotify = null;

        /**
         * Notify overTimeNotify.
         * @member {gameMsg.IOverTimeNotify|null|undefined} overTimeNotify
         * @memberof gameMsg.Notify
         * @instance
         */
        Notify.prototype.overTimeNotify = null;

        /**
         * Notify playBlockNotify.
         * @member {gameMsg.IPlayBlockNotify|null|undefined} playBlockNotify
         * @memberof gameMsg.Notify
         * @instance
         */
        Notify.prototype.playBlockNotify = null;

        /**
         * Creates a new Notify instance using the specified properties.
         * @function create
         * @memberof gameMsg.Notify
         * @static
         * @param {gameMsg.INotify=} [properties] Properties to set
         * @returns {gameMsg.Notify} Notify instance
         */
        Notify.create = function create(properties) {
            return new Notify(properties);
        };

        /**
         * Encodes the specified Notify message. Does not implicitly {@link gameMsg.Notify.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.Notify
         * @static
         * @param {gameMsg.INotify} message Notify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Notify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.joinRoomNotify != null && message.hasOwnProperty("joinRoomNotify"))
                $root.gameMsg.JoinRoomNotify.encode(message.joinRoomNotify, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.leaveRoomNotify != null && message.hasOwnProperty("leaveRoomNotify"))
                $root.gameMsg.LeaveRoomNotify.encode(message.leaveRoomNotify, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.startGameNotify != null && message.hasOwnProperty("startGameNotify"))
                $root.gameMsg.StartGameNotify.encode(message.startGameNotify, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.endGameNotify != null && message.hasOwnProperty("endGameNotify"))
                $root.gameMsg.EndGameNotify.encode(message.endGameNotify, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.gameTimeTickNotify != null && message.hasOwnProperty("gameTimeTickNotify"))
                $root.gameMsg.GameTimeTickNotify.encode(message.gameTimeTickNotify, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.useToolNotify != null && message.hasOwnProperty("useToolNotify"))
                $root.gameMsg.UseToolNotify.encode(message.useToolNotify, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.overTimeNotify != null && message.hasOwnProperty("overTimeNotify"))
                $root.gameMsg.OverTimeNotify.encode(message.overTimeNotify, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.playBlockNotify != null && message.hasOwnProperty("playBlockNotify"))
                $root.gameMsg.PlayBlockNotify.encode(message.playBlockNotify, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Notify message, length delimited. Does not implicitly {@link gameMsg.Notify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.Notify
         * @static
         * @param {gameMsg.INotify} message Notify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Notify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Notify message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.Notify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.Notify} Notify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Notify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.Notify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.joinRoomNotify = $root.gameMsg.JoinRoomNotify.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.leaveRoomNotify = $root.gameMsg.LeaveRoomNotify.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.startGameNotify = $root.gameMsg.StartGameNotify.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.endGameNotify = $root.gameMsg.EndGameNotify.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.gameTimeTickNotify = $root.gameMsg.GameTimeTickNotify.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.useToolNotify = $root.gameMsg.UseToolNotify.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.overTimeNotify = $root.gameMsg.OverTimeNotify.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.playBlockNotify = $root.gameMsg.PlayBlockNotify.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Notify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.Notify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.Notify} Notify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Notify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Notify message.
         * @function verify
         * @memberof gameMsg.Notify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Notify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.joinRoomNotify != null && message.hasOwnProperty("joinRoomNotify")) {
                var error = $root.gameMsg.JoinRoomNotify.verify(message.joinRoomNotify);
                if (error)
                    return "joinRoomNotify." + error;
            }
            if (message.leaveRoomNotify != null && message.hasOwnProperty("leaveRoomNotify")) {
                var error = $root.gameMsg.LeaveRoomNotify.verify(message.leaveRoomNotify);
                if (error)
                    return "leaveRoomNotify." + error;
            }
            if (message.startGameNotify != null && message.hasOwnProperty("startGameNotify")) {
                var error = $root.gameMsg.StartGameNotify.verify(message.startGameNotify);
                if (error)
                    return "startGameNotify." + error;
            }
            if (message.endGameNotify != null && message.hasOwnProperty("endGameNotify")) {
                var error = $root.gameMsg.EndGameNotify.verify(message.endGameNotify);
                if (error)
                    return "endGameNotify." + error;
            }
            if (message.gameTimeTickNotify != null && message.hasOwnProperty("gameTimeTickNotify")) {
                var error = $root.gameMsg.GameTimeTickNotify.verify(message.gameTimeTickNotify);
                if (error)
                    return "gameTimeTickNotify." + error;
            }
            if (message.useToolNotify != null && message.hasOwnProperty("useToolNotify")) {
                var error = $root.gameMsg.UseToolNotify.verify(message.useToolNotify);
                if (error)
                    return "useToolNotify." + error;
            }
            if (message.overTimeNotify != null && message.hasOwnProperty("overTimeNotify")) {
                var error = $root.gameMsg.OverTimeNotify.verify(message.overTimeNotify);
                if (error)
                    return "overTimeNotify." + error;
            }
            if (message.playBlockNotify != null && message.hasOwnProperty("playBlockNotify")) {
                var error = $root.gameMsg.PlayBlockNotify.verify(message.playBlockNotify);
                if (error)
                    return "playBlockNotify." + error;
            }
            return null;
        };

        return Notify;
    })();

    gameMsg.Msg = (function() {

        /**
         * Properties of a Msg.
         * @memberof gameMsg
         * @interface IMsg
         * @property {gameMsg.EnumMsg} type Msg type
         * @property {gameMsg.IRequest|null} [request] Msg request
         * @property {gameMsg.IResponse|null} [response] Msg response
         * @property {gameMsg.INotify|null} [notify] Msg notify
         */

        /**
         * Constructs a new Msg.
         * @memberof gameMsg
         * @classdesc Represents a Msg.
         * @implements IMsg
         * @constructor
         * @param {gameMsg.IMsg=} [properties] Properties to set
         */
        function Msg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Msg type.
         * @member {gameMsg.EnumMsg} type
         * @memberof gameMsg.Msg
         * @instance
         */
        Msg.prototype.type = 1;

        /**
         * Msg request.
         * @member {gameMsg.IRequest|null|undefined} request
         * @memberof gameMsg.Msg
         * @instance
         */
        Msg.prototype.request = null;

        /**
         * Msg response.
         * @member {gameMsg.IResponse|null|undefined} response
         * @memberof gameMsg.Msg
         * @instance
         */
        Msg.prototype.response = null;

        /**
         * Msg notify.
         * @member {gameMsg.INotify|null|undefined} notify
         * @memberof gameMsg.Msg
         * @instance
         */
        Msg.prototype.notify = null;

        /**
         * Creates a new Msg instance using the specified properties.
         * @function create
         * @memberof gameMsg.Msg
         * @static
         * @param {gameMsg.IMsg=} [properties] Properties to set
         * @returns {gameMsg.Msg} Msg instance
         */
        Msg.create = function create(properties) {
            return new Msg(properties);
        };

        /**
         * Encodes the specified Msg message. Does not implicitly {@link gameMsg.Msg.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.Msg
         * @static
         * @param {gameMsg.IMsg} message Msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.request != null && message.hasOwnProperty("request"))
                $root.gameMsg.Request.encode(message.request, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.response != null && message.hasOwnProperty("response"))
                $root.gameMsg.Response.encode(message.response, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.notify != null && message.hasOwnProperty("notify"))
                $root.gameMsg.Notify.encode(message.notify, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Msg message, length delimited. Does not implicitly {@link gameMsg.Msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.Msg
         * @static
         * @param {gameMsg.IMsg} message Msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Msg message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.Msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.Msg} Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.Msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.request = $root.gameMsg.Request.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.response = $root.gameMsg.Response.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.notify = $root.gameMsg.Notify.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            return message;
        };

        /**
         * Decodes a Msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.Msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.Msg} Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Msg message.
         * @function verify
         * @memberof gameMsg.Msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
            case 25:
            case 26:
            case 27:
            case 28:
            case 29:
            case 30:
            case 31:
            case 32:
            case 33:
            case 34:
            case 35:
            case 36:
            case 37:
            case 38:
            case 39:
            case 40:
                break;
            }
            if (message.request != null && message.hasOwnProperty("request")) {
                var error = $root.gameMsg.Request.verify(message.request);
                if (error)
                    return "request." + error;
            }
            if (message.response != null && message.hasOwnProperty("response")) {
                var error = $root.gameMsg.Response.verify(message.response);
                if (error)
                    return "response." + error;
            }
            if (message.notify != null && message.hasOwnProperty("notify")) {
                var error = $root.gameMsg.Notify.verify(message.notify);
                if (error)
                    return "notify." + error;
            }
            return null;
        };

        return Msg;
    })();

    gameMsg.PlayBeginRequest = (function() {

        /**
         * Properties of a PlayBeginRequest.
         * @memberof gameMsg
         * @interface IPlayBeginRequest
         * @property {string} sID PlayBeginRequest sID
         * @property {number} gateID PlayBeginRequest gateID
         */

        /**
         * Constructs a new PlayBeginRequest.
         * @memberof gameMsg
         * @classdesc Represents a PlayBeginRequest.
         * @implements IPlayBeginRequest
         * @constructor
         * @param {gameMsg.IPlayBeginRequest=} [properties] Properties to set
         */
        function PlayBeginRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayBeginRequest sID.
         * @member {string} sID
         * @memberof gameMsg.PlayBeginRequest
         * @instance
         */
        PlayBeginRequest.prototype.sID = "";

        /**
         * PlayBeginRequest gateID.
         * @member {number} gateID
         * @memberof gameMsg.PlayBeginRequest
         * @instance
         */
        PlayBeginRequest.prototype.gateID = 0;

        /**
         * Creates a new PlayBeginRequest instance using the specified properties.
         * @function create
         * @memberof gameMsg.PlayBeginRequest
         * @static
         * @param {gameMsg.IPlayBeginRequest=} [properties] Properties to set
         * @returns {gameMsg.PlayBeginRequest} PlayBeginRequest instance
         */
        PlayBeginRequest.create = function create(properties) {
            return new PlayBeginRequest(properties);
        };

        /**
         * Encodes the specified PlayBeginRequest message. Does not implicitly {@link gameMsg.PlayBeginRequest.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.PlayBeginRequest
         * @static
         * @param {gameMsg.IPlayBeginRequest} message PlayBeginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayBeginRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.gateID);
            return writer;
        };

        /**
         * Encodes the specified PlayBeginRequest message, length delimited. Does not implicitly {@link gameMsg.PlayBeginRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.PlayBeginRequest
         * @static
         * @param {gameMsg.IPlayBeginRequest} message PlayBeginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayBeginRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayBeginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.PlayBeginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.PlayBeginRequest} PlayBeginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayBeginRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.PlayBeginRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sID = reader.string();
                    break;
                case 2:
                    message.gateID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sID"))
                throw $util.ProtocolError("missing required 'sID'", { instance: message });
            if (!message.hasOwnProperty("gateID"))
                throw $util.ProtocolError("missing required 'gateID'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayBeginRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.PlayBeginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.PlayBeginRequest} PlayBeginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayBeginRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayBeginRequest message.
         * @function verify
         * @memberof gameMsg.PlayBeginRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayBeginRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.sID))
                return "sID: string expected";
            if (!$util.isInteger(message.gateID))
                return "gateID: integer expected";
            return null;
        };

        return PlayBeginRequest;
    })();

    gameMsg.PlayBeginResponse = (function() {

        /**
         * Properties of a PlayBeginResponse.
         * @memberof gameMsg
         * @interface IPlayBeginResponse
         * @property {number} gateId PlayBeginResponse gateId
         * @property {number|null} [nTopStar] PlayBeginResponse nTopStar
         * @property {number|null} [nPrompt] PlayBeginResponse nPrompt
         */

        /**
         * Constructs a new PlayBeginResponse.
         * @memberof gameMsg
         * @classdesc Represents a PlayBeginResponse.
         * @implements IPlayBeginResponse
         * @constructor
         * @param {gameMsg.IPlayBeginResponse=} [properties] Properties to set
         */
        function PlayBeginResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayBeginResponse gateId.
         * @member {number} gateId
         * @memberof gameMsg.PlayBeginResponse
         * @instance
         */
        PlayBeginResponse.prototype.gateId = 0;

        /**
         * PlayBeginResponse nTopStar.
         * @member {number} nTopStar
         * @memberof gameMsg.PlayBeginResponse
         * @instance
         */
        PlayBeginResponse.prototype.nTopStar = 0;

        /**
         * PlayBeginResponse nPrompt.
         * @member {number} nPrompt
         * @memberof gameMsg.PlayBeginResponse
         * @instance
         */
        PlayBeginResponse.prototype.nPrompt = 0;

        /**
         * Creates a new PlayBeginResponse instance using the specified properties.
         * @function create
         * @memberof gameMsg.PlayBeginResponse
         * @static
         * @param {gameMsg.IPlayBeginResponse=} [properties] Properties to set
         * @returns {gameMsg.PlayBeginResponse} PlayBeginResponse instance
         */
        PlayBeginResponse.create = function create(properties) {
            return new PlayBeginResponse(properties);
        };

        /**
         * Encodes the specified PlayBeginResponse message. Does not implicitly {@link gameMsg.PlayBeginResponse.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.PlayBeginResponse
         * @static
         * @param {gameMsg.IPlayBeginResponse} message PlayBeginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayBeginResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gateId);
            if (message.nTopStar != null && message.hasOwnProperty("nTopStar"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nTopStar);
            if (message.nPrompt != null && message.hasOwnProperty("nPrompt"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nPrompt);
            return writer;
        };

        /**
         * Encodes the specified PlayBeginResponse message, length delimited. Does not implicitly {@link gameMsg.PlayBeginResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.PlayBeginResponse
         * @static
         * @param {gameMsg.IPlayBeginResponse} message PlayBeginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayBeginResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayBeginResponse message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.PlayBeginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.PlayBeginResponse} PlayBeginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayBeginResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.PlayBeginResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gateId = reader.int32();
                    break;
                case 2:
                    message.nTopStar = reader.int32();
                    break;
                case 3:
                    message.nPrompt = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("gateId"))
                throw $util.ProtocolError("missing required 'gateId'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayBeginResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.PlayBeginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.PlayBeginResponse} PlayBeginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayBeginResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayBeginResponse message.
         * @function verify
         * @memberof gameMsg.PlayBeginResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayBeginResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.gateId))
                return "gateId: integer expected";
            if (message.nTopStar != null && message.hasOwnProperty("nTopStar"))
                if (!$util.isInteger(message.nTopStar))
                    return "nTopStar: integer expected";
            if (message.nPrompt != null && message.hasOwnProperty("nPrompt"))
                if (!$util.isInteger(message.nPrompt))
                    return "nPrompt: integer expected";
            return null;
        };

        return PlayBeginResponse;
    })();

    gameMsg.PlayEndRequest = (function() {

        /**
         * Properties of a PlayEndRequest.
         * @memberof gameMsg
         * @interface IPlayEndRequest
         * @property {string} sID PlayEndRequest sID
         * @property {number} gateID PlayEndRequest gateID
         */

        /**
         * Constructs a new PlayEndRequest.
         * @memberof gameMsg
         * @classdesc Represents a PlayEndRequest.
         * @implements IPlayEndRequest
         * @constructor
         * @param {gameMsg.IPlayEndRequest=} [properties] Properties to set
         */
        function PlayEndRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayEndRequest sID.
         * @member {string} sID
         * @memberof gameMsg.PlayEndRequest
         * @instance
         */
        PlayEndRequest.prototype.sID = "";

        /**
         * PlayEndRequest gateID.
         * @member {number} gateID
         * @memberof gameMsg.PlayEndRequest
         * @instance
         */
        PlayEndRequest.prototype.gateID = 0;

        /**
         * Creates a new PlayEndRequest instance using the specified properties.
         * @function create
         * @memberof gameMsg.PlayEndRequest
         * @static
         * @param {gameMsg.IPlayEndRequest=} [properties] Properties to set
         * @returns {gameMsg.PlayEndRequest} PlayEndRequest instance
         */
        PlayEndRequest.create = function create(properties) {
            return new PlayEndRequest(properties);
        };

        /**
         * Encodes the specified PlayEndRequest message. Does not implicitly {@link gameMsg.PlayEndRequest.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.PlayEndRequest
         * @static
         * @param {gameMsg.IPlayEndRequest} message PlayEndRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayEndRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.gateID);
            return writer;
        };

        /**
         * Encodes the specified PlayEndRequest message, length delimited. Does not implicitly {@link gameMsg.PlayEndRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.PlayEndRequest
         * @static
         * @param {gameMsg.IPlayEndRequest} message PlayEndRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayEndRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayEndRequest message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.PlayEndRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.PlayEndRequest} PlayEndRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayEndRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.PlayEndRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sID = reader.string();
                    break;
                case 2:
                    message.gateID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sID"))
                throw $util.ProtocolError("missing required 'sID'", { instance: message });
            if (!message.hasOwnProperty("gateID"))
                throw $util.ProtocolError("missing required 'gateID'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayEndRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.PlayEndRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.PlayEndRequest} PlayEndRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayEndRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayEndRequest message.
         * @function verify
         * @memberof gameMsg.PlayEndRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayEndRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.sID))
                return "sID: string expected";
            if (!$util.isInteger(message.gateID))
                return "gateID: integer expected";
            return null;
        };

        return PlayEndRequest;
    })();

    gameMsg.PlayEndResponse = (function() {

        /**
         * Properties of a PlayEndResponse.
         * @memberof gameMsg
         * @interface IPlayEndResponse
         * @property {number} gateID PlayEndResponse gateID
         * @property {number|null} [nTopStar] PlayEndResponse nTopStar
         * @property {number|null} [nTotalStar] PlayEndResponse nTotalStar
         */

        /**
         * Constructs a new PlayEndResponse.
         * @memberof gameMsg
         * @classdesc Represents a PlayEndResponse.
         * @implements IPlayEndResponse
         * @constructor
         * @param {gameMsg.IPlayEndResponse=} [properties] Properties to set
         */
        function PlayEndResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayEndResponse gateID.
         * @member {number} gateID
         * @memberof gameMsg.PlayEndResponse
         * @instance
         */
        PlayEndResponse.prototype.gateID = 0;

        /**
         * PlayEndResponse nTopStar.
         * @member {number} nTopStar
         * @memberof gameMsg.PlayEndResponse
         * @instance
         */
        PlayEndResponse.prototype.nTopStar = 0;

        /**
         * PlayEndResponse nTotalStar.
         * @member {number} nTotalStar
         * @memberof gameMsg.PlayEndResponse
         * @instance
         */
        PlayEndResponse.prototype.nTotalStar = 0;

        /**
         * Creates a new PlayEndResponse instance using the specified properties.
         * @function create
         * @memberof gameMsg.PlayEndResponse
         * @static
         * @param {gameMsg.IPlayEndResponse=} [properties] Properties to set
         * @returns {gameMsg.PlayEndResponse} PlayEndResponse instance
         */
        PlayEndResponse.create = function create(properties) {
            return new PlayEndResponse(properties);
        };

        /**
         * Encodes the specified PlayEndResponse message. Does not implicitly {@link gameMsg.PlayEndResponse.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.PlayEndResponse
         * @static
         * @param {gameMsg.IPlayEndResponse} message PlayEndResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayEndResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gateID);
            if (message.nTopStar != null && message.hasOwnProperty("nTopStar"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nTopStar);
            if (message.nTotalStar != null && message.hasOwnProperty("nTotalStar"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nTotalStar);
            return writer;
        };

        /**
         * Encodes the specified PlayEndResponse message, length delimited. Does not implicitly {@link gameMsg.PlayEndResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.PlayEndResponse
         * @static
         * @param {gameMsg.IPlayEndResponse} message PlayEndResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayEndResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayEndResponse message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.PlayEndResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.PlayEndResponse} PlayEndResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayEndResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.PlayEndResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gateID = reader.int32();
                    break;
                case 2:
                    message.nTopStar = reader.int32();
                    break;
                case 3:
                    message.nTotalStar = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("gateID"))
                throw $util.ProtocolError("missing required 'gateID'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayEndResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.PlayEndResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.PlayEndResponse} PlayEndResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayEndResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayEndResponse message.
         * @function verify
         * @memberof gameMsg.PlayEndResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayEndResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.gateID))
                return "gateID: integer expected";
            if (message.nTopStar != null && message.hasOwnProperty("nTopStar"))
                if (!$util.isInteger(message.nTopStar))
                    return "nTopStar: integer expected";
            if (message.nTotalStar != null && message.hasOwnProperty("nTotalStar"))
                if (!$util.isInteger(message.nTotalStar))
                    return "nTotalStar: integer expected";
            return null;
        };

        return PlayEndResponse;
    })();

    gameMsg.SeeAdRequest = (function() {

        /**
         * Properties of a SeeAdRequest.
         * @memberof gameMsg
         * @interface ISeeAdRequest
         * @property {string} sID SeeAdRequest sID
         * @property {number} adID SeeAdRequest adID
         */

        /**
         * Constructs a new SeeAdRequest.
         * @memberof gameMsg
         * @classdesc Represents a SeeAdRequest.
         * @implements ISeeAdRequest
         * @constructor
         * @param {gameMsg.ISeeAdRequest=} [properties] Properties to set
         */
        function SeeAdRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SeeAdRequest sID.
         * @member {string} sID
         * @memberof gameMsg.SeeAdRequest
         * @instance
         */
        SeeAdRequest.prototype.sID = "";

        /**
         * SeeAdRequest adID.
         * @member {number} adID
         * @memberof gameMsg.SeeAdRequest
         * @instance
         */
        SeeAdRequest.prototype.adID = 0;

        /**
         * Creates a new SeeAdRequest instance using the specified properties.
         * @function create
         * @memberof gameMsg.SeeAdRequest
         * @static
         * @param {gameMsg.ISeeAdRequest=} [properties] Properties to set
         * @returns {gameMsg.SeeAdRequest} SeeAdRequest instance
         */
        SeeAdRequest.create = function create(properties) {
            return new SeeAdRequest(properties);
        };

        /**
         * Encodes the specified SeeAdRequest message. Does not implicitly {@link gameMsg.SeeAdRequest.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.SeeAdRequest
         * @static
         * @param {gameMsg.ISeeAdRequest} message SeeAdRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SeeAdRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.adID);
            return writer;
        };

        /**
         * Encodes the specified SeeAdRequest message, length delimited. Does not implicitly {@link gameMsg.SeeAdRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.SeeAdRequest
         * @static
         * @param {gameMsg.ISeeAdRequest} message SeeAdRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SeeAdRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SeeAdRequest message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.SeeAdRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.SeeAdRequest} SeeAdRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SeeAdRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.SeeAdRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sID = reader.string();
                    break;
                case 2:
                    message.adID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sID"))
                throw $util.ProtocolError("missing required 'sID'", { instance: message });
            if (!message.hasOwnProperty("adID"))
                throw $util.ProtocolError("missing required 'adID'", { instance: message });
            return message;
        };

        /**
         * Decodes a SeeAdRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.SeeAdRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.SeeAdRequest} SeeAdRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SeeAdRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SeeAdRequest message.
         * @function verify
         * @memberof gameMsg.SeeAdRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SeeAdRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.sID))
                return "sID: string expected";
            if (!$util.isInteger(message.adID))
                return "adID: integer expected";
            return null;
        };

        return SeeAdRequest;
    })();

    gameMsg.SeeAdResponse = (function() {

        /**
         * Properties of a SeeAdResponse.
         * @memberof gameMsg
         * @interface ISeeAdResponse
         * @property {number|null} [nPrompt] SeeAdResponse nPrompt
         */

        /**
         * Constructs a new SeeAdResponse.
         * @memberof gameMsg
         * @classdesc Represents a SeeAdResponse.
         * @implements ISeeAdResponse
         * @constructor
         * @param {gameMsg.ISeeAdResponse=} [properties] Properties to set
         */
        function SeeAdResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SeeAdResponse nPrompt.
         * @member {number} nPrompt
         * @memberof gameMsg.SeeAdResponse
         * @instance
         */
        SeeAdResponse.prototype.nPrompt = 0;

        /**
         * Creates a new SeeAdResponse instance using the specified properties.
         * @function create
         * @memberof gameMsg.SeeAdResponse
         * @static
         * @param {gameMsg.ISeeAdResponse=} [properties] Properties to set
         * @returns {gameMsg.SeeAdResponse} SeeAdResponse instance
         */
        SeeAdResponse.create = function create(properties) {
            return new SeeAdResponse(properties);
        };

        /**
         * Encodes the specified SeeAdResponse message. Does not implicitly {@link gameMsg.SeeAdResponse.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.SeeAdResponse
         * @static
         * @param {gameMsg.ISeeAdResponse} message SeeAdResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SeeAdResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nPrompt != null && message.hasOwnProperty("nPrompt"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nPrompt);
            return writer;
        };

        /**
         * Encodes the specified SeeAdResponse message, length delimited. Does not implicitly {@link gameMsg.SeeAdResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.SeeAdResponse
         * @static
         * @param {gameMsg.ISeeAdResponse} message SeeAdResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SeeAdResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SeeAdResponse message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.SeeAdResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.SeeAdResponse} SeeAdResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SeeAdResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.SeeAdResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nPrompt = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SeeAdResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.SeeAdResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.SeeAdResponse} SeeAdResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SeeAdResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SeeAdResponse message.
         * @function verify
         * @memberof gameMsg.SeeAdResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SeeAdResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nPrompt != null && message.hasOwnProperty("nPrompt"))
                if (!$util.isInteger(message.nPrompt))
                    return "nPrompt: integer expected";
            return null;
        };

        return SeeAdResponse;
    })();

    gameMsg.UsePromptRequest = (function() {

        /**
         * Properties of a UsePromptRequest.
         * @memberof gameMsg
         * @interface IUsePromptRequest
         * @property {string} sID UsePromptRequest sID
         */

        /**
         * Constructs a new UsePromptRequest.
         * @memberof gameMsg
         * @classdesc Represents a UsePromptRequest.
         * @implements IUsePromptRequest
         * @constructor
         * @param {gameMsg.IUsePromptRequest=} [properties] Properties to set
         */
        function UsePromptRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UsePromptRequest sID.
         * @member {string} sID
         * @memberof gameMsg.UsePromptRequest
         * @instance
         */
        UsePromptRequest.prototype.sID = "";

        /**
         * Creates a new UsePromptRequest instance using the specified properties.
         * @function create
         * @memberof gameMsg.UsePromptRequest
         * @static
         * @param {gameMsg.IUsePromptRequest=} [properties] Properties to set
         * @returns {gameMsg.UsePromptRequest} UsePromptRequest instance
         */
        UsePromptRequest.create = function create(properties) {
            return new UsePromptRequest(properties);
        };

        /**
         * Encodes the specified UsePromptRequest message. Does not implicitly {@link gameMsg.UsePromptRequest.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.UsePromptRequest
         * @static
         * @param {gameMsg.IUsePromptRequest} message UsePromptRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UsePromptRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sID);
            return writer;
        };

        /**
         * Encodes the specified UsePromptRequest message, length delimited. Does not implicitly {@link gameMsg.UsePromptRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.UsePromptRequest
         * @static
         * @param {gameMsg.IUsePromptRequest} message UsePromptRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UsePromptRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UsePromptRequest message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.UsePromptRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.UsePromptRequest} UsePromptRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UsePromptRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.UsePromptRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sID"))
                throw $util.ProtocolError("missing required 'sID'", { instance: message });
            return message;
        };

        /**
         * Decodes a UsePromptRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.UsePromptRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.UsePromptRequest} UsePromptRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UsePromptRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UsePromptRequest message.
         * @function verify
         * @memberof gameMsg.UsePromptRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UsePromptRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.sID))
                return "sID: string expected";
            return null;
        };

        return UsePromptRequest;
    })();

    gameMsg.UsePromptResponse = (function() {

        /**
         * Properties of a UsePromptResponse.
         * @memberof gameMsg
         * @interface IUsePromptResponse
         * @property {number|null} [nPrompt] UsePromptResponse nPrompt
         */

        /**
         * Constructs a new UsePromptResponse.
         * @memberof gameMsg
         * @classdesc Represents a UsePromptResponse.
         * @implements IUsePromptResponse
         * @constructor
         * @param {gameMsg.IUsePromptResponse=} [properties] Properties to set
         */
        function UsePromptResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UsePromptResponse nPrompt.
         * @member {number} nPrompt
         * @memberof gameMsg.UsePromptResponse
         * @instance
         */
        UsePromptResponse.prototype.nPrompt = 0;

        /**
         * Creates a new UsePromptResponse instance using the specified properties.
         * @function create
         * @memberof gameMsg.UsePromptResponse
         * @static
         * @param {gameMsg.IUsePromptResponse=} [properties] Properties to set
         * @returns {gameMsg.UsePromptResponse} UsePromptResponse instance
         */
        UsePromptResponse.create = function create(properties) {
            return new UsePromptResponse(properties);
        };

        /**
         * Encodes the specified UsePromptResponse message. Does not implicitly {@link gameMsg.UsePromptResponse.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.UsePromptResponse
         * @static
         * @param {gameMsg.IUsePromptResponse} message UsePromptResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UsePromptResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nPrompt != null && message.hasOwnProperty("nPrompt"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nPrompt);
            return writer;
        };

        /**
         * Encodes the specified UsePromptResponse message, length delimited. Does not implicitly {@link gameMsg.UsePromptResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.UsePromptResponse
         * @static
         * @param {gameMsg.IUsePromptResponse} message UsePromptResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UsePromptResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UsePromptResponse message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.UsePromptResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.UsePromptResponse} UsePromptResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UsePromptResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.UsePromptResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nPrompt = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UsePromptResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.UsePromptResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.UsePromptResponse} UsePromptResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UsePromptResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UsePromptResponse message.
         * @function verify
         * @memberof gameMsg.UsePromptResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UsePromptResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nPrompt != null && message.hasOwnProperty("nPrompt"))
                if (!$util.isInteger(message.nPrompt))
                    return "nPrompt: integer expected";
            return null;
        };

        return UsePromptResponse;
    })();

    gameMsg.RankData = (function() {

        /**
         * Properties of a RankData.
         * @memberof gameMsg
         * @interface IRankData
         * @property {string} id RankData id
         * @property {string} sNick RankData sNick
         * @property {number} nRank RankData nRank
         * @property {number} starNum RankData starNum
         */

        /**
         * Constructs a new RankData.
         * @memberof gameMsg
         * @classdesc Represents a RankData.
         * @implements IRankData
         * @constructor
         * @param {gameMsg.IRankData=} [properties] Properties to set
         */
        function RankData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RankData id.
         * @member {string} id
         * @memberof gameMsg.RankData
         * @instance
         */
        RankData.prototype.id = "";

        /**
         * RankData sNick.
         * @member {string} sNick
         * @memberof gameMsg.RankData
         * @instance
         */
        RankData.prototype.sNick = "";

        /**
         * RankData nRank.
         * @member {number} nRank
         * @memberof gameMsg.RankData
         * @instance
         */
        RankData.prototype.nRank = 0;

        /**
         * RankData starNum.
         * @member {number} starNum
         * @memberof gameMsg.RankData
         * @instance
         */
        RankData.prototype.starNum = 0;

        /**
         * Creates a new RankData instance using the specified properties.
         * @function create
         * @memberof gameMsg.RankData
         * @static
         * @param {gameMsg.IRankData=} [properties] Properties to set
         * @returns {gameMsg.RankData} RankData instance
         */
        RankData.create = function create(properties) {
            return new RankData(properties);
        };

        /**
         * Encodes the specified RankData message. Does not implicitly {@link gameMsg.RankData.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.RankData
         * @static
         * @param {gameMsg.IRankData} message RankData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sNick);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nRank);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.starNum);
            return writer;
        };

        /**
         * Encodes the specified RankData message, length delimited. Does not implicitly {@link gameMsg.RankData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.RankData
         * @static
         * @param {gameMsg.IRankData} message RankData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RankData message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.RankData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.RankData} RankData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.RankData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.sNick = reader.string();
                    break;
                case 3:
                    message.nRank = reader.int32();
                    break;
                case 4:
                    message.starNum = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("sNick"))
                throw $util.ProtocolError("missing required 'sNick'", { instance: message });
            if (!message.hasOwnProperty("nRank"))
                throw $util.ProtocolError("missing required 'nRank'", { instance: message });
            if (!message.hasOwnProperty("starNum"))
                throw $util.ProtocolError("missing required 'starNum'", { instance: message });
            return message;
        };

        /**
         * Decodes a RankData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.RankData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.RankData} RankData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RankData message.
         * @function verify
         * @memberof gameMsg.RankData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RankData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            if (!$util.isString(message.sNick))
                return "sNick: string expected";
            if (!$util.isInteger(message.nRank))
                return "nRank: integer expected";
            if (!$util.isInteger(message.starNum))
                return "starNum: integer expected";
            return null;
        };

        return RankData;
    })();

    gameMsg.RankRequest = (function() {

        /**
         * Properties of a RankRequest.
         * @memberof gameMsg
         * @interface IRankRequest
         * @property {string} sID RankRequest sID
         */

        /**
         * Constructs a new RankRequest.
         * @memberof gameMsg
         * @classdesc Represents a RankRequest.
         * @implements IRankRequest
         * @constructor
         * @param {gameMsg.IRankRequest=} [properties] Properties to set
         */
        function RankRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RankRequest sID.
         * @member {string} sID
         * @memberof gameMsg.RankRequest
         * @instance
         */
        RankRequest.prototype.sID = "";

        /**
         * Creates a new RankRequest instance using the specified properties.
         * @function create
         * @memberof gameMsg.RankRequest
         * @static
         * @param {gameMsg.IRankRequest=} [properties] Properties to set
         * @returns {gameMsg.RankRequest} RankRequest instance
         */
        RankRequest.create = function create(properties) {
            return new RankRequest(properties);
        };

        /**
         * Encodes the specified RankRequest message. Does not implicitly {@link gameMsg.RankRequest.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.RankRequest
         * @static
         * @param {gameMsg.IRankRequest} message RankRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sID);
            return writer;
        };

        /**
         * Encodes the specified RankRequest message, length delimited. Does not implicitly {@link gameMsg.RankRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.RankRequest
         * @static
         * @param {gameMsg.IRankRequest} message RankRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RankRequest message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.RankRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.RankRequest} RankRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.RankRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sID"))
                throw $util.ProtocolError("missing required 'sID'", { instance: message });
            return message;
        };

        /**
         * Decodes a RankRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.RankRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.RankRequest} RankRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RankRequest message.
         * @function verify
         * @memberof gameMsg.RankRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RankRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.sID))
                return "sID: string expected";
            return null;
        };

        return RankRequest;
    })();

    gameMsg.RankResponse = (function() {

        /**
         * Properties of a RankResponse.
         * @memberof gameMsg
         * @interface IRankResponse
         * @property {Array.<gameMsg.IRankData>|null} [rankDatas] RankResponse rankDatas
         */

        /**
         * Constructs a new RankResponse.
         * @memberof gameMsg
         * @classdesc Represents a RankResponse.
         * @implements IRankResponse
         * @constructor
         * @param {gameMsg.IRankResponse=} [properties] Properties to set
         */
        function RankResponse(properties) {
            this.rankDatas = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RankResponse rankDatas.
         * @member {Array.<gameMsg.IRankData>} rankDatas
         * @memberof gameMsg.RankResponse
         * @instance
         */
        RankResponse.prototype.rankDatas = $util.emptyArray;

        /**
         * Creates a new RankResponse instance using the specified properties.
         * @function create
         * @memberof gameMsg.RankResponse
         * @static
         * @param {gameMsg.IRankResponse=} [properties] Properties to set
         * @returns {gameMsg.RankResponse} RankResponse instance
         */
        RankResponse.create = function create(properties) {
            return new RankResponse(properties);
        };

        /**
         * Encodes the specified RankResponse message. Does not implicitly {@link gameMsg.RankResponse.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.RankResponse
         * @static
         * @param {gameMsg.IRankResponse} message RankResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rankDatas != null && message.rankDatas.length)
                for (var i = 0; i < message.rankDatas.length; ++i)
                    $root.gameMsg.RankData.encode(message.rankDatas[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RankResponse message, length delimited. Does not implicitly {@link gameMsg.RankResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.RankResponse
         * @static
         * @param {gameMsg.IRankResponse} message RankResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RankResponse message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.RankResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.RankResponse} RankResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.RankResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.rankDatas && message.rankDatas.length))
                        message.rankDatas = [];
                    message.rankDatas.push($root.gameMsg.RankData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RankResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.RankResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.RankResponse} RankResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RankResponse message.
         * @function verify
         * @memberof gameMsg.RankResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RankResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rankDatas != null && message.hasOwnProperty("rankDatas")) {
                if (!Array.isArray(message.rankDatas))
                    return "rankDatas: array expected";
                for (var i = 0; i < message.rankDatas.length; ++i) {
                    var error = $root.gameMsg.RankData.verify(message.rankDatas[i]);
                    if (error)
                        return "rankDatas." + error;
                }
            }
            return null;
        };

        return RankResponse;
    })();

    gameMsg.StartGameRequest = (function() {

        /**
         * Properties of a StartGameRequest.
         * @memberof gameMsg
         * @interface IStartGameRequest
         * @property {string} sID StartGameRequest sID
         * @property {string} sRoomID StartGameRequest sRoomID
         */

        /**
         * Constructs a new StartGameRequest.
         * @memberof gameMsg
         * @classdesc Represents a StartGameRequest.
         * @implements IStartGameRequest
         * @constructor
         * @param {gameMsg.IStartGameRequest=} [properties] Properties to set
         */
        function StartGameRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StartGameRequest sID.
         * @member {string} sID
         * @memberof gameMsg.StartGameRequest
         * @instance
         */
        StartGameRequest.prototype.sID = "";

        /**
         * StartGameRequest sRoomID.
         * @member {string} sRoomID
         * @memberof gameMsg.StartGameRequest
         * @instance
         */
        StartGameRequest.prototype.sRoomID = "";

        /**
         * Creates a new StartGameRequest instance using the specified properties.
         * @function create
         * @memberof gameMsg.StartGameRequest
         * @static
         * @param {gameMsg.IStartGameRequest=} [properties] Properties to set
         * @returns {gameMsg.StartGameRequest} StartGameRequest instance
         */
        StartGameRequest.create = function create(properties) {
            return new StartGameRequest(properties);
        };

        /**
         * Encodes the specified StartGameRequest message. Does not implicitly {@link gameMsg.StartGameRequest.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.StartGameRequest
         * @static
         * @param {gameMsg.IStartGameRequest} message StartGameRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartGameRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sID);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sRoomID);
            return writer;
        };

        /**
         * Encodes the specified StartGameRequest message, length delimited. Does not implicitly {@link gameMsg.StartGameRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.StartGameRequest
         * @static
         * @param {gameMsg.IStartGameRequest} message StartGameRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartGameRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartGameRequest message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.StartGameRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.StartGameRequest} StartGameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartGameRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.StartGameRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sID = reader.string();
                    break;
                case 2:
                    message.sRoomID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sID"))
                throw $util.ProtocolError("missing required 'sID'", { instance: message });
            if (!message.hasOwnProperty("sRoomID"))
                throw $util.ProtocolError("missing required 'sRoomID'", { instance: message });
            return message;
        };

        /**
         * Decodes a StartGameRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.StartGameRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.StartGameRequest} StartGameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartGameRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartGameRequest message.
         * @function verify
         * @memberof gameMsg.StartGameRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartGameRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.sID))
                return "sID: string expected";
            if (!$util.isString(message.sRoomID))
                return "sRoomID: string expected";
            return null;
        };

        return StartGameRequest;
    })();

    gameMsg.StartGameResponse = (function() {

        /**
         * Properties of a StartGameResponse.
         * @memberof gameMsg
         * @interface IStartGameResponse
         */

        /**
         * Constructs a new StartGameResponse.
         * @memberof gameMsg
         * @classdesc Represents a StartGameResponse.
         * @implements IStartGameResponse
         * @constructor
         * @param {gameMsg.IStartGameResponse=} [properties] Properties to set
         */
        function StartGameResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new StartGameResponse instance using the specified properties.
         * @function create
         * @memberof gameMsg.StartGameResponse
         * @static
         * @param {gameMsg.IStartGameResponse=} [properties] Properties to set
         * @returns {gameMsg.StartGameResponse} StartGameResponse instance
         */
        StartGameResponse.create = function create(properties) {
            return new StartGameResponse(properties);
        };

        /**
         * Encodes the specified StartGameResponse message. Does not implicitly {@link gameMsg.StartGameResponse.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.StartGameResponse
         * @static
         * @param {gameMsg.IStartGameResponse} message StartGameResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartGameResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified StartGameResponse message, length delimited. Does not implicitly {@link gameMsg.StartGameResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.StartGameResponse
         * @static
         * @param {gameMsg.IStartGameResponse} message StartGameResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartGameResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartGameResponse message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.StartGameResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.StartGameResponse} StartGameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartGameResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.StartGameResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StartGameResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.StartGameResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.StartGameResponse} StartGameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartGameResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartGameResponse message.
         * @function verify
         * @memberof gameMsg.StartGameResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartGameResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return StartGameResponse;
    })();

    gameMsg.StartGameNotify = (function() {

        /**
         * Properties of a StartGameNotify.
         * @memberof gameMsg
         * @interface IStartGameNotify
         * @property {string} sRoomID StartGameNotify sRoomID
         * @property {number} nGID StartGameNotify nGID
         */

        /**
         * Constructs a new StartGameNotify.
         * @memberof gameMsg
         * @classdesc Represents a StartGameNotify.
         * @implements IStartGameNotify
         * @constructor
         * @param {gameMsg.IStartGameNotify=} [properties] Properties to set
         */
        function StartGameNotify(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StartGameNotify sRoomID.
         * @member {string} sRoomID
         * @memberof gameMsg.StartGameNotify
         * @instance
         */
        StartGameNotify.prototype.sRoomID = "";

        /**
         * StartGameNotify nGID.
         * @member {number} nGID
         * @memberof gameMsg.StartGameNotify
         * @instance
         */
        StartGameNotify.prototype.nGID = 0;

        /**
         * Creates a new StartGameNotify instance using the specified properties.
         * @function create
         * @memberof gameMsg.StartGameNotify
         * @static
         * @param {gameMsg.IStartGameNotify=} [properties] Properties to set
         * @returns {gameMsg.StartGameNotify} StartGameNotify instance
         */
        StartGameNotify.create = function create(properties) {
            return new StartGameNotify(properties);
        };

        /**
         * Encodes the specified StartGameNotify message. Does not implicitly {@link gameMsg.StartGameNotify.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.StartGameNotify
         * @static
         * @param {gameMsg.IStartGameNotify} message StartGameNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartGameNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sRoomID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nGID);
            return writer;
        };

        /**
         * Encodes the specified StartGameNotify message, length delimited. Does not implicitly {@link gameMsg.StartGameNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.StartGameNotify
         * @static
         * @param {gameMsg.IStartGameNotify} message StartGameNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartGameNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartGameNotify message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.StartGameNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.StartGameNotify} StartGameNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartGameNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.StartGameNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sRoomID = reader.string();
                    break;
                case 2:
                    message.nGID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sRoomID"))
                throw $util.ProtocolError("missing required 'sRoomID'", { instance: message });
            if (!message.hasOwnProperty("nGID"))
                throw $util.ProtocolError("missing required 'nGID'", { instance: message });
            return message;
        };

        /**
         * Decodes a StartGameNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.StartGameNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.StartGameNotify} StartGameNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartGameNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartGameNotify message.
         * @function verify
         * @memberof gameMsg.StartGameNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartGameNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.sRoomID))
                return "sRoomID: string expected";
            if (!$util.isInteger(message.nGID))
                return "nGID: integer expected";
            return null;
        };

        return StartGameNotify;
    })();

    gameMsg.TimerGameNotify = (function() {

        /**
         * Properties of a TimerGameNotify.
         * @memberof gameMsg
         * @interface ITimerGameNotify
         * @property {string} sRoomID TimerGameNotify sRoomID
         * @property {number} nTime TimerGameNotify nTime
         */

        /**
         * Constructs a new TimerGameNotify.
         * @memberof gameMsg
         * @classdesc Represents a TimerGameNotify.
         * @implements ITimerGameNotify
         * @constructor
         * @param {gameMsg.ITimerGameNotify=} [properties] Properties to set
         */
        function TimerGameNotify(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TimerGameNotify sRoomID.
         * @member {string} sRoomID
         * @memberof gameMsg.TimerGameNotify
         * @instance
         */
        TimerGameNotify.prototype.sRoomID = "";

        /**
         * TimerGameNotify nTime.
         * @member {number} nTime
         * @memberof gameMsg.TimerGameNotify
         * @instance
         */
        TimerGameNotify.prototype.nTime = 0;

        /**
         * Creates a new TimerGameNotify instance using the specified properties.
         * @function create
         * @memberof gameMsg.TimerGameNotify
         * @static
         * @param {gameMsg.ITimerGameNotify=} [properties] Properties to set
         * @returns {gameMsg.TimerGameNotify} TimerGameNotify instance
         */
        TimerGameNotify.create = function create(properties) {
            return new TimerGameNotify(properties);
        };

        /**
         * Encodes the specified TimerGameNotify message. Does not implicitly {@link gameMsg.TimerGameNotify.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.TimerGameNotify
         * @static
         * @param {gameMsg.ITimerGameNotify} message TimerGameNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimerGameNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sRoomID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nTime);
            return writer;
        };

        /**
         * Encodes the specified TimerGameNotify message, length delimited. Does not implicitly {@link gameMsg.TimerGameNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.TimerGameNotify
         * @static
         * @param {gameMsg.ITimerGameNotify} message TimerGameNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimerGameNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TimerGameNotify message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.TimerGameNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.TimerGameNotify} TimerGameNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimerGameNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.TimerGameNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sRoomID = reader.string();
                    break;
                case 2:
                    message.nTime = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sRoomID"))
                throw $util.ProtocolError("missing required 'sRoomID'", { instance: message });
            if (!message.hasOwnProperty("nTime"))
                throw $util.ProtocolError("missing required 'nTime'", { instance: message });
            return message;
        };

        /**
         * Decodes a TimerGameNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.TimerGameNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.TimerGameNotify} TimerGameNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimerGameNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TimerGameNotify message.
         * @function verify
         * @memberof gameMsg.TimerGameNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TimerGameNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.sRoomID))
                return "sRoomID: string expected";
            if (!$util.isInteger(message.nTime))
                return "nTime: integer expected";
            return null;
        };

        return TimerGameNotify;
    })();

    gameMsg.MatchGameRequest = (function() {

        /**
         * Properties of a MatchGameRequest.
         * @memberof gameMsg
         * @interface IMatchGameRequest
         * @property {string} sID MatchGameRequest sID
         * @property {string} sRoomID MatchGameRequest sRoomID
         */

        /**
         * Constructs a new MatchGameRequest.
         * @memberof gameMsg
         * @classdesc Represents a MatchGameRequest.
         * @implements IMatchGameRequest
         * @constructor
         * @param {gameMsg.IMatchGameRequest=} [properties] Properties to set
         */
        function MatchGameRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MatchGameRequest sID.
         * @member {string} sID
         * @memberof gameMsg.MatchGameRequest
         * @instance
         */
        MatchGameRequest.prototype.sID = "";

        /**
         * MatchGameRequest sRoomID.
         * @member {string} sRoomID
         * @memberof gameMsg.MatchGameRequest
         * @instance
         */
        MatchGameRequest.prototype.sRoomID = "";

        /**
         * Creates a new MatchGameRequest instance using the specified properties.
         * @function create
         * @memberof gameMsg.MatchGameRequest
         * @static
         * @param {gameMsg.IMatchGameRequest=} [properties] Properties to set
         * @returns {gameMsg.MatchGameRequest} MatchGameRequest instance
         */
        MatchGameRequest.create = function create(properties) {
            return new MatchGameRequest(properties);
        };

        /**
         * Encodes the specified MatchGameRequest message. Does not implicitly {@link gameMsg.MatchGameRequest.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.MatchGameRequest
         * @static
         * @param {gameMsg.IMatchGameRequest} message MatchGameRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchGameRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sID);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sRoomID);
            return writer;
        };

        /**
         * Encodes the specified MatchGameRequest message, length delimited. Does not implicitly {@link gameMsg.MatchGameRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.MatchGameRequest
         * @static
         * @param {gameMsg.IMatchGameRequest} message MatchGameRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchGameRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MatchGameRequest message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.MatchGameRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.MatchGameRequest} MatchGameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchGameRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.MatchGameRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sID = reader.string();
                    break;
                case 2:
                    message.sRoomID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sID"))
                throw $util.ProtocolError("missing required 'sID'", { instance: message });
            if (!message.hasOwnProperty("sRoomID"))
                throw $util.ProtocolError("missing required 'sRoomID'", { instance: message });
            return message;
        };

        /**
         * Decodes a MatchGameRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.MatchGameRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.MatchGameRequest} MatchGameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchGameRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MatchGameRequest message.
         * @function verify
         * @memberof gameMsg.MatchGameRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MatchGameRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.sID))
                return "sID: string expected";
            if (!$util.isString(message.sRoomID))
                return "sRoomID: string expected";
            return null;
        };

        return MatchGameRequest;
    })();

    gameMsg.MatchGameResponse = (function() {

        /**
         * Properties of a MatchGameResponse.
         * @memberof gameMsg
         * @interface IMatchGameResponse
         */

        /**
         * Constructs a new MatchGameResponse.
         * @memberof gameMsg
         * @classdesc Represents a MatchGameResponse.
         * @implements IMatchGameResponse
         * @constructor
         * @param {gameMsg.IMatchGameResponse=} [properties] Properties to set
         */
        function MatchGameResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new MatchGameResponse instance using the specified properties.
         * @function create
         * @memberof gameMsg.MatchGameResponse
         * @static
         * @param {gameMsg.IMatchGameResponse=} [properties] Properties to set
         * @returns {gameMsg.MatchGameResponse} MatchGameResponse instance
         */
        MatchGameResponse.create = function create(properties) {
            return new MatchGameResponse(properties);
        };

        /**
         * Encodes the specified MatchGameResponse message. Does not implicitly {@link gameMsg.MatchGameResponse.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.MatchGameResponse
         * @static
         * @param {gameMsg.IMatchGameResponse} message MatchGameResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchGameResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified MatchGameResponse message, length delimited. Does not implicitly {@link gameMsg.MatchGameResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.MatchGameResponse
         * @static
         * @param {gameMsg.IMatchGameResponse} message MatchGameResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchGameResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MatchGameResponse message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.MatchGameResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.MatchGameResponse} MatchGameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchGameResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.MatchGameResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MatchGameResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.MatchGameResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.MatchGameResponse} MatchGameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchGameResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MatchGameResponse message.
         * @function verify
         * @memberof gameMsg.MatchGameResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MatchGameResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return MatchGameResponse;
    })();

    gameMsg.UseToolRequest = (function() {

        /**
         * Properties of a UseToolRequest.
         * @memberof gameMsg
         * @interface IUseToolRequest
         * @property {string} sID UseToolRequest sID
         * @property {string} goodID UseToolRequest goodID
         * @property {string} sRoomID UseToolRequest sRoomID
         * @property {string} sDID UseToolRequest sDID
         */

        /**
         * Constructs a new UseToolRequest.
         * @memberof gameMsg
         * @classdesc Represents a UseToolRequest.
         * @implements IUseToolRequest
         * @constructor
         * @param {gameMsg.IUseToolRequest=} [properties] Properties to set
         */
        function UseToolRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UseToolRequest sID.
         * @member {string} sID
         * @memberof gameMsg.UseToolRequest
         * @instance
         */
        UseToolRequest.prototype.sID = "";

        /**
         * UseToolRequest goodID.
         * @member {string} goodID
         * @memberof gameMsg.UseToolRequest
         * @instance
         */
        UseToolRequest.prototype.goodID = "";

        /**
         * UseToolRequest sRoomID.
         * @member {string} sRoomID
         * @memberof gameMsg.UseToolRequest
         * @instance
         */
        UseToolRequest.prototype.sRoomID = "";

        /**
         * UseToolRequest sDID.
         * @member {string} sDID
         * @memberof gameMsg.UseToolRequest
         * @instance
         */
        UseToolRequest.prototype.sDID = "";

        /**
         * Creates a new UseToolRequest instance using the specified properties.
         * @function create
         * @memberof gameMsg.UseToolRequest
         * @static
         * @param {gameMsg.IUseToolRequest=} [properties] Properties to set
         * @returns {gameMsg.UseToolRequest} UseToolRequest instance
         */
        UseToolRequest.create = function create(properties) {
            return new UseToolRequest(properties);
        };

        /**
         * Encodes the specified UseToolRequest message. Does not implicitly {@link gameMsg.UseToolRequest.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.UseToolRequest
         * @static
         * @param {gameMsg.IUseToolRequest} message UseToolRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UseToolRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sID);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.goodID);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.sRoomID);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.sDID);
            return writer;
        };

        /**
         * Encodes the specified UseToolRequest message, length delimited. Does not implicitly {@link gameMsg.UseToolRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.UseToolRequest
         * @static
         * @param {gameMsg.IUseToolRequest} message UseToolRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UseToolRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UseToolRequest message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.UseToolRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.UseToolRequest} UseToolRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UseToolRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.UseToolRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sID = reader.string();
                    break;
                case 2:
                    message.goodID = reader.string();
                    break;
                case 3:
                    message.sRoomID = reader.string();
                    break;
                case 4:
                    message.sDID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sID"))
                throw $util.ProtocolError("missing required 'sID'", { instance: message });
            if (!message.hasOwnProperty("goodID"))
                throw $util.ProtocolError("missing required 'goodID'", { instance: message });
            if (!message.hasOwnProperty("sRoomID"))
                throw $util.ProtocolError("missing required 'sRoomID'", { instance: message });
            if (!message.hasOwnProperty("sDID"))
                throw $util.ProtocolError("missing required 'sDID'", { instance: message });
            return message;
        };

        /**
         * Decodes a UseToolRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.UseToolRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.UseToolRequest} UseToolRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UseToolRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UseToolRequest message.
         * @function verify
         * @memberof gameMsg.UseToolRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UseToolRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.sID))
                return "sID: string expected";
            if (!$util.isString(message.goodID))
                return "goodID: string expected";
            if (!$util.isString(message.sRoomID))
                return "sRoomID: string expected";
            if (!$util.isString(message.sDID))
                return "sDID: string expected";
            return null;
        };

        return UseToolRequest;
    })();

    gameMsg.UseToolResponse = (function() {

        /**
         * Properties of a UseToolResponse.
         * @memberof gameMsg
         * @interface IUseToolResponse
         */

        /**
         * Constructs a new UseToolResponse.
         * @memberof gameMsg
         * @classdesc Represents a UseToolResponse.
         * @implements IUseToolResponse
         * @constructor
         * @param {gameMsg.IUseToolResponse=} [properties] Properties to set
         */
        function UseToolResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new UseToolResponse instance using the specified properties.
         * @function create
         * @memberof gameMsg.UseToolResponse
         * @static
         * @param {gameMsg.IUseToolResponse=} [properties] Properties to set
         * @returns {gameMsg.UseToolResponse} UseToolResponse instance
         */
        UseToolResponse.create = function create(properties) {
            return new UseToolResponse(properties);
        };

        /**
         * Encodes the specified UseToolResponse message. Does not implicitly {@link gameMsg.UseToolResponse.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.UseToolResponse
         * @static
         * @param {gameMsg.IUseToolResponse} message UseToolResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UseToolResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified UseToolResponse message, length delimited. Does not implicitly {@link gameMsg.UseToolResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.UseToolResponse
         * @static
         * @param {gameMsg.IUseToolResponse} message UseToolResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UseToolResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UseToolResponse message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.UseToolResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.UseToolResponse} UseToolResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UseToolResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.UseToolResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UseToolResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.UseToolResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.UseToolResponse} UseToolResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UseToolResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UseToolResponse message.
         * @function verify
         * @memberof gameMsg.UseToolResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UseToolResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return UseToolResponse;
    })();

    gameMsg.UseToolNotify = (function() {

        /**
         * Properties of a UseToolNotify.
         * @memberof gameMsg
         * @interface IUseToolNotify
         * @property {string} sID UseToolNotify sID
         * @property {string} goodID UseToolNotify goodID
         * @property {string} sDID UseToolNotify sDID
         */

        /**
         * Constructs a new UseToolNotify.
         * @memberof gameMsg
         * @classdesc Represents a UseToolNotify.
         * @implements IUseToolNotify
         * @constructor
         * @param {gameMsg.IUseToolNotify=} [properties] Properties to set
         */
        function UseToolNotify(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UseToolNotify sID.
         * @member {string} sID
         * @memberof gameMsg.UseToolNotify
         * @instance
         */
        UseToolNotify.prototype.sID = "";

        /**
         * UseToolNotify goodID.
         * @member {string} goodID
         * @memberof gameMsg.UseToolNotify
         * @instance
         */
        UseToolNotify.prototype.goodID = "";

        /**
         * UseToolNotify sDID.
         * @member {string} sDID
         * @memberof gameMsg.UseToolNotify
         * @instance
         */
        UseToolNotify.prototype.sDID = "";

        /**
         * Creates a new UseToolNotify instance using the specified properties.
         * @function create
         * @memberof gameMsg.UseToolNotify
         * @static
         * @param {gameMsg.IUseToolNotify=} [properties] Properties to set
         * @returns {gameMsg.UseToolNotify} UseToolNotify instance
         */
        UseToolNotify.create = function create(properties) {
            return new UseToolNotify(properties);
        };

        /**
         * Encodes the specified UseToolNotify message. Does not implicitly {@link gameMsg.UseToolNotify.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.UseToolNotify
         * @static
         * @param {gameMsg.IUseToolNotify} message UseToolNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UseToolNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sID);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.goodID);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.sDID);
            return writer;
        };

        /**
         * Encodes the specified UseToolNotify message, length delimited. Does not implicitly {@link gameMsg.UseToolNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.UseToolNotify
         * @static
         * @param {gameMsg.IUseToolNotify} message UseToolNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UseToolNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UseToolNotify message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.UseToolNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.UseToolNotify} UseToolNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UseToolNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.UseToolNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sID = reader.string();
                    break;
                case 2:
                    message.goodID = reader.string();
                    break;
                case 3:
                    message.sDID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sID"))
                throw $util.ProtocolError("missing required 'sID'", { instance: message });
            if (!message.hasOwnProperty("goodID"))
                throw $util.ProtocolError("missing required 'goodID'", { instance: message });
            if (!message.hasOwnProperty("sDID"))
                throw $util.ProtocolError("missing required 'sDID'", { instance: message });
            return message;
        };

        /**
         * Decodes a UseToolNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.UseToolNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.UseToolNotify} UseToolNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UseToolNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UseToolNotify message.
         * @function verify
         * @memberof gameMsg.UseToolNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UseToolNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.sID))
                return "sID: string expected";
            if (!$util.isString(message.goodID))
                return "goodID: string expected";
            if (!$util.isString(message.sDID))
                return "sDID: string expected";
            return null;
        };

        return UseToolNotify;
    })();

    gameMsg.PlayBlockAddRequest = (function() {

        /**
         * Properties of a PlayBlockAddRequest.
         * @memberof gameMsg
         * @interface IPlayBlockAddRequest
         * @property {string} sID PlayBlockAddRequest sID
         * @property {string} sRoomID PlayBlockAddRequest sRoomID
         * @property {number} gateID PlayBlockAddRequest gateID
         */

        /**
         * Constructs a new PlayBlockAddRequest.
         * @memberof gameMsg
         * @classdesc Represents a PlayBlockAddRequest.
         * @implements IPlayBlockAddRequest
         * @constructor
         * @param {gameMsg.IPlayBlockAddRequest=} [properties] Properties to set
         */
        function PlayBlockAddRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayBlockAddRequest sID.
         * @member {string} sID
         * @memberof gameMsg.PlayBlockAddRequest
         * @instance
         */
        PlayBlockAddRequest.prototype.sID = "";

        /**
         * PlayBlockAddRequest sRoomID.
         * @member {string} sRoomID
         * @memberof gameMsg.PlayBlockAddRequest
         * @instance
         */
        PlayBlockAddRequest.prototype.sRoomID = "";

        /**
         * PlayBlockAddRequest gateID.
         * @member {number} gateID
         * @memberof gameMsg.PlayBlockAddRequest
         * @instance
         */
        PlayBlockAddRequest.prototype.gateID = 0;

        /**
         * Creates a new PlayBlockAddRequest instance using the specified properties.
         * @function create
         * @memberof gameMsg.PlayBlockAddRequest
         * @static
         * @param {gameMsg.IPlayBlockAddRequest=} [properties] Properties to set
         * @returns {gameMsg.PlayBlockAddRequest} PlayBlockAddRequest instance
         */
        PlayBlockAddRequest.create = function create(properties) {
            return new PlayBlockAddRequest(properties);
        };

        /**
         * Encodes the specified PlayBlockAddRequest message. Does not implicitly {@link gameMsg.PlayBlockAddRequest.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.PlayBlockAddRequest
         * @static
         * @param {gameMsg.IPlayBlockAddRequest} message PlayBlockAddRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayBlockAddRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sID);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sRoomID);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.gateID);
            return writer;
        };

        /**
         * Encodes the specified PlayBlockAddRequest message, length delimited. Does not implicitly {@link gameMsg.PlayBlockAddRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.PlayBlockAddRequest
         * @static
         * @param {gameMsg.IPlayBlockAddRequest} message PlayBlockAddRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayBlockAddRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayBlockAddRequest message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.PlayBlockAddRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.PlayBlockAddRequest} PlayBlockAddRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayBlockAddRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.PlayBlockAddRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sID = reader.string();
                    break;
                case 2:
                    message.sRoomID = reader.string();
                    break;
                case 3:
                    message.gateID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sID"))
                throw $util.ProtocolError("missing required 'sID'", { instance: message });
            if (!message.hasOwnProperty("sRoomID"))
                throw $util.ProtocolError("missing required 'sRoomID'", { instance: message });
            if (!message.hasOwnProperty("gateID"))
                throw $util.ProtocolError("missing required 'gateID'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayBlockAddRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.PlayBlockAddRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.PlayBlockAddRequest} PlayBlockAddRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayBlockAddRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayBlockAddRequest message.
         * @function verify
         * @memberof gameMsg.PlayBlockAddRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayBlockAddRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.sID))
                return "sID: string expected";
            if (!$util.isString(message.sRoomID))
                return "sRoomID: string expected";
            if (!$util.isInteger(message.gateID))
                return "gateID: integer expected";
            return null;
        };

        return PlayBlockAddRequest;
    })();

    gameMsg.PlayBlockAddResponse = (function() {

        /**
         * Properties of a PlayBlockAddResponse.
         * @memberof gameMsg
         * @interface IPlayBlockAddResponse
         */

        /**
         * Constructs a new PlayBlockAddResponse.
         * @memberof gameMsg
         * @classdesc Represents a PlayBlockAddResponse.
         * @implements IPlayBlockAddResponse
         * @constructor
         * @param {gameMsg.IPlayBlockAddResponse=} [properties] Properties to set
         */
        function PlayBlockAddResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new PlayBlockAddResponse instance using the specified properties.
         * @function create
         * @memberof gameMsg.PlayBlockAddResponse
         * @static
         * @param {gameMsg.IPlayBlockAddResponse=} [properties] Properties to set
         * @returns {gameMsg.PlayBlockAddResponse} PlayBlockAddResponse instance
         */
        PlayBlockAddResponse.create = function create(properties) {
            return new PlayBlockAddResponse(properties);
        };

        /**
         * Encodes the specified PlayBlockAddResponse message. Does not implicitly {@link gameMsg.PlayBlockAddResponse.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.PlayBlockAddResponse
         * @static
         * @param {gameMsg.IPlayBlockAddResponse} message PlayBlockAddResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayBlockAddResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified PlayBlockAddResponse message, length delimited. Does not implicitly {@link gameMsg.PlayBlockAddResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.PlayBlockAddResponse
         * @static
         * @param {gameMsg.IPlayBlockAddResponse} message PlayBlockAddResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayBlockAddResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayBlockAddResponse message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.PlayBlockAddResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.PlayBlockAddResponse} PlayBlockAddResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayBlockAddResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.PlayBlockAddResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayBlockAddResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.PlayBlockAddResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.PlayBlockAddResponse} PlayBlockAddResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayBlockAddResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayBlockAddResponse message.
         * @function verify
         * @memberof gameMsg.PlayBlockAddResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayBlockAddResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return PlayBlockAddResponse;
    })();

    gameMsg.PlayBlockDeleteRequest = (function() {

        /**
         * Properties of a PlayBlockDeleteRequest.
         * @memberof gameMsg
         * @interface IPlayBlockDeleteRequest
         * @property {string} sID PlayBlockDeleteRequest sID
         * @property {string} sRoomID PlayBlockDeleteRequest sRoomID
         * @property {number} gateID PlayBlockDeleteRequest gateID
         */

        /**
         * Constructs a new PlayBlockDeleteRequest.
         * @memberof gameMsg
         * @classdesc Represents a PlayBlockDeleteRequest.
         * @implements IPlayBlockDeleteRequest
         * @constructor
         * @param {gameMsg.IPlayBlockDeleteRequest=} [properties] Properties to set
         */
        function PlayBlockDeleteRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayBlockDeleteRequest sID.
         * @member {string} sID
         * @memberof gameMsg.PlayBlockDeleteRequest
         * @instance
         */
        PlayBlockDeleteRequest.prototype.sID = "";

        /**
         * PlayBlockDeleteRequest sRoomID.
         * @member {string} sRoomID
         * @memberof gameMsg.PlayBlockDeleteRequest
         * @instance
         */
        PlayBlockDeleteRequest.prototype.sRoomID = "";

        /**
         * PlayBlockDeleteRequest gateID.
         * @member {number} gateID
         * @memberof gameMsg.PlayBlockDeleteRequest
         * @instance
         */
        PlayBlockDeleteRequest.prototype.gateID = 0;

        /**
         * Creates a new PlayBlockDeleteRequest instance using the specified properties.
         * @function create
         * @memberof gameMsg.PlayBlockDeleteRequest
         * @static
         * @param {gameMsg.IPlayBlockDeleteRequest=} [properties] Properties to set
         * @returns {gameMsg.PlayBlockDeleteRequest} PlayBlockDeleteRequest instance
         */
        PlayBlockDeleteRequest.create = function create(properties) {
            return new PlayBlockDeleteRequest(properties);
        };

        /**
         * Encodes the specified PlayBlockDeleteRequest message. Does not implicitly {@link gameMsg.PlayBlockDeleteRequest.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.PlayBlockDeleteRequest
         * @static
         * @param {gameMsg.IPlayBlockDeleteRequest} message PlayBlockDeleteRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayBlockDeleteRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sID);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sRoomID);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.gateID);
            return writer;
        };

        /**
         * Encodes the specified PlayBlockDeleteRequest message, length delimited. Does not implicitly {@link gameMsg.PlayBlockDeleteRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.PlayBlockDeleteRequest
         * @static
         * @param {gameMsg.IPlayBlockDeleteRequest} message PlayBlockDeleteRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayBlockDeleteRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayBlockDeleteRequest message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.PlayBlockDeleteRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.PlayBlockDeleteRequest} PlayBlockDeleteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayBlockDeleteRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.PlayBlockDeleteRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sID = reader.string();
                    break;
                case 2:
                    message.sRoomID = reader.string();
                    break;
                case 3:
                    message.gateID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sID"))
                throw $util.ProtocolError("missing required 'sID'", { instance: message });
            if (!message.hasOwnProperty("sRoomID"))
                throw $util.ProtocolError("missing required 'sRoomID'", { instance: message });
            if (!message.hasOwnProperty("gateID"))
                throw $util.ProtocolError("missing required 'gateID'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayBlockDeleteRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.PlayBlockDeleteRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.PlayBlockDeleteRequest} PlayBlockDeleteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayBlockDeleteRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayBlockDeleteRequest message.
         * @function verify
         * @memberof gameMsg.PlayBlockDeleteRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayBlockDeleteRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.sID))
                return "sID: string expected";
            if (!$util.isString(message.sRoomID))
                return "sRoomID: string expected";
            if (!$util.isInteger(message.gateID))
                return "gateID: integer expected";
            return null;
        };

        return PlayBlockDeleteRequest;
    })();

    gameMsg.PlayBlockDeleteResponse = (function() {

        /**
         * Properties of a PlayBlockDeleteResponse.
         * @memberof gameMsg
         * @interface IPlayBlockDeleteResponse
         */

        /**
         * Constructs a new PlayBlockDeleteResponse.
         * @memberof gameMsg
         * @classdesc Represents a PlayBlockDeleteResponse.
         * @implements IPlayBlockDeleteResponse
         * @constructor
         * @param {gameMsg.IPlayBlockDeleteResponse=} [properties] Properties to set
         */
        function PlayBlockDeleteResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new PlayBlockDeleteResponse instance using the specified properties.
         * @function create
         * @memberof gameMsg.PlayBlockDeleteResponse
         * @static
         * @param {gameMsg.IPlayBlockDeleteResponse=} [properties] Properties to set
         * @returns {gameMsg.PlayBlockDeleteResponse} PlayBlockDeleteResponse instance
         */
        PlayBlockDeleteResponse.create = function create(properties) {
            return new PlayBlockDeleteResponse(properties);
        };

        /**
         * Encodes the specified PlayBlockDeleteResponse message. Does not implicitly {@link gameMsg.PlayBlockDeleteResponse.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.PlayBlockDeleteResponse
         * @static
         * @param {gameMsg.IPlayBlockDeleteResponse} message PlayBlockDeleteResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayBlockDeleteResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified PlayBlockDeleteResponse message, length delimited. Does not implicitly {@link gameMsg.PlayBlockDeleteResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.PlayBlockDeleteResponse
         * @static
         * @param {gameMsg.IPlayBlockDeleteResponse} message PlayBlockDeleteResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayBlockDeleteResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayBlockDeleteResponse message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.PlayBlockDeleteResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.PlayBlockDeleteResponse} PlayBlockDeleteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayBlockDeleteResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.PlayBlockDeleteResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayBlockDeleteResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.PlayBlockDeleteResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.PlayBlockDeleteResponse} PlayBlockDeleteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayBlockDeleteResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayBlockDeleteResponse message.
         * @function verify
         * @memberof gameMsg.PlayBlockDeleteResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayBlockDeleteResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return PlayBlockDeleteResponse;
    })();

    gameMsg.PlayBlockNotify = (function() {

        /**
         * Properties of a PlayBlockNotify.
         * @memberof gameMsg
         * @interface IPlayBlockNotify
         * @property {string} sID PlayBlockNotify sID
         * @property {string} sRoomID PlayBlockNotify sRoomID
         * @property {number} gateID PlayBlockNotify gateID
         * @property {boolean} isAdd PlayBlockNotify isAdd
         */

        /**
         * Constructs a new PlayBlockNotify.
         * @memberof gameMsg
         * @classdesc Represents a PlayBlockNotify.
         * @implements IPlayBlockNotify
         * @constructor
         * @param {gameMsg.IPlayBlockNotify=} [properties] Properties to set
         */
        function PlayBlockNotify(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayBlockNotify sID.
         * @member {string} sID
         * @memberof gameMsg.PlayBlockNotify
         * @instance
         */
        PlayBlockNotify.prototype.sID = "";

        /**
         * PlayBlockNotify sRoomID.
         * @member {string} sRoomID
         * @memberof gameMsg.PlayBlockNotify
         * @instance
         */
        PlayBlockNotify.prototype.sRoomID = "";

        /**
         * PlayBlockNotify gateID.
         * @member {number} gateID
         * @memberof gameMsg.PlayBlockNotify
         * @instance
         */
        PlayBlockNotify.prototype.gateID = 0;

        /**
         * PlayBlockNotify isAdd.
         * @member {boolean} isAdd
         * @memberof gameMsg.PlayBlockNotify
         * @instance
         */
        PlayBlockNotify.prototype.isAdd = false;

        /**
         * Creates a new PlayBlockNotify instance using the specified properties.
         * @function create
         * @memberof gameMsg.PlayBlockNotify
         * @static
         * @param {gameMsg.IPlayBlockNotify=} [properties] Properties to set
         * @returns {gameMsg.PlayBlockNotify} PlayBlockNotify instance
         */
        PlayBlockNotify.create = function create(properties) {
            return new PlayBlockNotify(properties);
        };

        /**
         * Encodes the specified PlayBlockNotify message. Does not implicitly {@link gameMsg.PlayBlockNotify.verify|verify} messages.
         * @function encode
         * @memberof gameMsg.PlayBlockNotify
         * @static
         * @param {gameMsg.IPlayBlockNotify} message PlayBlockNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayBlockNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sID);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sRoomID);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.gateID);
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isAdd);
            return writer;
        };

        /**
         * Encodes the specified PlayBlockNotify message, length delimited. Does not implicitly {@link gameMsg.PlayBlockNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameMsg.PlayBlockNotify
         * @static
         * @param {gameMsg.IPlayBlockNotify} message PlayBlockNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayBlockNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayBlockNotify message from the specified reader or buffer.
         * @function decode
         * @memberof gameMsg.PlayBlockNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameMsg.PlayBlockNotify} PlayBlockNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayBlockNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameMsg.PlayBlockNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sID = reader.string();
                    break;
                case 2:
                    message.sRoomID = reader.string();
                    break;
                case 3:
                    message.gateID = reader.int32();
                    break;
                case 4:
                    message.isAdd = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sID"))
                throw $util.ProtocolError("missing required 'sID'", { instance: message });
            if (!message.hasOwnProperty("sRoomID"))
                throw $util.ProtocolError("missing required 'sRoomID'", { instance: message });
            if (!message.hasOwnProperty("gateID"))
                throw $util.ProtocolError("missing required 'gateID'", { instance: message });
            if (!message.hasOwnProperty("isAdd"))
                throw $util.ProtocolError("missing required 'isAdd'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayBlockNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameMsg.PlayBlockNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameMsg.PlayBlockNotify} PlayBlockNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayBlockNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayBlockNotify message.
         * @function verify
         * @memberof gameMsg.PlayBlockNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayBlockNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.sID))
                return "sID: string expected";
            if (!$util.isString(message.sRoomID))
                return "sRoomID: string expected";
            if (!$util.isInteger(message.gateID))
                return "gateID: integer expected";
            if (typeof message.isAdd !== "boolean")
                return "isAdd: boolean expected";
            return null;
        };

        return PlayBlockNotify;
    })();

    return gameMsg;
})();