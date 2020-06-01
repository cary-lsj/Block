type Long = protobuf.Long;

/** Namespace gameMsg. */
declare namespace gameMsg {

    /** Properties of an AssetUpdate. */
    interface IAssetUpdate {

        /** AssetUpdate nUserID */
        nUserID: string;

        /** AssetUpdate nGold */
        nGold?: (number|null);

        /** AssetUpdate nMoney */
        nMoney?: (number|null);

        /** AssetUpdate sAssets */
        sAssets?: (string|null);
    }

    /** Represents an AssetUpdate. */
    class AssetUpdate implements IAssetUpdate {

        /**
         * Constructs a new AssetUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IAssetUpdate);

        /** AssetUpdate nUserID. */
        public nUserID: string;

        /** AssetUpdate nGold. */
        public nGold: number;

        /** AssetUpdate nMoney. */
        public nMoney: number;

        /** AssetUpdate sAssets. */
        public sAssets: string;

        /**
         * Creates a new AssetUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AssetUpdate instance
         */
        public static create(properties?: gameMsg.IAssetUpdate): gameMsg.AssetUpdate;

        /**
         * Encodes the specified AssetUpdate message. Does not implicitly {@link gameMsg.AssetUpdate.verify|verify} messages.
         * @param message AssetUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IAssetUpdate, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AssetUpdate message, length delimited. Does not implicitly {@link gameMsg.AssetUpdate.verify|verify} messages.
         * @param message AssetUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IAssetUpdate, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AssetUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AssetUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.AssetUpdate;

        /**
         * Decodes an AssetUpdate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AssetUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.AssetUpdate;

        /**
         * Verifies an AssetUpdate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AssetUpdate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AssetUpdate
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.AssetUpdate;

        /**
         * Creates a plain object from an AssetUpdate message. Also converts values to other types if specified.
         * @param message AssetUpdate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.AssetUpdate, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AssetUpdate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Good. */
    interface IGood {

        /** Good nID */
        nID: number;

        /** Good nCount */
        nCount: number;
    }

    /** Represents a Good. */
    class Good implements IGood {

        /**
         * Constructs a new Good.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IGood);

        /** Good nID. */
        public nID: number;

        /** Good nCount. */
        public nCount: number;

        /**
         * Creates a new Good instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Good instance
         */
        public static create(properties?: gameMsg.IGood): gameMsg.Good;

        /**
         * Encodes the specified Good message. Does not implicitly {@link gameMsg.Good.verify|verify} messages.
         * @param message Good message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IGood, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Good message, length delimited. Does not implicitly {@link gameMsg.Good.verify|verify} messages.
         * @param message Good message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IGood, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Good message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Good
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.Good;

        /**
         * Decodes a Good message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Good
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.Good;

        /**
         * Verifies a Good message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Good message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Good
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.Good;

        /**
         * Creates a plain object from a Good message. Also converts values to other types if specified.
         * @param message Good
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.Good, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Good to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BuyRequest. */
    interface IBuyRequest {

        /** BuyRequest nUserID */
        nUserID: string;

        /** BuyRequest goods */
        goods?: (gameMsg.IGood[]|null);
    }

    /** Represents a BuyRequest. */
    class BuyRequest implements IBuyRequest {

        /**
         * Constructs a new BuyRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IBuyRequest);

        /** BuyRequest nUserID. */
        public nUserID: string;

        /** BuyRequest goods. */
        public goods: gameMsg.IGood[];

        /**
         * Creates a new BuyRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BuyRequest instance
         */
        public static create(properties?: gameMsg.IBuyRequest): gameMsg.BuyRequest;

        /**
         * Encodes the specified BuyRequest message. Does not implicitly {@link gameMsg.BuyRequest.verify|verify} messages.
         * @param message BuyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IBuyRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BuyRequest message, length delimited. Does not implicitly {@link gameMsg.BuyRequest.verify|verify} messages.
         * @param message BuyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IBuyRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BuyRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BuyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.BuyRequest;

        /**
         * Decodes a BuyRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BuyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.BuyRequest;

        /**
         * Verifies a BuyRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BuyRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BuyRequest
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.BuyRequest;

        /**
         * Creates a plain object from a BuyRequest message. Also converts values to other types if specified.
         * @param message BuyRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.BuyRequest, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BuyRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BuyResponse. */
    interface IBuyResponse {

        /** BuyResponse newAssets */
        newAssets?: (gameMsg.IAssetUpdate|null);
    }

    /** Represents a BuyResponse. */
    class BuyResponse implements IBuyResponse {

        /**
         * Constructs a new BuyResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IBuyResponse);

        /** BuyResponse newAssets. */
        public newAssets?: (gameMsg.IAssetUpdate|null);

        /**
         * Creates a new BuyResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BuyResponse instance
         */
        public static create(properties?: gameMsg.IBuyResponse): gameMsg.BuyResponse;

        /**
         * Encodes the specified BuyResponse message. Does not implicitly {@link gameMsg.BuyResponse.verify|verify} messages.
         * @param message BuyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IBuyResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BuyResponse message, length delimited. Does not implicitly {@link gameMsg.BuyResponse.verify|verify} messages.
         * @param message BuyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IBuyResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BuyResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BuyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.BuyResponse;

        /**
         * Decodes a BuyResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BuyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.BuyResponse;

        /**
         * Verifies a BuyResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BuyResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BuyResponse
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.BuyResponse;

        /**
         * Creates a plain object from a BuyResponse message. Also converts values to other types if specified.
         * @param message BuyResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.BuyResponse, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BuyResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateRoomRequest. */
    interface ICreateRoomRequest {

        /** CreateRoomRequest sID */
        sID: string;
    }

    /** Represents a CreateRoomRequest. */
    class CreateRoomRequest implements ICreateRoomRequest {

        /**
         * Constructs a new CreateRoomRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.ICreateRoomRequest);

        /** CreateRoomRequest sID. */
        public sID: string;

        /**
         * Creates a new CreateRoomRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateRoomRequest instance
         */
        public static create(properties?: gameMsg.ICreateRoomRequest): gameMsg.CreateRoomRequest;

        /**
         * Encodes the specified CreateRoomRequest message. Does not implicitly {@link gameMsg.CreateRoomRequest.verify|verify} messages.
         * @param message CreateRoomRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.ICreateRoomRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CreateRoomRequest message, length delimited. Does not implicitly {@link gameMsg.CreateRoomRequest.verify|verify} messages.
         * @param message CreateRoomRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.ICreateRoomRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CreateRoomRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.CreateRoomRequest;

        /**
         * Decodes a CreateRoomRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.CreateRoomRequest;

        /**
         * Verifies a CreateRoomRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateRoomRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateRoomRequest
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.CreateRoomRequest;

        /**
         * Creates a plain object from a CreateRoomRequest message. Also converts values to other types if specified.
         * @param message CreateRoomRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.CreateRoomRequest, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateRoomRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateRoomResponse. */
    interface ICreateRoomResponse {

        /** CreateRoomResponse sRoomID */
        sRoomID: string;
    }

    /** Represents a CreateRoomResponse. */
    class CreateRoomResponse implements ICreateRoomResponse {

        /**
         * Constructs a new CreateRoomResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.ICreateRoomResponse);

        /** CreateRoomResponse sRoomID. */
        public sRoomID: string;

        /**
         * Creates a new CreateRoomResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateRoomResponse instance
         */
        public static create(properties?: gameMsg.ICreateRoomResponse): gameMsg.CreateRoomResponse;

        /**
         * Encodes the specified CreateRoomResponse message. Does not implicitly {@link gameMsg.CreateRoomResponse.verify|verify} messages.
         * @param message CreateRoomResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.ICreateRoomResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CreateRoomResponse message, length delimited. Does not implicitly {@link gameMsg.CreateRoomResponse.verify|verify} messages.
         * @param message CreateRoomResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.ICreateRoomResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CreateRoomResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.CreateRoomResponse;

        /**
         * Decodes a CreateRoomResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.CreateRoomResponse;

        /**
         * Verifies a CreateRoomResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateRoomResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateRoomResponse
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.CreateRoomResponse;

        /**
         * Creates a plain object from a CreateRoomResponse message. Also converts values to other types if specified.
         * @param message CreateRoomResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.CreateRoomResponse, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateRoomResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RankEndGameData. */
    interface IRankEndGameData {

        /** RankEndGameData sGamerID */
        sGamerID: string;

        /** RankEndGameData nRank */
        nRank: number;

        /** RankEndGameData nTime */
        nTime: number;

        /** RankEndGameData nGold */
        nGold: number;

        /** RankEndGameData nLevel */
        nLevel: number;
    }

    /** Represents a RankEndGameData. */
    class RankEndGameData implements IRankEndGameData {

        /**
         * Constructs a new RankEndGameData.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IRankEndGameData);

        /** RankEndGameData sGamerID. */
        public sGamerID: string;

        /** RankEndGameData nRank. */
        public nRank: number;

        /** RankEndGameData nTime. */
        public nTime: number;

        /** RankEndGameData nGold. */
        public nGold: number;

        /** RankEndGameData nLevel. */
        public nLevel: number;

        /**
         * Creates a new RankEndGameData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RankEndGameData instance
         */
        public static create(properties?: gameMsg.IRankEndGameData): gameMsg.RankEndGameData;

        /**
         * Encodes the specified RankEndGameData message. Does not implicitly {@link gameMsg.RankEndGameData.verify|verify} messages.
         * @param message RankEndGameData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IRankEndGameData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RankEndGameData message, length delimited. Does not implicitly {@link gameMsg.RankEndGameData.verify|verify} messages.
         * @param message RankEndGameData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IRankEndGameData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RankEndGameData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RankEndGameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.RankEndGameData;

        /**
         * Decodes a RankEndGameData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RankEndGameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.RankEndGameData;

        /**
         * Verifies a RankEndGameData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RankEndGameData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RankEndGameData
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.RankEndGameData;

        /**
         * Creates a plain object from a RankEndGameData message. Also converts values to other types if specified.
         * @param message RankEndGameData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.RankEndGameData, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RankEndGameData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EndGameRequest. */
    interface IEndGameRequest {

        /** EndGameRequest sID */
        sID: string;

        /** EndGameRequest sRoomID */
        sRoomID: string;
    }

    /** Represents an EndGameRequest. */
    class EndGameRequest implements IEndGameRequest {

        /**
         * Constructs a new EndGameRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IEndGameRequest);

        /** EndGameRequest sID. */
        public sID: string;

        /** EndGameRequest sRoomID. */
        public sRoomID: string;

        /**
         * Creates a new EndGameRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EndGameRequest instance
         */
        public static create(properties?: gameMsg.IEndGameRequest): gameMsg.EndGameRequest;

        /**
         * Encodes the specified EndGameRequest message. Does not implicitly {@link gameMsg.EndGameRequest.verify|verify} messages.
         * @param message EndGameRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IEndGameRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified EndGameRequest message, length delimited. Does not implicitly {@link gameMsg.EndGameRequest.verify|verify} messages.
         * @param message EndGameRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IEndGameRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an EndGameRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EndGameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.EndGameRequest;

        /**
         * Decodes an EndGameRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EndGameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.EndGameRequest;

        /**
         * Verifies an EndGameRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EndGameRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EndGameRequest
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.EndGameRequest;

        /**
         * Creates a plain object from an EndGameRequest message. Also converts values to other types if specified.
         * @param message EndGameRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.EndGameRequest, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EndGameRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EndGameResponse. */
    interface IEndGameResponse {

        /** EndGameResponse sGamerID */
        sGamerID: string;

        /** EndGameResponse nRank */
        nRank: number;
    }

    /** Represents an EndGameResponse. */
    class EndGameResponse implements IEndGameResponse {

        /**
         * Constructs a new EndGameResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IEndGameResponse);

        /** EndGameResponse sGamerID. */
        public sGamerID: string;

        /** EndGameResponse nRank. */
        public nRank: number;

        /**
         * Creates a new EndGameResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EndGameResponse instance
         */
        public static create(properties?: gameMsg.IEndGameResponse): gameMsg.EndGameResponse;

        /**
         * Encodes the specified EndGameResponse message. Does not implicitly {@link gameMsg.EndGameResponse.verify|verify} messages.
         * @param message EndGameResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IEndGameResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified EndGameResponse message, length delimited. Does not implicitly {@link gameMsg.EndGameResponse.verify|verify} messages.
         * @param message EndGameResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IEndGameResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an EndGameResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EndGameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.EndGameResponse;

        /**
         * Decodes an EndGameResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EndGameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.EndGameResponse;

        /**
         * Verifies an EndGameResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EndGameResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EndGameResponse
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.EndGameResponse;

        /**
         * Creates a plain object from an EndGameResponse message. Also converts values to other types if specified.
         * @param message EndGameResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.EndGameResponse, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EndGameResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EndGameNotify. */
    interface IEndGameNotify {

        /** EndGameNotify sRoomID */
        sRoomID: string;

        /** EndGameNotify rankEndGameDatas */
        rankEndGameDatas?: (gameMsg.IRankEndGameData[]|null);
    }

    /** Represents an EndGameNotify. */
    class EndGameNotify implements IEndGameNotify {

        /**
         * Constructs a new EndGameNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IEndGameNotify);

        /** EndGameNotify sRoomID. */
        public sRoomID: string;

        /** EndGameNotify rankEndGameDatas. */
        public rankEndGameDatas: gameMsg.IRankEndGameData[];

        /**
         * Creates a new EndGameNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EndGameNotify instance
         */
        public static create(properties?: gameMsg.IEndGameNotify): gameMsg.EndGameNotify;

        /**
         * Encodes the specified EndGameNotify message. Does not implicitly {@link gameMsg.EndGameNotify.verify|verify} messages.
         * @param message EndGameNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IEndGameNotify, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified EndGameNotify message, length delimited. Does not implicitly {@link gameMsg.EndGameNotify.verify|verify} messages.
         * @param message EndGameNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IEndGameNotify, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an EndGameNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EndGameNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.EndGameNotify;

        /**
         * Decodes an EndGameNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EndGameNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.EndGameNotify;

        /**
         * Verifies an EndGameNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EndGameNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EndGameNotify
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.EndGameNotify;

        /**
         * Creates a plain object from an EndGameNotify message. Also converts values to other types if specified.
         * @param message EndGameNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.EndGameNotify, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EndGameNotify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OverTimeNotify. */
    interface IOverTimeNotify {

        /** OverTimeNotify sGamerID */
        sGamerID: string;

        /** OverTimeNotify nRank */
        nRank: number;
    }

    /** Represents an OverTimeNotify. */
    class OverTimeNotify implements IOverTimeNotify {

        /**
         * Constructs a new OverTimeNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IOverTimeNotify);

        /** OverTimeNotify sGamerID. */
        public sGamerID: string;

        /** OverTimeNotify nRank. */
        public nRank: number;

        /**
         * Creates a new OverTimeNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OverTimeNotify instance
         */
        public static create(properties?: gameMsg.IOverTimeNotify): gameMsg.OverTimeNotify;

        /**
         * Encodes the specified OverTimeNotify message. Does not implicitly {@link gameMsg.OverTimeNotify.verify|verify} messages.
         * @param message OverTimeNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IOverTimeNotify, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OverTimeNotify message, length delimited. Does not implicitly {@link gameMsg.OverTimeNotify.verify|verify} messages.
         * @param message OverTimeNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IOverTimeNotify, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an OverTimeNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OverTimeNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.OverTimeNotify;

        /**
         * Decodes an OverTimeNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OverTimeNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.OverTimeNotify;

        /**
         * Verifies an OverTimeNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OverTimeNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OverTimeNotify
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.OverTimeNotify;

        /**
         * Creates a plain object from an OverTimeNotify message. Also converts values to other types if specified.
         * @param message OverTimeNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.OverTimeNotify, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OverTimeNotify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** ErrorCode enum. */
    enum ErrorCode {
        success = 1,
        userinvaild = 2,
        pwderror = 3,
        moneyerror = 4,
        gateunlock = 5,
        ptomptnone = 6,
        maxgates = 7
    }

    /** Properties of a GameTimeTickNotify. */
    interface IGameTimeTickNotify {

        /** GameTimeTickNotify nLeft */
        nLeft: number;
    }

    /** Represents a GameTimeTickNotify. */
    class GameTimeTickNotify implements IGameTimeTickNotify {

        /**
         * Constructs a new GameTimeTickNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IGameTimeTickNotify);

        /** GameTimeTickNotify nLeft. */
        public nLeft: number;

        /**
         * Creates a new GameTimeTickNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameTimeTickNotify instance
         */
        public static create(properties?: gameMsg.IGameTimeTickNotify): gameMsg.GameTimeTickNotify;

        /**
         * Encodes the specified GameTimeTickNotify message. Does not implicitly {@link gameMsg.GameTimeTickNotify.verify|verify} messages.
         * @param message GameTimeTickNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IGameTimeTickNotify, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GameTimeTickNotify message, length delimited. Does not implicitly {@link gameMsg.GameTimeTickNotify.verify|verify} messages.
         * @param message GameTimeTickNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IGameTimeTickNotify, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GameTimeTickNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameTimeTickNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.GameTimeTickNotify;

        /**
         * Decodes a GameTimeTickNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameTimeTickNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.GameTimeTickNotify;

        /**
         * Verifies a GameTimeTickNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameTimeTickNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameTimeTickNotify
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.GameTimeTickNotify;

        /**
         * Creates a plain object from a GameTimeTickNotify message. Also converts values to other types if specified.
         * @param message GameTimeTickNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.GameTimeTickNotify, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameTimeTickNotify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Gamer. */
    interface IGamer {

        /** Gamer sID */
        sID: string;

        /** Gamer sHeadImg */
        sHeadImg?: (string|null);

        /** Gamer sNick */
        sNick?: (string|null);

        /** Gamer nRankLevel */
        nRankLevel?: (number|null);
    }

    /** Represents a Gamer. */
    class Gamer implements IGamer {

        /**
         * Constructs a new Gamer.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IGamer);

        /** Gamer sID. */
        public sID: string;

        /** Gamer sHeadImg. */
        public sHeadImg: string;

        /** Gamer sNick. */
        public sNick: string;

        /** Gamer nRankLevel. */
        public nRankLevel: number;

        /**
         * Creates a new Gamer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Gamer instance
         */
        public static create(properties?: gameMsg.IGamer): gameMsg.Gamer;

        /**
         * Encodes the specified Gamer message. Does not implicitly {@link gameMsg.Gamer.verify|verify} messages.
         * @param message Gamer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IGamer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Gamer message, length delimited. Does not implicitly {@link gameMsg.Gamer.verify|verify} messages.
         * @param message Gamer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IGamer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Gamer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Gamer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.Gamer;

        /**
         * Decodes a Gamer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Gamer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.Gamer;

        /**
         * Verifies a Gamer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Gamer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Gamer
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.Gamer;

        /**
         * Creates a plain object from a Gamer message. Also converts values to other types if specified.
         * @param message Gamer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.Gamer, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Gamer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Room. */
    interface IRoom {

        /** Room gamers */
        gamers?: (gameMsg.IGamer[]|null);

        /** Room sRoomID */
        sRoomID: string;

        /** Room sBossID */
        sBossID: string;
    }

    /** Represents a Room. */
    class Room implements IRoom {

        /**
         * Constructs a new Room.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IRoom);

        /** Room gamers. */
        public gamers: gameMsg.IGamer[];

        /** Room sRoomID. */
        public sRoomID: string;

        /** Room sBossID. */
        public sBossID: string;

        /**
         * Creates a new Room instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Room instance
         */
        public static create(properties?: gameMsg.IRoom): gameMsg.Room;

        /**
         * Encodes the specified Room message. Does not implicitly {@link gameMsg.Room.verify|verify} messages.
         * @param message Room message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IRoom, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Room message, length delimited. Does not implicitly {@link gameMsg.Room.verify|verify} messages.
         * @param message Room message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IRoom, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Room message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.Room;

        /**
         * Decodes a Room message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.Room;

        /**
         * Verifies a Room message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Room message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Room
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.Room;

        /**
         * Creates a plain object from a Room message. Also converts values to other types if specified.
         * @param message Room
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.Room, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Room to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a JoinRoomRequest. */
    interface IJoinRoomRequest {

        /** JoinRoomRequest sID */
        sID: string;

        /** JoinRoomRequest sRoomID */
        sRoomID: string;
    }

    /** Represents a JoinRoomRequest. */
    class JoinRoomRequest implements IJoinRoomRequest {

        /**
         * Constructs a new JoinRoomRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IJoinRoomRequest);

        /** JoinRoomRequest sID. */
        public sID: string;

        /** JoinRoomRequest sRoomID. */
        public sRoomID: string;

        /**
         * Creates a new JoinRoomRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinRoomRequest instance
         */
        public static create(properties?: gameMsg.IJoinRoomRequest): gameMsg.JoinRoomRequest;

        /**
         * Encodes the specified JoinRoomRequest message. Does not implicitly {@link gameMsg.JoinRoomRequest.verify|verify} messages.
         * @param message JoinRoomRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IJoinRoomRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified JoinRoomRequest message, length delimited. Does not implicitly {@link gameMsg.JoinRoomRequest.verify|verify} messages.
         * @param message JoinRoomRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IJoinRoomRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a JoinRoomRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.JoinRoomRequest;

        /**
         * Decodes a JoinRoomRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.JoinRoomRequest;

        /**
         * Verifies a JoinRoomRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinRoomRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinRoomRequest
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.JoinRoomRequest;

        /**
         * Creates a plain object from a JoinRoomRequest message. Also converts values to other types if specified.
         * @param message JoinRoomRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.JoinRoomRequest, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinRoomRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a JoinRoomResponse. */
    interface IJoinRoomResponse {

        /** JoinRoomResponse joinRoom */
        joinRoom: gameMsg.IRoom;
    }

    /** Represents a JoinRoomResponse. */
    class JoinRoomResponse implements IJoinRoomResponse {

        /**
         * Constructs a new JoinRoomResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IJoinRoomResponse);

        /** JoinRoomResponse joinRoom. */
        public joinRoom: gameMsg.IRoom;

        /**
         * Creates a new JoinRoomResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinRoomResponse instance
         */
        public static create(properties?: gameMsg.IJoinRoomResponse): gameMsg.JoinRoomResponse;

        /**
         * Encodes the specified JoinRoomResponse message. Does not implicitly {@link gameMsg.JoinRoomResponse.verify|verify} messages.
         * @param message JoinRoomResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IJoinRoomResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified JoinRoomResponse message, length delimited. Does not implicitly {@link gameMsg.JoinRoomResponse.verify|verify} messages.
         * @param message JoinRoomResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IJoinRoomResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a JoinRoomResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.JoinRoomResponse;

        /**
         * Decodes a JoinRoomResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.JoinRoomResponse;

        /**
         * Verifies a JoinRoomResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinRoomResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinRoomResponse
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.JoinRoomResponse;

        /**
         * Creates a plain object from a JoinRoomResponse message. Also converts values to other types if specified.
         * @param message JoinRoomResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.JoinRoomResponse, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinRoomResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a JoinRoomNotify. */
    interface IJoinRoomNotify {

        /** JoinRoomNotify joinGamer */
        joinGamer: gameMsg.IGamer;
    }

    /** Represents a JoinRoomNotify. */
    class JoinRoomNotify implements IJoinRoomNotify {

        /**
         * Constructs a new JoinRoomNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IJoinRoomNotify);

        /** JoinRoomNotify joinGamer. */
        public joinGamer: gameMsg.IGamer;

        /**
         * Creates a new JoinRoomNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinRoomNotify instance
         */
        public static create(properties?: gameMsg.IJoinRoomNotify): gameMsg.JoinRoomNotify;

        /**
         * Encodes the specified JoinRoomNotify message. Does not implicitly {@link gameMsg.JoinRoomNotify.verify|verify} messages.
         * @param message JoinRoomNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IJoinRoomNotify, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified JoinRoomNotify message, length delimited. Does not implicitly {@link gameMsg.JoinRoomNotify.verify|verify} messages.
         * @param message JoinRoomNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IJoinRoomNotify, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a JoinRoomNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinRoomNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.JoinRoomNotify;

        /**
         * Decodes a JoinRoomNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinRoomNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.JoinRoomNotify;

        /**
         * Verifies a JoinRoomNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinRoomNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinRoomNotify
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.JoinRoomNotify;

        /**
         * Creates a plain object from a JoinRoomNotify message. Also converts values to other types if specified.
         * @param message JoinRoomNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.JoinRoomNotify, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinRoomNotify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LeaveRoomRequest. */
    interface ILeaveRoomRequest {

        /** LeaveRoomRequest sID */
        sID: string;

        /** LeaveRoomRequest sRoomID */
        sRoomID: string;
    }

    /** Represents a LeaveRoomRequest. */
    class LeaveRoomRequest implements ILeaveRoomRequest {

        /**
         * Constructs a new LeaveRoomRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.ILeaveRoomRequest);

        /** LeaveRoomRequest sID. */
        public sID: string;

        /** LeaveRoomRequest sRoomID. */
        public sRoomID: string;

        /**
         * Creates a new LeaveRoomRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LeaveRoomRequest instance
         */
        public static create(properties?: gameMsg.ILeaveRoomRequest): gameMsg.LeaveRoomRequest;

        /**
         * Encodes the specified LeaveRoomRequest message. Does not implicitly {@link gameMsg.LeaveRoomRequest.verify|verify} messages.
         * @param message LeaveRoomRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.ILeaveRoomRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified LeaveRoomRequest message, length delimited. Does not implicitly {@link gameMsg.LeaveRoomRequest.verify|verify} messages.
         * @param message LeaveRoomRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.ILeaveRoomRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LeaveRoomRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LeaveRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.LeaveRoomRequest;

        /**
         * Decodes a LeaveRoomRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LeaveRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.LeaveRoomRequest;

        /**
         * Verifies a LeaveRoomRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LeaveRoomRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LeaveRoomRequest
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.LeaveRoomRequest;

        /**
         * Creates a plain object from a LeaveRoomRequest message. Also converts values to other types if specified.
         * @param message LeaveRoomRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.LeaveRoomRequest, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LeaveRoomRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LeaveRoomResponse. */
    interface ILeaveRoomResponse {

        /** LeaveRoomResponse nErrorCode */
        nErrorCode: number;
    }

    /** Represents a LeaveRoomResponse. */
    class LeaveRoomResponse implements ILeaveRoomResponse {

        /**
         * Constructs a new LeaveRoomResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.ILeaveRoomResponse);

        /** LeaveRoomResponse nErrorCode. */
        public nErrorCode: number;

        /**
         * Creates a new LeaveRoomResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LeaveRoomResponse instance
         */
        public static create(properties?: gameMsg.ILeaveRoomResponse): gameMsg.LeaveRoomResponse;

        /**
         * Encodes the specified LeaveRoomResponse message. Does not implicitly {@link gameMsg.LeaveRoomResponse.verify|verify} messages.
         * @param message LeaveRoomResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.ILeaveRoomResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified LeaveRoomResponse message, length delimited. Does not implicitly {@link gameMsg.LeaveRoomResponse.verify|verify} messages.
         * @param message LeaveRoomResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.ILeaveRoomResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LeaveRoomResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LeaveRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.LeaveRoomResponse;

        /**
         * Decodes a LeaveRoomResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LeaveRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.LeaveRoomResponse;

        /**
         * Verifies a LeaveRoomResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LeaveRoomResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LeaveRoomResponse
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.LeaveRoomResponse;

        /**
         * Creates a plain object from a LeaveRoomResponse message. Also converts values to other types if specified.
         * @param message LeaveRoomResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.LeaveRoomResponse, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LeaveRoomResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LeaveRoomNotify. */
    interface ILeaveRoomNotify {

        /** LeaveRoomNotify sID */
        sID: string;

        /** LeaveRoomNotify sRoomID */
        sRoomID: string;
    }

    /** Represents a LeaveRoomNotify. */
    class LeaveRoomNotify implements ILeaveRoomNotify {

        /**
         * Constructs a new LeaveRoomNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.ILeaveRoomNotify);

        /** LeaveRoomNotify sID. */
        public sID: string;

        /** LeaveRoomNotify sRoomID. */
        public sRoomID: string;

        /**
         * Creates a new LeaveRoomNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LeaveRoomNotify instance
         */
        public static create(properties?: gameMsg.ILeaveRoomNotify): gameMsg.LeaveRoomNotify;

        /**
         * Encodes the specified LeaveRoomNotify message. Does not implicitly {@link gameMsg.LeaveRoomNotify.verify|verify} messages.
         * @param message LeaveRoomNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.ILeaveRoomNotify, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified LeaveRoomNotify message, length delimited. Does not implicitly {@link gameMsg.LeaveRoomNotify.verify|verify} messages.
         * @param message LeaveRoomNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.ILeaveRoomNotify, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LeaveRoomNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LeaveRoomNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.LeaveRoomNotify;

        /**
         * Decodes a LeaveRoomNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LeaveRoomNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.LeaveRoomNotify;

        /**
         * Verifies a LeaveRoomNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LeaveRoomNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LeaveRoomNotify
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.LeaveRoomNotify;

        /**
         * Creates a plain object from a LeaveRoomNotify message. Also converts values to other types if specified.
         * @param message LeaveRoomNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.LeaveRoomNotify, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LeaveRoomNotify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a User. */
    interface IUser {

        /** User nUserID */
        nUserID: string;

        /** User sNick */
        sNick?: (string|null);

        /** User nExp */
        nExp?: (number|null);

        /** User nGold */
        nGold?: (number|null);

        /** User sHeadimg */
        sHeadimg?: (string|null);

        /** User starNum */
        starNum?: (number|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IUser);

        /** User nUserID. */
        public nUserID: string;

        /** User sNick. */
        public sNick: string;

        /** User nExp. */
        public nExp: number;

        /** User nGold. */
        public nGold: number;

        /** User sHeadimg. */
        public sHeadimg: string;

        /** User starNum. */
        public starNum: number;

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: gameMsg.IUser): gameMsg.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link gameMsg.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IUser, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link gameMsg.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IUser, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.User, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Gate. */
    interface IGate {

        /** Gate id */
        id: number;

        /** Gate starNum */
        starNum: number;
    }

    /** Represents a Gate. */
    class Gate implements IGate {

        /**
         * Constructs a new Gate.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IGate);

        /** Gate id. */
        public id: number;

        /** Gate starNum. */
        public starNum: number;

        /**
         * Creates a new Gate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Gate instance
         */
        public static create(properties?: gameMsg.IGate): gameMsg.Gate;

        /**
         * Encodes the specified Gate message. Does not implicitly {@link gameMsg.Gate.verify|verify} messages.
         * @param message Gate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IGate, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Gate message, length delimited. Does not implicitly {@link gameMsg.Gate.verify|verify} messages.
         * @param message Gate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IGate, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Gate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Gate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.Gate;

        /**
         * Decodes a Gate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Gate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.Gate;

        /**
         * Verifies a Gate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Gate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Gate
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.Gate;

        /**
         * Creates a plain object from a Gate message. Also converts values to other types if specified.
         * @param message Gate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.Gate, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Gate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginRequest. */
    interface ILoginRequest {

        /** LoginRequest sID */
        sID: string;

        /** LoginRequest sNick */
        sNick?: (string|null);

        /** LoginRequest sHeadimg */
        sHeadimg?: (string|null);
    }

    /** Represents a LoginRequest. */
    class LoginRequest implements ILoginRequest {

        /**
         * Constructs a new LoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.ILoginRequest);

        /** LoginRequest sID. */
        public sID: string;

        /** LoginRequest sNick. */
        public sNick: string;

        /** LoginRequest sHeadimg. */
        public sHeadimg: string;

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRequest instance
         */
        public static create(properties?: gameMsg.ILoginRequest): gameMsg.LoginRequest;

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link gameMsg.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.ILoginRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link gameMsg.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.ILoginRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.LoginRequest;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.LoginRequest;

        /**
         * Verifies a LoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRequest
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.LoginRequest;

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @param message LoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.LoginRequest, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginResponse. */
    interface ILoginResponse {

        /** LoginResponse requester */
        requester?: (gameMsg.IUser|null);

        /** LoginResponse gates */
        gates?: (gameMsg.IGate[]|null);

        /** LoginResponse nExp */
        nExp?: (number|null);

        /** LoginResponse nGold */
        nGold?: (number|null);

        /** LoginResponse nTotalStar */
        nTotalStar?: (number|null);

        /** LoginResponse nTotalGate */
        nTotalGate?: (number|null);
    }

    /** Represents a LoginResponse. */
    class LoginResponse implements ILoginResponse {

        /**
         * Constructs a new LoginResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.ILoginResponse);

        /** LoginResponse requester. */
        public requester?: (gameMsg.IUser|null);

        /** LoginResponse gates. */
        public gates: gameMsg.IGate[];

        /** LoginResponse nExp. */
        public nExp: number;

        /** LoginResponse nGold. */
        public nGold: number;

        /** LoginResponse nTotalStar. */
        public nTotalStar: number;

        /** LoginResponse nTotalGate. */
        public nTotalGate: number;

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginResponse instance
         */
        public static create(properties?: gameMsg.ILoginResponse): gameMsg.LoginResponse;

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link gameMsg.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.ILoginResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link gameMsg.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.ILoginResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.LoginResponse;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.LoginResponse;

        /**
         * Verifies a LoginResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResponse
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.LoginResponse;

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @param message LoginResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.LoginResponse, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** EnumMsg enum. */
    enum EnumMsg {
        loginrequest = 1,
        loginresponse = 2,
        playbeginrequest = 3,
        playbeginresponse = 4,
        playendrequest = 5,
        playendresponse = 6,
        seeadrequest = 7,
        seeadresponse = 8,
        usepromptrequest = 9,
        usepromptresponse = 10,
        rankrequest = 11,
        rankresponse = 12,
        createroomrequest = 13,
        createroomresponse = 14,
        joinroomrequest = 15,
        joinroomresponse = 16,
        joinroomnotify = 17,
        leaveroomrequest = 18,
        leaveroomresponse = 19,
        leaveroomnotify = 20,
        startgamenotify = 21,
        endgamerequest = 22,
        endgameresponse = 23,
        endgamenotify = 24,
        gametimeticknotify = 25,
        startgamerequest = 26,
        startgameresponse = 27,
        matchgamerequest = 28,
        matchgameresponse = 29,
        usetoolrequest = 30,
        usetoolresponse = 31,
        usetoolnotify = 32,
        overtimenotify = 33,
        buyrequest = 34,
        buyresponse = 35,
        playblockaddrequest = 36,
        playblockaddresponse = 37,
        playblockdeleterequest = 38,
        playblockdeleteresponse = 39,
        playblocknotify = 40
    }

    /** Properties of a Request. */
    interface IRequest {

        /** Request loginRequest */
        loginRequest?: (gameMsg.ILoginRequest|null);

        /** Request playBeginRequest */
        playBeginRequest?: (gameMsg.IPlayBeginRequest|null);

        /** Request playEndRequest */
        playEndRequest?: (gameMsg.IPlayEndRequest|null);

        /** Request seeAdRequest */
        seeAdRequest?: (gameMsg.ISeeAdRequest|null);

        /** Request usePromptRequest */
        usePromptRequest?: (gameMsg.IUsePromptRequest|null);

        /** Request rankRequest */
        rankRequest?: (gameMsg.IRankRequest|null);

        /** Request createRoomRequest */
        createRoomRequest?: (gameMsg.ICreateRoomRequest|null);

        /** Request joinRoomRequest */
        joinRoomRequest?: (gameMsg.IJoinRoomRequest|null);

        /** Request leaveRoomRequest */
        leaveRoomRequest?: (gameMsg.ILeaveRoomRequest|null);

        /** Request endGameRequest */
        endGameRequest?: (gameMsg.IEndGameRequest|null);

        /** Request startGameRequest */
        startGameRequest?: (gameMsg.IStartGameRequest|null);

        /** Request matchGameRequest */
        matchGameRequest?: (gameMsg.IMatchGameRequest|null);

        /** Request useToolRequest */
        useToolRequest?: (gameMsg.IUseToolRequest|null);

        /** Request buyRequest */
        buyRequest?: (gameMsg.IBuyRequest|null);

        /** Request playBlockAddRequest */
        playBlockAddRequest?: (gameMsg.IPlayBlockAddRequest|null);

        /** Request playBlockDeleteRequest */
        playBlockDeleteRequest?: (gameMsg.IPlayBlockDeleteRequest|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IRequest);

        /** Request loginRequest. */
        public loginRequest?: (gameMsg.ILoginRequest|null);

        /** Request playBeginRequest. */
        public playBeginRequest?: (gameMsg.IPlayBeginRequest|null);

        /** Request playEndRequest. */
        public playEndRequest?: (gameMsg.IPlayEndRequest|null);

        /** Request seeAdRequest. */
        public seeAdRequest?: (gameMsg.ISeeAdRequest|null);

        /** Request usePromptRequest. */
        public usePromptRequest?: (gameMsg.IUsePromptRequest|null);

        /** Request rankRequest. */
        public rankRequest?: (gameMsg.IRankRequest|null);

        /** Request createRoomRequest. */
        public createRoomRequest?: (gameMsg.ICreateRoomRequest|null);

        /** Request joinRoomRequest. */
        public joinRoomRequest?: (gameMsg.IJoinRoomRequest|null);

        /** Request leaveRoomRequest. */
        public leaveRoomRequest?: (gameMsg.ILeaveRoomRequest|null);

        /** Request endGameRequest. */
        public endGameRequest?: (gameMsg.IEndGameRequest|null);

        /** Request startGameRequest. */
        public startGameRequest?: (gameMsg.IStartGameRequest|null);

        /** Request matchGameRequest. */
        public matchGameRequest?: (gameMsg.IMatchGameRequest|null);

        /** Request useToolRequest. */
        public useToolRequest?: (gameMsg.IUseToolRequest|null);

        /** Request buyRequest. */
        public buyRequest?: (gameMsg.IBuyRequest|null);

        /** Request playBlockAddRequest. */
        public playBlockAddRequest?: (gameMsg.IPlayBlockAddRequest|null);

        /** Request playBlockDeleteRequest. */
        public playBlockDeleteRequest?: (gameMsg.IPlayBlockDeleteRequest|null);

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: gameMsg.IRequest): gameMsg.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link gameMsg.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link gameMsg.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.Request;

        /**
         * Verifies a Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Request
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.Request, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response nErrorCode */
        nErrorCode: gameMsg.ErrorCode;

        /** Response loginResponse */
        loginResponse?: (gameMsg.ILoginResponse|null);

        /** Response playBeginResponse */
        playBeginResponse?: (gameMsg.IPlayBeginResponse|null);

        /** Response playEndResponse */
        playEndResponse?: (gameMsg.IPlayEndResponse|null);

        /** Response seeAdResponse */
        seeAdResponse?: (gameMsg.ISeeAdResponse|null);

        /** Response usePromptResponse */
        usePromptResponse?: (gameMsg.IUsePromptResponse|null);

        /** Response rankResponse */
        rankResponse?: (gameMsg.IRankResponse|null);

        /** Response createRoomResponse */
        createRoomResponse?: (gameMsg.ICreateRoomResponse|null);

        /** Response joinRoomResponse */
        joinRoomResponse?: (gameMsg.IJoinRoomResponse|null);

        /** Response leaveRoomResponse */
        leaveRoomResponse?: (gameMsg.ILeaveRoomResponse|null);

        /** Response endGameResponse */
        endGameResponse?: (gameMsg.IEndGameResponse|null);

        /** Response startGameResponse */
        startGameResponse?: (gameMsg.IStartGameResponse|null);

        /** Response matchGameResponse */
        matchGameResponse?: (gameMsg.IMatchGameResponse|null);

        /** Response useToolResponse */
        useToolResponse?: (gameMsg.IUseToolResponse|null);

        /** Response buyResponse */
        buyResponse?: (gameMsg.IBuyResponse|null);

        /** Response playBlockAddResponse */
        playBlockAddResponse?: (gameMsg.IPlayBlockAddResponse|null);

        /** Response playBlockDeleteResponse */
        playBlockDeleteResponse?: (gameMsg.IPlayBlockDeleteResponse|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IResponse);

        /** Response nErrorCode. */
        public nErrorCode: gameMsg.ErrorCode;

        /** Response loginResponse. */
        public loginResponse?: (gameMsg.ILoginResponse|null);

        /** Response playBeginResponse. */
        public playBeginResponse?: (gameMsg.IPlayBeginResponse|null);

        /** Response playEndResponse. */
        public playEndResponse?: (gameMsg.IPlayEndResponse|null);

        /** Response seeAdResponse. */
        public seeAdResponse?: (gameMsg.ISeeAdResponse|null);

        /** Response usePromptResponse. */
        public usePromptResponse?: (gameMsg.IUsePromptResponse|null);

        /** Response rankResponse. */
        public rankResponse?: (gameMsg.IRankResponse|null);

        /** Response createRoomResponse. */
        public createRoomResponse?: (gameMsg.ICreateRoomResponse|null);

        /** Response joinRoomResponse. */
        public joinRoomResponse?: (gameMsg.IJoinRoomResponse|null);

        /** Response leaveRoomResponse. */
        public leaveRoomResponse?: (gameMsg.ILeaveRoomResponse|null);

        /** Response endGameResponse. */
        public endGameResponse?: (gameMsg.IEndGameResponse|null);

        /** Response startGameResponse. */
        public startGameResponse?: (gameMsg.IStartGameResponse|null);

        /** Response matchGameResponse. */
        public matchGameResponse?: (gameMsg.IMatchGameResponse|null);

        /** Response useToolResponse. */
        public useToolResponse?: (gameMsg.IUseToolResponse|null);

        /** Response buyResponse. */
        public buyResponse?: (gameMsg.IBuyResponse|null);

        /** Response playBlockAddResponse. */
        public playBlockAddResponse?: (gameMsg.IPlayBlockAddResponse|null);

        /** Response playBlockDeleteResponse. */
        public playBlockDeleteResponse?: (gameMsg.IPlayBlockDeleteResponse|null);

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: gameMsg.IResponse): gameMsg.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link gameMsg.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link gameMsg.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.Response;

        /**
         * Verifies a Response message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Response
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.Response, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Notify. */
    interface INotify {

        /** Notify joinRoomNotify */
        joinRoomNotify?: (gameMsg.IJoinRoomNotify|null);

        /** Notify leaveRoomNotify */
        leaveRoomNotify?: (gameMsg.ILeaveRoomNotify|null);

        /** Notify startGameNotify */
        startGameNotify?: (gameMsg.IStartGameNotify|null);

        /** Notify endGameNotify */
        endGameNotify?: (gameMsg.IEndGameNotify|null);

        /** Notify gameTimeTickNotify */
        gameTimeTickNotify?: (gameMsg.IGameTimeTickNotify|null);

        /** Notify useToolNotify */
        useToolNotify?: (gameMsg.IUseToolNotify|null);

        /** Notify overTimeNotify */
        overTimeNotify?: (gameMsg.IOverTimeNotify|null);

        /** Notify playBlockNotify */
        playBlockNotify?: (gameMsg.IPlayBlockNotify|null);
    }

    /** Represents a Notify. */
    class Notify implements INotify {

        /**
         * Constructs a new Notify.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.INotify);

        /** Notify joinRoomNotify. */
        public joinRoomNotify?: (gameMsg.IJoinRoomNotify|null);

        /** Notify leaveRoomNotify. */
        public leaveRoomNotify?: (gameMsg.ILeaveRoomNotify|null);

        /** Notify startGameNotify. */
        public startGameNotify?: (gameMsg.IStartGameNotify|null);

        /** Notify endGameNotify. */
        public endGameNotify?: (gameMsg.IEndGameNotify|null);

        /** Notify gameTimeTickNotify. */
        public gameTimeTickNotify?: (gameMsg.IGameTimeTickNotify|null);

        /** Notify useToolNotify. */
        public useToolNotify?: (gameMsg.IUseToolNotify|null);

        /** Notify overTimeNotify. */
        public overTimeNotify?: (gameMsg.IOverTimeNotify|null);

        /** Notify playBlockNotify. */
        public playBlockNotify?: (gameMsg.IPlayBlockNotify|null);

        /**
         * Creates a new Notify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Notify instance
         */
        public static create(properties?: gameMsg.INotify): gameMsg.Notify;

        /**
         * Encodes the specified Notify message. Does not implicitly {@link gameMsg.Notify.verify|verify} messages.
         * @param message Notify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.INotify, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Notify message, length delimited. Does not implicitly {@link gameMsg.Notify.verify|verify} messages.
         * @param message Notify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.INotify, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Notify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Notify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.Notify;

        /**
         * Decodes a Notify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Notify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.Notify;

        /**
         * Verifies a Notify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Notify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Notify
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.Notify;

        /**
         * Creates a plain object from a Notify message. Also converts values to other types if specified.
         * @param message Notify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.Notify, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Notify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Msg. */
    interface IMsg {

        /** Msg type */
        type: gameMsg.EnumMsg;

        /** Msg request */
        request?: (gameMsg.IRequest|null);

        /** Msg response */
        response?: (gameMsg.IResponse|null);

        /** Msg notify */
        notify?: (gameMsg.INotify|null);
    }

    /** Represents a Msg. */
    class Msg implements IMsg {

        /**
         * Constructs a new Msg.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IMsg);

        /** Msg type. */
        public type: gameMsg.EnumMsg;

        /** Msg request. */
        public request?: (gameMsg.IRequest|null);

        /** Msg response. */
        public response?: (gameMsg.IResponse|null);

        /** Msg notify. */
        public notify?: (gameMsg.INotify|null);

        /**
         * Creates a new Msg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Msg instance
         */
        public static create(properties?: gameMsg.IMsg): gameMsg.Msg;

        /**
         * Encodes the specified Msg message. Does not implicitly {@link gameMsg.Msg.verify|verify} messages.
         * @param message Msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Msg message, length delimited. Does not implicitly {@link gameMsg.Msg.verify|verify} messages.
         * @param message Msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Msg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.Msg;

        /**
         * Decodes a Msg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.Msg;

        /**
         * Verifies a Msg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Msg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Msg
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.Msg;

        /**
         * Creates a plain object from a Msg message. Also converts values to other types if specified.
         * @param message Msg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.Msg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Msg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayBeginRequest. */
    interface IPlayBeginRequest {

        /** PlayBeginRequest sID */
        sID: string;

        /** PlayBeginRequest gateID */
        gateID: number;
    }

    /** Represents a PlayBeginRequest. */
    class PlayBeginRequest implements IPlayBeginRequest {

        /**
         * Constructs a new PlayBeginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IPlayBeginRequest);

        /** PlayBeginRequest sID. */
        public sID: string;

        /** PlayBeginRequest gateID. */
        public gateID: number;

        /**
         * Creates a new PlayBeginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayBeginRequest instance
         */
        public static create(properties?: gameMsg.IPlayBeginRequest): gameMsg.PlayBeginRequest;

        /**
         * Encodes the specified PlayBeginRequest message. Does not implicitly {@link gameMsg.PlayBeginRequest.verify|verify} messages.
         * @param message PlayBeginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IPlayBeginRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayBeginRequest message, length delimited. Does not implicitly {@link gameMsg.PlayBeginRequest.verify|verify} messages.
         * @param message PlayBeginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IPlayBeginRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayBeginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayBeginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.PlayBeginRequest;

        /**
         * Decodes a PlayBeginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayBeginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.PlayBeginRequest;

        /**
         * Verifies a PlayBeginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayBeginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayBeginRequest
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.PlayBeginRequest;

        /**
         * Creates a plain object from a PlayBeginRequest message. Also converts values to other types if specified.
         * @param message PlayBeginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.PlayBeginRequest, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayBeginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayBeginResponse. */
    interface IPlayBeginResponse {

        /** PlayBeginResponse gateId */
        gateId: number;

        /** PlayBeginResponse nTopStar */
        nTopStar?: (number|null);

        /** PlayBeginResponse nPrompt */
        nPrompt?: (number|null);
    }

    /** Represents a PlayBeginResponse. */
    class PlayBeginResponse implements IPlayBeginResponse {

        /**
         * Constructs a new PlayBeginResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IPlayBeginResponse);

        /** PlayBeginResponse gateId. */
        public gateId: number;

        /** PlayBeginResponse nTopStar. */
        public nTopStar: number;

        /** PlayBeginResponse nPrompt. */
        public nPrompt: number;

        /**
         * Creates a new PlayBeginResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayBeginResponse instance
         */
        public static create(properties?: gameMsg.IPlayBeginResponse): gameMsg.PlayBeginResponse;

        /**
         * Encodes the specified PlayBeginResponse message. Does not implicitly {@link gameMsg.PlayBeginResponse.verify|verify} messages.
         * @param message PlayBeginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IPlayBeginResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayBeginResponse message, length delimited. Does not implicitly {@link gameMsg.PlayBeginResponse.verify|verify} messages.
         * @param message PlayBeginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IPlayBeginResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayBeginResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayBeginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.PlayBeginResponse;

        /**
         * Decodes a PlayBeginResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayBeginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.PlayBeginResponse;

        /**
         * Verifies a PlayBeginResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayBeginResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayBeginResponse
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.PlayBeginResponse;

        /**
         * Creates a plain object from a PlayBeginResponse message. Also converts values to other types if specified.
         * @param message PlayBeginResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.PlayBeginResponse, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayBeginResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayEndRequest. */
    interface IPlayEndRequest {

        /** PlayEndRequest sID */
        sID: string;

        /** PlayEndRequest gateID */
        gateID: number;
    }

    /** Represents a PlayEndRequest. */
    class PlayEndRequest implements IPlayEndRequest {

        /**
         * Constructs a new PlayEndRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IPlayEndRequest);

        /** PlayEndRequest sID. */
        public sID: string;

        /** PlayEndRequest gateID. */
        public gateID: number;

        /**
         * Creates a new PlayEndRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayEndRequest instance
         */
        public static create(properties?: gameMsg.IPlayEndRequest): gameMsg.PlayEndRequest;

        /**
         * Encodes the specified PlayEndRequest message. Does not implicitly {@link gameMsg.PlayEndRequest.verify|verify} messages.
         * @param message PlayEndRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IPlayEndRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayEndRequest message, length delimited. Does not implicitly {@link gameMsg.PlayEndRequest.verify|verify} messages.
         * @param message PlayEndRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IPlayEndRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayEndRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayEndRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.PlayEndRequest;

        /**
         * Decodes a PlayEndRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayEndRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.PlayEndRequest;

        /**
         * Verifies a PlayEndRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayEndRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayEndRequest
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.PlayEndRequest;

        /**
         * Creates a plain object from a PlayEndRequest message. Also converts values to other types if specified.
         * @param message PlayEndRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.PlayEndRequest, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayEndRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayEndResponse. */
    interface IPlayEndResponse {

        /** PlayEndResponse gateID */
        gateID: number;

        /** PlayEndResponse nTopStar */
        nTopStar?: (number|null);

        /** PlayEndResponse nTotalStar */
        nTotalStar?: (number|null);
    }

    /** Represents a PlayEndResponse. */
    class PlayEndResponse implements IPlayEndResponse {

        /**
         * Constructs a new PlayEndResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IPlayEndResponse);

        /** PlayEndResponse gateID. */
        public gateID: number;

        /** PlayEndResponse nTopStar. */
        public nTopStar: number;

        /** PlayEndResponse nTotalStar. */
        public nTotalStar: number;

        /**
         * Creates a new PlayEndResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayEndResponse instance
         */
        public static create(properties?: gameMsg.IPlayEndResponse): gameMsg.PlayEndResponse;

        /**
         * Encodes the specified PlayEndResponse message. Does not implicitly {@link gameMsg.PlayEndResponse.verify|verify} messages.
         * @param message PlayEndResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IPlayEndResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayEndResponse message, length delimited. Does not implicitly {@link gameMsg.PlayEndResponse.verify|verify} messages.
         * @param message PlayEndResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IPlayEndResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayEndResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayEndResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.PlayEndResponse;

        /**
         * Decodes a PlayEndResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayEndResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.PlayEndResponse;

        /**
         * Verifies a PlayEndResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayEndResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayEndResponse
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.PlayEndResponse;

        /**
         * Creates a plain object from a PlayEndResponse message. Also converts values to other types if specified.
         * @param message PlayEndResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.PlayEndResponse, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayEndResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SeeAdRequest. */
    interface ISeeAdRequest {

        /** SeeAdRequest sID */
        sID: string;

        /** SeeAdRequest adID */
        adID: number;
    }

    /** Represents a SeeAdRequest. */
    class SeeAdRequest implements ISeeAdRequest {

        /**
         * Constructs a new SeeAdRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.ISeeAdRequest);

        /** SeeAdRequest sID. */
        public sID: string;

        /** SeeAdRequest adID. */
        public adID: number;

        /**
         * Creates a new SeeAdRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SeeAdRequest instance
         */
        public static create(properties?: gameMsg.ISeeAdRequest): gameMsg.SeeAdRequest;

        /**
         * Encodes the specified SeeAdRequest message. Does not implicitly {@link gameMsg.SeeAdRequest.verify|verify} messages.
         * @param message SeeAdRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.ISeeAdRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SeeAdRequest message, length delimited. Does not implicitly {@link gameMsg.SeeAdRequest.verify|verify} messages.
         * @param message SeeAdRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.ISeeAdRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SeeAdRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SeeAdRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.SeeAdRequest;

        /**
         * Decodes a SeeAdRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SeeAdRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.SeeAdRequest;

        /**
         * Verifies a SeeAdRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SeeAdRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SeeAdRequest
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.SeeAdRequest;

        /**
         * Creates a plain object from a SeeAdRequest message. Also converts values to other types if specified.
         * @param message SeeAdRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.SeeAdRequest, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SeeAdRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SeeAdResponse. */
    interface ISeeAdResponse {

        /** SeeAdResponse nPrompt */
        nPrompt?: (number|null);
    }

    /** Represents a SeeAdResponse. */
    class SeeAdResponse implements ISeeAdResponse {

        /**
         * Constructs a new SeeAdResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.ISeeAdResponse);

        /** SeeAdResponse nPrompt. */
        public nPrompt: number;

        /**
         * Creates a new SeeAdResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SeeAdResponse instance
         */
        public static create(properties?: gameMsg.ISeeAdResponse): gameMsg.SeeAdResponse;

        /**
         * Encodes the specified SeeAdResponse message. Does not implicitly {@link gameMsg.SeeAdResponse.verify|verify} messages.
         * @param message SeeAdResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.ISeeAdResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SeeAdResponse message, length delimited. Does not implicitly {@link gameMsg.SeeAdResponse.verify|verify} messages.
         * @param message SeeAdResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.ISeeAdResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SeeAdResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SeeAdResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.SeeAdResponse;

        /**
         * Decodes a SeeAdResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SeeAdResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.SeeAdResponse;

        /**
         * Verifies a SeeAdResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SeeAdResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SeeAdResponse
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.SeeAdResponse;

        /**
         * Creates a plain object from a SeeAdResponse message. Also converts values to other types if specified.
         * @param message SeeAdResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.SeeAdResponse, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SeeAdResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UsePromptRequest. */
    interface IUsePromptRequest {

        /** UsePromptRequest sID */
        sID: string;
    }

    /** Represents a UsePromptRequest. */
    class UsePromptRequest implements IUsePromptRequest {

        /**
         * Constructs a new UsePromptRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IUsePromptRequest);

        /** UsePromptRequest sID. */
        public sID: string;

        /**
         * Creates a new UsePromptRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UsePromptRequest instance
         */
        public static create(properties?: gameMsg.IUsePromptRequest): gameMsg.UsePromptRequest;

        /**
         * Encodes the specified UsePromptRequest message. Does not implicitly {@link gameMsg.UsePromptRequest.verify|verify} messages.
         * @param message UsePromptRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IUsePromptRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified UsePromptRequest message, length delimited. Does not implicitly {@link gameMsg.UsePromptRequest.verify|verify} messages.
         * @param message UsePromptRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IUsePromptRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UsePromptRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UsePromptRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.UsePromptRequest;

        /**
         * Decodes a UsePromptRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UsePromptRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.UsePromptRequest;

        /**
         * Verifies a UsePromptRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UsePromptRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UsePromptRequest
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.UsePromptRequest;

        /**
         * Creates a plain object from a UsePromptRequest message. Also converts values to other types if specified.
         * @param message UsePromptRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.UsePromptRequest, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UsePromptRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UsePromptResponse. */
    interface IUsePromptResponse {

        /** UsePromptResponse nPrompt */
        nPrompt?: (number|null);
    }

    /** Represents a UsePromptResponse. */
    class UsePromptResponse implements IUsePromptResponse {

        /**
         * Constructs a new UsePromptResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IUsePromptResponse);

        /** UsePromptResponse nPrompt. */
        public nPrompt: number;

        /**
         * Creates a new UsePromptResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UsePromptResponse instance
         */
        public static create(properties?: gameMsg.IUsePromptResponse): gameMsg.UsePromptResponse;

        /**
         * Encodes the specified UsePromptResponse message. Does not implicitly {@link gameMsg.UsePromptResponse.verify|verify} messages.
         * @param message UsePromptResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IUsePromptResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified UsePromptResponse message, length delimited. Does not implicitly {@link gameMsg.UsePromptResponse.verify|verify} messages.
         * @param message UsePromptResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IUsePromptResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UsePromptResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UsePromptResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.UsePromptResponse;

        /**
         * Decodes a UsePromptResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UsePromptResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.UsePromptResponse;

        /**
         * Verifies a UsePromptResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UsePromptResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UsePromptResponse
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.UsePromptResponse;

        /**
         * Creates a plain object from a UsePromptResponse message. Also converts values to other types if specified.
         * @param message UsePromptResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.UsePromptResponse, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UsePromptResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RankData. */
    interface IRankData {

        /** RankData id */
        id: string;

        /** RankData sNick */
        sNick: string;

        /** RankData nRank */
        nRank: number;

        /** RankData starNum */
        starNum: number;
    }

    /** Represents a RankData. */
    class RankData implements IRankData {

        /**
         * Constructs a new RankData.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IRankData);

        /** RankData id. */
        public id: string;

        /** RankData sNick. */
        public sNick: string;

        /** RankData nRank. */
        public nRank: number;

        /** RankData starNum. */
        public starNum: number;

        /**
         * Creates a new RankData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RankData instance
         */
        public static create(properties?: gameMsg.IRankData): gameMsg.RankData;

        /**
         * Encodes the specified RankData message. Does not implicitly {@link gameMsg.RankData.verify|verify} messages.
         * @param message RankData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IRankData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RankData message, length delimited. Does not implicitly {@link gameMsg.RankData.verify|verify} messages.
         * @param message RankData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IRankData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RankData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RankData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.RankData;

        /**
         * Decodes a RankData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RankData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.RankData;

        /**
         * Verifies a RankData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RankData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RankData
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.RankData;

        /**
         * Creates a plain object from a RankData message. Also converts values to other types if specified.
         * @param message RankData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.RankData, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RankData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RankRequest. */
    interface IRankRequest {

        /** RankRequest sID */
        sID: string;
    }

    /** Represents a RankRequest. */
    class RankRequest implements IRankRequest {

        /**
         * Constructs a new RankRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IRankRequest);

        /** RankRequest sID. */
        public sID: string;

        /**
         * Creates a new RankRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RankRequest instance
         */
        public static create(properties?: gameMsg.IRankRequest): gameMsg.RankRequest;

        /**
         * Encodes the specified RankRequest message. Does not implicitly {@link gameMsg.RankRequest.verify|verify} messages.
         * @param message RankRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IRankRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RankRequest message, length delimited. Does not implicitly {@link gameMsg.RankRequest.verify|verify} messages.
         * @param message RankRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IRankRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RankRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RankRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.RankRequest;

        /**
         * Decodes a RankRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RankRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.RankRequest;

        /**
         * Verifies a RankRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RankRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RankRequest
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.RankRequest;

        /**
         * Creates a plain object from a RankRequest message. Also converts values to other types if specified.
         * @param message RankRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.RankRequest, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RankRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RankResponse. */
    interface IRankResponse {

        /** RankResponse rankDatas */
        rankDatas?: (gameMsg.IRankData[]|null);
    }

    /** Represents a RankResponse. */
    class RankResponse implements IRankResponse {

        /**
         * Constructs a new RankResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IRankResponse);

        /** RankResponse rankDatas. */
        public rankDatas: gameMsg.IRankData[];

        /**
         * Creates a new RankResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RankResponse instance
         */
        public static create(properties?: gameMsg.IRankResponse): gameMsg.RankResponse;

        /**
         * Encodes the specified RankResponse message. Does not implicitly {@link gameMsg.RankResponse.verify|verify} messages.
         * @param message RankResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IRankResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RankResponse message, length delimited. Does not implicitly {@link gameMsg.RankResponse.verify|verify} messages.
         * @param message RankResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IRankResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RankResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RankResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.RankResponse;

        /**
         * Decodes a RankResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RankResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.RankResponse;

        /**
         * Verifies a RankResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RankResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RankResponse
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.RankResponse;

        /**
         * Creates a plain object from a RankResponse message. Also converts values to other types if specified.
         * @param message RankResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.RankResponse, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RankResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StartGameRequest. */
    interface IStartGameRequest {

        /** StartGameRequest sID */
        sID: string;

        /** StartGameRequest sRoomID */
        sRoomID: string;
    }

    /** Represents a StartGameRequest. */
    class StartGameRequest implements IStartGameRequest {

        /**
         * Constructs a new StartGameRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IStartGameRequest);

        /** StartGameRequest sID. */
        public sID: string;

        /** StartGameRequest sRoomID. */
        public sRoomID: string;

        /**
         * Creates a new StartGameRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StartGameRequest instance
         */
        public static create(properties?: gameMsg.IStartGameRequest): gameMsg.StartGameRequest;

        /**
         * Encodes the specified StartGameRequest message. Does not implicitly {@link gameMsg.StartGameRequest.verify|verify} messages.
         * @param message StartGameRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IStartGameRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified StartGameRequest message, length delimited. Does not implicitly {@link gameMsg.StartGameRequest.verify|verify} messages.
         * @param message StartGameRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IStartGameRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a StartGameRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StartGameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.StartGameRequest;

        /**
         * Decodes a StartGameRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StartGameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.StartGameRequest;

        /**
         * Verifies a StartGameRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StartGameRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StartGameRequest
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.StartGameRequest;

        /**
         * Creates a plain object from a StartGameRequest message. Also converts values to other types if specified.
         * @param message StartGameRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.StartGameRequest, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StartGameRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StartGameResponse. */
    interface IStartGameResponse {
    }

    /** Represents a StartGameResponse. */
    class StartGameResponse implements IStartGameResponse {

        /**
         * Constructs a new StartGameResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IStartGameResponse);

        /**
         * Creates a new StartGameResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StartGameResponse instance
         */
        public static create(properties?: gameMsg.IStartGameResponse): gameMsg.StartGameResponse;

        /**
         * Encodes the specified StartGameResponse message. Does not implicitly {@link gameMsg.StartGameResponse.verify|verify} messages.
         * @param message StartGameResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IStartGameResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified StartGameResponse message, length delimited. Does not implicitly {@link gameMsg.StartGameResponse.verify|verify} messages.
         * @param message StartGameResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IStartGameResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a StartGameResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StartGameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.StartGameResponse;

        /**
         * Decodes a StartGameResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StartGameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.StartGameResponse;

        /**
         * Verifies a StartGameResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StartGameResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StartGameResponse
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.StartGameResponse;

        /**
         * Creates a plain object from a StartGameResponse message. Also converts values to other types if specified.
         * @param message StartGameResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.StartGameResponse, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StartGameResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StartGameNotify. */
    interface IStartGameNotify {

        /** StartGameNotify sRoomID */
        sRoomID: string;

        /** StartGameNotify nGID */
        nGID: number;
    }

    /** Represents a StartGameNotify. */
    class StartGameNotify implements IStartGameNotify {

        /**
         * Constructs a new StartGameNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IStartGameNotify);

        /** StartGameNotify sRoomID. */
        public sRoomID: string;

        /** StartGameNotify nGID. */
        public nGID: number;

        /**
         * Creates a new StartGameNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StartGameNotify instance
         */
        public static create(properties?: gameMsg.IStartGameNotify): gameMsg.StartGameNotify;

        /**
         * Encodes the specified StartGameNotify message. Does not implicitly {@link gameMsg.StartGameNotify.verify|verify} messages.
         * @param message StartGameNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IStartGameNotify, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified StartGameNotify message, length delimited. Does not implicitly {@link gameMsg.StartGameNotify.verify|verify} messages.
         * @param message StartGameNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IStartGameNotify, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a StartGameNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StartGameNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.StartGameNotify;

        /**
         * Decodes a StartGameNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StartGameNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.StartGameNotify;

        /**
         * Verifies a StartGameNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StartGameNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StartGameNotify
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.StartGameNotify;

        /**
         * Creates a plain object from a StartGameNotify message. Also converts values to other types if specified.
         * @param message StartGameNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.StartGameNotify, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StartGameNotify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TimerGameNotify. */
    interface ITimerGameNotify {

        /** TimerGameNotify sRoomID */
        sRoomID: string;

        /** TimerGameNotify nTime */
        nTime: number;
    }

    /** Represents a TimerGameNotify. */
    class TimerGameNotify implements ITimerGameNotify {

        /**
         * Constructs a new TimerGameNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.ITimerGameNotify);

        /** TimerGameNotify sRoomID. */
        public sRoomID: string;

        /** TimerGameNotify nTime. */
        public nTime: number;

        /**
         * Creates a new TimerGameNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TimerGameNotify instance
         */
        public static create(properties?: gameMsg.ITimerGameNotify): gameMsg.TimerGameNotify;

        /**
         * Encodes the specified TimerGameNotify message. Does not implicitly {@link gameMsg.TimerGameNotify.verify|verify} messages.
         * @param message TimerGameNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.ITimerGameNotify, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified TimerGameNotify message, length delimited. Does not implicitly {@link gameMsg.TimerGameNotify.verify|verify} messages.
         * @param message TimerGameNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.ITimerGameNotify, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TimerGameNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TimerGameNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.TimerGameNotify;

        /**
         * Decodes a TimerGameNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TimerGameNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.TimerGameNotify;

        /**
         * Verifies a TimerGameNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TimerGameNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TimerGameNotify
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.TimerGameNotify;

        /**
         * Creates a plain object from a TimerGameNotify message. Also converts values to other types if specified.
         * @param message TimerGameNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.TimerGameNotify, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TimerGameNotify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MatchGameRequest. */
    interface IMatchGameRequest {

        /** MatchGameRequest sID */
        sID: string;

        /** MatchGameRequest sRoomID */
        sRoomID: string;
    }

    /** Represents a MatchGameRequest. */
    class MatchGameRequest implements IMatchGameRequest {

        /**
         * Constructs a new MatchGameRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IMatchGameRequest);

        /** MatchGameRequest sID. */
        public sID: string;

        /** MatchGameRequest sRoomID. */
        public sRoomID: string;

        /**
         * Creates a new MatchGameRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchGameRequest instance
         */
        public static create(properties?: gameMsg.IMatchGameRequest): gameMsg.MatchGameRequest;

        /**
         * Encodes the specified MatchGameRequest message. Does not implicitly {@link gameMsg.MatchGameRequest.verify|verify} messages.
         * @param message MatchGameRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IMatchGameRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MatchGameRequest message, length delimited. Does not implicitly {@link gameMsg.MatchGameRequest.verify|verify} messages.
         * @param message MatchGameRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IMatchGameRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MatchGameRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchGameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.MatchGameRequest;

        /**
         * Decodes a MatchGameRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MatchGameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.MatchGameRequest;

        /**
         * Verifies a MatchGameRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MatchGameRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MatchGameRequest
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.MatchGameRequest;

        /**
         * Creates a plain object from a MatchGameRequest message. Also converts values to other types if specified.
         * @param message MatchGameRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.MatchGameRequest, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MatchGameRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MatchGameResponse. */
    interface IMatchGameResponse {
    }

    /** Represents a MatchGameResponse. */
    class MatchGameResponse implements IMatchGameResponse {

        /**
         * Constructs a new MatchGameResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IMatchGameResponse);

        /**
         * Creates a new MatchGameResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchGameResponse instance
         */
        public static create(properties?: gameMsg.IMatchGameResponse): gameMsg.MatchGameResponse;

        /**
         * Encodes the specified MatchGameResponse message. Does not implicitly {@link gameMsg.MatchGameResponse.verify|verify} messages.
         * @param message MatchGameResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IMatchGameResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MatchGameResponse message, length delimited. Does not implicitly {@link gameMsg.MatchGameResponse.verify|verify} messages.
         * @param message MatchGameResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IMatchGameResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MatchGameResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchGameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.MatchGameResponse;

        /**
         * Decodes a MatchGameResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MatchGameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.MatchGameResponse;

        /**
         * Verifies a MatchGameResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MatchGameResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MatchGameResponse
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.MatchGameResponse;

        /**
         * Creates a plain object from a MatchGameResponse message. Also converts values to other types if specified.
         * @param message MatchGameResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.MatchGameResponse, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MatchGameResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UseToolRequest. */
    interface IUseToolRequest {

        /** UseToolRequest sID */
        sID: string;

        /** UseToolRequest goodID */
        goodID: string;

        /** UseToolRequest sRoomID */
        sRoomID: string;

        /** UseToolRequest sDID */
        sDID: string;
    }

    /** Represents a UseToolRequest. */
    class UseToolRequest implements IUseToolRequest {

        /**
         * Constructs a new UseToolRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IUseToolRequest);

        /** UseToolRequest sID. */
        public sID: string;

        /** UseToolRequest goodID. */
        public goodID: string;

        /** UseToolRequest sRoomID. */
        public sRoomID: string;

        /** UseToolRequest sDID. */
        public sDID: string;

        /**
         * Creates a new UseToolRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UseToolRequest instance
         */
        public static create(properties?: gameMsg.IUseToolRequest): gameMsg.UseToolRequest;

        /**
         * Encodes the specified UseToolRequest message. Does not implicitly {@link gameMsg.UseToolRequest.verify|verify} messages.
         * @param message UseToolRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IUseToolRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified UseToolRequest message, length delimited. Does not implicitly {@link gameMsg.UseToolRequest.verify|verify} messages.
         * @param message UseToolRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IUseToolRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UseToolRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UseToolRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.UseToolRequest;

        /**
         * Decodes a UseToolRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UseToolRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.UseToolRequest;

        /**
         * Verifies a UseToolRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UseToolRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UseToolRequest
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.UseToolRequest;

        /**
         * Creates a plain object from a UseToolRequest message. Also converts values to other types if specified.
         * @param message UseToolRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.UseToolRequest, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UseToolRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UseToolResponse. */
    interface IUseToolResponse {
    }

    /** Represents a UseToolResponse. */
    class UseToolResponse implements IUseToolResponse {

        /**
         * Constructs a new UseToolResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IUseToolResponse);

        /**
         * Creates a new UseToolResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UseToolResponse instance
         */
        public static create(properties?: gameMsg.IUseToolResponse): gameMsg.UseToolResponse;

        /**
         * Encodes the specified UseToolResponse message. Does not implicitly {@link gameMsg.UseToolResponse.verify|verify} messages.
         * @param message UseToolResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IUseToolResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified UseToolResponse message, length delimited. Does not implicitly {@link gameMsg.UseToolResponse.verify|verify} messages.
         * @param message UseToolResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IUseToolResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UseToolResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UseToolResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.UseToolResponse;

        /**
         * Decodes a UseToolResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UseToolResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.UseToolResponse;

        /**
         * Verifies a UseToolResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UseToolResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UseToolResponse
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.UseToolResponse;

        /**
         * Creates a plain object from a UseToolResponse message. Also converts values to other types if specified.
         * @param message UseToolResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.UseToolResponse, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UseToolResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UseToolNotify. */
    interface IUseToolNotify {

        /** UseToolNotify sID */
        sID: string;

        /** UseToolNotify goodID */
        goodID: string;

        /** UseToolNotify sDID */
        sDID: string;
    }

    /** Represents a UseToolNotify. */
    class UseToolNotify implements IUseToolNotify {

        /**
         * Constructs a new UseToolNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IUseToolNotify);

        /** UseToolNotify sID. */
        public sID: string;

        /** UseToolNotify goodID. */
        public goodID: string;

        /** UseToolNotify sDID. */
        public sDID: string;

        /**
         * Creates a new UseToolNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UseToolNotify instance
         */
        public static create(properties?: gameMsg.IUseToolNotify): gameMsg.UseToolNotify;

        /**
         * Encodes the specified UseToolNotify message. Does not implicitly {@link gameMsg.UseToolNotify.verify|verify} messages.
         * @param message UseToolNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IUseToolNotify, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified UseToolNotify message, length delimited. Does not implicitly {@link gameMsg.UseToolNotify.verify|verify} messages.
         * @param message UseToolNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IUseToolNotify, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UseToolNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UseToolNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.UseToolNotify;

        /**
         * Decodes a UseToolNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UseToolNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.UseToolNotify;

        /**
         * Verifies a UseToolNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UseToolNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UseToolNotify
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.UseToolNotify;

        /**
         * Creates a plain object from a UseToolNotify message. Also converts values to other types if specified.
         * @param message UseToolNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.UseToolNotify, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UseToolNotify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayBlockAddRequest. */
    interface IPlayBlockAddRequest {

        /** PlayBlockAddRequest sID */
        sID: string;

        /** PlayBlockAddRequest sRoomID */
        sRoomID: string;

        /** PlayBlockAddRequest gateID */
        gateID: number;
    }

    /** Represents a PlayBlockAddRequest. */
    class PlayBlockAddRequest implements IPlayBlockAddRequest {

        /**
         * Constructs a new PlayBlockAddRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IPlayBlockAddRequest);

        /** PlayBlockAddRequest sID. */
        public sID: string;

        /** PlayBlockAddRequest sRoomID. */
        public sRoomID: string;

        /** PlayBlockAddRequest gateID. */
        public gateID: number;

        /**
         * Creates a new PlayBlockAddRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayBlockAddRequest instance
         */
        public static create(properties?: gameMsg.IPlayBlockAddRequest): gameMsg.PlayBlockAddRequest;

        /**
         * Encodes the specified PlayBlockAddRequest message. Does not implicitly {@link gameMsg.PlayBlockAddRequest.verify|verify} messages.
         * @param message PlayBlockAddRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IPlayBlockAddRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayBlockAddRequest message, length delimited. Does not implicitly {@link gameMsg.PlayBlockAddRequest.verify|verify} messages.
         * @param message PlayBlockAddRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IPlayBlockAddRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayBlockAddRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayBlockAddRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.PlayBlockAddRequest;

        /**
         * Decodes a PlayBlockAddRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayBlockAddRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.PlayBlockAddRequest;

        /**
         * Verifies a PlayBlockAddRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayBlockAddRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayBlockAddRequest
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.PlayBlockAddRequest;

        /**
         * Creates a plain object from a PlayBlockAddRequest message. Also converts values to other types if specified.
         * @param message PlayBlockAddRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.PlayBlockAddRequest, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayBlockAddRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayBlockAddResponse. */
    interface IPlayBlockAddResponse {
    }

    /** Represents a PlayBlockAddResponse. */
    class PlayBlockAddResponse implements IPlayBlockAddResponse {

        /**
         * Constructs a new PlayBlockAddResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IPlayBlockAddResponse);

        /**
         * Creates a new PlayBlockAddResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayBlockAddResponse instance
         */
        public static create(properties?: gameMsg.IPlayBlockAddResponse): gameMsg.PlayBlockAddResponse;

        /**
         * Encodes the specified PlayBlockAddResponse message. Does not implicitly {@link gameMsg.PlayBlockAddResponse.verify|verify} messages.
         * @param message PlayBlockAddResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IPlayBlockAddResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayBlockAddResponse message, length delimited. Does not implicitly {@link gameMsg.PlayBlockAddResponse.verify|verify} messages.
         * @param message PlayBlockAddResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IPlayBlockAddResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayBlockAddResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayBlockAddResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.PlayBlockAddResponse;

        /**
         * Decodes a PlayBlockAddResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayBlockAddResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.PlayBlockAddResponse;

        /**
         * Verifies a PlayBlockAddResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayBlockAddResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayBlockAddResponse
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.PlayBlockAddResponse;

        /**
         * Creates a plain object from a PlayBlockAddResponse message. Also converts values to other types if specified.
         * @param message PlayBlockAddResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.PlayBlockAddResponse, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayBlockAddResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayBlockDeleteRequest. */
    interface IPlayBlockDeleteRequest {

        /** PlayBlockDeleteRequest sID */
        sID: string;

        /** PlayBlockDeleteRequest sRoomID */
        sRoomID: string;

        /** PlayBlockDeleteRequest gateID */
        gateID: number;
    }

    /** Represents a PlayBlockDeleteRequest. */
    class PlayBlockDeleteRequest implements IPlayBlockDeleteRequest {

        /**
         * Constructs a new PlayBlockDeleteRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IPlayBlockDeleteRequest);

        /** PlayBlockDeleteRequest sID. */
        public sID: string;

        /** PlayBlockDeleteRequest sRoomID. */
        public sRoomID: string;

        /** PlayBlockDeleteRequest gateID. */
        public gateID: number;

        /**
         * Creates a new PlayBlockDeleteRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayBlockDeleteRequest instance
         */
        public static create(properties?: gameMsg.IPlayBlockDeleteRequest): gameMsg.PlayBlockDeleteRequest;

        /**
         * Encodes the specified PlayBlockDeleteRequest message. Does not implicitly {@link gameMsg.PlayBlockDeleteRequest.verify|verify} messages.
         * @param message PlayBlockDeleteRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IPlayBlockDeleteRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayBlockDeleteRequest message, length delimited. Does not implicitly {@link gameMsg.PlayBlockDeleteRequest.verify|verify} messages.
         * @param message PlayBlockDeleteRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IPlayBlockDeleteRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayBlockDeleteRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayBlockDeleteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.PlayBlockDeleteRequest;

        /**
         * Decodes a PlayBlockDeleteRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayBlockDeleteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.PlayBlockDeleteRequest;

        /**
         * Verifies a PlayBlockDeleteRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayBlockDeleteRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayBlockDeleteRequest
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.PlayBlockDeleteRequest;

        /**
         * Creates a plain object from a PlayBlockDeleteRequest message. Also converts values to other types if specified.
         * @param message PlayBlockDeleteRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.PlayBlockDeleteRequest, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayBlockDeleteRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayBlockDeleteResponse. */
    interface IPlayBlockDeleteResponse {
    }

    /** Represents a PlayBlockDeleteResponse. */
    class PlayBlockDeleteResponse implements IPlayBlockDeleteResponse {

        /**
         * Constructs a new PlayBlockDeleteResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IPlayBlockDeleteResponse);

        /**
         * Creates a new PlayBlockDeleteResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayBlockDeleteResponse instance
         */
        public static create(properties?: gameMsg.IPlayBlockDeleteResponse): gameMsg.PlayBlockDeleteResponse;

        /**
         * Encodes the specified PlayBlockDeleteResponse message. Does not implicitly {@link gameMsg.PlayBlockDeleteResponse.verify|verify} messages.
         * @param message PlayBlockDeleteResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IPlayBlockDeleteResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayBlockDeleteResponse message, length delimited. Does not implicitly {@link gameMsg.PlayBlockDeleteResponse.verify|verify} messages.
         * @param message PlayBlockDeleteResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IPlayBlockDeleteResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayBlockDeleteResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayBlockDeleteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.PlayBlockDeleteResponse;

        /**
         * Decodes a PlayBlockDeleteResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayBlockDeleteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.PlayBlockDeleteResponse;

        /**
         * Verifies a PlayBlockDeleteResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayBlockDeleteResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayBlockDeleteResponse
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.PlayBlockDeleteResponse;

        /**
         * Creates a plain object from a PlayBlockDeleteResponse message. Also converts values to other types if specified.
         * @param message PlayBlockDeleteResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.PlayBlockDeleteResponse, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayBlockDeleteResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayBlockNotify. */
    interface IPlayBlockNotify {

        /** PlayBlockNotify sID */
        sID: string;

        /** PlayBlockNotify sRoomID */
        sRoomID: string;

        /** PlayBlockNotify gateID */
        gateID: number;

        /** PlayBlockNotify isAdd */
        isAdd: boolean;
    }

    /** Represents a PlayBlockNotify. */
    class PlayBlockNotify implements IPlayBlockNotify {

        /**
         * Constructs a new PlayBlockNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameMsg.IPlayBlockNotify);

        /** PlayBlockNotify sID. */
        public sID: string;

        /** PlayBlockNotify sRoomID. */
        public sRoomID: string;

        /** PlayBlockNotify gateID. */
        public gateID: number;

        /** PlayBlockNotify isAdd. */
        public isAdd: boolean;

        /**
         * Creates a new PlayBlockNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayBlockNotify instance
         */
        public static create(properties?: gameMsg.IPlayBlockNotify): gameMsg.PlayBlockNotify;

        /**
         * Encodes the specified PlayBlockNotify message. Does not implicitly {@link gameMsg.PlayBlockNotify.verify|verify} messages.
         * @param message PlayBlockNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameMsg.IPlayBlockNotify, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayBlockNotify message, length delimited. Does not implicitly {@link gameMsg.PlayBlockNotify.verify|verify} messages.
         * @param message PlayBlockNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameMsg.IPlayBlockNotify, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayBlockNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayBlockNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameMsg.PlayBlockNotify;

        /**
         * Decodes a PlayBlockNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayBlockNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameMsg.PlayBlockNotify;

        /**
         * Verifies a PlayBlockNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayBlockNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayBlockNotify
         */
        public static fromObject(object: { [k: string]: any }): gameMsg.PlayBlockNotify;

        /**
         * Creates a plain object from a PlayBlockNotify message. Also converts values to other types if specified.
         * @param message PlayBlockNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameMsg.PlayBlockNotify, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayBlockNotify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
