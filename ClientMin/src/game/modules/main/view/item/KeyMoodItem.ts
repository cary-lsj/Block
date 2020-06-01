module game {
	export class KeyMoodItem extends MoodBase{
		public constructor() {
			super();
		}
		protected childrenCreated(): void {
			this.alpha=0.3;
        }

		public dataChanged(): void {
			super.dataChanged();
        }
	}
}