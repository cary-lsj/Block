namespace game {
	/**
	 * 网络数据字节流
	 */
	export class BinaryBuffer extends egret.ByteArray {
		public vo: any;

		public constructor(buffer?: ArrayBuffer | Uint8Array, bufferExtSize?: number) {
			super(buffer, bufferExtSize);
		}

		public validate(len: number): boolean {
			let bl = this._bytes.length;
			if (bl > 0 && this._position + len <= bl) {
				return true;
			}
			else {
				if (this.vo) {
					// this.vo.decodeError = true;
				}
				egret.$error(1025);
			}
		}

		public readLong(): number {
			let high: number, low: number;
			if (this.$endian == egret.EndianConst.BIG_ENDIAN) {
				high = this.readUnsignedInt();
				low = this.readUnsignedInt();
			} else {
				low = this.readUnsignedInt();
				high = this.readUnsignedInt();
			}
			return this.toNumber(high, low);
		}

		private toNumber(high: number, low: number, unsigned?: boolean): number {
			if (!unsigned && high >>> 31) {
				low = ~low + 1 >>> 0;
				high = ~high >>> 0;
				if (!low) {
					high = high + 1 >>> 0;
				}
				return -(low + high * 4294967296);
			}
			return low + high * 4294967296;
		}

		public writeLong(value: number): void {
			let high = 0;
			let low = 0;
			if (value !== 0) {
				let sign = value < 0;
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
			if (this.$endian == egret.EndianConst.BIG_ENDIAN) {
				this.writeUnsignedInt(high);
				this.writeUnsignedInt(low);
			} else {
				this.writeUnsignedInt(low);
				this.writeUnsignedInt(high);
			}
		}

		public readByteArray(): number[] {
			let len: number = this.readShort();
			let result: number[] = [];
			for (let i: number = 0; i < len; i++) {
				result[i] = this.readByte();
			}
			return result;
		}

		public writeByteArray(value: number[]): void {
			if (!value) {
				this.writeShort(0);
				return;
			}
			this.writeShort(value.length);
			for (let i: number = 0; i < value.length; i++) {
				this.writeByte(value[i]);
			}
		}

		public readShortArray(): number[] {
			let len: number = this.readShort();
			let result: number[] = [];
			for (let i: number = 0; i < len; i++) {
				result[i] = this.readShort();
			}
			return result;
		}

		public writeShortArray(value: number[]): void {
			if (!value) {
				this.writeShort(0);
				return;
			}
			this.writeShort(value.length);
			for (let i: number = 0; i < value.length; i++) {
				this.writeShort(value[i]);
			}
		}

		public readIntArray(): number[] {
			let len: number = this.readShort();
			let result: number[] = [];
			for (let i: number = 0; i < len; i++) {
				result[i] = this.readInt();
			}
			return result;
		}

		public writeIntArray(value: number[]): void {
			if (!value) {
				this.writeShort(0);
				return;
			}
			this.writeShort(value.length);
			for (let i: number = 0; i < value.length; i++) {
				this.writeInt(value[i]);
			}
		}

		public readLongArray(): number[] {
			let len: number = this.readShort();
			let result: number[] = [];
			for (let i: number = 0; i < len; i++) {
				result[i] = this.readLong();
			}
			return result;
		}

		public writeLongArray(value: number[]): void {
			if (!value) {
				this.writeShort(0);
				return;
			}
			this.writeShort(value.length);
			for (let i: number = 0; i < value.length; i++) {
				this.writeLong(value[i]);
			}
		}

		public readFloatArray(): number[] {
			let len: number = this.readShort();
			let result: number[] = [];
			for (let i: number = 0; i < len; i++) {
				result[i] = this.readFloat();
			}
			return result;
		}

		public writeFloatArray(value: number[]): void {
			if (!value) {
				this.writeShort(0);
				return;
			}
			this.writeShort(value.length);
			for (let i: number = 0; i < value.length; i++) {
				this.writeFloat(value[i]);
			}
		}

		public readUTFArray(): string[] {
			let len: number = this.readShort();
			let result: string[] = [];
			for (let i: number = 0; i < len; i++) {
				result[i] = this.readUTF();
			}
			return result;
		}

		public writeUTFArray(value: string[]): void {
			if (!value) {
				this.writeShort(0);
				return;
			}
			this.writeShort(value.length);
			for (let i: number = 0; i < value.length; i++) {
				this.writeUTF(value[i]);
			}
		}
	}
}
