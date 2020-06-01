var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var game;
(function (game) {
    /**
     * 网络数据字节流
     */
    var BinaryBuffer = (function (_super) {
        __extends(BinaryBuffer, _super);
        function BinaryBuffer(buffer, bufferExtSize) {
            return _super.call(this, buffer, bufferExtSize) || this;
        }
        BinaryBuffer.prototype.validate = function (len) {
            var bl = this._bytes.length;
            if (bl > 0 && this._position + len <= bl) {
                return true;
            }
            else {
                if (this.vo) {
                    // this.vo.decodeError = true;
                }
                egret.$error(1025);
            }
        };
        BinaryBuffer.prototype.readLong = function () {
            var high, low;
            if (this.$endian == 1 /* BIG_ENDIAN */) {
                high = this.readUnsignedInt();
                low = this.readUnsignedInt();
            }
            else {
                low = this.readUnsignedInt();
                high = this.readUnsignedInt();
            }
            return this.toNumber(high, low);
        };
        BinaryBuffer.prototype.toNumber = function (high, low, unsigned) {
            if (!unsigned && high >>> 31) {
                low = ~low + 1 >>> 0;
                high = ~high >>> 0;
                if (!low) {
                    high = high + 1 >>> 0;
                }
                return -(low + high * 4294967296);
            }
            return low + high * 4294967296;
        };
        BinaryBuffer.prototype.writeLong = function (value) {
            var high = 0;
            var low = 0;
            if (value !== 0) {
                var sign = value < 0;
                if (sign) {
                    value = -value;
                }
                low = value >>> 0;
                high = (value - low) / 4294967296 >>> 0;
                if (sign) {
                    high = ~high >>> 0;
                    low = ~low >>> 0;
                    if (++low > 4294967295) {
                        low = 0;
                        if (++high > 4294967295) {
                            high = 0;
                        }
                    }
                }
            }
            if (this.$endian == 1 /* BIG_ENDIAN */) {
                this.writeUnsignedInt(high);
                this.writeUnsignedInt(low);
            }
            else {
                this.writeUnsignedInt(low);
                this.writeUnsignedInt(high);
            }
        };
        BinaryBuffer.prototype.readByteArray = function () {
            var len = this.readShort();
            var result = [];
            for (var i = 0; i < len; i++) {
                result[i] = this.readByte();
            }
            return result;
        };
        BinaryBuffer.prototype.writeByteArray = function (value) {
            if (!value) {
                this.writeShort(0);
                return;
            }
            this.writeShort(value.length);
            for (var i = 0; i < value.length; i++) {
                this.writeByte(value[i]);
            }
        };
        BinaryBuffer.prototype.readShortArray = function () {
            var len = this.readShort();
            var result = [];
            for (var i = 0; i < len; i++) {
                result[i] = this.readShort();
            }
            return result;
        };
        BinaryBuffer.prototype.writeShortArray = function (value) {
            if (!value) {
                this.writeShort(0);
                return;
            }
            this.writeShort(value.length);
            for (var i = 0; i < value.length; i++) {
                this.writeShort(value[i]);
            }
        };
        BinaryBuffer.prototype.readIntArray = function () {
            var len = this.readShort();
            var result = [];
            for (var i = 0; i < len; i++) {
                result[i] = this.readInt();
            }
            return result;
        };
        BinaryBuffer.prototype.writeIntArray = function (value) {
            if (!value) {
                this.writeShort(0);
                return;
            }
            this.writeShort(value.length);
            for (var i = 0; i < value.length; i++) {
                this.writeInt(value[i]);
            }
        };
        BinaryBuffer.prototype.readLongArray = function () {
            var len = this.readShort();
            var result = [];
            for (var i = 0; i < len; i++) {
                result[i] = this.readLong();
            }
            return result;
        };
        BinaryBuffer.prototype.writeLongArray = function (value) {
            if (!value) {
                this.writeShort(0);
                return;
            }
            this.writeShort(value.length);
            for (var i = 0; i < value.length; i++) {
                this.writeLong(value[i]);
            }
        };
        BinaryBuffer.prototype.readFloatArray = function () {
            var len = this.readShort();
            var result = [];
            for (var i = 0; i < len; i++) {
                result[i] = this.readFloat();
            }
            return result;
        };
        BinaryBuffer.prototype.writeFloatArray = function (value) {
            if (!value) {
                this.writeShort(0);
                return;
            }
            this.writeShort(value.length);
            for (var i = 0; i < value.length; i++) {
                this.writeFloat(value[i]);
            }
        };
        BinaryBuffer.prototype.readUTFArray = function () {
            var len = this.readShort();
            var result = [];
            for (var i = 0; i < len; i++) {
                result[i] = this.readUTF();
            }
            return result;
        };
        BinaryBuffer.prototype.writeUTFArray = function (value) {
            if (!value) {
                this.writeShort(0);
                return;
            }
            this.writeShort(value.length);
            for (var i = 0; i < value.length; i++) {
                this.writeUTF(value[i]);
            }
        };
        return BinaryBuffer;
    }(egret.ByteArray));
    game.BinaryBuffer = BinaryBuffer;
    __reflect(BinaryBuffer.prototype, "game.BinaryBuffer");
})(game || (game = {}));
